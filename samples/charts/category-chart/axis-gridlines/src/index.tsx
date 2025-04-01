import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrLegendModule, IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrLegend, IgrCategoryChart } from 'igniteui-react-charts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, LegendDescriptionModule, CategoryChartDescriptionModule } from 'igniteui-react-core';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';

import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
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
    private propertyEditorPanel1: IgrPropertyEditorPanel
    private propertyEditorPanel1Ref(r: IgrPropertyEditorPanel) {
        this.propertyEditorPanel1 = r;
        this.setState({});
    }
    private xAxisStroke: IgrPropertyEditorPropertyDescription
    private xAxisMajorStroke: IgrPropertyEditorPropertyDescription
    private yAxisStroke: IgrPropertyEditorPropertyDescription
    private yAxisMajorStroke: IgrPropertyEditorPropertyDescription
    private yAxisMinorStroke: IgrPropertyEditorPropertyDescription
    private chart: IgrCategoryChart
    private chartRef(r: IgrCategoryChart) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
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
                    descriptionType="CategoryChart"
                    isHorizontal={true}
                    isWrappingEnabled={true}
                    ref={this.propertyEditorPanel1Ref}>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="XAxisStroke"
                        name="XAxisStroke"
                        label="X Axis Stroke"
                        shouldOverrideDefaultEditor={true}
                        valueType="EnumValue"
                        dropDownNames={["gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen"]}
                        dropDownValues={["gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen"]}
                        primitiveValue="gray">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="XAxisMajorStroke"
                        name="XAxisMajorStroke"
                        label="X Axis Major Stroke"
                        shouldOverrideDefaultEditor={true}
                        valueType="EnumValue"
                        dropDownNames={["gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen"]}
                        dropDownValues={["gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen"]}
                        primitiveValue="darkslategray">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="YAxisStroke"
                        name="YAxisStroke"
                        label="Y Axis Stroke"
                        shouldOverrideDefaultEditor={true}
                        valueType="EnumValue"
                        dropDownNames={["gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen"]}
                        dropDownValues={["gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen"]}
                        primitiveValue="gray">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="YAxisMajorStroke"
                        name="YAxisMajorStroke"
                        label="Y Axis Major Stroke"
                        shouldOverrideDefaultEditor={true}
                        valueType="EnumValue"
                        dropDownNames={["gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen"]}
                        dropDownValues={["gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen"]}
                        primitiveValue="darkslategray">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="YAxisMinorStroke"
                        name="YAxisMinorStroke"
                        label="Y Axis Minor Stroke"
                        shouldOverrideDefaultEditor={true}
                        valueType="EnumValue"
                        dropDownNames={["gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen"]}
                        dropDownValues={["gray", "darkslategray", "salmon", "cornflowerblue", "darkgreen"]}
                        primitiveValue="gray">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="legend-title">
                Renewable Electricity Generated
            </div>

            <div className="legend">
                <IgrLegend
                    ref={this.legendRef}
                    orientation="Horizontal">
                </IgrLegend>
            </div>

            <div className="container fill">
                <IgrCategoryChart
                    ref={this.chartRef}
                    computedPlotAreaMarginMode="Series"
                    dataSource={this.countryRenewableElectricity}
                    includedProperties={["year", "europe", "china", "america"]}
                    chartType="Line"
                    legend={this.legend}
                    isHorizontalZoomEnabled={false}
                    isVerticalZoomEnabled={false}
                    xAxisStroke="rgba(145, 145, 145, 1)"
                    xAxisStrokeThickness={2}
                    xAxisInterval={1}
                    xAxisMajorStroke="rgba(71, 71, 71, 1)"
                    xAxisMajorStrokeThickness={0.5}
                    yAxisStroke="gray"
                    yAxisStrokeThickness={2}
                    yAxisInterval={20}
                    yAxisMajorStroke="darkslategray"
                    yAxisMajorStrokeThickness={1}
                    yAxisMinorInterval={5}
                    yAxisMinorStroke="gray"
                    yAxisMinorStrokeThickness={0.5}
                    thickness={2}>
                </IgrCategoryChart>
            </div>
        </div>
        );
    }

    private _countryRenewableElectricity: CountryRenewableElectricity = null;
    public get countryRenewableElectricity(): CountryRenewableElectricity {
        if (this._countryRenewableElectricity == null)
        {
            this._countryRenewableElectricity = new CountryRenewableElectricity();
        }
        return this._countryRenewableElectricity;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            LegendDescriptionModule.register(context);
            CategoryChartDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);