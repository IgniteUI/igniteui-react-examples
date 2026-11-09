export interface Product {
    ProductID: number;
    ProductName: string;
}

export interface ProductsPage {
    items: Product[];
    /** How many products match the query on the server, across all pages. */
    total: number;
}

export interface ProductsQuery {
    search: string;
    skip: number;
    top: number;
}

const PRODUCTS_URL = 'https://services.odata.org/V4/Northwind/Northwind.svc/Products';

/** Builds an OData request for one page of products whose name contains `search`. */
export function buildProductsUrl({ search, skip, top }: ProductsQuery): string {
    const params = [
        '$select=ProductID,ProductName',
        '$orderby=ProductName',
        '$count=true',
        `$skip=${skip}`,
        `$top=${top}`,
    ];

    if (search) {
        // OData escapes a single quote inside a string literal by doubling it.
        const term = search.toLowerCase().replace(/'/g, "''");
        params.push(`$filter=contains(tolower(ProductName),'${encodeURIComponent(term)}')`);
    }

    return `${PRODUCTS_URL}?${params.join('&')}`;
}

export async function fetchProducts(url: string, signal: AbortSignal): Promise<ProductsPage> {
    const response = await fetch(url, { signal });

    if (!response.ok) {
        throw new Error(`HTTP ${response.status} ${response.statusText}`);
    }

    const json = await response.json();
    return { items: json.value, total: json['@odata.count'] };
}

/** Waits `ms`, or rejects as soon as `signal` aborts. */
export function delay(ms: number, signal: AbortSignal): Promise<void> {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(resolve, ms);
        signal.addEventListener('abort', () => {
            clearTimeout(timer);
            reject(signal.reason);
        }, { once: true });
    });
}
