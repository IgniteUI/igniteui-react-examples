import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule } from 'igniteui-react-charts';
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrColumnSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, DataChartCoreDescriptionModule, DataChartCategoryDescriptionModule, DataChartInteractivityDescriptionModule, DataChartAnnotationDescriptionModule } from 'igniteui-react-core';
import { OlympicMedalsTopCountriesWithTotalsItem, OlympicMedalsTopCountriesWithTotals } from './OlympicMedalsTopCountriesWithTotals';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
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
    private columnSeries1: IgrColumnSeries
    private columnSeries2: IgrColumnSeries
    private columnSeries3: IgrColumnSeries
    private dataToolTipLayer: IgrDataToolTipLayer

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="container fill">
                <IgrDataChart
                    shouldAutoExpandMarginForInitialLabels={true}
                    computedPlotAreaMarginMode="Series"
                    ref={this.chartRef}
                    highlightedValuesDisplayMode="Overlay">
                    <IgrCategoryXAxis
                        name="xAxis"
                        dataSource={this.olympicMedalsTopCountriesWithTotals}
                        label="year">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxis">
                    </IgrNumericYAxis>
                    <IgrColumnSeries
                        name="ColumnSeries1"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.olympicMedalsTopCountriesWithTotals}
                        title="America"
                        valueMemberPath="america"
                        dataLegendGroup="Olympic Medals"
                        highlightedValuesDataLegendGroup="Gold Medals"
                        highlightedValueMemberPath="americaGold"
                        highlightedTitleSuffix="">
                    </IgrColumnSeries>
                    <IgrColumnSeries
                        name="ColumnSeries2"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.olympicMedalsTopCountriesWithTotals}
                        title="China"
                        valueMemberPath="china"
                        dataLegendGroup="Olympic Medals"
                        highlightedValuesDataLegendGroup="Gold Medals"
                        highlightedValueMemberPath="chinaGold"
                        highlightedTitleSuffix="">
                    </IgrColumnSeries>
                    <IgrColumnSeries
                        name="ColumnSeries3"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.olympicMedalsTopCountriesWithTotals}
                        title="Russia"
                        valueMemberPath="russia"
                        dataLegendGroup="Olympic Medals"
                        highlightedValuesDataLegendGroup="Gold Medals"
                        highlightedValueMemberPath="russiaGold"
                        highlightedTitleSuffix="">
                    </IgrColumnSeries>
                    <IgrDataToolTipLayer
                        name="dataToolTipLayer"
                        groupRowVisible={true}
                        groupingMode="Grouped">
                    </IgrDataToolTipLayer>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _olympicMedalsTopCountriesWithTotals: OlympicMedalsTopCountriesWithTotals = null;
    public get olympicMedalsTopCountriesWithTotals(): OlympicMedalsTopCountriesWithTotals {
        if (this._olympicMedalsTopCountriesWithTotals == null)
        {
            this._olympicMedalsTopCountriesWithTotals = new OlympicMedalsTopCountriesWithTotals();
        }
        return this._olympicMedalsTopCountriesWithTotals;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            DataChartCoreDescriptionModule.register(context);
            DataChartCategoryDescriptionModule.register(context);
            DataChartInteractivityDescriptionModule.register(context);
            DataChartAnnotationDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);