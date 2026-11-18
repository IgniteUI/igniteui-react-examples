import { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { IgrBadge, IgrCombo, IgrLinearProgress, IgrTooltip } from 'igniteui-react';
import { ComboDataPage, ComboDataRequest, useComboDataSource } from 'igniteui-react/extras/combo-data-source';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './index.css';

interface Product {
    ProductID: number;
    ProductName: string;
}

type RequestStatus = 'pending' | 'done' | 'cancelled' | 'error';

interface LogEntry {
    id: number;
    title: string;
    status: RequestStatus;
    /** The short result on the right: "200 · 20 items · count 77", "pending…" or "cancelled". */
    result: string;
    /** The request URL. */
    detail: string;
}

/** The properties of the combo that the binding sets, as the state panel shows them. */
interface ComboState {
    loaded: number;
    total?: number;
    loading: boolean;
    /** The selected ProductIDs, sorted. */
    value: number[];
}

const SERVICE_URL = 'https://services.odata.org/V4/Northwind/Northwind.svc/Products';
/** The service sends up to 20 products per request. */
const PAGE_SIZE = 20;
const LOG_SIZE = 4;
/** Up to this many IDs fit on the value row of the state panel. */
const INLINE_SELECTION = 5;
/** About three lines of IDs in the selection box of the state panel. */
const SELECTION_CHARS = 130;

const sameState = (a: ComboState, b: ComboState) =>
    a.loaded === b.loaded && a.total === b.total && a.loading === b.loading
    && a.value.length === b.value.length && a.value.every((id, i) => id === b.value[i]);

export default function ComboRemoteBinding() {
    const comboRef = useRef<IgrCombo | null>(null);
    const [combo, setCombo] = useState<ComboState>({ loaded: 0, loading: false, value: [] });
    const [log, setLog] = useState<LogEntry[]>([]);
    /** The search text of the items in `data`. */
    const [loadedSearch, setLoadedSearch] = useState('');
    /** The items of the next page while it loads. */
    const [loadingRange, setLoadingRange] = useState<{ from: number; to: number } | null>(null);
    /** The event that loads the next first page. */
    const trigger = useRef('init · refresh()');
    const lastId = useRef(0);
    /** The latest request. A request that the binding aborts for a newer one does not change the footer. */
    const latest = useRef(0);

    const updateEntry = (id: number, change: Partial<LogEntry>) =>
        setLog((entries) => entries.map((entry) => (entry.id === id ? { ...entry, ...change } : entry)));

    /** Loads one page of products from the OData service. */
    const load = async ({ searchText, startIndex, count }: ComboDataRequest, signal: AbortSignal): Promise<ComboDataPage<Product>> => {
        // OData doubles a single quote in a string, as in "Chef Anton's".
        const filter = searchText ? `contains(ProductName, '${searchText.replace(/'/g, "''")}')` : '';
        const query = `$skip=${startIndex}&$top=${count}&$count=true`;

        // Only onDataRequest asks for a page after the first one.
        const id = latest.current = ++lastId.current;
        const entry: LogEntry = {
            id,
            title: startIndex ? 'onDataRequest · load()' : trigger.current,
            status: 'pending',
            result: 'pending…',
            detail: `GET /Products?${query}${filter ? `&$filter=${filter}` : ''}`
        };
        setLog((entries) => [...entries, entry].slice(-LOG_SIZE));
        const total = comboRef.current?.totalItemCount ?? startIndex + count;
        setLoadingRange(startIndex ? { from: startIndex + 1, to: Math.min(startIndex + count, total) } : null);

        let status = 0;
        try {
            const response = await fetch(`${SERVICE_URL}?${query}${filter ? `&$filter=${encodeURIComponent(filter)}` : ''}`, { signal });
            status = response.status;
            if (!response.ok) {
                throw new Error(`The service responded with ${status}.`);
            }

            const data = await response.json();
            const items: Product[] = data.value;
            const totalCount: number = data['@odata.count'];

            // A first page sets the total, and a next page adds to the loaded items.
            updateEntry(id, {
                status: 'done',
                result: `200 · ${items.length} ${items.length === 1 ? 'item' : 'items'}${startIndex ? '' : ` · count ${totalCount}`}`
            });
            if (!startIndex) {
                setLoadedSearch(searchText);
            }
            return { items, totalCount };
        } catch (error) {
            updateEntry(id, {
                status: signal.aborted ? 'cancelled' : 'error',
                result: signal.aborted ? 'cancelled' : status ? `${status} · failed` : 'failed'
            });
            throw error;
        } finally {
            if (id === latest.current) {
                setLoadingRange(null);
            }
        }
    };

    // The hook switches the combo to remote filtering. It loads the first page of a search when the typing pauses,
    // appends the next page on onDataRequest, and aborts a request that a newer search makes stale. It calls the load
    // of the latest render, so a new load on each render needs no useCallback.
    const products = useComboDataSource<Product>({ load }, { pageSize: PAGE_SIZE });

    // The combo takes one ref, so this one keeps the element for the panel and passes it to the hook.
    const setComboRef = useCallback((element: IgrCombo | null) => {
        comboRef.current = element;
        products.ref(element);
    }, [products.ref]);

    // The binding sets data, totalItemCount and loading, so the panel reads them after each update of the combo.
    useEffect(() => {
        const element = comboRef.current!;
        const panel = {
            hostUpdated: () => {
                const next: ComboState = {
                    loaded: element.data.length,
                    total: element.totalItemCount,
                    loading: element.loading,
                    value: [...(element.value as number[])].sort((a, b) => a - b)
                };
                setCombo((current) => (sameState(current, next) ? current : next));
            }
        };
        element.addController(panel);
        return () => element.removeController(panel);
    }, []);

    // The first page loads now, so the total shows before the list opens.
    useEffect(() => {
        void products.refresh();
    }, [products]);

    // The combo adds these listeners before the hook binds it, so each one names its event before the binding loads.
    const onOpening = () => {
        trigger.current = 'onOpening · load()';
    };
    const onSearchInput = ({ detail }: CustomEvent<{ searchText: string }>) => {
        const text = detail.searchText.trim();
        trigger.current = `onSearchInput · load(${text ? `"${text}"` : ''})`;
    };

    const { loaded, total, loading, value } = combo;

    // A selection too long for its row is listed below it, up to about three lines.
    let selectionList = '[';
    let shown = 0;
    for (const id of value) {
        const next = `${shown ? ', ' : ''}${id}`;
        if (selectionList.length + next.length > SELECTION_CHARS) {
            break;
        }
        selectionList += next;
        shown++;
    }
    const hiddenCount = value.length - shown;

    // The dropdown footer: the page being loaded, and how much of the data is loaded.
    let footerText: string;
    if (!total) {
        footerText = loadedSearch ? `No products match "${loadedSearch}"` : 'No products';
    } else if (loadedSearch) {
        footerText = `Loaded 1–${loaded} of ${total} matches`;
    } else if (loadingRange) {
        footerText = `Loaded 1–${loaded} of ${total} · loading ${loadingRange.from}–${loadingRange.to}`;
    } else {
        footerText = loaded < total ? `Loaded 1–${loaded} of ${total} · more on scroll` : `Loaded 1–${loaded} of ${total}`;
    }

    const stateRows: [string, string][] = [
        ['data.length', `${loaded}`],
        ['totalItemCount', `${total ?? '—'}`],
        ['loading', `${loading}`],
        ['searchText', loadedSearch ? `"${loadedSearch}"` : '—'],
        ['value (ProductID)', value.length > INLINE_SELECTION ? `${value.length} items` : `[${value.join(', ')}]`]
    ];

    return (
        <div className="sample remote-binding">
            <div className="combo-column">
                <IgrCombo
                    ref={setComboRef}
                    outlined
                    label="Products"
                    placeholder="Pick products"
                    placeholderSearch="Search…"
                    valueKey="ProductID"
                    displayKey="ProductName"
                    onOpening={onOpening}
                    onSearchInput={onSearchInput}
                >
                    {/* The hint is in the combo only with a selection, so that the combo has no empty helper row. */}
                    {value.length > 0 && (
                        <span slot="helper-text">{value.length} selected · kept by ProductID across searches</span>
                    )}

                    <div slot="footer">
                        {loadingRange && (
                            <div className="loading-chunk">
                                <span>Loading items {loadingRange.from}–{loadingRange.to}…</span>
                                <IgrLinearProgress indeterminate hideLabel />
                            </div>
                        )}
                        <div className="combo-summary">
                            <span>{footerText}</span>
                            <IgrBadge variant="info">{total ?? 0} total</IgrBadge>
                        </div>
                    </div>
                </IgrCombo>
            </div>

            <aside className="monitor" aria-label="Remote binding monitor">
                <section>
                    <h2 className="monitor-title">Combo state</h2>
                    <dl className="state">
                        {stateRows.map(([name, text]) => (
                            <div className="state-row" key={name}>
                                <dt>{name}</dt>
                                <dd>{text}</dd>
                            </div>
                        ))}
                    </dl>
                    {value.length > INLINE_SELECTION && (
                        <div className="selection-values">
                            <span>{hiddenCount ? `${selectionList}, …` : `${selectionList}]`}</span>
                            {hiddenCount > 0 && (
                                <>
                                    <span className="selection-more">
                                        <button type="button" className="selection-more-link" id="selection-more-link">
                                            +{hiddenCount} more
                                        </button>
                                        <span>· full list in tooltip</span>
                                    </span>
                                    <IgrTooltip anchor="selection-more-link" className="selection-tooltip">
                                        [{value.join(', ')}]
                                    </IgrTooltip>
                                </>
                            )}
                        </div>
                    )}
                </section>

                <section>
                    <h2 className="monitor-title log-title">Requests to remote service</h2>
                    <ol className="log">
                        {log.map((entry) => (
                            <li className="log-entry" key={entry.id}>
                                <span className="log-name">{entry.title}</span>
                                <span className="log-result" data-status={entry.status}>{entry.result}</span>
                                <code className="log-detail">{entry.detail}</code>
                            </li>
                        ))}
                    </ol>
                </section>
            </aside>
        </div>
    );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<ComboRemoteBinding />);
