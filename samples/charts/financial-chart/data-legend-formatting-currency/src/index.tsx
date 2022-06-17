import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { IgrFinancialChartModule, IgrDataChartInteractivityModule, IgrDataLegendModule } from 'igniteui-react-charts';
import { IgrDataLegend, IgrFinancialChart } from 'igniteui-react-charts';
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
                    includedColumns={["Close", "Change", "Value"]}
                    excludedColumns={["High", "Low", "Open", "Volume"]}
                    valueFormatMode="Currency"
                    valueFormatCulture="en-GB"
                    target={this.chart}
                    labelDisplayMode="Hidden"
                    ref={this.legendRef}>
                </IgrDataLegend>
            </div>
                        <div className="container fill">
                <IgrFinancialChart
                    chartType="Candle"
                    zoomSliderType="None"
                    dataToolTipIncludedColumns={["Close", "Change", "Value"]}
                    dataToolTipValueFormatMode="Currency"
                    dataToolTipValueFormatCulture="en-GB"
                    dataToolTipHeaderFormatTime="None"
                    dataToolTipLabelDisplayMode="Hidden"
                    dataSource={this.multipleStocks}
                    ref={this.chartRef}>
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
ReactDOM.render(<Sample />, document.getElementById('root'));
