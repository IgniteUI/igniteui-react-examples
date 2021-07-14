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
                        propertyPath="XAxisLabelAngle"
                        label="X Axis Label Angle"
                        valueType="EnumValue"
                        shouldOverrideDefaultEditor="true"
                        dropDownNames={["0", "45", "90", "135", "180", "225", "270"]}
                        dropDownValues={["0", "45", "90", "135", "180", "225", "270"]}
                        primitiveValue="0"
                        name="propertyEditorPropertyDescription1"
                    >
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        dropDownValues={["-90", "-45", "0", "45", "90"]}
                        primitiveValue="0"
                        propertyPath="YAxisLabelAngle"
                        label="Y Axis Label Angle"
                        valueType="EnumValue"
                        shouldOverrideDefaultEditor="true"
                        dropDownNames={["-90", "-45", "0", "45", "90"]}
                        name="propertyEditorPropertyDescription2"
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
                    xAxisLabelTopMargin="5"
                    yAxisLabelRightMargin="5"
                    xAxisLabelTextColor="gray"
                    yAxisLabelTextColor="gray"
                    xAxisLabelTextStyle="10pt 'Titillium Web'"
                    yAxisLabelTextStyle="10pt 'Titillium Web'"
                    xAxisLabelAngle="0"
                    yAxisLabelAngle="0"
                    yAxisLabelLocation="OutsideRight"
                    titleTopMargin="10"
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
