import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrCategoryChartModule, IgrLegendModule, IgrCategoryChart, IgrLegend } from 'igniteui-react-charts';

IgrCategoryChartModule.register();
IgrLegendModule.register();

export default class CategoryChartAxisOverlap extends React.Component<any, any> {
    public data: any[];

    private chart: IgrCategoryChart;
    private legend: IgrLegend;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);
        this.onXAxisOverlapChanged = this.onXAxisOverlapChanged.bind(this);

        this.state = {
            overlap: 1
        };

        this.initData();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample" >
                <div className="options vertical">
                    <span className="legend-title">Highest Grossing Movie Franchises</span>
                    <div className="legend">
                        <IgrLegend ref={this.onLegendRef} orientation="horizontal" />
                    </div>
                    <div className="overlay-right">
                        <div className="options horizontal">
                            <label className="options-label">X-Axis Overlap</label>
                            <label className="options-value">{this.state.overlap}</label>
                            <input className="options-slider" type="range" min={0} max={1} step={0.1} value={this.state.overlap}
                                   onChange={this.onXAxisOverlapChanged} />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <IgrCategoryChart
                        ref={this.onChartRef}
                        width="100%"
                        height="100%"
                        dataSource={this.data}
                        chartType="Column"
                        isHorizontalZoomEnabled={false}
                        isVerticalZoomEnabled={false}
                        xAxisInterval={1}
                        xAxisOverlap={this.state.overlap} />
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

    public onXAxisOverlapChanged(e: any) {
        this.setState({ overlap: e.target.value });
    }

    public initData() {
        this.data = [
            { Franchise: "Marvel Universe All Films", TotalWorldBoxOfficeRevenue: 22.55, HighestGrossingMovieInSeries: 2.8 },
            { Franchise: "Star Wars", TotalWorldBoxOfficeRevenue: 10.32, HighestGrossingMovieInSeries: 2.07 },
            { Franchise: "Harry Potter", TotalWorldBoxOfficeRevenue: 9.19, HighestGrossingMovieInSeries: 1.34 },
            { Franchise: "Avengers", TotalWorldBoxOfficeRevenue: 7.76, HighestGrossingMovieInSeries: 2.8 },
            { Franchise: "Spider Man", TotalWorldBoxOfficeRevenue: 7.22, HighestGrossingMovieInSeries: 1.28 },
            { Franchise: "James Bond", TotalWorldBoxOfficeRevenue: 7.12, HighestGrossingMovieInSeries: 1.11 }
        ];
    }
}

// rendering above class to the React DOM
ReactDOM.render(<CategoryChartAxisOverlap />, document.getElementById('root'));
