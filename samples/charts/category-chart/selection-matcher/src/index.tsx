import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrLegendModule, IgrCategoryChartModule, IgrDataChartAnnotationModule, IgrDataChartInteractivityModule, IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrLegend, IgrCategoryChart } from 'igniteui-react-charts';
import { ComponentRenderer, LegendDescriptionModule, CategoryChartDescriptionModule, DataChartAnnotationDescriptionModule, DataChartInteractivityDescriptionModule, DataChartCoreDescriptionModule } from 'igniteui-react-core';
import { EnergyRenewableConsumptionItem, EnergyRenewableConsumption } from './EnergyRenewableConsumption';
import { IgrChartSelection, IgrSeriesMatcher } from 'igniteui-react-charts';

const mods: any[] = [
    IgrLegendModule,
    IgrCategoryChartModule,
    IgrDataChartAnnotationModule,
    IgrDataChartInteractivityModule,
    IgrDataChartCoreModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrLegend
    private legendRef(r: IgrLegend) {
        this.legend = r;
        this.setState({});
    }
    private chart: IgrCategoryChart
    private chartRef(r: IgrCategoryChart) {
        this.chart = r;
        this.setState({});
    }

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
                Renewable Electricity Generated
            </div>

            <div className="legend">
                <IgrLegend
                    ref={this.legendRef}
                    orientation="Horizontal">
                </IgrLegend>
            </div>

            <div className="container fill">
                <IgrCategoryChart
                    ref={this.chartRef}
                    legend={this.legend}
                    dataSource={this.energyRenewableConsumption}
                    chartType="Column"
                    crosshairsDisplayMode="None"
                    yAxisTitle="TWh"
                    isHorizontalZoomEnabled={false}
                    isVerticalZoomEnabled={false}
                    selectionMode="SelectionColorFill"
                    selectionBehavior="Auto"
                    selectionBrush="orange">
                </IgrCategoryChart>
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

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            LegendDescriptionModule.register(context);
            CategoryChartDescriptionModule.register(context);
            DataChartAnnotationDescriptionModule.register(context);
            DataChartInteractivityDescriptionModule.register(context);
            DataChartCoreDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    private _timer: ReturnType<typeof setInterval>;

    public selectionMatcherOnViewInit(): void {

    	var chart = this.chart;

    	this._timer = setInterval(() => {
    	var data = this.energyRenewableConsumption;

        var matcher = new IgrSeriesMatcher();

        var selection = new IgrChartSelection();
    		selection.item = data[1];
    		matcher.memberPath = "hydro";
    		matcher.memberPathType = "ValueMemberPath";
    		selection.matcher = matcher;
    		chart.selectedSeriesItems.add(selection);

    	var matcher2 = new IgrSeriesMatcher();

    var selection2 = new IgrChartSelection();
    		selection2.item = data[2];
    		matcher2.memberPath = "wind";
    		matcher2.memberPathType = "ValueMemberPath";
    		selection2.matcher = matcher2;

    		chart.selectedSeriesItems.add(selection2);

    	}, 100);
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);