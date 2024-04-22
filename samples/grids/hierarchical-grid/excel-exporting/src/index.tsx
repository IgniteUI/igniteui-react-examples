import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridToolbarModule, IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarExporter, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import SingersExportData from './SingersExportData.json';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridToolbarModule,
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
                    autoGenerate="false"
                    data={this.singersExportData}
                    primaryKey="ID"
                    allowFiltering="true"
                    filterMode="ExcelStyleFilter"
                    ref={this.hierarchicalGrid1Ref}>
                    <IgrGridToolbar
                    >
                        <IgrGridToolbarActions
                        >
                            <IgrGridToolbarExporter
                                exportCSV="false"
                                exportExcel="true">
                            </IgrGridToolbarExporter>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn
                        field="Artist"
                        header="Artist"
                        dataType="String"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Debut"
                        header="Debut"
                        dataType="Number">
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyNominations"
                        header="Grammy Nominations"
                        dataType="Number"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyAwards"
                        header="Grammy Awards"
                        dataType="Number"
                        sortable="true">
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Albums"
                        autoGenerate="false">
                        <IgrColumn
                            field="Album"
                            header="Album"
                            dataType="String">
                        </IgrColumn>
                        <IgrColumn
                            field="LaunchDate"
                            header="Launch Date"
                            dataType="Date">
                        </IgrColumn>
                        <IgrColumn
                            field="BillboardReview"
                            header="Billboard Review"
                            dataType="String">
                        </IgrColumn>
                        <IgrColumn
                            field="USBillboard200"
                            header="US Billboard 200"
                            dataType="String">
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="Songs"
                            autoGenerate="false">
                            <IgrColumn
                                field="Number"
                                header="No."
                                dataType="String">
                            </IgrColumn>
                            <IgrColumn
                                field="Title"
                                header="Title"
                                dataType="String">
                            </IgrColumn>
                            <IgrColumn
                                field="Released"
                                header="Released"
                                dataType="Date">
                            </IgrColumn>
                            <IgrColumn
                                field="Genre"
                                header="Genre"
                                dataType="String">
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                    <IgrRowIsland
                        childDataKey="Tours"
                        autoGenerate="false">
                        <IgrColumn
                            field="Tour"
                            header="Tour"
                            dataType="String">
                        </IgrColumn>
                        <IgrColumn
                            field="StartedOn"
                            header="Started on"
                            dataType="String">
                        </IgrColumn>
                        <IgrColumn
                            field="Location"
                            header="Location"
                            dataType="String">
                        </IgrColumn>
                        <IgrColumn
                            field="Headliner"
                            header="Headliner"
                            dataType="String">
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="TourData"
                            autoGenerate="false">
                            <IgrColumn
                                field="Country"
                                header="Country"
                                dataType="String">
                            </IgrColumn>
                            <IgrColumn
                                field="TicketsSold"
                                header="Tickets Sold"
                                dataType="Number">
                            </IgrColumn>
                            <IgrColumn
                                field="Attendants"
                                header="Attendants"
                                dataType="Number">
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _singersExportData: any[] = SingersExportData;
    public get singersExportData(): any[] {
        return this._singersExportData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);