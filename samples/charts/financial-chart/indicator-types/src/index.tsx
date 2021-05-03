import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';

import { StocksUtility } from './StocksUtility';

IgrFinancialChartModule.register();

export default class FinancialChartIndicatorTypes extends React.Component<any, any> {

    public data: any[];

    constructor(props: any) {
        super(props);
        this.initData();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample" >
                <div className="container">
                <IgrFinancialChart
                    width="100%"
                    height="100%"
                    chartType="Bar"
                    indicatorTypes="MoneyFlowIndex, MassIndex"
                    indicatorThickness={2}
                    indicatorNegativeBrushes="Red"
                    indicatorBrushes="Green, Blue"
                    zoomSliderType="None"
                    dataSource={this.data} />
                </div>
            </div>
        );
    }

    public initData() {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        const dateEnd = new Date(year, month, 1);
        const dateStart = new Date(year - 1, month, 1);

        this.data = StocksUtility.GetStocksBetween(dateStart, dateEnd);
    }
}

// rendering above class to the React DOM
ReactDOM.render(<FinancialChartIndicatorTypes />, document.getElementById('root'));