import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrDoughnutChartModule } from 'igniteui-react-charts';
import { IgrDoughnutChart } from 'igniteui-react-charts';
import { IgrRingSeriesModule } from 'igniteui-react-charts';
import { IgrRingSeries } from 'igniteui-react-charts';

IgrDoughnutChartModule.register();
IgrRingSeriesModule.register();

export default class DoughnutChartAnimation extends React.Component<any, any> {

    public data: any[];
    public chart: IgrDoughnutChart;
    public chartSeries: IgrRingSeries;
    public isAnimating: boolean = false;
    public interval: number = -1;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onAnimationToggle = this.onAnimationToggle.bind(this);
        this.onAnimationClear = this.onAnimationClear.bind(this);

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

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div>
                    <button onClick={this.onAnimationToggle}><label>Animation Chart</label></button>
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
                        radiusFactor={0.1}
                        labelExtent={0.7}
                        labelsPosition="InsideEnd"
                        startAngle={0} />
                </IgrDoughnutChart>
            </div>
        );
    }

    public onChartRef(chart: IgrDoughnutChart) {
        if (!chart) { return; }

        this.chart = chart;
        this.chartSeries = this.chart.actualSeries[0] as IgrRingSeries;

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
            this.chartSeries.startAngle = 0;
            this.chartSeries.radiusFactor = 0.1;
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
            if (this.chartSeries.radiusFactor < 1.0)
                this.chartSeries.radiusFactor += 0.0025;

            if (this.chartSeries.startAngle < 360)
                this.chartSeries.startAngle++;

            if (this.chartSeries.radiusFactor >= 1.0 &&
                this.chartSeries.startAngle >= 360) {
                this.isAnimating = false;
                this.onAnimationClear();
            }
        }
    }
}

// rendering above class to the React DOM
ReactDOM.render(<DoughnutChartAnimation />, document.getElementById('root'));
