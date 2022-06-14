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
            <div className="options horizontal">
                <IgrPropertyEditorPanel
                    componentRenderer={this.renderer}
                    target={this.chart}
                    descriptionType="Sparkline"
                    isHorizontal="true"
                    isWrappingEnabled="true"
                    ref={this.propertyEditorPanel1Ref}>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="TrendLineType"
                        label="Trendline Type"
                        valueType="EnumValue"
                        shouldOverrideDefaultEditor="true"
                        dropDownNames={["CubicFit", "CumulativeAverage", "ExponentialAverage", "ExponentialFit", "LinearFit", "LogarithmicFit", "ModifiedAverage", "None", "PowerLawFit", "QuadraticFit", "QuarticFit", "QuinticFit", "SimpleAverage", "WeightedAverage"]}
                        dropDownValues={["CubicFit", "CumulativeAverage", "ExponentialAverage", "ExponentialFit", "LinearFit", "LogarithmicFit", "ModifiedAverage", "None", "PowerLawFit", "QuadraticFit", "QuarticFit", "QuinticFit", "SimpleAverage", "WeightedAverage"]}
                        primitiveValue="CubicFit">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>
            
            
            <div className="container fill">
                <IgrSparkline
                    dataSource={this.sparklineMixedData}
                    valueMemberPath="value"
                    labelMemberPath="label"
                    trendLineType="CubicFit"
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
