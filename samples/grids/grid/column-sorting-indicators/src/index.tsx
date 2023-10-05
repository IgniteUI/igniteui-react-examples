import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrSortingExpression, SortingDirection, IgrColumn } from 'igniteui-react-grids';
import { FinancialDataAllItem, FinancialDataAll } from './FinancialDataAll';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }
    private _sortingExpression1: IgrSortingExpression[] | null = null;
    public get sortingExpression1(): IgrSortingExpression[] {
        if (this._sortingExpression1 == null)
        {
            let sortingExpression1: IgrSortingExpression[] = [];
            var sortingExpression2: IgrSortingExpression = {} as IgrSortingExpression;
            sortingExpression2.dir = SortingDirection.Asc;
            sortingExpression2.fieldName = "Settlement";
            sortingExpression2.ignoreCase = true;

            sortingExpression1.push(sortingExpression2)
            var sortingExpression3: IgrSortingExpression = {} as IgrSortingExpression;
            sortingExpression3.dir = SortingDirection.Desc;
            sortingExpression3.fieldName = "Type";
            sortingExpression3.ignoreCase = true;

            sortingExpression1.push(sortingExpression3)
            var sortingExpression4: IgrSortingExpression = {} as IgrSortingExpression;
            sortingExpression4.dir = SortingDirection.Asc;
            sortingExpression4.fieldName = "Region";
            sortingExpression4.ignoreCase = true;

            sortingExpression1.push(sortingExpression4)
            var sortingExpression5: IgrSortingExpression = {} as IgrSortingExpression;
            sortingExpression5.dir = SortingDirection.Asc;
            sortingExpression5.fieldName = "Country";
            sortingExpression5.ignoreCase = true;

            sortingExpression1.push(sortingExpression5)
            var sortingExpression6: IgrSortingExpression = {} as IgrSortingExpression;
            sortingExpression6.dir = SortingDirection.Asc;
            sortingExpression6.fieldName = "Price";
            sortingExpression6.ignoreCase = true;

            sortingExpression1.push(sortingExpression6)
            var sortingExpression7: IgrSortingExpression = {} as IgrSortingExpression;
            sortingExpression7.dir = SortingDirection.Asc;
            sortingExpression7.fieldName = "Buy";
            sortingExpression7.ignoreCase = true;

            sortingExpression1.push(sortingExpression7)
            this._sortingExpression1 = sortingExpression1;
        }
        return this._sortingExpression1;
    }

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="container fill">
                <IgrGrid
                    autoGenerate="false"
                    data={this.financialDataAll}
                    ref={this.gridRef}
                    sortingExpressions={this.sortingExpression1}
                    id="grid">
                    <IgrColumn
                        field="Settlement"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Type"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Region"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Country"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Price"
                        dataType="Currency"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Buy"
                        dataType="Currency"
                        sortable="true">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _financialDataAll: FinancialDataAll = null;
    public get financialDataAll(): FinancialDataAll {
        if (this._financialDataAll == null)
        {
            this._financialDataAll = new FinancialDataAll();
        }
        return this._financialDataAll;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);