import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import SingersData from './SingersData.json';
import { IgrRowDragEndEventArgs } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrHierarchicalGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private hierarchicalGrid: IgrHierarchicalGrid
    private hierarchicalGridRef(r: IgrHierarchicalGrid) {
        this.hierarchicalGrid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.hierarchicalGridRef = this.hierarchicalGridRef.bind(this);
        this.webHierarchicalGridReorderRowHandler = this.webHierarchicalGridReorderRowHandler.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate="false"
                    data={this.singersData}
                    ref={this.hierarchicalGridRef}
                    id="hierarchicalGrid"
                    primaryKey="ID"
                    rowDraggable="true"
                    rowDragEnd={this.webHierarchicalGridReorderRowHandler}>
                    <IgrColumn
                        field="Artist"
                        header="Artist"
                        dataType="String"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Photo"
                        header="Photo"
                        dataType="Image">
                    </IgrColumn>
                    <IgrColumn
                        field="Debut"
                        header="Debut"
                        dataType="Number"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyNominations"
                        header="Grammy Nominations"
                        dataType="Number"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyAwards"
                        header="Grammy Awards"
                        dataType="Number"
                        sortable="true">
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Albums"
                        autoGenerate="false">
                        <IgrColumn
                            field="Album"
                            header="Album"
                            dataType="String"
                            sortable="true">
                        </IgrColumn>
                        <IgrColumn
                            field="LaunchDate"
                            header="Launch Date"
                            dataType="Date"
                            sortable="true">
                        </IgrColumn>
                        <IgrColumn
                            field="BillboardReview"
                            header="Billboard Review"
                            dataType="String"
                            sortable="true">
                        </IgrColumn>
                        <IgrColumn
                            field="USBillboard200"
                            header="US Billboard 200"
                            dataType="String"
                            sortable="true">
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="Songs"
                            autoGenerate="false">
                            <IgrColumn
                                field="Number"
                                header="No."
                                dataType="String"
                                sortable="true">
                            </IgrColumn>
                            <IgrColumn
                                field="Title"
                                header="Title"
                                dataType="String"
                                sortable="true">
                            </IgrColumn>
                            <IgrColumn
                                field="Released"
                                header="Released"
                                dataType="Date"
                                sortable="true">
                            </IgrColumn>
                            <IgrColumn
                                field="Genre"
                                header="Genre"
                                dataType="String"
                                sortable="true">
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
                            sortable="true">
                        </IgrColumn>
                        <IgrColumn
                            field="StartedOn"
                            header="Started on"
                            dataType="String"
                            sortable="true">
                        </IgrColumn>
                        <IgrColumn
                            field="Location"
                            header="Location"
                            dataType="String"
                            sortable="true">
                        </IgrColumn>
                        <IgrColumn
                            field="Headliner"
                            header="Headliner"
                            dataType="String"
                            sortable="true">
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


    public webHierarchicalGridReorderRowHandler(sender: IgrHierarchicalGrid, args: IgrRowDragEndEventArgs): void {
        const ghostElement = args.detail.dragDirective.ghostElement;
        const dragElementPos = ghostElement.getBoundingClientRect();
        const grid = this.hierarchicalGrid;
        const rows = Array.prototype.slice.call(document.getElementsByTagName("igx-hierarchical-grid-row"));
        const currRowIndex = this.getCurrentRowIndex(rows,
        { x: dragElementPos.x, y: dragElementPos.y });
        if (currRowIndex === -1) { return; }
        // remove the row that was dragged and place it onto its new location
        grid.deleteRow(args.detail.dragData.key);
        grid.data.splice(currRowIndex, 0, args.detail.dragData.data);
    }

    public getCurrentRowIndex(rowList: any[], cursorPosition: any) {
        for (const row of rowList) {
            const rowRect = row.getBoundingClientRect();
            if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
                cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
                // return the index of the targeted row
                return parseInt(row.attributes["data-rowindex"].value);
            }
        }
        return -1;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);