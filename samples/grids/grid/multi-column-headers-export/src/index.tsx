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
                    autoGenerate={false}
                    id="grid"
                    data={this.customersData}
                    moving={true}
                    allowFiltering={true}>
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
                                exportCSV={false}
                                exportExcel={true}
                                exportStarted={this.webGridExportEventMultiColumnHeaders}>
                            </IgrGridToolbarExporter>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn
                        field="ID"
                        header="ID"
                        resizable={true}
                        filterable={false}>
                    </IgrColumn>
                    <IgrColumnGroup
                        header="General Information"
                        collapsible={true}
                        expanded={true}>
                        <IgrColumn
                            field="Company"
                            visibleWhenCollapsed={true}>
                        </IgrColumn>
                        <IgrColumnGroup
                            header="Personal Details"
                            collapsible={true}
                            expanded={false}
                            visibleWhenCollapsed={false}>
                            <IgrColumn
                                field="ContactName">
                            </IgrColumn>
                            <IgrColumn
                                field="ContactTitle">
                            </IgrColumn>
                        </IgrColumnGroup>
                    </IgrColumnGroup>
                    <IgrColumnGroup
                        header="Address Information">
                        <IgrColumnGroup
                            header="Location"
                            collapsible={true}
                            expanded={false}
                            visibleWhenCollapsed={true}>
                            <IgrColumn
                                field="Country"
                                visibleWhenCollapsed={true}
                                hidden={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Region"
                                visibleWhenCollapsed={false}
                                hidden={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="City"
                                visibleWhenCollapsed={false}
                                hidden={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Address"
                                visibleWhenCollapsed={false}
                                hidden={true}>
                            </IgrColumn>
                        </IgrColumnGroup>
                        <IgrColumnGroup
                            header="Contact Information">
                            <IgrColumn
                                field="Phone">
                            </IgrColumn>
                            <IgrColumn
                                field="Fax">
                            </IgrColumn>
                            <IgrColumn
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