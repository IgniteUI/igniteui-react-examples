import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrTreeGrid, IgrPaginator, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebTreeGridDescriptionModule, WebPaginatorDescriptionModule } from 'igniteui-react-core';
import { EmployeesNestedDataItem, EmployeesNestedData } from './EmployeesNestedData';

import 'igniteui-react-grids/grids/themes/dark/bootstrap.css';

export default class Sample extends React.Component<any, any> {
    private grid: IgrTreeGrid
    private gridRef(r: IgrTreeGrid) {
        this.grid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrTreeGrid
                    autoGenerate={false}
                    id="grid"
                    className="custom-grid-palette-theme"
                    ref={this.gridRef}
                    data={this.employeesNestedData}
                    primaryKey="ID"
                    childDataKey="Employees"
                    allowFiltering={true}>
                    <IgrPaginator
                        perPage={10}>
                    </IgrPaginator>
                    <IgrColumn
                        field="Name"
                        header="Name"
                        dataType="string"
                        sortable={true}
                        editable={true}
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Title"
                        header="Title"
                        dataType="string"
                        sortable={true}
                        editable={true}
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Age"
                        header="Age"
                        dataType="number"
                        sortable={true}
                        editable={true}
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Salary"
                        header="Salary"
                        dataType="number"
                        sortable={true}
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="HireDate"
                        header="Hire Date"
                        dataType="date"
                        sortable={true}
                        editable={true}
                        filterable={false}>
                    </IgrColumn>
                </IgrTreeGrid>
            </div>
        </div>
        );
    }

    private _employeesNestedData: EmployeesNestedData = null;
    public get employeesNestedData(): EmployeesNestedData {
        if (this._employeesNestedData == null) {
            this._employeesNestedData = new EmployeesNestedData();
        }
        return this._employeesNestedData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebTreeGridDescriptionModule.register(context);
            WebPaginatorDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
