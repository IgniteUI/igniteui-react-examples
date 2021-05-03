import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// data chart's elements for category series:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
import { IgrColumnSeries } from 'igniteui-react-charts';
import { IgrValueOverlay } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
// legend's modules:
import { IgrLegend } from 'igniteui-react-charts';
import { IgrLegendModule } from 'igniteui-react-charts';

IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartInteractivityModule.register();
IgrLegendModule.register();

export default class DataChartValueOverlay extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;
    public legend: IgrLegend;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);

        this.initData();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container" style={{height: "calc(100% - 35px)"}}>
                    <IgrDataChart width="100%"
                        height="100%"
                        dataSource={this.data}
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true} >

                        <IgrCategoryXAxis name="xAxis" label="Label" />
                        <IgrNumericYAxis name="yAxis" minimumValue={0} maximumValue={10} />

                        <IgrColumnSeries name="series1" xAxisName="xAxis" yAxisName="yAxis" valueMemberPath="Value" />

                        <IgrValueOverlay name="overlay1" axisName="yAxis" value={2.0} thickness={5} />
                        <IgrValueOverlay name="overlay2" axisName="yAxis" value={3.6} thickness={5} />
                        <IgrValueOverlay name="overlay3" axisName="yAxis" value={5.8} thickness={5} />
                        <IgrValueOverlay name="overlay4" axisName="yAxis" value={1.0} thickness={5} />
                        <IgrValueOverlay name="overlay5" axisName="yAxis" value={8.0} thickness={5} />
                        <IgrValueOverlay name="overlay6" axisName="yAxis" value={7.0} thickness={5} />
                        <IgrValueOverlay name="overlay7" axisName="yAxis" value={5.0} thickness={5} />
                    </IgrDataChart>
                </div>
            </div >
        );
    }

    public initData() {
        this.data = [
            { "Label": 1, "Value": 1.0 },
            { "Label": 2, "Value": 2.0 },
            { "Label": 3, "Value": 6.0 },
            { "Label": 4, "Value": 8.0 },
            { "Label": 5, "Value": 2.0 },
            { "Label": 6, "Value": 6.0 },
            { "Label": 7, "Value": 4.0 },
            { "Label": 8, "Value": 2.0 },
            { "Label": 9, "Value": 1.0 },
        ];
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
ReactDOM.render(<DataChartValueOverlay />, document.getElementById('root'));
