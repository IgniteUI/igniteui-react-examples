import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrAvatarModule } from 'igniteui-react';
import { IgrTreeGrid, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarExporter, IgrColumn } from 'igniteui-react-grids';
import { EmployeesFlatAvatarsItem, EmployeesFlatAvatars } from './EmployeesFlatAvatars';
import { IgrExporterOptionsBase, IgrGridToolbarExportEventArgs } from 'igniteui-react-grids';
import { IgrAvatar } from 'igniteui-react';
import { IgrCellTemplateContext } from 'igniteui-react-grids';

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
    private column1: IgrColumn

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
                    toolbarExporting={this.webTreeGridToolbarExporting}>
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
                        dataType="String"
                        bodyTemplate={this.webTreeGridAvatarCellTemplate}
                        name="column1">
                    </IgrColumn>
                    <IgrColumn
                        field="Title"
                        dataType="String">
                    </IgrColumn>
                    <IgrColumn
                        field="ID"
                        dataType="Number">
                    </IgrColumn>
                    <IgrColumn
                        field="Age"
                        dataType="Number">
                    </IgrColumn>
                    <IgrColumn
                        field="HireDate"
                        dataType="Date">
                    </IgrColumn>
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

    public webTreeGridAvatarCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        return (
            <div className="cell__inner">
                <IgrAvatar shape='circle' src={props.dataContext.cell.row.data.Avatar}>
                </IgrAvatar>
                <span className="name">{props.dataContext.cell.value}</span>
            </div>
        );
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);