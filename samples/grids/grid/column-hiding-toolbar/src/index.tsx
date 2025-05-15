import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrGridToolbar, IgrGridToolbarTitle, IgrGridToolbarActions, IgrGridToolbarHiding, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule } from 'igniteui-react-core';
import { CustomersDataItem, CustomersData } from './CustomersData';

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
    private iD: IgrColumn
    private contactName: IgrColumn
    private contactTitle: IgrColumn
    private city: IgrColumn
    private company: IgrColumn
    private fax: IgrColumn
    private address: IgrColumn
    private postalCode: IgrColumn
    private country: IgrColumn
    private phone: IgrColumn

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate="false"
                    ref={this.gridRef}
                    id="grid"
                    data={this.customersData}
                    columnWidth="200px"
                    allowFiltering="true"
                    columnSelection="Single">
                    <IgrGridToolbar
                    >
                        <IgrGridToolbarTitle
                        >
                        </IgrGridToolbarTitle>
                        <IgrGridToolbarActions
                        >
                            <IgrGridToolbarHiding
                            >
                            </IgrGridToolbarHiding>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn
                        name="ID"
                        field="ID"
                        header="ID"
                        dataType="String"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        name="ContactName"
                        field="ContactName"
                        header="Name"
                        dataType="String"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        name="ContactTitle"
                        field="ContactTitle"
                        header="Title"
                        dataType="String"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        name="City"
                        field="City"
                        header="City"
                        dataType="String"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        name="Company"
                        field="Company"
                        header="Company"
                        dataType="String"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        name="Fax"
                        field="Fax"
                        header="Fax"
                        dataType="String"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        name="Address"
                        field="Address"
                        header="Address"
                        dataType="String"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        name="PostalCode"
                        field="PostalCode"
                        header="Postal Code"
                        dataType="String"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        name="Country"
                        field="Country"
                        header="Country"
                        dataType="String"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        name="Phone"
                        field="Phone"
                        header="Phone"
                        dataType="String"
                        sortable="true">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _customersData: CustomersData = null;
    public get customersData(): CustomersData {
        if (this._customersData == null)
        {
            this._customersData = new CustomersData();
        }
        return this._customersData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);