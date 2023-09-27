import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrAvatarModule } from 'igniteui-react-webinputs';
import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrPinningConfig, IgrGridToolbar, IgrGridToolbarTitle, IgrGridToolbarActions, IgrGridToolbarPinning, IgrColumn } from 'igniteui-react-grids';
import { AthletesDataExtendedItem, AthletesDataExtended } from './AthletesDataExtended';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrAvatarModule,
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }
    private column1: IgrColumn
    private column2: IgrColumn

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="container fill">
                <IgrGrid
                    autoGenerate="false"
                    data={this.athletesDataExtended}
                    ref={this.gridRef}
                    id="grid">
                    <IgrPinningConfig
                        columns="End">
                    </IgrPinningConfig>
                    <IgrGridToolbar
                    >
                        <IgrGridToolbarTitle
                        >
                        </IgrGridToolbarTitle>
                        <IgrGridToolbarActions
                        >
                            <IgrGridToolbarPinning
                            >
                            </IgrGridToolbarPinning>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn
                        field="CountryFlag"
                        header="Team"
                        bodyTemplate={this.webGridImageCellTemplate}
                        name="column1">
                    </IgrColumn>
                    <IgrColumn
                        field="Avatar"
                        bodyTemplate={this.webGridAvatarCellTemplate}
                        name="column2">
                    </IgrColumn>
                    <IgrColumn
                        field="Name">
                    </IgrColumn>
                    <IgrColumn
                        field="AthleteNumber"
                        header="Athlete Number"
                        dataType="Number">
                    </IgrColumn>
                    <IgrColumn
                        field="BeatsPerMinute"
                        header="Beats Per Minute">
                    </IgrColumn>
                    <IgrColumn
                        field="TopSpeed"
                        header="Top Speed">
                    </IgrColumn>
                    <IgrColumn
                        field="RegistrationDate"
                        header="Registration Date"
                        dataType="Date">
                    </IgrColumn>
                    <IgrColumn
                        field="Birthday"
                        dataType="Date">
                    </IgrColumn>
                    <IgrColumn
                        field="Sponsor">
                    </IgrColumn>
                    <IgrColumn
                        field="Agent">
                    </IgrColumn>
                    <IgrColumn
                        field="AgentContact"
                        header="Agent Contact">
                    </IgrColumn>
                    <IgrColumn
                        field="AgentPhone"
                        header="Agent Phone">
                    </IgrColumn>
                    <IgrColumn
                        field="FirstPlaces"
                        header="Gold"
                        pinned="true">
                    </IgrColumn>
                    <IgrColumn
                        field="SecondPlaces"
                        header="Silver"
                        pinned="true">
                    </IgrColumn>
                    <IgrColumn
                        field="ThirdPlaces"
                        header="Bronze"
                        pinned="true">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _athletesDataExtended: AthletesDataExtended = null;
    public get athletesDataExtended(): AthletesDataExtended {
        if (this._athletesDataExtended == null)
        {
            this._athletesDataExtended = new AthletesDataExtended();
        }
        return this._athletesDataExtended;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);