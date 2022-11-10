import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// axis' modules:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
// series' modules:
import { IgrScatterPolygonSeries } from 'igniteui-react-charts';
import { IgrScatterPolylineSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartShapeCoreModule } from 'igniteui-react-charts';
import { IgrDataChartShapeModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { SampleShapeData } from './SampleShapeData';

IgrDataChartCoreModule.register();
IgrDataChartShapeCoreModule.register();
IgrDataChartShapeModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartTypeShapeSeries extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onSeriesTypeChanged = this.onSeriesTypeChanged.bind(this);

        this.state = { seriesType: "Polygon" }
        this.data = SampleShapeData.create();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">

            <div className="options horizontal">
                    <label className="options-label">Shape Series: </label>
                    <select value={this.state.seriesType}
                        onChange={this.onSeriesTypeChanged}>
                        <option>Polygon</option>
                        <option>Polyline</option>
                    </select>
                </div>
                <div className="container" style={{height: "calc(100% - 35px)"}} >
                    <IgrDataChart ref={this.onChartRef}
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true}
                        width="100%"
                        height="100%"
                        dataSource={this.data} >
                        <IgrNumericXAxis name="xAxis" />
                        <IgrNumericYAxis name="yAxis" />

                        {/* series are created in the setSeries function
                        alternatively, you can create these elements using this code: */}
                        {/* <IgrScatterPolygonSeries
                            name="series1"
                            xAxisName="xAxis"
                            yAxisName="yAxis"
                            shapeMemberPath="Points"
                            title="House Floor Plan"
                            brush="Gray"
                            outline="Black"/> */}
                   </IgrDataChart>
                </div>
            </div>
        );
    }

    public onChartRef(chart: IgrDataChart) {
        if (!chart) { return; }

        this.chart = chart;
        this.setSeries("Polygon");
    }

    public onSeriesTypeChanged(e: any) {
        const selectedSeries = e.target.value.toString();
        this.setState({seriesType: selectedSeries});
        this.setSeries(selectedSeries);
    }

    public setSeries(seriesType: string)
    {
         if (seriesType === "Polygon") {

            const series1 = new IgrScatterPolygonSeries({ name: "series1" });
            series1.shapeMemberPath = "Points";
            series1.title = "House Floor Plan";
            series1.brush = "Gray";
            series1.outline = "Black";
            series1.xAxisName = "xAxis";
            series1.yAxisName = "yAxis";
            this.chart.series.clear();
            this.chart.series.add(series1);

        } else if (seriesType === "Polyline") {

            const series1 = new IgrScatterPolylineSeries({ name: "series1" });
            series1.shapeMemberPath = "Points";
            series1.title = "House Outline";
            series1.brush = "Black";
            series1.outline = "Black";
            series1.xAxisName = "xAxis";
            series1.yAxisName = "yAxis";

            this.chart.series.clear();
            this.chart.series.add(series1);
        }
    }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataChartTypeShapeSeries/>);
