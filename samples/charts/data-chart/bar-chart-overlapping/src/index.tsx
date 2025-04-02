import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrLegendModule, IgrDataChartAnnotationModule, IgrDataChartCoreModule, IgrDataChartCategoryCoreModule, IgrDataChartCategoryModule, IgrDataChartInteractivityModule, IgrDataChartVerticalCategoryModule } from 'igniteui-react-charts';
import { IgrLegend, IgrDataChart, IgrCategoryYAxis, IgrNumericXAxis, IgrCategoryHighlightLayer, IgrBarSeries, IgrCalloutLayer, IgrDataToolTipLayer } from 'igniteui-react-charts';
import { RoadblocksToSuccessItem, RoadblocksToSuccess } from './RoadblocksToSuccess';

const mods: any[] = [
    IgrLegendModule,
    IgrDataChartAnnotationModule,
    IgrDataChartCoreModule,
    IgrDataChartCategoryCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartInteractivityModule,
    IgrDataChartVerticalCategoryModule,
    IgrDataChartAnnotationModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrLegend
    private legendRef(r: IgrLegend) {
        this.legend = r;
        this.setState({});
    }
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private yAxis1: IgrCategoryYAxis
    private yAxis2: IgrCategoryYAxis
    private xAxis: IgrNumericXAxis
    private categoryHighlightLayer: IgrCategoryHighlightLayer
    private barSeries1: IgrBarSeries
    private barSeries2: IgrBarSeries
    private calloutLayer1: IgrCalloutLayer
    private calloutLayer2: IgrCalloutLayer
    private tooltips: IgrDataToolTipLayer

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Roadblocks Critical to Success of the Data & Analytics Team
            </div>

            <div className="legend">
                <IgrLegend
                    ref={this.legendRef}
                    orientation="Horizontal">
                </IgrLegend>
            </div>

            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}
                    legend={this.legend}>
                    <IgrCategoryYAxis
                        name="yAxis1"
                        label="category"
                        dataSource={this.roadblocksToSuccess}
                        gap="0.25"
                        labelExtent="0">
                    </IgrCategoryYAxis>
                    <IgrCategoryYAxis
                        name="yAxis2"
                        label="category"
                        dataSource={this.roadblocksToSuccess}
                        gap="1"
                        labelHorizontalAlignment="Right">
                    </IgrCategoryYAxis>
                    <IgrNumericXAxis
                        name="xAxis"
                        minimumValue="0"
                        maximumValue="50"
                        useEnhancedIntervalManagement="true"
                        labelFormat="{0}%"
                        strokeThickness="2"
                        stroke="gray"
                        tickLength="5">
                    </IgrNumericXAxis>
                    <IgrCategoryHighlightLayer
                        name="CategoryHighlightLayer">
                    </IgrCategoryHighlightLayer>
                    <IgrBarSeries
                        name="BarSeries1"
                        xAxisName="xAxis"
                        yAxisName="yAxis1"
                        title="Sum of Top 3 Choices"
                        valueMemberPath="topChoices"
                        dataSource={this.roadblocksToSuccess}
                        showDefaultTooltip="true"
                        isTransitionInEnabled="true"
                        isHighlightingEnabled="true"
                        markerType="Hidden">
                    </IgrBarSeries>
                    <IgrBarSeries
                        name="BarSeries2"
                        xAxisName="xAxis"
                        yAxisName="yAxis2"
                        title="Top Choice"
                        valueMemberPath="firstChoice"
                        dataSource={this.roadblocksToSuccess}
                        showDefaultTooltip="true"
                        isTransitionInEnabled="true"
                        isHighlightingEnabled="true"
                        markerType="Hidden">
                    </IgrBarSeries>
                    <IgrCalloutLayer
                        name="CalloutLayer1"
                        isAutoCalloutBehaviorEnabled="true"
                        calloutLeaderBrush="rgba(0, 0, 0, 0)"
                        calloutOutline="rgba(0, 0, 0, 0)"
                        calloutBackground="rgba(0, 0, 0, 0)"
                        calloutTextColor="black"
                        calloutStrokeThickness="2"
                        calloutPaddingTop="0"
                        calloutPositionPadding="0">
                    </IgrCalloutLayer>
                    <IgrCalloutLayer
                        name="CalloutLayer2"
                        isAutoCalloutBehaviorEnabled="true"
                        calloutLeaderBrush="rgba(0, 0, 0, 0)"
                        calloutOutline="rgba(0, 0, 0, 0)"
                        calloutBackground="rgba(0, 0, 0, 0)"
                        calloutTextColor="black"
                        calloutStrokeThickness="2"
                        calloutPaddingTop="0"
                        calloutPositionPadding="0">
                    </IgrCalloutLayer>
                    <IgrDataToolTipLayer
                        name="Tooltips">
                    </IgrDataToolTipLayer>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _roadblocksToSuccess: RoadblocksToSuccess = null;
    public get roadblocksToSuccess(): RoadblocksToSuccess {
        if (this._roadblocksToSuccess == null)
        {
            this._roadblocksToSuccess = new RoadblocksToSuccess();
        }
        return this._roadblocksToSuccess;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);