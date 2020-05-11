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

import * as React from "react";

import "./DataChartSharedStyles.css";
import { SampleFinancialData } from "./SampleFinancialData";

IgrDataChartCoreModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartTypeFinancialLineIndicators extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;

    private bollingerBands: IgrBollingerBandsOverlay;
    private priceChannel: IgrPriceChannelOverlay;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onOverlayChanged = this.onOverlayChanged.bind(this);

        this.state = { displayOverlay: "BollingerBands" };
        this.data = SampleFinancialData.create();

        this.bollingerBands = new IgrBollingerBandsOverlay({ name: "bollinger" });
        this.bollingerBands.xAxisName = "xAxis";
        this.bollingerBands.yAxisName = "yAxis";
        this.bollingerBands.highMemberPath = "High";
        this.bollingerBands.lowMemberPath = "Low";
        this.bollingerBands.closeMemberPath = "Close";
        this.bollingerBands.openMemberPath = "Open";
        this.bollingerBands.volumeMemberPath = "Volume";
        this.bollingerBands.brush="rgba(171, 82, 235, 0.3)";
        this.bollingerBands.outline="rgba(171, 82, 235, 0.9)";

        this.priceChannel = new IgrPriceChannelOverlay({ name: "priceChannel" });
        this.priceChannel.xAxisName = "xAxis";
        this.priceChannel.yAxisName = "yAxis";
        this.priceChannel.highMemberPath = "High";
        this.priceChannel.lowMemberPath = "Low";
        this.priceChannel.closeMemberPath = "Close";
        this.priceChannel.openMemberPath = "Open";
        this.priceChannel.volumeMemberPath = "Volume";
        this.priceChannel.brush="rgba(171, 82, 235, 0.3)";
        this.priceChannel.outline="rgba(171, 82, 235, 0.9)";
    }

    public onOverlayChanged = (e: any) => {
        const type = e.target.value.toString();
        switch (type) {
            case "None": {
                this.chart.series.remove(this.priceChannel);
                this.chart.series.remove(this.bollingerBands);
                break;
            }
            case "BollingerBands": {
                this.chart.series.remove(this.priceChannel);
                this.chart.series.add(this.bollingerBands);
                break;
            }
            case "PriceChannel": {
                this.chart.series.remove(this.bollingerBands);
                this.chart.series.add(this.priceChannel);
            }
        }
    }

    public onChartRef(chart: IgrDataChart) {
        this.chart = chart;
        this.chart.series.add(this.bollingerBands);
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igOptions">
                    <span className="igOptions-label"> Overlay Display Type: </span>
                    <select defaultValue={this.state.displayOverlay}
                        onChange={this.onOverlayChanged}>
                        <option>None</option>
                        <option>BollingerBands</option>
                        <option>PriceChannel</option>
                    </select>
                </div>
                <div className="igComponent" style={{ height: "calc(100% - 35px)" }} >
                    <IgrDataChart
                        width="100%"
                        height="100%"
                        ref={this.onChartRef}
                        dataSource={this.data}
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true} >

                        <IgrCategoryXAxis name="xAxis" label="Label" labelAngle={90} />
                        <IgrNumericYAxis name="yAxis" title="Financial Prices" />

                        <IgrFinancialPriceSeries
                            name="series1"
                            xAxisName="xAxis"
                            yAxisName="yAxis"
                            displayType="Candlestick"
                            highMemberPath="High"
                            lowMemberPath="Low"
                            closeMemberPath="Close"
                            openMemberPath="Open"
                            volumeMemberPath="Volume"
                            showDefaultTooltip="true"/>

                    </IgrDataChart>
                </div>
            </div>
        );
    }
}
