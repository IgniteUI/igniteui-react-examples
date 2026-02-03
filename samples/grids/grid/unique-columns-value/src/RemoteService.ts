import { IgrColumn, IgrFilteringExpressionsTree, IgrFilteringStrategy } from "igniteui-react-grids";

export enum FILTER_OPERATION {
    CONTAINS = 'contains',
    STARTS_WITH = 'startswith',
    ENDS_WITH = 'endswith',
    EQUALS = 'eq',
    DOES_NOT_EQUAL = 'ne',
    GREATER_THAN = 'gt',
    LESS_THAN = 'lt',
    LESS_THAN_EQUAL = 'le',
    GREATER_THAN_EQUAL = 'ge'
}

export enum LOGICAL_OPERATOR {
    AND = 0,
    OR = 1
}

export enum SORT_DIRECTION {
    ASC = 1,
    DESC = 2
}

interface FilterCondition {
    name: string;
}

interface FilterOperand {
    fieldName: string;
    searchVal: string | number;
    condition: FilterCondition;
    filteringOperands?: FilterOperand[];
    operator?: LOGICAL_OPERATOR;
}

interface FilteringArgs {
    filteringOperands: FilterOperand[];
    operator: LOGICAL_OPERATOR;
}

interface SortingArgs {
    fieldName: string;
    dir: SORT_DIRECTION;
}

interface ODataResponse {
    '@odata.count'?: number;
    value: any[];
}

export interface RemoteServiceConfig {
    baseUrl: string;
    pageSize?: number;
    filteringStrategy?: IgrFilteringStrategy;
    /** Cache TTL for unique column values in milliseconds (default: 30000 = 30 seconds) */
    uniqueValuesCacheTtl?: number;
}

interface CacheEntry<T> {
    data: T;
    timestamp: number;
}

export class RemoteService {
    private config: RemoteServiceConfig;
    private dataAbortController?: AbortController;
    private columnDataAbortController?: AbortController;
    private uniqueValuesCache: Map<string, CacheEntry<any[]>> = new Map();

    constructor(config: RemoteServiceConfig) {
        this.config = {
            pageSize: 1000,
            uniqueValuesCacheTtl: 30000,
            ...config
        };
    }

    public setFilteringStrategy(strategy: IgrFilteringStrategy): void {
        this.config.filteringStrategy = strategy;
    }

    public async getData(
        filteringArgs?: FilteringArgs,
        sortingArgs?: SortingArgs[]
    ): Promise<any[]> {
        // Cancel any in-flight data request
        this.dataAbortController?.abort();
        this.dataAbortController = new AbortController();

        try {
            const url = this.buildDataUrl(filteringArgs, sortingArgs);
            const response = await fetch(url, { signal: this.dataAbortController.signal });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data: ODataResponse = await response.json();

            if (!Array.isArray(data.value)) {
                throw new Error('Invalid response: missing or invalid data array');
            }

            return data.value;
        } catch (error) {
            // Don't log abort errors as they're intentional
            if (error instanceof Error && error.name === 'AbortError') {
                return [];
            }
            console.error('Error fetching data:', error);
            return [];
        }
    }

    private buildDataUrl(filteringArgs?: FilteringArgs, sortingArgs?: SortingArgs[]): string {
        const baseQuery = `${this.config.baseUrl}?$count=true&$top=${this.config.pageSize}`;
        const parts: string[] = [];

        if (sortingArgs && sortingArgs.length > 0) {
            const sortExpr = this.buildSortExpression(sortingArgs);
            if (sortExpr) parts.push(sortExpr);
        }

        if (filteringArgs?.filteringOperands?.length) {
            const filterExpr = this.buildFilterExpression(filteringArgs);
            if (filterExpr) parts.push(filterExpr);
        }

        return parts.length > 0 ? `${baseQuery}&${parts.join('&')}` : baseQuery;
    }

