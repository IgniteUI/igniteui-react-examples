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
                        propertyPath="XAxisOverlap"
                        label="X Axis - Overlap"
                        valueType="EnumValue"
                        shouldOverrideDefaultEditor="true"
                        dropDownNames={["1.0", "0.9", "0.8", "0.7", "0.6", "0.5", "0.4", "0.3", "0.2", "0.1", "0"]}
                        dropDownValues={["1.0", "0.9", "0.8", "0.7", "0.6", "0.5", "0.4", "0.3", "0.2", "0.1", "0"]}
                        primitiveValue="1"
                        name="propertyEditorPropertyDescription1"
                    >
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditor>
            </div>
            <div className="legend-title">
                Highest Grossing Movie Franchises
            </div>
            <div className="legend">
                <IgrLegend
                    orientation="Horizontal"
                    ref={this.legendRef}>
                </IgrLegend>
            </div>
            <div className="container fill">
                <IgrCategoryChart
                    chartType="Column"
                    xAxisInterval="1"
                    xAxisOverlap="1"
                    dataSource={this.data}
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
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
