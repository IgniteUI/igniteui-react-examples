// types of axis:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
// elements of scatter series:
import { IgrScatterContourSeries } from 'igniteui-react-charts';
import { IgrValueBrushScale } from 'igniteui-react-charts';
import { IgrLinearContourValueResolver } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';

import * as React from 'react';



import { SampleScatterData } from './SampleScatterData';

IgrDataChartCoreModule.register();
IgrDataChartScatterCoreModule.register();
IgrDataChartScatterModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartTypeScatterContourSeries extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.data = SampleScatterData.create();

        this.state = {
            seriesContours: 10,
            seriesThickness: 3,
        };
    }

    public onSeriesThicknessChanged = (e: any) => {
        const num: number = parseInt(e.target.value, 10);
        this.setState({ seriesThickness: num });
    }

    public onSeriesContoursChanged = (e: any) => {
        const num: number = parseInt(e.target.value, 10);

        const series = this.chart.actualSeries[0] as IgrScatterContourSeries;
        if (series !== undefined) {
            const contours = new IgrLinearContourValueResolver({});
            contours.valueCount = num;
            series.valueResolver = contours;
        }
        this.setState({ seriesContours: num });
    }

    public render() {
        return (
        <div className="igContainer">
            {/* <div className="igOptions">
                <label className="igOptions-label">Thickness: </label>
                <label className="igOptions-value" >
                    {this.state.seriesThickness}
                </label>
                <input className="igOptions-slider" type="range" min="1" max="10" step="1"
                    value={this.state.seriesThickness}
                    onChange={this.onSeriesThicknessChanged}/>

                <label className="igOptions-label">Contours: </label>
                <label className="igOptions-value" >
                    {this.state.seriesContours}
                </label>
                <input className="igOptions-slider" type="range" min="1" max="15" step="1"
                    value={this.state.seriesContours}
                    onChange={this.onSeriesContoursChanged}/>
            </div> */}
            <div className="igComponent" style={{height: "calc(100% - 35px)"}} >
                <IgrDataChart
                    ref={this.onChartRef}
                    isHorizontalZoomEnabled={true}
                    isVerticalZoomEnabled={true}
                    width="100%"
                    height="100%"
                    chartTitle="Magnetic Field Lines"
                    gridMode="BeforeSeries"
                    dataSource={this.data} >
                    {/* primary axes: */}
                    <IgrNumericXAxis name="xAxis1" labelLocation="OutsideLeft"
                    minimumValue={-180} maximumValue={180} interval={30} title="Longitude" />
                    <IgrNumericYAxis name="yAxis1" labelLocation="OutsideBottom"
                    minimumValue={-90} maximumValue={90} interval={30} title="Latitude"/>
                    {/* optional axes: */}
                    <IgrNumericXAxis name="xAxis2" labelLocation="OutsideTop"
                    minimumValue={-180} maximumValue={180} interval={30} />
                    <IgrNumericYAxis name="yAxis2" labelLocation="OutsideRight"
                    minimumValue={-90} maximumValue={90} interval={30} title="Latitude"/>

                    <IgrScatterContourSeries
                    name="series"
                    xAxisName="xAxis1"
                    yAxisName="yAxis1"
                    xMemberPath="X"
                    yMemberPath="Y"
                    valueMemberPath="Z"
                    thickness={this.state.seriesThickness}
                    showDefaultTooltip="true" />
               </IgrDataChart>
            </div>
        </div>
        );
    }

    public onChartRef(chart: IgrDataChart) {
        this.chart = chart;

        const brushScale = new IgrValueBrushScale({});
        brushScale.minimumValue = -2;
        brushScale.maximumValue = 2;
        brushScale.brushes = [
            "#8670CB", "#513E8C", "#003F5E",
            "#0C6B99", "#4AC4FF", "#B5CC2E",
            "#FFD034", "#FC8612", "#ED4840"
        ];
        const series = this.chart.actualSeries[0] as IgrScatterContourSeries;
        series.fillScale = brushScale;
    }
}
