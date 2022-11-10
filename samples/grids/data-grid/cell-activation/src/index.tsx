import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { DataGridSharedData } from './DataGridSharedData';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { IgrGridColumnOptionsModule } from 'igniteui-react-grids';
import { EnterKeyBehaviors } from 'igniteui-react-grids';
import { EnterKeyBehaviorAfterEdit } from 'igniteui-react-grids';
import { EditModeType } from 'igniteui-react-grids';

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();

export default class DataGridCellActivation extends React.Component<any, any> {

    public data: any[];
    public grid: IgrDataGrid;

    public canMoveAfterEdit: boolean;
    public canEdit: EditModeType;

    constructor(props: any) {
        super(props);

        this.state = {
            canMoveAfterEdit: true,
            enterBehavior: EnterKeyBehaviors.Edit,
            enterBehaviorAfterEdit: EnterKeyBehaviorAfterEdit.MoveDown,
            canEdit: EditModeType.Cell
        };

        this.data = DataGridSharedData.getEmployees();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">

                <div className="options">
                    <label className="options-label">Enter Key Mode: </label>
                    <select className="options-select" value={this.state.enterBehavior}
                        onChange={this.onEnterKeyModeChange}>
                        <option>Edit</option>
                        <option>MoveUp</option>
                        <option>MoveDown</option>
                        <option>MoveLeft</option>
                        <option>MoveRight</option>
                        <option>None</option>
                    </select>

                    <label className="options-label">Enter Key After Edit Mode: </label>
                    <select className="options-select" disabled={!this.state.canMoveAfterEdit} id="enterAfterEditMode"
                        value={this.state.enterBehaviorAfterEdit}
                        onChange={this.onEnterKeyAfterEditModeChange}>
                        <option>MoveDown</option>
                        <option>MoveUp</option>
                        <option>MoveLeft</option>
                        <option>MoveRight</option>
                        <option>None</option>
                    </select>
                </div>

                <IgrDataGrid
                    height="100%"
                    width="100%"
                    defaultColumnMinWidth={100}
                    autoGenerateColumns={false}
                    dataSource={this.data}
                    enterBehavior={this.state.enterBehavior}
                    enterBehaviorAfterEdit={this.state.enterBehaviorAfterEdit}
                    editMode={this.state.canEdit}
                    selectionMode="SingleCell"
                    activationMode="Cell"
                    isColumnOptionsEnabled="true">

                    <IgrTextColumn field="Name" width="*>170"/>
                    <IgrTextColumn field="Street" headerText="Address" width="*>150" />
                    <IgrTextColumn field="City" width="*>130"/>
                    <IgrNumericColumn field="Salary" width="*>130" positivePrefix="$" showGroupingSeparator="true" />
                    <IgrDateTimeColumn field="Birthday"  width="*>150" />

                </IgrDataGrid>
            </div>
        );
    }

    public onGridRef = (grid: IgrDataGrid) => {
        if (!grid) { return; }

        this.grid = grid;
    }

    public onEnterKeyModeChange = (e: any) => {

        if(e.target.value !== "Edit"){
            this.setState({ canMoveAfterEdit: false, canEdit:EditModeType.None, enterBehavior: e.target.value, enterBehaviorAfterEdit:EnterKeyBehaviorAfterEdit.None });
        }
        else if (e.target.value === "Edit") {

            this.setState({ canMoveAfterEdit: true, canEdit:EditModeType.Cell, enterBehavior: e.target.value, enterBehaviorAfterEdit:EnterKeyBehaviorAfterEdit.MoveDown });
        }

    }

    public onEnterKeyAfterEditModeChange = (e: any) => {
        this.setState({ enterBehavior: EnterKeyBehaviors.Edit, enterBehaviorAfterEdit: e.target.value  });
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataGridCellActivation/>);
