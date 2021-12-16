import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { DataItem, Data } from './SampleData';
import { IgrPropertyEditorModule } from 'igniteui-react-grids';
import { IgrLegendModule, IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrLegend, IgrCategoryChart } from 'igniteui-react-charts';
import { IgrPropertyEditor, IgrPropertyEditorPropertyDescription } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorDescriptionModule, LegendDescriptionModule, CategoryChartDescriptionModule } from 'igniteui-react-core';

const mods: any[] = [
    IgrPropertyEditorModule,
    IgrLegendModule,
    IgrCategoryChartModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrLegend
    private legendRef(r: IgrLegend) {
        this.legend = r;
        this.setState({});
    }
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

        this.legendRef = this.legendRef.bind(this);
        this.propertyEditorRef = this.propertyEditorRef.bind(this);
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
                        propertyPath="YAxisStroke"
                        label="Y Axis Stroke"
                        valueType="EnumValue"
                        shouldOverrideDefaultEditor="true"
                        dropDownNames={["gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen"]}
                        dropDownValues={["gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen"]}
                        primitiveValue="gray"
                        name="propertyEditorPropertyDescription1"
                    >
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        dropDownValues={["gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen"]}
                        primitiveValue="darkslategray"
                        propertyPath="YAxisMajorStroke"
                        label="Y Axis Major Stroke"
                        valueType="EnumValue"
                        shouldOverrideDefaultEditor="true"
                        dropDownNames={["gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen"]}
                        name="propertyEditorPropertyDescription2"
                    >
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        dropDownValues={["gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen"]}
                        primitiveValue="gray"
                        propertyPath="YAxisMinorStroke"
                        label="Y Axis Minor Stroke"
                        valueType="EnumValue"
                        shouldOverrideDefaultEditor="true"
                        dropDownNames={["gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen"]}
                        name="propertyEditorPropertyDescription3"
                    >
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditor>
            </div>
            <div className="legend-title">
                Renewable Electricity Generated
            </div>
            <div className="legend">
                <IgrLegend
                    orientation="Horizontal"
                    ref={this.legendRef}>
                </IgrLegend>
            </div>
            <div className="container fill">
                <IgrCategoryChart
                    chartType="Line"
                    xAxisInterval="1"
                    yAxisInterval="20"
                    yAxisMinorInterval="5"
                    xAxisMajorStroke="rgba(71, 71, 71, 1)"
                    yAxisMajorStroke="darkslategray"
                    xAxisMajorStrokeThickness="0.5"
                    yAxisMajorStrokeThickness="1"
                    yAxisMinorStrokeThickness="0.5"
                    xAxisStroke="rgba(145, 145, 145, 1)"
                    yAxisStroke="gray"
                    xAxisStrokeThickness="2"
                    yAxisStrokeThickness="2"
                    yAxisMinorStroke="gray"
                    dataSource={this.data}
                    legend={this.legend}
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    thickness="2"
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
            LegendDescriptionModule.register(context);
            CategoryChartDescriptionModule.register(context);
        }
        return this._componentRenderer
    }

}
// rendering above component in the React DOM
ReactDOM.render(<Sample />, document.getElementById('root'));
