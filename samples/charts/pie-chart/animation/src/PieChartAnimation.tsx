import { IgrPieChart } from 'igniteui-react-charts';
import { IgrPieChartModule } from 'igniteui-react-charts';
import * as React from 'react';

IgrPieChartModule.register();

export default class PieChartAnimation extends React.Component<any, any> {

    public data: any[];
    public chart: IgrPieChart;

    public refreshMilliseconds: number = 10;
    public interval: number = -1;
    public fps: HTMLSpanElement;
    public frameTime: Date;
    public frameCount: number = 0;
    public isTimerStarted: boolean = true;

    constructor(props: any) {
        super(props);
        this.initData();
        this.onPieRef = this.onPieRef.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    public render() {
        return (
            <div style={{ height: "100%", width: "100%", background: "white" }}>
                <div>
                    <button onClick={this.onClick}><label>{this.state.animateChartLabel}</label></button>
                </div>
                <IgrPieChart dataSource={this.state.data}
                    ref={this.onPieRef}
                    labelMemberPath="Company"
                    valueMemberPath="MarketShare"
                    width="100%"
                    height="calc(100% - 45px)"
                    labelsPosition="InsideEnd"
                    startAngle={0}
                    labelExtent={0.7}
                    radiusFactor={0.8} />
            </div >
        );
    }

    public onPieRef(chart: IgrPieChart) {
        if (!chart) { return; }

        this.chart = chart;
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
            this.chart.radiusFactor += 0.0025;
            this.chart.startAngle++;

            if (this.chart.startAngle >= 360) {
                this.chart.startAngle = 0;
            }
            if (this.chart.radiusFactor >= 1.0) {
                this.chart.radiusFactor = 0.1;
            }
        }
    }

    public initData() {
        this.state = {
            data: [
                { MarketShare: 30, Company: "Google", },
                { MarketShare: 30, Company: "Apple", },
                { MarketShare: 15, Company: "Microsoft", },
                { MarketShare: 15, Company: "Samsung", },
                { MarketShare: 10, Company: "Other", },
            ]
        }
    }
}
