import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrDataChartCoreModule, IgrLegendModule, IgrDataChartCategoryCoreModule, IgrDataChartCategoryModule, IgrDataChartInteractivityModule,
         IgrDataChartAnnotationModule, IgrCalloutLayerModule, IgrNumberAbbreviatorModule, IgrDataChart, IgrLegend,
         IgrCategoryXAxis, IgrNumericYAxis, IgrColumnSeries, IgrSplineAreaSeries, IgrCalloutLayer
} from 'igniteui-react-charts';

IgrDataChartCoreModule.register();
IgrDataChartCategoryCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartInteractivityModule.register();
IgrDataChartAnnotationModule.register();
IgrCalloutLayerModule.register();
IgrNumberAbbreviatorModule.register();
IgrLegendModule.register();

export default class DataChartOverview extends React.Component<any, any> {
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
                <div className="options vertical">
                    <span className="legend-title">Facebook Statement of Income 2019-2020</span>                    
                    <IgrLegend ref={this.onLegendRef} orientation="Horizontal" />                    
                </div>
                <div className="container" style={{ height: "calc(100% - 35px)" }}>
                    <IgrDataChart 
                        ref={this.onChartRef}
                        width="100%"
                        height="100%"
                        dataSource={this.data}
                        isHorizontalZoomEnabled={false}
                        isVerticalZoomEnabled={false}>

                        <IgrCategoryXAxis name="xAxis" label="Date" />
                        <IgrNumericYAxis name="yAxis" abbreviateLargeNumbers={true} title="In Millions of U.S. Dollars" minimumValue={0}
                            maximumValue={30000} titleLeftMargin={5} titleRightMargin={0} />
                        <IgrNumericYAxis name="yAxis2" abbreviateLargeNumbers={true} title="Percentage" majorStrokeThickness={0}
                            minimumValue={0} maximumValue={160} labelLocation="OutsideRight" labelHorizontalAlignment="Left" />

                        <IgrColumnSeries name="series1" xAxisName="xAxis" yAxisName="yAxis" valueMemberPath="Revenue"
                            title="Revenue" markerType="Hidden" />
                        <IgrColumnSeries name="series2" xAxisName="xAxis" yAxisName="yAxis" valueMemberPath="Expenses"
                            title="Expenses" markerType="Hidden" />

                        <IgrSplineAreaSeries name="series3" xAxisName="xAxis" yAxisName="yAxis2" valueMemberPath="IncomePerRevenue"
                            title="Income / Revenue %" markerType="Hidden" />

                        <IgrCalloutLayer name="callout1" isAutoCalloutBehaviorEnabled={true} targetSeriesName="series1" useValueForAutoCalloutLabels={true}
                            calloutLeaderBrush="Transparent" calloutTextColor="Black" calloutBackground="Transparent" />

                        <IgrCalloutLayer name="callout2" isAutoCalloutBehaviorEnabled={true} targetSeriesName="series2" useValueForAutoCalloutLabels={true}
                            calloutLeaderBrush="Transparent" calloutTextColor="Black" calloutBackground="Transparent" />

                        <IgrCalloutLayer name="callout3" isAutoCalloutBehaviorEnabled={true} targetSeriesName="series3" useValueForAutoCalloutLabels={true}
                            calloutLeaderBrush="Transparent" calloutTextColor="Black" calloutBackground="LightGray" autoCalloutLabelPrecision={1}/>
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

    public initData(){
        this.data = [
            { Date: "Jan 1, 2019", Revenue: 16914, Expenses: 10183 },
            { Date: "Mar 1, 2019", Revenue: 15077, Expenses: 12813 },
            { Date: "Jun 1, 2019", Revenue: 16886, Expenses: 14476 },
            { Date: "Sep 1, 2019", Revenue: 17652, Expenses: 11705 },
            { Date: "Jan 1, 2020", Revenue: 21082, Expenses: 14044 },
            { Date: "Mar 1, 2020", Revenue: 17737, Expenses: 12803 },
            { Date: "Jun 1, 2020", Revenue: 18687, Expenses: 13677 },
            { Date: "Sep 1, 2020", Revenue: 21470, Expenses: 13717 },
            { Date: "Jan 1, 2021", Revenue: 28072, Expenses: 17133 }
        ];

        for(let i=0; i<this.data.length; i++){
            const item = this.data[i];

            item.Income = item.Revenue - item.Expenses;
            item.IncomePerRevenue = (item.Income / item.Revenue * 100);
        }
    }
}

// rendering above class to the React DOM
ReactDOM.render(<DataChartOverview />, document.getElementById('root'));
