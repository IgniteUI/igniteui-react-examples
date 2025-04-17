import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrTreeGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebTreeGridDescriptionModule } from 'igniteui-react-core';
import { OrdersTreeDataItem, OrdersTreeData } from './OrdersTreeData';
import { IgrPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-react-layouts';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrTreeGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditorPanel1: IgrPropertyEditorPanel
    private propertyEditorPanel1Ref(r: IgrPropertyEditorPanel) {
        this.propertyEditorPanel1 = r;
        this.setState({});
    }
    private summaryCalculationModeEditor: IgrPropertyEditorPropertyDescription
    private summaryPositionEditor: IgrPropertyEditorPropertyDescription
    private showSummaryOnCollapseEditor: IgrPropertyEditorPropertyDescription
    private treeGrid: IgrTreeGrid
    private treeGridRef(r: IgrTreeGrid) {
        this.treeGrid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.propertyEditorPanel1Ref = this.propertyEditorPanel1Ref.bind(this);
        this.webTreeGridChangeSummaryCalculationMode = this.webTreeGridChangeSummaryCalculationMode.bind(this);
        this.webTreeGridChangeSummaryPosition = this.webTreeGridChangeSummaryPosition.bind(this);
        this.treeGridRef = this.treeGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    componentRenderer={this.renderer}
                    target={this.treeGrid}
                    descriptionType="WebTreeGrid"
                    isHorizontal="true"
                    isWrappingEnabled="false"
                    ref={this.propertyEditorPanel1Ref}>
                    <IgrPropertyEditorPropertyDescription
                        name="SummaryCalculationModeEditor"
                        label="Summary Calculation Mode"
                        valueType="EnumValue"
                        dropDownNames={["rootLevelOnly", "childLevelsOnly", "rootAndChildLevels"]}
                        dropDownValues={["rootLevelOnly", "childLevelsOnly", "rootAndChildLevels"]}
                        changed={this.webTreeGridChangeSummaryCalculationMode}>
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        name="SummaryPositionEditor"
                        label="Summary Position"
                        valueType="EnumValue"
                        dropDownNames={["top", "bottom"]}
                        dropDownValues={["top", "bottom"]}
                        changed={this.webTreeGridChangeSummaryPosition}>
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        label="Show summary row when group row is collapsed:"
                        propertyPath="ShowSummaryOnCollapse"
                        name="ShowSummaryOnCollapseEditor">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrTreeGrid
                    autoGenerate={false}
                    data={this.ordersTreeData}
                    id="treeGrid"
                    primaryKey="ID"
                    foreignKey="ParentID">
                    <IgrColumn
                        field="ID"
                        header="Order ID"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Name"
                        header="Order Product"
                        hasSummary={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Price"
                        dataType="number"
                        hasSummary={true}
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Delivered"
                        dataType="boolean">
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        dataType="date">
                    </IgrColumn>
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

    public webTreeGridChangeSummaryCalculationMode(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
      var treeGrid = this.treeGrid;
      treeGrid.summaryCalculationMode = args.newValue;
    }

    public webTreeGridChangeSummaryPosition(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
      var treeGrid = this.treeGrid;
      treeGrid.summaryPosition = args.newValue;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);