import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrDashboardTileModule, IgrDataChartDashboardTileModule, IgrGeographicMapDashboardTileModule, IgrLinearGaugeDashboardTileModule, IgrPieChartDashboardTileModule, IgrRadialGaugeDashboardTileModule } from 'igniteui-react-dashboards';
import { IgrDashboardTile } from 'igniteui-react-dashboards';
import { OlympicMedalsTopCountriesItem, OlympicMedalsTopCountries } from './OlympicMedalsTopCountries';

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
                    dataSource={this.olympicMedalsTopCountries}>
                </IgrDashboardTile>
            </div>
        </div>
        );
    }

    private _olympicMedalsTopCountries: OlympicMedalsTopCountries = null;
    public get olympicMedalsTopCountries(): OlympicMedalsTopCountries {
        if (this._olympicMedalsTopCountries == null)
        {
            this._olympicMedalsTopCountries = new OlympicMedalsTopCountries();
        }
        return this._olympicMedalsTopCountries;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);