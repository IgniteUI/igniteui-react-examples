import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import StocksHistory from './StocksHistory';

IgrFinancialChartModule.register();

export default class FinancialChartMultipleData extends React.Component<any, any> {
    public data: any[];

    constructor(props: any) {
        super(props);
        this.state = { data: [] };
        this.initData();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample" >
                <div className="container" style={{height: "calc(100% - 25px)"}}>
                <IgrFinancialChart
                    width="100%"
                    height="100%"
                    chartType="Line"
                    zoomSliderType="None"
                    chartTitle="Tesla vs Amazon vs Microsoft Changes"
                    subtitle="Between 2013 and 2017"
                    yAxisMode="PercentChange"
                    yAxisTitle="Percent Changed Since 2013"
                    yAxisInterval={100}
                    yAxisMaximumValue={950}
                    yAxisMinimumValue={-100}
                    thickness={2}
                    dataSource={this.state.data} />
                </div>
            </div>
        );
    }

    public initData() {
        StocksHistory.getMultipleStocks().then((stocks: any[]) => {
            // console.log("getMultipleStocks " + stocks.length);
            this.setState({ data: stocks });
        });
    }
}

// rendering above class to the React DOM
ReactDOM.render(<FinancialChartMultipleData />, document.getElementById('root'));
