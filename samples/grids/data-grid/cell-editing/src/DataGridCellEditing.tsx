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
    public commitButton: HTMLButtonElement;
    public undoButton: HTMLButtonElement;
    public redoButton: HTMLButtonElement;

    constructor(props: any) {
        super(props);
       
        this.state = { selectionMode: "MultipleRow" }
        this.data = DataGridSharedData.getEmployees();
        
    }

	public render(): JSX.Element {
        return (
            <div className="igContainer">
                <div className="igOptions">
                <button ref={this.onCommitButtonRef} onClick={this.onCommitClick}>Commit</button>
                    <button ref={this.onUndoButtonRef} onClick={this.onUndoClick}>Undo</button>
                    <button ref={this.onRedoButtonRef} onClick={this.onRedoClick}>Redo</button>
                    <label>
                        Edit Mode:
                        <select onChange={this.onEditModeChange}>                            
                            <option value="Cell">Cell</option>
                            <option value="CellBatch">Cell Batch</option>
                            <option value="None">None</option>
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

    onCommitButtonRef = (button: HTMLButtonElement) => {
        if (!button) { return; }

        this.commitButton = button;
        this.commitButton.disabled = true;
    }

    onUndoButtonRef = (button: HTMLButtonElement) => {
        if (!button) { return; }

        this.undoButton = button;
        this.undoButton.disabled = true;
    }

    onRedoButtonRef = (button: HTMLButtonElement) => {
        if (!button) { return; }

        this.redoButton = button;
        this.redoButton.disabled = true;
    }    

    onGridRef = (grid: IgrDataGrid) =>{
        if (!grid) { return; }

        this.grid = grid;       
    }

    //#region Input Control Handlers

    onCommitClick = () => {
       this.grid.commitEdits();
        this.commitButton.disabled = true;
        this.undoButton.disabled = !this.grid.canUndo;      

        // request a new render so the undo/redo buttons update.
        this.setState({ });
    }

    onUndoClick = () => {
        this.grid.undo();
        this.undoButton.disabled = !this.grid.canUndo;
        this.commitButton.disabled = true;
        this.redoButton.disabled = !this.grid.canRedo;        

        // request a new render so the undo/redo buttons update.
        this.setState({ });
    }

    onRedoClick = () => {
        this.grid.redo();

        if(this.grid.editMode === EditModeType.Cell || this.grid.editMode === EditModeType.None) {
            this.commitButton.disabled = !this.grid.canCommit;
        }
        if(this.grid.editMode === EditModeType.CellBatch) {
            this.redoButton.disabled = !this.grid.canRedo;
            this.undoButton.disabled = !this.grid.canUndo;
            this.commitButton.disabled = false;
        } 
        
        // request a new render so the undo/redo buttons update.
        this.setState({ });
    }

    onEditModeChange = (event: any) => {
        this.grid.cancelEdits();
        this.grid.editMode = event.target.value;
        if(this.grid.editMode === EditModeType.None || this.grid.editMode === EditModeType.Cell) {
            this.commitButton.disabled = true;
            this.undoButton.disabled = !this.grid.canUndo;
            this.redoButton.disabled = !this.grid.canRedo;           
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

        if(this.grid.editMode === EditModeType.CellBatch){
            this.commitButton.disabled = false;
            this.undoButton.disabled = false;
            this.redoButton.disabled = !this.grid.canRedo;
            
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

        if(s.editMode === EditModeType.CellBatch && !this.grid.canUndo)
        {
            this.commitButton.disabled = !this.grid.canCommit;
            this.undoButton.disabled = this.grid.canUndo;
        }
        else if(this.grid.editMode === EditModeType.Cell || this.grid.editMode === EditModeType.None) {
            this.commitButton.disabled = this.grid.canCommit;
        }
        if(e.newValue === "") {
            this.undoButton.disabled = true;
            this.commitButton.disabled = true;
            s.setEditError(e.editID, "Error, cell is empty");
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
