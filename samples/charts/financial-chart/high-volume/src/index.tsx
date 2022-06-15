import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import { StocksUtility } from './StocksUtility';

IgrFinancialChartModule.register();

export default class FinancialChartHighVolume extends React.Component<any, any> {

    public data: any[];
    public title: string;
    public subtitle: string;

    constructor(props: any) {
        super(props);
        this.initData();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample" >
                <div className="container" style={{height: "calc(100% - 25px)"}}>
                    <IgrFinancialChart width="100%" height="100%"
                        chartType="Line"
                        xAxisEnhancedIntervalPreferMoreCategoryLabels="false"
                        shouldAutoExpandMarginForInitialLabels="false"
                        markerTypes="None"
                        dataSource={this.data}
                        chartTitle={this.title}
                        subtitle={this.subtitle}/>
                </div>
            </div>
        );
    }

    public initData() {
        const dateEnd = new Date(2020, 11, 1);
        const dateStart = new Date(1900, 1, 1);
        const yearStart = dateStart.getFullYear();
        const yearEnd = dateEnd.getFullYear();

        StocksUtility.intervalDays = 0
        StocksUtility.intervalHours = 1;
        StocksUtility.intervalMinutes = 0;
        this.data = StocksUtility.GetStocksBetween(dateStart, dateEnd);
        this.title = "Stock Prices " + yearStart + "-" + yearEnd;
        this.subtitle =  StocksUtility.toShortString(this.data.length) + " data points";
    }
}

// rendering above class to the React DOM
ReactDOM.render(<FinancialChartHighVolume />, document.getElementById('root'));
