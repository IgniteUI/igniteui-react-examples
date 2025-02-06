import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrLegendModule, IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartCategoryCoreModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule, IgrDataChartStackedModule, IgrStackedFragmentSeriesModule } from 'igniteui-react-charts';
import { IgrLegend, IgrDataChart, IgrCategoryYAxis, IgrNumericXAxis, IgrStacked100BarSeries, IgrStackedFragmentSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
import { EnergyRenewableConsumptionItem, EnergyRenewableConsumption } from './EnergyRenewableConsumption';
import { IgrCategoryChart, IgrChartSelection, IgrSeriesMatcher } from 'igniteui-react-charts';

const mods: any[] = [
    IgrLegendModule,
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartCategoryCoreModule,
    IgrDataChartInteractivityModule,
    IgrDataChartAnnotationModule,
    IgrDataChartStackedModule,
    IgrStackedFragmentSeriesModule
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
    private stacked100BarSeries: IgrStacked100BarSeries
    private s1: IgrStackedFragmentSeries
    private s2: IgrStackedFragmentSeries
    private s3: IgrStackedFragmentSeries
    private s4: IgrStackedFragmentSeries
    private dataToolTipLayer: IgrDataToolTipLayer

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }
    public componentDidMount() {
        this.selectionMatcherOnViewInit();
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Renewable Energy Consumption
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
                    legend={this.legend}
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    selectionMode="SelectionColorFill"
                    selectionBehavior="Auto"
                    selectionBrush="orange">
                    <IgrCategoryYAxis
                        name="yAxis"
                        dataSource={this.energyRenewableConsumption}
                        label="location"
                        isInverted="true">
                    </IgrCategoryYAxis>
                    <IgrNumericXAxis
                        name="xAxis"
                        minimumValue="0"
                        title="TWh">
                    </IgrNumericXAxis>
                    <IgrStacked100BarSeries
                        name="stacked100BarSeries"
                        dataSource={this.energyRenewableConsumption}
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        showDefaultTooltip="true"
                        areaFillOpacity="1">
                        <IgrStackedFragmentSeries
                            name="s1"
                            valueMemberPath="hydro"
                            title="Hydro">
                        </IgrStackedFragmentSeries>
                        <IgrStackedFragmentSeries
                            name="s2"
                            valueMemberPath="wind"
                            title="Wind">
                        </IgrStackedFragmentSeries>
                        <IgrStackedFragmentSeries
                            name="s3"
                            valueMemberPath="solar"
                            title="Solar">
                        </IgrStackedFragmentSeries>
                        <IgrStackedFragmentSeries
                            name="s4"
                            valueMemberPath="other"
                            title="Other">
                        </IgrStackedFragmentSeries>
                    </IgrStacked100BarSeries>
                    <IgrDataToolTipLayer
                        name="dataToolTipLayer">
                    </IgrDataToolTipLayer>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _energyRenewableConsumption: EnergyRenewableConsumption = null;
    public get energyRenewableConsumption(): EnergyRenewableConsumption {
        if (this._energyRenewableConsumption == null)
        {
            this._energyRenewableConsumption = new EnergyRenewableConsumption();
        }
        return this._energyRenewableConsumption;
    }


    private _timer: ReturnType<typeof setInterval>;

    public selectionMatcherOnViewInit(): void {

    	var chart = this.chart;

    	this._timer = setInterval(() => {
    		var matcher = new IgrSeriesMatcher();

    		var selection = new IgrChartSelection();
    		selection.item = this.energyRenewableConsumption[1];
    		matcher.memberPath = "hydro";
    		matcher.memberPathType = "ValueMemberPath";
    		selection.matcher = matcher;

    		chart.selectedSeriesItems.add(selection);

    		var selection2 = new IgrChartSelection();
    		selection2.item = this.energyRenewableConsumption[2];
    		matcher.memberPath = "wind";
    		matcher.memberPathType = "ValueMemberPath";
    		selection2.matcher = matcher;

    		chart.selectedSeriesItems.add(selection2);

    	}, 100);
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);