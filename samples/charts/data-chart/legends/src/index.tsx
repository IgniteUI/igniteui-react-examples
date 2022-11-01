import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// data chart's elements for category series:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
import { IgrColumnSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrNumberAbbreviatorModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
// legend's modules:
import { IgrLegend } from 'igniteui-react-charts';
import { IgrLegendModule } from 'igniteui-react-charts';
import { DataChartSharedData } from './DataChartSharedData';

IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrNumberAbbreviatorModule.register();
IgrDataChartInteractivityModule.register();
IgrLegendModule.register();

export default class DataChartLegends extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;
    public legend: IgrLegend;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);

        this.data = DataChartSharedData.getEnergyProduction();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <div className="options vertical">
                        <IgrLegend ref={this.onLegendRef} orientation="Horizontal" />
                    </div>
                </div>
                <div className="container" style={{height: "calc(100% - 35px)"}} >
                    <IgrDataChart
                        dataSource={this.data}
                        ref={this.onChartRef}
                        width="100%" height="100%"
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true} >

                        <IgrCategoryXAxis name="xAxis" label="Country" />
                        <IgrNumericYAxis name="yAxis" minimumValue={0}
                        abbreviateLargeNumbers={true}  />

                        <IgrColumnSeries name="series1" title="Coal" xAxisName="xAxis"
                            yAxisName="yAxis" valueMemberPath="Coal" />
                        <IgrColumnSeries name="series2" title="Hydro" xAxisName="xAxis"
                            yAxisName="yAxis" valueMemberPath="Hydro" />
                        <IgrColumnSeries name="series3" title="Nuclear" xAxisName="xAxis"
                            yAxisName="yAxis" valueMemberPath="Nuclear" />
                        <IgrColumnSeries name="series4" title="Gas" xAxisName="xAxis"
                            yAxisName="yAxis" valueMemberPath="Gas" />
                        <IgrColumnSeries name="series5" title="Oil" xAxisName="xAxis"
                            yAxisName="yAxis" valueMemberPath="Oil" />
                    </IgrDataChart>

                </div>
            </div>
        );
    }

    public onChartRef(chart: IgrDataChart) {
        if (!chart) { return; }

        this.chart = chart;
        if (this.legend) {
            this.chart.legend = this.legend;
        }
    }

    public onLegendRef(legend: IgrLegend) {
        if (!legend) { return; }

        this.legend = legend;
        if (this.chart) {
            this.chart.legend = this.legend;
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataChartLegends/>);
