import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrRowIsland } from 'igniteui-react-grids';
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
                    autoGenerate="false"
                    data={this.singersData}
                    primaryKey="ID"
                    id="hierarchicalGrid"
                    ref={this.hierarchicalGridRef}
                    rowEditable="true"
                    rendered={this.webHierarchicalGridRendered}
                    rowEditEnter={this.webHierarchicalGridRowEditEnter}
                    rowEdit={this.webHierarchicalGridRowEdit}
                    rowEditDone={this.webHierarchicalGridRowEditDone}
                    rowEditExit={this.webHierarchicalGridRowEditExit}
                    cellEditEnter={this.webHierarchicalGridCellEditEnter}
                    cellEdit={this.webHierarchicalGridCellEdit}
                    cellEditExit={this.webHierarchicalGridCellEditExit}
                    columns={["Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder"]}>
                    <IgrRowIsland
                        childDataKey="Albums"
                        autoGenerate="false"
                        name="rowIsland"
                        primaryKey="Album"
                        rowEditable="true"
                        rowEditEnter={this.webRowIslandGridRowEditEnter}
                        rowEdit={this.webRowIslandGridRowEdit}
                        rowEditDone={this.webRowIslandGridRowEditDone}
                        rowEditExit={this.webRowIslandGridRowEditExit}
                        cellEditEnter={this.webRowIslandGridCellEditEnter}
                        cellEdit={this.webRowIslandGridCellEdit}
                        cellEditExit={this.webRowIslandGridCellEditExit}
                        columns={["Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder"]}>
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