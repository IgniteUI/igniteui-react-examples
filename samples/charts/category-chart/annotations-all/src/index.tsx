import React from 'react';
import ReactDOM from 'react-dom';
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
                    componentRenderer={this.renderer}
                    target={this.chart}
                    descriptionType="CategoryChart"
                    isHorizontal="true"
                    isWrappingEnabled="true"
                    ref={this.propertyEditorRef}>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="CrosshairsDisplayMode"
                        label="Crosshairs:"
                        primitiveValue="Both"
                        name="CrosshairsDisplayModeEditor">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="HighlightingMode"
                        label="Highlighting:"
                        primitiveValue="BrightenSpecific"
                        name="HighlightingModeEditor">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="CalloutsVisible"
                        label="Callouts:"
                        shouldOverrideDefaultEditor="true"
                        primitiveValue="True"
                        name="CalloutsVisibleEditor">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="FinalValueAnnotationsVisible"
                        label="Final Value:"
                        shouldOverrideDefaultEditor="true"
                        primitiveValue="True"
                        name="FinalValueAnnotationsEditor">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="legend-title">
                Average Temperature in Sedney
            </div>


            <div className="container fill">
                <IgrCategoryChart
                    chartType="Column"
                    yAxisMaximumValue="35"
                    isCategoryHighlightingEnabled="true"
                    yAxisLabelLocation="OutsideRight"
                    dataSource={this.temperatureAnnotatedData}
                    includedProperties={["month", "temperature"]}
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    computedPlotAreaMarginMode="Series"
                    highlightingMode="BrightenSpecific"
                    highlightingBehavior="NearestItemsAndSeries"
                    crosshairsDisplayMode="Both"
                    crosshairsAnnotationXAxisBackground="black"
                    crosshairsAnnotationYAxisPrecision="0"
                    finalValueAnnotationsVisible="true"
                    finalValueAnnotationsBackground="dodgerblue"
                    finalValueAnnotationsTextColor="white"
                    finalValueAnnotationsPrecision="0"
                    calloutsVisible="true"
                    calloutsDataSource={this.temperatureAnnotatedData}
                    calloutsXMemberPath="index"
                    calloutsYMemberPath="temperature"
                    calloutsLabelMemberPath="tempInfo"
                    ref={this.chartRef}>
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
ReactDOM.render(<Sample />, document.getElementById('root'));
