import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import StocksHistory from './StocksHistory';

IgrFinancialChartModule.register();

export default class FinancialChartTooltipTypes extends React.Component<any, any> {

    public data: any[];

    constructor(props: any) {
        super(props);
        this.state = { toolTipType: "Item", data:[] }
        this.initData();
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
            <div className="options horizontal">
                <label className="options-label">Tooltip Type: </label>
                <select value={this.state.toolTipType}
                    onChange={this.onToolTipTypeChanged}>
                    <option>Default</option>
                    <option>Item</option>
                    <option>Category</option>
                    <option>None</option>
                </select>
            </div>
            <div className="container" style={{height: "calc(100% - 65px)"}}>
                <IgrFinancialChart
                    width="100%"
                    height="100%"
                    chartType="Line"
                    zoomSliderType="None"
                    yAxisMode="PercentChange"
                    dataSource={this.state.data}
                    toolTipType={this.state.toolTipType}
                    thickness={2} />
            </div>
        </div>
        );
    }

    public onToolTipTypeChanged = (e: any) =>{
        this.setState({toolTipType: e.target.value});
    }

    public initData() {
        StocksHistory.getMultipleStocks().then((stocks: any[]) => {
            console.log("getMultipleStocks " + stocks.length);
            this.setState({ data: stocks });
        });
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FinancialChartTooltipTypes/>);
