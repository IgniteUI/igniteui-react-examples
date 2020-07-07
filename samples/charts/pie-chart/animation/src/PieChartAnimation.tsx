import * as React from 'react';

import { IgrPieChart } from 'igniteui-react-charts';
import { IgrPieChartModule } from 'igniteui-react-charts';

IgrPieChartModule.register();

export default class PieChartAnimation extends React.Component<any, any> {

    public data: any[];
    public chart: IgrPieChart;
    public isAnimating: boolean = false;
    public interval: number = -1;

    constructor(props: any) {
        super(props);

        this.state = {
            data: [
                { MarketShare: 30, Company: "Google", },
                { MarketShare: 15, Company: "Microsoft", },
                { MarketShare: 30, Company: "Apple", },
                { MarketShare: 15, Company: "Samsung", },
                { MarketShare: 10, Company: "Other", },
            ]
        };

        this.onPieRef = this.onPieRef.bind(this);
        this.onAnimationToggle = this.onAnimationToggle.bind(this);
        this.onAnimationClear = this.onAnimationClear.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div style={{ height: "100%", width: "100%", background: "white" }}>
                <div>
                    <button onClick={this.onAnimationToggle}><label>Animation Chart</label></button>
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
                    radiusFactor={0.1} />
            </div >
        );
    }

    public onPieRef(chart: IgrPieChart) {
        if (!chart) { return; }

        this.chart = chart;
        console.log("animation load");
        this.onAnimationClear();
        this.onAnimationToggle();
    }

    public componentWillUnmount() {
        this.onAnimationClear();
    }

    public onAnimationToggle = () => {
        if (!this.isAnimating) {
            console.log("animation start");
            this.chart.startAngle = 0;
            this.chart.radiusFactor = 0.1;
            this.isAnimating = true;
            this.interval = window.setInterval(() => this.tick(), 15);
        } else {
            console.log("animation stop");
            this.isAnimating = false;
            this.onAnimationClear();
        }
    }

    public onAnimationClear(): void {
        if (this.interval >= 0) {
            console.log("animation clear");
            window.clearInterval(this.interval);
            this.interval = -1;
        }
    }

    public tick(): void {
        // console.log("animation tick");
        if (this.isAnimating) {
            if (this.chart.radiusFactor < 1.0)
                this.chart.radiusFactor += 0.0025;

            if (this.chart.startAngle < 360)
                this.chart.startAngle++;

            if (this.chart.radiusFactor >= 1.0 &&
                this.chart.startAngle >= 360) {
                this.isAnimating = false;
                this.onAnimationClear();
            }
        }
    }

}
