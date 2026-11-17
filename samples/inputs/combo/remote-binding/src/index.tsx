import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { IgrBadge, IgrCombo, IgrLinearProgress, IgrTooltip } from 'igniteui-react';
import { bindComboDataSource, ComboDataPage, ComboDataRequest } from 'igniteui-webcomponents/extras/combo-data-source';
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
    const comboRef = useRef<IgrCombo>(null);
    const [combo, setCombo] = useState<ComboState>({ loaded: 0, loading: false, value: [] });
    const [log, setLog] = useState<LogEntry[]>([]);
    /** The search text of the items in `data`. */
    const [loadedSearch, setLoadedSearch] = useState('');
    /** The items of the next page while it loads. */
    const [loadingRange, setLoadingRange] = useState<{ from: number; to: number } | null>(null);

    useEffect(() => {
        const element = comboRef.current!;
        /** The event that loads the next first page. */
        let trigger = 'init · refresh()';
        let lastId = 0;
        /** The latest request. A request that the binding aborts for a newer one does not change the footer. */
        let latest = 0;

        const updateEntry = (id: number, change: Partial<LogEntry>) =>
            setLog((entries) => entries.map((entry) => (entry.id === id ? { ...entry, ...change } : entry)));

        /** Loads one page of products from the OData service. */
        const load = async ({ searchText, startIndex, count }: ComboDataRequest, signal: AbortSignal): Promise<ComboDataPage<Product>> => {
            // OData doubles a single quote in a string, as in "Chef Anton's".
            const filter = searchText ? `contains(ProductName, '${searchText.replace(/'/g, "''")}')` : '';
            const query = `$skip=${startIndex}&$top=${count}&$count=true`;

            // Only igcDataRequest asks for a page after the first one.
            const id = latest = ++lastId;
            const entry: LogEntry = {
                id,
                title: startIndex ? 'igcDataRequest · load()' : trigger,
                status: 'pending',
                result: 'pending…',
                detail: `GET /Products?${query}${filter ? `&$filter=${filter}` : ''}`
            };
            setLog((entries) => [...entries, entry].slice(-LOG_SIZE));
            const total = element.totalItemCount ?? startIndex + count;
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
                if (id === latest) {
                    setLoadingRange(null);
                }
            }
        };

        // Added before the binding, so each one names its event before the binding loads.
        const onOpening = () => {
            trigger = 'igcOpening · load()';
        };
        const onSearchInput = ({ detail }: CustomEvent<{ searchText: string }>) => {
            const text = detail.searchText.trim();
            trigger = `igcSearchInput · load(${text ? `"${text}"` : ''})`;
        };
        element.addEventListener('igcOpening', onOpening);
        element.addEventListener('igcSearchInput', onSearchInput);

        // The binding sets data, totalItemCount and loading, so the panel reads them after each update of the combo.
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

        // The binding switches the combo to remote filtering. It loads the first page of a search when the typing
        // pauses, appends the next page on igcDataRequest, and aborts a request that a newer search makes stale.
        const binding = bindComboDataSource<Product>(element, { load }, { pageSize: PAGE_SIZE });

        // The first page loads now, so the total shows before the list opens.
        void binding.refresh();

        return () => {
            binding.dispose();
            element.removeController(panel);
            element.removeEventListener('igcOpening', onOpening);
            element.removeEventListener('igcSearchInput', onSearchInput);
        };
    }, []);

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
                    ref={comboRef}
                    outlined
                    label="Products"
                    placeholder="Pick products"
                    placeholderSearch="Search…"
                    valueKey="ProductID"
                    displayKey="ProductName"
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
