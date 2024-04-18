import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from "@infragistics/igniteui-react-grids";
import { IgrGrid, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarPinning, IgrColumn } from "@infragistics/igniteui-react-grids";
import { CustomersDataItem, CustomersData } from './CustomersData';

import "@infragistics/igniteui-react-grids/grids/combined";
import "@infragistics/igniteui-react-grids/grids/themes/light/bootstrap.css";

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

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    ref={this.gridRef}
                    id="grid"
                    data={this.customersData}
                    columnSelection="Single">
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
                        field="ID"
                        hidden="true">
                    </IgrColumn>
                    <IgrColumn
                        field="CompanyName"
                        header="Company"
                        pinned="true">
                    </IgrColumn>
                    <IgrColumn
                        field="ContactName"
                        header="Contact Name">
                    </IgrColumn>
                    <IgrColumn
                        field="ContactTitle"
                        header="Contact Title">
                    </IgrColumn>
                    <IgrColumn
                        field="Address">
                    </IgrColumn>
                    <IgrColumn
                        field="City">
                    </IgrColumn>
                    <IgrColumn
                        field="Region">
                    </IgrColumn>
                    <IgrColumn
                        field="Phone">
                    </IgrColumn>
                    <IgrColumn
                        field="Fax">
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

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);