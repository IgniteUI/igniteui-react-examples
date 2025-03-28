import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrFinancialChartModule, IgrDataChartInteractivityModule, IgrDataLegendModule } from 'igniteui-react-charts';
import { IgrFinancialChart } from 'igniteui-react-charts';
import { StockGoogle } from './StockGoogle';

const mods: any[] = [
    IgrFinancialChartModule,
    IgrDataChartInteractivityModule,
    IgrDataLegendModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private chart: IgrFinancialChart
    private chartRef(r: IgrFinancialChart) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="container fill">
                <IgrFinancialChart
                    ref={this.chartRef}
                    isVerticalZoomEnabled="true"
                    isHorizontalZoomEnabled="true"
                    dataSource={this.stockGoogle}
                    toolTipType="Data"
                    dataToolTipIncludedColumns={["Open", "Close", "High", "Low", "Change"]}
                    dataToolTipLabelTextColor="rgba(74, 74, 74, 1)"
                    dataToolTipUnitsText="K"
                    dataToolTipUnitsTextColor="rgba(0, 173, 3, 1)"
                    dataToolTipUnitsTextStyle="normal bold 14px Verdana"
                    dataToolTipValueFormatMode="Currency"
                    dataToolTipValueTextColor="rgba(0, 173, 3, 1)"
                    dataToolTipValueTextStyle="normal bold 14px Verdana"
                    dataToolTipHeaderFormatTime="None"
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