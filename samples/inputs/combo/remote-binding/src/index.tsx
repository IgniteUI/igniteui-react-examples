import { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
    IgrButton,
    IgrCombo,
    IgrComboChangeEventArgs,
    IgrLinearProgress,
    IgrSwitch,
} from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './index.css';
import { buildProductsUrl, delay, fetchProducts, Product, ProductsQuery } from './ProductsService';

const PAGE_SIZE = 20;
const DEBOUNCE_MS = 300;
const SLOW_NETWORK_MS = 1500;
const MAX_LOG_ENTRIES = 200;

type Status = 'idle' | 'loading' | 'error';

type LogKind = 'event' | 'input' | 'info' | 'request' | 'response' | 'data' | 'abort' | 'error';

interface LogEntry {
    id: number;
    time: Date;
    kind: LogKind;
    message: string;
    /** Secondary line, e.g. the request URL. */
    detail?: string;
}

let nextLogId = 0;

const createEntry = (kind: LogKind, message: string, detail?: string): LogEntry => ({
    id: nextLogId++,
    time: new Date(),
    kind,
    message,
    detail,
});

const formatTime = (time: Date) =>
    `${time.toLocaleTimeString('en-GB', { hour12: false })}.${String(time.getMilliseconds()).padStart(3, '0')}`;

