import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule, IgrColumnGroupModule } from 'igniteui-react-grids';
import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrGrid } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule, WebColumnGroupDescriptionModule, PropertyEditorPanelDescriptionModule } from 'igniteui-react-core';
import { CustomersDataItem, CustomersData } from './CustomersData';
import { IgrPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-react-layouts';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule,
    IgrColumnGroupModule,
    IgrPropertyEditorPanelModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditor: IgrPropertyEditorPanel
    private propertyEditorRef(r: IgrPropertyEditorPanel) {
        this.propertyEditor = r;
        this.setState({});
    }
    private propertyEditorPropertyDescription1: IgrPropertyEditorPropertyDescription
    private propertyEditorPropertyDescription2: IgrPropertyEditorPropertyDescription
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.propertyEditorRef = this.propertyEditorRef.bind(this);
        this.webGridPinFirstGroupToggle = this.webGridPinFirstGroupToggle.bind(this);
        this.webGridHideFirstGroupToggle = this.webGridHideFirstGroupToggle.bind(this);
        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    ref={this.propertyEditorRef}
                    componentRenderer={this.renderer}
                    target={this.grid}
                    descriptionType="WebGrid"
                    isHorizontal="true"
                    isWrappingEnabled="true">
                    <IgrPropertyEditorPropertyDescription
                        valueType="Button"
                        primitiveValue="Toggle First Group Pinned"
                        buttonClicked={this.webGridPinFirstGroupToggle}
                        name="propertyEditorPropertyDescription1">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        valueType="Button"
                        primitiveValue="Toggle First Group Hidden"
                        buttonClicked={this.webGridHideFirstGroupToggle}
                        name="propertyEditorPropertyDescription2">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrGrid
                    autoGenerate="false"
                    data={this.customersData}
                    ref={this.gridRef}
                    id="grid"
                    columns={["Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder"]}>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _customersData: CustomersData = null;
    public get customersData(): CustomersData {
        if (this._customersData == null)
        {
            this._customersData = new CustomersData();
        }
        return this._customersData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebGridDescriptionModule.register(context);
            WebColumnGroupDescriptionModule.register(context);
            PropertyEditorPanelDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webGridPinFirstGroupToggle(sender: any, args: IgrPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        const grid: IgrGrid = this.grid;
        const firstColumnGroup = grid.getColumnByName("Company").parent;
        firstColumnGroup.pinned = !firstColumnGroup.pinned;
        grid.markForCheck();
    }

    public webGridHideFirstGroupToggle(sender: any, args: IgrPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        const grid: IgrGrid = this.grid;
        const firstColumnGroup = grid.getColumnByName("Company").parent;
        firstColumnGroup.hidden = !firstColumnGroup.hidden;
        grid.markForCheck();
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);