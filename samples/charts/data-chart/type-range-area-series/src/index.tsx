import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// data chart's elements for category series:
import { IgrNumericYAxis } from "@infragistics/igniteui-react-charts";
import { IgrCategoryXAxis } from "@infragistics/igniteui-react-charts";
import { IgrRangeAreaSeries } from "@infragistics/igniteui-react-charts";
// data chart's modules:
import { IgrDataChart } from "@infragistics/igniteui-react-charts";
import { IgrDataChartCoreModule } from "@infragistics/igniteui-react-charts";
import { IgrDataChartCategoryModule } from "@infragistics/igniteui-react-charts";
import { IgrDataChartInteractivityModule } from "@infragistics/igniteui-react-charts";
// legend's modules:
import { IgrLegend } from "@infragistics/igniteui-react-charts";
import { IgrLegendModule } from "@infragistics/igniteui-react-charts";
import { SampleRangeData } from './SampleRangeData';

IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartInteractivityModule.register();
IgrLegendModule.register();

export default class DataChartTypeRangeAreaSeries extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;
    public legend: IgrLegend;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);

        this.state = { seriesType: "Column" }
        this.data = SampleRangeData.create();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container" style={{height: "calc(100% - 35px)"}} >
                    <IgrDataChart ref={this.onChartRef}
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true}
                        chartTitle="Annual Temperature Changes"
                        width="100%"
                        height="100%"
                        dataSource={this.data} >
                        <IgrCategoryXAxis name="xAxis" label="Year" gap={0.5} />
                        <IgrNumericYAxis  name="yAxis" minimumValue={20}
                        title="Temperature (°C)"/>

                        <IgrRangeAreaSeries
                            name="series1"
                            xAxisName="xAxis"
                            yAxisName="yAxis"
                            highMemberPath="High"
                            lowMemberPath="Low"
                            showDefaultTooltip="true" />
                   </IgrDataChart>
                </div>
            </div>
        );
    }

    public onChartRef(chart: IgrDataChart) {
        if (!chart) { return; }

        this.chart = chart;
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataChartTypeRangeAreaSeries/>);
