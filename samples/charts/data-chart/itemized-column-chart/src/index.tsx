import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrLegendModule, IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartCategoryCoreModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule, IgrStackedFragmentSeriesModule, IgrCalloutLayerModule } from 'igniteui-react-charts';
import { IgrLegend, IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrColumnSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';

const mods: any[] = [
    IgrLegendModule,
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartCategoryCoreModule,
    IgrDataChartInteractivityModule,
    IgrDataChartAnnotationModule,
    IgrStackedFragmentSeriesModule,
    IgrCalloutLayerModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrLegend
    private legendRef(r: IgrLegend) {
        this.legend = r;
        this.setState({});
    }
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private xAxis: IgrCategoryXAxis
    private yAxis: IgrNumericYAxis
    private columnSeries1: IgrColumnSeries
    private columnSeries2: IgrColumnSeries
    private columnSeries3: IgrColumnSeries
    private columnSeries4: IgrColumnSeries
    private columnSeries5: IgrColumnSeries
    private dataToolTipLayer: IgrDataToolTipLayer

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Market Capitalization of Technology Companies
            </div>

            <div className="legend">
                <IgrLegend
                    ref={this.legendRef}
                    orientation="Horizontal">
                </IgrLegend>
            </div>

            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}
                    chartTitle="Market Capitalization of Technology Companies"
                    legend={this.legend}
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false">
                    <IgrCategoryXAxis
                        name="xAxis"
                        dataSource={this.companyMarketCapItemized}
                        label="category"
                        isInverted="true"
                        gap="0.75"
                        overlap="1">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        minimumValue="0"
                        maximumValue="220">
                    </IgrNumericYAxis>
                    <IgrColumnSeries
                        name="ColumnSeries1"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        valueMemberPath="v1"
                        title="Apple"
                        dataSource={this.companyMarketCapItemized}
                        showDefaultTooltip="true">
                    </IgrColumnSeries>
                    <IgrColumnSeries
                        name="ColumnSeries2"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        valueMemberPath="v2"
                        title="Microsoft"
                        dataSource={this.companyMarketCapItemized}
                        showDefaultTooltip="true">
                    </IgrColumnSeries>
                    <IgrColumnSeries
                        name="ColumnSeries3"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        valueMemberPath="v3"
                        title="Google"
                        dataSource={this.companyMarketCapItemized}
                        showDefaultTooltip="true">
                    </IgrColumnSeries>
                    <IgrColumnSeries
                        name="ColumnSeries4"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        valueMemberPath="v4"
                        title="NVidia"
                        dataSource={this.companyMarketCapItemized}
                        showDefaultTooltip="true">
                    </IgrColumnSeries>
                    <IgrColumnSeries
                        name="ColumnSeries5"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        valueMemberPath="v5"
                        title="Tesla"
                        dataSource={this.companyMarketCapItemized}
                        showDefaultTooltip="true">
                    </IgrColumnSeries>
                    <IgrDataToolTipLayer
                        name="DataToolTipLayer">
                    </IgrDataToolTipLayer>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _companyMarketCapItemized: CompanyMarketCapItemized = null;
    public get companyMarketCapItemized(): CompanyMarketCapItemized {
        if (this._companyMarketCapItemized == null)
        {
            this._companyMarketCapItemized = new CompanyMarketCapItemized();
        }
        return this._companyMarketCapItemized;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);