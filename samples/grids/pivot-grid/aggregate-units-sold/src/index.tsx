import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPivotGridModule } from 'igniteui-react-grids';
import { IgrPivotGrid, IgrPivotConfiguration, IgrPivotDimension, IgrPivotValue, IgrPivotAggregator } from 'igniteui-react-grids';
import { PivotSalesDataItem, PivotSalesData } from './PivotSalesData';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPivotGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrPivotGrid
    private gridRef(r: IgrPivotGrid) {
        this.grid = r;
        this.setState({});
    }
    private  _pivotConfiguration1: IgrPivotConfiguration | null = null;
    public get pivotConfiguration1(): IgrPivotConfiguration {
        if (this._pivotConfiguration1 == null)
        {
            var pivotConfiguration1: IgrPivotConfiguration = {} as IgrPivotConfiguration;

            var igrPivotDimension1: IgrPivotDimension = {} as IgrPivotDimension;
            igrPivotDimension1.memberName = "Country";
            igrPivotDimension1.enabled = true;

            pivotConfiguration1.columns = [igrPivotDimension1];
            var igrPivotDimension2: IgrPivotDimension = {} as IgrPivotDimension;
            igrPivotDimension2.memberName = "Product";
            igrPivotDimension2.enabled = true;

            pivotConfiguration1.rows = [igrPivotDimension2];
            var igrPivotValue1: IgrPivotValue = {} as IgrPivotValue;
            igrPivotValue1.member = "Sales";
            igrPivotValue1.enabled = true;
            var igrPivotAggregator1: IgrPivotAggregator = {} as IgrPivotAggregator;
            igrPivotAggregator1.key = "MAX";
            igrPivotAggregator1.label = "SalesValue";
            igrPivotAggregator1.aggregator = this.pivotSalesDataAggregateUnitsSold;

            igrPivotValue1.aggregate = igrPivotAggregator1;

            pivotConfiguration1.values = [igrPivotValue1];

            this._pivotConfiguration1 = pivotConfiguration1;
        }
        return this._pivotConfiguration1;
    }

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrPivotGrid
                    data={this.pivotSalesData}
                    ref={this.gridRef}
                    pivotConfiguration={this.pivotConfiguration1}>
                </IgrPivotGrid>
            </div>
        </div>
        );
    }

    private _pivotSalesData: PivotSalesData = null;
    public get pivotSalesData(): PivotSalesData {
        if (this._pivotSalesData == null)
        {
            this._pivotSalesData = new PivotSalesData();
        }
        return this._pivotSalesData;
    }


    public pivotSalesDataAggregateUnitsSold(members: any[], data: any[]): any {
        return data.reduce((accumulator, item) => accumulator + (item.UnitsSold * item.SalePrice), 0);
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);