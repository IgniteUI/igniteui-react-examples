import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrDataChartCoreModule, IgrDataChartCategoryCoreModule, IgrDataChartCategoryModule, IgrDataChartAnnotationModule, IgrDataChartInteractivityModule, IgrDataChartVerticalCategoryModule } from 'igniteui-react-charts';
import { IgrDataChart, IgrCategoryYAxis, IgrNumericXAxis, IgrCategoryHighlightLayer, IgrBarSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
import { OnlineShoppingSearchesItem, OnlineShoppingSearches } from './OnlineShoppingSearches';

const mods: any[] = [
    IgrDataChartCoreModule,
    IgrDataChartCategoryCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartAnnotationModule,
    IgrDataChartInteractivityModule,
    IgrDataChartVerticalCategoryModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private yAxis: IgrCategoryYAxis
    private xAxis: IgrNumericXAxis
    private categoryHighlightLayer: IgrCategoryHighlightLayer
    private barSeries1: IgrBarSeries
    private tooltips: IgrDataToolTipLayer

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Where Online Shoppers Start Their Search
            </div>

            <div className="container fill">
                <IgrDataChart
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    ref={this.chartRef}>
                    <IgrCategoryYAxis
                        dataSource={this.onlineShoppingSearches}
                        gap="0.5"
                        overlap="-0.1"
                        isInverted="true"
                        useEnhancedIntervalManagement="true"
                        enhancedIntervalPreferMoreCategoryLabels="true"
                        label="shop"
                        name="yAxis">
                    </IgrCategoryYAxis>
                    <IgrNumericXAxis
                        labelFormat="{0}%"
                        name="xAxis">
                    </IgrNumericXAxis>
                    <IgrCategoryHighlightLayer
                        name="CategoryHighlightLayer">
                    </IgrCategoryHighlightLayer>
                    <IgrBarSeries
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        valueMemberPath="percent"
                        isTransitionInEnabled="true"
                        dataSource={this.onlineShoppingSearches}
                        isHighlightingEnabled="true"
                        showDefaultTooltip="true"
                        name="BarSeries1">
                    </IgrBarSeries>
                    <IgrDataToolTipLayer
                        name="Tooltips">
                    </IgrDataToolTipLayer>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _onlineShoppingSearches: OnlineShoppingSearches = null;
    public get onlineShoppingSearches(): OnlineShoppingSearches {
        if (this._onlineShoppingSearches == null)
        {
            this._onlineShoppingSearches = new OnlineShoppingSearches();
        }
        return this._onlineShoppingSearches;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);