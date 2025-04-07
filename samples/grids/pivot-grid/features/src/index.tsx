import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPivotGridModule } from 'igniteui-react-grids';
import { IgrPivotGrid, IgrPivotConfiguration, IgrPivotDateDimension, IgrPivotDimension, IgrPivotDateDimensionOptions, SortingDirection, IgrPivotValue, IgrPivotAggregator } from 'igniteui-react-grids';
import { PivotDataFlatItem, PivotDataFlat } from './PivotDataFlat';

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

            var igrPivotDateDimension1 = new IgrPivotDateDimension();
            igrPivotDateDimension1.memberName = "Date";
            igrPivotDateDimension1.enabled = true;
            var igrPivotDimension1 = new IgrPivotDimension();
            igrPivotDimension1.memberName = "Date";
            igrPivotDimension1.enabled = true;

            igrPivotDateDimension1.baseDimension = igrPivotDimension1;
            var igrPivotDateDimensionOptions1: IgrPivotDateDimensionOptions = {} as IgrPivotDateDimensionOptions;
            igrPivotDateDimensionOptions1.years = true;
            igrPivotDateDimensionOptions1.months = false;
            igrPivotDateDimensionOptions1.quarters = true;
            igrPivotDateDimensionOptions1.fullDate = false;

            igrPivotDateDimension1.options = igrPivotDateDimensionOptions1;

            pivotConfiguration1.columns = [igrPivotDateDimension1];
            var igrPivotDimension2 = new IgrPivotDimension();
            igrPivotDimension2.memberName = "ProductName";
            igrPivotDimension2.sortDirection = SortingDirection.Asc;
            igrPivotDimension2.enabled = true;

            var igrPivotDimension3 = new IgrPivotDimension();
            igrPivotDimension3.memberName = "SellerCity";
            igrPivotDimension3.enabled = true;

            pivotConfiguration1.rows = [igrPivotDimension2,igrPivotDimension3];
            var igrPivotDimension4 = new IgrPivotDimension();
            igrPivotDimension4.memberName = "SellerName";
            igrPivotDimension4.enabled = true;

            pivotConfiguration1.filters = [igrPivotDimension4];
            var igrPivotValue1 = new IgrPivotValue();
            igrPivotValue1.member = "AmountofSale";
            igrPivotValue1.displayName = "Amount of Sale";
            igrPivotValue1.enabled = true;
            var igrPivotAggregator1 = new IgrPivotAggregator();
            igrPivotAggregator1.key = "SUM";
            igrPivotAggregator1.label = "Sum of Sale";
            igrPivotAggregator1.aggregator = this.pivotDataFlatAggregateSumSale;

            igrPivotValue1.aggregate = igrPivotAggregator1;
            var igrPivotAggregator2 = new IgrPivotAggregator();
            igrPivotAggregator2.key = "SUM";
            igrPivotAggregator2.label = "Sum of Sale";
            igrPivotAggregator2.aggregator = this.pivotDataFlatAggregateSumSale;

            var igrPivotAggregator3 = new IgrPivotAggregator();
            igrPivotAggregator3.key = "MIN";
            igrPivotAggregator3.label = "Minimum of Sale";
            igrPivotAggregator3.aggregator = this.pivotDataFlatAggregateMinSale;

            var igrPivotAggregator4 = new IgrPivotAggregator();
            igrPivotAggregator4.key = "MAX";
            igrPivotAggregator4.label = "Maximum of Sale";
            igrPivotAggregator4.aggregator = this.pivotDataFlatAggregateMaxSale;

            igrPivotValue1.aggregateList = [igrPivotAggregator2,igrPivotAggregator3,igrPivotAggregator4];

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
                    data={this.pivotDataFlat}
                    rowSelection="single"
                    superCompactMode={true}
                    pivotConfiguration={this.pivotConfiguration1}>
                </IgrPivotGrid>
            </div>
        </div>
        );
    }

    private _pivotDataFlat: PivotDataFlat = null;
    public get pivotDataFlat(): PivotDataFlat {
        if (this._pivotDataFlat == null)
        {
            this._pivotDataFlat = new PivotDataFlat();
        }
        return this._pivotDataFlat;
    }


    public pivotDataFlatAggregateSumSale(members: any[], data: any[]): any {
        return data.reduce((accumulator, value) => accumulator + value.ProductUnitPrice * value.NumberOfUnits, 0);
    }

    public pivotDataFlatAggregateMinSale(members: any[], data: any[]): any {
        let min = 0;
        if (data.length === 1) {
            min = data[0].ProductUnitPrice * data[0].NumberOfUnits;
        } else if (data.length > 1) {
            const mappedData = data.map(x => x.ProductUnitPrice * x.NumberOfUnits);
            min = mappedData.reduce((a, b) => Math.min(a, b));
        }
        return min;
    }

    public pivotDataFlatAggregateMaxSale(members: any[], data: any[]): any {
        let max = 0;
        if (data.length === 1) {
            max = data[0].ProductUnitPrice * data[0].NumberOfUnits;
        } else if (data.length > 1) {
            const mappedData = data.map(x => x.ProductUnitPrice * x.NumberOfUnits);
            max = mappedData.reduce((a, b) => Math.max(a, b));
        }
        return max;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);