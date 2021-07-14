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
                        propertyPath="YAxisMinimumValue"
                        label="Y Axis Minimum Value"
                        valueType="EnumValue"
                        shouldOverrideDefaultEditor="true"
                        dropDownNames={["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"]}
                        dropDownValues={["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"]}
                        primitiveValue="0"
                        name="propertyEditorPropertyDescription1"
                    >
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        dropDownValues={["100", "110", "120", "130", "140", "150", "160", "170", "180", "190", "200"]}
                        primitiveValue="150"
                        propertyPath="YAxisMaximumValue"
                        label="Y Axis Maximum Value"
                        valueType="EnumValue"
                        shouldOverrideDefaultEditor="true"
                        dropDownNames={["100", "110", "120", "130", "140", "150", "160", "170", "180", "190", "200"]}
                        name="propertyEditorPropertyDescription2"
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
                    chartType="Line"
                    yAxisMinimumValue="0"
                    yAxisMaximumValue="150"
                    dataSource={this.data}
                    legend={this.legend}
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
            let context = this._componentRenderer.context;
            PropertyEditorDescriptionModule.register(context);
            LegendDescriptionModule.register(context);
            CategoryChartDescriptionModule.register(context);
        }
        return this._componentRenderer
    }

}
// rendering above component in the React DOM
ReactDOM.render(<Sample />, document.getElementById('root'));
