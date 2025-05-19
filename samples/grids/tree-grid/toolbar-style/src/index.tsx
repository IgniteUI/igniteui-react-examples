import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrAvatarModule } from 'igniteui-react';
import { IgrTreeGrid, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarAdvancedFiltering, IgrGridToolbarHiding, IgrGridToolbarPinning, IgrGridToolbarExporter, IgrColumn } from 'igniteui-react-grids';
import { EmployeesFlatAvatarsItem, EmployeesFlatAvatars } from './EmployeesFlatAvatars';
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
    private grid: IgrTreeGrid
    private gridRef(r: IgrTreeGrid) {
        this.grid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrTreeGrid
                    autoGenerate={false}
                    ref={this.gridRef}
                    id="grid"
                    data={this.employeesFlatAvatars}
                    primaryKey="ID"
                    foreignKey="ParentID"
                    allowAdvancedFiltering={true}>
                    <IgrGridToolbar
                    >
                        <IgrGridToolbarActions
                        >
                            <IgrGridToolbarAdvancedFiltering
                            >
                            </IgrGridToolbarAdvancedFiltering>
                            <IgrGridToolbarHiding
                            >
                            </IgrGridToolbarHiding>
                            <IgrGridToolbarPinning
                            >
                            </IgrGridToolbarPinning>
                            <IgrGridToolbarExporter
                            >
                            </IgrGridToolbarExporter>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn
                        field="Name"
                        dataType="string"
                        bodyTemplate={this.webTreeGridAvatarCellTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Title"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="ID"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="Age"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="HireDate"
                        dataType="date">
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