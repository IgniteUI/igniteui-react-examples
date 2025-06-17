import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import HierarchicalCustomers from './HierarchicalCustomers.json';

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

    constructor(props: any) {
        super(props);

        this.hierarchicalGrid1Ref = this.hierarchicalGrid1Ref.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate={false}
                    data={this.hierarchicalCustomers}
                    ref={this.hierarchicalGrid1Ref}>
                    <IgrColumn
                        field="CustomerID"
                        width="auto"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="CompanyName"
                        width="auto"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ContactName"
                        width="auto"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ContactTitle"
                        width="auto"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Address"
                        width="auto"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        width="auto"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        width="auto"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Country"
                        width="auto"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Phone"
                        width="auto"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Fax"
                        width="auto"
                        resizable={true}>
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Orders"
                        autoGenerate={false}>
                        <IgrColumn
                            field="OrderID"
                            width="auto"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="EmployeeID"
                            width="auto"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="OrderDate"
                            width="auto"
                            dataType="date"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="RequiredDate"
                            width="auto"
                            dataType="date"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="ShippedDate"
                            width="auto"
                            dataType="date"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="ShipVia"
                            width="auto"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="Freight"
                            width="auto"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="ShipName"
                            width="auto"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="ShipAddress"
                            width="auto"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="ShipCity"
                            width="auto"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="ShipPostalCode"
                            width="auto"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="ShipCountry"
                            width="auto"
                            resizable={true}>
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="OrderDetails"
                            autoGenerate={false}>
                            <IgrColumn
                                field="ProductID"
                                width="auto"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="UnitPrice"
                                width="auto"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Quantity"
                                width="auto"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Discount"
                                width="auto"
                                resizable={true}>
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

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);