import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { AthletesDataItem, AthletesData } from './AthletesData';
import { IgrCellTemplateContext } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }

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
                    ref={this.gridRef}
                    data={this.athletesData}>
                    <IgrColumn
                        field="Id"
                        header="Rank"
                        sortable={true}
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Name"
                        header="Athlete"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="BeatsPerMinute"
                        header="Beats per Minute"
                        dataType="number"
                        editable={true}
                        sortable={true}
                        cellClasses={this.webGridBeatsPerMinuteCellClassesHandler}>
                    </IgrColumn>
                    <IgrColumn
                        field="TopSpeed"
                        header="Top Speed"
                        dataType="number"
                        editable={true}
                        sortable={true}
                        cellClasses={this.webGridTopSpeedCellClassesHandler}>
                    </IgrColumn>
                    <IgrColumn
                        field="TrackProgress"
                        header="Track Progress"
                        editable={true}
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="CountryFlag"
                        header="Country"
                        bodyTemplate={this.webGridImageCellTemplate}>
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _athletesData: AthletesData = null;
    public get athletesData(): AthletesData {
        if (this._athletesData == null)
        {
            this._athletesData = new AthletesData();
        }
        return this._athletesData;
    }


    public webGridBeatsPerMinuteCellClassesHandler = {
        upFont: (rowData: any, columnKey: any): boolean => rowData[columnKey] > 95,
        downFont: (rowData: any, columnKey: any): boolean => rowData[columnKey] <= 95
    }

    public webGridTopSpeedCellClassesHandler = {
        topSpeed: (rowData: any, columnKey: any): boolean => rowData[columnKey] < 5
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

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);