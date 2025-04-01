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
                    ref={this.chartRef}
                    isHorizontalZoomEnabled={false}
                    isVerticalZoomEnabled={false}>
                    <IgrCategoryYAxis
                        name="yAxis"
                        label="shop"
                        useEnhancedIntervalManagement={true}
                        enhancedIntervalPreferMoreCategoryLabels={true}
                        dataSource={this.onlineShoppingSearches}
                        isInverted={true}
                        gap={0.5}
                        overlap={-0.1}>
                    </IgrCategoryYAxis>
                    <IgrNumericXAxis
                        name="xAxis"
                        labelFormat="{0}%">
                    </IgrNumericXAxis>
                    <IgrCategoryHighlightLayer
                        name="CategoryHighlightLayer">
                    </IgrCategoryHighlightLayer>
                    <IgrBarSeries
                        name="BarSeries1"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        valueMemberPath="percent"
                        dataSource={this.onlineShoppingSearches}
                        showDefaultTooltip={true}
                        isTransitionInEnabled={true}
                        isHighlightingEnabled={true}>
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