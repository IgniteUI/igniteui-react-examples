import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrTreeGrid, IgrPaginator, IgrPaginatorResourceStrings } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebTreeGridDescriptionModule } from 'igniteui-react-core';
import { OrdersTreeDataItem, OrdersTreeData } from './OrdersTreeData';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrTreeGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditor: IgrPropertyEditorPanel
    private propertyEditorRef(r: IgrPropertyEditorPanel) {
        this.propertyEditor = r;
        this.setState({});
    }
    private displayDensityEditor: IgrPropertyEditorPropertyDescription
    private treeGrid: IgrTreeGrid
    private treeGridRef(r: IgrTreeGrid) {
        this.treeGrid = r;
        this.setState({});
    }
    private paginator: IgrPaginator
    private  _paginatorResourceStrings1: IgrPaginatorResourceStrings | null = null;
    public get paginatorResourceStrings1(): IgrPaginatorResourceStrings {
        if (this._paginatorResourceStrings1 == null)
        {
            var paginatorResourceStrings1: IgrPaginatorResourceStrings = {} as IgrPaginatorResourceStrings;
            paginatorResourceStrings1.igx_paginator_label = "Records per page";

            this._paginatorResourceStrings1 = paginatorResourceStrings1;
        }
        return this._paginatorResourceStrings1;
    }

    constructor(props: any) {
        super(props);

        this.propertyEditorRef = this.propertyEditorRef.bind(this);
        this.treeGridRef = this.treeGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    ref={this.propertyEditorRef}
                    componentRenderer={this.renderer}
                    target={this.treeGrid}
                    descriptionType="WebTreeGrid"
                    isHorizontal="true"
                    isWrappingEnabled="true">
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="DisplayDensity"
                        name="DisplayDensityEditor"
                        label="Display Density">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrTreeGrid
                    autoGenerate="false"
                    data={this.ordersTreeData}
                    ref={this.treeGridRef}
                    id="treeGrid"
                    primaryKey="ID"
                    foreignKey="ParentID"
                    displayDensity="Cosy"
                    columns={["Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder"]}>
                    <IgrPaginator
                        name="paginator"
                        perPage="10"
                        displayDensity="Cosy"
                        resourceStrings={this.paginatorResourceStrings1}>
                    </IgrPaginator>
                </IgrTreeGrid>
            </div>
        </div>
        );
    }

    private _ordersTreeData: OrdersTreeData = null;
    public get ordersTreeData(): OrdersTreeData {
        if (this._ordersTreeData == null)
        {
            this._ordersTreeData = new OrdersTreeData();
        }
        return this._ordersTreeData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            WebTreeGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);