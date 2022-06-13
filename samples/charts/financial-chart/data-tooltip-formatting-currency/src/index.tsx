import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { IgrFinancialChartModule, IgrDataChartInteractivityModule, IgrLegendModule } from 'igniteui-react-charts';
import { IgrFinancialChart } from 'igniteui-react-charts';
import { MultipleStocks } from './MultipleStocks';



const mods: any[] = [
    IgrFinancialChartModule,
    IgrDataChartInteractivityModule,
    IgrLegendModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private chart: IgrFinancialChart
    private chartRef(r: IgrFinancialChart) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
            
            
            
            <div className="container fill">
                <IgrFinancialChart
                    chartType="Candle"
                    zoomSliderType="None"
                    dataToolTipIncludedColumns={["Close", "Change", "Value"]}
                    dataToolTipExcludedColumns={["High", "Low", "Open", "Volume"]}
                    dataToolTipValueFormatMode="Currency"
                    dataToolTipValueFormatCulture="en-GB"
                    dataToolTipHeaderFormatTime="None"
                    dataToolTipLabelDisplayMode="Hidden"
                    dataSource={this.multipleStocks}
                    toolTipType="Data"
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
            this._multipleStocks_fetching = true;
            ( async () => { this._multipleStocks = await (await MultipleStocks.fetch()); this.setState({});  })();
        }
        return this._multipleStocks;
    }
    


}


// rendering above component in the React DOM
ReactDOM.render(<Sample />, document.getElementById('root'));