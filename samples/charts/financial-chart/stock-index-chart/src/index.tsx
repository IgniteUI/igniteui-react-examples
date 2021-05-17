import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import { StockIndexData } from './StockIndexData';

IgrFinancialChartModule.register();

export default class FinancialChartStockIndexChart extends React.Component<any, any> {

    public data: any[];

    constructor(props: any) {
        super(props);
        this.data = StockIndexData.getData();
    }

    public render(): JSX.Element {
        return (
        <div className="container sample" >
            <div className="container" >
                <IgrFinancialChart
                    width="100%"
                    height="100%"
                    isToolbarVisible={false}
                    chartType="Candle"
                    chartTitle="S&P 500"
                    titleAlignment="Left"
                    titleLeftMargin="25"
                    titleTopMargin="10"
                    titleBottomMargin="10"
                    subtitle="CME - CME Delayed Price, Currency in USD"
                    subtitleAlignment="Left"
                    subtitleLeftMargin="25"
                    subtitleTopMargin="5"
                    subtitleBottomMargin="10"
                    yAxisLabelLocation="OutsideLeft"
                    yAxisMode="Numeric"
                    yAxisTitle="Financial Prices"
                    yAxisTitleLeftMargin="10"
                    yAxisTitleRightMargin="5"
                    yAxisLabelLeftMargin="0"
                    zoomSliderType="None"
                    dataSource={this.data}/>
            </div>
        </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<FinancialChartStockIndexChart />, document.getElementById('root'));
