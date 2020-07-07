// axis' modules:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
// series' modules:
import { IgrColumnSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
// legend's modules:
import { IgrLegend } from 'igniteui-react-charts';
import { IgrLegendModule } from 'igniteui-react-charts';
import * as React from 'react';

IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartInteractivityModule.register();
IgrLegendModule.register();

export default class DataChartAxisLocations extends React.Component {
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
        <div className="igContainer">
            <div className="igOptions-horizontal">
                <span className="igLegend-title">Legend: </span>
                <div className="igLegend">
                    <IgrLegend ref={this.onLegendRef} orientation="Horizontal" />
                </div>
            </div>
            <div className="igComponent"  style={{height: "calc(100% - 35px)"}}>
                <IgrDataChart ref={this.onChartRef}
                    width="100%"
                    height="100%"
                    chartTitle="Company Financial Projections"
                    dataSource={this.data}
                    isHorizontalZoomEnabled={true}
                    isVerticalZoomEnabled={true}>

                    {/* multiple axes at various location: */}
                    <IgrCategoryXAxis name="xAxisYears"
                    interval={12} labelLocation="OutsideBottom" overlap={1} gap={0.4}
                    label="Year"  labelTextColor="gray" tickLength={0} />
                    <IgrCategoryXAxis name="xAxisMonths" overlap={1} gap={0.4}
                    interval={1}  labelLocation="OutsideBottom"
                    label="Month" labelTextColor="gray"/>
                    <IgrNumericYAxis  name="yAxisLeft" title="Expanse | Revenue" titleTextColor="gray"
                    minimumValue={-900} labelLocation="OutsideLeft"
                    maximumValue={900} labelTextColor="gray"
                    interval={300} />
                    <IgrNumericYAxis  name="yAxisRight" title="Profit (%)" titleTextColor="gray"
                    minimumValue={0}  labelLocation="OutsideRight" majorStrokeThickness={0}
                    maximumValue={100} labelTextColor="gray" labelHorizontalAlignment="left"
                    titleVerticalAlignment="center"
                      />

                    {/* multiple series: */}
                    <IgrColumnSeries name="series1"
                    title="Revenue"
                    valueMemberPath="Revenue"
                    brush="#9b58e2"
                    outline="#9b58e2"
                    xAxisName="xAxisMonths"
                    yAxisName="yAxisLeft"
                    isTransitionInEnabled="true"
                    showDefaultTooltip="true"/>
                    <IgrColumnSeries name="series3"
                    title="Expanse"
                    valueMemberPath="Expanse"
                    brush="#f23030"
                    outline="#f23030"
                    xAxisName="xAxisMonths"
                    yAxisName="yAxisLeft"
                    isTransitionInEnabled="true"
                    showDefaultTooltip="true" />
                    <IgrColumnSeries name="series2"
                    title="Profit"
                    valueMemberPath="Profit"
                    brush="#48ba39"
                    outline="#48ba39"
                    xAxisName="xAxisYears"
                    yAxisName="yAxisRight"
                    isTransitionInEnabled="true"
                    showDefaultTooltip="true"/>
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

    public initData() {
        const items: any[] = [];
        const months: string[] = [
            "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
            "JUL", "AUG", "SEP", "OCT", "NOV", "DEC" ];

        let revenue = 200;
        let profit = 15;
        let expanse = 0;

        let year = 2020;
        let month = 0;
        for (let i = 0; i < 25; i++) {
            revenue += Math.random() * 50 - 20;
            profit += Math.random() * 4.0 - 2.0; // percentage
            expanse = revenue - (revenue * profit / 100);
            items.push(
                {
                    Expanse: Math.round(-expanse),
                    Month:  months[month],
                    Profit: Math.round(profit),
                    Revenue: Math.round(revenue),
                    Year: year,
            });
            month += 1;
            if (month >= 12) {
                month = 0;
                year += 1;
            }
        }

        this.data = items;
    }
}
