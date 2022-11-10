import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrDataChartCoreModule, IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrRangeAreaSeries } from 'igniteui-react-charts';
import { TemperatureRangeDataItem, TemperatureRangeData } from './TemperatureRangeData';



const mods: any[] = [
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private xAxis: IgrCategoryXAxis
    private yAxis: IgrNumericYAxis
    private rangeAreaSeries1: IgrRangeAreaSeries
    private rangeAreaSeries2: IgrRangeAreaSeries

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Monthly Temperature Range in Los Angeles
            </div>


            <div className="container fill">
                <IgrDataChart
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    ref={this.chartRef}>
                    <IgrCategoryXAxis
                        interval="1"
                        dataSource={this.temperatureRangeData}
                        label="month"
                        name="xAxis">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        title="Temperature (in Celsius)"
                        titleAngle="-90"
                        titleLeftMargin="10"
                        name="yAxis">
                    </IgrNumericYAxis>
                    <IgrRangeAreaSeries
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        lowMemberPath="lowLA"
                        highMemberPath="highLA"
                        dataSource={this.temperatureRangeData}
                        title="Los Angeles"
                        name="RangeAreaSeries1">
                    </IgrRangeAreaSeries>
                    <IgrRangeAreaSeries
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        title="New York"
                        lowMemberPath="lowNY"
                        highMemberPath="highNY"
                        dataSource={this.temperatureRangeData}
                        name="RangeAreaSeries2">
                    </IgrRangeAreaSeries>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _temperatureRangeData: TemperatureRangeData = null;
    public get temperatureRangeData(): TemperatureRangeData {
        if (this._temperatureRangeData == null)
        {
            this._temperatureRangeData = new TemperatureRangeData();
        }
        return this._temperatureRangeData;
    }
    


}


// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
