import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
// financial series modules:
import { IgrDataChartFinancialModule } from 'igniteui-react-charts';
// data chart's elements:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
import { IgrFinancialPriceSeries } from 'igniteui-react-charts';
import { SampleFinancialData } from './SampleFinancialData';

IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartFinancialModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartScrollbars extends React.Component<any, any> {
    public chart: IgrDataChart;

    constructor(props: any) {
        super(props);

        this.state = {
            data: SampleFinancialData.create(),
        };

        this.onChartRef = this.onChartRef.bind(this);

    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrDataChart
                    ref={this.onChartRef}
                    width="100%"
                    height="100%"
                    subtitle="Stock Prices Series in Candlestick Display Type"
                    subtitleTopMargin={10}
                    isHorizontalZoomEnabled="true"
                    isVerticalZoomEnabled="true"
                    horizontalViewScrollbarMode="Persistent"
                    verticalViewScrollbarMode="Persistent"
                    defaultInteraction="DragPan"
                    dataSource={this.state.data}>
                    <IgrCategoryXAxis
                        name="xAxis"
                        label="Label"/>
                    <IgrNumericYAxis
                        name="yAxis"
                        title="Amount (in USD)"
                        titleRightMargin={10}
                        labelRightMargin={10}
                        labelHorizontalAlignment="Left"
                        labelLocation="OutsideRight"/>
                    <IgrFinancialPriceSeries
                        name="series1"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        displayType="Candlestick"
                        openMemberPath="Open"
                        closeMemberPath="Close"
                        highMemberPath="High"
                        lowMemberPath="Low"
                        volumeMemberPath="Volume"
                        showDefaultTooltip={true}
                        isTransitionInEnabled={true}
                        title="Price"/>
                </IgrDataChart>
            </div>
        );
    }

    public onChartRef(chart: IgrDataChart) {
        if (!chart) { return; }

        this.chart = chart;
        this.chart.actualWindowScaleHorizontal = 0.60;
        this.chart.actualWindowScaleVertical = 0.60;
        this.chart.actualWindowPositionVertical = 0.20;
        this.chart.actualWindowPositionHorizontal = 0.20;
    }
}

// rendering above class to the React DOM
ReactDOM.render(<DataChartScrollbars />, document.getElementById('root'));
