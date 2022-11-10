import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import StocksHistory from './StocksHistory';

IgrFinancialChartModule.register();

export default class FinancialChartStyling extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = { data: [] };
        this.initData();
    }

    public render(): JSX.Element {
        return (
        <div className="container sample" >
            <div className="container" >
                <IgrFinancialChart
                    width="100%"
                    height="100%"
                    chartType="Candle"
                    thickness={2}
                    chartTitle="Google vs Microsoft Changes"
                    subtitle="Between 2013 and 2017"
                    yAxisMode="PercentChange"
                    yAxisTitle="Percent Changed"
                    negativeOutlines="rgb(213, 94, 0)"
                    negativeBrushes="Transparent"
                    brushes="Transparent"
                    zoomSliderType="None"
                    dataSource={this.state.data}/>
            </div>
        </div>
        );
    }

    public initData() {
        StocksHistory.getMultipleStocks().then((stocks: any[]) => {
            this.setState({ data: stocks });
        });
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FinancialChartStyling/>);
