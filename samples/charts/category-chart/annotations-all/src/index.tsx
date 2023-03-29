import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrCategoryChart } from 'igniteui-react-charts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, CategoryChartDescriptionModule } from 'igniteui-react-core';
import { TemperatureAnnotatedDataItem, TemperatureAnnotatedData } from './TemperatureAnnotatedData';

import 'igniteui-webcomponents/themes/light/bootstrap.css';
import { defineAllComponents } from 'igniteui-webcomponents';

defineAllComponents();

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrCategoryChartModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditor: IgrPropertyEditorPanel
    private propertyEditorRef(r: IgrPropertyEditorPanel) {
        this.propertyEditor = r;
        this.setState({});
    }
    private crosshairsDisplayModeEditor: IgrPropertyEditorPropertyDescription
    private highlightingModeEditor: IgrPropertyEditorPropertyDescription
    private calloutsVisibleEditor: IgrPropertyEditorPropertyDescription
    private finalValueAnnotationsEditor: IgrPropertyEditorPropertyDescription
    private chart: IgrCategoryChart
    private chartRef(r: IgrCategoryChart) {
        this.chart = r;
        this.setState({});
    }

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
                    descriptionType="CategoryChart"
                    isHorizontal="true"
                    isWrappingEnabled="true">
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="CrosshairsDisplayMode"
                        name="CrosshairsDisplayModeEditor"
                        label="Crosshairs: "
                        primitiveValue="Both">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="HighlightingMode"
                        name="HighlightingModeEditor"
                        label="Highlighting: "
                        primitiveValue="BrightenSpecific">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="CalloutsVisible"
                        name="CalloutsVisibleEditor"
                        label="Callouts: "
                        shouldOverrideDefaultEditor="true"
                        primitiveValue="True">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="FinalValueAnnotationsVisible"
                        name="FinalValueAnnotationsEditor"
                        label="Final Value: "
                        shouldOverrideDefaultEditor="true"
                        primitiveValue="True">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="legend-title">
                Average Temperature in Sydney
            </div>

            <div className="container fill">
                <IgrCategoryChart
                    ref={this.chartRef}
                    chartType="Column"
                    computedPlotAreaMarginMode="Series"
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    includedProperties={["month", "temperature"]}
                    dataSource={this.temperatureAnnotatedData}
                    calloutsDataSource={this.temperatureAnnotatedData}
                    calloutsVisible="true"
                    calloutsXMemberPath="index"
                    calloutsYMemberPath="temperature"
                    calloutsLabelMemberPath="tempInfo"
                    isCategoryHighlightingEnabled="true"
                    highlightingMode="BrightenSpecific"
                    highlightingBehavior="NearestItemsAndSeries"
                    crosshairsDisplayMode="Both"
                    crosshairsAnnotationYAxisPrecision="0"
                    crosshairsAnnotationXAxisBackground="black"
                    finalValueAnnotationsVisible="true"
                    finalValueAnnotationsBackground="dodgerblue"
                    finalValueAnnotationsTextColor="white"
                    finalValueAnnotationsPrecision="0"
                    yAxisMaximumValue="35"
                    yAxisLabelLocation="OutsideRight">
                </IgrCategoryChart>
            </div>
        </div>
        );
    }

    private _temperatureAnnotatedData: TemperatureAnnotatedData = null;
    public get temperatureAnnotatedData(): TemperatureAnnotatedData {
        if (this._temperatureAnnotatedData == null)
        {
            this._temperatureAnnotatedData = new TemperatureAnnotatedData();
        }
        return this._temperatureAnnotatedData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            CategoryChartDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);