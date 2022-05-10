import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { DataItem, Data } from './SampleData';
import { IgrPropertyEditorModule } from 'igniteui-react-grids';
import { IgrCategoryChartModule, IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrPropertyEditor, IgrPropertyEditorPropertyDescription } from 'igniteui-react-grids';
import { IgrCategoryChart } from 'igniteui-react-charts';
import { ComponentRenderer, PropertyEditorDescriptionModule, CategoryChartDescriptionModule, DataChartInteractivityDescriptionModule } from 'igniteui-react-core';
import { IgrPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-react-grids';
import { MarkerType, MarkerType_$type } from 'igniteui-react-charts';
import { EnumUtil } from 'igniteui-react-core';

const mods: any[] = [
    IgrPropertyEditorModule,
    IgrCategoryChartModule,
    IgrDataChartInteractivityModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditor: IgrPropertyEditor
    private propertyEditorRef(r: IgrPropertyEditor) {
        this.propertyEditor = r;
        this.setState({});
    }
    private propertyEditorPropertyDescription: IgrPropertyEditorPropertyDescription
    private chart: IgrCategoryChart
    private chartRef(r: IgrCategoryChart) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.propertyEditorRef = this.propertyEditorRef.bind(this);
        this.editorChangeUpdateMarkerType = this.editorChangeUpdateMarkerType.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
            <div className="options vertical">
                <IgrPropertyEditor
                    componentRenderer={this.renderer}
                    target={this.chart}
                    descriptionType="CategoryChart"
                    isHorizontal="true"
                    isWrappingEnabled="true">
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="ChartType"
                        label="Chart Type"
                        primitiveValue="Line"
                        name="propertyEditorPropertyDescription1"
                    >
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        dropDownNames={["Circle", "Automatic", "Triangle", "Pyramid", "Square", "Diamond", "Pentagon", "Hexagon", "Tetragram", "Pentagram", "Hexagram", "None"]}
                        primitiveValue="Circle"
                        changed={this.editorChangeUpdateMarkerType}
                        propertyPath="MarkerTypeHandler"
                        label="Marker Type"
                        valueType="EnumValue"
                        shouldOverrideDefaultEditor="true"
                        dropDownValues={["Circle", "Automatic", "Triangle", "Pyramid", "Square", "Diamond", "Pentagon", "Hexagon", "Tetragram", "Pentagram", "Hexagram", "None"]}
                        name="propertyEditorPropertyDescription2"
                    >
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditor>
            </div>
            <div className="legend-title">
                Renewable Electricity Generated
            </div>
            
            <div className="container fill">
                <IgrCategoryChart
                    chartType="Line"
                    dataSource={this.data}
                    isSeriesHighlightingEnabled="true"
                    computedPlotAreaMarginMode="Series"
                    ref={this.chartRef}>
                </IgrCategoryChart>
            </div>
        </div>
        );
    }

    private _data: Data = null;
    public get data(): Data {
        if (this._data == null)
        {
            this._data = new Data();
        }
        return this._data;
    }
    

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorDescriptionModule.register(context);
            CategoryChartDescriptionModule.register(context);
            DataChartInteractivityDescriptionModule.register(context);
        }
        return this._componentRenderer
    }

    
    public editorChangeUpdateMarkerType(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var item = sender as IgrPropertyEditorPropertyDescription;
        var chart = this.chart;
            
        var markerVal = item.primitiveValue;
        chart.markerTypes = markerVal;   
    }
        
}
// rendering above component in the React DOM
ReactDOM.render(<Sample />, document.getElementById('root'));
