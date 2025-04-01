import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrCategoryChartModule, IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrCategoryChart } from 'igniteui-react-charts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, CategoryChartDescriptionModule, DataChartInteractivityDescriptionModule } from 'igniteui-react-core';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';
import { IgrPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-react-layouts';
import { MarkerType, MarkerType_$type } from 'igniteui-react-charts';
import { EnumUtil } from 'igniteui-react-core';

import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrCategoryChartModule,
    IgrDataChartInteractivityModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditor: IgrPropertyEditorPanel
    private propertyEditorRef(r: IgrPropertyEditorPanel) {
        this.propertyEditor = r;
        this.setState({});
    }
    private chartTypeEditor: IgrPropertyEditorPropertyDescription
    private markerTypeEditor: IgrPropertyEditorPropertyDescription
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
                <IgrPropertyEditorPanel
                    ref={this.propertyEditorRef}
                    componentRenderer={this.renderer}
                    target={this.chart}
                    descriptionType="CategoryChart"
                    isHorizontal={true}
                    isWrappingEnabled={true}>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="ChartType"
                        name="ChartTypeEditor"
                        label="Chart Type"
                        primitiveValue="Line">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="MarkerTypeHandler"
                        name="MarkerTypeEditor"
                        label="Marker Type"
                        shouldOverrideDefaultEditor={true}
                        valueType="EnumValue"
                        dropDownValues={["Circle", "Automatic", "Triangle", "Pyramid", "Square", "Diamond", "Pentagon", "Hexagon", "Tetragram", "Pentagram", "Hexagram", "None"]}
                        dropDownNames={["Circle", "Automatic", "Triangle", "Pyramid", "Square", "Diamond", "Pentagon", "Hexagon", "Tetragram", "Pentagram", "Hexagram", "None"]}
                        primitiveValue="Circle"
                        changed={this.editorChangeUpdateMarkerType}>
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="legend-title">
                Renewable Electricity Generated
            </div>

            <div className="container fill">
                <IgrCategoryChart
                    ref={this.chartRef}
                    isSeriesHighlightingEnabled={true}
                    chartType="Line"
                    dataSource={this.countryRenewableElectricity}
                    computedPlotAreaMarginMode="Series">
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
            CategoryChartDescriptionModule.register(context);
            DataChartInteractivityDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public editorChangeUpdateMarkerType(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var item = sender as IgrPropertyEditorPropertyDescription;
        var chart = this.chart;

        var markerVal = item.primitiveValue;
        chart.markerTypes = markerVal;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);