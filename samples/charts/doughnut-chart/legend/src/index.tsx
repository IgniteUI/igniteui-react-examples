import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrItemLegendModule, IgrDoughnutChartModule } from 'igniteui-react-charts';
import { IgrItemLegend, IgrDoughnutChart, IgrRingSeries } from 'igniteui-react-charts';
import { EnergyGlobalDemandItem, EnergyGlobalDemand } from './EnergyGlobalDemand';

const mods: any[] = [
    IgrItemLegendModule,
    IgrDoughnutChartModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrItemLegend
    private legendRef(r: IgrItemLegend) {
        this.legend = r;
        this.setState({});
    }
    private chart: IgrDoughnutChart
    private chartRef(r: IgrDoughnutChart) {
        this.chart = r;
        this.setState({});
    }
    private series: IgrRingSeries

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
                <IgrDoughnutChart
                    ref={this.chartRef}
                    allowSliceExplosion="true">
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
                        dataSource={this.energyGlobalDemand}
                        legend={this.legend}>
                    </IgrRingSeries>
                </IgrDoughnutChart>
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