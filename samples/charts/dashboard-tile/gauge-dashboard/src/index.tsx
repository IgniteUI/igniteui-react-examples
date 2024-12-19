import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrDashboardTileModule, IgrDataChartDashboardTileModule, IgrGeographicMapDashboardTileModule, IgrLinearGaugeDashboardTileModule, IgrPieChartDashboardTileModule, IgrRadialGaugeDashboardTileModule } from 'igniteui-react-dashboards';
import { IgrDashboardTile } from 'igniteui-react-dashboards';

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
    public componentDidMount() {
        this.dashboardTileGaugeOnInit();
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="container fill">
                <IgrDashboardTile
                    tileTitle="Sample Gauge"
                    ref={this.dashboardRef}>
                </IgrDashboardTile>
            </div>
        </div>
        );
    }


    public dashboardTileGaugeOnInit(): void {

        var target = this.dashboard;

        target.dataSource = 40;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);