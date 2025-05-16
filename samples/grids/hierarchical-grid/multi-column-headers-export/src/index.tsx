import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridToolbarModule, IgrColumnGroupModule, IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarExporter, IgrColumnGroup, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import MultiColumnsExportData from './MultiColumnsExportData.json';
import { IgrExporterEventArgs } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridToolbarModule,
    IgrColumnGroupModule,
    IgrHierarchicalGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private hierarchicalGrid: IgrHierarchicalGrid
    private hierarchicalGridRef(r: IgrHierarchicalGrid) {
        this.hierarchicalGrid = r;
        this.setState({});
    }
    private gridToolbar: IgrGridToolbar
    private gridToolbarActions: IgrGridToolbarActions
    private hGridToolbarExporter: IgrGridToolbarExporter
    private columnGroup: IgrColumnGroup
    private column: IgrColumn
    private rowIsland: IgrRowIsland

    constructor(props: any) {
        super(props);

        this.hierarchicalGridRef = this.hierarchicalGridRef.bind(this);
        this.webHierarchicalGridExportMultiColumnHeaders = this.webHierarchicalGridExportMultiColumnHeaders.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate={false}
                    data={this.multiColumnsExportData}
                    primaryKey="ID"
                    moving={true}
                    allowFiltering={true}>
                    <IgrGridToolbar
                    >
                        <IgrGridToolbarActions
                        >
                            <IgrGridToolbarExporter
                                exportCSV={false}
                                exportExcel={true}
                                onExportStarted={this.webHierarchicalGridExportMultiColumnHeaders}>
                            </IgrGridToolbarExporter>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumnGroup
                        header="General Information">
                        <IgrColumn
                            field="Company"
                            dataType="string"
                            sortable={true}
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumnGroup
                            header="Personal Details">
                            <IgrColumn
                                field="ContactName"
                                dataType="string"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="ContactTitle"
                                dataType="string"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                        </IgrColumnGroup>
                    </IgrColumnGroup>
                    <IgrColumnGroup
                        header="Address Information">
                        <IgrColumnGroup
                            header="Location">
                            <IgrColumn
                                field="Address"
                                dataType="string"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="City"
                                dataType="string"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="PostalCode"
                                dataType="string"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Country"
                                dataType="string"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                        </IgrColumnGroup>
                        <IgrColumnGroup
                            header="Contact Information">
                            <IgrColumn
                                field="Phone"
                                dataType="string"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Fax"
                                dataType="string"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                        </IgrColumnGroup>
                    </IgrColumnGroup>
                    <IgrRowIsland
                        childDataKey="ChildCompanies"
                        autoGenerate={false}
                        moving={true}>
                        <IgrColumnGroup
                            header="General Information">
                            <IgrColumn
                                field="Company"
                                dataType="string"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumnGroup
                                header="Personal Details">
                                <IgrColumn
                                    field="ContactName"
                                    dataType="string"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                                <IgrColumn
                                    field="ContactTitle"
                                    dataType="string"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                            </IgrColumnGroup>
                        </IgrColumnGroup>
                        <IgrColumnGroup
                            header="Address Information">
                            <IgrColumnGroup
                                header="Location">
                                <IgrColumn
                                    field="Address"
                                    dataType="string"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                                <IgrColumn
                                    field="City"
                                    dataType="string"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                                <IgrColumn
                                    field="PostalCode"
                                    dataType="string"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                                <IgrColumn
                                    field="Country"
                                    dataType="string"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                            </IgrColumnGroup>
                            <IgrColumnGroup
                                header="Contact Information">
                                <IgrColumn
                                    field="Phone"
                                    dataType="string"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                                <IgrColumn
                                    field="Fax"
                                    dataType="string"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                            </IgrColumnGroup>
                        </IgrColumnGroup>
                        <IgrRowIsland
                            childDataKey="ChildCompanies"
                            autoGenerate={false}
                            moving={true}>
                            <IgrColumnGroup
                                header="General Information">
                                <IgrColumn
                                    field="Company"
                                    dataType="string"
                                    sortable={true}
                                    resizable={true}>
                                </IgrColumn>
                                <IgrColumnGroup
                                    header="Personal Details">
                                    <IgrColumn
                                        field="ContactName"
                                        dataType="string"
                                        sortable={true}
                                        resizable={true}>
                                    </IgrColumn>
                                    <IgrColumn
                                        field="ContactTitle"
                                        dataType="string"
                                        sortable={true}
                                        resizable={true}>
                                    </IgrColumn>
                                </IgrColumnGroup>
                            </IgrColumnGroup>
                            <IgrColumnGroup
                                header="Address Information">
                                <IgrColumnGroup
                                    header="Location">
                                    <IgrColumn
                                        field="Address"
                                        dataType="string"
                                        sortable={true}
                                        resizable={true}>
                                    </IgrColumn>
                                    <IgrColumn
                                        field="City"
                                        dataType="string"
                                        sortable={true}
                                        resizable={true}>
                                    </IgrColumn>
                                    <IgrColumn
                                        field="PostalCode"
                                        dataType="string"
                                        sortable={true}
                                        resizable={true}>
                                    </IgrColumn>
                                    <IgrColumn
                                        field="Country"
                                        dataType="string"
                                        sortable={true}
                                        resizable={true}>
                                    </IgrColumn>
                                </IgrColumnGroup>
                                <IgrColumnGroup
                                    header="Contact Information">
                                    <IgrColumn
                                        field="Phone"
                                        dataType="string"
                                        sortable={true}
                                        resizable={true}>
                                    </IgrColumn>
                                    <IgrColumn
                                        field="Fax"
                                        dataType="string"
                                        sortable={true}
                                        resizable={true}>
                                    </IgrColumn>
                                </IgrColumnGroup>
                            </IgrColumnGroup>
                        </IgrRowIsland>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _multiColumnsExportData: any[] = MultiColumnsExportData;
    public get multiColumnsExportData(): any[] {
        return this._multiColumnsExportData;
    }


    public webHierarchicalGridExportMultiColumnHeaders(args: IgrExporterEventArgs): void {
        if (args.detail.options) {
            args.detail.options.ignoreMultiColumnHeaders = false;
        }
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);