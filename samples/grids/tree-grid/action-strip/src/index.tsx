import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrActionStrip, IgrGridPinningActions, IgrGridEditingActions, IgrColumn } from 'igniteui-react-grids';
import { EmployeesFlatDetailsItem, EmployeesFlatDetails } from './EmployeesFlatDetails';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrTreeGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private treeGrid: IgrTreeGrid
    private treeGridRef(r: IgrTreeGrid) {
        this.treeGrid = r;
        this.setState({});
    }
    private actionStrip: IgrActionStrip

    constructor(props: any) {
        super(props);

        this.treeGridRef = this.treeGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrTreeGrid
                    autoGenerate="false"
                    ref={this.treeGridRef}
                    id="treeGrid"
                    data={this.employeesFlatDetails}
                    primaryKey="ID"
                    foreignKey="ParentID"
                    rowEditable="true"
                    batchEditing="true"
                    allowFiltering="true">
                    <IgrActionStrip
                        name="actionStrip">
                        <IgrGridPinningActions
                        >
                        </IgrGridPinningActions>
                        <IgrGridEditingActions
                        >
                        </IgrGridEditingActions>
                    </IgrActionStrip>
                    <IgrColumn
                        field="Name"
                        dataType="String"
                        sortable="true"
                        disableHiding="true"
                        width="auto">
                    </IgrColumn>
                    <IgrColumn
                        field="ID"
                        dataType="Number"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Title"
                        dataType="String"
                        sortable="true"
                        disableHiding="true">
                    </IgrColumn>
                    <IgrColumn
                        field="HireDate"
                        dataType="Date"
                        sortable="true"
                        hidden="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Age"
                        dataType="Number"
                        sortable="true"
                        hidden="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Address"
                        dataType="String"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        dataType="String"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Country"
                        dataType="String"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Fax"
                        dataType="String"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        header="Postal Code"
                        dataType="String"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Phone"
                        dataType="String"
                        sortable="true">
                    </IgrColumn>
                </IgrTreeGrid>
            </div>
        </div>
        );
    }

    private _employeesFlatDetails: EmployeesFlatDetails = null;
    public get employeesFlatDetails(): EmployeesFlatDetails {
        if (this._employeesFlatDetails == null)
        {
            this._employeesFlatDetails = new EmployeesFlatDetails();
        }
        return this._employeesFlatDetails;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);