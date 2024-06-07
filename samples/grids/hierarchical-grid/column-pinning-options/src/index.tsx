import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarPinning, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import HierarchicalCustomersData from './HierarchicalCustomersData.json';
import { IgrColumnTemplateContext } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrHierarchicalGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrHierarchicalGrid
    private gridRef(r: IgrHierarchicalGrid) {
        this.grid = r;
        this.setState({});
    }
    private column1: IgrColumn
    private column2: IgrColumn
    private column3: IgrColumn
    private column4: IgrColumn
    private column5: IgrColumn
    private column6: IgrColumn
    private column7: IgrColumn
    private column8: IgrColumn
    private column9: IgrColumn
    private column10: IgrColumn
    private column11: IgrColumn
    private column12: IgrColumn
    private column13: IgrColumn
    private column14: IgrColumn
    private column15: IgrColumn
    private column16: IgrColumn
    private column17: IgrColumn
    private column18: IgrColumn
    private column19: IgrColumn
    private column20: IgrColumn
    private column21: IgrColumn

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    ref={this.gridRef}
                    id="grid"
                    data={this.hierarchicalCustomersData}
                    columnSelection="Single"
                    primaryKey="CustomerID">
                    <IgrGridToolbar
                    >
                        <IgrGridToolbarActions
                        >
                            <IgrGridToolbarPinning
                            >
                            </IgrGridToolbarPinning>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn
                        field="CustomerID"
                        hidden="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Company"
                        header="Company Name"
                        pinned="true"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}
                        name="column1">
                    </IgrColumn>
                    <IgrColumn
                        field="ContactName"
                        header="Contact Name"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}
                        name="column2">
                    </IgrColumn>
                    <IgrColumn
                        field="ContactTitle"
                        header="Contact Title"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}
                        name="column3">
                    </IgrColumn>
                    <IgrColumn
                        field="Address"
                        header="Address"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}
                        name="column4">
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        header="City"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}
                        name="column5">
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        header="Postal Code"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}
                        name="column6">
                    </IgrColumn>
                    <IgrColumn
                        field="Country"
                        header="Country"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}
                        name="column7">
                    </IgrColumn>
                    <IgrColumn
                        field="Phone"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}
                        name="column8">
                    </IgrColumn>
                    <IgrColumn
                        field="Fax"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}
                        name="column9">
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Orders"
                        autoGenerate="false">
                        <IgrColumn
                            field="OrderDate"
                            header="Order Date"
                            dataType="Date"
                            resizable="true"
                            headerTemplate={this.hierarchicalGridPinHeaderTemplate}
                            name="column10">
                        </IgrColumn>
                        <IgrColumn
                            field="RequiredDate"
                            header="Required Date"
                            dataType="Date"
                            resizable="true"
                            headerTemplate={this.hierarchicalGridPinHeaderTemplate}
                            name="column11">
                        </IgrColumn>
                        <IgrColumn
                            field="ShippedDate"
                            header="Shipped Date"
                            dataType="Date"
                            resizable="true"
                            headerTemplate={this.hierarchicalGridPinHeaderTemplate}
                            name="column12">
                        </IgrColumn>
                        <IgrColumn
                            field="ShipName"
                            header="Ship Name"
                            dataType="String"
                            resizable="true"
                            pinned="true"
                            headerTemplate={this.hierarchicalGridPinHeaderTemplate}
                            name="column13">
                        </IgrColumn>
                        <IgrColumn
                            field="ShippedVia"
                            header="Shipped Via"
                            dataType="String"
                            resizable="true"
                            headerTemplate={this.hierarchicalGridPinHeaderTemplate}
                            name="column14">
                        </IgrColumn>
                        <IgrColumn
                            field="Freight"
                            header="Freight"
                            dataType="String"
                            resizable="true"
                            headerTemplate={this.hierarchicalGridPinHeaderTemplate}
                            name="column15">
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="OrderDetails"
                            autoGenerate="false">
                            <IgrColumn
                                field="UnitPrice"
                                header="Unit Price"
                                dataType="String"
                                resizable="true"
                                headerTemplate={this.hierarchicalGridPinHeaderTemplate}
                                name="column16">
                            </IgrColumn>
                            <IgrColumn
                                field="Quantity"
                                header="Quantity"
                                dataType="String"
                                resizable="true"
                                headerTemplate={this.hierarchicalGridPinHeaderTemplate}
                                name="column17">
                            </IgrColumn>
                            <IgrColumn
                                field="Discount"
                                header="Discount"
                                dataType="String"
                                resizable="true"
                                headerTemplate={this.hierarchicalGridPinHeaderTemplate}
                                name="column18">
                            </IgrColumn>
                            <IgrColumn
                                field="Weight"
                                header="Weight"
                                dataType="String"
                                resizable="true"
                                headerTemplate={this.hierarchicalGridPinHeaderTemplate}
                                name="column19">
                            </IgrColumn>
                            <IgrColumn
                                field="Length"
                                header="Length"
                                dataType="String"
                                resizable="true"
                                headerTemplate={this.hierarchicalGridPinHeaderTemplate}
                                name="column20">
                            </IgrColumn>
                            <IgrColumn
                                field="TotalPrice"
                                header="Total Price"
                                dataType="String"
                                resizable="true"
                                headerTemplate={this.hierarchicalGridPinHeaderTemplate}
                                name="column21">
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _hierarchicalCustomersData: any[] = HierarchicalCustomersData;
    public get hierarchicalCustomersData(): any[] {
        return this._hierarchicalCustomersData;
    }


    public hierarchicalGridPinHeaderTemplate = (props: {dataContext: IgrColumnTemplateContext}) => {
        const column = (props.dataContext as any).column;
        return (
            <div>
                <span style={{float: 'left'}}>{column.field}</span>
                <span style={{float: 'right'}} onPointerDown={(e: any) => this.toggleColumnPin(column)}>📌</span>
            </div>
        );
    }

        public toggleColumnPin(field: IgrColumn) {
            if(field) {
                field.pinned = !field.pinned;
            }
        }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);