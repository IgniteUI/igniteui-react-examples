// data chart's elements for category series:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
// TODO remove
import { IgrCategoryXAxis } from 'igniteui-react-charts';
import { IgrColumnSeries } from 'igniteui-react-charts';

import { IgrRadialAreaSeries } from 'igniteui-react-charts';
import { IgrPolarAreaSeries } from 'igniteui-react-charts';
import { IgrPolarLineSeries } from 'igniteui-react-charts';
import { IgrPolarSplineSeries } from 'igniteui-react-charts';
import { IgrPolarSplineAreaSeries } from 'igniteui-react-charts';
import { IgrPolarScatterSeries } from 'igniteui-react-charts';

import { IgrFinancialPriceSeries } from 'igniteui-react-charts';
import { IgrAbsoluteVolumeOscillatorIndicator } from 'igniteui-react-charts';
import { IgrBollingerBandsOverlay } from 'igniteui-react-charts';

import { IgrRangeAreaSeries } from 'igniteui-react-charts';
import { IgrRangeColumnSeries } from 'igniteui-react-charts';

// TODO pick
import { IgrBubbleSeries } from 'igniteui-react-charts';
import { IgrScatterSeries } from 'igniteui-react-charts';
import { IgrScatterLineSeries } from 'igniteui-react-charts';

// TODO remove
import { IgrScatterPolygonSeries } from 'igniteui-react-charts';
import { IgrScatterPolylineSeries } from 'igniteui-react-charts';
import { IgrScatterContourSeries } from 'igniteui-react-charts';
import { IgrScatterAreaSeries } from 'igniteui-react-charts';
import { IgrScatterSplineSeries } from 'igniteui-react-charts';
import { IgrHighDensityScatterSeries } from 'igniteui-react-charts';

// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterModule } from 'igniteui-react-charts';
// TODO remove
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';

// legend's modules:
import { IgrLegend } from 'igniteui-react-charts';
import { IgrLegendModule } from 'igniteui-react-charts';
import * as React from "react";
import "../styles.css";
import "./DataChartSharedStyles.css";
import { DataChartSharedComponent } from "./DataChartSharedComponent";
import { SampleScatterData } from "./SampleScatterData";

IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartScatterCoreModule.register();
IgrDataChartScatterModule.register();
IgrLegendModule.register();

export default class TestSeries extends DataChartSharedComponent {
    public data: any[];
    public chart: IgrDataChart;
    public legend: IgrLegend;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);

        // this.data = SampleScatterData.getDataItems();
        // this.data = this.data.sort(WorldData.sortByGdp);
        // this.initData();

        // Radial series are missing props
        const s1 = new IgrRadialAreaSeries({ name: "s1", angleAxisName: "", valueAxisName: "" });
        // Polar series are missing props
        const p1 = new IgrPolarAreaSeries({ name: "s2", angleAxisName: "", radiusAxisName: "" });
        const p2 = new IgrPolarLineSeries({ name: "s2", angleAxisName: "", radiusAxisName: "" });
        const p3 = new IgrPolarSplineSeries({ name: "s2", angleAxisName: "", radiusAxisName: "" });
        const p4 = new IgrPolarSplineAreaSeries({ name: "s2", angleAxisName: "", radiusAxisName: "" });
        const p5 = new IgrPolarScatterSeries({ name: "s2", angleAxisName: "", radiusAxisName: "" });

        // Financial series are missing xAxisName prop
        const s4 = new IgrFinancialPriceSeries({ name: "", xAxisName: "", yAxisName: "" });
        const s5 = new IgrAbsoluteVolumeOscillatorIndicator({ name: "", xAxisName: "", yAxisName: "" });
        const s6 = new IgrBollingerBandsOverlay({ name: "", xAxisName: "" });
        // Range series <-- note that other Categories series are not missing xAxisName prop
        const s8 = new IgrRangeAreaSeries({ name: "", xAxisName: "", yAxisName: "" });
        const s9 = new IgrRangeColumnSeries({ name: "", xAxisName: "", yAxisName: "" });
        // Scatter series are missing xAxisName prop
        const s12 = new IgrBubbleSeries({ name: "", xAxisName: "", yAxisName: "" });
        const s13 = new IgrScatterLineSeries({ name: "", xAxisName: "", yAxisName: "" });
        const s14 = new IgrScatterPolygonSeries({ name: "", xAxisName: "", yAxisName: "" });
        const s15 = new IgrScatterPolylineSeries({ name: "", xAxisName: "", yAxisName: "" });
        const s16 = new IgrScatterContourSeries({ name: "", xAxisName: "", yAxisName: "" });
        const s17 = new IgrScatterAreaSeries({ name: "", xAxisName: "", yAxisName: "" });
        const s18 = new IgrScatterSplineSeries({ name: "", xAxisName: "", yAxisName: "" });
       // const s19 = new IgrHighDensityScatterSeries({ name: "", xAxisName: "", yAxisName: "" });
        const s20 = new IgrScatterSeries({ name: "", xAxisName: "", yAxisName: "" });

    }

    public render() {
        return (
            <div className="sample">
                <div className="legend">
                    <IgrLegend ref={this.onLegendRef}
                            orientation="Horizontal" />
                </div>
                <div className="chart">
                    <IgrDataChart ref={this.onChartRef}
                        width="100%"
                        height="100%"
                        chartTitle="Olympic Medals By Country"
                        dataSource={this.data} >
                        {/* axes: */}
                        <IgrCategoryXAxis name="xAxis" label="Code" />
                        {/* <IgrNumericXAxis name="xAxis" minimumValue={0}/> */}
                        <IgrNumericYAxis name="yAxis" minimumValue={0} />

                        <IgrColumnSeries name="series1" title="countries"
                                         valueMemberPath="Population"
                                         xAxisName="xAxis"
                                         yAxisName="yAxis"  />
                        {/* series:
                        TODO set: xAxisName="xAxis" and yAxisName="yAxis" */}
                        {/* <IgrBubbleSeries name="series1" title="countries"
                                         xMemberPath="pop"
                                         yMemberPath="gdp"
                                         labelMemberPath="name"
                                         radiusMemberPath="dept"
                                         fillMemberPath="dept" /> */}
                   </IgrDataChart>
                </div>
            </div>
        );
    }

    public initData() {
        this.data =  [
            new ScatterItem( { pop: 148, gdp: 110, dept: 95, name: "usa" }),
            new ScatterItem( { pop: 142, gdp: 115, dept: 91, name: "rus" }),
            new ScatterItem( { pop: 134, gdp: 121, dept: 86, name: "chn" }),
            new ScatterItem( { pop: 131, gdp: 129, dept: 65, name: "bra" }),
            new ScatterItem( { pop: 135, gdp: 115, dept: 77, name: "aus" }),
            new ScatterItem( { pop: 146, gdp: 112, dept: 88, name: "ind" })
        ];
    }

    public onChartRef(chart: IgrDataChart) {
        this.chart = chart;
        if (this.legend) {
            this.chart.legend = this.legend;
        }
    }

    public onLegendRef(legend: IgrLegend) {
        this.legend = legend;
        if (this.chart) {
            this.chart.legend = this.legend;
        }
    }
}

class ScatterItem implements IScatterItem {
    public pop?: number;
    public gdp?: number;
    public dept?: number;
    public name?: string;

    constructor(props: IScatterItem) {
        this.pop = props.pop;
        this.gdp = props.gdp;
        this.dept = props.dept;
        this.name = props.name;
    }
}

interface IScatterItem {
    pop?: number;
    gdp?: number;
    dept?: number;
    name?: string;
}