// data chart's elements for category series:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
import { IgrTimeXAxis } from 'igniteui-react-charts';
import { IgrScatterSeries } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
import { IgrCategoryYAxis } from 'igniteui-react-charts';
import { IgrColumnSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrDataChartScatterCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrTimeXAxisModule } from 'igniteui-react-charts';

import { SampleCategoryData } from "./SampleCategoryData";
import { SampleFinancialData } from "./SampleFinancialData";
import { SampleScatterData } from "./SampleScatterData";

import * as React from "react";
import "../styles.css";
import "./DataChartSharedStyles.css";
import { DataChartSharedComponent } from "./DataChartSharedComponent";
import { IgrBarSeries } from 'igniteui-react-charts';
import { IgrFinancialPriceSeries } from 'igniteui-react-charts';

IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartScatterCoreModule.register();
IgrDataChartScatterModule.register();
IgrTimeXAxisModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartAxisTypes extends DataChartSharedComponent {
    public categoryData: any[];
    public financialData: any[];
    public scatterData: any[];

    public chart: IgrDataChart;

    public numericXAxis: IgrNumericXAxis;
    public numericYAxis: IgrNumericYAxis;

    public categoryXAxis: IgrCategoryXAxis;
    public categoryYAxis: IgrCategoryYAxis;

    public timeXAxis: IgrTimeXAxis;

    public columnSeries1: IgrColumnSeries;
    public columnSeries2: IgrColumnSeries;

    public barSeries1: IgrBarSeries;
    public barSeries2: IgrBarSeries;

    public scatterSeries1: IgrScatterSeries;
    public scatterSeries2: IgrScatterSeries;

    public financialSeries: IgrFinancialPriceSeries;

    constructor(props: any) {
        super(props);

        this.onAxisTypeChange = this.onAxisTypeChange.bind(this);

        this.onChartRef = this.onChartRef.bind(this);

        this.initData();

        this.initAxes();
        this.initCategorySeries();
        this.initScatterSeries();
        this.initFinancialSeries();
    }

    public render() {
        return (
            <div className="sample">
                <div className="chart">
                    <div className="options">
                        <span className="optionItem">Series Type:</span>
                        <select onChange={this.onAxisTypeChange}>
                            <option>Column (CategoryXAxis)</option>
                            <option>Bar (CategoryYAxis)</option>
                            <option>Scatter (NumericXAxis)</option>
                            <option>Financial (TimeXAxis)</option>
                        </select>
                    </div>
                    <IgrDataChart
                        ref={this.onChartRef}
                        width="100%"                        
                        height="calc(100% - 35px)" 
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true} />
                </div>
            </div>
        );
    }

    public initCategorySeries() {
        this.columnSeries1 = new IgrColumnSeries({ name: "colSeries1" });
        this.columnSeries1.dataSource = this.categoryData;
        this.columnSeries1.xAxis = this.categoryXAxis;
        this.columnSeries1.yAxis = this.numericYAxis;
        this.columnSeries1.xAxisName = "categoryXAxis";
        this.columnSeries1.yAxisName = "numericYAxis";
        this.columnSeries1.valueMemberPath = "USA";

        this.columnSeries2 = new IgrColumnSeries({ name: "colSeries2" });
        this.columnSeries2.dataSource = this.categoryData;
        this.columnSeries2.xAxis = this.categoryXAxis;
        this.columnSeries2.yAxis = this.numericYAxis;
        this.columnSeries2.xAxisName = "categoryXAxis";
        this.columnSeries2.yAxisName = "numericYAxis";
        this.columnSeries2.valueMemberPath = "RUS";

        this.barSeries1 = new IgrBarSeries({ name: "barSeries1" });
        this.barSeries1.dataSource = this.categoryData;
        this.barSeries1.xAxis = this.numericXAxis;
        this.barSeries1.yAxis = this.categoryYAxis;
        this.barSeries1.xAxisName = "numericXAxis";
        this.barSeries1.yAxisName = "categoryYAxis";
        this.barSeries1.valueMemberPath = "USA";

        this.barSeries2 = new IgrBarSeries({ name: "barSeries2" });
        this.barSeries2.dataSource = this.categoryData;
        this.barSeries2.xAxis = this.numericXAxis;
        this.barSeries2.yAxis = this.categoryYAxis;
        this.barSeries2.xAxisName = "numericXAxis";
        this.barSeries2.yAxisName = "categoryYAxis";
        this.barSeries2.valueMemberPath = "RUS";
    }

    public initAxes() {
        this.categoryXAxis = new IgrCategoryXAxis({ name: "categoryXAxis" });
        this.categoryXAxis.title = "Category X Axis";
        this.categoryXAxis.dataSource = this.categoryData;
        this.categoryXAxis.label = "Year";

        this.categoryYAxis = new IgrCategoryYAxis({ name: "categoryYAxis" });
        this.categoryYAxis.title = "Category Y Axis";
        this.categoryYAxis.dataSource = this.categoryData;
        this.categoryYAxis.label = "Year";

        this.numericXAxis = new IgrNumericXAxis({ name: "numericXAxis" });
        this.numericXAxis.title = "Numeric X Axis";

        this.numericYAxis = new IgrNumericYAxis({ name: "numericYAxis" });
        this.numericYAxis.title = "Numeric Y Axis";

        this.timeXAxis = new IgrTimeXAxis({name: "timeXAxis"});
        this.timeXAxis.title = "Time X Axis";
        this.timeXAxis.dataSource = this.financialData;
        this.timeXAxis.dateTimeMemberPath = "Time";
        this.timeXAxis.label = "Date";
    }

    public initFinancialSeries(){
        this.financialSeries = new IgrFinancialPriceSeries({name: "financialSeries"});
        this.financialSeries.dataSource = this.financialData;
        this.financialSeries.xAxis = this.timeXAxis;
        this.financialSeries.yAxis = this.numericYAxis;
        this.financialSeries.xAxisName = "timeXAxis";
        this.financialSeries.yAxisName = "numericYAxis";
        this.financialSeries.highMemberPath="High"
        this.financialSeries.lowMemberPath="Low"
        this.financialSeries.closeMemberPath="Close"
        this.financialSeries.openMemberPath="Open"
        this.financialSeries.volumeMemberPath="Volume"
    }

    public initScatterSeries(){
        this.scatterSeries1 = new IgrScatterSeries({name: "scatterSeries"});
        this.scatterSeries1.dataSource = this.scatterData;
        this.scatterSeries1.xAxis = this.numericXAxis;
        this.scatterSeries1.yAxis = this.numericYAxis;
        this.scatterSeries1.xAxisName = "numericXAxis";
        this.scatterSeries1.yAxisName = "numericYAxis";
        this.scatterSeries1.xMemberPath = "Index";
        this.scatterSeries1.yMemberPath = "SinValue";

        this.scatterSeries2 = new IgrScatterSeries({name: "scatterSeries2"});
        this.scatterSeries2.dataSource = this.scatterData;
        this.scatterSeries2.xAxis = this.numericXAxis;
        this.scatterSeries2.yAxis = this.numericYAxis;
        this.scatterSeries2.xAxisName = "numericXAxis";
        this.scatterSeries2.yAxisName = "numericYAxis";
        this.scatterSeries2.xMemberPath = "Index";
        this.scatterSeries2.yMemberPath = "CosValue";
    }

    public initData() {
        this.categoryData = SampleCategoryData.create();
        this.scatterData = SampleScatterData.createWaveData();
        this.financialData = SampleFinancialData.create();
    }

    public onAxisTypeChange = (e: any) => {
        this.chart.axes.clear();
        this.chart.series.clear();

        const value: string = e.target.value;

        if(value.includes("Column")){
            this.chart.axes.add(this.categoryXAxis);
            this.chart.axes.add(this.numericYAxis);

            this.chart.series.add(this.columnSeries1);
            this.chart.series.add(this.columnSeries2);
        }
        else if(value.includes("Bar")){
            this.chart.axes.add(this.categoryYAxis);
            this.chart.axes.add(this.numericXAxis);

            this.chart.series.add(this.barSeries1);
            this.chart.series.add(this.barSeries2);
        }
        else if(value.includes("Scatter")){
            this.chart.axes.add(this.numericXAxis);
            this.chart.axes.add(this.numericYAxis);

            this.chart.series.add(this.scatterSeries1);
            this.chart.series.add(this.scatterSeries2);
        }
        else{
            this.chart.axes.add(this.timeXAxis);
            this.chart.axes.add(this.numericYAxis);

            this.chart.series.add(this.financialSeries);
        }

        // this.chart.render();
    }

    public onChartRef(chart: IgrDataChart) {
        this.chart = chart;

        // this.chart.dataSource = this.categoryData;

        this.chart.axes.add(this.categoryXAxis);
        this.chart.axes.add(this.numericYAxis);

        this.chart.series.add(this.columnSeries1);
        this.chart.series.add(this.columnSeries2);
    }
}
