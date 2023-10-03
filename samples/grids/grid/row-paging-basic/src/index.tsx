import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrLinearProgressModule } from 'igniteui-react-webinputs';
import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrPaginator, IgrColumn, IgrColumnPipeArgs } from 'igniteui-react-grids';
import { AthletesDataItem, AthletesData } from './AthletesData';
import { IgrCellTemplateContext } from 'igniteui-react-grids';
import { IgrLinearProgress } from 'igniteui-react';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrLinearProgressModule,
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
                    data={this.athletesData}
                    ref={this.gridRef}
                    id="grid">
                    <IgrPaginator
                        perPage="10">
                    </IgrPaginator>
                    <IgrColumn
                        field="Id"
                        header="Rank"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Name">
                    </IgrColumn>
                    <IgrColumn
                        field="BeatsPerMinute"
                        header="Beats Per Minute"
                        dataType="Number">
                    </IgrColumn>
                    <IgrColumn
                        field="TopSpeed"
                        header="Top Speed"
                        dataType="Number">
                        <IgrColumnPipeArgs
                            digitsInfo="1.1-5">
                        </IgrColumnPipeArgs>
                    </IgrColumn>
                    <IgrColumn
                        field="TrackProgress"
                        header="Track Progress"
                        bodyTemplate={this.webGridProgressCellTemplate}
                        name="column1">
                    </IgrColumn>
                    <IgrColumn
                        field="CountryFlag"
                        header="Country Flag"
                        bodyTemplate={this.webGridImageCellTemplate}
                        name="column2">
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


    public webGridProgressCellTemplate = (e: { dataContext: IgrCellTemplateContext }) => {
        const value = e.dataContext.cell.value;
        return (
            <div style={{width: '4rem'}}>
                <IgrLinearProgress value={value}></IgrLinearProgress>
            </div>
        );
    };

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