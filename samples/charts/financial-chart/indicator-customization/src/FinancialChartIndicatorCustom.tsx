import { IgrFinancialEventArgs } from 'igniteui-react-charts';
import { IgrFinancialChartCustomIndicatorArgs } from 'igniteui-react-charts';
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import * as React from 'react';
import { StocksUtility } from './StocksUtility';

IgrFinancialChartModule.register();

export default class FinancialChartIndicatorCustom extends React.Component {

    public data: any[];

    constructor(props: any) {
        super(props);
        this.data = this.getStockData();
        this.applyCustomIndicators = this.applyCustomIndicators.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="igContainer" style={{height: "calc(100% - 25px)"}} >
                <div className="igComponent">
                    <IgrFinancialChart
                        width="100%"
                        height="100%"
                        chartType="candle"
                        zoomSliderType="none"
                        dataSource={this.data}
                        customIndicatorNames="Custom Indicator (Price Changes)"
                        applyCustomIndicators={this.applyCustomIndicators}/>
                </div>
            </div>
        );
    }

    public applyCustomIndicators(chart: IgrFinancialChart, event: IgrFinancialChartCustomIndicatorArgs) {

        if (event.index === 0) {
            const info: IgrFinancialEventArgs = event.indicatorInfo;
            if (info === undefined)
            {
                console.log("indicatorInfo is undefined"); return;
            }

            const ds = info.dataSource;
            if (ds === undefined)
            {
                console.log("dataSource is undefined"); return;
            }
            if (ds.openColumn === undefined)
            {
                console.log("dataSource has no openColumn"); return;
            }
            if (ds.indicatorColumn.length === 0)
            {
                console.log("dataSource has no indicatorColumn"); return;
            }

            const prices = ds.openColumn;
            const priceStart = ds.openColumn[0];
            let min = Number.MAX_VALUE;
            let max = Number.MIN_VALUE;

            // calculating price changes using start price as reference
            for (let i = 0; i < ds.indicatorColumn.length; i++) {
                const priceChange = prices[i] - priceStart;
                const pricePercentage = (priceChange / priceStart) * 100;
                min = Math.min(min, pricePercentage);
                max = Math.max(max, pricePercentage);
                // setting values for indicator
                ds.indicatorColumn[i] = pricePercentage;
            }

            // setting min and max on data source
            ds.minimumValue = min;
            ds.maximumValue = max;

            console.log("custom indicator created between " + min + "  " + max);
        }
    }

    public getStockData(): any {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        const dateEnd = new Date(year, month, 1);
        const dateStart = new Date(year - 2, month, 1);

        return StocksUtility.GetStocksBetween(dateStart, dateEnd);
    }
}
