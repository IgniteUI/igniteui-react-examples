import * as React from 'react';
import { DataGridSharedData } from './DataGridSharedData';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrTemplateColumn } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { IgrImageColumn } from 'igniteui-react-grids';
import { IgrGridColumnOptionsModule } from 'igniteui-react-grids';
import { IgrTemplateCellUpdatingEventArgs } from 'igniteui-react-grids';
import { IEditableDataSource } from 'igniteui-react-core';
import { IgrGridCellValueChangingEventArgs } from 'igniteui-react-grids';
import { EditModeType } from 'igniteui-react-grids';

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();

export default class DataGridCellEditing extends React.Component<any, any> {

    public data: any[];
    public grid: IgrDataGrid;
    public commitbutton: HTMLButtonElement;
    public undobutton: HTMLButtonElement;
    public redobutton: HTMLButtonElement;

    constructor(props: any) {
        super(props);
       
        this.state = { selectionMode: "MultipleRow" }
        this.data = DataGridSharedData.getEmployees();
        
    }

	public render(): JSX.Element {
        return (
            <div className="igContainer">
                <div className="igOptions">
                <button ref={this.onCommitButtonRef} disabled={false} onClick={this.onCommitClick}>Commit</button>
                    <button ref={this.onUndoButtonRef} disabled={false} onClick={this.onUndoClick}>Undo</button>
                    <button ref={this.onRedoButtonRef} disabled={false} onClick={this.onRedoClick}>Redo</button>
                    <label>
                        Edit Mode:
                        <select value={this.editMode} onChange={this.onEditModeChange}>
                            <option value="0">None</option>
                            <option value="1">Cell</option>
                            <option value="2">Cell Batch</option>
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
                    selectionMode="SingleRow"
                    selectionBehavior="ModifierBased"
                    isColumnOptionsEnabled="true"
                    cellValueChanging={this.onCellValueChanging}>
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

    get editMode(): number {
        if (this.grid) {
            return this.grid.editMode;
        }
        return 1;
    }

    onCommitButtonRef = (button: HTMLButtonElement) => {
        if (!button) { return; }

        this.commitbutton = button;
        this.commitbutton.disabled = true;
    }

    onUndoButtonRef = (button: HTMLButtonElement) => {
        if (!button) { return; }

        this.undobutton = button;
        this.undobutton.disabled = true;
    }

    onRedoButtonRef = (button: HTMLButtonElement) => {
        if (!button) { return; }

        this.redobutton = button;
        this.redobutton.disabled = true;
    }    

    onGridRef = (grid: IgrDataGrid) =>{
        if (!grid) { return; }

        this.grid = grid;       
    }

    //#region Input Control Handlers

    onCommitClick = () => {
        this.commitbutton.disabled = true;
        this.undobutton.disabled = true;
        this.grid.commitEdits();

        // request a new render so the undo/redo buttons update.
        this.setState({ });
    }

    onUndoClick = () => {
        this.undobutton.disabled = true;
        this.commitbutton.disabled = true;
        this.redobutton.disabled = false;
        this.grid.undo();

        // request a new render so the undo/redo buttons update.
        this.setState({ });
    }

    onRedoClick = () => {
        if(this.grid.editMode === EditModeType.Cell || this.grid.editMode === EditModeType.None) {
            this.commitbutton.disabled = true;
        }
        if(this.grid.editMode === EditModeType.CellBatch) {
            this.undobutton.disabled = false;
            this.commitbutton.disabled = false;
            this.redobutton.disabled = true;
        }        
        this.grid.redo();
        
        // request a new render so the undo/redo buttons update.
        this.setState({ });
    }

    onEditModeChange = (event: any) => {
        this.grid.editMode = parseInt(event.target.value);
        if(this.grid.editMode === EditModeType.None || this.grid.editMode === EditModeType.Cell) {
            this.commitbutton.disabled = true;
            this.undobutton.disabled = true;
            this.redobutton.disabled = true;
            //cancel any pending transactions
            this.grid.cancelEdits();
        }

        this.setState({ });
    }
    //#endregion
    
    //#region Grid Handlers
    onDeleteRowClick = (e: MouseEvent) => {
        const button = e.srcElement as HTMLButtonElement;
        const viewIndex = parseInt(button.id);
        const rowItem = this.grid.actualDataSource.getItemAtIndex(viewIndex);
        let t = (this.grid.actualDataSource as any) as IEditableDataSource;
        this.commitbutton.disabled = true;
        if(this.grid.editMode === EditModeType.CellBatch){
            //delete datasource row to create transaction
            this.commitbutton.disabled = false;
            this.undobutton.disabled = false;
            t.removeItemByKey([rowItem]);
            this.grid.notifySetItem(rowItem, rowItem, rowItem);
            
        }
        else if(this.grid.editMode === EditModeType.Cell) {
            //delete grid row immediately
            let index = this.data.indexOf(rowItem);
            this.data.splice(index, 1);
            this.grid.notifyRemoveItem(index, rowItem);
        }
        this.setState({ });
    }

    onCellValueChanging = (s: IgrDataGrid, e: IgrGridCellValueChangingEventArgs) => {

        if(e.newValue === "") {
            s.setEditError(e.editID, "Error, cell is empty");
            //or 
            //s.rejectEdit(e.editID);
        }

        if(this.grid.editMode === EditModeType.CellBatch){
            this.commitbutton.disabled = false;
        }
        else if(this.grid.editMode === EditModeType.Cell || this.grid.editMode === EditModeType.None) {
            this.commitbutton.disabled = true;
        }

        // request a new render so the undo/redo buttons update.
        setTimeout(() => this.setState({ }));

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
