import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import { SingersDataItem, SingersDataItem_ToursItem, SingersDataItem_AlbumsItem, SingersDataItem_AlbumsItem_SongsItem, SingersData } from './SingersData';
import { IgrRowType } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrHierarchicalGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private hierarchicalGrid1: IgrHierarchicalGrid
    private hierarchicalGrid1Ref(r: IgrHierarchicalGrid) {
        this.hierarchicalGrid1 = r;
        this.setState({});
    }
    private rowIsland1: IgrRowIsland
    private rowIsland2: IgrRowIsland
    private rowIsland3: IgrRowIsland

    constructor(props: any) {
        super(props);

        this.hierarchicalGrid1Ref = this.hierarchicalGrid1Ref.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate="false"
                    data={this.singersData}
                    primaryKey="ID"
                    rowClasses={this.webGridRowClassesHandler}
                    ref={this.hierarchicalGrid1Ref}>
                    <IgrColumn
                        field="Artist"
                        header="Artist"
                        dataType="String"
                        resizable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Photo"
                        header="Photo"
                        dataType="Image"
                        minWidth="115px"
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
                        rowClasses={this.webGridRowClassesHandler}
                        name="rowIsland1">
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
                            rowClasses={this.webGridRowClassesHandler}
                            name="rowIsland2">
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
                        rowClasses={this.webGridRowClassesHandler}
                        name="rowIsland3">
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

    private _singersData: SingersData = null;
    public get singersData(): SingersData {
        if (this._singersData == null)
        {
            this._singersData = new SingersData();
        }
        return this._singersData;
    }


    public webGridRowClassesHandler = {
      activeRow: (row: IgrRowType) => row.index % 2 === 0
    };

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);