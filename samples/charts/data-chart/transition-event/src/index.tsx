import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrDataChartCoreModule, IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrWaterfallSeries } from 'igniteui-react-charts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, DataChartCoreDescriptionModule, DataChartCategoryDescriptionModule } from 'igniteui-react-core';
import { CompanyIncomeDataItem, CompanyIncomeData } from './CompanyIncomeData';
import { IgrPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-react-layouts';

import 'igniteui-webcomponents/themes/light/bootstrap.css';
import { defineAllComponents } from 'igniteui-webcomponents';

defineAllComponents();

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditorPanel1: IgrPropertyEditorPanel
    private propertyEditorPanel1Ref(r: IgrPropertyEditorPanel) {
        this.propertyEditorPanel1 = r;
        this.setState({});
    }
    private propertyEditorPropertyDescription1: IgrPropertyEditorPropertyDescription
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private xAxis: IgrCategoryXAxis
    private yAxis: IgrNumericYAxis
    private waterfallSeries1: IgrWaterfallSeries
    private waterfallSeries2: IgrWaterfallSeries

    constructor(props: any) {
        super(props);

        this.propertyEditorPanel1Ref = this.propertyEditorPanel1Ref.bind(this);
        this.editorButtonReplayTransitionIn = this.editorButtonReplayTransitionIn.bind(this);
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
                    isWrappingEnabled="false"
                    ref={this.propertyEditorPanel1Ref}>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="ReplayTransitionIn"
                        label=""
                        valueType="Button"
                        primitiveValue="Replay"
                        buttonClicked={this.editorButtonReplayTransitionIn}
                        name="propertyEditorPropertyDescription1">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="legend-title">
                Facebook Consolidated Statements of Income
            </div>

            <div className="container fill">
                <IgrDataChart
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    ref={this.chartRef}>
                    <IgrCategoryXAxis
                        interval="1"
                        dataSource={this.companyIncomeData}
                        overlap="1"
                        label="category"
                        name="xAxis">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        minimumValue="0"
                        maximumValue="60"
                        title="Millions of Dollars"
                        titleAngle="-90"
                        titleLeftMargin="10"
                        name="yAxis">
                    </IgrNumericYAxis>
                    <IgrWaterfallSeries
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        valueMemberPath="costs"
                        isTransitionInEnabled="true"
                        dataSource={this.companyIncomeData}
                        showDefaultTooltip="true"
                        name="WaterfallSeries1">
                    </IgrWaterfallSeries>
                    <IgrWaterfallSeries
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.companyIncomeData}
                        valueMemberPath="netIncome"
                        showDefaultTooltip="true"
                        isTransitionInEnabled="true"
                        brush="rgba(116, 70, 185, 1)"
                        outline="rgba(116, 70, 185, 1)"
                        name="WaterfallSeries2">
                    </IgrWaterfallSeries>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _companyIncomeData: CompanyIncomeData = null;
    public get companyIncomeData(): CompanyIncomeData {
        if (this._companyIncomeData == null)
        {
            this._companyIncomeData = new CompanyIncomeData();
        }
        return this._companyIncomeData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            DataChartCoreDescriptionModule.register(context);
            DataChartCategoryDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public editorButtonReplayTransitionIn(sender: any, args: IgrPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        var series = this.chart.actualSeries;
        for (var i = 0; i < series.length; i++) {
            series[i].replayTransitionIn();
        }
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);