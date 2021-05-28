import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import { StocksUtility } from './StocksUtility';

IgrFinancialChartModule.register();

export default class FinancialChartHighFrequency extends React.Component<any, any> {
    public dataIndex: number = 0;
    public dataPoints: number = 10000;
    public data: any[];

    public refreshMilliseconds: number = 10;
    public interval: number = -1;

    public chart: IgrFinancialChart;
    public fps: HTMLSpanElement;
    public timerButton: HTMLButtonElement;
    public frameTime: Date;
    public frameCount: number = 0;

    private shouldTick: boolean = true;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onFpsRef = this.onFpsRef.bind(this);
        this.onTimerButtonRef = this.onTimerButtonRef.bind(this);
        this.onScalingRatioChanged = this.onScalingRatioChanged.bind(this);
        this.onRefreshFrequencyChanged = this.onRefreshFrequencyChanged.bind(this);
        this.onDataGenerateClick = this.onDataGenerateClick.bind(this);
        this.onTimerButtonClick = this.onTimerButtonClick.bind(this);
        this.onDataPointsChanged = this.onDataPointsChanged.bind(this);

        this.data = StocksUtility.GetStocksItems(this.dataPoints);
        this.dataIndex = this.data.length;

        this.state = {
            dataInfo: StocksUtility.toShortString(this.dataPoints),
            dataPoints: this.dataPoints,
            dataSource: this.data,
            refreshInfo: "0.1s",
            scalingRatio: window.devicePixelRatio
        }
    }

    public render(): JSX.Element {
        return (
            <div className="container sample" >
                <div className="options horizontal">
                    <label className="options-label" style={{width: "5rem"}}>Data Update:</label>
                    <label className="options-value">{this.state.refreshInfo}</label>
                    <input className="options-slider" type="range" onChange={this.onRefreshFrequencyChanged} min="20" max="1000" step="10" />                    
                    <button ref={this.onTimerButtonRef} onClick={this.onTimerButtonClick}>Stop Data</button>
                    <label ref={this.onFpsRef} className="options-label" />
                </div>
                <div className="options horizontal">
                    <label className="options-label" style={{width: "5rem"}}>Data Points: </label>
                    <label className="options-value">{this.state.dataInfo}</label>
                    <input className="options-slider" type="range" min="10000" max="100000" step="1000"
                        value={this.state.dataPoints}
                        onChange={this.onDataPointsChanged}/>
                    <button onClick={this.onDataGenerateClick}>Generate Data</button>
                    <label className="options-label"><input type="checkbox"
                        onChange={this.onScalingRatioChanged}/> Optimize Scaling </label>                    
                </div>

                <div className="container" style={{height: "calc(100% - 75px)"}}>
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
        if (!chart) { return; }

        this.chart = chart;
        this.onChartInit();
    }

    public onFpsRef(span: HTMLSpanElement) {
        if (!span) { return; }

        this.fps = span;
    }

    public onTimerButtonRef(button: HTMLButtonElement){
        if(!button) { return; }

        this.timerButton = button;
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

    public onTimerButtonClick() {
        this.shouldTick = !this.shouldTick;

        if(this.shouldTick){
            this.timerButton.textContent = "Stop Data";
        }
        else{
            this.timerButton.textContent = "Live Data";
        }
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
        let num: number = parseInt(e.target.value);

        if (isNaN(num)) {
            num = 10;
        }
        if (num < 10) {
            num = 10;
        }
        if (num > 1000) {
            num = 1000;
        }
        this.refreshMilliseconds = num;

        const info = (this.refreshMilliseconds / 1000);
        
        this.setState({ refreshInfo: info + "s"});
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
        if (this.shouldTick) {
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
}

// rendering above class to the React DOM
ReactDOM.render(<FinancialChartHighFrequency />, document.getElementById('root'));
