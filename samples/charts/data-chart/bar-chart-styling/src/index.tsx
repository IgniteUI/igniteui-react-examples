import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartCategoryCoreModule, IgrDataChartInteractivityModule, IgrDataChartVerticalCategoryModule, IgrAnnotationLayerProxyModule, IgrCalloutLayerModule, IgrDataChartAnnotationModule } from 'igniteui-react-charts';
import { IgrDataChart, IgrCategoryYAxis, IgrNumericXAxis, IgrCategoryHighlightLayer, IgrBarSeries, IgrCalloutLayer, IgrDataToolTipLayer } from 'igniteui-react-charts';
import { OnlineShoppingSearchesItem, OnlineShoppingSearches } from './OnlineShoppingSearches';

const mods: any[] = [
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartCategoryCoreModule,
    IgrDataChartInteractivityModule,
    IgrDataChartVerticalCategoryModule,
    IgrAnnotationLayerProxyModule,
    IgrCalloutLayerModule,
    IgrDataChartAnnotationModule
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
    private calloutLayer1: IgrCalloutLayer
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
                        gap="0.75"
                        isInverted="true"
                        label="shop"
                        name="yAxis">
                    </IgrCategoryYAxis>
                    <IgrNumericXAxis
                        minimumValue="0"
                        maximumValue="80"
                        interval="20"
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
                        brush="rgba(134, 6, 138, 0.654901960784314)"
                        outline="rgba(133, 6, 138, 1)"
                        thickness="2"
                        isHighlightingEnabled="true"
                        areaFillOpacity="0.5"
                        showDefaultTooltip="true"
                        name="BarSeries1">
                    </IgrBarSeries>
                    <IgrCalloutLayer
                        labelMemberPath="label"
                        xMemberPath="x"
                        yMemberPath="y"
                        contentMemberPath="label"
                        calloutTextColor="rgba(133, 6, 138, 1)"
                        calloutBackground="rgba(0, 0, 0, 0)"
                        calloutLeaderBrush="rgba(0, 0, 0, 0)"
                        dataSource={this.onlineShoppingSearches}
                        name="CalloutLayer1">
                    </IgrCalloutLayer>
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