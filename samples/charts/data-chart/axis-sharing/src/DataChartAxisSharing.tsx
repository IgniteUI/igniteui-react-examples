// axis' modules:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
// series' modules:
import { IgrFinancialPriceSeries } from 'igniteui-react-charts';
import { IgrMoneyFlowIndexIndicator } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';

import * as React from 'react';



import { SampleFinancialData } from './SampleFinancialData';

IgrDataChartCoreModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartAxisSharing extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;

    constructor(props: any) {
        super(props);

        this.data = SampleFinancialData.create();
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igComponent">
                    <IgrDataChart
                        width="100%"
                        height="100%"
                        dataSource={this.data}
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true} >

                        <IgrCategoryXAxis name="xAxisShared" label="Label" />
                        <IgrNumericYAxis  name="yAxisRight" labelLocation="OutsideRight"
                        minimumValue={400} title="Stock Price ($)"
                        maximumValue={700}
                        />
                        <IgrNumericYAxis name="yAxisLeft" labelLocation="OutsideLeft"
                        minimumValue={0} title="Money Flow Index"
                        maximumValue={300}
                        majorStrokeThickness={0}/>

                        <IgrMoneyFlowIndexIndicator
                        name="series2"
                        xAxisName="xAxisShared"
                        yAxisName="yAxisLeft"
                        displayType="Area"
                        highMemberPath="High"
                        lowMemberPath="Low"
                        closeMemberPath="Close"
                        openMemberPath="Open"
                        volumeMemberPath="Volume" />

                        <IgrFinancialPriceSeries
                        name="series1"
                        xAxisName="xAxisShared"
                        yAxisName="yAxisRight"
                        displayType="Candlestick"
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
