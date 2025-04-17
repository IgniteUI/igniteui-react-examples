import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import SingersData from './SingersData.json';
import { IgrRowSelectionEventArgs, IgrGridEditEventArgs, IgrGridEditDoneEventArgs } from 'igniteui-react-grids';

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
    private rowIsland: IgrRowIsland

    constructor(props: any) {
        super(props);

        this.hierarchicalGridRef = this.hierarchicalGridRef.bind(this);
        this.webHierarchicalGridRendered = this.webHierarchicalGridRendered.bind(this);
        this.webHierarchicalGridRowEditEnter = this.webHierarchicalGridRowEditEnter.bind(this);
        this.webHierarchicalGridRowEdit = this.webHierarchicalGridRowEdit.bind(this);
        this.webHierarchicalGridRowEditDone = this.webHierarchicalGridRowEditDone.bind(this);
        this.webHierarchicalGridRowEditExit = this.webHierarchicalGridRowEditExit.bind(this);
        this.webHierarchicalGridCellEditEnter = this.webHierarchicalGridCellEditEnter.bind(this);
        this.webHierarchicalGridCellEdit = this.webHierarchicalGridCellEdit.bind(this);
        this.webHierarchicalGridCellEditExit = this.webHierarchicalGridCellEditExit.bind(this);
        this.webRowIslandGridRowEditEnter = this.webRowIslandGridRowEditEnter.bind(this);
        this.webRowIslandGridRowEdit = this.webRowIslandGridRowEdit.bind(this);
        this.webRowIslandGridRowEditDone = this.webRowIslandGridRowEditDone.bind(this);
        this.webRowIslandGridRowEditExit = this.webRowIslandGridRowEditExit.bind(this);
        this.webRowIslandGridCellEditEnter = this.webRowIslandGridCellEditEnter.bind(this);
        this.webRowIslandGridCellEdit = this.webRowIslandGridCellEdit.bind(this);
        this.webRowIslandGridCellEditExit = this.webRowIslandGridCellEditExit.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate={false}
                    data={this.singersData}
                    primaryKey="ID"
                    id="hierarchicalGrid"
                    rowEditable={true}
                    onRendered={this.webHierarchicalGridRendered}
                    onRowEditEnter={this.webHierarchicalGridRowEditEnter}
                    onRowEdit={this.webHierarchicalGridRowEdit}
                    onRowEditDone={this.webHierarchicalGridRowEditDone}
                    onRowEditExit={this.webHierarchicalGridRowEditExit}
                    onCellEditEnter={this.webHierarchicalGridCellEditEnter}
                    onCellEdit={this.webHierarchicalGridCellEdit}
                    onCellEditExit={this.webHierarchicalGridCellEditExit}>
                    <IgrColumn
                        field="Artist"
                        header="Artist"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="HasGrammyAward"
                        header="Has Grammy Award"
                        dataType="boolean">
                    </IgrColumn>
                    <IgrColumn
                        field="Debut"
                        header="Debut"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyNominations"
                        header="Grammy Nominations"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyAwards"
                        header="Grammy Awards"
                        dataType="number">
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Albums"
                        autoGenerate={false}
                        primaryKey="Album"
                        rowEditable={true}
                        onRowEditEnter={this.webRowIslandGridRowEditEnter}
                        onRowEdit={this.webRowIslandGridRowEdit}
                        onRowEditDone={this.webRowIslandGridRowEditDone}
                        onRowEditExit={this.webRowIslandGridRowEditExit}
                        onCellEditEnter={this.webRowIslandGridCellEditEnter}
                        onCellEdit={this.webRowIslandGridCellEdit}
                        onCellEditExit={this.webRowIslandGridCellEditExit}>
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


    public webHierarchicalGridRendered(args:any): void {
        const hierarchicalGrid = document.getElementById("hierarchicalGrid");
        hierarchicalGrid.parentElement.className = "fill";
        hierarchicalGrid.parentElement.style.display = "flex";
        hierarchicalGrid.parentElement.style.height = "100vh";
        const container = document.createElement("div");
        container.id = "container";
        container.style.height = "80vh";
        container.style.width = "100%";
        container.style.overflow = "auto";
        hierarchicalGrid.parentElement.appendChild(container);
        const title = document.createElement("span");
        title.textContent = "Events execution sequence:";
        container.appendChild(title);
    }

    public webHierarchicalGridRowEditEnter(sender: IgrHierarchicalGrid, args: IgrGridEditEventArgs): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Hierarchical Grid => 'rowEditEnter' with 'RowID':` + args.detail.rowID;
        container.appendChild(message);
    }

    public webHierarchicalGridRowEdit(sender: IgrHierarchicalGrid, args: IgrGridEditEventArgs): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Hierarchical Grid => 'rowEdit'`;
        container.appendChild(message);
    }

    public webHierarchicalGridRowEditDone(sender: IgrHierarchicalGrid, args: IgrGridEditDoneEventArgs): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Hierarchical Grid => 'rowEditDone'`;
        container.appendChild(message);
    }

    public webHierarchicalGridRowEditExit(sender: IgrHierarchicalGrid, args: IgrGridEditDoneEventArgs): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Hierarchical Grid => 'rowEditExit'  << End of cycle >>`;
        container.appendChild(message);
    }

    public webHierarchicalGridCellEditEnter(sender: IgrHierarchicalGrid, args: IgrGridEditEventArgs): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Hierarchical Grid => 'cellEditEnter' with 'value':` + args.detail.oldValue, args.detail.cancel;
        container.appendChild(message);
    }

    public webHierarchicalGridCellEdit(sender: IgrHierarchicalGrid, args: IgrGridEditEventArgs): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Hierarchical Grid => 'cellEdit' with 'newValue':` + args.detail.newValue, args.detail.cancel;
        container.appendChild(message);
    }

    public webHierarchicalGridCellEditExit(sender: IgrHierarchicalGrid, args: IgrGridEditDoneEventArgs): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Hierarchical Grid => 'cellEditExit'`;
        container.appendChild(message);
    }

    public webRowIslandGridRowEditEnter(sender: IgrRowIsland, args: IgrGridEditEventArgs): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Row Island => 'rowEditEnter' with 'RowID':` + args.detail.rowID;
        container.appendChild(message);
    }

    public webRowIslandGridRowEdit(sender: IgrRowIsland, args: IgrGridEditEventArgs): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Row Island => 'rowEdit'`;
        container.appendChild(message);
    }

    public webRowIslandGridRowEditDone(sender: IgrRowIsland, args: IgrGridEditDoneEventArgs): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Row Island => 'rowEditDone'`;
        container.appendChild(message);
    }

    public webRowIslandGridRowEditExit(sender: IgrRowIsland, args: IgrGridEditDoneEventArgs): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Row Island => 'rowEditExit'  << End of cycle >>`;
        container.appendChild(message);
    }

    public webRowIslandGridCellEditEnter(sender: IgrRowIsland, args: IgrGridEditEventArgs): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Row Island => 'cellEditEnter' with 'value':` + args.detail.oldValue, args.detail.cancel;
        container.appendChild(message);
    }

    public webRowIslandGridCellEdit(sender: IgrRowIsland, args: IgrGridEditEventArgs): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Row Island => 'cellEdit' with 'newValue':` + args.detail.newValue, args.detail.cancel;
        container.appendChild(message);
    }

    public webRowIslandGridCellEditExit(sender: IgrRowIsland, args: IgrGridEditDoneEventArgs): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `Row Island => 'cellEditExit'`;
        container.appendChild(message);
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);