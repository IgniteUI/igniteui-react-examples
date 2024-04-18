import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrFinancialChart } from "@infragistics/igniteui-react-charts";
import { IgrFinancialChartModule } from "@infragistics/igniteui-react-charts";
import { StocksUtility } from './StocksUtility';

IgrFinancialChartModule.register();

export default class FinancialChartPanes extends React.Component<any, any> {

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
                        chartType="Candle"
                        zoomSliderType="Candle"
                        volumeType="Area"
                        overlayBrushes="rgba(5, 138, 0, 0.17)"
                        overlayOutlines="rgba(5, 138, 0, 0.4)"
                        overlayThickness={1}
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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FinancialChartPanes/>);
