import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrHierarchicalGrid, IgrPinningConfig, RowPinningPosition, ColumnPinningPosition, IgrRowIsland } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebHierarchicalGridDescriptionModule } from 'igniteui-react-core';
import SingersData from './SingersData.json';
import { IgrPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-react-layouts';

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
                    autoGenerate="false"
                    data={this.singersData}
                    primaryKey="Photo"
                    id="grid"
                    ref={this.gridRef}
                    cellSelection="None"
                    pinning={this.pinningConfig1}
                    columns={["Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder"]}>
                    <IgrRowIsland
                        childDataKey="Albums"
                        primaryKey="Album"
                        cellSelection="None"
                        pinning={this.pinningConfig2}
                        autoGenerate="false"
                        columns={["Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder"]}
                        name="rowIsland1">
                        <IgrRowIsland
                            childDataKey="Songs"
                            primaryKey="Number"
                            cellSelection="None"
                            pinning={this.pinningConfig3}
                            autoGenerate="false"
                            columns={["Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder"]}
                            name="rowIsland2">
                        </IgrRowIsland>
                    </IgrRowIsland>
                    <IgrRowIsland
                        childDataKey="Tours"
                        primaryKey="Tour"
                        cellSelection="None"
                        pinning={this.pinningConfig4}
                        autoGenerate="false"
                        columns={["Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder"]}
                        name="rowIsland3">
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
        var newPinningPosition = args.newValue === "Top" ? RowPinningPosition.Top : RowPinningPosition.Bottom;
        var grid = this.grid;
        grid.pinning.rows = newPinningPosition;
        var rowIsland1 = grid.contentChildLayoutList.filter(e => e.childDataKey == 'Albums');
        rowIsland1[0].pinning.rows = newPinningPosition;
    var rowIsland2 = rowIsland1[0].contentChildLayoutList.filter(e => e.childDataKey == 'Songs');
    if(rowIsland2[0]) {
            rowIsland2[0].pinning.rows = newPinningPosition;
        }
        var rowIsland3 = grid.contentChildLayoutList.filter(e => e.childDataKey == 'Tours');
        if(rowIsland3[0]) {
            rowIsland3[0].pinning.rows = newPinningPosition
        }
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);