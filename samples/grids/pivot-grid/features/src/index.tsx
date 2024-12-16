import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPivotGridModule } from 'igniteui-react-grids';
import { IgrPivotGrid, IgrPivotConfiguration, IgrPivotDateDimension, IgrPivotDimension, IgrPivotDateDimensionOptions, SortingDirection, IgrPivotValue, IgrPivotAggregator, PivotAggregationType } from 'igniteui-react-grids';
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
            var SumOfSale = new IgrPivotAggregator();
            SumOfSale.key = "SUM";
            SumOfSale.label = "Sum of Sale";
            SumOfSale.aggregator = this.pivotDataFlatAggregateSumSale;
            SumOfSale.aggregatorName = PivotAggregationType.SUM;

            var MinOfSale = new IgrPivotAggregator();
            MinOfSale.key = "MIN";
            MinOfSale.label = "Minimum of Sale";
            MinOfSale.aggregator = this.pivotDataFlatAggregateMinSale;
            MinOfSale.aggregatorName = PivotAggregationType.MIN;

            var MaxOfSale = new IgrPivotAggregator();
            MaxOfSale.key = "MAX";
            MaxOfSale.label = "Maximum of Sale";
            MaxOfSale.aggregatorName = PivotAggregationType.MAX;
            MaxOfSale.aggregator = this.pivotDataFlatAggregateMaxSale;

            igrPivotValue1.aggregateList = [SumOfSale,MinOfSale,MaxOfSale];

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
                    ref={this.gridRef}
                    rowSelection="Single"
                    superCompactMode="true"
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