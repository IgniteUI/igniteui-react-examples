import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { IgrFinancialChartModule, IgrDataChartInteractivityModule, IgrLegendModule } from 'igniteui-react-charts';
import { IgrDataLegend, IgrFinancialChart } from 'igniteui-react-charts';
import { MultipleStocks, MultipleStocksItem } from './MultipleStocks';



const mods: any[] = [
    IgrFinancialChartModule,
    IgrDataChartInteractivityModule,
    IgrLegendModule
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
                    includedColumns={["Open", "Close", "High", "Low", "Change"]}
                    target={this.chart}
                    ref={this.legendRef}>
                </IgrDataLegend>
            </div>
            <div className="container fill">
                <IgrFinancialChart
                    isHorizontalZoomEnabled="true"
                    chartType="Candle"
                    zoomSliderType="None"
                    isVerticalZoomEnabled="true"
                    dataSource={this.multipleStocks}
                    ref={this.chartRef}>
                </IgrFinancialChart>
            </div>
        </div>
        );
    }

    private _multipleStocks: MultipleStocks = null;
    private _multipleStocks_fetching: boolean = false;
    public get multipleStocks(): MultipleStocks {
        if (this._multipleStocks == null && !this._multipleStocks_fetching)
        {
            _multipleStocks_fetching = true;
            ( async () => { this._multipleStocks = await (await MultipleStocks.fetch()); this.setState({});  })();
        }
        return this._multipleStocks;
    }
    


}


// rendering above component in the React DOM
ReactDOM.render(<Sample />, document.getElementById('root'));
