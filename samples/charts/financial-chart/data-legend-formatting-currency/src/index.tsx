import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrFinancialChartModule, IgrDataChartInteractivityModule, IgrDataLegendModule } from "@infragistics/igniteui-react-charts";
import { IgrDataLegend, IgrFinancialChart } from "@infragistics/igniteui-react-charts";
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
                    zoomSliderType="None">
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