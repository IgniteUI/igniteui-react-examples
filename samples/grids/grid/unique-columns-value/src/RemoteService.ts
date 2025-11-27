import { IgrColumn, IgrFilteringExpressionsTree, IgrFilteringStrategy } from "igniteui-react-grids";

const DATA_URL = 'https://services.odata.org/V4/Northwind/Northwind.svc/Products';
const EMPTY_STRING = '';
const NULL_VALUE: null = null;

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

/**
 * RemoteService - Template for future uniqueColumnValuesStrategy functionality
 * 
 * This service contains placeholder implementations that will be replaced
 * when the official uniqueColumnValuesStrategy becomes available from
 * the Infragistics package.
 */
export class RemoteService {
    public static _filteringStrategy: IgrFilteringStrategy; 

    public static getData(
        filteringArgs?: FilteringArgs,
        sortingArgs?: SortingArgs[]
    ): Promise<any[]> {
        const url = this.buildDataUrl(filteringArgs, sortingArgs);
        return fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data: ODataResponse) => {
                if (!Array.isArray(data.value)) {
                    throw new Error('Invalid response: missing or invalid data array');
                }
                return data.value;
            })
            .catch((error): any[] => {
                console.error('Error fetching data:', error);
                return []; 
            });
    }

    private static buildDataUrl(filteringArgs?: FilteringArgs, sortingArgs?: SortingArgs[]): string {
        const baseQuery = `${DATA_URL}?$count=true&$top=1000`;
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


    public static getColumnData(column: IgrColumn, columnExpTree: IgrFilteringExpressionsTree, done: (values: any[]) => void): void {
        setTimeout(() => {
            RemoteService.getData()
                .then(data => {
                    // TODO: Replace this with uniqueColumnValuesStrategy when available

                    if (!this._filteringStrategy) {
                        console.warn('Filtering strategy not initialized');
                        done([]);
                        return;
                    }
                    const filteredData = this._filteringStrategy.filter(data, columnExpTree, null, null);
                    const columnValues = filteredData.map((record: any) => record[column.field]);
                    
                    const uniqueValues = Array.from(new Set(columnValues));
                    done(uniqueValues);
                })
                .catch(error => {
                    console.error('Error fetching column data:', error);
                    done([]);
                });
        }, 1000);
    }

    private static buildFilterExpression(filteringArgs: FilteringArgs): string {
        if (!filteringArgs?.filteringOperands?.length) return '';

        const expression = this.buildAdvancedFilterExpression(
            filteringArgs.filteringOperands,
            filteringArgs.operator
        );

        return expression ? `$filter=${expression}` : '';
    }

    private static buildAdvancedFilterExpression(operands: FilterOperand[], operator: LOGICAL_OPERATOR): string {
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

    private static buildSingleFilterExpression(fieldName: string, searchVal: string | number, conditionName: string): string {
        // Input validation
        if (!fieldName || searchVal === null || searchVal === undefined) {
            return '';
        }

        const isNumber = typeof searchVal === 'number';
        const filterValue = isNumber ? searchVal : `'${String(searchVal).replace(/'/g, "''")}'`;

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
            default:
                console.warn(`Unknown filter condition: ${conditionName}`);
                return '';
        }
    }

    private static buildSortExpression(sortingArgs: SortingArgs[]): string {
        if (!sortingArgs || sortingArgs.length === 0) return '';

        const sortStrings = sortingArgs
            .filter(sort => sort.fieldName) // filter out invalid entries
            .map(sort => {
                const dir = sort.dir === SORT_DIRECTION.DESC ? 'desc' : 'asc';
                return `${sort.fieldName} ${dir}`;
            });

        return sortStrings.length > 0 ? `$orderby=${sortStrings.join(',')}` : '';
    }

    private static getFilteringLogic(operator: LOGICAL_OPERATOR): string {
        switch (operator) {
            case LOGICAL_OPERATOR.AND:
                return 'and';
            case LOGICAL_OPERATOR.OR:
                return 'or';
            default:
                return 'and';
        }
    }
}
