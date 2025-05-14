import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrHierarchicalGrid, IgrPinningConfig, RowPinningPosition, ColumnPinningPosition, IgrColumn, IgrActionStrip, IgrGridPinningActions, IgrRowIsland } from 'igniteui-react-grids';
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
    private actionStrip1: IgrActionStrip
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
    private actionStrip2: IgrActionStrip

    constructor(props: any) {
        super(props);

        this.propertyEditorHierarchicalGridRef = this.propertyEditorHierarchicalGridRef.bind(this);
        this.webHierarchicalGridChangePinningConfig = this.webHierarchicalGridChangePinningConfig.bind(this);
        this.gridRef = this.gridRef.bind(this);
        this.webHierarchicalGridPinRowOnRendered = this.webHierarchicalGridPinRowOnRendered.bind(this);
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
                    cellSelection="none"
                    onRendered={this.webHierarchicalGridPinRowOnRendered}
                    pinning={this.pinningConfig1}>
                    <IgrColumn
                        field="Artist"
                        header="Artist"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="Photo"
                        header="Photo"
                        dataType="image"
                        minWidth="115px">
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
                    <IgrActionStrip
                    >
                        <IgrGridPinningActions
                        >
                        </IgrGridPinningActions>
                    </IgrActionStrip>
                    <IgrRowIsland
                        childDataKey="Albums"
                        primaryKey="Album"
                        cellSelection="none"
                        autoGenerate={false}
                        pinning={this.pinningConfig2}>
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
                        <IgrActionStrip
                        >
                            <IgrGridPinningActions
                            >
                            </IgrGridPinningActions>
                        </IgrActionStrip>
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

    public webHierarchicalGridPinRowOnRendered(): void {
        var hierarchicalGrid = this.grid;
        hierarchicalGrid.pinRow(hierarchicalGrid.data[0].Photo);
        hierarchicalGrid.pinRow(hierarchicalGrid.data[1].Photo);
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);