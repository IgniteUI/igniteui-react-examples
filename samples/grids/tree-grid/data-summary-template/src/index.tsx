import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrTreeGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebTreeGridDescriptionModule } from 'igniteui-react-core';
import { EmployeesNestedTreeDataItem, EmployeesNestedTreeData } from './EmployeesNestedTreeData';
import { IgrPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-react-layouts';
import { IgrSummaryTemplateContext } from 'igniteui-react-grids';

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
    private summaryRowHeightEditor: IgrPropertyEditorPropertyDescription
    private toggleSummariesEditor: IgrPropertyEditorPropertyDescription
    private sizeEditor: IgrPropertyEditorPropertyDescription
    private treeGrid: IgrTreeGrid
    private treeGridRef(r: IgrTreeGrid) {
        this.treeGrid = r;
        this.setState({});
    }
    private column1: IgrColumn

    constructor(props: any) {
        super(props);

        this.propertyEditorPanel1Ref = this.propertyEditorPanel1Ref.bind(this);
        this.webTreeGridHasSummariesChange = this.webTreeGridHasSummariesChange.bind(this);
        this.webTreeGridSetGridSize = this.webTreeGridSetGridSize.bind(this);
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
                        propertyPath="SummaryRowHeight"
                        label="Summary Row Height"
                        valueType="Number"
                        name="SummaryRowHeightEditor">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        label="Toggle Summaries"
                        valueType="Boolean1"
                        primitiveValue="True"
                        changed={this.webTreeGridHasSummariesChange}
                        name="ToggleSummariesEditor">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        name="SizeEditor"
                        label="Grid Size:"
                        valueType="EnumValue"
                        dropDownNames={["Small", "Medium", "Large"]}
                        dropDownValues={["Small", "Medium", "Large"]}
                        changed={this.webTreeGridSetGridSize}>
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrTreeGrid
                    autoGenerate="false"
                    data={this.employeesNestedTreeData}
                    ref={this.treeGridRef}
                    id="treeGrid"
                    primaryKey="ID"
                    foreignKey="ParentID">
                    <IgrColumn
                        field="Name">
                    </IgrColumn>
                    <IgrColumn
                        field="Age"
                        dataType="Number"
                        hasSummary="true"
                        summaryTemplate={this.webTreeGridSummaryTemplate}
                        name="column1">
                    </IgrColumn>
                    <IgrColumn
                        field="Title"
                        hasSummary="true">
                    </IgrColumn>
                    <IgrColumn
                        field="HireDate"
                        dataType="Date">
                    </IgrColumn>
                    <IgrColumn
                        field="OnPTO"
                        dataType="Boolean"
                        editable="true"
                        hasSummary="true">
                    </IgrColumn>
                </IgrTreeGrid>
            </div>
        </div>
        );
    }

    private _employeesNestedTreeData: EmployeesNestedTreeData = null;
    public get employeesNestedTreeData(): EmployeesNestedTreeData {
        if (this._employeesNestedTreeData == null)
        {
            this._employeesNestedTreeData = new EmployeesNestedTreeData();
        }
        return this._employeesNestedTreeData;
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

    public webTreeGridHasSummariesChange(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
        let newValue = sender.primitiveValue as boolean;
        const grid = this.treeGrid;
        var column1 = grid.getColumnByName("Age");
        var column2 = grid.getColumnByName("Title");
        var column3 = grid.getColumnByName("OnPTO");

        column1.hasSummary = newValue;
        column2.hasSummary = newValue;
        column3.hasSummary = newValue;
    }

    public webTreeGridSetGridSize(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var newVal = (args.newValue as string).toLowerCase();
        var grid = document.getElementById("treeGrid");
        grid.style.setProperty('--ig-size', `var(--ig-size-${newVal})`);
    }

    public webTreeGridSummaryTemplate = (e: { dataContext: IgrSummaryTemplateContext }) => {
        const summaryResults = e.dataContext.implicit;
        return (
            <div className="summary-temp">
                <span><strong>{summaryResults[0].label}</strong><span>{(summaryResults[0] as any).summaryResult}</span></span>
                <span><strong>{summaryResults[1].label}</strong><span>{(summaryResults[1] as any).summaryResult}</span></span>
                <span><strong>{summaryResults[2].label}</strong><span>{(summaryResults[2] as any).summaryResult}</span></span>
                <span><strong>{summaryResults[3].label}</strong><span>{(summaryResults[3] as any).summaryResult}</span></span>
            </div>
        );
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);