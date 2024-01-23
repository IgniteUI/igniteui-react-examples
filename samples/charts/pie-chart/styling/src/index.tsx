import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPieChartModule, IgrItemLegendModule } from 'igniteui-react-charts';
import { IgrItemLegend, IgrPieChart } from 'igniteui-react-charts';
import { EnergyGlobalDemandItem, EnergyGlobalDemand } from './EnergyGlobalDemand';

const mods: any[] = [
    IgrPieChartModule,
    IgrItemLegendModule
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

    public componentDidMount() {
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
                    legendLabelMemberPath="category"
                    valueMemberPath="value"
                    labelMemberPath="summary"
                    labelsPosition="OutsideEnd"
                    labelExtent="30"
                    brushes="rgba(247, 210, 98, 1) rgba(168, 168, 183, 1) rgba(224, 81, 169, 1) rgba(248, 161, 95, 1) rgba(115, 86, 86, 1)"
                    outlines="white"
                    radiusFactor="0.7"
                    startAngle="0"
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