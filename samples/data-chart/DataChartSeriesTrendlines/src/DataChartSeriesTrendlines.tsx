// data chart's elements for category series:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
import { IgrColumnSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { SampleFinancialData } from "./SampleFinancialData";
import { IgrFinancialPriceSeries } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryTrendLineModule } from 'igniteui-react-charts';
// legend's modules:
import * as React from "react";
import "../styles.css";
import "./DataChartSharedStyles.css";
import { DataChartSharedComponent } from "./DataChartSharedComponent";

IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartInteractivityModule.register();
IgrDataChartCategoryTrendLineModule.register();

export default class DataChartSeriesTrendlines extends DataChartSharedComponent {
    public data: any[];
    public chart: IgrDataChart;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onTrendlineChange = this.onTrendlineChange.bind(this);

        this.state = { trendLineType: "CubicFit" };

        this.initData();
    }

    public render() {
        return (
            <div className="sample">

                <div className="options">
                    <span className="optionItem">Trendline Type:</span>
                    <select value={this.state.trendLineType} onChange={this.onTrendlineChange}>
                        <option>None</option>
                        <option>CubicFit</option>
                        <option>CumulativeAverage</option>
                        <option>ExponentialAverage</option>
                        <option>ExponentialFit</option>
                        <option>LinearFit</option>
                        <option>LogarithmicFit</option>
                        <option>ModifiedAverage</option>
                        <option>PowerLawFit</option>
                        <option>QuadraticFit</option>
                        <option>QuarticFit</option>
                        <option>QuinticFit</option>
                        <option>SimpleAverage</option>
                        <option>WeightedAverage</option>
                    </select>
                </div>
                <div className="chart" style={{height: "calc(100% - 35px)"}} >
                    <IgrDataChart
                        ref={this.onChartRef}
                        dataSource={this.data}
                        width="100%"
                        height="100%"
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true} >

                        <IgrCategoryXAxis name="xAxis" label="Label" />
                        <IgrNumericYAxis name="yAxis" />

                        <IgrFinancialPriceSeries
                            name="series1"
                            xAxisName="xAxis"
                            yAxisName="yAxis"
                            highMemberPath="High"
                            lowMemberPath="Low"
                            closeMemberPath="Close"
                            openMemberPath="Open"
                            volumeMemberPath="Volume"
                            trendLineType={this.state.trendLineType} />

                    </IgrDataChart>
                </div>
            </div>
        );
    }

    public onTrendlineChange = (e: any) => {
        this.setState({ trendLineType: e.target.value });
    }

    public initData() {
        this.data = SampleFinancialData.create();
    }

    public onChartRef(chart: IgrDataChart) {
        this.chart = chart;
    }
}