export default function ComboRemoteBinding() {
    const comboRef = useRef<IgrCombo>(null);
    const logRef = useRef<HTMLOListElement>(null);

    // What the combo renders. The remote results, plus any selected products they don't contain.
    const [data, setData] = useState<Product[]>([]);
    const [search, setSearch] = useState('');
    const [loaded, setLoaded] = useState(0);
    const [total, setTotal] = useState<number | null>(null);
    const [status, setStatus] = useState<Status>('idle');
    const [slowNetwork, setSlowNetwork] = useState(false);
    const [failRequests, setFailRequests] = useState(false);
    const [entries, setEntries] = useState<LogEntry[]>(() => [
        createEntry('info', 'Ready. Open the combo to load the first page of products.'),
    ]);

    // Read inside async callbacks, so they live in refs rather than state.
    const results = useRef<Product[]>([]);
    const selected = useRef(new Map<number, Product>());
    const appliedSearch = useRef('');
    const lastQuery = useRef<ProductsQuery | null>(null);
    const inFlight = useRef<AbortController | null>(null);
    const debounceTimer = useRef<number | undefined>(undefined);
    const simulation = useRef({ slowNetwork: false, failRequests: false });

    const log = useCallback((kind: LogKind, message: string, detail?: string) => {
        setEntries(prev => [...prev, createEntry(kind, message, detail)].slice(-MAX_LOG_ENTRIES));
    }, []);

    const load = useCallback(async (query: ProductsQuery) => {
        if (inFlight.current) {
            inFlight.current.abort();
            log('abort', 'Cancelled the request in flight: its results would be stale');
        }

        const controller = new AbortController();
        inFlight.current = controller;
        lastQuery.current = query;

        const url = buildProductsUrl(query);
        const page = query.skip / query.top + 1;
        log('request', `GET page ${page} of products${query.search ? ` matching "${query.search}"` : ''}`, decodeURIComponent(url));
        setStatus('loading');
        const started = performance.now();
        const elapsed = () => Math.round(performance.now() - started);

        try {
            if (simulation.current.slowNetwork) {
                log('info', `Slow network: holding the request for ${SLOW_NETWORK_MS / 1000} s`);
                await delay(SLOW_NETWORK_MS, controller.signal);
            }
            if (simulation.current.failRequests) {
                throw new Error('Simulated failure (HTTP 500 Internal Server Error)');
            }

            const result = await fetchProducts(url, controller.signal);
            const rows = query.skip === 0 ? result.items : [...results.current, ...result.items];
            results.current = rows;
            log('response', `200 OK in ${elapsed()} ms: ${result.items.length} products, ${rows.length} of ${result.total} loaded`);

            // A selected product missing from the new results stays in the data:
            // the combo drops a selected value it can't find in its data.
            const ids = new Set(rows.map(p => p.ProductID));
            const kept = [...selected.current.values()].filter(p => !ids.has(p.ProductID));
            setData([...kept, ...rows]);
            setLoaded(rows.length);
            setTotal(result.total);
            setStatus('idle');
            log('data', `Bound ${rows.length + kept.length} items to the combo` +
                (kept.length ? `, ${kept.length} of them selected earlier and kept so the selection survives` : ''));
        } catch (error) {
            // The request that aborted this one has already logged it.
            if (controller.signal.aborted) return;
            setStatus('error');
            log('error', `Request failed after ${elapsed()} ms: ${(error as Error).message}`);
        } finally {
            if (inFlight.current === controller) {
                inFlight.current = null;
            }
        }
    }, [log]);

    // The combo has no event of its own for its search input, but the input's
    // igcInput event bubbles out of the combo's shadow DOM.
    useEffect(() => {
        const combo = comboRef.current;
        if (!combo) return;

        const handleSearchInput = (event: Event) => {
            const text = (event as CustomEvent<string>).detail;
            const term = text.trim();
            log('input', `Search input: "${text}"`);

            window.clearTimeout(debounceTimer.current);
            debounceTimer.current = window.setTimeout(() => {
                if (term === appliedSearch.current) {
                    log('info', `Typing paused, and the results for "${term}" are already loaded: no request`);
                    return;
                }
                log('info', `Typing paused for ${DEBOUNCE_MS} ms: searching on the server`);
                appliedSearch.current = term;
                setSearch(term);
                void load({ search: term, skip: 0, top: PAGE_SIZE });
            }, DEBOUNCE_MS);
        };

        combo.addEventListener('igcInput', handleSearchInput);
        return () => combo.removeEventListener('igcInput', handleSearchInput);
    }, [load, log]);

    useEffect(() => () => {
        window.clearTimeout(debounceTimer.current);
        inFlight.current?.abort();
    }, []);

    // Keep the newest entry in view.
    useEffect(() => {
        const list = logRef.current;
        if (list) {
            list.scrollTop = list.scrollHeight;
        }
    }, [entries]);

    const handleOpening = () => {
        log('event', 'Dropdown opening');
        // Nothing is loaded until the first open, and a failed first load retries on the next one.
        if (total === null && !inFlight.current) {
            log('info', 'Nothing loaded yet: requesting the first page');
            void load({ search: appliedSearch.current, skip: 0, top: PAGE_SIZE });
        }
    };

    const handleChange = (event: IgrComboChangeEventArgs) => {
        const { newValue, type } = event.detail;
        const items = event.detail.items as Product[];

        if (newValue.length === 0) {
            selected.current.clear();
            log('event', 'Selection cleared');
            return;
        }

        for (const item of items) {
            if (type === 'deselection') {
                selected.current.delete(item.ProductID);
            } else {
                selected.current.set(item.ProductID, item);
            }
        }
        const names = items.map(p => p.ProductName).join(', ');
        log('event', `${type === 'deselection' ? 'Deselected' : 'Selected'} ${names} (${newValue.length} selected)`);
    };

    const loadMore = () => {
        log('event', 'Load more clicked');
        void load({ search: appliedSearch.current, skip: results.current.length, top: PAGE_SIZE });
    };

    const retry = () => {
        log('event', 'Retry clicked');
        if (lastQuery.current) {
            void load(lastQuery.current);
        }
    };

    const emptyMessage =
        status === 'loading' ? 'Loading products…' :
        status === 'error' ? 'Couldn’t load the products.' :
        total === 0 ? `No products match "${search}".` :
        'No matching products.';

    return (
        <div className="container sample">
            <IgrCombo
                ref={comboRef}
                label="Products"
                placeholder="Pick products"
                placeholderSearch="Search the server"
                valueKey="ProductID"
                displayKey="ProductName"
                data={data}
                onOpening={handleOpening}
                onClosed={() => log('event', 'Dropdown closed')}
                onChange={handleChange}>
                {status === 'loading' && (
                    <div slot="header" className="combo-progress">
                        <IgrLinearProgress indeterminate hideLabel />
                    </div>
                )}
                <div slot="empty" className="combo-empty">{emptyMessage}</div>
                {(total !== null || status === 'error') && (
                    <div slot="footer" className="combo-footer">
                        <span className="combo-footer-text">
                            {status === 'loading' ? 'Loading…' :
                             status === 'error' ? 'The request failed.' :
                             `${loaded} of ${total} loaded`}
                        </span>
                        {status === 'error' && (
                            <IgrButton variant="flat" onClick={retry}>Retry</IgrButton>
                        )}
                        {status === 'idle' && total !== null && loaded < total && (
                            <IgrButton variant="flat" onClick={loadMore}>Load more</IgrButton>
                        )}
                    </div>
                )}
            </IgrCombo>

            <section className="log">
                <header className="log-header">
                    <h2 className="log-title">Background operations</h2>
                    <div className="log-options">
                        <IgrSwitch checked={slowNetwork} onChange={e => {
                            simulation.current.slowNetwork = e.detail.checked;
                            setSlowNetwork(e.detail.checked);
                        }}>
                            <span>Slow network</span>
                        </IgrSwitch>
                        <IgrSwitch checked={failRequests} onChange={e => {
                            simulation.current.failRequests = e.detail.checked;
                            setFailRequests(e.detail.checked);
                        }}>
                            <span>Fail requests</span>
                        </IgrSwitch>
                        <IgrButton variant="flat" onClick={() => setEntries([])}>Clear</IgrButton>
                    </div>
                </header>
                <ol className="log-entries" ref={logRef} role="log" aria-label="Background operations">
                    {entries.map(entry => (
                        <li key={entry.id} className={`log-entry log-entry--${entry.kind}`}>
                            <time className="log-time" dateTime={entry.time.toISOString()}>{formatTime(entry.time)}</time>
                            <span className="log-kind">{entry.kind}</span>
                            <span className="log-message">
                                {entry.message}
                                {entry.detail && <code className="log-detail">{entry.detail}</code>}
                            </span>
                        </li>
                    ))}
                </ol>
            </section>
        </div>
    );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<ComboRemoteBinding />);
