import React from 'react';
import ReactDOM from 'react-dom/client';
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
                    <span className="legend-title">Google vs Microsoft Stock Prices</span>
                    <div className="legend">
                        <IgrLegend
                            ref={this.onLegendRef}
                            orientation="Horizontal" />
                    </div>
                </div>
                <div className="container" style={{height: "calc(100% - 25px)"}}>
                    <IgrFinancialChart
                        ref={this.onChartRef}
                        width="100%"
                        height="100%"
                        chartType="Bar"
                        thickness={2}
                        excludedProperties={["Date"]}
                        dataSource={this.state.data}
                        zoomSliderType="Bar"
                        isToolbarVisible={true}
                        yAxisMode="PercentChange" />
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
            this.setState({ data: stocks });
        });
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FinancialChartOverview/>);
