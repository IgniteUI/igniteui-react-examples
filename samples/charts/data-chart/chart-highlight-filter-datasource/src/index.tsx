import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrColumnSeries } from 'igniteui-react-charts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, DataChartCoreDescriptionModule, DataChartCategoryDescriptionModule, DataChartInteractivityDescriptionModule } from 'igniteui-react-core';
import { OnlineTrafficHighlightTotalsItem, OnlineTrafficHighlightTotals } from './OnlineTrafficHighlightTotals';
import { OnlineTrafficHighlightDesktopOnlyItem, OnlineTrafficHighlightDesktopOnly } from './OnlineTrafficHighlightDesktopOnly';

import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartInteractivityModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditor: IgrPropertyEditorPanel
    private propertyEditorRef(r: IgrPropertyEditorPanel) {
        this.propertyEditor = r;
        this.setState({});
    }
    private highlightedValuesDisplayModeEditor: IgrPropertyEditorPropertyDescription
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private xAxis: IgrCategoryXAxis
    private yAxis: IgrNumericYAxis
    private columnSeries1: IgrColumnSeries

    constructor(props: any) {
        super(props);

        this.propertyEditorRef = this.propertyEditorRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    ref={this.propertyEditorRef}
                    componentRenderer={this.renderer}
                    target={this.chart}
                    descriptionType="DataChart"
                    isHorizontal="true"
                    isWrappingEnabled="true">
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="HighlightedValuesDisplayMode"
                        name="HighlightedValuesDisplayModeEditor"
                        label="Highlight Display Mode: "
                        primitiveValue="Hidden">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrDataChart
                    shouldAutoExpandMarginForInitialLabels="true"
                    computedPlotAreaMarginMode="Series"
                    highlightedValuesDisplayMode="Hidden"
                    ref={this.chartRef}>
                    <IgrCategoryXAxis
                        name="xAxis"
                        dataSource={this.onlineTrafficHighlightTotals}
                        label="category">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        minimumValue="0"
                        maximumValue="100">
                    </IgrNumericYAxis>
                    <IgrColumnSeries
                        name="ColumnSeries1"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.onlineTrafficHighlightTotals}
                        valueMemberPath="value"
                        highlightedDataSource={this.onlineTrafficHighlightDesktopOnly}>
                    </IgrColumnSeries>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _onlineTrafficHighlightTotals: OnlineTrafficHighlightTotals = null;
    public get onlineTrafficHighlightTotals(): OnlineTrafficHighlightTotals {
        if (this._onlineTrafficHighlightTotals == null)
        {
            this._onlineTrafficHighlightTotals = new OnlineTrafficHighlightTotals();
        }
        return this._onlineTrafficHighlightTotals;
    }

    private _onlineTrafficHighlightDesktopOnly: OnlineTrafficHighlightDesktopOnly = null;
    public get onlineTrafficHighlightDesktopOnly(): OnlineTrafficHighlightDesktopOnly {
        if (this._onlineTrafficHighlightDesktopOnly == null)
        {
            this._onlineTrafficHighlightDesktopOnly = new OnlineTrafficHighlightDesktopOnly();
        }
        return this._onlineTrafficHighlightDesktopOnly;
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
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);