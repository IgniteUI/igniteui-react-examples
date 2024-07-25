import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrSelectModule } from 'igniteui-react';
import { IgrTreeGrid } from 'igniteui-react-grids';
import { ComponentRenderer, WebTreeGridDescriptionModule, WebSelectDescriptionModule } from 'igniteui-react-core';
import { RoleplayTreeGridDataItem, RoleplayTreeGridData } from './RoleplayTreeGridData';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrTreeGridModule,
    IgrSelectModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private treeGrid1: IgrTreeGrid
    private treeGrid1Ref(r: IgrTreeGrid) {
        this.treeGrid1 = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.treeGrid1Ref = this.treeGrid1Ref.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrTreeGrid
                    autoGenerate="false"
                    ref={this.treeGrid1Ref}
                    id="treeGrid1"
                    data={this.roleplayTreeGridData}
                    primaryKey="ID"
                    foreignKey="ParentID"
                    columns={["Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder"]}>
                </IgrTreeGrid>
            </div>
        </div>
        );
    }

    private _roleplayTreeGridData: RoleplayTreeGridData = null;
    public get roleplayTreeGridData(): RoleplayTreeGridData {
        if (this._roleplayTreeGridData == null)
        {
            this._roleplayTreeGridData = new RoleplayTreeGridData();
        }
        return this._roleplayTreeGridData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebTreeGridDescriptionModule.register(context);
            WebSelectDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);