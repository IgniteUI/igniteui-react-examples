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
            var pivotConfiguration1 = new IgrPivotConfiguration();

            var igrPivotDimension1 = new IgrPivotDimension();
            igrPivotDimension1.memberName = "Country";
            igrPivotDimension1.enabled = true;

            pivotConfiguration1.columns = [igrPivotDimension1];
            var igrPivotDimension2 = new IgrPivotDimension();
            igrPivotDimension2.memberName = "Product";
            igrPivotDimension2.enabled = true;

            pivotConfiguration1.rows = [igrPivotDimension2];
            var igrPivotValue1 = new IgrPivotValue();
            igrPivotValue1.member = "Sales";
            igrPivotValue1.enabled = true;
            var igrPivotAggregator1 = new IgrPivotAggregator();
            igrPivotAggregator1.key = "MAX";
            igrPivotAggregator1.aggregator = this.pivotSalesDataAggregateMaxSales;

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


    public pivotSalesDataAggregateMaxSales(members: any[], data: any[]): any[] {
        if (!data) {
            return [];
        }
        return data.map(x => x.Sales).reduce((a, b) => Math.max(a, b));
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);