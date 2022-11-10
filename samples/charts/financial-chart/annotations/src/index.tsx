import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrFinancialChart, MarkerType } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import { StocksUtility } from './StocksUtility';

IgrFinancialChartModule.register();

export default class FinancialChartAnnotations extends React.Component<any, any> {

    public data: any[];
    public excludeProperties: string[] = ["index", "info"];

    private _chart: IgrFinancialChart;

    constructor(props: any) {
        super(props);
        this.state = {
            calloutsVisible: true,
            crosshairsMode: "Both",
            crosshairsVisible: true,
            finalValuesVisible: true,
            markersVisible: false,
            markerTypes: [ MarkerType.None ],
            toolTipVisible: true,
            toolTipType: "Item"
        };
        this.initData();
    }

    public render(): JSX.Element {
        return (
        <div className="container sample" >
            <div className="options horizontal">
                <label className="options-label">Annotations: </label>
                <label className="options-item">
                    <input type="checkbox"
                        checked={this.state.crosshairsVisible}
                        onChange={this.onCrosshairsVisible}/> Crosshair 
                </label>
                <label className="options-item">
                    <input type="checkbox"
                        checked={this.state.calloutsVisible}
                        onChange={this.onCalloutsVisible}/> Callouts 
                </label>
                <label className="options-item">
                    <input type="checkbox"
                        checked={this.state.toolTipVisible}
                        onChange={this.onItemTooltipVisible}/> Item Tooltip 
                </label>
                <label className="options-item">
                    <input type="checkbox"
                        checked={this.state.finalValuesVisible}
                        onChange={this.onFinalValuesVisible}/> Final Values 
                </label>
                <label className="options-item">
                    <input type="checkbox"
                        checked={this.state.markersVisible}
                        onChange={this.onMarkersVisible}/> Markers 
                </label>
            </div>

            <div className="container" style={{height: "calc(100% - 65px)"}}>
                <IgrFinancialChart
                    ref={this.onChartRef}
                    width="100%"
                    height="100%"
                    chartType="Line"
                    thickness={2}
                    xAxisMode={this.state.xAxisMode}
                    yAxisMode={this.state.yAxisMode}
                    dataSource={this.data}
                    excludedProperties={this.excludeProperties}
                    calloutsVisible={this.state.calloutsVisible}
                    calloutsXMemberPath="index"
                    calloutsYMemberPath="value"
                    calloutsLabelMemberPath="info"
                    calloutsContentMemberPath="info"
                    crosshairsSnapToData={false}
                    toolTipType={this.state.toolTipType}
                    crosshairsDisplayMode={this.state.crosshairsMode}
                    crosshairsAnnotationEnabled={this.state.crosshairsVisible}
                    finalValueAnnotationsVisible={this.state.finalValuesVisible}
                    markerTypes={this.state.markerTypes}/>
            </div>
        </div>
        );
    }

    private onChartRef = (chart: IgrFinancialChart) => {
        this._chart = chart;
    }

    public onCrosshairsVisible = (e: any) => {
        const visible = e.target.checked;
        const mode = e.target.checked ? "Both" : "None";
        this.setState({ crosshairsVisible: visible, crosshairsMode: mode });
    }
    public onCalloutsVisible = (e: any) => {
        this.setState({ calloutsVisible: e.target.checked });
    }
    public onFinalValuesVisible = (e: any) => {
        this.setState({ finalValuesVisible: e.target.checked });
    }
    public onMarkersVisible = (e: any) => {
        const visible = e.target.checked;
        const type = e.target.checked ? [ MarkerType.Automatic ] : [ MarkerType.None ];
        this.setState({ markerTypes: type, markersVisible: visible });
    }
    public onItemTooltipVisible = (e: any) => {
        const visible = e.target.checked;
        const type = e.target.checked ? "Item" : "None";
        this.setState({ toolTipVisible: visible, toolTipType: type });
    }

    public initData() {
        const today = new Date();
        const year = today.getFullYear();
        const dateMonth = today.getMonth();
        const dateEnd = new Date(year, dateMonth, 1);
        const dateStart = new Date(year - 1, dateMonth, 1);

        const stockData = StocksUtility.GetStocksBetween(dateStart, dateEnd);

        let minVal: number = Number.MAX_VALUE;
        let maxVal: number = Number.MIN_VALUE;
        let minIndex: number = 0;
        let maxIndex: number = 0;
        let idx: number = 0;
        let currentYear = 0;
        let currentQuarter = 0;

        // adding annotation data for some data item
        for (const item of stockData) {

            if (minVal > item.close) {
                minVal = item.close;
                minIndex = idx;
            }
            if (maxVal < item.close) {
                maxVal = item.close;
                maxIndex = idx;
            }
            const itemYear = StocksUtility.GetYear(item.date);
            if (currentYear !== itemYear) {
                currentYear = itemYear;
                item.info = itemYear;
            }

            const itemQuarter = StocksUtility.GetQuarter(item.date);
            if (currentQuarter !== itemQuarter) {
                currentQuarter = itemQuarter;
                item.info = "Q" + itemQuarter;
            }

            item.index = idx;
            item.value = item.close;
            idx++;
        }

        stockData[100].info = "SPLIT";
        stockData[200].info = "SPLIT";
        stockData[250].info = "SPLIT";

        stockData[130].info = "DIV";
        stockData[270].info = "DIV";
        stockData[320].info = "DIV";

        stockData[minIndex].info = "MIN";
        stockData[maxIndex].info = "MAX";

        this.data = stockData;
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FinancialChartAnnotations/>);
