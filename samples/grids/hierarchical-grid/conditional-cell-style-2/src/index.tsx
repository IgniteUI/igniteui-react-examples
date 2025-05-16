import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import SingersData from './SingersData.json';
import { IgrPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-react-layouts';
import { IgrGrid, IgrRowType } from 'igniteui-react-grids';

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
    private column1: IgrColumn
    private column2: IgrColumn
    private column3: IgrColumn
    private column4: IgrColumn
    private column5: IgrColumn
    private column6: IgrColumn

    constructor(props: any) {
        super(props);

        this.hierarchicalGrid1Ref = this.hierarchicalGrid1Ref.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate={false}
                    data={this.singersData}
                    primaryKey="ID"
                    ref={this.hierarchicalGrid1Ref}>
                    <IgrColumn
                        field="Artist"
                        header="Artist"
                        dataType="string"
                        resizable={true}
                        cellStyles={this.webHierarchicalGridCellStylesHandler}
                        name="column1">
                    </IgrColumn>
                    <IgrColumn
                        field="HasGrammyAward"
                        header="Has Grammy Award?"
                        dataType="boolean"
                        resizable={true}
                        cellStyles={this.webHierarchicalGridCellStylesHandler}
                        name="column2">
                    </IgrColumn>
                    <IgrColumn
                        field="Photo"
                        header="Photo"
                        dataType="image"
                        minWidth="115px"
                        resizable={true}
                        cellStyles={this.webHierarchicalGridCellStylesHandler}
                        name="column3">
                    </IgrColumn>
                    <IgrColumn
                        field="Debut"
                        header="Debut"
                        dataType="number"
                        minWidth="88px"
                        maxWidth="230px"
                        resizable={true}
                        cellStyles={this.webHierarchicalGridCellStylesHandler}
                        name="column4">
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyNominations"
                        header="Grammy Nominations"
                        dataType="string"
                        resizable={true}
                        cellStyles={this.webHierarchicalGridCellStylesHandler}
                        name="column5">
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyAwards"
                        header="Grammy Awards"
                        dataType="string"
                        resizable={true}
                        cellStyles={this.webHierarchicalGridCellStylesHandler}
                        name="column6">
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Albums"
                        autoGenerate={false}>
                        <IgrColumn
                            field="Album"
                            header="Album"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="LaunchDate"
                            header="Launch Date"
                            dataType="date"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="BillboardReview"
                            header="Billboard Review"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="USBillboard200"
                            header="US Billboard 200"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="Songs"
                            autoGenerate={false}>
                            <IgrColumn
                                field="Number"
                                header="No."
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Title"
                                header="Title"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Released"
                                header="Released"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Genre"
                                header="Genre"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                    <IgrRowIsland
                        childDataKey="Tours"
                        autoGenerate={false}>
                        <IgrColumn
                            field="Tour"
                            header="Tour"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="StartedOn"
                            header="Started on"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="Location"
                            header="Location"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="Headliner"
                            header="Headliner"
                            dataType="string"
                            resizable={true}>
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


    public webHierarchicalGridCellStylesHandler = {
        background: (rowData: any, columnKey: any, cellValue: any, rowIndex: any) => rowIndex % 2 === 0 ? "#EFF4FD" : null,
        color: (rowData: any, columnKey: any, cellValue: any, rowIndex: any) => {
            if (columnKey === "Debut") {
                return cellValue > 2000 ? "#28a745" : "#dc3545";
            }
            return undefined;
        }
    };

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);