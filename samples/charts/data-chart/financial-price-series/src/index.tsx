import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartCategoryCoreModule, IgrDataChartFinancialCoreModule, IgrDataChartFinancialModule, IgrDataChartFinancialOverlaysModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule } from 'igniteui-react-charts';
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrFinancialPriceSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
import { Stock2YearsItem, Stock2Years } from './Stock2Years';



const mods: any[] = [
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartCategoryCoreModule,
    IgrDataChartFinancialCoreModule,
    IgrDataChartFinancialModule,
    IgrDataChartFinancialOverlaysModule,
    IgrDataChartInteractivityModule,
    IgrDataChartAnnotationModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private xAxis: IgrCategoryXAxis
    private yAxis: IgrNumericYAxis
    private series1: IgrFinancialPriceSeries
    private tooltip: IgrDataToolTipLayer

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
            
            
            
            <div className="container fill">
                <IgrDataChart
                    isHorizontalZoomEnabled="true"
                    isVerticalZoomEnabled="true"
                    shouldAutoExpandMarginForInitialLabels="true"
                    computedPlotAreaMarginMode="Series"
                    ref={this.chartRef}>
                    <IgrCategoryXAxis
                        interval="1"
                        dataSource={this.stock2Years}
                        labelLocation="OutsideBottom"
                        labelExtent="30"
                        label="month"
                        name="xAxis">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        labelLocation="OutsideRight"
                        name="yAxis">
                    </IgrNumericYAxis>
                    <IgrFinancialPriceSeries
                        displayType="Candlestick"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        openMemberPath="open"
                        highMemberPath="high"
                        lowMemberPath="low"
                        closeMemberPath="close"
                        volumeMemberPath="volume"
                        dataSource={this.stock2Years}
                        showDefaultTooltip="true"
                        title="Stock Price"
                        name="Series1">
                    </IgrFinancialPriceSeries>
                    <IgrDataToolTipLayer
                        name="Tooltip">
                    </IgrDataToolTipLayer>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _stock2Years: Stock2Years = null;
    public get stock2Years(): Stock2Years {
        if (this._stock2Years == null)
        {
            this._stock2Years = new Stock2Years();
        }
        return this._stock2Years;
    }
    


}


// rendering above component in the React DOM
ReactDOM.render(<Sample />, document.getElementById('root'));
