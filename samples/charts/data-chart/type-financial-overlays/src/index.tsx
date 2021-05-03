import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// axis' modules:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
// series' modules:
import { IgrFinancialPriceSeries } from 'igniteui-react-charts';
import { IgrBollingerBandsOverlay } from 'igniteui-react-charts';
import { IgrPriceChannelOverlay } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { SampleFinancialData } from './SampleFinancialData';
import { IgrNumberAbbreviatorModule } from 'igniteui-react-charts';

IgrNumberAbbreviatorModule.register();
IgrDataChartCoreModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartTypeFinancialLineIndicators extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;

    private bollingerBands: IgrBollingerBandsOverlay;
    private priceChannel: IgrPriceChannelOverlay;
    private priceSeries: IgrFinancialPriceSeries;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onOverlayChanged = this.onOverlayChanged.bind(this);

        this.state = { displayOverlay: "BollingerBands" };
        this.data = SampleFinancialData.create();

        this.bollingerBands = new IgrBollingerBandsOverlay({ name: "bollinger" });
        this.bollingerBands.xAxisName = "xAxis";
        this.bollingerBands.yAxisName = "yAxis";
        this.bollingerBands.title = "Bollinger Bands";
        this.bollingerBands.highMemberPath = "High";
        this.bollingerBands.lowMemberPath = "Low";
        this.bollingerBands.closeMemberPath = "Close";
        this.bollingerBands.openMemberPath = "Open";
        this.bollingerBands.volumeMemberPath = "Volume";
        this.bollingerBands.showDefaultTooltip = true;
        this.bollingerBands.areaFillOpacity = 0.1;
        this.bollingerBands.brush   = "rgba(75, 75, 75, 1.0)";
        this.bollingerBands.outline = "rgba(75, 75, 75, 1.0)";

        this.priceChannel = new IgrPriceChannelOverlay({ name: "priceChannel" });
        this.priceChannel.xAxisName = "xAxis";
        this.priceChannel.yAxisName = "yAxis";
        this.priceChannel.title = "Price Channel";
        this.priceChannel.highMemberPath = "High";
        this.priceChannel.lowMemberPath = "Low";
        this.priceChannel.closeMemberPath = "Close";
        this.priceChannel.openMemberPath = "Open";
        this.priceChannel.volumeMemberPath = "Volume";
        this.priceChannel.showDefaultTooltip = true;
        this.priceChannel.areaFillOpacity = 0.1;
        this.priceChannel.brush   = "rgba(75, 75, 75, 1.0)";
        this.priceChannel.outline = "rgba(75, 75, 75, 1.0)";

        this.priceSeries = new IgrFinancialPriceSeries({ name: "priceSeries" });
        this.priceSeries.xAxisName = "xAxis";
        this.priceSeries.yAxisName = "yAxis";
        this.priceSeries.title = "OHLC Prices";
        this.priceSeries.highMemberPath = "High";
        this.priceSeries.lowMemberPath = "Low";
        this.priceSeries.closeMemberPath = "Close";
        this.priceSeries.openMemberPath = "Open";
        this.priceSeries.volumeMemberPath = "Volume";
        this.priceSeries.showDefaultTooltip = true;
        this.priceSeries.brush   = "rgba(171, 82, 235, 0.9)";
        this.priceSeries.outline = "rgba(171, 82, 235, 0.9)";
        this.priceSeries.negativeBrush = "rgba(192, 49, 82)";
        this.priceSeries.negativeOutline = "rgba(192, 49, 82)";
    }

    public onOverlayChanged = (e: any) => {
        const type = e.target.value.toString();
        this.chart.series.clear();
        switch (type) {
            case "None": {
                this.chart.series.add(this.priceSeries);
                break;
            }
            case "BollingerBands": {
                this.chart.series.add(this.bollingerBands);
                this.chart.series.add(this.priceSeries);
                break;
            }
            case "PriceChannel": {
                this.chart.series.add(this.priceChannel);
                this.chart.series.add(this.priceSeries);
            }
        }
    }

    public onChartRef(chart: IgrDataChart) {
        if (!chart) { return; }

        this.chart = chart;
        this.chart.series.add(this.bollingerBands);
        this.chart.series.add(this.priceSeries);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <label className="options-label"> Overlay Display Type: </label>
                    <select defaultValue={this.state.displayOverlay}
                        onChange={this.onOverlayChanged}>
                        <option>None</option>
                        <option>BollingerBands</option>
                        <option>PriceChannel</option>
                    </select>
                </div>
                <div className="container" style={{ height: "calc(100% - 35px)" }} >
                    <IgrDataChart
                        width="100%"
                        height="100%"
                        ref={this.onChartRef}
                        dataSource={this.data}
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true} >

                        <IgrCategoryXAxis name="xAxis" label="Label" labelAngle={45} />
                        <IgrNumericYAxis name="yAxis" title="Financial Prices" />

                    </IgrDataChart>
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<DataChartTypeFinancialOverlays />, document.getElementById('root'));
