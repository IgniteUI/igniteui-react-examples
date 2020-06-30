// types of axis:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
// elements of scatter series:
import { IgrScatterAreaSeries } from 'igniteui-react-charts';
import { IgrCustomPaletteColorScale } from 'igniteui-react-charts';
import { ColorScaleInterpolationMode } from 'igniteui-react-charts';
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

export default class DataChartTypeScatterAreaSeries extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;
    public colorScale: IgrCustomPaletteColorScale;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.seriesScaleMinChanged = this.seriesScaleMinChanged.bind(this);
        this.seriesScaleMaxChanged = this.seriesScaleMaxChanged.bind(this);
        this.seriesScaleModeChanged = this.seriesScaleModeChanged.bind(this);

        this.data = SampleScatterData.create();
        this.state = {
            seriesScaleMax: 2,
            seriesScaleMin: -2,
            seriesScaleMode: "InterpolateHSV",
         }
    }

    public seriesScaleMinChanged = (e: any) => {
        const num: number = e.target.value.toString();
        this.colorScale.minimumValue = num;
        this.setState({seriesScaleMin: num});
    }

    public seriesScaleMaxChanged = (e: any) => {
        const num: number = e.target.value.toString();
        this.colorScale.maximumValue = num;
        this.setState({seriesScaleMax: num});
    }

    public seriesScaleModeChanged = (e: any) =>{
        const mode = e.target.value.toString();
        this.colorScale.interpolationMode = mode;
        this.setState({seriesScaleMode: mode});
    }

    public render(): JSX.Element {
        return (
        <div className="igContainer">
            {/* <div className="igOptions-horizontal">
                <span className="igOptions-label">Scale Mode: </span>
                <select value={this.state.seriesScaleMode}
                    onChange={this.seriesScaleModeChanged}>
                    <option>Select</option>
                    <option>InterpolateRGB</option>
                    <option>InterpolateHSV</option>
                </select>
                <label className="igOptions-label">Minimum: </label>
                <label className="igOptions-value" >
                    {this.state.seriesScaleMin}
                </label>
                <input className="igOptions-slider" type="range" min="-5" max="0" step="1"
                    value={this.state.seriesScaleMin}
                    onChange={this.seriesScaleMinChanged}/>

                <label className="igOptions-label">Maximum: </label>
                <label className="igOptions-value" >
                    {this.state.seriesScaleMax}
                </label>
                <input className="igOptions-slider" type="range" min="0" max="5" step="1"
                    value={this.state.seriesScaleMax}
                    onChange={this.seriesScaleMaxChanged}/>

            </div> */}
            <div className="igComponent" style={{height: "calc(100% - 35px)"}} >
                <IgrDataChart
                    ref={this.onChartRef}
                    isHorizontalZoomEnabled={true}
                    isVerticalZoomEnabled={true}
                    width="100%"
                    height="100%"
                    chartTitle="Magnetic Field Distribution"
                    gridMode="BeforeSeries"
                    dataSource={this.data} >
                    {/* primary axes: */}
                    <IgrNumericXAxis name="xAxis1" labelLocation="OutsideLeft"
                    minimumValue={-180} maximumValue={180} interval={30} title="Longitude" />
                    <IgrNumericYAxis name="yAxis1" labelLocation="OutsideBottom"
                    minimumValue={-90} maximumValue={90} interval={30}  title="Latitude"/>
                    {/* optional axes: */}
                    <IgrNumericXAxis name="xAxis2" labelLocation="OutsideTop"
                    minimumValue={-180} maximumValue={180} interval={30}  />
                    <IgrNumericYAxis name="yAxis2" labelLocation="OutsideRight"
                    minimumValue={-90} maximumValue={90} interval={30} title="Latitude"/>

                    <IgrScatterAreaSeries
                    name="series"
                    xAxisName="xAxis1"
                    yAxisName="yAxis1"
                    xMemberPath="X"
                    yMemberPath="Y"
                    colorMemberPath="Z"
                    showDefaultTooltip="true"/>
               </IgrDataChart>
            </div>
        </div>
        );
    }

    public onChartRef(chart: IgrDataChart) {
        if (!chart) { return; }

        this.chart = chart;

        this.colorScale = new IgrCustomPaletteColorScale({});
        this.colorScale.interpolationMode = ColorScaleInterpolationMode.InterpolateHSV;
        this.colorScale.minimumValue = -2;
        this.colorScale.maximumValue = 2;
        this.colorScale.palette = [
            "#8670CB", "#513E8C", "#003F5E",
            "#0C6B99", "#4AC4FF", "#B5CC2E",
            "#FFD034", "#FC8612", "#ED4840"
        ];
        const series = this.chart.actualSeries[0] as IgrScatterAreaSeries;
        series.colorScale = this.colorScale;
    }
}
