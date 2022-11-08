import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// axis' modules:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
// series' modules:
import { IgrFinancialPriceSeries } from 'igniteui-react-charts';
import { IgrBollingerBandsOverlay } from 'igniteui-react-charts';
import { IgrMedianPriceIndicator } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { SampleFinancialData } from './SampleFinancialData';

IgrDataChartCoreModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartTypeFinancialSeries extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;

    constructor(props: any) {
        super(props);

        this.state = {
            displayTypeIndicator: "Line",
            displayTypeSeries: "Candlestick" }
        this.data = SampleFinancialData.create();
    }

    public onDisplayTypeSeriesChanged = (e: any) =>{
        const type = e.target.value.toString();
        this.setState({displayTypeSeries: type});
    }

    public onDisplayTypeIndicatorChanged = (e: any) =>{
        const type = e.target.value.toString();
        this.setState({displayTypeIndicator: type});
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
            <div className="options horizontal">
                <label className="options-label"> Series Display Type: </label>
                <select value={this.state.markersType}
                    onChange={this.onDisplayTypeSeriesChanged}>
                    <option>Candlestick</option>
                    <option>OHLC</option>
                </select>
                <label className="options-label"> Indicator Type: </label>
                <select value={this.state.markersType}
                    onChange={this.onDisplayTypeIndicatorChanged}>
                    <option>Line</option>
                    <option>Area</option>
                    <option>Column</option>
                </select>
            </div>
            <div className="container" style={{height: "calc(100% - 35px)"}} >
                <IgrDataChart
                    width="100%"
                    height="100%"
                    dataSource={this.data}
                    isHorizontalZoomEnabled={true}
                    isVerticalZoomEnabled={true} >

                    <IgrCategoryXAxis name="xAxis" label="Label" labelAngle={45} />
                    <IgrNumericYAxis  name="yAxis1" labelLocation="OutsideRight"
                     title="Financial Prices"/>
                    <IgrNumericYAxis  name="yAxis2" labelLocation="OutsideLeft"
                    title="Indicator Values" majorStrokeThickness={0} maximumValue={800}/>

                    <IgrBollingerBandsOverlay
                    name="series1"
                    xAxisName="xAxis"
                    yAxisName="yAxis1"
                    highMemberPath="High"
                    lowMemberPath="Low"
                    closeMemberPath="Close"
                    openMemberPath="Open"
                    brush="rgba(171, 82, 235, 0.39)"/>

                    <IgrFinancialPriceSeries
                    name="series2"
                    xAxisName="xAxis"
                    yAxisName="yAxis1"
                    displayType={this.state.displayTypeSeries}
                    highMemberPath="High"
                    lowMemberPath="Low"
                    closeMemberPath="Close"
                    openMemberPath="Open"
                    volumeMemberPath="Volume" />

                    <IgrMedianPriceIndicator
                    name="series3"
                    xAxisName="xAxis"
                    yAxisName="yAxis2"
                    displayType={this.state.displayTypeIndicator}
                    highMemberPath="High"
                    lowMemberPath="Low"
                    closeMemberPath="Close"
                    openMemberPath="Open"
                    volumeMemberPath="Volume" />

                </IgrDataChart>
            </div>
        </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataChartTypeFinancialSeries/>);
