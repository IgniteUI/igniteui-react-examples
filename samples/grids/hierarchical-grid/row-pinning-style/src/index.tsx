import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrPinningConfig, RowPinningPosition, ColumnPinningPosition, IgrColumn, IgrActionStrip, IgrGridPinningActions, IgrRowIsland } from 'igniteui-react-grids';
import SingersData from './SingersData.json';
import { IgrGrid } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrHierarchicalGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrHierarchicalGrid
    private gridRef(r: IgrHierarchicalGrid) {
        this.grid = r;
        this.setState({});
    }
    private  _pinningConfig1: IgrPinningConfig | null = null;
    public get pinningConfig1(): IgrPinningConfig {
        if (this._pinningConfig1 == null)
        {
            var pinningConfig1: IgrPinningConfig = {} as IgrPinningConfig;
            pinningConfig1.rows = RowPinningPosition.Top;
            pinningConfig1.columns = ColumnPinningPosition.End;

            this._pinningConfig1 = pinningConfig1;
        }
        return this._pinningConfig1;
    }
    private actionStrip1: IgrActionStrip
    private  _pinningConfig2: IgrPinningConfig | null = null;
    public get pinningConfig2(): IgrPinningConfig {
        if (this._pinningConfig2 == null)
        {
            var pinningConfig2: IgrPinningConfig = {} as IgrPinningConfig;
            pinningConfig2.rows = RowPinningPosition.Top;
            pinningConfig2.columns = ColumnPinningPosition.End;

            this._pinningConfig2 = pinningConfig2;
        }
        return this._pinningConfig2;
    }
    private actionStrip2: IgrActionStrip

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
        this.webHierarchicalGridPinRowOnRendered = this.webHierarchicalGridPinRowOnRendered.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate={false}
                    data={this.singersData}
                    primaryKey="Photo"
                    id="grid"
                    cellSelection="none"
                    rendered={this.webHierarchicalGridPinRowOnRendered}
                    pinning={this.pinningConfig1}>
                    <IgrColumn
                        field="Artist"
                        header="Artist"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="Photo"
                        header="Photo"
                        dataType="image"
                        minWidth="115px">
                    </IgrColumn>
                    <IgrColumn
                        field="Debut"
                        header="Debut"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyNominations"
                        header="Grammy Nominations"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyAwards"
                        header="Grammy Awards"
                        dataType="string">
                    </IgrColumn>
                    <IgrActionStrip
                    >
                        <IgrGridPinningActions
                        >
                        </IgrGridPinningActions>
                    </IgrActionStrip>
                    <IgrRowIsland
                        childDataKey="Albums"
                        primaryKey="Album"
                        cellSelection="none"
                        autoGenerate={false}
                        pinning={this.pinningConfig2}>
                        <IgrColumn
                            field="Album"
                            header="Album"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="LaunchDate"
                            header="Launch Date"
                            dataType="date">
                        </IgrColumn>
                        <IgrColumn
                            field="BillboardReview"
                            header="Billboard Review"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="USBillboard200"
                            header="US Billboard 200"
                            dataType="string">
                        </IgrColumn>
                        <IgrActionStrip
                        >
                            <IgrGridPinningActions
                            >
                            </IgrGridPinningActions>
                        </IgrActionStrip>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _singersData: any[] = SingersData;
    public get singersData(): any[] {
        return this._singersData;
    }


    public webHierarchicalGridPinRowOnRendered(): void {
        var hierarchicalGrid = this.grid;
        hierarchicalGrid.pinRow(hierarchicalGrid.data[0].Photo);
        hierarchicalGrid.pinRow(hierarchicalGrid.data[1].Photo);
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);