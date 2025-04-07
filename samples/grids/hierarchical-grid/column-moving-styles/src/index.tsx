import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrPaginator, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import HierarchicalCustomers from './HierarchicalCustomers.json';
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
    private paginator: IgrPaginator

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate={false}
                    data={this.hierarchicalCustomers}
                    moving={true}
                    id="grid">
                    <IgrPaginator
                        perPage={15}>
                    </IgrPaginator>
                    <IgrColumn
                        field="CustomerID"
                        dataType="string"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Company"
                        dataType="string"
                        width="150px"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="ContactName"
                        dataType="string"
                        width="150px"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="ContactTitle"
                        dataType="string"
                        width="150px"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Address"
                        dataType="string"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        dataType="string"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        dataType="string"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Country"
                        dataType="string"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Phone"
                        dataType="string"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Fax"
                        dataType="string"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Orders"
                        autoGenerate={false}
                        moving={true}>
                        <IgrColumn
                            field="OrderID"
                            dataType="number">
                        </IgrColumn>
                        <IgrColumn
                            field="EmployeeID"
                            dataType="number">
                        </IgrColumn>
                        <IgrColumn
                            field="OrderDate"
                            dataType="date">
                        </IgrColumn>
                        <IgrColumn
                            field="RequiredDate"
                            dataType="date">
                        </IgrColumn>
                        <IgrColumn
                            field="ShippedDate"
                            dataType="date">
                        </IgrColumn>
                        <IgrColumn
                            field="ShipVia"
                            dataType="number">
                        </IgrColumn>
                        <IgrColumn
                            field="Freight"
                            dataType="number">
                        </IgrColumn>
                        <IgrColumn
                            field="ShipName"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="ShipAddress"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="ShipCity"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="ShipPostalCode"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="ShipCountry"
                            dataType="string">
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="OrderDetails"
                            autoGenerate={false}
                            moving={true}>
                            <IgrColumn
                                field="ProductID"
                                dataType="number">
                            </IgrColumn>
                            <IgrColumn
                                field="UnitPrice"
                                dataType="number">
                            </IgrColumn>
                            <IgrColumn
                                field="Quantity"
                                dataType="number">
                            </IgrColumn>
                            <IgrColumn
                                field="Discount"
                                dataType="number">
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