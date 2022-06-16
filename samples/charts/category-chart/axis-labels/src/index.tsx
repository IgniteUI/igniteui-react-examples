import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrLegendModule, IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrLegend, IgrCategoryChart } from 'igniteui-react-charts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, LegendDescriptionModule, CategoryChartDescriptionModule } from 'igniteui-react-core';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';

import 'igniteui-webcomponents/themes/light/bootstrap.css';
import { defineAllComponents } from 'igniteui-webcomponents';
defineAllComponents();
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
    private xAxisLabelAngleEditor: IgrPropertyEditorPropertyDescription
    private yAxisLabelAngleEditor: IgrPropertyEditorPropertyDescription
    private xAxisLabelTextColorEditor: IgrPropertyEditorPropertyDescription
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
                    isHorizontal="true"
                    isWrappingEnabled="true"
                    ref={this.propertyEditorPanel1Ref}>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="XAxisLabelAngle"
                        label="X Axis Label Angle"
                        valueType="EnumValue"
                        shouldOverrideDefaultEditor="true"
                        dropDownNames={["0", "45", "90", "135", "180", "225", "270"]}
                        dropDownValues={["0", "45", "90", "135", "180", "225", "270"]}
                        primitiveValue="0"
                        name="XAxisLabelAngleEditor">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        dropDownValues={["-90", "-45", "0", "45", "90"]}
                        primitiveValue="0"
                        propertyPath="YAxisLabelAngle"
                        label="Y Axis Label Angle"
                        valueType="EnumValue"
                        shouldOverrideDefaultEditor="true"
                        dropDownNames={["-90", "-45", "0", "45", "90"]}
                        name="YAxisLabelAngleEditor">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        dropDownValues={["red", "green"]}
                        primitiveValue="red"
                        propertyPath="XAxisLabelTextColor"
                        label="Y Axis Label Color"
                        valueType="EnumValue"
                        shouldOverrideDefaultEditor="true"
                        dropDownNames={["red", "green"]}
                        name="XAxisLabelTextColorEditor">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
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
                    topMargin="20"
                    dataSource={this.countryRenewableElectricity}
                    includedProperties={["year", "europe", "china", "america"]}
                    legend={this.legend}
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    computedPlotAreaMarginMode="Series"
                    ref={this.chartRef}>
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
ReactDOM.render(<Sample />, document.getElementById('root'));
