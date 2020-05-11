import * as React from "react";

import "./DoughnutChartSharedStyles.css";
import { DoughnutChartSharedComponent } from "./DoughnutChartSharedComponent";
import { IgrDoughnutChartModule } from 'igniteui-react-charts';
import { IgrDoughnutChart } from 'igniteui-react-charts';
import { IgrRingSeriesModule } from 'igniteui-react-charts';
import { IgrRingSeries } from 'igniteui-react-charts';
IgrDoughnutChartModule.register();
IgrRingSeriesModule.register();

export default class DoughnutChartAnimation extends DoughnutChartSharedComponent {

    public data: any[];
    public chart: IgrDoughnutChart;
    public series1: IgrRingSeries;
    public refreshMilliseconds: number = 10;
    public interval: number = -1;
    public isTimerStarted: boolean = true;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onClick = this.onClick.bind(this);
        this.initData();
    }

    public render() {
        return (
            <div className="igContainer">
                <div>
                    <button onClick={this.onClick}><label>{this.state.animateChartLabel}</label></button>
                </div>
                <IgrDoughnutChart
                    ref={this.onChartRef}
                    height="100%"
                    allowSliceExplosion="true">
                    <IgrRingSeries
                        name="ring1"
                        dataSource={this.state.data}
                        labelMemberPath="Company"
                        valueMemberPath="MarketShare"
                        radiusFactor={0.9}
                        labelExtent={0.7}
                        labelsPosition="InsideEnd"
                        startAngle={0} />
                </IgrDoughnutChart>
            </div>
        );
    }

    public onChartRef(chart: IgrDoughnutChart) {
        this.chart = chart;
        this.series1 = this.chart.actualSeries[0] as IgrRingSeries;
        this.setState({ animateChartLabel: "Start Animation" });
        this.setupInterval();
    }

    public onClick = () => {
        if (!this.isTimerStarted) {
            this.setState({ animateChartLabel: "Start Animation" });
            this.isTimerStarted = true;
            window.setTimeout(() => this.tick(), 16);
        } else {
            this.isTimerStarted = false;
            this.setState({ animateChartLabel: "Pause Animation" });
        }
    }

    public setupInterval(): void {
        if (this.interval >= 0) {
            window.clearInterval(this.interval);
            this.interval = -1;
        }
        this.interval = window.setInterval(() => this.tick(),
            this.refreshMilliseconds);
    }

    public tick(): void {
        if (!this.isTimerStarted) {
            this.series1.radiusFactor += 0.0025;
            this.series1.startAngle++;
            if (this.series1.startAngle >= 360) {
                this.series1.startAngle = 0;
            }
            if (this.series1.radiusFactor >= 1.0) {
                this.series1.radiusFactor = 0.1;
            }
        }
    }

    public initData() {
        this.state = {
            data: [
                { MarketShare: 30, Company: "Google", },
                { MarketShare: 15, Company: "Microsoft", },
                { MarketShare: 30, Company: "Apple", },
                { MarketShare: 15, Company: "Samsung", },
                { MarketShare: 10, Company: "Other", },
            ]
        };
    }
}