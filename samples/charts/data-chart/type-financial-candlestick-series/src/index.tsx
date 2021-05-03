import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

// axis' modules:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
// series' modules:
import { IgrFinancialPriceSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';

import { SampleFinancialData } from './SampleFinancialData';

IgrDataChartCoreModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartTypeFinancialCandlestickSeries extends React.Component<any, any> {
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

    public render(): JSX.Element {
        return (
        <div className="container sample">
            <div className="container" style={{height: "calc(100% - 5px)"}} >
                <IgrDataChart
                    width="100%"
                    height="100%"
                    dataSource={this.data}
                    isHorizontalZoomEnabled={true}
                    isVerticalZoomEnabled={true} >

                    <IgrCategoryXAxis name="xAxis" label="Label" labelAngle={45} />
                    <IgrNumericYAxis  name="yAxis" labelLocation="OutsideRight" />

                    <IgrFinancialPriceSeries
                    name="series"
                    xAxisName="xAxis"
                    yAxisName="yAxis"
                    title="Stock Price"
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

// rendering above class to the React DOM
ReactDOM.render(<DataChartTypeFinancialCandlestickSeries />, document.getElementById('root'));