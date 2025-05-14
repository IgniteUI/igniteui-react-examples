import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule, IgrActionStripModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrActionStrip, IgrGridEditingActions, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import SingersData from './SingersData.json';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrHierarchicalGridModule,
    IgrActionStripModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private hGrid: IgrHierarchicalGrid
    private hGridRef(r: IgrHierarchicalGrid) {
        this.hGrid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.hGridRef = this.hGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate="false"
                    data={this.singersData}
                    id="hGrid"
                    ref={this.hGridRef}
                    primaryKey="ID"
                    rowEditable="true">
                    <IgrActionStrip
                    >
                        <IgrGridEditingActions
                            addRow="true">
                        </IgrGridEditingActions>
                    </IgrActionStrip>
                    <IgrColumn
                        field="Artist"
                        header="Artist"
                        dataType="String"
                        resizable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Debut"
                        header="Debut"
                        dataType="Number"
                        minWidth="88px"
                        maxWidth="230px"
                        resizable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyNominations"
                        header="Grammy Nominations"
                        dataType="String"
                        resizable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyAwards"
                        header="Grammy Awards"
                        dataType="String"
                        resizable="true">
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Albums"
                        autoGenerate="false"
                        primaryKey="Album"
                        rowEditable="true">
                        <IgrColumn
                            field="Album"
                            header="Album"
                            dataType="String"
                            resizable="true">
                        </IgrColumn>
                        <IgrColumn
                            field="LaunchDate"
                            header="Launch Date"
                            dataType="Date"
                            resizable="true">
                        </IgrColumn>
                        <IgrColumn
                            field="BillboardReview"
                            header="Billboard Review"
                            dataType="String"
                            resizable="true">
                        </IgrColumn>
                        <IgrColumn
                            field="USBillboard200"
                            header="US Billboard 200"
                            dataType="String"
                            resizable="true">
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="Songs"
                            autoGenerate="false"
                            primaryKey="Title"
                            rowEditable="true">
                            <IgrActionStrip
                            >
                                <IgrGridEditingActions
                                    addRow="true">
                                </IgrGridEditingActions>
                            </IgrActionStrip>
                            <IgrColumn
                                field="Number"
                                header="No."
                                dataType="String"
                                resizable="true">
                            </IgrColumn>
                            <IgrColumn
                                field="Title"
                                header="Title"
                                dataType="String"
                                resizable="true">
                            </IgrColumn>
                            <IgrColumn
                                field="Released"
                                header="Released"
                                dataType="String"
                                resizable="true">
                            </IgrColumn>
                            <IgrColumn
                                field="Genre"
                                header="Genre"
                                dataType="String"
                                resizable="true">
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                    <IgrRowIsland
                        childDataKey="Tours"
                        autoGenerate="false"
                        primaryKey="Tour"
                        rowEditable="true">
                        <IgrActionStrip
                        >
                            <IgrGridEditingActions
                                addRow="true">
                            </IgrGridEditingActions>
                        </IgrActionStrip>
                        <IgrColumn
                            field="Tour"
                            header="Tour"
                            dataType="String"
                            resizable="true">
                        </IgrColumn>
                        <IgrColumn
                            field="StartedOn"
                            header="Started on"
                            dataType="String"
                            resizable="true">
                        </IgrColumn>
                        <IgrColumn
                            field="Location"
                            header="Location"
                            dataType="String"
                            resizable="true">
                        </IgrColumn>
                        <IgrColumn
                            field="Headliner"
                            header="Headliner"
                            dataType="String"
                            resizable="true">
                        </IgrColumn>
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

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);