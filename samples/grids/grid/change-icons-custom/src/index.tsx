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
import { IgrButtonGroup, IgrComponentValueChangedEventArgs, IgrIcon, IgrIconMeta, IgrToggleButton, setIconRef, registerIconFromText } from 'igniteui-react';
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

    public onSelect(_buttonGroup: IgrButtonGroup, args: IgrComponentValueChangedEventArgs) {
        this.changeRefs(args.detail);
    }

    private changeRefs(collectionName: string) {
        setIconRef('arrow_drop_down', 'default', {
            name: 'arrow_drop_down',
            collection: collectionName,
        });
        setIconRef('file_download', 'default', {
            name: 'file_download',
            collection: collectionName,
        });
        setIconRef('clear', 'default', {
            name: 'clear',
            collection: collectionName,
        });
        setIconRef('chevron_right', 'default', {
            name: 'chevron_right',
            collection: collectionName,
        });

        setIconRef('search', 'default', {
            name: 'search',
            collection: collectionName,
        });

        setIconRef('hide', 'default', {
            name: 'visibility_off',
            collection: collectionName,
        });

        setIconRef('show', 'default', {
            name: 'visibility',
            collection: collectionName,
        });

        setIconRef('unpin', 'default', {
            name: 'unpin-left',
            collection: collectionName === "material" ? "imx-icons" : collectionName,
        });

        setIconRef('pin', 'default', {
            name: 'pin-left',
            collection: collectionName === "material" ? "imx-icons" : collectionName,
        });
        setIconRef('filter_list', 'default', {
            name: 'filter_list',
            collection: collectionName,
        });

        setIconRef('sort_asc', 'default', {
            name: 'arrow_upward',
            collection: collectionName,
        });

        setIconRef('more_vert', 'default', {
            name: 'more_vert',
            collection: collectionName,
        });

        setIconRef('sort_desc', 'default', {
            name: 'arrow_downward',
            collection: collectionName,
        });
    }

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
        this.onSelect = this.onSelect.bind(this);

        registerIconFromText("filter_list", filter, "fontAwesome");
        registerIconFromText("arrow_upward", arrowUp, "fontAwesome");
        registerIconFromText("arrow_downward", arrowDown, "fontAwesome");
        registerIconFromText("more_vert", ellipsisRight, "fontAwesome");
        registerIconFromText("unpin-left", thumbtackSlash, "fontAwesome");
        registerIconFromText("pin-left", thumbtack, "fontAwesome");
        registerIconFromText("visibility", eye, "fontAwesome");
        registerIconFromText("visibility_off", eyeSlash, "fontAwesome");
        registerIconFromText("search", magnifyGlass, "fontAwesome");
        registerIconFromText("chevron_right", chevronRight, "fontAwesome");
        registerIconFromText("clear", xMark, "fontAwesome");
        registerIconFromText("file_download", fileExport, "fontAwesome");
        registerIconFromText("arrow_drop_down", caretDown, "fontAwesome");
    }

    public render(): JSX.Element {
        return (
            <div className="container sample ig-typography">
                <IgrButtonGroup select={this.onSelect} style={{ width: 'fit-content' }}>
                    <IgrToggleButton value="material" key="material" selected>
                        <span key="text">Material Icons</span>
                    </IgrToggleButton>
                    <IgrToggleButton value="fontAwesome" key="awesome">
                        <span key="text">Font Awesome Icons</span>
                    </IgrToggleButton>
                </IgrButtonGroup>
                <div className="container fill">
                    <IgrGrid
                        autoGenerate="false"
                        ref={this.gridRef}
                        data={this.nwindData}
                        rowEditable="true"
                        allowFiltering="true"
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
                            header="Product Name" sortable="true">
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