import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrSparklineModule } from 'igniteui-react-charts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrSparkline } from 'igniteui-react-charts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, SparklineDescriptionModule } from 'igniteui-react-core';
import { SparklineProfitDataItem, SparklineProfitData } from './SparklineProfitData';

import 'igniteui-webcomponents/themes/light/bootstrap.css';
import { defineAllComponents } from 'igniteui-webcomponents';

defineAllComponents();

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrSparklineModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditorPanel1: IgrPropertyEditorPanel
    private propertyEditorPanel1Ref(r: IgrPropertyEditorPanel) {
        this.propertyEditorPanel1 = r;
        this.setState({});
    }
    private firstMarkerVisibilityEditor: IgrPropertyEditorPropertyDescription
    private highMarkerVisibilityEditor: IgrPropertyEditorPropertyDescription
    private lowMarkerVisibilityEditor: IgrPropertyEditorPropertyDescription
    private negativeMarkerVisibilityEditor: IgrPropertyEditorPropertyDescription
    private lastMarkerVisibilityEditor: IgrPropertyEditorPropertyDescription
    private markerVisibilityEditor: IgrPropertyEditorPropertyDescription
    private chart: IgrSparkline
    private chartRef(r: IgrSparkline) {
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
                    descriptionType="Sparkline"
                    isHorizontal="true"
                    isWrappingEnabled="true"
                    ref={this.propertyEditorPanel1Ref}>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="FirstMarkerVisibility"
                        label="First Markers"
                        valueType="EnumValue"
                        shouldOverrideDefaultEditor="true"
                        dropDownNames={["Visible", "Collapsed"]}
                        dropDownValues={["Visible", "Collapsed"]}
                        primitiveValue="Visible"
                        name="FirstMarkerVisibilityEditor">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        dropDownValues={["Visible", "Collapsed"]}
                        primitiveValue="Visible"
                        propertyPath="HighMarkerVisibility"
                        label="High Markers"
                        valueType="EnumValue"
                        dropDownNames={["Visible", "Collapsed"]}
                        name="HighMarkerVisibilityEditor">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        dropDownValues={["Visible", "Collapsed"]}
                        primitiveValue="Visible"
                        propertyPath="LowMarkerVisibility"
                        label="Low Markers"
                        valueType="EnumValue"
                        dropDownNames={["Visible", "Collapsed"]}
                        name="LowMarkerVisibilityEditor">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        dropDownValues={["Visible", "Collapsed"]}
                        primitiveValue="Visible"
                        propertyPath="NegativeMarkerVisibility"
                        label="Negative Markers"
                        valueType="EnumValue"
                        dropDownNames={["Visible", "Collapsed"]}
                        name="NegativeMarkerVisibilityEditor">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        dropDownValues={["Visible", "Collapsed"]}
                        primitiveValue="Visible"
                        propertyPath="LastMarkerVisibility"
                        label="Last Markers"
                        valueType="EnumValue"
                        dropDownNames={["Visible", "Collapsed"]}
                        name="LastMarkerVisibilityEditor">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        dropDownValues={["Visible", "Collapsed"]}
                        primitiveValue="Visible"
                        propertyPath="MarkerVisibility"
                        label="All Markers"
                        valueType="EnumValue"
                        dropDownNames={["Visible", "Collapsed"]}
                        name="MarkerVisibilityEditor">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>



            <div className="container fill">
                <IgrSparkline
                    markerVisibility="Visible"
                    negativeMarkerVisibility="Visible"
                    firstMarkerVisibility="Visible"
                    lastMarkerVisibility="Visible"
                    lowMarkerVisibility="Visible"
                    highMarkerVisibility="Visible"
                    markerSize="10"
                    firstMarkerSize="10"
                    lastMarkerSize="10"
                    highMarkerSize="10"
                    lowMarkerSize="10"
                    negativeMarkerSize="10"
                    minimum="0"
                    maximum="60"
                    dataSource={this.sparklineProfitData}
                    valueMemberPath="value"
                    labelMemberPath="label"
                    displayType="Line"
                    ref={this.chartRef}>
                </IgrSparkline>
            </div>
        </div>
        );
    }

    private _sparklineProfitData: SparklineProfitData = null;
    public get sparklineProfitData(): SparklineProfitData {
        if (this._sparklineProfitData == null)
        {
            this._sparklineProfitData = new SparklineProfitData();
        }
        return this._sparklineProfitData;
    }
    

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            SparklineDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}


// rendering above component in the React DOM
ReactDOM.render(<Sample />, document.getElementById('root'));
