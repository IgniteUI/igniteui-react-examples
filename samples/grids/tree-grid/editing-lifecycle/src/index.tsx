import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrColumn } from 'igniteui-react-grids';
import { EmployeesFlatDataItem, EmployeesFlatData } from './EmployeesFlatData';
import { IgrGridEditEventArgs, IgrGrid, IgrGridEditDoneEventArgs } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrTreeGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrTreeGrid
    private gridRef(r: IgrTreeGrid) {
        this.grid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
        this.webTreeGridRendered = this.webTreeGridRendered.bind(this);
        this.webGridRowEditEnter = this.webGridRowEditEnter.bind(this);
        this.webGridRowEdit = this.webGridRowEdit.bind(this);
        this.webGridRowEditDone = this.webGridRowEditDone.bind(this);
        this.webGridRowEditExit = this.webGridRowEditExit.bind(this);
        this.webGridCellEditEnter = this.webGridCellEditEnter.bind(this);
        this.webGridCellEdit = this.webGridCellEdit.bind(this);
        this.webGridCellEditDone = this.webGridCellEditDone.bind(this);
        this.webGridCellEditExit = this.webGridCellEditExit.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrTreeGrid
                    autoGenerate={false}
                    data={this.employeesFlatData}
                    ref={this.gridRef}
                    id="grid"
                    rowEditable={true}
                    primaryKey="ID"
                    foreignKey="ParentID"
                    onRendered={this.webTreeGridRendered}
                    onRowEditEnter={this.webGridRowEditEnter}
                    onRowEdit={this.webGridRowEdit}
                    onRowEditDone={this.webGridRowEditDone}
                    onRowEditExit={this.webGridRowEditExit}
                    onCellEditEnter={this.webGridCellEditEnter}
                    onCellEdit={this.webGridCellEdit}
                    onCellEditDone={this.webGridCellEditDone}
                    onCellEditExit={this.webGridCellEditExit}>
                    <IgrColumn
                        field="Name"
                        dataType="string"
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Title"
                        header="Job Title"
                        dataType="string"
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Age"
                        dataType="number"
                        editable={true}>
                    </IgrColumn>
                </IgrTreeGrid>
            </div>
        </div>
        );
    }

    private _employeesFlatData: EmployeesFlatData = null;
    public get employeesFlatData(): EmployeesFlatData {
        if (this._employeesFlatData == null)
        {
            this._employeesFlatData = new EmployeesFlatData();
        }
        return this._employeesFlatData;
    }


    public webTreeGridRendered(args:any): void {
        const treeGrid = document.getElementById("grid");
        treeGrid.parentElement.className = "fill";
        treeGrid.parentElement.style.display = "flex";
        treeGrid.parentElement.style.height = "100vh";
        const container = document.createElement("div");
        container.id = "container";
        container.style.height = "100vh";
        container.style.width = "100%";
        container.style.overflow = "auto";
        treeGrid.parentElement.appendChild(container);
        const title = document.createElement("span");
        title.textContent = "Events execution sequence:";
        container.appendChild(title);
    }

    public webGridRowEditEnter(args: IgrGridEditEventArgs): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `=> 'rowEditEnter' with 'RowID':` + args.detail.rowID;
        container.appendChild(message);
    }

    public webGridRowEdit(args: IgrGridEditEventArgs): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `=> 'rowEdit'`;
        container.appendChild(message);
    }

    public webGridRowEditDone(args: IgrGridEditDoneEventArgs): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `=> 'rowEditDone'`;
        container.appendChild(message);
    }

    public webGridRowEditExit(args: IgrGridEditDoneEventArgs): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `=> 'rowEditExit'  << End of cycle >>`;
        container.appendChild(message);
    }

    public webGridCellEditEnter(args: IgrGridEditEventArgs): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `=> 'cellEditEnter' with 'value':` + args.detail.oldValue, args.detail.cancel;
        container.appendChild(message);
    }

    public webGridCellEdit(args: IgrGridEditEventArgs): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `=> 'cellEdit' with 'newValue':` + args.detail.newValue, args.detail.cancel;
        container.appendChild(message);
    }

    public webGridCellEditDone(args: IgrGridEditDoneEventArgs): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `=> 'cellEditDone'`;
        container.appendChild(message);
    }

    public webGridCellEditExit(args: IgrGridEditDoneEventArgs): void {
        let container = document.getElementById("container");
        const message = document.createElement("p");
        message.textContent = `=> 'cellEditExit'`;
        container.appendChild(message);
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);