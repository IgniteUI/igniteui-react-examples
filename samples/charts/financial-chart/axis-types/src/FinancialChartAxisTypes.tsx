import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import * as React from 'react';
import { StocksUtility } from './StocksUtility';

IgrFinancialChartModule.register();

export default class FinancialChartAxisTypes extends React.Component<any, any> {

    public data: any[];

    constructor(props: any) {
        super(props);

        this.state = { xAxisMode: "Time", yAxisMode: "PercentChange" }
        this.initData();
    }

    public render() {
        return (
        <div className="igContainer" >
            <div className="igOptions">
                <label className="igOptions-label">X-Axis Mode:</label>
                <select value={this.state.xAxisMode}
                    onChange={this.onXAxisModeChanged}>
                    <option>Ordinal</option>
                    <option>Time</option>
                </select>
                <label className="igOptions-label">Y-Axis Mode:</label>
                <select value={this.state.yAxisMode}
                    onChange={this.onYAxisModeChanged}>
                    <option>PercentChange</option>
                    <option>Numeric</option>
                </select>
            </div>
            <div className="igComponent" style={{height: "calc(100% - 65px)"}}>
                <IgrFinancialChart
                    width="100%"
                    height="100%"
                    xAxisMode={this.state.xAxisMode}
                    yAxisMode={this.state.yAxisMode}
                    dataSource={this.data}/>
            </div>

        </div>
        );
    }

    public onXAxisModeChanged = (e: any) =>{
        const mode = e.target.value;
        this.setState({xAxisMode: mode});
    }

    public onYAxisModeChanged = (e: any) =>{
        const mode = e.target.value;
        this.setState({yAxisMode: mode});
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
