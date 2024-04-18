import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrPieChart } from "@infragistics/igniteui-react-charts";
import { IgrPieChartModule } from "@infragistics/igniteui-react-charts";

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
                { MarketShare: 37, Category: "Cooling"     , Summary: "Cooling 37%" },
                { MarketShare: 25, Category: "Residential" , Summary: "Cooling 25%" },
                { MarketShare: 12, Category: "Heating"     , Summary: "Cooling 12%" },
                { MarketShare: 11, Category: "Lighting"    , Summary: "Cooling 11%" },
                { MarketShare: 15, Category: "Other"       , Summary: "Cooling 15%" }
            ]
        };

        this.onPieRef = this.onPieRef.bind(this);
        this.onAnimationToggle = this.onAnimationToggle.bind(this);
        this.onAnimationClear = this.onAnimationClear.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container vertical">
                <div className="options horizontal">
                    <button onClick={this.onAnimationToggle}>Animate Chart</button>
                </div>

                <div className="container vertical">
                    <IgrPieChart
                        width="100%"
                        height="100%"
                        ref={this.onPieRef}
                        dataSource={this.state.data}
                        labelMemberPath="Summary"
                        legendLabelMemberPath="Category"
                        valueMemberPath="MarketShare"
                        labelsPosition="InsideEnd"
                        startAngle={0}
                        labelExtent={0.7}
                        radiusFactor={0.1} />
                </div>
            </div>
        );
    }

    public onPieRef(chart: IgrPieChart) {
        if (!chart) { return; }

        this.chart = chart;
        this.onAnimationClear();
        this.onAnimationToggle();
    }

    public componentWillUnmount() {
        this.onAnimationClear();
    }

    public onAnimationToggle = () => {
        if (!this.isAnimating) {
            this.chart.startAngle = 0;
            this.chart.radiusFactor = 0.1;
            this.isAnimating = true;
            this.interval = window.setInterval(() => this.tick(), 15);
        } else {
            this.isAnimating = false;
            this.onAnimationClear();
        }
    }

    public onAnimationClear(): void {
        if (this.interval >= 0) {
            window.clearInterval(this.interval);
            this.interval = -1;
        }
    }

    public tick(): void {
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

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PieChartAnimation/>);