    public async getColumnData(
        column: IgrColumn, 
        columnExpTree: IgrFilteringExpressionsTree, 
        done: (values: any[]) => void
    ): Promise<void> {
        try {
            // Try to use OData $apply for true remote distinct values
            const uniqueValues = await this.fetchUniqueColumnValues(column.field);
            
            if (uniqueValues.length > 0) {
                done(uniqueValues);
                return;
            }

            // Fallback: fetch all data and filter client-side
            const data = await this.getData();

            if (!this.config.filteringStrategy) {
                console.warn('Filtering strategy not initialized');
                done([]);
                return;
            }

            const filteredData = this.config.filteringStrategy.filter(data, columnExpTree, null, null);
            const columnValues = filteredData.map((record: any) => record[column.field]);
            const uniqueColumnValues = Array.from(new Set(columnValues));
            
            done(uniqueColumnValues);
        } catch (error) {
            console.error('Error fetching column data:', error);
            done([]);
        }
    }

    private async fetchUniqueColumnValues(fieldName: string): Promise<any[]> {
        // Check cache first
        const cachedValues = this.getCachedValues(fieldName);
        if (cachedValues) {
            return cachedValues;
        }

        // Cancel any in-flight column data request
        this.columnDataAbortController?.abort();
        this.columnDataAbortController = new AbortController();

        try {
            // Use OData $apply with groupby for distinct values
            const url = `${this.config.baseUrl}?$apply=groupby((${fieldName}))`;
            const response = await fetch(url, { signal: this.columnDataAbortController.signal });

            if (!response.ok) {
                // If $apply is not supported, return empty to trigger fallback
                return [];
            }

            const data: ODataResponse = await response.json();

            if (!Array.isArray(data.value)) {
                return [];
            }

            const values = data.value.map(item => item[fieldName]);

            // Cache the results
            this.setCachedValues(fieldName, values);

            return values;
        } catch (error) {
            // Don't log abort errors as they're intentional
            if (error instanceof Error && error.name === 'AbortError') {
                return [];
            }
            // $apply might not be supported, return empty to trigger fallback
            return [];
        }
    }

    private buildFilterExpression(filteringArgs: FilteringArgs): string {
        if (!filteringArgs?.filteringOperands?.length) return '';

        const expression = this.buildAdvancedFilterExpression(
            filteringArgs.filteringOperands,
            filteringArgs.operator
        );

        return expression ? `$filter=${expression}` : '';
    }

    private buildAdvancedFilterExpression(operands: FilterOperand[], operator: LOGICAL_OPERATOR): string {
        const filterParts: string[] = [];

        operands.forEach((operand) => {
            if (operand.filteringOperands && operand.filteringOperands.length > 0) {
                const subExpr = this.buildAdvancedFilterExpression(
                    operand.filteringOperands,
                    operand.operator || LOGICAL_OPERATOR.AND
                );
                if (subExpr) {
                    filterParts.push(`(${subExpr})`);
                }
                return;
            }

            const { fieldName, searchVal, condition } = operand;
            if (searchVal === undefined || condition === undefined || !fieldName) return;

            const filterPart = this.buildSingleFilterExpression(fieldName, searchVal, condition.name);
            if (filterPart) {
                filterParts.push(filterPart);
            }
        });

        const logicalOp = this.getFilteringLogic(operator);
        return filterParts.join(` ${logicalOp} `);
    }

