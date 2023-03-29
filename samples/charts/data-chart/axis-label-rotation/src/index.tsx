import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrDataChartCategoryModule, IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
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
    private shouldConsiderAutoRotationForInitialLabels: IgrPropertyEditorPropertyDescription
    private autoMarginAndAngleUpdateMode: IgrPropertyEditorPropertyDescription
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
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    componentRenderer={this.renderer}
                    target={this.chart}
                    descriptionType="DataChart"
                    isHorizontal="true"
                    isWrappingEnabled="true"
                    ref={this.propertyEditorPanel1Ref}>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="ShouldConsiderAutoRotationForInitialLabels"
                        name="ShouldConsiderAutoRotationForInitialLabels"
                        label="Rotate Labels?"
                        shouldOverrideDefaultEditor="true"
                        primitiveValue="True">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="AutoMarginAndAngleUpdateMode"
                        name="AutoMarginAndAngleUpdateMode"
                        label="AutoMarginAndAngleUpdateMode: "
                        shouldOverrideDefaultEditor="true"
                        valueType="EnumValue"
                        dropDownNames={["None", "SizeChanging", "SizeChangingAndZoom"]}
                        dropDownValues={["None", "SizeChanging", "SizeChangingAndZoom"]}
                        primitiveValue="SizeChangingAndZoom">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}
                    isHorizontalZoomEnabled="true"
                    isVerticalZoomEnabled="true"
                    autoMarginAndAngleUpdateMode="SizeChangingAndZoom"
                    shouldConsiderAutoRotationForInitialLabels="true"
                    shouldAutoExpandMarginForInitialLabels="true">
                    <IgrCategoryXAxis
                        name="xAxis"
                        dataSource={this.temperatureAverageDataLongLabels}
                        enhancedIntervalPreferMoreCategoryLabels="true"
                        useEnhancedIntervalManagement="true"
                        label="month">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxis">
                    </IgrNumericYAxis>
                    <IgrColumnSeries
                        name="colSeries1"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.temperatureAverageDataLongLabels}
                        valueMemberPath="temperature">
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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);