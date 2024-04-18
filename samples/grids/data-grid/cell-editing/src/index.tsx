import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { DataGridSharedData } from './DataGridSharedData';
import { IgrDataGrid } from "@infragistics/igniteui-react-grids";
import { IgrDataGridModule } from "@infragistics/igniteui-react-grids";
import { IgrTemplateColumn } from "@infragistics/igniteui-react-grids";
import { IgrTextColumn } from "@infragistics/igniteui-react-grids";
import { IgrNumericColumn } from "@infragistics/igniteui-react-grids";
import { IgrDateTimeColumn } from "@infragistics/igniteui-react-grids";
import { IgrImageColumn } from "@infragistics/igniteui-react-grids";
import { IgrGridColumnOptionsModule } from "@infragistics/igniteui-react-grids";
import { IgrTemplateCellUpdatingEventArgs } from "@infragistics/igniteui-react-grids";
import { IgrGridCellValueChangingEventArgs } from "@infragistics/igniteui-react-grids";
import { IgrGridRowEditEndedEventArgs } from "@infragistics/igniteui-react-grids";
import { EditModeType } from "@infragistics/igniteui-react-grids";

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();

export default class DataGridCellEditing extends React.Component<any, any> {

    public data: any[];
    public grid: IgrDataGrid;

    public get canCommit(): boolean {
        return this.grid && this.grid.canCommit;
    }

    public get canUndo(): boolean {
        return this.grid && this.grid.canUndo;
    }

    public get canRedo(): boolean {
        return this.grid && this.grid.canRedo;
    }

    public get editMode(): number {
        if (this.grid) {
            return this.grid.editMode;
        }
        return 1;
    }

    constructor(props: any) {
        super(props);

        this.data = DataGridSharedData.getEmployees();

    }

    onGridRef = (grid: IgrDataGrid) => {
        if (!grid) { return; }

        this.grid = grid;
    }

    public get excelEditMode(): number {
        if (this.grid) {
            return this.grid.editModeClickAction;
        }
        return 1;
    }

	public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <button disabled={!this.canCommit} onClick={this.onCommitClick}>Commit</button>
                    <button disabled={!this.canUndo} onClick={this.onUndoClick}>Undo</button>
                    <button disabled={!this.canRedo} onClick={this.onRedoClick}>Redo</button>
                    <label>
                        Edit Mode:
                        <select value={this.editMode} onChange={this.onEditModeChange}>
                            <option value="0">None</option>
                            <option value="1">Cell</option>
                            <option value="2">CellBatch</option>
                            <option value="3">Row</option>
                        </select>
                    </label>
                    <label>
                        Excel Style Editing:
                        <select value={this.excelEditMode} onChange={this.onExcelEditModeChange}>
                            <option value="1">SingleClick</option>
                            <option value="2">DoubleClick</option>
                        </select>
                    </label>
                </div>
                <IgrDataGrid
                    ref={this.onGridRef}
                    height="calc(100% - 40px)"
                    width="100%"
                    defaultColumnMinWidth={120}
                    autoGenerateColumns={false}
                    dataSource={this.data}
                    activationMode="Cell"
                    editModeClickAction="SingleClick"
                    selectionMode="SingleRow"
                    selectionBehavior="ModifierBased"
                    isColumnOptionsEnabled="true"
                    cellValueChanging={this.onCellValueChanging}
                    rowEditEnded={this.onRowEditEnded}
                    >
                    <IgrTextColumn field="Name" width="*>150"/>
                    <IgrTextColumn field="Street" headerText="Street" width="*>160" />
                    <IgrTextColumn field="City" headerText="City" width="*>120" />
                    <IgrNumericColumn field="Salary" headerText="Salary" width="*>120" positivePrefix="$" showGroupingSeparator="true" />
                    <IgrImageColumn field="Photo" headerText="Photo" contentOpacity="1"
                    horizontalAlignment="center"  width="*>110"/>
                    <IgrDateTimeColumn field="Birthday" headerText="Date of Birth" width="*>170"/>
                    <IgrTemplateColumn isColumnOptionsEnabled="false" field="DeleteColumn" headerText="Delete Row" width="80" cellUpdating={this.onDeleteCellUpdating}/>
                </IgrDataGrid>
            </div>
        );
    }

    onExcelEditModeChange = (event: any) => {
        this.grid.editModeClickAction = parseInt(event.target.value);
        this.setState({ });
    }

    //#region Input Control Handlers

    onCommitClick = () => {
       this.grid.commitEdits();

        // request a new render so the undo/redo buttons update.
        this.setState({ });
    }

    onUndoClick = () => {
        this.grid.undo();

        // request a new render so the undo/redo buttons update.
        this.setState({ });
    }

    onRedoClick = () => {
        this.grid.redo();

        // request a new render so the undo/redo buttons update.
        this.setState({ });
    }

    onEditModeChange = (event: any) => {
        this.grid.cancelEdits();
        this.grid.editMode = parseInt(event.target.value);
        this.setState({ });
    }
    //#endregion

    //#region Grid Handlers
    onDeleteRowClick = (e: MouseEvent) => {
        const button = e.srcElement as HTMLButtonElement;
        const viewIndex = parseInt(button.id);
        const rowItem = this.grid.actualDataSource.getItemAtIndex(viewIndex);

        this.grid.removeItem(rowItem);
        this.setState({ });
    }

    onCellValueChanging = (s: IgrDataGrid, e: IgrGridCellValueChangingEventArgs) => {

        if(e.newValue === "") {

            s.setEditError(e.editID, "Error, cell is empty");
        }

        // request a new render so the undo/redo buttons update.
        setTimeout(() => this.setState({ }));

    }

    onRowEditEnded = (s: IgrDataGrid, e: IgrGridRowEditEndedEventArgs) => {
        this.setState({});
    }

    onDeleteCellUpdating = (s: IgrTemplateColumn, e: IgrTemplateCellUpdatingEventArgs) => {
        const content = e.content as HTMLDivElement;
        if (content.childElementCount === 0) {
            const button = document.createElement("button") as HTMLButtonElement;
            button.innerText = "Delete";
            button.addEventListener("click", this.onDeleteRowClick);
            content.appendChild(button);
        }

        const button = content.children[0] as HTMLButtonElement;
        button.disabled = e.cellInfo.isDeleted;
        button.id = e.cellInfo.dataRow.toString();
    }
    //#endregion
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataGridCellEditing/>);
