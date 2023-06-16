import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrLegendModule, IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartCategoryCoreModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule, IgrDataChartStackedModule, IgrStackedFragmentSeriesModule, IgrCalloutLayerModule } from 'igniteui-react-charts';
import { IgrLegend, IgrDataChart, IgrCategoryYAxis, IgrNumericXAxis, IgrStackedBarSeries, IgrStackedFragmentSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';

const mods: any[] = [
    IgrLegendModule,
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartCategoryCoreModule,
    IgrDataChartInteractivityModule,
    IgrDataChartAnnotationModule,
    IgrDataChartStackedModule,
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
    private yAxis: IgrCategoryYAxis
    private xAxis: IgrNumericXAxis
    private stackedBarSeries: IgrStackedBarSeries
    private s1: IgrStackedFragmentSeries
    private s2: IgrStackedFragmentSeries
    private s3: IgrStackedFragmentSeries
    private s4: IgrStackedFragmentSeries
    private s5: IgrStackedFragmentSeries
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
                    <IgrCategoryYAxis
                        name="yAxis"
                        dataSource={this.companyMarketCapItemized}
                        label="category"
                        isInverted="true"
                        gap="0.75">
                    </IgrCategoryYAxis>
                    <IgrNumericXAxis
                        name="xAxis"
                        minimumValue="0"
                        maximumValue="220">
                    </IgrNumericXAxis>
                    <IgrStackedBarSeries
                        name="StackedBarSeries"
                        dataSource={this.companyMarketCapItemized}
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        showDefaultTooltip="true"
                        areaFillOpacity="1">
                        <IgrStackedFragmentSeries
                            name="s1"
                            valueMemberPath="v1"
                            title="Apple">
                        </IgrStackedFragmentSeries>
                        <IgrStackedFragmentSeries
                            name="s2"
                            valueMemberPath="v2"
                            title="Microsoft">
                        </IgrStackedFragmentSeries>
                        <IgrStackedFragmentSeries
                            name="s3"
                            valueMemberPath="v3"
                            title="Google">
                        </IgrStackedFragmentSeries>
                        <IgrStackedFragmentSeries
                            name="s4"
                            valueMemberPath="v4"
                            title="NVidia">
                        </IgrStackedFragmentSeries>
                        <IgrStackedFragmentSeries
                            name="s5"
                            valueMemberPath="v5"
                            title="Tesla">
                        </IgrStackedFragmentSeries>
                    </IgrStackedBarSeries>
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