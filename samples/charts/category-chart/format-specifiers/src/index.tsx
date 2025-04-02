import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrDataLegendModule, IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrNumberFormatSpecifierModule } from 'igniteui-react-core';
import { IgrDataLegend, IgrCategoryChart } from 'igniteui-react-charts';
import { IgrNumberFormatSpecifier } from 'igniteui-react-core';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, DataLegendDescriptionModule, CategoryChartDescriptionModule, NumberFormatSpecifierDescriptionModule } from 'igniteui-react-core';
import { HighestGrossingMoviesItem, HighestGrossingMovies } from './HighestGrossingMovies';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrDataLegendModule,
    IgrCategoryChartModule,
    IgrNumberFormatSpecifierModule
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
            numberFormatSpecifier2.maximumFractionDigits = 2;
            numberFormatSpecifier2.minimumFractionDigits = 2;

            numberFormatSpecifier1.push(numberFormatSpecifier2)
            this._numberFormatSpecifier1 = numberFormatSpecifier1;
        }
        return this._numberFormatSpecifier1;
    }
    private chart: IgrCategoryChart
    private chartRef(r: IgrCategoryChart) {
        this.chart = r;
        this.setState({});
    }
    private _numberFormatSpecifier3: IgrNumberFormatSpecifier[] | null = null;
    public get numberFormatSpecifier3(): IgrNumberFormatSpecifier[] {
        if (this._numberFormatSpecifier3 == null)
        {
            let numberFormatSpecifier3: IgrNumberFormatSpecifier[] = [];
            var numberFormatSpecifier4 = new IgrNumberFormatSpecifier();
            numberFormatSpecifier4.style = "currency";
            numberFormatSpecifier4.currency = "USD";
            numberFormatSpecifier4.currencyDisplay = "symbol";
            numberFormatSpecifier4.maximumFractionDigits = 2;
            numberFormatSpecifier4.minimumFractionDigits = 2;

            numberFormatSpecifier3.push(numberFormatSpecifier4)
            this._numberFormatSpecifier3 = numberFormatSpecifier3;
        }
        return this._numberFormatSpecifier3;
    }
    private _numberFormatSpecifier5: IgrNumberFormatSpecifier[] | null = null;
    public get numberFormatSpecifier5(): IgrNumberFormatSpecifier[] {
        if (this._numberFormatSpecifier5 == null)
        {
            let numberFormatSpecifier5: IgrNumberFormatSpecifier[] = [];
            var numberFormatSpecifier6 = new IgrNumberFormatSpecifier();
            numberFormatSpecifier6.style = "currency";
            numberFormatSpecifier6.currency = "USD";
            numberFormatSpecifier6.currencyDisplay = "symbol";
            numberFormatSpecifier6.minimumFractionDigits = 0;

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
                <IgrCategoryChart
                    ref={this.chartRef}
                    dataSource={this.highestGrossingMovies}
                    chartType="Column"
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    finalValueAnnotationsPrecision="2"
                    dataToolTipValueFormatString="{0} Billion"
                    dataToolTipValueFormatSpecifiers={this.numberFormatSpecifier3}
                    yAxisLabelFormat="{0}B"
                    yAxisLabelFormatSpecifiers={this.numberFormatSpecifier5}>
                </IgrCategoryChart>
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

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            DataLegendDescriptionModule.register(context);
            CategoryChartDescriptionModule.register(context);
            NumberFormatSpecifierDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);