import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrCategoryChartModule, IgrLegendModule, IgrCategoryChart, IgrLegend } from 'igniteui-react-charts';

IgrCategoryChartModule.register();
IgrLegendModule.register();

export default class CategoryChartAxisRange extends React.Component<any, any> {
    public data: any[];

    private chart: IgrCategoryChart;
    private legend: IgrLegend;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);
        this.onYAxisMinimumValueChanged = this.onYAxisMinimumValueChanged.bind(this);
        this.onYAxisMaximumValueChanged = this.onYAxisMaximumValueChanged.bind(this);

        this.state = {
            minValue: 0,
            maxValue: 150
        };

        this.initData();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options vertical">
                    <span className="legend-title">Renewable Electricity Generated</span>
                    <div className="legend">
                        <IgrLegend ref={this.onLegendRef} orientation="horizontal" />
                    </div>
                    <div className="overlay-right">
                        <div className="options horizontal">
                            <label className="options-label">Y-Axis Minimum Value</label>
                            <label id="minLabel" className="options-value">{this.state.minValue}</label>
                            <input id="minValueSlider" type="range" min={0} max={100} step={10} value={this.state.minValue}
                                onChange={this.onYAxisMinimumValueChanged} />
                        </div>
                        <div className="options horizontal">
                            <label className="options-label">Y-Axis Maximum Value</label>
                            <label id="maxLabel" className="options-value">{this.state.maxValue}</label>
                            <input id="maxValueSlider" type="range" min={100} max={200} step={10} value={this.state.maxValue}
                                onChange={this.onYAxisMaximumValueChanged} />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <IgrCategoryChart
                        width="100%"
                        height="100%"
                        ref={this.onChartRef}
                        dataSource={this.data}
                        chartType="Line"
                        isHorizontalZoomEnabled={false}
                        isVerticalZoomEnabled={false}
                        yAxisMinimumValue={this.state.minValue}
                        yAxisMaximumValue={this.state.maxValue} />
                </div>
            </div>
        );
    }

    public onChartRef(chart: IgrCategoryChart) {
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

    public onYAxisMinimumValueChanged(e: any) {
        this.setState({ minValue: e.target.value });
    }

    public onYAxisMaximumValueChanged(e: any) {
        this.setState({ maxValue: e.target.value });
    }

    public initData() {
        this.data = [
            { Year: "2009", Europe: 31, China: 21, USA: 19 },
            { Year: "2010", Europe: 43, China: 26, USA: 24 },
            { Year: "2011", Europe: 66, China: 29, USA: 28 },
            { Year: "2012", Europe: 69, China: 32, USA: 26 },
            { Year: "2013", Europe: 58, China: 47, USA: 38 },
            { Year: "2014", Europe: 40, China: 46, USA: 31 },
            { Year: "2015", Europe: 78, China: 50, USA: 19 },
            { Year: "2016", Europe: 13, China: 90, USA: 52 },
            { Year: "2017", Europe: 78, China: 132, USA: 50 },
            { Year: "2018", Europe: 40, China: 134, USA: 34 },
            { Year: "2019", Europe: 80, China: 96, USA: 38 },
        ];
    }
}

// rendering above class to the React DOM
ReactDOM.render(<CategoryChartAxisRange />, document.getElementById('root'));
