<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/sample-template-files/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Data Chart Type Financial Indicator Line.
<!-- in the Data Chart component -->
<!-- [Data Chart](https://infragistics.com/Reactsite/components/data-chart.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/type-financial-line-indicators?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartTypeFinancialIndicatorLine.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/type-financial-line-indicators?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartTypeFinancialIndicatorLine.tsx">
            <img height="40px" style="border-radius: 5px" alt="View on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/view.png"/>
        </a> -->
        <!-- <a target="_blank"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="View on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/view.png"/>
        </a>
https://codesandbox.io/embed/react-treemap-overview-rtb45
https://codesandbox.io/static/img/play-codesandbox.svg
https://codesandbox.io/embed/react-treemap-overview-rtb45?view=browser -->
    </body>
</html>

<!-- ## Sample Preview -->

<!-- <iframe
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/type-financial-line-indicators?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartTypeFinancialIndicatorLine.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/DataChartTypeFinancialIndicatorLine.tsx` file:

```tsx

import * as React from 'react';


import { SampleFinancialData } from './SampleFinancialData';

// axis' modules:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
// series' modules:
import { IgrFinancialPriceSeries } from 'igniteui-react-charts';

// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryTrendLineModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';

// indicator's modules:
import { IgrAbsoluteVolumeOscillatorIndicator } from 'igniteui-react-charts';
import { IgrAccumulationDistributionIndicator } from 'igniteui-react-charts';
import { IgrAverageDirectionalIndexIndicator } from 'igniteui-react-charts';
import { IgrAverageTrueRangeIndicator } from 'igniteui-react-charts';
import { IgrBollingerBandWidthIndicator } from 'igniteui-react-charts';
import { IgrChaikinVolatilityIndicator } from 'igniteui-react-charts';
import { IgrChaikinOscillatorIndicator } from 'igniteui-react-charts';
import { IgrCommodityChannelIndexIndicator } from 'igniteui-react-charts';
import { IgrDetrendedPriceOscillatorIndicator } from 'igniteui-react-charts';
import { IgrEaseOfMovementIndicator } from 'igniteui-react-charts';
import { IgrFastStochasticOscillatorIndicator } from 'igniteui-react-charts';
import { IgrForceIndexIndicator } from 'igniteui-react-charts';
import { IgrFullStochasticOscillatorIndicator } from 'igniteui-react-charts';
import { IgrMarketFacilitationIndexIndicator } from 'igniteui-react-charts';
import { IgrMassIndexIndicator } from 'igniteui-react-charts';
import { IgrMedianPriceIndicator } from 'igniteui-react-charts';
import { IgrMoneyFlowIndexIndicator } from 'igniteui-react-charts';
import { IgrMovingAverageConvergenceDivergenceIndicator } from 'igniteui-react-charts';
import { IgrNegativeVolumeIndexIndicator } from 'igniteui-react-charts';
import { IgrOnBalanceVolumeIndicator } from 'igniteui-react-charts';
import { IgrPercentagePriceOscillatorIndicator } from 'igniteui-react-charts';
import { IgrPercentageVolumeOscillatorIndicator } from 'igniteui-react-charts';
import { IgrPositiveVolumeIndexIndicator } from 'igniteui-react-charts';
import { IgrPriceVolumeTrendIndicator } from 'igniteui-react-charts';
import { IgrRateOfChangeAndMomentumIndicator } from 'igniteui-react-charts';
import { IgrRelativeStrengthIndexIndicator } from 'igniteui-react-charts';
import { IgrSlowStochasticOscillatorIndicator } from 'igniteui-react-charts';
import { IgrStandardDeviationIndicator } from 'igniteui-react-charts';
import { IgrStochRSIIndicator } from 'igniteui-react-charts';
import { IgrTRIXIndicator } from 'igniteui-react-charts';
import { IgrStrategyBasedIndicator } from 'igniteui-react-charts';

import { IndicatorDisplayType } from 'igniteui-react-charts';

IgrDataChartCoreModule.register();
IgrDataChartCategoryTrendLineModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartTypeFinancialIndicatorLine extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;

    private displayType: IndicatorDisplayType = IndicatorDisplayType.Line;

    constructor(props: any) {
        super(props);
        this.data = SampleFinancialData.create();

        this.onChartRef = this.onChartRef.bind(this);

        this.state = { indicatorType: "AbsoluteVolumeOscillator" };
    }

    public onIndicatorChanged = (e: any) => {
        const seriesType = e.target.value.toString();
        this.chart.series.clear();
        this.switchSeries(seriesType);
        this.setState({indicatorType: seriesType});
    }

    public switchSeries(seriesType: any) {
        let indicator: IgrStrategyBasedIndicator;

        switch (seriesType) {
            case "AbsoluteVolumeOscillator": {
                indicator = new IgrAbsoluteVolumeOscillatorIndicator({ name: "indicator" });
                break;
            }
            case "AccumulationDistribution": {
                indicator = new IgrAccumulationDistributionIndicator({ name: "indicator" });
                break;
            }
            case "AverageDirectionalIndex": {
                indicator = new IgrAverageDirectionalIndexIndicator({ name: "indicator" });
                break;
            }
            case "AverageTrueRange": {
                indicator = new IgrAverageTrueRangeIndicator({ name: "indicator" });
                break;
            }
            case "BollingerBandWidth": {
                indicator = new IgrBollingerBandWidthIndicator({ name: "indicator" });
                break;
            }
            case "ChaikinVolatility": {
                indicator = new IgrChaikinVolatilityIndicator({ name: "indicator" });
                break;
            }
            case "ChaikinOscillator": {
                indicator = new IgrChaikinOscillatorIndicator({ name: "indicator" });
                break;
            }
            case "CommodityChannelIndex": {
                indicator = new IgrCommodityChannelIndexIndicator({ name: "indicator" });
                break;
            }
            case "DetrendedPriceOscillator": {
                indicator = new IgrDetrendedPriceOscillatorIndicator({ name: "indicator" });
                break;
            }
            case "EaseOfMovement": {
                indicator = new IgrEaseOfMovementIndicator({ name: "indicator" });
                break;
            }
            case "FastStochasticOscillator": {
                indicator = new IgrFastStochasticOscillatorIndicator({ name: "indicator" });
                break;
            }
            case "ForceIndex": {
                indicator = new IgrForceIndexIndicator({ name: "indicator" });
                break;
            }
            case "FullStochasticOscillator": {
                indicator = new IgrFullStochasticOscillatorIndicator({ name: "indicator" });
                break;
            }
            case "MarketFacilitationIndex": {
                indicator = new IgrMarketFacilitationIndexIndicator({ name: "indicator" });
                break;
            }
            case "MassIndex": {
                indicator = new IgrMassIndexIndicator({ name: "indicator" });
                break;
            }
            case "MedianPrice": {
                indicator = new IgrMedianPriceIndicator({ name: "indicator" });
                break;
            }
            case "MoneyFlowIndex": {
                indicator = new IgrMoneyFlowIndexIndicator({ name: "indicator" });
                break;
            }
            case "MovingAverageConvergenceDivergence": {
                indicator = new IgrMovingAverageConvergenceDivergenceIndicator({ name: "indicator" });
                break;
            }
            case "NegativeVolumeIndex": {
                indicator = new IgrNegativeVolumeIndexIndicator({ name: "indicator" });
                break;
            }
            case "OnBalanceVolume": {
                indicator = new IgrOnBalanceVolumeIndicator({ name: "indicator" });
                break;
            }
            case "PercentagePriceOscillator": {
                indicator = new IgrPercentagePriceOscillatorIndicator({ name: "indicator" });
                break;
            }
            case "PercentageVolumeOscillator": {
                indicator = new IgrPercentageVolumeOscillatorIndicator({ name: "indicator" });
                break;
            }
            case "PositiveVolumeIndex": {
                indicator = new IgrPositiveVolumeIndexIndicator({ name: "indicator" });
                break;
            }
            case "PriceVolumeTrend": {
                indicator = new IgrPriceVolumeTrendIndicator({ name: "indicator" });
                break;
            }
            case "RateOfChangeAndMomentum": {
                indicator = new IgrRateOfChangeAndMomentumIndicator({ name: "indicator" });
                break;
            }
            case "RelativeStrengthIndex": {
                indicator = new IgrRelativeStrengthIndexIndicator({ name: "indicator" });
                break;
            }
            case "SlowStochasticOscillator": {
                indicator = new IgrSlowStochasticOscillatorIndicator({ name: "indicator" });
                break;
            }
            case "StandardDeviation": {
                indicator = new IgrStandardDeviationIndicator({ name: "indicator" });
                break;
            }
            case "StochRSI": {
                indicator = new IgrStochRSIIndicator({ name: "indicator" });
                break;
            }
            case "TRIX": {
                indicator = new IgrTRIXIndicator({ name: "indicator" });
                break;
            }
        }

        if (indicator !== undefined) {
            indicator.xAxisName = "xAxis2";
            indicator.yAxisName = "yAxis2";
            indicator.displayType = this.displayType;
            indicator.highMemberPath = "High";
            indicator.lowMemberPath = "Low";
            indicator.closeMemberPath = "Close";
            indicator.openMemberPath = "Open";
            indicator.volumeMemberPath = "Volume";
            this.chart.series.add(indicator);
        }
    }

    public onChartRef(chart: IgrDataChart) {
        this.chart = chart;
        if (chart !== undefined){
            this.switchSeries(this.state.indicatorType);
        }
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igComponent" style={{ height: "calc(50% - 20px)" }} >
                    <IgrDataChart
                        width="100%"
                        height="100%"
                        dataSource={this.data}
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true}>

                        <IgrCategoryXAxis name="xAxis1" label="Label" labelAngle={90} />
                        <IgrNumericYAxis  name="yAxis1" labelLocation="OutsideLeft" title="Financial Prices" />

                        <IgrFinancialPriceSeries
                            name="series1"
                            xAxisName="xAxis1"
                            yAxisName="yAxis1"
                            displayType="Candlestick"
                            highMemberPath="High"
                            lowMemberPath="Low"
                            closeMemberPath="Close"
                            openMemberPath="Open"
                            volumeMemberPath="Volume"
                            showDefaultTooltip="true" />
                    </IgrDataChart>
                </div>
                <div className="igOptions">
                    <span className="igOptions-label"> Indicator Display Type: </span>
                    <select value={this.state.indicatorType}
                        onChange={this.onIndicatorChanged}>
                        <option>AbsoluteVolumeOscillator</option>
                        <option>AccumulationDistribution</option>
                        <option>AverageDirectionalIndex</option>
                        <option>AverageTrueRange</option>
                        <option>BollingerBandWidth</option>
                        <option>ChaikinVolatility</option>
                        <option>ChaikinOscillator</option>
                        <option>CommodityChannelIndex</option>
                        <option>DetrendedPriceOscillator</option>
                        <option>EaseOfMovement</option>
                        <option>FastStochasticOscillator</option>
                        <option>ForceIndex</option>
                        <option>FullStochasticOscillator</option>
                        <option>MarketFacilitationIndex</option>
                        <option>MassIndex</option>
                        <option>MedianPrice</option>
                        <option>MoneyFlowIndex</option>
                        <option>MovingAverageConvergenceDivergence</option>
                        <option>NegativeVolumeIndex</option>
                        <option>OnBalanceVolume</option>
                        <option>PercentagePriceOscillator</option>
                        <option>PercentageVolumeOscillator</option>
                        <option>PositiveVolumeIndex</option>
                        <option>PriceVolumeTrend</option>
                        <option>RateOfChangeAndMomentum</option>
                        <option>RelativeStrengthIndex</option>
                        <option>SlowStochasticOscillator</option>
                        <option>StandardDeviation</option>
                        <option>StochRSI</option>
                        <option>TRIX</option>
                    </select>
                </div>

                <div className="igComponent" style={{ height: "calc(50% - 20px)" }}>
                    <IgrDataChart
                        width="100%"
                        height="100%"
                        ref={this.onChartRef}
                        dataSource={this.data}
                        isHorizontalZoomEnabled="true"
                        isVerticalZoomEnabled="true">

                        <IgrCategoryXAxis name="xAxis2" label="Label" labelAngle={90} />
                        <IgrNumericYAxis  name="yAxis2" labelLocation="OutsideLeft" title="Indicators" />
                    </IgrDataChart>

                </div>
            </div>
        );
    }
}

```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/charts/data-chart/type-financial-line-indicators
npm install
npm start

```

Then open http://localhost:3000/ in your browser

