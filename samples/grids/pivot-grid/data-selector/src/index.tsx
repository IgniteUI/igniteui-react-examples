import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { SALES_DATA_NEW as pivotData } from './salesDataNew';
import { IgrPivotConfiguration, IgrPivotDataSelector, IgrPivotDateDimension, IgrPivotGrid } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

export default function App() {
    let grid: IgrPivotGrid;
    const gridRef = (r: IgrPivotGrid) => {
        grid = r;
    }
    const selector = (selector: IgrPivotDataSelector) => {
        selector.grid = grid;
    }
    const pivotConfiguration: IgrPivotConfiguration = {
        rows: [
            new IgrPivotDateDimension({
                enabled: true,
                memberName: "Date",
            })
        ],
        columns: [
            {
                enabled: true,
                memberName: "Country",
            },
            {
                enabled: true,
                memberName: "Product",
            },
        ],
        values: [
            {
                enabled: true,
                member: "Sales",
                aggregate: {
                    aggregatorName: "SUM",
                    key: "SUM",
                    label: "SUM",
                },
            },
            {
                enabled: true,
                member: "Profit",
                aggregate: {
                    aggregatorName: "SUM",
                    key: "SUM",
                    label: "SUM",
                },
            },
        ],
    };

    return (
        <>
            <div className="container sample ig-typography">
                <div className="container fill">
                    <div className="pivot-container">
                        <div>
                            <IgrPivotGrid data={pivotData} ref={gridRef} pivotConfiguration={pivotConfiguration} defaultExpandState={true} superCompactMode={true}>
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