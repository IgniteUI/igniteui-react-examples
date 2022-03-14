import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  IgrDataChartCoreModule,
  IgrLegendModule,
  IgrDataChartCategoryCoreModule,
  IgrDataChartCategoryModule,
  IgrDataChartInteractivityModule,
  IgrDataChartAnnotationModule,
  IgrCalloutLayerModule,
  IgrNumberAbbreviatorModule,
  IgrDataChart,
  IgrLegend,
  IgrCategoryXAxis,
  IgrNumericYAxis,
  IgrColumnSeries,
  IgrSplineAreaSeries,
  IgrCalloutLayer
} from "igniteui-react-charts";

IgrDataChartCoreModule.register();
IgrDataChartCategoryCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartInteractivityModule.register();
IgrDataChartAnnotationModule.register();
IgrCalloutLayerModule.register();
IgrNumberAbbreviatorModule.register();
IgrLegendModule.register();

export default class DataChartCompositeChart extends React.Component<any, any> {
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
          <span className="legend-title">
            Amazon Statement of Income 2019-2021
          </span>
          <IgrLegend ref={this.onLegendRef} orientation="Horizontal" />
        </div>
        <div className="container" style={{ height: "calc(100% - 35px)" }}>
          <IgrDataChart
            ref={this.onChartRef}
            width="100%"
            height="100%"
            dataSource={this.data}
            isHorizontalZoomEnabled={false}
            isVerticalZoomEnabled={false}
          >
            <IgrCategoryXAxis
              name="xAxis"
              label="Date"
              overlap="0"
              gap="0.1"
              useClusteringMode={true}
            />

            <IgrNumericYAxis
              name="yAxis"
              abbreviateLargeNumbers={true}
              title="U.S. Dollars"
              minimumValue={0}
              maximumValue={30000000}
              titleLeftMargin={5}
              titleRightMargin={0}
            />
            <IgrNumericYAxis
              name="yAxis2"
              abbreviateLargeNumbers={true}
              title="Percentage"
              majorStrokeThickness={0}
              minimumValue={20}
              maximumValue={80}
              labelLocation="OutsideRight"
              labelHorizontalAlignment="Left"
            />

            <IgrColumnSeries
              name="series1"
              xAxisName="xAxis"
              yAxisName="yAxis"
              valueMemberPath="Revenue"
              title="Revenue"
              markerType="Hidden"
            />

            <IgrColumnSeries
              name="series2"
              xAxisName="xAxis"
              yAxisName="yAxis"
              valueMemberPath="Expenses"
              title="Expenses"
              markerType="Hidden"
            />

            <IgrSplineAreaSeries
              name="series3"
              xAxisName="xAxis"
              yAxisName="yAxis2"
              valueMemberPath="IncomePerRevenue"
              title="Income / Revenue %"
              markerType="Circle"
            />

            <IgrCalloutLayer
              name="callout1"
              targetSeriesName="series1"
              xMemberPath="RevenueX"
              yMemberPath="Revenue"
              labelMemberPath="FormattedRevenue"
              isAutoCalloutBehaviorEnabled={false}
              useValueForAutoCalloutLabels={false}
              calloutLeaderBrush="Transparent"
              calloutBackground="Transparent"
              calloutTextColor="Black"
              calloutPositionPadding="-5"
            />

            <IgrCalloutLayer
              name="callout2"
              targetSeriesName="series2"
              xMemberPath="ExpensesX"
              yMemberPath="Expenses"
              labelMemberPath="FormattedExpenses"
              isAutoCalloutBehaviorEnabled={false}
              useValueForAutoCalloutLabels={false}
              calloutLeaderBrush="Transparent"
              calloutBackground="Transparent"
              calloutTextColor="Black"
              calloutPositionPadding="-5"
            />

            <IgrCalloutLayer
              name="callout3"
              targetSeriesName="series3"
              isAutoCalloutBehaviorEnabled={true}
              useValueForAutoCalloutLabels={true}
              calloutLeaderBrush="Transparent"
              calloutTextColor="Black"
              calloutBackground="LightGray"
              autoCalloutLabelPrecision={1}
            />
          </IgrDataChart>
        </div>
      </div>
    );
  }

  public onChartRef(chart: IgrDataChart) {
    if (!chart) {
      return;
    }

    this.chart = chart;
    if (this.legend) {
      this.chart.legend = this.legend;
    }
  }

  public onLegendRef(legend: IgrLegend) {
    if (!legend) {
      return;
    }

    this.legend = legend;
    if (this.chart) {
      this.chart.legend = this.legend;
    }
  }

  public formatNumber(num: number): string {
    var ret = num;
    if (num >= 1000000) return (num / 1000000.0).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000.0).toFixed(1) + "K";

    return ret.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  public initData() {
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

    for (let i = 0; i < this.data.length; i++) {
      const item = this.data[i];

      item.Revenue = item.Revenue * 1000;
      item.Expenses = item.Expenses * 1000;

      item.Income = item.Revenue - item.Expenses;
      item.IncomePerRevenue = (item.Income / item.Revenue) * 100;

      // calculating x-offset for callouts
      item.RevenueX = i;
      item.ExpensesX = i + 0.5;

      // formatting values for callouts
      item.FormattedRevenue = "$" + this.formatNumber(item.Revenue);
      item.FormattedIncome = "$" + this.formatNumber(item.Income);
      item.FormattedExpenses = "$" + this.formatNumber(item.Expenses);
      item.FormattedProfit = item.IncomePerRevenue + "%";
    }
  }
}

// rendering above class to the React DOM
ReactDOM.render(<DataChartCompositeChart />, document.getElementById("root"));
