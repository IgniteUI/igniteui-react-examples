import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import HierarchicalCustomersData from './HierarchicalCustomersData.json';
import { IgrColumnTemplateContext } from 'igniteui-react-grids';

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
                    columnSelection="single"
                    primaryKey="CustomerID">
                    <IgrColumn
                        field="CustomerID"
                        hidden={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Company"
                        header="Company Name"
                        pinned={true}
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="ContactName"
                        header="Contact Name"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="ContactTitle"
                        header="Contact Title"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Address"
                        header="Address"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        header="City"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        header="Postal Code"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Country"
                        header="Country"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Phone"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Fax"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Orders"
                        autoGenerate={false}>
                        <IgrColumn
                            field="OrderDate"
                            header="Order Date"
                            dataType="date"
                            resizable={true}
                            headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                        </IgrColumn>
                        <IgrColumn
                            field="RequiredDate"
                            header="Required Date"
                            dataType="date"
                            resizable={true}
                            headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                        </IgrColumn>
                        <IgrColumn
                            field="ShippedDate"
                            header="Shipped Date"
                            dataType="date"
                            resizable={true}
                            headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                        </IgrColumn>
                        <IgrColumn
                            field="ShipName"
                            header="Ship Name"
                            dataType="string"
                            resizable={true}
                            pinned={true}
                            headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                        </IgrColumn>
                        <IgrColumn
                            field="ShippedVia"
                            header="Shipped Via"
                            dataType="string"
                            resizable={true}
                            headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                        </IgrColumn>
                        <IgrColumn
                            field="Freight"
                            header="Freight"
                            dataType="string"
                            resizable={true}
                            headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="OrderDetails"
                            autoGenerate={false}>
                            <IgrColumn
                                field="UnitPrice"
                                header="Unit Price"
                                dataType="string"
                                resizable={true}
                                headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                            </IgrColumn>
                            <IgrColumn
                                field="Quantity"
                                header="Quantity"
                                dataType="string"
                                resizable={true}
                                headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                            </IgrColumn>
                            <IgrColumn
                                field="Discount"
                                header="Discount"
                                dataType="string"
                                resizable={true}
                                headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                            </IgrColumn>
                            <IgrColumn
                                field="Weight"
                                header="Weight"
                                dataType="string"
                                resizable={true}
                                headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                            </IgrColumn>
                            <IgrColumn
                                field="Length"
                                header="Length"
                                dataType="string"
                                resizable={true}
                                headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                            </IgrColumn>
                            <IgrColumn
                                field="TotalPrice"
                                header="Total Price"
                                dataType="string"
                                resizable={true}
                                headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
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
            <div style={{display: 'flex'}}>
                <span>{column.field}</span>
                <span style={{marginLeft: 'auto'}} onClick={(e: any) => this.toggleColumnPin(column)}>📌</span>
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