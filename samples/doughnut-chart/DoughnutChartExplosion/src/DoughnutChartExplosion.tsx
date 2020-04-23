import * as React from "react";
import "../styles.css";
import "./DoughnutChartSharedStyles.css";
import { DoughnutChartSharedComponent } from "./DoughnutChartSharedComponent";
import { IgrDoughnutChartModule } from 'igniteui-react-charts';
import { IgrDoughnutChart } from 'igniteui-react-charts';
import { IgrRingSeriesModule } from 'igniteui-react-charts';
import { IgrRingSeries } from 'igniteui-react-charts';
import { IgrSliceClickEventArgs } from 'igniteui-react-charts';
import { IgrIndexCollection } from 'igniteui-react-charts';

IgrDoughnutChartModule.register();
IgrRingSeriesModule.register();

export default class DoughnutChartOverview extends DoughnutChartSharedComponent {

    public data: any[];
    public chart: IgrDoughnutChart;
    public series1: IgrRingSeries;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);

        this.state = { componentVisible: true }
        this.initData();
    }

    public render() {
        return (
            <div className="sampleContainer">
                <IgrDoughnutChart
                     ref={this.onChartRef}
                     height="100%"
                     allowSliceExplosion="true"
                     sliceClick={this.onSliceClick}>
                        <IgrRingSeries
                            name="ring1"
                            dataSource={this.state.data}
                            labelMemberPath="Company"
                            valueMemberPath="MarketShare"
                            radiusFactor={0.7}/>
                </IgrDoughnutChart>
            </div>
        );
    }

    public onChartRef(chart: IgrDoughnutChart) {
        this.chart = chart;

        if (this.chart.actualSeries &&
            this.chart.actualSeries.length > 0) {
            this.series1 = this.chart.actualSeries[0] as IgrRingSeries;
            this.series1.explodedSlices = new IgrIndexCollection();
            this.series1.explodedSlices.add(1);
        }
    }

    public onSliceClick = (s: IgrDoughnutChart, e: IgrSliceClickEventArgs) => {
        e.isExploded = !e.isExploded;
        e.isSelected = false;
    }

    public initData() {
        this.state = {
            data: [
                { MarketShare: 30, Company: "Google",    },
                { MarketShare: 15, Company: "Microsoft", },
                { MarketShare: 30, Company: "Apple",     },
                { MarketShare: 15, Company: "Samsung",   },
                { MarketShare: 10, Company: "Other",     },
        ] };
    }
}