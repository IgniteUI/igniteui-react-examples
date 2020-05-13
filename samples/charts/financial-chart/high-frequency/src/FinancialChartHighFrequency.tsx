import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import * as React from "react";



import { StocksUtility } from "./StocksUtility";

IgrFinancialChartModule.register();

export default class FinancialChartHighFrequency extends React.Component<any, any> {
    public dataIndex: number = 0;
    public dataPoints: number = 10000;
    public data: any[];

    public refreshMilliseconds: number = 10;
    public interval: number = -1;

    public chart: IgrFinancialChart;
    public fps: HTMLSpanElement;
    public frameTime: Date;
    public frameCount: number = 0;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onFpsRef = this.onFpsRef.bind(this);
        this.onScalingRatioChanged = this.onScalingRatioChanged.bind(this);
        this.onRefreshFrequencyChanged = this.onRefreshFrequencyChanged.bind(this);
        this.onDataGenerateClick = this.onDataGenerateClick.bind(this);
        this.onDataPointsChanged = this.onDataPointsChanged.bind(this);

        this.data = StocksUtility.GetStocksItems(this.dataPoints);
        this.dataIndex = this.data.length;

        this.state = {
            dataInfo: StocksUtility.toShortString(this.dataPoints),
            dataPoints: this.dataPoints,
            dataSource: this.data,
            scalingRatio: window.devicePixelRatio,
        }
    }

    public render() {
        return (
            <div className="igContainer" >
                <div className="igOptions">
                    <label className="igOptions-label">Data Points: </label>
                    <label className="igOptions-value" >
                        {this.state.dataInfo}
                    </label>
                    <input className="igOptions-slider" type="range" min="10000" max="100000" step="1000"
                        value={this.state.dataPoints}
                        onChange={this.onDataPointsChanged}/>
                    <button onClick={this.onDataGenerateClick}>Generate Data</button>
                    <label className="igOptions-item"><input type="checkbox"
                        onChange={this.onScalingRatioChanged}/> Optimize Scaling </label>
                    <span ref={this.onFpsRef} className="igOptions-label" />
                </div>
                <div className="igComponent" style={{height: "calc(100% - 75px)"}}>
                <IgrFinancialChart
                        ref={this.onChartRef}
                        width="100%"
                        height="100%"
                        chartType="Line"
                        zoomSliderType="None"
                        isToolbarVisible={false}
                        dataSource={this.state.dataSource}
                        thickness={2} />
                </div>
            </div>
        );
    }


    public componentWillUnmount() {
        if (this.interval >= 0) {
             window.clearInterval(this.interval);
             this.interval = -1;
         }
    }

    public onChartRef(chart: IgrFinancialChart) {
        this.chart = chart;
        this.onChartInit();
    }

    public onFpsRef(span: HTMLSpanElement) {
        this.fps = span;
    }

    public onScalingRatioChanged = (e: any) =>{
        if (e.target.checked) {
            this.setState({ scalingRatio: 1.0 });
        } else {
            this.setState({ scalingRatio: NaN });
        }
    }

    public onDataGenerateClick() {
        this.data = StocksUtility.GetStocksItems(this.dataPoints);
        this.dataIndex = this.data.length;

        this.setState({ dataSource: this.data });
    }

    public onDataPointsChanged = (e: any) => {
        let num: number = parseInt(e.target.value, 10);

        if (isNaN(num)) {
            num = 10000;
        }
        if (num < 10000) {
            num = 10000;
        }
        if (num > 1000000) {
            num = 1000000;
        }
        const info = StocksUtility.toShortString(num);
        this.dataPoints = num;
        this.setState({ dataPoints: num, dataInfo: info });
    }

    public ngOnDestroy(): void {
        if (this.interval >= 0) {
            window.clearInterval(this.interval);
            this.interval = -1;
        }
    }

    public onChartInit(): void {
        this.frameTime = new Date();
        this.setupInterval();
    }

    public onRefreshFrequencyChanged = (e: any) => {
        let num: number = parseInt(e.target.value, 10);

        if (isNaN(num)) {
            num = 10;
        }
        if (num < 10) {
            num = 10;
        }
        if (num > 500) {
            num = 500;
        }
        this.refreshMilliseconds = num;
        this.setupInterval();
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
        this.dataIndex++;
        const oldItem = this.data[0];
        const newItem = StocksUtility.GetNewItem(this.data);

        // updating data source and notifying category chart
        this.data.push(newItem);
        this.chart.notifyInsertItem(this.data, this.data.length - 1, newItem);
        this.data.shift();
        this.chart.notifyRemoveItem(this.data, 0, oldItem);

        this.frameCount++;
        const currTime = new Date();
        const elapsed = (currTime.getTime() - this.frameTime.getTime());
        if (elapsed > 5000) {
            const fps = this.frameCount / (elapsed / 1000.0);
            this.frameTime = currTime;
            this.frameCount = 0;
            this.fps.textContent = " FPS: " + Math.round(fps).toString();
        }
    }
}