    private buildSingleFilterExpression(fieldName: string, searchVal: string | number, conditionName: string): string {
        // Input validation
        if (!fieldName || searchVal === null || searchVal === undefined) {
            return '';
        }

        const isNumber = typeof searchVal === 'number';
        // URL encode string values to handle special characters
        const filterValue = isNumber 
            ? searchVal 
            : `'${encodeURIComponent(String(searchVal).replace(/'/g, "''"))}'`;

        switch (conditionName) {
            case 'contains':
                return `${FILTER_OPERATION.CONTAINS}(${fieldName}, ${filterValue})`;
            case 'startsWith':
                return `${FILTER_OPERATION.STARTS_WITH}(${fieldName}, ${filterValue})`;
            case 'endsWith':
                return `${FILTER_OPERATION.ENDS_WITH}(${fieldName}, ${filterValue})`;
            case 'equals':
                return `${fieldName} ${FILTER_OPERATION.EQUALS} ${filterValue}`;
            case 'doesNotEqual':
                return `${fieldName} ${FILTER_OPERATION.DOES_NOT_EQUAL} ${filterValue}`;
            case 'greaterThan':
                return `${fieldName} ${FILTER_OPERATION.GREATER_THAN} ${filterValue}`;
            case 'greaterThanOrEqualTo':
                return `${fieldName} ${FILTER_OPERATION.GREATER_THAN_EQUAL} ${filterValue}`;
            case 'lessThan':
                return `${fieldName} ${FILTER_OPERATION.LESS_THAN} ${filterValue}`;
            case 'lessThanOrEqualTo':
                return `${fieldName} ${FILTER_OPERATION.LESS_THAN_EQUAL} ${filterValue}`;
            case 'null':
                return `${fieldName} ${FILTER_OPERATION.EQUALS} null`;
            case 'notNull':
                return `${fieldName} ${FILTER_OPERATION.DOES_NOT_EQUAL} null`;
            case 'empty':
                return `length(${fieldName}) ${FILTER_OPERATION.EQUALS} 0`;
            case 'notEmpty':
                return `length(${fieldName}) ${FILTER_OPERATION.GREATER_THAN} 0`;
            case 'true':
                return `${fieldName} ${FILTER_OPERATION.EQUALS} true`;
            case 'false':
                return `${fieldName} ${FILTER_OPERATION.EQUALS} false`;
            default:
                console.warn(`Unknown filter condition: ${conditionName}`);
                return '';
        }
    }

    private buildSortExpression(sortingArgs: SortingArgs[]): string {
        if (!sortingArgs || sortingArgs.length === 0) return '';

        const sortStrings = sortingArgs
            .filter(sort => sort.fieldName) // filter out invalid entries
            .map(sort => {
                const dir = sort.dir === SORT_DIRECTION.DESC ? 'desc' : 'asc';
                return `${sort.fieldName} ${dir}`;
            });

        return sortStrings.length > 0 ? `$orderby=${sortStrings.join(',')}` : '';
    }

    private getFilteringLogic(operator: LOGICAL_OPERATOR): string {
        switch (operator) {
            case LOGICAL_OPERATOR.AND:
                return 'and';
            case LOGICAL_OPERATOR.OR:
                return 'or';
            default:
                return 'and';
        }
    }

    /**
     * Cancel any pending data requests
     */
    public cancelPendingRequests(): void {
        this.dataAbortController?.abort();
        this.columnDataAbortController?.abort();
    }

    /**
     * Clear the unique values cache (useful when data changes)
     */
    public clearCache(): void {
        this.uniqueValuesCache.clear();
    }

    private isCacheValid(fieldName: string): boolean {
        const entry = this.uniqueValuesCache.get(fieldName);
        if (!entry) return false;

        const now = Date.now();
        const ttl = this.config.uniqueValuesCacheTtl!;
        return (now - entry.timestamp) < ttl;
    }

    private getCachedValues(fieldName: string): any[] | null {
        if (this.isCacheValid(fieldName)) {
            return this.uniqueValuesCache.get(fieldName)!.data;
        }
        return null;
    }

    private setCachedValues(fieldName: string, values: any[]): void {
        this.uniqueValuesCache.set(fieldName, {
            data: values,
            timestamp: Date.now()
        });
    }
}

// Export a default instance for convenience
export const remoteService = new RemoteService({
    baseUrl: 'https://services.odata.org/V4/Northwind/Northwind.svc/Products'
});
