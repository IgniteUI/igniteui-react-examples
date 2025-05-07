import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { SALES_DATA_NEW as pivotData } from './salesDataNew';
import { IgrPivotAggregator, IgrPivotConfiguration, IgrPivotDataSelector, IgrPivotDataSelectorModule,
     IgrPivotDimension, IgrPivotGrid, IgrPivotGridModule, IgrPivotValue, PivotAggregationType } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPivotGridModule,
    IgrPivotDataSelectorModule
];
mods.forEach((m) => m.register());

export default function App() {
    let grid: IgrPivotGrid;
    const gridRef = (r: IgrPivotGrid) => {
        grid = r;
    }
    const selector = (selector: IgrPivotDataSelector) => {
        selector.grid = grid;
    }
    const pivotConfiguration = {} as IgrPivotConfiguration;
    const rowDim = {} as IgrPivotDimension;
    rowDim.enabled = true;
    rowDim.memberName = "Date";

    const colDim1 = {} as IgrPivotDimension;
    colDim1.enabled = true;
    colDim1.memberName = "Country";

    const colDim2 = {} as IgrPivotDimension;
    colDim2.enabled = true;
    colDim2.memberName = "Product";

    const aggregate1 = {} as IgrPivotAggregator;
    aggregate1.aggregatorName = PivotAggregationType.SUM;
    aggregate1.key = "SUM";

    const val1 = {} as IgrPivotValue;
    val1.enabled = true;
    val1.member = "Sales";
    val1.aggregate = aggregate1;

    const val2 = {} as IgrPivotValue;
    val2.enabled = true;
    val2.member = "Profit";
    val2.aggregate = aggregate1;

    pivotConfiguration.rows = [rowDim];
    pivotConfiguration.columns = [colDim1, colDim2];
    pivotConfiguration.values = [val1, val2];

    return (
        <>
            <div className="container sample ig-typography">
                <div className="container fill">
                    <div className="pivot-container">
                        <div>
                            <IgrPivotGrid data={pivotData} ref={gridRef} pivotConfiguration={pivotConfiguration}>
                            </IgrPivotGrid>
                        </div>
                        <IgrPivotDataSelector ref={selector}></IgrPivotDataSelector>
                    </div>
                </div>
            </div>
        </>
    );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);