import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrFinancialChartModule, IgrDataChartInteractivityModule, IgrDataLegendModule } from 'igniteui-react-charts';
import { IgrDataLegend, IgrFinancialChart } from 'igniteui-react-charts';
import { StockGoogleItem, StockGoogle } from './StockGoogle';

const mods: any[] = [
    IgrFinancialChartModule,
    IgrDataChartInteractivityModule,
    IgrDataLegendModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrDataLegend
    private legendRef(r: IgrDataLegend) {
        this.legend = r;
        this.setState({});
    }
    private chart: IgrFinancialChart
    private chartRef(r: IgrFinancialChart) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public componentDidMount() {
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend">
                <IgrDataLegend
                    ref={this.legendRef}
                    target={this.chart}
                    includedColumns={["Open", "Close", "High", "Low", "Change"]}
                    labelTextColor="rgba(74, 74, 74, 1)"
                    unitsText="K"
                    unitsTextColor="rgba(0, 173, 3, 1)"
                    unitsTextStyle="normal bold 14px Verdana"
                    valueFormatMode="Currency"
                    valueTextColor="rgba(0, 173, 3, 1)"
                    valueTextStyle="normal bold 14px Verdana">
                </IgrDataLegend>
            </div>

            <div className="container fill">
                <IgrFinancialChart
                    ref={this.chartRef}
                    isVerticalZoomEnabled="true"
                    isHorizontalZoomEnabled="true"
                    dataSource={this.stockGoogle}
                    toolTipType="None"
                    yAxisTitle="Thousands of Dollars ($)"
                    zoomSliderType="None">
                </IgrFinancialChart>
            </div>
        </div>
        );
    }

    private _stockGoogle: StockGoogle = null;
    public get stockGoogle(): StockGoogle {
        if (this._stockGoogle == null)
        {
            this._stockGoogle = new StockGoogle();
        }
        return this._stockGoogle;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);