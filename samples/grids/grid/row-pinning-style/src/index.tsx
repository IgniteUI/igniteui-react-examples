import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule, IgrActionStripModule } from 'igniteui-react-grids';
import { IgrGrid, IgrPinningConfig, RowPinningPosition, IgrColumn, IgrActionStrip, IgrGridPinningActions } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule, WebActionStripDescriptionModule } from 'igniteui-react-core';
import CustomersDataLocal from './CustomersDataLocal.json';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule,
    IgrActionStripModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }
    private  _pinningConfig1: IgrPinningConfig | null = null;
    public get pinningConfig1(): IgrPinningConfig {
        if (this._pinningConfig1 == null)
        {
            var pinningConfig1: IgrPinningConfig = {} as IgrPinningConfig;
            pinningConfig1.rows = RowPinningPosition.Top;

            this._pinningConfig1 = pinningConfig1;
        }
        return this._pinningConfig1;
    }
    private companyName: IgrColumn
    private contactName: IgrColumn
    private contactTitle: IgrColumn
    private address: IgrColumn
    private city: IgrColumn
    private postalCode: IgrColumn
    private phone: IgrColumn
    private fax: IgrColumn

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
        this.webGridPinRowOnRendered = this.webGridPinRowOnRendered.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate="false"
                    ref={this.gridRef}
                    id="grid"
                    data={this.customersDataLocal}
                    primaryKey="ID"
                    cellSelection="None"
                    rendered={this.webGridPinRowOnRendered}
                    pinning={this.pinningConfig1}>
                    <IgrColumn
                        name="CompanyName"
                        field="CompanyName"
                        header="Company"
                        width="300px">
                    </IgrColumn>
                    <IgrColumn
                        name="ContactName"
                        field="ContactName"
                        header="Name">
                    </IgrColumn>
                    <IgrColumn
                        name="ContactTitle"
                        field="ContactTitle"
                        header="Title">
                    </IgrColumn>
                    <IgrColumn
                        name="Address"
                        field="Address"
                        header="Address">
                    </IgrColumn>
                    <IgrColumn
                        name="City"
                        field="City"
                        header="City">
                    </IgrColumn>
                    <IgrColumn
                        name="PostalCode"
                        field="PostalCode"
                        header="Postal Code">
                    </IgrColumn>
                    <IgrColumn
                        name="Phone"
                        field="Phone"
                        header="Phone">
                    </IgrColumn>
                    <IgrColumn
                        name="Fax"
                        field="Fax"
                        header="Fax">
                    </IgrColumn>
                    <IgrActionStrip
                    >
                        <IgrGridPinningActions
                        >
                        </IgrGridPinningActions>
                    </IgrActionStrip>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _customersDataLocal: any[] = CustomersDataLocal;
    public get customersDataLocal(): any[] {
        return this._customersDataLocal;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebGridDescriptionModule.register(context);
            WebActionStripDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webGridPinRowOnRendered(args: any): void {
        var grid = this.grid as any;
        grid.data = [...grid.data];
        grid.pinRow("ALFKI");
        grid.pinRow("AROUT");
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);