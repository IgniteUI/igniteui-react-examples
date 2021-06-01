import { DataEuropeItem, DataEurope } from './SampleData';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { IgrSizeScale } from 'igniteui-react-charts';
import { IgrNumberAbbreviatorModule, IgrDataChartCoreModule, IgrDataChartScatterModule, IgrDataChartScatterCoreModule, IgrDataChartInteractivityModule } from 'igniteui-react-charts';

import { IgrDataChart, IgrNumericXAxis, IgrNumericYAxis, IgrBubbleSeries } from 'igniteui-react-charts';
const mods: any[] = [
    IgrNumberAbbreviatorModule,
    IgrDataChartCoreModule,
    IgrDataChartScatterModule,
    IgrDataChartScatterCoreModule,
    IgrDataChartInteractivityModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private xAxis: IgrNumericXAxis
    private yAxis: IgrNumericYAxis
    private bubbleSeries1: IgrBubbleSeries

    private sizeScale: IgrSizeScale = new IgrSizeScale({});
    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);

        this.sizeScale = new IgrSizeScale({});
        this.sizeScale.minimumValue = 10;
        this.sizeScale.maximumValue = 50;
   }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                GDP per Capita vs Hours Worked per Week
            </div>
            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}>
                    <IgrNumericXAxis
                        title="Hours Worked per Week"
                        name="xAxis">
                    </IgrNumericXAxis>
                    <IgrNumericYAxis
                        isLogarithmic="false"
                        abbreviateLargeNumbers="true"
                        title="GDP per Capita"
                        name="yAxis">
                    </IgrNumericYAxis>
                    <IgrBubbleSeries
                        radiusMemberPath="population"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        xMemberPath="workedHours"
                        yMemberPath="gDP"
                        markerType="Circle"
                        dataSource={this.dataEurope}
                        showDefaultTooltip="true"
                        title="European Countries"
                        name="BubbleSeries1"
                        radiusScale={this.sizeScale}>
                    </IgrBubbleSeries>
                </IgrDataChart>
            </div>
        </div>
        );
   }

    private _dataEurope: DataEurope = null;
    public get dataEurope(): DataEurope {
        if (this._dataEurope == null)
        {
            this._dataEurope = new DataEurope();
        }
        return this._dataEurope;
    }

}
// rendering above component in the React DOM
ReactDOM.render(<Sample />, document.getElementById('root'));
