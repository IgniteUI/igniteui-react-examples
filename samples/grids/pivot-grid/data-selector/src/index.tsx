import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrGridModule, IgrPivotAggregator, IgrPivotConfiguration, IgrPivotDataSelector, IgrPivotDimension, IgrPivotGrid, IgrPivotValue, PivotAggregationType } from 'igniteui-react-grids';
import { IgrGrid, IgrPinningConfig, RowPinningPosition, IgrActionStrip, IgrGridPinningActions, IgrGridEditingActions, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebGridDescriptionModule } from 'igniteui-react-core';
import { SALES_DATA_NEW as pivotData } from './salesDataNew';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrGridModule
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
    const pivotConfiguration = new IgrPivotConfiguration();
    const rowDim = new IgrPivotDimension();
    rowDim.enabled = true;
    rowDim.memberName = "Date";

    const colDim1 = new IgrPivotDimension();
    colDim1.enabled = true;
    colDim1.memberName = "Country";

    const colDim2 = new IgrPivotDimension();
    colDim2.enabled = true;
    colDim2.memberName = "Product";

    const aggregate1 = new IgrPivotAggregator();
    aggregate1.aggregatorName = PivotAggregationType.SUM;
    aggregate1.key = "SUM";

    const val1 = new IgrPivotValue();
    val1.enabled = true;
    val1.member = "Sales";
    val1.aggregate = aggregate1;

    const val2 = new IgrPivotValue();
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