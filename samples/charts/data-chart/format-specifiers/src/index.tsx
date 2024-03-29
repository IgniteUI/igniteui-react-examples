import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrDataLegendModule, IgrDataChartCoreModule, IgrDataChartCategoryCoreModule, IgrDataChartCategoryModule, IgrDataChartInteractivityModule, IgrDataChartVerticalCategoryModule, IgrDataChartAnnotationModule } from 'igniteui-react-charts';
import { IgrDataLegend, IgrDataChart, IgrCategoryYAxis, IgrNumericXAxis, IgrBarSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
import { IgrNumberFormatSpecifier } from 'igniteui-react-core';
import { HighestGrossingMoviesItem, HighestGrossingMovies } from './HighestGrossingMovies';

const mods: any[] = [
    IgrDataLegendModule,
    IgrDataChartCoreModule,
    IgrDataChartCategoryCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartInteractivityModule,
    IgrDataChartVerticalCategoryModule,
    IgrDataChartAnnotationModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrDataLegend
    private legendRef(r: IgrDataLegend) {
        this.legend = r;
        this.setState({});
    }
    private _numberFormatSpecifier1: IgrNumberFormatSpecifier[] | null = null;
    public get numberFormatSpecifier1(): IgrNumberFormatSpecifier[] {
        if (this._numberFormatSpecifier1 == null)
        {
            let numberFormatSpecifier1: IgrNumberFormatSpecifier[] = [];
            var numberFormatSpecifier2 = new IgrNumberFormatSpecifier();
            numberFormatSpecifier2.style = "currency";
            numberFormatSpecifier2.currency = "USD";
            numberFormatSpecifier2.currencyDisplay = "symbol";
            numberFormatSpecifier2.minimumFractionDigits = 2;
            numberFormatSpecifier2.maximumFractionDigits = 2;

            numberFormatSpecifier1.push(numberFormatSpecifier2)
            this._numberFormatSpecifier1 = numberFormatSpecifier1;
        }
        return this._numberFormatSpecifier1;
    }
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private yAxis: IgrCategoryYAxis
    private xAxis: IgrNumericXAxis
    private _numberFormatSpecifier3: IgrNumberFormatSpecifier[] | null = null;
    public get numberFormatSpecifier3(): IgrNumberFormatSpecifier[] {
        if (this._numberFormatSpecifier3 == null)
        {
            let numberFormatSpecifier3: IgrNumberFormatSpecifier[] = [];
            var numberFormatSpecifier4 = new IgrNumberFormatSpecifier();
            numberFormatSpecifier4.style = "currency";
            numberFormatSpecifier4.currency = "USD";
            numberFormatSpecifier4.currencyDisplay = "symbol";
            numberFormatSpecifier4.minimumFractionDigits = 0;

            numberFormatSpecifier3.push(numberFormatSpecifier4)
            this._numberFormatSpecifier3 = numberFormatSpecifier3;
        }
        return this._numberFormatSpecifier3;
    }
    private barSeries1: IgrBarSeries
    private barSeries2: IgrBarSeries
    private tooltips: IgrDataToolTipLayer
    private _numberFormatSpecifier5: IgrNumberFormatSpecifier[] | null = null;
    public get numberFormatSpecifier5(): IgrNumberFormatSpecifier[] {
        if (this._numberFormatSpecifier5 == null)
        {
            let numberFormatSpecifier5: IgrNumberFormatSpecifier[] = [];
            var numberFormatSpecifier6 = new IgrNumberFormatSpecifier();
            numberFormatSpecifier6.style = "currency";
            numberFormatSpecifier6.currency = "USD";
            numberFormatSpecifier6.currencyDisplay = "symbol";
            numberFormatSpecifier6.minimumFractionDigits = 2;
            numberFormatSpecifier6.maximumFractionDigits = 2;

            numberFormatSpecifier5.push(numberFormatSpecifier6)
            this._numberFormatSpecifier5 = numberFormatSpecifier5;
        }
        return this._numberFormatSpecifier5;
    }

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Highest Grossing Movie Franchises
            </div>

            <div className="legend">
                <IgrDataLegend
                    ref={this.legendRef}
                    target={this.chart}
                    valueFormatString="{0} Billion"
                    valueFormatSpecifiers={this.numberFormatSpecifier1}>
                </IgrDataLegend>
            </div>

            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}>
                    <IgrCategoryYAxis
                        name="yAxis"
                        label="franchise"
                        useEnhancedIntervalManagement="true"
                        enhancedIntervalPreferMoreCategoryLabels="true"
                        dataSource={this.highestGrossingMovies}
                        isInverted="true"
                        gap="0.5"
                        overlap="-0.1">
                    </IgrCategoryYAxis>
                    <IgrNumericXAxis
                        name="xAxis"
                        title="Billions of U.S. Dollars"
                        labelFormat="{0}B"
                        abbreviateLargeNumbers="false"
                        labelFormatSpecifiers={this.numberFormatSpecifier3}>
                    </IgrNumericXAxis>
                    <IgrBarSeries
                        name="BarSeries1"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        title="Total Revenue of Franchise"
                        valueMemberPath="totalRevenue"
                        dataSource={this.highestGrossingMovies}
                        showDefaultTooltip="true">
                    </IgrBarSeries>
                    <IgrBarSeries
                        name="BarSeries2"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        title="Highest Grossing Movie in Series"
                        valueMemberPath="highestGrossing"
                        dataSource={this.highestGrossingMovies}
                        showDefaultTooltip="true">
                    </IgrBarSeries>
                    <IgrDataToolTipLayer
                        name="Tooltips"
                        valueFormatString="{0} Billion"
                        valueFormatSpecifiers={this.numberFormatSpecifier5}>
                    </IgrDataToolTipLayer>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _highestGrossingMovies: HighestGrossingMovies = null;
    public get highestGrossingMovies(): HighestGrossingMovies {
        if (this._highestGrossingMovies == null)
        {
            this._highestGrossingMovies = new HighestGrossingMovies();
        }
        return this._highestGrossingMovies;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);