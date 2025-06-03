import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrGridModule } from 'igniteui-react-grids';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrGrid, IgrColumn, IgrColumnPipeArgs } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebGridDescriptionModule } from 'igniteui-react-core';
import { EmployeesDataItem, EmployeesData } from './EmployeesData';
import { IgrAvatar } from 'igniteui-react';
import { IgrCellTemplateContext } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditor: IgrPropertyEditorPanel
    private propertyEditorRef(r: IgrPropertyEditorPanel) {
        this.propertyEditor = r;
        this.setState({});
    }
    private rowEditableEditor: IgrPropertyEditorPropertyDescription
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }
    private  _columnPipeArgs1: IgrColumnPipeArgs | null = null;
    public get columnPipeArgs1(): IgrColumnPipeArgs {
        if (this._columnPipeArgs1 == null)
        {
            var columnPipeArgs1: IgrColumnPipeArgs = {} as IgrColumnPipeArgs;
            columnPipeArgs1.format = "longDate";

            this._columnPipeArgs1 = columnPipeArgs1;
        }
        return this._columnPipeArgs1;
    }

    constructor(props: any) {
        super(props);

        this.propertyEditorRef = this.propertyEditorRef.bind(this);
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
                        propertyPath="RowEditable"
                        name="RowEditableEditor"
                        valueType="Boolean1"
                        primitiveValue="True">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    ref={this.gridRef}
                    data={this.employeesData}
                    rowEditable={true}
                    primaryKey="ID">
                    <IgrColumn
                        field="Avatar"
                        header="Avatar"
                        dataType="string"
                        editable={false}
                        width="80px"
                        bodyTemplate={this.webGridAvatarCellTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Name"
                        header="Name"
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Company"
                        header="Company"
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Email"
                        header="Email"
                        width="190px"
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Fax"
                        header="Phone"
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="CreatedOn"
                        header="Date of Registration"
                        width="170px"
                        dataType="date"
                        editable={true}
                        pipeArgs={this.columnPipeArgs1}>
                    </IgrColumn>
                    <IgrColumn
                        field="LastActivity"
                        header="Last Active"
                        width="170px"
                        dataType="date"
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="EstimatedSales"
                        header="Estimated Sales"
                        dataType="number"
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="DealsLost"
                        header="Deals Lost"
                        dataType="number"
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="DealsWon"
                        header="Deals Won"
                        dataType="number"
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="DealsPending"
                        header="Deals Pending"
                        dataType="number"
                        editable={true}>
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _employeesData: EmployeesData = null;
    public get employeesData(): EmployeesData {
        if (this._employeesData == null)
        {
            this._employeesData = new EmployeesData();
        }
        return this._employeesData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            WebGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webGridAvatarCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        return (
            <div>
                <IgrAvatar shape='circle' src={props.dataContext.cell.value}>
                </IgrAvatar>
            </div>
        );
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);