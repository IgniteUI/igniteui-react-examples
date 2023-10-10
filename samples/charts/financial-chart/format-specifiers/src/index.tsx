import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrFinancialChartModule, IgrDataChartInteractivityModule, IgrDataLegendModule } from 'igniteui-react-charts';
import { IgrDataLegend, IgrFinancialChart, IgrNumberFormatSpecifier, IgrDateTimeFormatSpecifier } from 'igniteui-react-charts';
import { MultipleStocks } from './MultipleStocks';

const mods: any[] = [
    IgrFinancialChartModule,
    IgrDataChartInteractivityModule,
    IgrDataLegendModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrDataLegend
    private legendRef(r: IgrDataLegend) {
        this.legend = r;
        this.setState({});
    }
    private chart: IgrFinancialChart
    private chartRef(r: IgrFinancialChart) {
        this.chart = r;
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
            numberFormatSpecifier2.minimumFractionDigits = 0;

            numberFormatSpecifier1.push(numberFormatSpecifier2)
            this._numberFormatSpecifier1 = numberFormatSpecifier1;
        }
        return this._numberFormatSpecifier1;
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
                    valueFormatMode="Currency"
                    valueFormatCulture="en-GB">
                </IgrDataLegend>
            </div>

            <div className="container fill">
                <IgrFinancialChart
                    ref={this.chartRef}
                    chartType="Candle"
                    dataSource={this.multipleStocks}
                    dataToolTipValueFormatMode="Currency"
                    dataToolTipValueFormatCulture="en-GB"
                    dataToolTipLabelDisplayMode="Hidden"
                    dataToolTipIncludedColumns={["Close", "Change", "Value"]}
                    dataToolTipHeaderFormatTime="None"
                    zoomSliderType="None"
                    yAxisLabelFormat="{0}"
                    yAxisLabelFormatSpecifiers={this.numberFormatSpecifier1}
                    xAxisLabelFormat="{0}"
                    xAxisLabelFormatSpecifiers={this.dateTimeFormatSpecifier1}>
                </IgrFinancialChart>
            </div>
        </div>
        );
    }

    private _multipleStocks: MultipleStocks = null;
    private _multipleStocksFetching: boolean = false;
    public get multipleStocks(): MultipleStocks {
        if (this._multipleStocks == null && !this._multipleStocksFetching)
        {
            this._multipleStocksFetching = true;
            ( async () => { this._multipleStocks = await (await MultipleStocks.fetch()); this.setState({});  })();
        }
        return this._multipleStocks;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);