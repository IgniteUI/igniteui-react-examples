import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule, IgrGridToolbarModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarPinning, IgrGridToolbarHiding, IgrGridToolbarExporter, IgrColumn, IgrColumnGroup } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule, WebGridToolbarDescriptionModule } from 'igniteui-react-core';
import { EmployeesFlatDetailsItem, EmployeesFlatDetails } from './EmployeesFlatDetails';
import { IgrExporterEventArgs, IgrGrid } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule,
    IgrGridToolbarModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private treeGrid: IgrTreeGrid
    private treeGridRef(r: IgrTreeGrid) {
        this.treeGrid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.treeGridRef = this.treeGridRef.bind(this);
        this.webGridExportEventMultiColumnHeaders = this.webGridExportEventMultiColumnHeaders.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrTreeGrid
                    autoGenerate={false}
                    ref={this.treeGridRef}
                    id="treeGrid"
                    data={this.employeesFlatDetails}
                    foreignKey="ParentID"
                    primaryKey="ID">
                    <IgrGridToolbar
                    >
                        <IgrGridToolbarActions
                        >
                            <IgrGridToolbarPinning
                            >
                            </IgrGridToolbarPinning>
                            <IgrGridToolbarHiding
                            >
                            </IgrGridToolbarHiding>
                            <IgrGridToolbarExporter
                                exportCSV={false}
                                exportExcel={true}
                                onExportStarted={this.webGridExportEventMultiColumnHeaders}>
                            </IgrGridToolbarExporter>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn
                        field="ID"
                        header="ID"
                        resizable={true}
                        filterable={false}>
                    </IgrColumn>
                    <IgrColumn
                        field="Name"
                        header="Name"
                        resizable={true}
                        sortable={true}
                        width="200px">
                    </IgrColumn>
                    <IgrColumnGroup
                        header="General Information">
                        <IgrColumn
                            field="HireDate"
                            header="HireDate"
                            dataType="date"
                            resizable={true}
                            sortable={true}>
                        </IgrColumn>
                        <IgrColumnGroup
                            header="Personal Details">
                            <IgrColumn
                                header="Title"
                                field="Title"
                                resizable={true}
                                sortable={true}>
                            </IgrColumn>
                            <IgrColumn
                                header="Age"
                                field="Age"
                                dataType="number"
                                resizable={true}
                                sortable={true}>
                            </IgrColumn>
                        </IgrColumnGroup>
                    </IgrColumnGroup>
                    <IgrColumnGroup
                        header="Address Information">
                        <IgrColumnGroup
                            header="Location">
                            <IgrColumn
                                header="Country"
                                field="Country"
                                resizable={true}
                                sortable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="City"
                                header="City"
                                resizable={true}
                                sortable={true}>
                            </IgrColumn>
                            <IgrColumn
                                header="Address"
                                field="Address"
                                resizable={true}
                                sortable={true}>
                            </IgrColumn>
                        </IgrColumnGroup>
                        <IgrColumnGroup
                            header="Contact Information">
                            <IgrColumn
                                header="Phone"
                                field="Phone"
                                resizable={true}
                                sortable={true}>
                            </IgrColumn>
                            <IgrColumn
                                header="Fax"
                                field="Fax"
                                resizable={true}
                                sortable={true}>
                            </IgrColumn>
                            <IgrColumn
                                header="PostalCode"
                                field="PostalCode"
                                resizable={true}
                                sortable={true}>
                            </IgrColumn>
                        </IgrColumnGroup>
                    </IgrColumnGroup>
                </IgrTreeGrid>
            </div>
        </div>
        );
    }

    private _employeesFlatDetails: EmployeesFlatDetails = null;
    public get employeesFlatDetails(): EmployeesFlatDetails {
        if (this._employeesFlatDetails == null)
        {
            this._employeesFlatDetails = new EmployeesFlatDetails();
        }
        return this._employeesFlatDetails;
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

    public webGridExportEventMultiColumnHeaders(args: IgrExporterEventArgs): void {
        if (args.detail.options) {
            args.detail.options.ignoreMultiColumnHeaders = false;
        }
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);