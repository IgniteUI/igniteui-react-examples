import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule, IgrRowDragEndEventArgs  } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import { SingersDataItem, SingersDataItem_ToursItem, SingersDataItem_AlbumsItem, SingersDataItem_AlbumsItem_SongsItem, SingersData } from './SingersData';

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

    private hierarchicalGrid2: IgrHierarchicalGrid
    private hierarchicalGrid2Ref(r: IgrHierarchicalGrid) {
        this.hierarchicalGrid2 = r;
        this.setState({});
    }

    

    constructor(props: any) {
        super(props);

        this.hierarchicalGrid1Ref = this.hierarchicalGrid1Ref.bind(this);
        this.hierarchicalGrid2Ref = this.hierarchicalGrid2Ref.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <div className="container horizontal wrapper">
                    <IgrHierarchicalGrid
                        autoGenerate="false"
                        data={this.singersData}
                        id="hierarchicalGrid1"
                        primaryKey="ID"
                        width="40%"
                        rowDraggable="true" 
                        rowDragEnd={this.onGridRowDragEnd}
                        ref={this.hierarchicalGrid1Ref}>
                        <IgrColumn
                            field="Artist"
                            header="Artist"
                            dataType="String"                            
                            width="100px">
                        </IgrColumn>                        
                        <IgrColumn
                            field="Debut"
                            header="Debut"
                            dataType="Number"
                            width="100px">
                        </IgrColumn>
                        <IgrColumn
                            field="GrammyNominations"
                            header="Grammy Nominations"
                            dataType="String"                            
                            width="100px">
                        </IgrColumn>
                        <IgrColumn
                            field="GrammyAwards"
                            header="Grammy Awards"
                            dataType="String"
                            width="100px">
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="Albums"
                            autoGenerate="false">
                            <IgrColumn
                                field="Album"
                                header="Album"
                                dataType="String"
                                width="100px">
                            </IgrColumn>
                            <IgrColumn
                                field="LaunchDate"
                                header="Launch Date"
                                dataType="Date"
                                width="100px">
                            </IgrColumn>
                            <IgrColumn
                                field="BillboardReview"
                                header="Billboard Review"
                                dataType="String"
                                width="100px">
                            </IgrColumn>
                            <IgrColumn
                                field="USBillboard200"
                                header="US Billboard 200"
                                dataType="String"
                                width="100px">
                            </IgrColumn>
                            <IgrRowIsland
                                childDataKey="Songs"
                                autoGenerate="false">
                                <IgrColumn
                                    field="Number"
                                    header="No."
                                    dataType="String"
                                    width="100px">
                                </IgrColumn>
                                <IgrColumn
                                    field="Title"
                                    header="Title"
                                    dataType="String"
                                    width="100px">
                                </IgrColumn>
                                <IgrColumn
                                    field="Released"
                                    header="Released"
                                    dataType="String"
                                    width="100px">
                                </IgrColumn>
                                <IgrColumn
                                    field="Genre"
                                    header="Genre"
                                    dataType="String"
                                    width="100px">
                                </IgrColumn>
                            </IgrRowIsland>
                        </IgrRowIsland>
                        <IgrRowIsland
                            childDataKey="Tours"
                            autoGenerate="false">
                            <IgrColumn
                                field="Tour"
                                header="Tour"
                                dataType="String"
                                width="100px">
                            </IgrColumn>
                            <IgrColumn
                                field="StartedOn"
                                header="Started on"
                                dataType="String"
                                width="100px">
                            </IgrColumn>
                            <IgrColumn
                                field="Location"
                                header="Location"
                                dataType="String"
                                width="100px">
                            </IgrColumn>
                            <IgrColumn
                                field="Headliner"
                                header="Headliner"
                                dataType="String"
                                width="100px">
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrHierarchicalGrid>

                    <IgrHierarchicalGrid
                        autoGenerate="false"
                        data={[]}
                        id="hierarchicalGrid2"
                        primaryKey="ID"
                        width="40%"
                        emptyGridMessage="Drag and Drop a row from the left grid to this grid"
                        ref={this.hierarchicalGrid2Ref}>
                        <IgrColumn
                            field="Artist"
                            header="Artist"
                            dataType="String"
                            width="100px">
                        </IgrColumn>                        
                        <IgrColumn
                            field="Debut"
                            header="Debut"
                            dataType="Number"                            
                            width="100px">
                        </IgrColumn>
                        <IgrColumn
                            field="GrammyNominations"
                            header="Grammy Nominations"
                            dataType="String"
                            width="100px">
                        </IgrColumn>
                        <IgrColumn
                            field="GrammyAwards"
                            header="Grammy Awards"
                            dataType="String"
                            width="100px">
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="Albums"
                            autoGenerate="false">
                            <IgrColumn
                                field="Album"
                                header="Album"
                                dataType="String"
                                width="100px">
                            </IgrColumn>
                            <IgrColumn
                                field="LaunchDate"
                                header="Launch Date"
                                dataType="Date"
                                width="100px">
                            </IgrColumn>
                            <IgrColumn
                                field="BillboardReview"
                                header="Billboard Review"
                                dataType="String"
                                width="100px">
                            </IgrColumn>
                            <IgrColumn
                                field="USBillboard200"
                                header="US Billboard 200"
                                dataType="String"
                                width="100px">
                            </IgrColumn>
                            <IgrRowIsland
                                childDataKey="Songs"
                                autoGenerate="false">
                                <IgrColumn
                                    field="Number"
                                    header="No."
                                    dataType="String"
                                    width="100px">
                                </IgrColumn>
                                <IgrColumn
                                    field="Title"
                                    header="Title"
                                    dataType="String"
                                    width="100px">
                                </IgrColumn>
                                <IgrColumn
                                    field="Released"
                                    header="Released"
                                    dataType="String"
                                    width="100px">
                                </IgrColumn>
                                <IgrColumn
                                    field="Genre"
                                    header="Genre"
                                    dataType="String"
                                    width="100px">
                                </IgrColumn>
                            </IgrRowIsland>
                        </IgrRowIsland>
                        <IgrRowIsland
                            childDataKey="Tours"
                            autoGenerate="false">
                            <IgrColumn
                                field="Tour"
                                header="Tour"
                                dataType="String"
                                width="100px">
                            </IgrColumn>
                            <IgrColumn
                                field="StartedOn"
                                header="Started on"
                                dataType="String"
                                width="100px">
                            </IgrColumn>
                            <IgrColumn
                                field="Location"
                                header="Location"
                                dataType="String"
                                width="100px">
                            </IgrColumn>
                            <IgrColumn
                                field="Headliner"
                                header="Headliner"
                                dataType="String"
                                width="100px">
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrHierarchicalGrid>           
                </div>
            </div>
        </div>
        );
    }   

    private onGridRowDragEnd = (grid: IgrHierarchicalGrid, evt: any) => {
        const ghostElement = evt.detail.dragDirective.ghostElement;
        if (ghostElement != null) {
            const dragElementPos = ghostElement.getBoundingClientRect();
            const gridPosition = document.getElementById("hierarchicalGrid2").getBoundingClientRect();
            
            const withinXBounds = dragElementPos.x >= gridPosition.x && dragElementPos.x <= gridPosition.x + gridPosition.width;
            const withinYBounds = dragElementPos.y >= gridPosition.y && dragElementPos.y <= gridPosition.y + gridPosition.height;
            if (withinXBounds && withinYBounds) {
                console.log(this.hierarchicalGrid2.data);
                const newData = [...this.hierarchicalGrid2.data];
                newData.push(evt.detail.dragData.data);
                this.hierarchicalGrid2.data = newData;               
            }            
        }
    };

    private _singersData: SingersData = null;
    public get singersData(): SingersData {
        if (this._singersData == null)
        {
            this._singersData = new SingersData();
        }
        return this._singersData;
    }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);