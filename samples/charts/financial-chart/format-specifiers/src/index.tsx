import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrFinancialChartModule, IgrDataChartInteractivityModule, IgrDataLegendModule } from 'igniteui-react-charts';
import { IgrNumberFormatSpecifierModule, IgrDateTimeFormatSpecifierModule } from 'igniteui-react-core';
import { IgrDataLegend, IgrFinancialChart } from 'igniteui-react-charts';
import { IgrNumberFormatSpecifier, IgrDateTimeFormatSpecifier } from 'igniteui-react-core';
import { MultipleStocks } from './MultipleStocks';

const mods: any[] = [
    IgrFinancialChartModule,
    IgrDataChartInteractivityModule,
    IgrDataLegendModule,
    IgrNumberFormatSpecifierModule,
    IgrDateTimeFormatSpecifierModule
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
            numberFormatSpecifier2.currency = "EUR";
            numberFormatSpecifier2.style = "currency";
            numberFormatSpecifier2.locale = "en-GB";
            numberFormatSpecifier2.minimumFractionDigits = 2;
            numberFormatSpecifier2.maximumFractionDigits = 2;

            numberFormatSpecifier1.push(numberFormatSpecifier2)
            this._numberFormatSpecifier1 = numberFormatSpecifier1;
        }
        return this._numberFormatSpecifier1;
    }
    private chart: IgrFinancialChart
    private chartRef(r: IgrFinancialChart) {
        this.chart = r;
        this.setState({});
    }
    private _numberFormatSpecifier3: IgrNumberFormatSpecifier[] | null = null;
    public get numberFormatSpecifier3(): IgrNumberFormatSpecifier[] {
        if (this._numberFormatSpecifier3 == null)
        {
            let numberFormatSpecifier3: IgrNumberFormatSpecifier[] = [];
            var numberFormatSpecifier4 = new IgrNumberFormatSpecifier();
            numberFormatSpecifier4.currency = "EUR";
            numberFormatSpecifier4.style = "currency";
            numberFormatSpecifier4.locale = "en-GB";
            numberFormatSpecifier4.minimumFractionDigits = 2;
            numberFormatSpecifier4.maximumFractionDigits = 2;

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
            numberFormatSpecifier6.currency = "EUR";
            numberFormatSpecifier6.style = "currency";
            numberFormatSpecifier6.locale = "en-GB";
            numberFormatSpecifier6.minimumFractionDigits = 0;

            numberFormatSpecifier5.push(numberFormatSpecifier6)
            this._numberFormatSpecifier5 = numberFormatSpecifier5;
        }
        return this._numberFormatSpecifier5;
    }
    private _dateTimeFormatSpecifier1: IgrDateTimeFormatSpecifier[] | null = null;
    public get dateTimeFormatSpecifier1(): IgrDateTimeFormatSpecifier[] {
        if (this._dateTimeFormatSpecifier1 == null)
        {
            let dateTimeFormatSpecifier1: IgrDateTimeFormatSpecifier[] = [];
            var dateTimeFormatSpecifier2 = new IgrDateTimeFormatSpecifier();
            dateTimeFormatSpecifier2.locale = "en-GB";
            dateTimeFormatSpecifier2.dateStyle = "long";

            dateTimeFormatSpecifier1.push(dateTimeFormatSpecifier2)
            this._dateTimeFormatSpecifier1 = dateTimeFormatSpecifier1;
        }
        return this._dateTimeFormatSpecifier1;
    }

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend">
                <IgrDataLegend
                    ref={this.legendRef}
                    target={this.chart}
                    includedColumns={["Close", "Change", "Value"]}
                    excludedColumns={["High", "Low", "Open", "Volume"]}
                    labelDisplayMode="Hidden"
                    valueFormatString="{0}"
                    valueFormatSpecifiers={this.numberFormatSpecifier1}>
                </IgrDataLegend>
            </div>

            <div className="container fill">
                <IgrFinancialChart
                    ref={this.chartRef}
                    chartType="Candle"
                    dataSource={this.multipleStocks}
                    dataToolTipValueFormatString="{0}"
                    dataToolTipValueFormatSpecifiers={this.numberFormatSpecifier3}
                    dataToolTipIncludedColumns={["Close", "Change", "Value"]}
                    dataToolTipHeaderFormatTime="None"
                    zoomSliderType="None"
                    yAxisAbbreviateLargeNumbers={false}
                    yAxisLabelFormat="{0}"
                    yAxisLabelFormatSpecifiers={this.numberFormatSpecifier5}
                    xAxisLabelFormat="{0}"
                    xAxisLabelFormatSpecifiers={this.dateTimeFormatSpecifier1}>
                </IgrFinancialChart>
            </div>
        </div>
        );
    }

    private _multipleStocks: MultipleStocks = null;
    private _isFetching: boolean = false;
    public get multipleStocks(): MultipleStocks {
        if (this._multipleStocks == null && !this._isFetching)
        {
            this._isFetching = true;
            ( async () => { this._multipleStocks = await (await MultipleStocks.fetch()); this.setState({});  })();
        }
        return this._multipleStocks;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);