import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrLegendModule, IgrDataChartCoreModule, IgrDataChartRadialModule, IgrDataChartRadialCoreModule, IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrLegend, IgrDataChart, IgrCategoryAngleAxis, IgrNumericRadiusAxis, IgrRadialLineSeries } from 'igniteui-react-charts';
import { FootballPlayerStatsItem, FootballPlayerStats } from './FootballPlayerStats';



const mods: any[] = [
    IgrLegendModule,
    IgrDataChartCoreModule,
    IgrDataChartRadialModule,
    IgrDataChartRadialCoreModule,
    IgrDataChartInteractivityModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrLegend
    private legendRef(r: IgrLegend) {
        this.legend = r;
        this.setState({});
    }
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private angleAxis: IgrCategoryAngleAxis
    private radiusAxis: IgrNumericRadiusAxis
    private radialLineSeries1: IgrRadialLineSeries
    private radialLineSeries2: IgrRadialLineSeries

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Ronaldo vs Messi Player Stats
            </div>

            <div className="legend">
                <IgrLegend
                    orientation="Horizontal"
                    ref={this.legendRef}>
                </IgrLegend>
            </div>

            <div className="container fill">
                <IgrDataChart
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    legend={this.legend}
                    ref={this.chartRef}>
                    <IgrCategoryAngleAxis
                        dataSource={this.footballPlayerStats}
                        label="attribute"
                        name="angleAxis">
                    </IgrCategoryAngleAxis>
                    <IgrNumericRadiusAxis
                        innerRadiusExtentScale="0.1"
                        minimumValue="0"
                        maximumValue="10"
                        interval="2"
                        name="radiusAxis">
                    </IgrNumericRadiusAxis>
                    <IgrRadialLineSeries
                        valueMemberPath="ronaldo"
                        angleAxisName="angleAxis"
                        valueAxisName="radiusAxis"
                        markerType="Circle"
                        dataSource={this.footballPlayerStats}
                        thickness="3"
                        areaFillOpacity="0.8"
                        showDefaultTooltip="true"
                        title="Ronaldo"
                        name="RadialLineSeries1">
                    </IgrRadialLineSeries>
                    <IgrRadialLineSeries
                        dataSource={this.footballPlayerStats}
                        angleAxisName="angleAxis"
                        valueAxisName="radiusAxis"
                        valueMemberPath="messi"
                        showDefaultTooltip="true"
                        areaFillOpacity="0.8"
                        thickness="3"
                        title="Messi"
                        markerType="Circle"
                        name="RadialLineSeries2">
                    </IgrRadialLineSeries>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _footballPlayerStats: FootballPlayerStats = null;
    public get footballPlayerStats(): FootballPlayerStats {
        if (this._footballPlayerStats == null)
        {
            this._footballPlayerStats = new FootballPlayerStats();
        }
        return this._footballPlayerStats;
    }
    


}


// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
