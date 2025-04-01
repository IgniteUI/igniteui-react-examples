import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrColumn, IgrColumnGroup } from 'igniteui-react-grids';
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

    constructor(props: any) {
        super(props);

        this.treeGridRef = this.treeGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrTreeGrid
                    autoGenerate={false}
                    ref={this.treeGridRef}
                    id="treeGrid"
                    data={this.employeesFlatDetails}
                    primaryKey="ID"
                    foreignKey="ParentID"
                    columnSelection="Multiple">
                    <IgrColumn
                        field="Name"
                        dataType="String">
                    </IgrColumn>
                    <IgrColumnGroup
                        header="General Information">
                        <IgrColumn
                            field="HireDate"
                            header="Hire Date"
                            dataType="Date">
                        </IgrColumn>
                        <IgrColumnGroup
                            header="Personal Details">
                            <IgrColumn
                                field="ID"
                                dataType="Number">
                            </IgrColumn>
                            <IgrColumn
                                field="Title"
                                dataType="String">
                            </IgrColumn>
                            <IgrColumn
                                field="Age"
                                dataType="Number"
                                selectable={false}>
                            </IgrColumn>
                        </IgrColumnGroup>
                    </IgrColumnGroup>
                    <IgrColumnGroup
                        header="Address Information">
                        <IgrColumnGroup
                            header="Location">
                            <IgrColumn
                                field="Country"
                                dataType="String"
                                selectable={false}>
                            </IgrColumn>
                            <IgrColumn
                                field="City"
                                dataType="String">
                            </IgrColumn>
                            <IgrColumn
                                field="Address"
                                dataType="String">
                            </IgrColumn>
                        </IgrColumnGroup>
                        <IgrColumnGroup
                            header="Contact Information">
                            <IgrColumn
                                field="Phone"
                                dataType="String"
                                selectable={false}>
                            </IgrColumn>
                            <IgrColumn
                                field="Fax"
                                dataType="String"
                                selectable={false}>
                            </IgrColumn>
                            <IgrColumn
                                field="PostalCode"
                                header="Postal Code"
                                dataType="String">
                            </IgrColumn>
                        </IgrColumnGroup>
                    </IgrColumnGroup>
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