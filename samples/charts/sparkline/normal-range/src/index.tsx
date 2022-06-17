import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrSparklineModule } from 'igniteui-react-charts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrSparkline } from 'igniteui-react-charts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, SparklineDescriptionModule } from 'igniteui-react-core';
import { SparklineMixedDataItem, SparklineMixedData } from './SparklineMixedData';

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
    private normalRangeVisibilityEditor: IgrPropertyEditorPropertyDescription
    private normalRangeMinimumEditor: IgrPropertyEditorPropertyDescription
    private normalRangeMaximumEditor: IgrPropertyEditorPropertyDescription
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
                        propertyPath="NormalRangeVisibility"
                        label="Normal Range Visibility"
                        valueType="EnumValue"
                        shouldOverrideDefaultEditor="true"
                        dropDownNames={["Visible", "Collapsed"]}
                        dropDownValues={["Visible", "Collapsed"]}
                        primitiveValue="Visible"
                        name="NormalRangeVisibilityEditor">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        dropDownValues={["0", "10", "15", "20", "25", "30"]}
                        primitiveValue="25"
                        propertyPath="NormalRangeMinimum"
                        label="Normal Range Minimum"
                        valueType="EnumValue"
                        shouldOverrideDefaultEditor="true"
                        dropDownNames={["0", "10", "15", "20", "25", "30"]}
                        name="NormalRangeMinimumEditor">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        dropDownValues={["0", "10", "15", "20", "25", "30"]}
                        primitiveValue="25"
                        propertyPath="NormalRangeMaximum"
                        label="Normal Range Maximum"
                        valueType="EnumValue"
                        shouldOverrideDefaultEditor="true"
                        dropDownNames={["0", "10", "15", "20", "25", "30"]}
                        name="NormalRangeMaximumEditor">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>
                                                <div className="container fill">
                <IgrSparkline
                    normalRangeVisibility="Visible"
                    dataSource={this.sparklineMixedData}
                    valueMemberPath="value"
                    labelMemberPath="label"
                    normalRangeMinimum="15"
                    normalRangeMaximum="25"
                    displayType="Area"
                    ref={this.chartRef}>
                </IgrSparkline>
            </div>
        </div>
        );
    }

    private _sparklineMixedData: SparklineMixedData = null;
    public get sparklineMixedData(): SparklineMixedData {
        if (this._sparklineMixedData == null)
        {
            this._sparklineMixedData = new SparklineMixedData();
        }
        return this._sparklineMixedData;
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
