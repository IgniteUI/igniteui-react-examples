import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// data chart's elements for category series:
import { IgrNumericYAxis } from "@infragistics/igniteui-react-charts";
import { IgrCategoryXAxis } from "@infragistics/igniteui-react-charts";
import { IgrColumnSeries } from "@infragistics/igniteui-react-charts";
// data chart's modules:
import { IgrDataChart } from "@infragistics/igniteui-react-charts";
import { IgrDataChartCoreModule } from "@infragistics/igniteui-react-charts";
import { IgrDataChartCategoryModule } from "@infragistics/igniteui-react-charts";
import { SampleFinancialData } from './SampleFinancialData';
import { IgrFinancialPriceSeries } from "@infragistics/igniteui-react-charts";
import { IgrDataChartInteractivityModule } from "@infragistics/igniteui-react-charts";
import { IgrDataChartCategoryTrendLineModule } from "@infragistics/igniteui-react-charts";
// legend's modules:

IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartInteractivityModule.register();
IgrDataChartCategoryTrendLineModule.register();

export default class DataChartSeriesTrendlines extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onTrendlineChange = this.onTrendlineChange.bind(this);

        this.state = { trendLineType: "CubicFit" };

        this.initData();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">

                <div className="options horizontal">
                    <label className="options-label">Trendline Type:</label>
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
                <div className="container" style={{height: "calc(100% - 35px)"}} >
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
        if (!chart) { return; }

        this.chart = chart;
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataChartSeriesTrendlines/>);
