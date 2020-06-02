// axis' modules:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
// series' modules:
import { IgrFinancialPriceSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import * as React from 'react';
import { SampleFinancialData } from './SampleFinancialData';

IgrDataChartCoreModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartTypeFinancialOhlcSeries extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;

    constructor(props: any) {
        super(props);

        this.state = { displayTypeIndicator: "Line" };
        this.data = SampleFinancialData.create();
    }

    public onDisplayTypeIndicatorChanged = (e: any) =>{
        const type = e.target.value.toString();
        this.setState({displayTypeIndicator: type});
    }

    public render() {
        return (
        <div className="igContainer">
            <div className="igComponent" style={{height: "calc(100% - 20px)"}} >
                <IgrDataChart
                    width="100%"
                    height="100%"
                    dataSource={this.data}
                    isHorizontalZoomEnabled={true}
                    isVerticalZoomEnabled={true} >

                    <IgrCategoryXAxis name="xAxis" label="Label" labelAngle={90} />
                    <IgrNumericYAxis  name="yAxis1" labelLocation="OutsideRight"
                     title="Financial Prices"/>
                    <IgrNumericYAxis  name="yAxis2" labelLocation="OutsideLeft"
                    title="Indicator Values" majorStrokeThickness={0} maximumValue={800}/>

                    <IgrFinancialPriceSeries
                    name="series2"
                    xAxisName="xAxis"
                    yAxisName="yAxis1"
                    displayType="OHLC"
                    highMemberPath="High"
                    lowMemberPath="Low"
                    closeMemberPath="Close"
                    openMemberPath="Open"
                    volumeMemberPath="Volume"
                    showDefaultTooltip="true" />

                </IgrDataChart>
            </div>
        </div>
        );
    }
}
