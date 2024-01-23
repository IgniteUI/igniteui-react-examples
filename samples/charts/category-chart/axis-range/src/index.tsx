import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrLegendModule, IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrLegend, IgrCategoryChart } from 'igniteui-react-charts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, LegendDescriptionModule, CategoryChartDescriptionModule } from 'igniteui-react-core';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';
import { IgrPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-react-layouts';
import { MarkerType, MarkerType_$type } from 'igniteui-react-charts';
import { EnumUtil } from 'igniteui-react-core';

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
    private yAxisMinimumValue: IgrPropertyEditorPropertyDescription
    private yAxisMaximumValue: IgrPropertyEditorPropertyDescription
    private chart: IgrCategoryChart
    private chartRef(r: IgrCategoryChart) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.propertyEditorPanel1Ref = this.propertyEditorPanel1Ref.bind(this);
        this.editorChangeUpdateYAxisMinimumValue = this.editorChangeUpdateYAxisMinimumValue.bind(this);
        this.editorChangeUpdateYAxisMaximumValue = this.editorChangeUpdateYAxisMaximumValue.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public componentDidMount() {
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
                        propertyPath="YAxisMinimumValueHandler"
                        name="YAxisMinimumValue"
                        label="Y Axis Minimum Value"
                        shouldOverrideDefaultEditor="true"
                        valueType="EnumValue"
                        dropDownNames={["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"]}
                        dropDownValues={["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"]}
                        primitiveValue="0"
                        changed={this.editorChangeUpdateYAxisMinimumValue}>
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="YAxisMaximumValueHandler"
                        name="YAxisMaximumValue"
                        label="Y Axis Maximum Value"
                        shouldOverrideDefaultEditor="true"
                        valueType="EnumValue"
                        dropDownNames={["100", "110", "120", "130", "140", "150", "160", "170", "180", "190", "200"]}
                        dropDownValues={["100", "110", "120", "130", "140", "150", "160", "170", "180", "190", "200"]}
                        primitiveValue="150"
                        changed={this.editorChangeUpdateYAxisMaximumValue}>
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="legend-title">
                Highest Grossing Movie Franchises
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
                    dataSource={this.countryRenewableElectricity}
                    includedProperties={["year", "europe", "china", "america"]}
                    legend={this.legend}
                    chartType="Line"
                    computedPlotAreaMarginMode="Series"
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    yAxisMinimumValue="0"
                    yAxisMaximumValue="150">
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

    public editorChangeUpdateYAxisMinimumValue(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {

    	var yAxisMinimumVal = args.newValue;
        this.chart.yAxisMinimumValue = parseInt(yAxisMinimumVal);
    }

    public editorChangeUpdateYAxisMaximumValue(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {

        var yAxisMaximumVal = args.newValue;
        this.chart.yAxisMaximumValue = parseInt(yAxisMaximumVal);
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);