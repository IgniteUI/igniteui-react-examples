import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrCategoryChart } from 'igniteui-react-charts';
import { IgrCategoryChartModule } from 'igniteui-react-charts';
import { CategoryChartSharedData } from './CategoryChartSharedData';

IgrCategoryChartModule.register();

export default class CategoryChartHighFrequency extends React.Component<any, any> {
    public dataIndex: number = 0;
    public dataPoints: number = 500;
    public data: any[];

    public refreshMilliseconds: number = 5;
    public interval: number = -1;

    public chart: IgrCategoryChart;        

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onRefreshFrequencyChanged = this.onRefreshFrequencyChanged.bind(this);
        this.onDataGenerateClick = this.onDataGenerateClick.bind(this);
        this.onDataPointsChanged = this.onDataPointsChanged.bind(this);
        this.onDataFeedClick = this.onDataFeedClick.bind(this);

        this.data = CategoryChartSharedData.generateItems(100, this.dataPoints, false);
        this.dataIndex = this.data.length;

        this.state = {
            dataFeedAction: "Start",
            dataInfo: CategoryChartSharedData.toShortString(this.dataPoints),
            dataPoints: this.dataPoints,
            dataSource: this.data,
            scalingRatio: window.devicePixelRatio,
            refreshInterval: this.refreshMilliseconds,
            refreshInfo: "5ms"
        }
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <button onClick={this.onDataFeedClick}>{this.state.dataFeedAction}</button>                    
                    <label className="options-label">Refresh: </label>
                    <label className="options-value">{this.state.refreshInfo}</label>
                    <input className="options-slider" type="range" min="5" max="250" step="5"
                        value={this.state.refreshInterval}
                        onChange={this.onRefreshFrequencyChanged} />
                    <button onClick={this.onDataGenerateClick}>Generate</button>
                    <label className="options-label">Data Points: </label>
                    <label className="options-value">{this.state.dataInfo}</label>
                    <input className="options-slider" type="range" min="100" max="2000" step="100"
                        value={this.state.dataPoints}
                        onChange={this.onDataPointsChanged} />                    
                </div>
                <div className="container" style={{ height: "calc(100% - 45px)" }} >
                    <IgrCategoryChart ref={this.onChartRef}
                        width="100%"
                        height="100%"
                        chartType="Line"
                        dataSource={this.state.dataSource}
                        yAxisExtent={40}
                        markerTypes="None" />
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

    public onChartRef(chart: IgrCategoryChart) {
        if (!chart) { return; }

        this.chart = chart;
        this.onChartInit();
    }

    public onChartInit(): void {        
        this.setupInterval();
    }

    public onDataGenerateClick() {
        this.data = CategoryChartSharedData.generateItems(100, this.dataPoints, false);
        this.dataIndex = this.data.length;

        this.setState({ dataSource: this.data });
    }

    public onDataFeedClick() {
        let feedAction = this.state.dataFeedAction;

        if (feedAction === "Start") {
            this.setState({ dataFeedAction: "Stop" });
        }
        else {
            this.setState({ dataFeedAction: "Start" });
        }
    }

    public onDataPointsChanged = (e: any) => {
        let num: number = parseInt(e.target.value, 10);

        if (isNaN(num)) {
            num = 10000;
        }
        if (num < 100) {
            num = 100;
        }
        if (num > 2000) {
            num = 2000;
        }
        const info = CategoryChartSharedData.toShortString(num);
        this.dataPoints = num;
        this.setState({ dataPoints: num, dataInfo: info });
    }

    public ngOnDestroy(): void {
        if (this.interval >= 0) {
            window.clearInterval(this.interval);
            this.interval = -1;
        }
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
        this.setState({ refreshInterval: num, refreshInfo: this.refreshMilliseconds + "ms" });
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
        if (this.state.dataFeedAction === "Stop") {
            this.dataIndex++;
            const oldItem = this.data[0];
            const newItem = CategoryChartSharedData.getNewItem(this.data, this.dataIndex);

            // updating data source and notifying category chart
            this.data.push(newItem);
            this.chart.notifyInsertItem(this.data, this.data.length - 1, newItem);
            this.data.shift();
            this.chart.notifyRemoveItem(this.data, 0, oldItem);            
        }
    }
}

// rendering above class to the React DOM
ReactDOM.render(<CategoryChartHighFrequency />, document.getElementById('root'));
