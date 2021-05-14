import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import { IgrLegend } from 'igniteui-react-charts';
import { IgrLegendModule } from 'igniteui-react-charts';
import StocksHistory from './StocksHistory';

IgrFinancialChartModule.register();
IgrLegendModule.register();

export default class FinancialChartOverview extends React.Component<any, any> {

    public data: any[];
    public chart: IgrFinancialChart;
    public legend: IgrLegend;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);
        this.state = { chartType: "Auto", data: [] }
        this.initData();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample" >
                <div className="options vertical">
                    <IgrLegend ref={this.onLegendRef}
                            orientation="Horizontal" />
                </div>
                <div className="container" style={{height: "calc(100% - 25px)"}}>
                    <IgrFinancialChart
                        width="100%"
                        height="100%"
                        chartType="Bar"
                        zoomSliderType="Bar"
                        chartTitle="Tesla vs Amazon"
                        subtitle="Between 2013 and 2017"
                        isToolbarVisible={true}
                        dataSource={this.state.data}
                        yAxisMode="PercentChange"
                        thickness={2} />
                </div>
            </div>
        );
    }

    public onChartRef(chart: IgrFinancialChart) {
        if (!chart) { return; }

        this.chart = chart;
        if (this.legend) {
            this.chart.legend = this.legend;
        }
    }

    public onLegendRef(legend: IgrLegend) {
        if (!legend) { return; }

        this.legend = legend;
        if (this.chart) {
            this.chart.legend = this.legend;
        }
    }

    public initData() {
        StocksHistory.getMultipleStocks().then((stocks: any[]) => {
            console.log("getMultipleStocks " + stocks.length);
            this.setState({ data: stocks });
        });
    }
}

// rendering above class to the React DOM
ReactDOM.render(<FinancialChartOverview />, document.getElementById('root'));
