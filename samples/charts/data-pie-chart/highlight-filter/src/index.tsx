import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrDataPieChartModule } from 'igniteui-react-charts';
import { IgrDataPieChart } from 'igniteui-react-core';
import { ComponentRenderer, DataPieChartDescriptionModule } from 'igniteui-react-core';
import { OnlineTrafficHighlightTotalsItem, OnlineTrafficHighlightTotals } from './OnlineTrafficHighlightTotals';
import { OnlineTrafficHighlightDesktopOnlyItem, OnlineTrafficHighlightDesktopOnly } from './OnlineTrafficHighlightDesktopOnly';

const mods: any[] = [
    IgrDataPieChartModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private chart: IgrDataPieChart
    private chartRef(r: IgrDataPieChart) {
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
                <IgrDataPieChart
                    ref={this.chartRef}
                    dataSource={this.onlineTrafficHighlightTotals}
                    highlightedDataSource={this.onlineTrafficHighlightDesktopOnly}
                    highlightedValuesDisplayMode="Overlay">
                </IgrDataPieChart>
            </div>
        </div>
        );
    }

    private _onlineTrafficHighlightTotals: OnlineTrafficHighlightTotals = null;
    public get onlineTrafficHighlightTotals(): OnlineTrafficHighlightTotals {
        if (this._onlineTrafficHighlightTotals == null)
        {
            this._onlineTrafficHighlightTotals = new OnlineTrafficHighlightTotals();
        }
        return this._onlineTrafficHighlightTotals;
    }

    private _onlineTrafficHighlightDesktopOnly: OnlineTrafficHighlightDesktopOnly = null;
    public get onlineTrafficHighlightDesktopOnly(): OnlineTrafficHighlightDesktopOnly {
        if (this._onlineTrafficHighlightDesktopOnly == null)
        {
            this._onlineTrafficHighlightDesktopOnly = new OnlineTrafficHighlightDesktopOnly();
        }
        return this._onlineTrafficHighlightDesktopOnly;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            DataPieChartDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);