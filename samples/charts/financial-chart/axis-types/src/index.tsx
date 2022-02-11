import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import { StocksUtility } from './StocksUtility';

IgrFinancialChartModule.register();

export default class FinancialChartAxisTypes extends React.Component<any, any> {

    public data: any[];

    constructor(props: any) {
        super(props);

        this.state = { xAxisMode: "Ordinal", yAxisMode: "Numeric", yAxisIsLogarithmic: false }
        this.initData();
    }

    public render(): JSX.Element {
        return (
        <div className="container sample" >
            <div className="options horizontal">
                <label className="options-label">X-Axis Mode:</label>
                <select value={this.state.xAxisMode}
                    onChange={this.onXAxisModeChanged}>
                    <option>Ordinal</option>
                    <option>Time</option>
                </select>
                <label className="options-label">Y-Axis Mode:</label>
                <select value={this.state.yAxisMode}
                    onChange={this.onYAxisModeChanged}>
                    <option>PercentChange</option>
                    <option>Numeric</option>
                </select>
                <label className="options-item">
                    <input type="checkbox"
                        checked={this.state.yAxisIsLogarithmic}
                        onChange={this.onYAxisIsLogarithmicChanged}/> Y-Axis IsLogarithmic 
                </label>
            </div>
            <div className="container" style={{height: "calc(100% - 65px)"}}>
                <IgrFinancialChart
                    width="100%"
                    height="100%"
                    xAxisMode={this.state.xAxisMode}
                    yAxisMode={this.state.yAxisMode}
                    yAxisIsLogarithmic={this.state.yAxisIsLogarithmic}
                    chartType="Candle"
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

    public onYAxisIsLogarithmicChanged = (e: any) => {
        const setValue = e.target.checked;
        this.setState({yAxisIsLogarithmic: setValue});
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
ReactDOM.render(<FinancialChartAxisTypes />, document.getElementById('root'));
