import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrDataPieChartModule, IgrItemLegendModule } from 'igniteui-react-charts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrDataPieChart } from 'igniteui-react-charts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, DataPieChartDescriptionModule, ItemLegendDescriptionModule } from 'igniteui-react-core';
import { EnergyGlobalDemandItem, EnergyGlobalDemand } from './EnergyGlobalDemand';

import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrDataPieChartModule,
    IgrItemLegendModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditorPanel1: IgrPropertyEditorPanel
    private propertyEditorPanel1Ref(r: IgrPropertyEditorPanel) {
        this.propertyEditorPanel1 = r;
        this.setState({});
    }
    private highlightingModeEditor: IgrPropertyEditorPropertyDescription
    private highlightingBehaviorEditor: IgrPropertyEditorPropertyDescription
    private chart: IgrDataPieChart
    private chartRef(r: IgrDataPieChart) {
        this.chart = r;
        this.setState({});
    }

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
                    descriptionType="DataPieChart"
                    isHorizontal={true}
                    isWrappingEnabled={true}
                    ref={this.propertyEditorPanel1Ref}>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="HighlightingMode"
                        name="HighlightingModeEditor"
                        label="Highlighting Mode: "
                        primitiveValue="BrightenSpecific">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="HighlightingBehavior"
                        name="HighlightingBehaviorEditor"
                        label="Highlighting Behavior: "
                        primitiveValue="DirectlyOver">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="legend-title">
                Global Electricity Demand by Energy Use
            </div>

            <div className="container fill">
                <IgrDataPieChart
                    ref={this.chartRef}
                    dataSource={this.energyGlobalDemand}
                    highlightingBehavior="DirectlyOver"
                    highlightingMode="BrightenSpecific">
                </IgrDataPieChart>
            </div>
        </div>
        );
    }

    private _energyGlobalDemand: EnergyGlobalDemand = null;
    public get energyGlobalDemand(): EnergyGlobalDemand {
        if (this._energyGlobalDemand == null)
        {
            this._energyGlobalDemand = new EnergyGlobalDemand();
        }
        return this._energyGlobalDemand;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            DataPieChartDescriptionModule.register(context);
            ItemLegendDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);