import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule, IgrGridToolbarModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarExporter, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import SingersData from './SingersData.json';
import { IgrExporterOptionsBase, IgrGridToolbarExportEventArgs } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrHierarchicalGridModule,
    IgrGridToolbarModule
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
        this.webHierarchicalGridToolbarExporting = this.webHierarchicalGridToolbarExporting.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate="false"
                    data={this.singersData}
                    primaryKey="ID"
                    toolbarExporting={this.webHierarchicalGridToolbarExporting}
                    ref={this.hierarchicalGrid1Ref}>
                    <IgrGridToolbar
                    >
                        <IgrGridToolbarActions
                        >
                            <IgrGridToolbarExporter
                            >
                            </IgrGridToolbarExporter>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn
                        field="Artist"
                        header="Artist"
                        dataType="String"
                        width="150px">
                    </IgrColumn>
                    <IgrColumn
                        field="Photo"
                        header="Photo"
                        dataType="Image">
                    </IgrColumn>
                    <IgrColumn
                        field="Debut"
                        header="Debut"
                        dataType="String">
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyNominations"
                        header="Grammy Nominations"
                        dataType="String"
                        width="200px">
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyAwards"
                        header="Grammy Awards"
                        dataType="String"
                        width="200px">
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
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _singersData: any[] = SingersData;
    public get singersData(): any[] {
        return this._singersData;
    }


    public webHierarchicalGridToolbarExporting(sender: IgrHierarchicalGrid, evt: IgrGridToolbarExportEventArgs): void {
        const args = evt.detail;
        const options: IgrExporterOptionsBase = args.options;
        if (options) {
            options.fileName = `Report_${new Date().toDateString()}`;
            (args.exporter as any).columnExporting.subscribe((columnArgs: any) => {
                    columnArgs.cancel = columnArgs.header === 'Photo';
            });
        }
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);