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
    private hierarchicalGrid1: IgrHierarchicalGrid
    private hierarchicalGrid1Ref(r: IgrHierarchicalGrid) {
        this.hierarchicalGrid1 = r;
        this.setState({});
    }
    private paginator: IgrPaginator
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

    constructor(props: any) {
        super(props);

        this.hierarchicalGrid1Ref = this.hierarchicalGrid1Ref.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate="false"
                    data={this.hierarchicalCustomers}
                    moving="true"
                    ref={this.hierarchicalGrid1Ref}>
                    <IgrPaginator
                        name="paginator"
                        perPage="15">
                    </IgrPaginator>
                    <IgrColumn
                        field="CustomerID"
                        dataType="String"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}
                        name="column1">
                    </IgrColumn>
                    <IgrColumn
                        field="Company"
                        dataType="String"
                        width="150px"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}
                        name="column2">
                    </IgrColumn>
                    <IgrColumn
                        field="ContactName"
                        dataType="String"
                        width="150px"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}
                        name="column3">
                    </IgrColumn>
                    <IgrColumn
                        field="ContactTitle"
                        dataType="String"
                        width="150px"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}
                        name="column4">
                    </IgrColumn>
                    <IgrColumn
                        field="Address"
                        dataType="String"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}
                        name="column5">
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        dataType="String"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}
                        name="column6">
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        dataType="String"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}
                        name="column7">
                    </IgrColumn>
                    <IgrColumn
                        field="Country"
                        dataType="String"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}
                        name="column8">
                    </IgrColumn>
                    <IgrColumn
                        field="Phone"
                        dataType="String"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}
                        name="column9">
                    </IgrColumn>
                    <IgrColumn
                        field="Fax"
                        dataType="String"
                        headerTemplate={this.hierarchicalGridPinHeaderTemplate}
                        name="column10">
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Orders"
                        autoGenerate="false"
                        moving="true">
                        <IgrColumn
                            field="OrderID"
                            dataType="Number">
                        </IgrColumn>
                        <IgrColumn
                            field="EmployeeID"
                            dataType="Number">
                        </IgrColumn>
                        <IgrColumn
                            field="OrderDate"
                            dataType="Date">
                        </IgrColumn>
                        <IgrColumn
                            field="RequiredDate"
                            dataType="Date">
                        </IgrColumn>
                        <IgrColumn
                            field="ShippedDate"
                            dataType="Date">
                        </IgrColumn>
                        <IgrColumn
                            field="ShipVia"
                            dataType="Number">
                        </IgrColumn>
                        <IgrColumn
                            field="Freight"
                            dataType="Number">
                        </IgrColumn>
                        <IgrColumn
                            field="ShipName"
                            dataType="String">
                        </IgrColumn>
                        <IgrColumn
                            field="ShipAddress"
                            dataType="String">
                        </IgrColumn>
                        <IgrColumn
                            field="ShipCity"
                            dataType="String">
                        </IgrColumn>
                        <IgrColumn
                            field="ShipPostalCode"
                            dataType="String">
                        </IgrColumn>
                        <IgrColumn
                            field="ShipCountry"
                            dataType="String">
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="OrderDetails"
                            autoGenerate="false"
                            moving="true">
                            <IgrColumn
                                field="ProductID"
                                dataType="Number">
                            </IgrColumn>
                            <IgrColumn
                                field="UnitPrice"
                                dataType="Number">
                            </IgrColumn>
                            <IgrColumn
                                field="Quantity"
                                dataType="Number">
                            </IgrColumn>
                            <IgrColumn
                                field="Discount"
                                dataType="Number">
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