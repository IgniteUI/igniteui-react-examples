import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule, IgrColumnGroupModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrColumn, IgrColumnGroup, IgrRowIsland } from 'igniteui-react-grids';
import { ComponentRenderer, WebHierarchicalGridDescriptionModule, WebColumnGroupDescriptionModule } from 'igniteui-react-core';
import HierarchicalCustomers from './HierarchicalCustomers.json';
import { IgrColumnTemplateContext } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrHierarchicalGridModule,
    IgrColumnGroupModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private hierarchicalGrid: IgrHierarchicalGrid
    private hierarchicalGridRef(r: IgrHierarchicalGrid) {
        this.hierarchicalGrid = r;
        this.setState({});
    }
    private columnGroup1: IgrColumnGroup
    private columnGroup2: IgrColumnGroup
    private columnGroup3: IgrColumnGroup
    private columnGroup4: IgrColumnGroup
    private columnGroup5: IgrColumnGroup

    constructor(props: any) {
        super(props);

        this.hierarchicalGridRef = this.hierarchicalGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate="false"
                    data={this.hierarchicalCustomers}
                    ref={this.hierarchicalGridRef}
                    id="hierarchicalGrid"
                    primaryKey="ID"
                    moving="true"
                    allowFiltering="true">
                    <IgrColumn
                        field="CustomerID"
                        dataType="String"
                        sortable="true"
                        resizable="true">
                    </IgrColumn>
                    <IgrColumnGroup
                        header="General Information"
                        headerTemplate={this.webHierarchicalGridColumnGroupHeaderTemplate}
                        name="columnGroup1">
                        <IgrColumn
                            field="Company"
                            dataType="String"
                            sortable="true"
                            resizable="true">
                        </IgrColumn>
                        <IgrColumnGroup
                            header="Personal Details">
                            <IgrColumn
                                field="ContactName"
                                dataType="String"
                                sortable="true"
                                resizable="true">
                            </IgrColumn>
                            <IgrColumn
                                field="ContactTitle"
                                dataType="String"
                                sortable="true"
                                resizable="true">
                            </IgrColumn>
                        </IgrColumnGroup>
                    </IgrColumnGroup>
                    <IgrColumnGroup
                        header="Address Information"
                        headerTemplate={this.webHierarchicalGridColumnGroupHeaderTemplate}
                        name="columnGroup2">
                        <IgrColumnGroup
                            header="Location">
                            <IgrColumn
                                field="Address"
                                dataType="String"
                                sortable="true"
                                resizable="true">
                            </IgrColumn>
                            <IgrColumn
                                field="City"
                                dataType="String"
                                sortable="true"
                                resizable="true">
                            </IgrColumn>
                            <IgrColumn
                                field="PostalCode"
                                dataType="String"
                                sortable="true"
                                resizable="true">
                            </IgrColumn>
                            <IgrColumn
                                field="Country"
                                dataType="String"
                                sortable="true"
                                resizable="true">
                            </IgrColumn>
                        </IgrColumnGroup>
                        <IgrColumnGroup
                            header="Contact Information">
                            <IgrColumn
                                field="Phone"
                                dataType="String"
                                sortable="true"
                                resizable="true">
                            </IgrColumn>
                            <IgrColumn
                                field="Fax"
                                dataType="String"
                                sortable="true"
                                resizable="true">
                            </IgrColumn>
                        </IgrColumnGroup>
                    </IgrColumnGroup>
                    <IgrRowIsland
                        childDataKey="Orders"
                        autoGenerate="false">
                        <IgrColumnGroup
                            header="Order Information">
                            <IgrColumnGroup
                                header="Order Details"
                                headerTemplate={this.webHierarchicalGridColumnGroupHeaderTemplate}
                                name="columnGroup3">
                                <IgrColumn
                                    field="OrderID"
                                    dataType="Number"
                                    sortable="true"
                                    resizable="true">
                                </IgrColumn>
                                <IgrColumn
                                    field="EmployeeID"
                                    dataType="Number"
                                    sortable="true"
                                    resizable="true">
                                </IgrColumn>
                                <IgrColumn
                                    field="OrderDate"
                                    dataType="Date"
                                    sortable="true"
                                    resizable="true">
                                </IgrColumn>
                                <IgrColumn
                                    field="RequiredDate"
                                    dataType="Date"
                                    sortable="true"
                                    resizable="true">
                                </IgrColumn>
                            </IgrColumnGroup>
                            <IgrColumnGroup
                                header="General Shipping Information"
                                headerTemplate={this.webHierarchicalGridColumnGroupHeaderTemplate}
                                name="columnGroup4">
                                <IgrColumn
                                    field="ShipDate"
                                    dataType="Date"
                                    sortable="true"
                                    resizable="true">
                                </IgrColumn>
                                <IgrColumn
                                    field="ShipVia"
                                    dataType="Number"
                                    sortable="true"
                                    resizable="true">
                                </IgrColumn>
                                <IgrColumn
                                    field="Freight"
                                    dataType="Number"
                                    sortable="true"
                                    resizable="true">
                                </IgrColumn>
                                <IgrColumn
                                    field="ShipName"
                                    dataType="String"
                                    sortable="true"
                                    resizable="true">
                                </IgrColumn>
                            </IgrColumnGroup>
                            <IgrColumnGroup
                                header="Shipping Locations"
                                headerTemplate={this.webHierarchicalGridColumnGroupHeaderTemplate}
                                name="columnGroup5">
                                <IgrColumn
                                    field="ShipAddress"
                                    dataType="String"
                                    sortable="true"
                                    resizable="true">
                                </IgrColumn>
                                <IgrColumn
                                    field="ShipCity"
                                    dataType="String"
                                    sortable="true"
                                    resizable="true">
                                </IgrColumn>
                                <IgrColumn
                                    field="ShipPostalCode"
                                    dataType="String"
                                    sortable="true"
                                    resizable="true">
                                </IgrColumn>
                                <IgrColumn
                                    field="ShipCountry"
                                    dataType="String"
                                    sortable="true"
                                    resizable="true">
                                </IgrColumn>
                            </IgrColumnGroup>
                        </IgrColumnGroup>
                        <IgrRowIsland
                            childDataKey="OrderDetails"
                            autoGenerate="false">
                            <IgrColumn
                                field="ProductID"
                                dataType="Number"
                                sortable="true"
                                resizable="true">
                            </IgrColumn>
                            <IgrColumn
                                field="UnitPrice"
                                dataType="Number"
                                sortable="true"
                                resizable="true">
                            </IgrColumn>
                            <IgrColumn
                                field="Quantity"
                                dataType="Number"
                                sortable="true"
                                resizable="true">
                            </IgrColumn>
                            <IgrColumn
                                field="Discount"
                                dataType="Number"
                                sortable="true"
                                resizable="true">
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _hierarchicalCustomers: any[] = HierarchicalCustomers;
    public get hierarchicalCustomers(): any[] {
        return this._hierarchicalCustomers;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebHierarchicalGridDescriptionModule.register(context);
            WebColumnGroupDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webHierarchicalGridColumnGroupHeaderTemplate = (e: { dataContext: IgrColumnTemplateContext }) => {
        const column = e.dataContext.column;
        return (
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span draggable="false"  onClick={(e: any) => this.toggleColumnGroup(column)}>
                    {this.columnGroupStates.get(column) ? "🔽" : "🔼"}
                </span>
                <span>{column.header}</span>
            </div>
        );
    };

    public columnGroupStates = new Map<IgrColumn, boolean>();
    public toggleColumnGroup(column: IgrColumn) {
        const columnGroup = this.hierarchicalGrid.contentColumns.find((col) => col.name == column.name) as IgrColumnGroup;
        const columns = Array.from(columnGroup.actualChildren);
        if (columnGroup.header === 'General Information') {
            const column = columns[1] as IgrColumn;
            column.hidden = !column.hidden;
        } else if (columnGroup.header === 'Address Information') {
            for (const column of columns) {
                const col = column as IgrColumn;
                if (col.header === "Location"){
                    for (const cl of col.columnChildren) {
                        const c = cl as IgrColumn;
                        if (c.field !== "Address"){
                            c.hidden = !c.hidden;
                        }
                    }
                }
                else if (col.header === "Contact Information"){
                    const c = col.columnChildren[1] as IgrColumn;
                    c.hidden = !c.hidden;
                }
            }
        } else {
            for (let i = 1; i < columns.length; i++) {
                const c = columns[i] as IgrColumn;
                c.hidden = !c.hidden;
            }
        }
        columnGroup.forceUpdate();
        this.columnGroupStates.set(column, !this.columnGroupStates.get(column));
    }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);