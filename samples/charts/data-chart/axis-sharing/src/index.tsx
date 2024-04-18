import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { SharedAxisFinancialData } from './SharedAxisFinancialData';
// axis' modules:
import { IgrNumericYAxis } from "@infragistics/igniteui-react-charts";
import { IgrCategoryXAxis } from "@infragistics/igniteui-react-charts";
// series' modules:
import { IgrFinancialPriceSeries } from "@infragistics/igniteui-react-charts";
import { IgrColumnSeries } from "@infragistics/igniteui-react-charts";
// data chart's modules:
import { IgrDataChart } from "@infragistics/igniteui-react-charts";
import { IgrDataChartCoreModule } from "@infragistics/igniteui-react-charts";
import { IgrDataChartInteractivityModule } from "@infragistics/igniteui-react-charts";
import { IgrNumberAbbreviatorModule } from "@infragistics/igniteui-react-charts";

IgrNumberAbbreviatorModule.register();
IgrDataChartCoreModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartAxisSharing extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;

    constructor(props: any) {
        super(props);

        this.data = SharedAxisFinancialData.create();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container">
                    <IgrDataChart
                        width="100%"
                        height="100%"
                        subtitle="Stock Prices and Trade Volume"
                        subtitleTopMargin="10"
                        dataSource={this.data}
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true} >

                        <IgrCategoryXAxis name="xAxisShared" label="Label" gap="0.75"/>
                        <IgrNumericYAxis  name="yAxisRight" labelLocation="OutsideRight"
                        minimumValue={400} title="Stock Price ($)"
                        maximumValue={700}
                        />
                        <IgrNumericYAxis name="yAxisLeft" labelLocation="OutsideLeft"
                        minimumValue={5000} title="Trade Volume"
                        maximumValue={45000}
                        majorStrokeThickness={0}
                        abbreviateLargeNumbers={true}/>

                        <IgrColumnSeries
                        name="series2"
                        xAxisName="xAxisShared"
                        yAxisName="yAxisLeft"
                        valueMemberPath="Volume"
                        showDefaultTooltip="true"
                        title="Trade Volume" />

                        <IgrFinancialPriceSeries
                        name="series1"
                        xAxisName="xAxisShared"
                        yAxisName="yAxisRight"
                        displayType="Candlestick"
                        highMemberPath="High"
                        lowMemberPath="Low"
                        closeMemberPath="Close"
                        openMemberPath="Open"
                        volumeMemberPath="Volume"
                        showDefaultTooltip="true"
                        title="Stock Price" />

                    </IgrDataChart>
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataChartAxisSharing/>);
