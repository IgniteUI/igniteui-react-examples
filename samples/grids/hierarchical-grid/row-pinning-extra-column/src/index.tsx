import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrHierarchicalGrid, IgrPinningConfig, RowPinningPosition, ColumnPinningPosition, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebHierarchicalGridDescriptionModule } from 'igniteui-react-core';
import SingersData from './SingersData.json';
import { IgrPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-react-layouts';
import { IgrCellTemplateContext, IgrRowType } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrHierarchicalGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditorHierarchicalGrid: IgrPropertyEditorPanel
    private propertyEditorHierarchicalGridRef(r: IgrPropertyEditorPanel) {
        this.propertyEditorHierarchicalGrid = r;
        this.setState({});
    }
    private rowPinningEditor: IgrPropertyEditorPropertyDescription
    private grid: IgrHierarchicalGrid
    private gridRef(r: IgrHierarchicalGrid) {
        this.grid = r;
        this.setState({});
    }
    private  _pinningConfig1: IgrPinningConfig | null = null;
    public get pinningConfig1(): IgrPinningConfig {
        if (this._pinningConfig1 == null)
        {
            var pinningConfig1: IgrPinningConfig = {} as IgrPinningConfig;
            pinningConfig1.rows = RowPinningPosition.Top;
            pinningConfig1.columns = ColumnPinningPosition.End;

            this._pinningConfig1 = pinningConfig1;
        }
        return this._pinningConfig1;
    }
    private column1: IgrColumn
    private rowIsland1: IgrRowIsland
    private  _pinningConfig2: IgrPinningConfig | null = null;
    public get pinningConfig2(): IgrPinningConfig {
        if (this._pinningConfig2 == null)
        {
            var pinningConfig2: IgrPinningConfig = {} as IgrPinningConfig;
            pinningConfig2.rows = RowPinningPosition.Top;
            pinningConfig2.columns = ColumnPinningPosition.End;

            this._pinningConfig2 = pinningConfig2;
        }
        return this._pinningConfig2;
    }
    private column2: IgrColumn
    private rowIsland2: IgrRowIsland
    private  _pinningConfig3: IgrPinningConfig | null = null;
    public get pinningConfig3(): IgrPinningConfig {
        if (this._pinningConfig3 == null)
        {
            var pinningConfig3: IgrPinningConfig = {} as IgrPinningConfig;
            pinningConfig3.rows = RowPinningPosition.Top;
            pinningConfig3.columns = ColumnPinningPosition.End;

            this._pinningConfig3 = pinningConfig3;
        }
        return this._pinningConfig3;
    }
    private column3: IgrColumn
    private rowIsland3: IgrRowIsland
    private  _pinningConfig4: IgrPinningConfig | null = null;
    public get pinningConfig4(): IgrPinningConfig {
        if (this._pinningConfig4 == null)
        {
            var pinningConfig4: IgrPinningConfig = {} as IgrPinningConfig;
            pinningConfig4.rows = RowPinningPosition.Top;
            pinningConfig4.columns = ColumnPinningPosition.End;

            this._pinningConfig4 = pinningConfig4;
        }
        return this._pinningConfig4;
    }
    private column4: IgrColumn

    constructor(props: any) {
        super(props);

        this.propertyEditorHierarchicalGridRef = this.propertyEditorHierarchicalGridRef.bind(this);
        this.webHierarchicalGridChangePinningConfig = this.webHierarchicalGridChangePinningConfig.bind(this);
        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    ref={this.propertyEditorHierarchicalGridRef}
                    componentRenderer={this.renderer}
                    target={this.grid}
                    descriptionType="WebHierarchicalGrid"
                    isHorizontal="true"
                    isWrappingEnabled="true">
                    <IgrPropertyEditorPropertyDescription
                        name="rowPinningEditor"
                        label="Row Pinning toggle"
                        valueType="EnumValue"
                        dropDownNames={["Top", "Bottom"]}
                        dropDownValues={["Top", "Bottom"]}
                        changed={this.webHierarchicalGridChangePinningConfig}>
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate={false}
                    data={this.singersData}
                    primaryKey="Photo"
                    id="grid"
                    ref={this.gridRef}
                    cellSelection="none"
                    pinning={this.pinningConfig1}>
                    <IgrColumn
                        width="70px"
                        filterable={false}
                        pinned={true}
                        bodyTemplate={this.webHierarchicalGridRowPinCellTemplate}
                        name="column1">
                    </IgrColumn>
                    <IgrColumn
                        field="Artist"
                        header="Artist"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="Photo"
                        header="Photo"
                        dataType="image">
                    </IgrColumn>
                    <IgrColumn
                        field="Debut"
                        header="Debut"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyNominations"
                        header="Grammy Nominations"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyAwards"
                        header="Grammy Awards"
                        dataType="string">
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Albums"
                        primaryKey="Album"
                        cellSelection="none"
                        pinning={this.pinningConfig2}
                        autoGenerate={false}
                        name="rowIsland1">
                        <IgrColumn
                            width="70px"
                            filterable={false}
                            pinned={true}
                            bodyTemplate={this.webHierarchicalGridRowPinCellTemplate}
                            name="column2">
                        </IgrColumn>
                        <IgrColumn
                            field="Album"
                            header="Album"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="LaunchDate"
                            header="Launch Date"
                            dataType="date">
                        </IgrColumn>
                        <IgrColumn
                            field="BillboardReview"
                            header="Billboard Review"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="USBillboard200"
                            header="US Billboard 200"
                            dataType="string">
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="Songs"
                            primaryKey="Number"
                            cellSelection="none"
                            pinning={this.pinningConfig3}
                            autoGenerate={false}
                            name="rowIsland2">
                            <IgrColumn
                                width="70px"
                                filterable={false}
                                pinned={true}
                                bodyTemplate={this.webHierarchicalGridRowPinCellTemplate}
                                name="column3">
                            </IgrColumn>
                            <IgrColumn
                                field="Number"
                                header="No."
                                dataType="string">
                            </IgrColumn>
                            <IgrColumn
                                field="Title"
                                header="Title"
                                dataType="string">
                            </IgrColumn>
                            <IgrColumn
                                field="Released"
                                header="Released"
                                dataType="string">
                            </IgrColumn>
                            <IgrColumn
                                field="Genre"
                                header="Genre"
                                dataType="string">
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                    <IgrRowIsland
                        childDataKey="Tours"
                        primaryKey="Tour"
                        cellSelection="none"
                        pinning={this.pinningConfig4}
                        autoGenerate={false}
                        name="rowIsland3">
                        <IgrColumn
                            width="70px"
                            filterable={false}
                            pinned={true}
                            bodyTemplate={this.webHierarchicalGridRowPinCellTemplate}
                            name="column4">
                        </IgrColumn>
                        <IgrColumn
                            field="Tour"
                            header="Tour"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="StartedOn"
                            header="Started on"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="Location"
                            header="Location"
                            dataType="string">
                        </IgrColumn>
                        <IgrColumn
                            field="Headliner"
                            header="Headliner"
                            dataType="string">
                        </IgrColumn>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _singersData: any[] = SingersData;
    public get singersData(): any[] {
        return this._singersData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            WebHierarchicalGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webHierarchicalGridChangePinningConfig(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
        const rows = args.newValue === "Top" ? RowPinningPosition.Top : RowPinningPosition.Bottom;
        const columns = ColumnPinningPosition.End;
        this._pinningConfig1 = { rows, columns };
        this._pinningConfig2 = { rows, columns };
        if ('_pinningConfig3' in this) {
            this._pinningConfig3 = { rows, columns };
        }
        if ('_pinningConfig4' in this) {
            this._pinningConfig4 = { rows, columns };
        }
        this.forceUpdate(); // due to not using state
    }

    public webHierarchicalGridRowPinCellTemplate = (e: {dataContext: IgrCellTemplateContext}) => {
        const row = e.dataContext.cell.row;
        return (
            <span onPointerDown={(e: any) => this.toggleRowPin(row)} style={{ cursor: 'pointer'}}>📌</span>
        );
    }

    public toggleRowPin(row: IgrRowType) {
        row.pinned = !row.pinned;
    }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);