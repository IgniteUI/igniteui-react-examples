import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { EmployeesNestedDataItem, EmployeesNestedDataItem_EmployeesItem, EmployeesNestedData } from './EmployeesNestedData';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }
    private column1: IgrColumn

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="container fill">
                <IgrGrid
                    autoGenerate="false"
                    data={this.employeesNestedData}
                    ref={this.gridRef}
                    id="grid">
                    <IgrColumn
                        header="Name"
                        field="Name"
                        width="15%">
                    </IgrColumn>
                    <IgrColumn
                        field="Title"
                        header="Title"
                        width="15%">
                    </IgrColumn>
                    <IgrColumn
                        field="Salary"
                        header="Salary"
                        width="10%">
                    </IgrColumn>
                    <IgrColumn
                        field="Employees"
                        header="Employees"
                        bodyTemplate={this.webGridNestedDataCellTemplate}
                        width="30%"
                        name="column1">
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        header="City"
                        width="15%">
                    </IgrColumn>
                    <IgrColumn
                        field="Country"
                        header="Country"
                        width="15%">
                    </IgrColumn>
                    <IgrColumn
                        field="Age"
                        header="Age"
                        width="10%">
                    </IgrColumn>
                    <IgrColumn
                        field="HireDate"
                        header="Hire Date"
                        dataType="Date">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _employeesNestedData: EmployeesNestedData = null;
    public get employeesNestedData(): EmployeesNestedData {
        if (this._employeesNestedData == null)
        {
            this._employeesNestedData = new EmployeesNestedData();
        }
        return this._employeesNestedData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);