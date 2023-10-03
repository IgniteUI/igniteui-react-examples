import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarHiding, IgrColumn, IgrColumnPipeArgs } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebGridDescriptionModule } from 'igniteui-react-core';
import { NwindDataItem, NwindDataItem_LocationsItem, NwindData } from './NwindData';
import { IgrGridHeaderTemplateContext, IgrCellTemplateContext } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }
    private productName: IgrColumn
    private quantityPerUnit: IgrColumn
    private unitPrice: IgrColumn
    private orderDate: IgrColumn
    private discontinued: IgrColumn

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="container fill">
                <IgrGrid
                    autoGenerate="false"
                    ref={this.gridRef}
                    data={this.nwindData}
                    moving="true"
                    allowFiltering="true"
                    filterMode="ExcelStyleFilter"
                    excelStyleHeaderIconTemplate={this.webGridFilterAltIconTemplate}>
                    <IgrGridToolbar
                    >
                        <IgrGridToolbarActions
                        >
                            <IgrGridToolbarHiding
                            >
                            </IgrGridToolbarHiding>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn
                        name="ProductName"
                        field="ProductName"
                        header="Product Name">
                    </IgrColumn>
                    <IgrColumn
                        name="QuantityPerUnit"
                        field="QuantityPerUnit"
                        header="Quantity Per Unit">
                    </IgrColumn>
                    <IgrColumn
                        name="UnitPrice"
                        field="UnitPrice"
                        header="Unit Price"
                        dataType="Currency">
                        <IgrColumnPipeArgs
                            digitsInfo="1.2-2">
                        </IgrColumnPipeArgs>
                    </IgrColumn>
                    <IgrColumn
                        name="OrderDate"
                        field="OrderDate"
                        header="Order Date"
                        dataType="Date">
                        <IgrColumnPipeArgs
                            format="MM/dd/YYYY">
                        </IgrColumnPipeArgs>
                    </IgrColumn>
                    <IgrColumn
                        name="Discontinued"
                        field="Discontinued"
                        header="Discontinued"
                        bodyTemplate={this.webGridBooleanCellTemplate}>
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _nwindData: NwindData = null;
    public get nwindData(): NwindData {
        if (this._nwindData == null)
        {
            this._nwindData = new NwindData();
        }
        return this._nwindData;
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

    public webGridFilterAltIconTemplate = (props: { dataContext: IgrGridHeaderTemplateContext }) => {
        return (
            <img height="15px" width="15px" src="http://static.infragistics.com/xplatform/images/grid/propeller-logo.svg" title="Continued" alt="Continued" />
        );
    }

    public webGridBooleanCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        if (props.dataContext.cell.value) {
            return (
                <img src="https://www.infragistics.com/angular-demos-lob/assets/images/grid/active.png" title="Continued" alt="Continued" />
            );
        } else {
            return (
                <img src="https://www.infragistics.com/angular-demos-lob/assets/images/grid/expired.png" title="Discontinued" alt="Discontinued" />
            );
        }
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);