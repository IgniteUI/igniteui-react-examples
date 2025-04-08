import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarExporter, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule } from 'igniteui-react-core';
import { AthletesDataItem, AthletesData } from './AthletesData';
import { IgrGridToolbarExportEventArgs, IgrExporterOptionsBase } from 'igniteui-react-grids';

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
    private gridToolbar: IgrGridToolbar
    private gridToolbarActions: IgrGridToolbarActions
    private gridToolbarExporter: IgrGridToolbarExporter
    private column: IgrColumn

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
        this.webGridToolbarExporting = this.webGridToolbarExporting.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    data={this.athletesData}
                    onToolbarExporting={this.webGridToolbarExporting}>
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
                        field="Name"
                        header="Athlete"
                        width="200px">
                    </IgrColumn>
                    <IgrColumn
                        field="CountryName"
                        header="Country"
                        width="200px">
                    </IgrColumn>
                    <IgrColumn
                        field="BeatsPerMinute"
                        header="Beats Per Minute">
                    </IgrColumn>
                    <IgrColumn
                        field="TopSpeed"
                        header="Top Speed">
                    </IgrColumn>
                    <IgrColumn
                        field="AthleteNumber"
                        header="ID">
                    </IgrColumn>
                    <IgrColumn
                        field="TrackProgress"
                        header="Progress">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _athletesData: AthletesData = null;
    public get athletesData(): AthletesData {
        if (this._athletesData == null)
        {
            this._athletesData = new AthletesData();
        }
        return this._athletesData;
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

    public webGridToolbarExporting(sender: IgrGrid, evt: IgrGridToolbarExportEventArgs): void {
        const args = evt.detail;
        const options: IgrExporterOptionsBase = (args.nativeElement as any).options;
        const exporter = (args.nativeElement as any).exporter;
        if (options) {
            options.fileName = `Report_${new Date().toDateString()}`;
            exporter.columnExporting.subscribe((columnArgs: any) => {
                    columnArgs.cancel = columnArgs.header === 'Athlete' || columnArgs.header === 'Country';
            });
        }
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);