import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrFinancialChartModule, IgrDataChartInteractivityModule, IgrLegendModule } from 'igniteui-react-charts';
import { IgrFinancialChart } from 'igniteui-react-charts';
import { MultipleStocks } from './MultipleStocks';

const mods: any[] = [
    IgrFinancialChartModule,
    IgrDataChartInteractivityModule,
    IgrLegendModule
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
                    isToolbarVisible="false"
                    isVerticalZoomEnabled="true"
                    isHorizontalZoomEnabled="true"
                    dataSource={this.multipleStocks}
                    verticalViewScrollbarMode="Fading"
                    horizontalViewScrollbarMode="Persistent"
                    zoomSliderType="None"
                    windowRect="0, 0, 0.5, 1">
                </IgrFinancialChart>
            </div>
        </div>
        );
    }

    private _multipleStocks: MultipleStocks = null;
    private _isFetching: boolean = false;
    public get multipleStocks(): MultipleStocks {
        if (this._multipleStocks == null && !this._isFetching)
        {
            this._isFetching = true;
            ( async () => { this._multipleStocks = await (await MultipleStocks.fetch()); this.setState({});  })();
        }
        return this._multipleStocks;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);