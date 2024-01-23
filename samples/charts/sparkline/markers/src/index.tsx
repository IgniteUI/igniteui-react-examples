import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrSparklineModule } from 'igniteui-react-charts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrSparkline } from 'igniteui-react-charts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, SparklineDescriptionModule } from 'igniteui-react-core';
import { SparklineProfitDataItem, SparklineProfitData } from './SparklineProfitData';

import 'igniteui-webcomponents/themes/light/bootstrap.css';

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

    public componentDidMount() {
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
                        name="FirstMarkerVisibilityEditor"
                        label="First Markers"
                        shouldOverrideDefaultEditor="true"
                        valueType="EnumValue"
                        dropDownNames={["Visible", "Collapsed"]}
                        dropDownValues={["Visible", "Collapsed"]}
                        primitiveValue="Visible">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="HighMarkerVisibility"
                        name="HighMarkerVisibilityEditor"
                        label="High Markers"
                        valueType="EnumValue"
                        dropDownNames={["Visible", "Collapsed"]}
                        dropDownValues={["Visible", "Collapsed"]}
                        primitiveValue="Visible">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="LowMarkerVisibility"
                        name="LowMarkerVisibilityEditor"
                        label="Low Markers"
                        valueType="EnumValue"
                        dropDownNames={["Visible", "Collapsed"]}
                        dropDownValues={["Visible", "Collapsed"]}
                        primitiveValue="Visible">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="NegativeMarkerVisibility"
                        name="NegativeMarkerVisibilityEditor"
                        label="Negative Markers"
                        valueType="EnumValue"
                        dropDownNames={["Visible", "Collapsed"]}
                        dropDownValues={["Visible", "Collapsed"]}
                        primitiveValue="Visible">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="LastMarkerVisibility"
                        name="LastMarkerVisibilityEditor"
                        label="Last Markers"
                        valueType="EnumValue"
                        dropDownNames={["Visible", "Collapsed"]}
                        dropDownValues={["Visible", "Collapsed"]}
                        primitiveValue="Visible">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="MarkerVisibility"
                        name="MarkerVisibilityEditor"
                        label="All Markers"
                        valueType="EnumValue"
                        dropDownNames={["Visible", "Collapsed"]}
                        dropDownValues={["Visible", "Collapsed"]}
                        primitiveValue="Visible">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrSparkline
                    ref={this.chartRef}
                    dataSource={this.sparklineProfitData}
                    displayType="Line"
                    labelMemberPath="label"
                    valueMemberPath="value"
                    markerVisibility="Visible"
                    highMarkerVisibility="Visible"
                    lowMarkerVisibility="Visible"
                    firstMarkerVisibility="Visible"
                    lastMarkerVisibility="Visible"
                    negativeMarkerVisibility="Visible"
                    markerSize="10"
                    firstMarkerSize="10"
                    lastMarkerSize="10"
                    lowMarkerSize="10"
                    highMarkerSize="10"
                    negativeMarkerSize="10"
                    minimum="0"
                    maximum="60">
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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);