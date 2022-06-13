import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrDataChartCategoryModule, IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrPropertyEditorPanel } from 'igniteui-react-layouts';
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrColumnSeries } from 'igniteui-react-charts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, DataChartCategoryDescriptionModule, DataChartInteractivityDescriptionModule } from 'igniteui-react-core';
import { TemperatureAverageDataLongLabelsItem, TemperatureAverageDataLongLabels } from './TemperatureAverageDataLongLabels';

import 'igniteui-webcomponents/themes/light/bootstrap.css';
import { defineAllComponents } from 'igniteui-webcomponents';
defineAllComponents();
const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrDataChartCategoryModule,
    IgrDataChartInteractivityModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditorPanel1: IgrPropertyEditorPanel
    private propertyEditorPanel1Ref(r: IgrPropertyEditorPanel) {
        this.propertyEditorPanel1 = r;
        this.setState({});
    }
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private xAxis: IgrCategoryXAxis
    private yAxis: IgrNumericYAxis
    private colSeries1: IgrColumnSeries

    constructor(props: any) {
        super(props);

        this.propertyEditorPanel1Ref = this.propertyEditorPanel1Ref.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
            <div className="options horizontal">
                <IgrPropertyEditorPanel
                    componentRenderer={this.renderer}
                    target={this.chart}
                    descriptionType="DataChart"
                    isHorizontal="true"
                    isWrappingEnabled="true"
                    ref={this.propertyEditorPanel1Ref}>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="ShouldConsiderAutoRotationForInitialLabels"
                        label="Rotate Labels?"
                        shouldOverrideDefaultEditor="true"
                        primitiveValue="True">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        dropDownValues={["None", "SizeChanging", "SizeChangingAndZoom"]}
                        primitiveValue="SizeChangingAndZoom"
                        propertyPath="autoMarginAndAngleUpdateMode"
                        label="AutoMarginAndAngleUpdateMode:"
                        valueType="EnumValue"
                        shouldOverrideDefaultEditor="true"
                        dropDownNames={["None", "SizeChanging", "SizeChangingAndZoom"]}>
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>
            
            
            <div className="container fill">
                <IgrDataChart
                    isHorizontalZoomEnabled="true"
                    isVerticalZoomEnabled="true"
                    shouldAutoExpandMarginForInitialLabels="true"
                    shouldConsiderAutoRotationForInitialLabels="true"
                    autoMarginAndAngleUpdateMode="SizeChangingAndZoom"
                    ref={this.chartRef}>
                    <IgrCategoryXAxis
                        dataSource={this.temperatureAverageDataLongLabels}
                        useEnhancedIntervalManagement="true"
                        enhancedIntervalPreferMoreCategoryLabels="true"
                        label="month"
                        name="xAxis">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxis">
                    </IgrNumericYAxis>
                    <IgrColumnSeries
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        valueMemberPath="temperature"
                        dataSource={this.temperatureAverageDataLongLabels}
                        name="colSeries1">
                    </IgrColumnSeries>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _temperatureAverageDataLongLabels: TemperatureAverageDataLongLabels = null;
    public get temperatureAverageDataLongLabels(): TemperatureAverageDataLongLabels {
        if (this._temperatureAverageDataLongLabels == null)
        {
            this._temperatureAverageDataLongLabels = new TemperatureAverageDataLongLabels();
        }
        return this._temperatureAverageDataLongLabels;
    }
    

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            DataChartCategoryDescriptionModule.register(context);
            DataChartInteractivityDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}


// rendering above component in the React DOM
ReactDOM.render(<Sample />, document.getElementById('root'));
