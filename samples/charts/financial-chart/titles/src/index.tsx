import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';

import StocksHistory from './StocksHistory';

IgrFinancialChartModule.register();

export default class FinancialChartTitles extends React.Component<any, any> {
    public data: any[];

    constructor(props: any) {
        super(props);
        this.state = { data: [] }
        this.initData();
    }

    public render(): JSX.Element {
        return (
            <div className="igContainer" >
                <div className="igComponent" style={{height: "calc(100% - 25px)"}}>
                <IgrFinancialChart
                    width="100%"
                    height="100%"
                    chartType="Line"
                    zoomSliderType="None"
                    chartTitle="Amazon Stock Prices"
                    subtitle="Between 2013 and 2017"
                    yAxisTitle="Closing Prices ($)"
                    xAxisTitle="Time Range (1-Day Interval)"
                    thickness={2}
                    dataSource={this.state.data} />
                </div>
            </div>
        );
    }

    public initData() {
        StocksHistory.getAmazonStock().then((stocks: any[]) => {
            this.setState({ data: stocks });
        });
    }
}

// rendering above class to the React DOM
ReactDOM.render(<FinancialChartTitles />, document.getElementById('root'));