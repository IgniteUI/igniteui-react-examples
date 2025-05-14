import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrDashboardTileModule, IgrDataChartDashboardTileModule, IgrGeographicMapDashboardTileModule, IgrLinearGaugeDashboardTileModule, IgrPieChartDashboardTileModule, IgrRadialGaugeDashboardTileModule } from 'igniteui-react-dashboards';
import { IgrDashboardTile } from 'igniteui-react-dashboards';
import { RetailSalesPerformanceLocalDataSource } from './RetailSalesPerformanceLocalDataSource';

const mods: any[] = [
    IgrDashboardTileModule,
    IgrDataChartDashboardTileModule,
    IgrGeographicMapDashboardTileModule,
    IgrLinearGaugeDashboardTileModule,
    IgrPieChartDashboardTileModule,
    IgrRadialGaugeDashboardTileModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private dashboard: IgrDashboardTile
    private dashboardRef(r: IgrDashboardTile) {
        this.dashboard = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.dashboardRef = this.dashboardRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="container fill">
                <IgrDashboardTile
                    ref={this.dashboardRef}
                    dataSource={this.retailSalesPerformanceLocalDataSource}>
                </IgrDashboardTile>
            </div>
        </div>
        );
    }

    private _retailSalesPerformanceLocalDataSource: RetailSalesPerformanceLocalDataSource = null;
    public get retailSalesPerformanceLocalDataSource(): RetailSalesPerformanceLocalDataSource {
        if (this._retailSalesPerformanceLocalDataSource == null)
        {
            this._retailSalesPerformanceLocalDataSource = new RetailSalesPerformanceLocalDataSource();
        }
        return this._retailSalesPerformanceLocalDataSource;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);