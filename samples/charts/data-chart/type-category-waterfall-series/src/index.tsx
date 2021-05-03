import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

// importing axis' modules:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
// importing category series' modules:
import { IgrWaterfallSeries } from 'igniteui-react-charts';
// importing data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
// importing legend's modules:
import { IgrLegend } from 'igniteui-react-charts';
import { IgrLegendModule } from 'igniteui-react-charts';


IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartInteractivityModule.register();
IgrLegendModule.register();

export default class DataChartTypeCategoryWaterfallSeries extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;
    public legend: IgrLegend;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);
        this.data = this.getData();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container" style={{ height: "100%" }} >
                    <IgrDataChart ref={this.onChartRef}
                        width="100%"
                        height="100%"
                        chartTitle="Company Profitability"
                        dataSource={this.data}
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true} >
                        <IgrCategoryXAxis name="xAxis" label="Category"  />
                        <IgrNumericYAxis  name="yAxis" minimumValue={0} />
                        <IgrWaterfallSeries
                            name="series1"
                            xAxisName="xAxis"
                            yAxisName="yAxis"
                            valueMemberPath="Value"
                            showDefaultTooltip="true"
                            title="Value" />
                    </IgrDataChart>
                </div>
            </div>
        );
    }

    public onLegendRef(legend: IgrLegend) {
        if (!legend) { return; }

        this.legend = legend;
        if (this.chart) {
            this.chart.legend = this.legend;
        }
    }

    public onChartRef(chart: IgrDataChart) {
        if (!chart) { return; }

        this.chart = chart;
        if (this.chart) {
            this.chart.legend = this.legend;
        }
    }

    public getData(): any[] {
        const data: any = [
            { Value: 600, Category: "Revenue" },
            { Value: 900, Category: "Capital Gains" },
            { Value: 500, Category: "Fixed Cost" },
            { Value: 400, Category: "Variable Cost" },
            { Value: 700, Category: "Profit" },
        ];

        return data;
    }
}

// rendering above class to the React DOM
ReactDOM.render(<DataChartTypeCategoryWaterfallSeries />, document.getElementById('root'));