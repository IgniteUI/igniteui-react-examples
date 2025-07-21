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

export class RemoteService {
    public static _filteringStrategy: IgrFilteringStrategy; 

    public static getData(
        filteringArgs?: any,
        sortingArgs?: any
    ): Promise<any[]> {
        const url = this.buildDataUrl(filteringArgs, sortingArgs);
        return fetch(url)
            .then((res) => res.json())
            .then((data) => data.value); // only return the actual items
    }

    private static buildDataUrl(filteringArgs: any, sortingArgs: any): string {
        let baseQuery = `${DATA_URL}?$count=true&$top=1000`;
        const parts: string[] = [];

        const sortExpr = this.buildSortExpression(sortingArgs);
        if (sortExpr) parts.push(sortExpr);

        const filterExpr = this.buildFilterExpression(filteringArgs);
        if (filterExpr) parts.push(filterExpr);

        return `${baseQuery}&${parts.join('&')}`;
    }

    public static getColumnData( column: IgrColumn, columnExpTree: IgrFilteringExpressionsTree, done: (values: any[]) => void): void {
        setTimeout(async () => {
            const data = await RemoteService.getData();
            const filteredData = this._filteringStrategy.filter(data, columnExpTree, null, null);
            const columnValues = filteredData.map(record => record[column.field]);
            done(columnValues);
        }, 1000);
    }

    private static buildFilterExpression(filteringArgs: any): string {
        if (!filteringArgs?.filteringOperands?.length) return '';

        const expression = this.buildAdvancedFilterExpression(
            filteringArgs.filteringOperands,
            filteringArgs.operator
        );

        return expression ? `$filter=${expression}` : '';
    }

    private static buildAdvancedFilterExpression(operands: any[], operator: any): string {
        let filterExpression = '';

        operands.forEach((operand, index) => {
            if (operand.filteringOperands) {
                const subExpr = this.buildAdvancedFilterExpression(
                    operand.filteringOperands,
                    operand.operator
                );
                if (subExpr) {
                    if (index > 0) filterExpression += ` ${this.getFilteringLogic(operator)} `;
                    filterExpression += subExpr;
                }
                return;
            }

            const { fieldName, searchVal, condition } = operand;
            if (searchVal === undefined || condition === undefined) return;

            const isNumber = typeof searchVal === 'number';
            const filterValue = isNumber ? searchVal : `'${searchVal}'`;
            let filterPart = '';

            if (index > 0) filterExpression += ` ${this.getFilteringLogic(operator)} `;

            switch (condition.name) {
                case 'contains':
                    filterPart = `contains(${fieldName}, ${filterValue})`;
                    break;
                case 'startsWith':
                    filterPart = `startswith(${fieldName}, ${filterValue})`;
                    break;
                case 'endsWith':
                    filterPart = `endswith(${fieldName}, ${filterValue})`;
                    break;
                case 'equals':
                    filterPart = `${fieldName} eq ${filterValue}`;
                    break;
                case 'doesNotEqual':
                    filterPart = `${fieldName} ne ${filterValue}`;
                    break;
                case 'greaterThan':
                    filterPart = `${fieldName} gt ${filterValue}`;
                    break;
                case 'greaterThanOrEqualTo':
                    filterPart = `${fieldName} ge ${filterValue}`;
                    break;
                case 'lessThan':
                    filterPart = `${fieldName} lt ${filterValue}`;
                    break;
                case 'lessThanOrEqualTo':
                    filterPart = `${fieldName} le ${filterValue}`;
                    break;
                case 'null':
                    filterPart = `${fieldName} eq null`;
                    break;
                case 'notNull':
                    filterPart = `${fieldName} ne null`;
                    break;
                case 'empty':
                    filterPart = `length(${fieldName}) eq 0`;
                    break;
                case 'notEmpty':
                    filterPart = `length(${fieldName}) gt 0`;
                    break;
            }

            filterExpression += filterPart;
        });

        return filterExpression;
    }

    private static buildSortExpression(sortingArgs: any[]): string {
        if (!sortingArgs || sortingArgs.length === 0) return '';

        const sortStrings = sortingArgs.map(sort => {
            const dir = sort.dir === 2 ? 'desc' : 'asc'; // 1 = asc, 2 = desc
            return `${sort.fieldName} ${dir}`;
        });

        return sortStrings.length > 0 ? `$orderby=${sortStrings.join(',')}` : '';
    }

    private static getFilteringLogic(operator: any): string {
        switch (operator) {
            case 0: return 'and';
            case 1: return 'or';
            default: return 'and';
        }
    }

    

    
}
