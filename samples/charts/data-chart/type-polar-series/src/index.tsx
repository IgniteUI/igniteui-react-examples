import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

// axis modules:
import { IgrNumericAngleAxis } from 'igniteui-react-charts';
import { IgrNumericRadiusAxis } from 'igniteui-react-charts';
// series modules:
import { IgrPolarAreaSeries } from 'igniteui-react-charts';
import { IgrPolarLineSeries } from 'igniteui-react-charts';
import { IgrPolarSplineSeries } from 'igniteui-react-charts';
import { IgrPolarSplineAreaSeries } from 'igniteui-react-charts';
import { IgrPolarScatterSeries } from 'igniteui-react-charts';
// data chart's modules:
import { MarkerType } from 'igniteui-react-charts';
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartPolarCoreModule } from 'igniteui-react-charts';
import { IgrDataChartPolarModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
// legend's modules:
import { IgrLegend } from 'igniteui-react-charts';
import { IgrLegendModule } from 'igniteui-react-charts';

import { SamplePolarData } from './SamplePolarData';

IgrDataChartCoreModule.register();
IgrDataChartPolarCoreModule.register();
IgrDataChartPolarModule.register();
IgrDataChartInteractivityModule.register();
IgrLegendModule.register();

export default class DataChartTypePolarSeries extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;
    public legend: IgrLegend;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);
        this.onSeriesTypeChanged = this.onSeriesTypeChanged.bind(this);

        this.state = { seriesType: "Spline" }
        this.data = SamplePolarData.create();
    }

    public render(): JSX.Element {
        return (
            <div className="igContainer">
                <div className="igOptions-horizontal">
                    <span className="igOptions-label">Type of Polar Series: </span>
                    <select value={this.state.seriesType}
                        onChange={this.onSeriesTypeChanged}>
                        <option>Area</option>
                        <option>Spline Area</option>
                        <option>Spline</option>
                        <option>Line</option>
                        <option>Scatter</option>
                    </select>
                    <span className="igLegend-title">Legend: </span>
                    <div className="igLegend">
                        <IgrLegend ref={this.onLegendRef} orientation="Horizontal" />
                    </div>
                </div>
                <div className="igComponent" style={{height: "calc(100% - 35px)"}} >
                    <IgrDataChart ref={this.onChartRef}
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true}
                        titleTopMargin="10px"
                        chartTitle="Sailing Chart"
                        subtitle="Wind Speed vs. Boat Speed"
                        width="100%"
                        height="100%"
                        dataSource={this.data} >
                        <IgrNumericAngleAxis  name="angleAxis"
                        startAngleOffset={-90}
                        interval={30}
                        minimumValue={0}
                        maximumValue={360}/>
                        <IgrNumericRadiusAxis name="radiusAxis"
                        innerRadiusExtentScale={0.1}
                        radiusExtentScale={0.9}
                        minimumValue={0}
                        maximumValue={100}
                        interval={25}/>

                        {/* series are created in the setSeries function
                        alternatively, you can create these elements using this code: */}
                        {/* <IgrPolarAreaSeries
                            name="series1"
                            angleMemberPath="Direction"
                            radiusMemberPath="WindSpeed"
                            radiusAxisName="radiusAxis"
                            angleAxisName="angleAxis"/> */}
                   </IgrDataChart>
                </div>
            </div>
        );
    }

    public onSeriesTypeChanged(e: any) {
        const selectedSeries = e.target.value.toString();
        this.setState({seriesType: selectedSeries});
        this.setSeries(selectedSeries);
    }

    public setSeries(seriesType: string)
    {
         if (seriesType === "Area") {
            // creating a series with mapping to data columns of wind pattern
            const series1 = new IgrPolarAreaSeries({ name: "series1" });
            series1.angleMemberPath = "Direction";
            series1.radiusMemberPath  = "BoatSpeed";
            series1.radiusAxisName = "radiusAxis";
            series1.angleAxisName = "angleAxis";
            const series2 = new IgrPolarAreaSeries({ name: "series2" });
            series2.angleMemberPath = "Direction";
            series2.radiusMemberPath  = "WindSpeed";
            series2.radiusAxisName = "radiusAxis";
            series2.angleAxisName = "angleAxis";

            series1.areaFillOpacity = 1;
            series2.areaFillOpacity = 1;
            series1.markerType = MarkerType.Circle;
            series2.markerType = MarkerType.Circle;
            series1.title = "Boat Speed";
            series2.title = "Wind Speed";
            this.chart.series.clear();
            this.chart.series.add(series2);
            this.chart.series.add(series1);

        } else if (seriesType === "Spline Area") {
            // creating a series with mapping to data columns of wind pattern
            const series1 = new IgrPolarSplineAreaSeries({ name: "series1" });
            series1.angleMemberPath = "Direction";
            series1.radiusMemberPath  = "BoatSpeed";
            series1.radiusAxisName = "radiusAxis";
            series1.angleAxisName = "angleAxis";

            const series2 = new IgrPolarSplineAreaSeries({ name: "series2" });
            series2.angleMemberPath = "Direction";
            series2.radiusMemberPath  = "WindSpeed";
            series2.radiusAxisName = "radiusAxis";
            series2.angleAxisName = "angleAxis";

            series1.areaFillOpacity = 0.3;
            series2.areaFillOpacity = 0.3;
            series1.markerType = MarkerType.Circle;
            series2.markerType = MarkerType.Circle;
            series1.title = "Boat Speed";
            series2.title = "Wind Speed";
            this.chart.series.clear();
            this.chart.series.add(series2);
            this.chart.series.add(series1);

        } else if (seriesType === "Spline") {
            // creating a series with mapping to data columns of wind pattern
            const series1 = new IgrPolarSplineSeries({ name: "series1" });
            series1.angleMemberPath = "Direction";
            series1.radiusMemberPath  = "BoatSpeed";
            series1.radiusAxisName = "radiusAxis";
            series1.angleAxisName = "angleAxis";
            const series2 = new IgrPolarSplineSeries({ name: "series2" });
            series2.angleMemberPath = "Direction";
            series2.radiusMemberPath  = "WindSpeed";
            series2.radiusAxisName = "radiusAxis";
            series2.angleAxisName = "angleAxis";

            series1.markerType = MarkerType.Circle;
            series2.markerType = MarkerType.Circle;
            series1.title = "Boat Speed";
            series2.title = "Wind Speed";
            this.chart.series.clear();
            this.chart.series.add(series2);
            this.chart.series.add(series1);

        } else if (seriesType === "Line") {
            // creating a series with mapping to data columns of wind pattern
            const series1 = new IgrPolarLineSeries({ name: "series1" });
            series1.angleMemberPath = "Direction";
            series1.radiusMemberPath  = "BoatSpeed";
            series1.radiusAxisName = "radiusAxis";
            series1.angleAxisName = "angleAxis";
            const series2 = new IgrPolarLineSeries({ name: "series2" });
            series2.angleMemberPath = "Direction";
            series2.radiusMemberPath  = "WindSpeed";
            series2.radiusAxisName = "radiusAxis";
            series2.angleAxisName = "angleAxis";

            series1.markerType = MarkerType.Circle;
            series2.markerType = MarkerType.Circle;
            series1.title = "Boat Speed";
            series2.title = "Wind Speed";
            this.chart.series.clear();
            this.chart.series.add(series2);
            this.chart.series.add(series1);

        } else if (seriesType === "Scatter") {
            // creating a series with mapping to data columns of wind pattern
            const series1 = new IgrPolarScatterSeries({ name: "series1" });
            series1.angleMemberPath = "Direction";
            series1.radiusMemberPath  = "BoatSpeed";
            series1.radiusAxisName = "radiusAxis";
            series1.angleAxisName = "angleAxis";
            const series2 = new IgrPolarScatterSeries({ name: "series2" });
            series2.angleMemberPath = "Direction";
            series2.radiusMemberPath  = "WindSpeed";
            series2.radiusAxisName = "radiusAxis";
            series2.angleAxisName = "angleAxis";

            series1.markerType = MarkerType.Circle;
            series2.markerType = MarkerType.Circle;
            series1.title = "Boat Speed";
            series2.title = "Wind Speed";
            this.chart.series.clear();
            this.chart.series.add(series2);
            this.chart.series.add(series1);
        }
    }

    public onChartRef(chart: IgrDataChart) {
        if (!chart) { return; }

        this.chart = chart;
        if (this.legend) {
            this.chart.legend = this.legend;
            this.setSeries("Spline");
        }
    }

    public onLegendRef(legend: IgrLegend) {
        if (!legend) { return; }

        this.legend = legend;
        if (this.chart) {
            this.chart.legend = this.legend;
            this.setSeries("Spline");
        }
    }
}

// rendering above class to the React DOM
ReactDOM.render(<DataChartTypePolarSeries />, document.getElementById('root'));