import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrInputModule } from 'igniteui-react';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { EmployeesNestedDataItem, EmployeesNestedDataItem_EmployeesItem, EmployeesNestedData } from './EmployeesNestedData';
import { IgrCellTemplateContext } from 'igniteui-react-grids';
import { IgrExpansionPanel, IgrInput } from 'igniteui-react';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule,
    IgrInputModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
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
                <IgrGrid
                    autoGenerate={false}
                    data={this.employeesNestedData}
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
                        width="20%">
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
                        dataType="date">
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


    public webGridNestedDataCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        if (props.dataContext.cell.value != null) {
            if (props.dataContext.cell.value.length === 0) return <></>;
            const value = props.dataContext.cell.value[0];
            var grid = this.grid;
            return (
        <>
            <IgrExpansionPanel>
                <div slot="title" style={{fontSize: "1.1em", fontWeight: "bold", marginTop: "1rem", marginBottom: "0.25rem"}}>
                {value.Name}
                </div>
                <div className="description">
                    <IgrInput type="text" label="Title" name="title" value={value.Title} change={(s:any, e: any) => {
                            props.dataContext.cell.value[0][s.label] = e.detail;
                            grid.markForCheck();
                        }} style={{textOverflow: "ellipsis"}} />
                    <IgrInput type="number" label="Age" name="title" value={value.Age} inputOcurred={(s:any, e: any) => {
                            props.dataContext.cell.value[0][s.label] = e.detail;
                            grid.markForCheck();
                        }} style={{textOverflow: "ellipsis"}} />
                </div>
            </IgrExpansionPanel>
        </>);
        }
        return <></>;
    };

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);