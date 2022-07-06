import React from 'react';
import ReactDOM from 'react-dom';
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
                    orientation="Horizontal"
                    ref={this.legendRef}>
                </IgrLegend>
            </div>

            <div className="container fill">
                <IgrDataChart
                    legend={this.legend}
                    ref={this.chartRef}>
                    <IgrCategoryYAxis
                        dataSource={this.roadblocksToSuccess}
                        gap="0.25"
                        labelExtent="0"
                        label="category"
                        name="yAxis1">
                    </IgrCategoryYAxis>
                    <IgrCategoryYAxis
                        label="category"
                        dataSource={this.roadblocksToSuccess}
                        gap="1"
                        labelHorizontalAlignment="Right"
                        name="yAxis2">
                    </IgrCategoryYAxis>
                    <IgrNumericXAxis
                        minimumValue="0"
                        maximumValue="50"
                        stroke="gray"
                        strokeThickness="2"
                        tickLength="5"
                        useEnhancedIntervalManagement="true"
                        labelFormat="{0}%"
                        name="xAxis">
                    </IgrNumericXAxis>
                    <IgrCategoryHighlightLayer
                        name="CategoryHighlightLayer">
                    </IgrCategoryHighlightLayer>
                    <IgrBarSeries
                        xAxisName="xAxis"
                        yAxisName="yAxis1"
                        valueMemberPath="topChoices"
                        isTransitionInEnabled="true"
                        dataSource={this.roadblocksToSuccess}
                        isHighlightingEnabled="true"
                        showDefaultTooltip="true"
                        title="Sum of Top 3 Choices"
                        name="BarSeries1">
                    </IgrBarSeries>
                    <IgrBarSeries
                        xAxisName="xAxis"
                        yAxisName="yAxis2"
                        title="Top Choice"
                        valueMemberPath="firstChoice"
                        dataSource={this.roadblocksToSuccess}
                        showDefaultTooltip="true"
                        isTransitionInEnabled="true"
                        isHighlightingEnabled="true"
                        name="BarSeries2">
                    </IgrBarSeries>
                    <IgrCalloutLayer
                        labelMemberPath="firstChoiceLabel"
                        xMemberPath="firstChoice"
                        yMemberPath="index"
                        calloutTextColor="black"
                        calloutBackground="rgba(0, 0, 0, 0)"
                        calloutOutline="rgba(0, 0, 0, 0)"
                        calloutLeaderBrush="rgba(0, 0, 0, 0)"
                        calloutPaddingTop="0"
                        calloutPositionPadding="0"
                        calloutStrokeThickness="2"
                        dataSource={this.roadblocksToSuccess}
                        name="CalloutLayer1">
                    </IgrCalloutLayer>
                    <IgrCalloutLayer
                        dataSource={this.roadblocksToSuccess}
                        yMemberPath="index"
                        xMemberPath="topChoices"
                        labelMemberPath="topChoicesLabel"
                        calloutLeaderBrush="rgba(0, 0, 0, 0)"
                        calloutOutline="rgba(0, 0, 0, 0)"
                        calloutBackground="rgba(0, 0, 0, 0)"
                        calloutTextColor="black"
                        calloutStrokeThickness="2"
                        calloutPaddingTop="0"
                        calloutPositionPadding="0"
                        name="CalloutLayer2">
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
ReactDOM.render(<Sample />, document.getElementById('root'));
