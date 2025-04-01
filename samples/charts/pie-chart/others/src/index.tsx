import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrItemLegendModule, IgrPieChartModule } from 'igniteui-react-charts';
import { IgrItemLegend, IgrPieChart } from 'igniteui-react-charts';
import { EnergyGlobalDemandItem, EnergyGlobalDemand } from './EnergyGlobalDemand';

const mods: any[] = [
    IgrItemLegendModule,
    IgrPieChartModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrItemLegend
    private legendRef(r: IgrItemLegend) {
        this.legend = r;
        this.setState({});
    }
    private chart: IgrPieChart
    private chartRef(r: IgrPieChart) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Global Electricity Demand by Energy Use
            </div>

            <div className="legend">
                <IgrItemLegend
                    ref={this.legendRef}
                    orientation="Horizontal">
                </IgrItemLegend>
            </div>

            <div className="container fill">
                <IgrPieChart
                    ref={this.chartRef}
                    labelMemberPath="summary"
                    labelsPosition="OutsideEnd"
                    labelExtent={30}
                    valueMemberPath="value"
                    outlines="white"
                    othersCategoryThreshold={10}
                    othersCategoryType="Number"
                    othersCategoryText="Others"
                    radiusFactor={0.7}
                    legendLabelMemberPath="category"
                    dataSource={this.energyGlobalDemand}
                    legend={this.legend}>
                </IgrPieChart>
            </div>
        </div>
        );
    }

    private _energyGlobalDemand: EnergyGlobalDemand = null;
    public get energyGlobalDemand(): EnergyGlobalDemand {
        if (this._energyGlobalDemand == null)
        {
            this._energyGlobalDemand = new EnergyGlobalDemand();
        }
        return this._energyGlobalDemand;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);