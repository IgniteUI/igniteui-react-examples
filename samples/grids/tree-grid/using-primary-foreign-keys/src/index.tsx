import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrColumn } from 'igniteui-react-grids';
import { EmployeesFlatDataItem, EmployeesFlatData } from './EmployeesFlatData';

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
                    data={this.employeesFlatData}
                    primaryKey="ID"
                    foreignKey="ParentID"
                    allowFiltering={true}
                    moving={true}
                    rowSelection="multiple">
                    <IgrColumn
                        field="Name"
                        dataType="string"
                        sortable={true}
                        editable={true}
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Title"
                        header="Job Title"
                        dataType="string"
                        sortable={true}
                        editable={true}
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Age"
                        dataType="number"
                        sortable={true}
                        editable={true}
                        resizable={true}>
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

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);