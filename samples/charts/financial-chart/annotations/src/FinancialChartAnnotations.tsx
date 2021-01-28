import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import * as React from 'react';
import { StocksUtility } from './StocksUtility';

IgrFinancialChartModule.register();

export default class FinancialChartAnnotations extends React.Component<any, any> {

    public data: any[];
    public excludeProperties: string[] = ["index", "info"];

    constructor(props: any) {
        super(props);
        this.state = {
            calloutsVisible: true,
            crosshairsMode: "Both",
            crosshairsVisible: true,
            finalValuesVisible: true,
            markersTypes: "Circle",
            markersVisible: true,
            toolTipTypes: "Item"
        };
        this.initData();
    }

    public render(): JSX.Element {
        return (
        <div className="igContainer" >
            <div className="igOptions">
                <label className="igOptions-label">Annotations: </label>
                <label className="igOptions-item"><input type="checkbox"
                checked={this.state.crosshairsVisible}
                onChange={this.onCrosshairsVisible}/> Crosshair </label>
                <label className="igOptions-item"><input type="checkbox"
                checked={this.state.calloutsVisible}
                onChange={this.onCalloutsVisible}/> Callouts </label>
                <label className="igOptions-item"><input type="checkbox"
                checked={this.state.finalValuesVisible}
                onChange={this.onFinalValuesVisible}/> Final Values </label>
                <label className="igOptions-item"><input type="checkbox"
                checked={this.state.markersVisible}
                onChange={this.onMarkersVisible}/> Markers </label>
                <label className="igOptions-label">Item ToolTip: </label>
                    <select value={this.state.toolTipType}
                        onChange={this.onToolTipTypeChanged}>
                         <option>None</option>
                        <option>Category</option>
                        <option>Item</option>
                    </select>
            </div>
            <div className="igComponent" style={{height: "calc(100% - 65px)"}}>
                <IgrFinancialChart
                    width="100%"
                    height="100%"
                    chartType="Line"
                    thickness={2}
                    excludedProperties={this.excludeProperties}
                    xAxisMode={this.state.xAxisMode}
                    yAxisMode={this.state.yAxisMode}
                    dataSource={this.data}
                    toolTipType={this.state.toolTipTypes}
                    markerTypes={this.state.markersTypes}
                    calloutsVisible={this.state.calloutsVisible}
                    calloutsXMemberPath="index"
                    calloutsYMemberPath="value"
                    calloutsLabelMemberPath="info"
                    calloutsContentMemberPath="info"
                    crosshairsSnapToData={false}
                    crosshairsDisplayMode={this.state.crosshairsMode}
                    crosshairsAnnotationEnabled={this.state.crosshairsVisible}
                    finalValueAnnotationsVisible={this.state.finalValuesVisible}/>
            </div>
        </div>
        );
    }

    public onToolTipTypeChanged = (e: any) =>{
        const tooltip = e.target.value.toString();
        this.setState({toolTipTypes: tooltip});
    }

    public onCrosshairsVisible = (e: any) =>{
        const isVisible = e.target.checked;
        this.setState( {crosshairsVisible: isVisible} );
        if (isVisible) {
            this.setState( {crosshairsMode: "Both"} );
        }
        else {
            this.setState( {crosshairsMode: "None"} );
        }
    }
    public onCalloutsVisible = (e: any) =>{
        this.setState( {calloutsVisible: e.target.checked} );
    }
    public onFinalValuesVisible = (e: any) =>{
        this.setState( {finalValuesVisible: e.target.checked} );
    }
    public onMarkersVisible = (e: any) =>{
        const visible = e.target.checked;
        const markers = e.target.checked ? "Circle" : "None";
        this.setState( {markersTypes: markers, markersVisible: visible} );
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
