import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrSelectModule } from 'igniteui-react';
import { IgrTreeGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebTreeGridDescriptionModule, WebSelectDescriptionModule } from 'igniteui-react-core';
import { RoleplayTreeGridDataItem, RoleplayTreeGridData } from './RoleplayTreeGridData';
import { IgrCellTemplateContext } from 'igniteui-react-grids';
import { IgrSelect, IgrSelectItem } from 'igniteui-react';

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
    private column1: IgrColumn
    private column2: IgrColumn
    private column3: IgrColumn

    constructor(props: any) {
        super(props);

        this.treeGrid1Ref = this.treeGrid1Ref.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrTreeGrid
                    autoGenerate={false}
                    ref={this.treeGrid1Ref}
                    id="treeGrid1"
                    data={this.roleplayTreeGridData}
                    primaryKey="ID"
                    foreignKey="ParentID">
                    <IgrColumn
                        field="Name"
                        header="Character Name"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="Race"
                        header="Race"
                        dataType="string"
                        editable={true}
                        inlineEditorTemplate={this.webTreeGridCellEditCellTemplate}
                        name="column1">
                    </IgrColumn>
                    <IgrColumn
                        field="Class"
                        header="Class"
                        inlineEditorTemplate={this.webTreeGridCellEditCellTemplate}
                        dataType="string"
                        editable={true}
                        name="column2">
                    </IgrColumn>
                    <IgrColumn
                        field="Age"
                        header="Age"
                        dataType="string"
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Alignment"
                        header="Alignment"
                        inlineEditorTemplate={this.webTreeGridCellEditCellTemplate}
                        dataType="string"
                        editable={true}
                        name="column3">
                    </IgrColumn>
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

    public webTreeGridCellEditCellTemplate = (e: {dataContext: IgrCellTemplateContext}) => {
        let cellValues: any = [];
        let uniqueValues: any = [];
        const cell = e.dataContext.cell;
        const colIndex = cell.id.columnID;
        var treeGrid1 = this.treeGrid1;
        const field: string = treeGrid1.getColumnByVisibleIndex(colIndex).field;
        let roleplayTreeGridData = treeGrid1.data;
        const key = field + "_" + cell.id.rowID;
        let index = 0;
        for(const i of (roleplayTreeGridData as any)){
            if(uniqueValues.indexOf(i[field]) === -1 )
            {
                cellValues.push(<><IgrSelectItem selected={e.dataContext.cell.value == i[field]}
                 value={i[field]} key={key + "_" + index}>
                    <div key={key + "_" + index}>{i[field]}</div>
            </IgrSelectItem></>);
                uniqueValues.push(i[field]);

            }
            index++;
        }
        return (
            <IgrSelect className="size-large" key={key} onChange={(x: any) => {
                    setTimeout(() => {
                        cell.editValue = x.target.value;
                    });
                }}>
                {cellValues}
            </IgrSelect>
        );
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);