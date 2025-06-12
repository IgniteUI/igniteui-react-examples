import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrSelectModule } from 'igniteui-react';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule, WebSelectDescriptionModule } from 'igniteui-react-core';
import { RoleplayDataStatsItem, RoleplayDataStats } from './RoleplayDataStats';
import { IgrCellTemplateContext } from 'igniteui-react-grids';
import { IgrSelect, IgrSelectItem } from 'igniteui-react';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule,
    IgrSelectModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid1: IgrGrid
    private grid1Ref(r: IgrGrid) {
        this.grid1 = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.grid1Ref = this.grid1Ref.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    ref={this.grid1Ref}
                    data={this.roleplayDataStats}
                    primaryKey="Name">
                    <IgrColumn
                        field="Name"
                        header="Character Name"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="Race"
                        header="Race"
                        dataType="string"
                        inlineEditorTemplate={this.webGridCellEditCellTemplate}
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Class"
                        header="Class"
                        inlineEditorTemplate={this.webGridCellEditCellTemplate}
                        editable={true}
                        dataType="string">
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
                        inlineEditorTemplate={this.webGridCellEditCellTemplate}
                        editable={true}
                        dataType="string">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _roleplayDataStats: RoleplayDataStats = null;
    public get roleplayDataStats(): RoleplayDataStats {
        if (this._roleplayDataStats == null)
        {
            this._roleplayDataStats = new RoleplayDataStats();
        }
        return this._roleplayDataStats;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebGridDescriptionModule.register(context);
            WebSelectDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webGridCellEditCellTemplate = (e: {dataContext: IgrCellTemplateContext}) => {
        let cellValues: any = [];
        let uniqueValues: any = [];
        const cell = e.dataContext.cell;
        const colIndex = cell.id.columnID;
        let grid1 = this.grid1;
        const field: string = grid1.getColumnByVisibleIndex(colIndex).field;
        const key = field + "_" + cell.id.rowID;
        let index = 0;
        let roleplayDataStats = grid1.data;
        for(const i of (roleplayDataStats as any)){
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