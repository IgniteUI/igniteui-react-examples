import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrCategoryChart } from 'igniteui-react-charts';
import { IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrDataContext } from 'igniteui-react-core';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';

IgrDataChartCoreModule.register();
IgrDataChartInteractivityModule.register();
IgrCategoryChartModule.register();

export default class CategoryChartTooltipTemplate extends React.Component<any, any> {
    public data: any[];
    public chart: IgrCategoryChart;

    constructor(props: any) {
        super(props);

        this.initData();

        this.onChartRef = this.onChartRef.bind(this);
        this.onSeriesAdded = this.onSeriesAdded.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options vertical">
                    <span className="legend-title">Highest Grossing Movie Franchises</span>
                </div>
                <div className="container fill" >
                    <IgrCategoryChart
                        width="100%"
                        height="100%"
                        ref={this.onChartRef}
                        dataSource={this.data}
                        chartType="Column"
                        isTransitionInEnabled="true"
                        xAxisInterval={1}
                        seriesAdded={this.onSeriesAdded} />
                </div>
            </div>
        );
    }

    public onSeriesAdded(sender: any, e: any) {
        console.log("onSeriesAdded");

        if (e.series) {
            console.log("onSeriesAdded series");
            e.series.tooltipTemplate = this.onTooltipRender;
        }
    }

    public onTooltipRender(context: any): any {

        console.log("onTooltipRender");
        const dataContext = context.dataContext as IgrDataContext;
        if (!dataContext) return null;

        const series = dataContext.series as any;
        if (!series) return null;

        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        return <div>
            <div className="tooltipTitle">{dataItem.Country} Production</div>
            <div className="tooltipBox">
                <div className="tooltipRow">
                    <div className="tooltipLbl">Franchise:</div>
                    <div className="tooltipVal">{dataItem.Franchise}</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">Revenue of All Movies:</div>
                    <div className="tooltipVal">{dataItem.TotalRevenue}</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">Highest Grossing Movie: $:</div>
                    <div className="tooltipVal">{dataItem.HighestGrossing}</div>
                </div>
            </div>
        </div>
    }

    public onChartRef(chart: IgrCategoryChart) {
        if (!chart) { return; }

        this.chart = chart;
        // this.chart.toolTipType = ToolTipType.None;
    }

    public initData() {
        this.data = [
            { Franchise: "Marvel Universe", TotalRevenue: 22.55, HighestGrossing: 2.8 },
            { Franchise: "Star Wars", TotalRevenue: 10.32, HighestGrossing: 2.07 },
            { Franchise: "Harry Potter", TotalRevenue: 9.19, HighestGrossing: 1.34 },
            { Franchise: "Avengers", TotalRevenue: 7.76, HighestGrossing: 2.8 },
            { Franchise: "Spider Man", TotalRevenue: 7.22, HighestGrossing: 1.28 },
            { Franchise: "James Bond", TotalRevenue: 7.12, HighestGrossing: 1.11 }
        ];
    }
}

// rendering above class to the React DOM
ReactDOM.render(<CategoryChartTooltipTemplate />, document.getElementById('root'));
