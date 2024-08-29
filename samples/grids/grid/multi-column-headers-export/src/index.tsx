import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule, IgrGridToolbarModule } from 'igniteui-react-grids';
import { IgrGrid, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarHiding, IgrGridToolbarPinning, IgrGridToolbarExporter, IgrColumn, IgrColumnGroup } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule, WebGridToolbarDescriptionModule } from 'igniteui-react-core';
import { CustomersDataItem, CustomersData } from './CustomersData';
import { IgrExporterEventArgs } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule,
    IgrGridToolbarModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }
    private gridToolbarExporter1: IgrGridToolbarExporter
    private iD: IgrColumn
    private generalInformation: IgrColumnGroup
    private company: IgrColumn
    private personalDetails: IgrColumnGroup
    private contactName: IgrColumn
    private contactTitle: IgrColumn
    private addressInformation: IgrColumnGroup
    private location: IgrColumnGroup
    private country: IgrColumn
    private region: IgrColumn
    private city: IgrColumn
    private address: IgrColumn
    private contactInformation: IgrColumnGroup
    private phone: IgrColumn
    private fax: IgrColumn
    private postalCode: IgrColumn

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
        this.webGridExportEventMultiColumnHeaders = this.webGridExportEventMultiColumnHeaders.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate="false"
                    id="grid"
                    ref={this.gridRef}
                    data={this.customersData}
                    moving="true"
                    allowFiltering="true">
                    <IgrGridToolbar
                    >
                        <IgrGridToolbarActions
                        >
                            <IgrGridToolbarHiding
                            >
                            </IgrGridToolbarHiding>
                            <IgrGridToolbarPinning
                            >
                            </IgrGridToolbarPinning>
                            <IgrGridToolbarExporter
                                exportCSV="false"
                                exportExcel="true"
                                exportStarted={this.webGridExportEventMultiColumnHeaders}
                                name="gridToolbarExporter1">
                            </IgrGridToolbarExporter>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn
                        name="ID"
                        field="ID"
                        header="ID"
                        resizable="true"
                        filterable="false">
                    </IgrColumn>
                    <IgrColumnGroup
                        name="GeneralInformation"
                        header="General Information"
                        collapsible="true"
                        expanded="true">
                        <IgrColumn
                            name="Company"
                            field="Company"
                            visibleWhenCollapsed="true">
                        </IgrColumn>
                        <IgrColumnGroup
                            name="PersonalDetails"
                            header="Personal Details"
                            collapsible="true"
                            expanded="false"
                            visibleWhenCollapsed="false">
                            <IgrColumn
                                name="ContactName"
                                field="ContactName">
                            </IgrColumn>
                            <IgrColumn
                                name="ContactTitle"
                                field="ContactTitle">
                            </IgrColumn>
                        </IgrColumnGroup>
                    </IgrColumnGroup>
                    <IgrColumnGroup
                        name="AddressInformation"
                        header="Address Information">
                        <IgrColumnGroup
                            name="Location"
                            header="Location"
                            collapsible="true"
                            expanded="false"
                            visibleWhenCollapsed="true">
                            <IgrColumn
                                name="Country"
                                field="Country"
                                visibleWhenCollapsed="true"
                                hidden="true">
                            </IgrColumn>
                            <IgrColumn
                                name="Region"
                                field="Region"
                                visibleWhenCollapsed="false"
                                hidden="true">
                            </IgrColumn>
                            <IgrColumn
                                name="City"
                                field="City"
                                visibleWhenCollapsed="false"
                                hidden="true">
                            </IgrColumn>
                            <IgrColumn
                                name="Address"
                                field="Address"
                                visibleWhenCollapsed="false"
                                hidden="true">
                            </IgrColumn>
                        </IgrColumnGroup>
                        <IgrColumnGroup
                            name="ContactInformation"
                            header="Contact Information">
                            <IgrColumn
                                name="Phone"
                                field="Phone">
                            </IgrColumn>
                            <IgrColumn
                                name="Fax"
                                field="Fax">
                            </IgrColumn>
                            <IgrColumn
                                name="PostalCode"
                                field="PostalCode">
                            </IgrColumn>
                        </IgrColumnGroup>
                    </IgrColumnGroup>
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
            WebGridToolbarDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webGridExportEventMultiColumnHeaders(sender: IgrGridToolbarExporter, args: IgrExporterEventArgs): void {
        if (args.detail.options) {
            args.detail.options.ignoreMultiColumnHeaders = false;
        }
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);