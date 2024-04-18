import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from "@infragistics/igniteui-react-layouts";
import { IgrDataChartCoreModule, IgrDataChartCategoryModule } from "@infragistics/igniteui-react-charts";
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from "@infragistics/igniteui-react-layouts";
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrWaterfallSeries } from "@infragistics/igniteui-react-charts";
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, DataChartCoreDescriptionModule, DataChartCategoryDescriptionModule } from "@infragistics/igniteui-react-core";
import { CompanyIncomeDataItem, CompanyIncomeData } from './CompanyIncomeData';
import { IgrPropertyEditorPropertyDescriptionButtonClickEventArgs } from "@infragistics/igniteui-react-layouts";

import 'igniteui-webcomponents/themes/light/bootstrap.css';

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
                    ref={this.chartRef}
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false">
                    <IgrCategoryXAxis
                        name="xAxis"
                        label="category"
                        interval="1"
                        dataSource={this.companyIncomeData}
                        overlap="1">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        title="Millions of Dollars"
                        titleLeftMargin="10"
                        titleAngle="-90"
                        minimumValue="0"
                        maximumValue="60">
                    </IgrNumericYAxis>
                    <IgrWaterfallSeries
                        name="WaterfallSeries1"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.companyIncomeData}
                        valueMemberPath="costs"
                        showDefaultTooltip="true"
                        isTransitionInEnabled="true">
                    </IgrWaterfallSeries>
                    <IgrWaterfallSeries
                        name="WaterfallSeries2"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.companyIncomeData}
                        brush="rgba(116, 70, 185, 1)"
                        outline="rgba(116, 70, 185, 1)"
                        valueMemberPath="netIncome"
                        showDefaultTooltip="true"
                        isTransitionInEnabled="true">
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