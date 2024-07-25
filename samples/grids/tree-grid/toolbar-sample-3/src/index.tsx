import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrAvatarModule } from 'igniteui-react';
import { IgrTreeGrid, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarExporter } from 'igniteui-react-grids';
import { EmployeesFlatAvatarsItem, EmployeesFlatAvatars } from './EmployeesFlatAvatars';
import { IgrExporterOptionsBase, IgrGridToolbarExportEventArgs } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrTreeGridModule,
    IgrAvatarModule
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
        this.webTreeGridToolbarExporting = this.webTreeGridToolbarExporting.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrTreeGrid
                    autoGenerate="false"
                    ref={this.treeGridRef}
                    id="treeGrid"
                    data={this.employeesFlatAvatars}
                    primaryKey="ID"
                    foreignKey="ParentID"
                    toolbarExporting={this.webTreeGridToolbarExporting}
                    columns={["Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder"]}>
                    <IgrGridToolbar
                    >
                        <IgrGridToolbarActions
                        >
                            <IgrGridToolbarExporter
                            >
                            </IgrGridToolbarExporter>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                </IgrTreeGrid>
            </div>
        </div>
        );
    }

    private _employeesFlatAvatars: EmployeesFlatAvatars = null;
    public get employeesFlatAvatars(): EmployeesFlatAvatars {
        if (this._employeesFlatAvatars == null)
        {
            this._employeesFlatAvatars = new EmployeesFlatAvatars();
        }
        return this._employeesFlatAvatars;
    }


    public webTreeGridToolbarExporting(sender: IgrTreeGrid, evt: IgrGridToolbarExportEventArgs): void {
        const args = evt.detail;
        const options: IgrExporterOptionsBase = args.options;
        if (options) {
            options.fileName = `Report_${new Date().toDateString()}`;
            (args.exporter as any).columnExporting.subscribe((columnArgs: any) => {
                    columnArgs.cancel = columnArgs.header === 'Name';
            });
        }
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);