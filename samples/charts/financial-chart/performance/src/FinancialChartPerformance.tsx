import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import * as React from 'react';
import { StocksUtility } from './StocksUtility';

IgrFinancialChartModule.register();

export default class FinancialChartPerformance extends React.Component<any, any> {

    public data: any[];

    constructor(props: any) {
        super(props);
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
                        volumeType="Line"
                        zoomSliderType="None"
                        markerTypes="None"
                        xAxisMode="Ordinal"
                        yAxisMode="Numeric"
                        yAxisExtent={60}
                        thickness={2}
                        dataSource={this.data}/>
                </div>
            </div>
        );
    }

    public initData() {
        const dateEnd = new Date(2021, 11, 1);
        const dateStart = new Date(2000, 1, 1);

        StocksUtility.intervalDays = 0
        StocksUtility.intervalHours = 1;
        StocksUtility.intervalMinutes = 0;
        this.data = StocksUtility.GetStocksBetween(dateStart, dateEnd);
    }
}
