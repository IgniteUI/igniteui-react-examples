import React, { useState, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrDataPieChartModule, IgrItemLegendModule } from 'igniteui-react-charts';
import { IgrItemLegend, IgrDataPieChart } from 'igniteui-react-charts';
import { EnergyGlobalDemand } from './EnergyGlobalDemand';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrDataPieChartModule,
    IgrItemLegendModule
];
mods.forEach(m => m.register());

export default function Sample() {
    // useState stores the component instances so that when one becomes available
    // React re-renders and the other component can receive it as a prop.
    const [legend, setLegend] = useState<IgrItemLegend | null>(null);
    const [chart, setChart] = useState<IgrDataPieChart | null>(null);

    // useMemo creates these once – equivalent to the lazy backing-field getters in the class
    const energyGlobalDemand = useMemo(() => new EnergyGlobalDemand(), []);

    return (
        <div className="container sample">
            <div className="legend-title">
                Global Electricity Demand by Energy Use
            </div>

            <div className="legend">
                <IgrItemLegend
                    ref={(r: IgrItemLegend) => { if (r) setLegend(r); }}
                    orientation="Horizontal"
                />
            </div>

            <div className="container fill">
                <IgrDataPieChart
                    ref={(r: IgrDataPieChart) => { if (r) setChart(r); }}
                    dataSource={energyGlobalDemand}
                    legend={legend ?? undefined}
                />
            </div>
        </div>
    );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
