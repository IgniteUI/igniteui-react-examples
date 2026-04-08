import React, { useState, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrItemLegendModule, IgrDoughnutChartModule } from 'igniteui-react-charts';
import { IgrItemLegend, IgrDoughnutChart, IgrRingSeries } from 'igniteui-react-charts';
import { EnergyGlobalDemand } from './EnergyGlobalDemand';

const mods: any[] = [
    IgrItemLegendModule,
    IgrDoughnutChartModule
];
mods.forEach(m => m.register());

export default function Sample() {
    // useState for legend and chart instances so that when either becomes available
    // the component re-renders and can wire the legend prop onto the ring series.
    const [legend, setLegend] = useState<IgrItemLegend | null>(null);

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
                <IgrDoughnutChart allowSliceExplosion="true">
                    <IgrRingSeries
                        name="series"
                        labelMemberPath="summary"
                        labelsPosition="OutsideEnd"
                        labelExtent="30"
                        valueMemberPath="value"
                        legendLabelMemberPath="category"
                        outlines="white"
                        radiusFactor="0.6"
                        startAngle="30"
                        dataSource={energyGlobalDemand}
                        legend={legend ?? undefined}
                    />
                </IgrDoughnutChart>
            </div>
        </div>
    );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
