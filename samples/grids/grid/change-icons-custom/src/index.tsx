import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrGridModule, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarAdvancedFiltering, IgrGridToolbarExporter, IgrGridToolbarHiding, IgrGridToolbarPinning } from 'igniteui-react-grids';
import { IgrGrid, IgrPinningConfig, RowPinningPosition, IgrActionStrip, IgrGridPinningActions, IgrGridEditingActions, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebGridDescriptionModule } from 'igniteui-react-core';
import { NwindDataItem, NwindDataItem_LocationsItem, NwindData } from './NwindData';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import { IgrButtonGroup, IgrComponentValueChangedEventArgs, IgrIcon, IgrIconMeta, IgrToggleButton } from 'igniteui-react';
import { arrowDown, arrowUp, caretDown, chevronRight, ellipsisRight, eye, eyeSlash, fileExport, filter, magnifyGlass, thumbtack, thumbtackSlash, xMark } from './icons';

const mods: any[] = [
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private iconInstance: IgrIcon;
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }
    public iconRef(icon: IgrIcon){
        if(!icon){
            return;
        }
        // register icons
        this.iconInstance = icon;
        this.iconInstance.registerIconFromText("filter_list", filter, "fontAwesome");
        this.iconInstance.registerIconFromText("arrow_upward", arrowUp, "fontAwesome");
        this.iconInstance.registerIconFromText("arrow_downward", arrowDown, "fontAwesome");
        this.iconInstance.registerIconFromText("more_vert", ellipsisRight, "fontAwesome");
        this.iconInstance.registerIconFromText("unpin-left", thumbtackSlash, "fontAwesome");
        this.iconInstance.registerIconFromText("pin-left", thumbtack, "fontAwesome");
        this.iconInstance.registerIconFromText("visibility", eye, "fontAwesome");
        this.iconInstance.registerIconFromText("visibility_off", eyeSlash, "fontAwesome");
        this.iconInstance.registerIconFromText("search", magnifyGlass, "fontAwesome");
        this.iconInstance.registerIconFromText("chevron_right", chevronRight, "fontAwesome");
        this.iconInstance.registerIconFromText("clear", xMark, "fontAwesome");
        this.iconInstance.registerIconFromText("import_export", fileExport, "fontAwesome");
        this.iconInstance.registerIconFromText("arrow_drop_down", caretDown , "fontAwesome");
    }
    private _pinningConfig1: IgrPinningConfig | null = null;
    public get pinningConfig1(): IgrPinningConfig {
        if (this._pinningConfig1 == null) {
            var pinningConfig1: IgrPinningConfig = {} as IgrPinningConfig;
            pinningConfig1.rows = RowPinningPosition.Top;

            this._pinningConfig1 = pinningConfig1;
        }
        return this._pinningConfig1;
    }

    public onSelect(_buttonGroup: IgrButtonGroup, args: IgrComponentValueChangedEventArgs) {
        this.changeRefs(args.detail);
    }

    private changeRefs(collectionName: string) {
        const meta = new IgrIconMeta();
        meta.name = 'arrow_drop_down';
        meta.collection = collectionName;
        this.iconInstance.setIconRef('arrow_drop_down', 'default', meta);

        const meta2 = new IgrIconMeta();
        meta2.name = 'import_export';
        meta2.collection = collectionName;
        this.iconInstance.setIconRef('import_export', 'default', meta2);

        const meta3 = new IgrIconMeta();
        meta3.name = 'clear';
        meta3.collection = collectionName;
        this.iconInstance.setIconRef('clear', 'default', meta3);
        
        const meta4 = new IgrIconMeta();
        meta4.name = 'chevron_right';
        meta4.collection = collectionName;
        this.iconInstance.setIconRef('chevron_right', 'default', meta4);

        const meta5 = new IgrIconMeta();
        meta5.name = 'search';
        meta5.collection = collectionName;
        this.iconInstance.setIconRef('search', 'default', meta5);

        const meta6 = new IgrIconMeta();
        meta6.name = 'visibility_off';
        meta6.collection = collectionName;
        this.iconInstance.setIconRef('visibility_off', 'default', meta6);

        const meta7 = new IgrIconMeta();
        meta7.name = 'visibility';
        meta7.collection = collectionName;
        this.iconInstance.setIconRef('visibility', 'default', meta7);

        const meta8 = new IgrIconMeta();
        meta8.name = 'visibility';
        meta8.collection = collectionName === "material" ? "imx-icons" : collectionName;
        this.iconInstance.setIconRef('unpin-left', 'default', meta8);

        const meta9 = new IgrIconMeta();
        meta9.name = 'pin-left';
        meta9.collection = collectionName === "material" ? "imx-icons" : collectionName;
        this.iconInstance.setIconRef('pin-left', 'default', meta9);

        const meta10 = new IgrIconMeta();
        meta10.name = 'filter_list';
        meta10.collection = collectionName;
        this.iconInstance.setIconRef('filter_list', 'default', meta10);

        const meta11 = new IgrIconMeta();
        meta11.name = 'arrow_upward';
        meta11.collection = collectionName;
        this.iconInstance.setIconRef('arrow_upward', 'default', meta11);

        const meta12 = new IgrIconMeta();
        meta12.name = 'more_vert';
        meta12.collection = collectionName;
        this.iconInstance.setIconRef('more_vert', 'default', meta12);

        const meta13 = new IgrIconMeta();
        meta13.name = 'arrow_downward';
        meta13.collection = collectionName;
        this.iconInstance.setIconRef('arrow_downward', 'default', meta13);
    } 

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
        this.iconRef = this.iconRef.bind(this);
        this.onSelect = this.onSelect.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample ig-typography">
            <IgrButtonGroup select={this.onSelect} style={{width: 'fit-content'}}>
                <IgrToggleButton value="material" key="material" selected>
                    <span key="text">Material Icons</span>
                </IgrToggleButton>
                <IgrToggleButton value="fontAwesome" key="awesome">
                    <span key="text">Font Awesome Icons</span>
                </IgrToggleButton>
            </IgrButtonGroup>
            <IgrIcon ref={this.iconRef}></IgrIcon>
                <div className="container fill">
                    <IgrGrid
                        autoGenerate="false"
                        ref={this.gridRef}
                        data={this.nwindData}
                        rowEditable="true"
                        allowFiltering="true"
                        pinning={this.pinningConfig1}
                        filterMode="ExcelStyleFilter"
                        primaryKey="ProductID">
                        <IgrGridToolbar>
                            <IgrGridToolbarActions>
                                <IgrGridToolbarAdvancedFiltering></IgrGridToolbarAdvancedFiltering>
                                <IgrGridToolbarHiding></IgrGridToolbarHiding>
                                <IgrGridToolbarPinning></IgrGridToolbarPinning>
                                <IgrGridToolbarExporter></IgrGridToolbarExporter>
                            </IgrGridToolbarActions>
                        </IgrGridToolbar>
                        <IgrColumn
                            name="ProductName"
                            field="ProductName"
                            header="Product Name"  sortable="true">
                        </IgrColumn>
                        <IgrColumn
                            name="UnitPrice"
                            field="UnitPrice"
                            header="Unit Price" sortable="true">
                        </IgrColumn>
                        <IgrColumn
                            name="UnitsOnOrder"
                            field="UnitsOnOrder"
                            header="Units On Order" sortable="true">
                        </IgrColumn>
                        <IgrColumn
                            name="UnitsInStock"
                            field="UnitsInStock"
                            header="Units In Stock" sortable="true">
                        </IgrColumn>
                        <IgrColumn
                            name="QuantityPerUnit"
                            field="QuantityPerUnit"
                            header="Quantity Per Unit" sortable="true">
                        </IgrColumn>
                        <IgrColumn
                            name="ReorderLevel"
                            field="ReorderLevel"
                            header="Reorder Level" sortable="true">
                        </IgrColumn>
                        <IgrColumn
                            name="Discontinued"
                            field="Discontinued"
                            header="Discontinued" sortable="true">
                        </IgrColumn>
                    </IgrGrid>
                </div>
            </div>
        );
    }

    private _nwindData: NwindData = null;
    public get nwindData(): NwindData {
        if (this._nwindData == null) {
            this._nwindData = new NwindData();
        }
        return this._nwindData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample />);