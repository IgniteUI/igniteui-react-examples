import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import { StockIndexData } from './StockIndexData';

IgrFinancialChartModule.register();

export default class FinancialChartScrollbars extends React.Component<any, any> {

    private chart: IgrFinancialChart;
    public data: any[];

    constructor(props: any) {
        super(props);
        this.data = StockIndexData.getData();

        this.onChartRef = this.onChartRef.bind(this);

    }

    public render(): JSX.Element {
        return (
        <div className="container sample" >
            <div className="container">
                <IgrFinancialChart
                    ref={this.onChartRef}
                    width="100%"
                    height="100%"
                    isToolbarVisible={false}
                    chartType="Candle"
                    chartTitle="S&P 500"
                    yAxisMode="Numeric"
                    yAxisTitle="Financial Prices"
                    zoomSliderType="None"
                    dataSource={this.data}
                    isHorizontalZoomEnabled="true"
                    isVerticalZoomEnabled="true"
                    horizontalViewScrollbarMode="Persistent"
                    verticalViewScrollbarMode="Persistent"/>
            </div>
        </div>
        );
    }

    public onChartRef(chart: IgrFinancialChart) {
        if (!chart) { return; }
        this.chart = chart;

        this.chart.windowRect = {left: 1, top: 1, width: 0.90, height: 0.90};
        
    }
}

// rendering above class to the React DOM
ReactDOM.render(<FinancialChartScrollbars />, document.getElementById('root'));
