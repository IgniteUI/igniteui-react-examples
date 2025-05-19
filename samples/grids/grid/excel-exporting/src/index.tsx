import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule, IgrGridToolbarModule } from 'igniteui-react-grids';
import { IgrGrid, IgrGroupingExpression, SortingDirection, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarExporter, IgrColumn } from 'igniteui-react-grids';
import { InvoicesDataItem, InvoicesData } from './InvoicesData';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule,
    IgrGridToolbarModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }
    private _groupingExpression1: IgrGroupingExpression[] | null = null;
    public get groupingExpression1(): IgrGroupingExpression[] {
        if (this._groupingExpression1 == null)
        {
            let groupingExpression1: IgrGroupingExpression[] = [];
            var groupingExpression2: IgrGroupingExpression = {} as IgrGroupingExpression;
            groupingExpression2.fieldName = "ShipCountry";
            groupingExpression2.ignoreCase = false;
            groupingExpression2.dir = SortingDirection.Asc;

            groupingExpression1.push(groupingExpression2)
            var groupingExpression3: IgrGroupingExpression = {} as IgrGroupingExpression;
            groupingExpression3.fieldName = "ShipCity";
            groupingExpression3.ignoreCase = false;
            groupingExpression3.dir = SortingDirection.Asc;

            groupingExpression1.push(groupingExpression3)
            this._groupingExpression1 = groupingExpression1;
        }
        return this._groupingExpression1;
    }

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    data={this.invoicesData}
                    ref={this.gridRef}
                    id="grid"
                    groupingExpressions={this.groupingExpression1}
                    hideGroupedColumns={true}>
                    <IgrGridToolbar
                    >
                        <IgrGridToolbarActions
                        >
                            <IgrGridToolbarExporter
                                exportCSV={false}
                                exportExcel={true}>
                            </IgrGridToolbarExporter>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn
                        field="ShipCountry"
                        header="Ship Country"
                        width="150px"
                        groupable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ShipCity"
                        header="Ship City"
                        width="150px"
                        groupable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ShipAddress"
                        header="Ship Address"
                        width="150px"
                        groupable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        header="Postal Code"
                        width="150px"
                        groupable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        dataType="date"
                        width="150px"
                        groupable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Quantity"
                        width="150px"
                        groupable={true}>
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _invoicesData: InvoicesData = null;
    public get invoicesData(): InvoicesData {
        if (this._invoicesData == null)
        {
            this._invoicesData = new InvoicesData();
        }
        return this._invoicesData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);