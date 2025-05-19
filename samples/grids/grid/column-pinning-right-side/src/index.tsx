import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrAvatarModule } from 'igniteui-react';
import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrPinningConfig, ColumnPinningPosition, IgrGridToolbar, IgrGridToolbarTitle, IgrGridToolbarActions, IgrGridToolbarPinning, IgrColumn } from 'igniteui-react-grids';
import { AthletesDataExtendedItem, AthletesDataExtended } from './AthletesDataExtended';
import { IgrCellTemplateContext } from 'igniteui-react-grids';
import { IgrAvatar } from 'igniteui-react';

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
    private  _pinningConfig1: IgrPinningConfig | null = null;
    public get pinningConfig1(): IgrPinningConfig {
        if (this._pinningConfig1 == null)
        {
            var pinningConfig1: IgrPinningConfig = {} as IgrPinningConfig;
            pinningConfig1.columns = ColumnPinningPosition.End;

            this._pinningConfig1 = pinningConfig1;
        }
        return this._pinningConfig1;
    }
    private column1: IgrColumn
    private column2: IgrColumn

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    data={this.athletesDataExtended}
                    ref={this.gridRef}
                    id="grid"
                    pinning={this.pinningConfig1}>
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
                        dataType="number">
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
                        dataType="date">
                    </IgrColumn>
                    <IgrColumn
                        field="Birthday"
                        dataType="date">
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
                        pinned={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="SecondPlaces"
                        header="Silver"
                        pinned={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ThirdPlaces"
                        header="Bronze"
                        pinned={true}>
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


    public webGridImageCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        return (
            <div>
                <img src={props.dataContext.cell.value}
                 style={{
                     border: '1px solid black',
                     objectFit: 'fill',
                     height: '2rem',
                     width: '3rem'
                 }} />
            </div>
        );
    }

    public webGridAvatarCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        return (
            <div>
                <IgrAvatar shape='circle' src={props.dataContext.cell.value}>
                </IgrAvatar>
            </div>
        );
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);