import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrSelectModule } from 'igniteui-react';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule, WebSelectDescriptionModule } from 'igniteui-react-core';
import { WebGridCellEditSampleRoleplayItem, WebGridCellEditSampleRoleplay } from './WebGridCellEditSampleRoleplay';
import { IgrCellTemplateContext } from 'igniteui-react-grids';
import { IgrSelect, IgrSelectItem } from 'igniteui-react';

import 'igniteui-react-grids/grids/combined';
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
    private column1: IgrColumn
    private column2: IgrColumn
    private column3: IgrColumn

    constructor(props: any) {
        super(props);

        this.grid1Ref = this.grid1Ref.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate="false"
                    data={this.webGridCellEditSampleRoleplay}
                    primaryKey="Name"
                    ref={this.grid1Ref}>
                    <IgrColumn
                        field="Name"
                        header="Character Name"
                        dataType="String">
                    </IgrColumn>
                    <IgrColumn
                        field="Race"
                        header="Race"
                        dataType="String"
                        inlineEditorTemplate={this.webGridCellEditCellTemplate}
                        editable="true"
                        name="column1">
                    </IgrColumn>
                    <IgrColumn
                        field="Class"
                        header="Class"
                        inlineEditorTemplate={this.webGridCellEditCellTemplate}
                        editable="true"
                        dataType="String"
                        name="column2">
                    </IgrColumn>
                    <IgrColumn
                        field="Age"
                        header="Age"
                        dataType="String"
                        editable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Alignment"
                        header="Alignment"
                        inlineEditorTemplate={this.webGridCellEditCellTemplate}
                        editable="true"
                        dataType="String"
                        name="column3">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _webGridCellEditSampleRoleplay: WebGridCellEditSampleRoleplay = null;
    public get webGridCellEditSampleRoleplay(): WebGridCellEditSampleRoleplay {
        if (this._webGridCellEditSampleRoleplay == null)
        {
            this._webGridCellEditSampleRoleplay = new WebGridCellEditSampleRoleplay();
        }
        return this._webGridCellEditSampleRoleplay;
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
        const field: string = this.grid1.getColumnByVisibleIndex(colIndex).field;
        const key = field + "_" + cell.id.rowID;
        let index = 0;
        for(const i of (this.webGridCellEditSampleRoleplay as any)){
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
        return <><IgrSelect key={key} change={(x: any) => {
                setTimeout(() => {
                    cell.editValue = x.value;
                });
            }}>
           {cellValues}
        </IgrSelect>
        </>;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);