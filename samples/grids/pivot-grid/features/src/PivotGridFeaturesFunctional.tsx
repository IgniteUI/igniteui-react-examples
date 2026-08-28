import React, { useRef, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPivotGridModule } from 'igniteui-react-grids';
import {
    IgrPivotGrid,
    IgrPivotConfiguration,
    IgrPivotDateDimension,
    IgrPivotDimension,
    IgrPivotDateDimensionOptions,
    SortingDirection,
    IgrPivotValue,
    IgrPivotAggregator,
} from 'igniteui-react-grids';
import { PivotDataFlat } from './PivotDataFlat';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [IgrPivotGridModule];
mods.forEach(m => m.register());

function pivotDataFlatAggregateSumSale(_members: any[], data: any[]): any {
    return data.reduce((acc, v) => acc + v.ProductUnitPrice * v.NumberOfUnits, 0);
}

function pivotDataFlatAggregateMinSale(_members: any[], data: any[]): any {
    if (data.length === 0) return 0;
    const mapped = data.map(x => x.ProductUnitPrice * x.NumberOfUnits);
    return mapped.reduce((a, b) => Math.min(a, b));
}

function pivotDataFlatAggregateMaxSale(_members: any[], data: any[]): any {
    if (data.length === 0) return 0;
    const mapped = data.map(x => x.ProductUnitPrice * x.NumberOfUnits);
    return mapped.reduce((a, b) => Math.max(a, b));
}

export default function Sample() {
    const gridRef = useRef<IgrPivotGrid>(null);

    // useMemo ensures the configuration object is built only once (stable reference)
    const pivotConfiguration = useMemo<IgrPivotConfiguration>(() => {
        const config = {} as IgrPivotConfiguration;

        const dateDimension = new IgrPivotDateDimension();
        dateDimension.memberName = 'Date';
        dateDimension.enabled = true;

        const baseDimension = {} as IgrPivotDimension;
        baseDimension.memberName = 'Date';
        baseDimension.enabled = true;
        dateDimension.baseDimension = baseDimension;

        const dateOptions = {} as IgrPivotDateDimensionOptions;
        dateOptions.years = true;
        dateOptions.months = false;
        dateOptions.quarters = true;
        dateOptions.fullDate = false;
        dateDimension.options = dateOptions;

        config.columns = [dateDimension];

        const productDim = {} as IgrPivotDimension;
        productDim.memberName = 'ProductName';
        productDim.sortDirection = SortingDirection.Asc;
        productDim.enabled = true;

        const cityDim = {} as IgrPivotDimension;
        cityDim.memberName = 'SellerCity';
        cityDim.enabled = true;

        config.rows = [productDim, cityDim];

        const sellerDim = {} as IgrPivotDimension;
        sellerDim.memberName = 'SellerName';
        sellerDim.enabled = true;

        config.filters = [sellerDim];

        const pivotValue = {} as IgrPivotValue;
        pivotValue.member = 'AmountofSale';
        pivotValue.displayName = 'Amount of Sale';
        pivotValue.enabled = true;

        const sumAgg = {} as IgrPivotAggregator;
        sumAgg.key = 'SUM';
        sumAgg.label = 'Sum of Sale';
        sumAgg.aggregator = pivotDataFlatAggregateSumSale;
        pivotValue.aggregate = sumAgg;

        const sumAgg2 = {} as IgrPivotAggregator;
        sumAgg2.key = 'SUM';
        sumAgg2.label = 'Sum of Sale';
        sumAgg2.aggregator = pivotDataFlatAggregateSumSale;

        const minAgg = {} as IgrPivotAggregator;
        minAgg.key = 'MIN';
        minAgg.label = 'Minimum of Sale';
        minAgg.aggregator = pivotDataFlatAggregateMinSale;

        const maxAgg = {} as IgrPivotAggregator;
        maxAgg.key = 'MAX';
        maxAgg.label = 'Maximum of Sale';
        maxAgg.aggregator = pivotDataFlatAggregateMaxSale;

        pivotValue.aggregateList = [sumAgg2, minAgg, maxAgg];
        config.values = [pivotValue];

        return config;
    }, []);

    // useMemo keeps data source instance stable across re-renders
    const pivotData = useMemo(() => new PivotDataFlat(), []);

    return (
        <div className="container sample ig-typography">
            <div className="container fill">
                <IgrPivotGrid
                    data={pivotData}
                    ref={gridRef}
                    rowSelection="single"
                    superCompactMode={true}
                    pivotConfiguration={pivotConfiguration}
                />
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
