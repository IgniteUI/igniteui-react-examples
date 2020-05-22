import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import * as React from 'react';
import StocksHistory from '/StocksHistory';

IgrFinancialChartModule.register();

export default class FinancialChartTrendlines extends React.Component<any, any> {

    public data: any[];

    constructor(props: any) {
        super(props);

        this.state = { trendLineType: "QuinticFit", data:[] }
        this.initData();
    }

    public render() {
        return (
        <div className="igContainer">
            <div className="igOptions">
                <label className="igOptions-label">Trendline Type:</label>
                <select value={this.state.trendLineType}
                    onChange={this.onTrendlineChanged}>
                    <option>CubicFit</option>
                    <option>LinearFit</option>
                    <option>QuinticFit</option>
                    <option>QuarticFit</option>
                    <option>ExponentialFit</option>
                    <option>PowerLawFit</option>
                    <option>LogarithmicFit</option>
                    <option>CumulativeAverage</option>
                    <option>ExponentialAverage</option>
                    <option>SimpleAverage</option>
                    <option>ModifiedAverage</option>
                    <option>WeightedAverage</option>
                    <option>None</option>
                </select>
            </div>

            <div className="igComponent" style={{height: "calc(100% - 65px)"}}>
                <IgrFinancialChart
                    width="100%"
                    height="100%"
                    trendLineType={this.state.trendLineType}
                    trendLineThickness={2}
                    trendLinePeriod={10}
                    trendLineBrushes="rgba(5, 138, 0, 1), rgba(0, 101, 209, 1)"
                    brushes="rgba(5, 138, 0, 1), rgba(0, 101, 209, 1)"
                    chartTitle="Tesla vs Amazon Trend"
                    subtitle="Between 2013 and 2017"
                    dataSource={this.state.data}
                    zoomSliderType="None"
                    chartType="Line" />
            </div>
        </div>
        );
    }

    public onTrendlineChanged = (e: any) =>{
        const mode = e.target.value;
        this.setState({trendLineType: mode});
    }

    public initData() {
        StocksHistory.getMultipleStocks().then((stocks: any[]) => {
            console.log("getMultipleStocks " + stocks.length);
            this.setState({ data: stocks });
        });
    }
}
