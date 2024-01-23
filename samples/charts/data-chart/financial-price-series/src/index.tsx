import React from 'react';
import ReactDOM from 'react-dom/client';
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

    public componentDidMount() {
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}
                    shouldAutoExpandMarginForInitialLabels="true"
                    computedPlotAreaMarginMode="Series"
                    isVerticalZoomEnabled="true"
                    isHorizontalZoomEnabled="true">
                    <IgrCategoryXAxis
                        name="xAxis"
                        dataSource={this.stock2Years}
                        labelLocation="OutsideBottom"
                        label="month"
                        interval="1"
                        labelExtent="30">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        labelLocation="OutsideRight">
                    </IgrNumericYAxis>
                    <IgrFinancialPriceSeries
                        name="Series1"
                        title="Stock Price"
                        displayType="Candlestick"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.stock2Years}
                        openMemberPath="open"
                        highMemberPath="high"
                        lowMemberPath="low"
                        closeMemberPath="close"
                        volumeMemberPath="volume"
                        showDefaultTooltip="true">
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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);