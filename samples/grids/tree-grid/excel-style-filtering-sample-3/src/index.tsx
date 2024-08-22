import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarHiding, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule } from 'igniteui-react-core';
import { FoodsDataItem, FoodsData } from './FoodsData';
import { IgrGridHeaderTemplateContext, IgrCellTemplateContext } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrTreeGrid
    private gridRef(r: IgrTreeGrid) {
        this.grid = r;
        this.setState({});
    }
    private column1: IgrColumn

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrTreeGrid
                    autoGenerate="false"
                    ref={this.gridRef}
                    data={this.foodsData}
                    primaryKey="ID"
                    foreignKey="ParentID"
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
                        field="ID"
                        header="ID"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Name"
                        header="Product Name"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Unit Price"
                        sortable="true"
                        dataType="Currency">
                    </IgrColumn>
                    <IgrColumn
                        field="AddedDate"
                        header="Added Date"
                        sortable="true"
                        dataType="Date">
                    </IgrColumn>
                    <IgrColumn
                        field="Discontinued"
                        dataType="Boolean"
                        bodyTemplate={this.webGridBooleanCellTemplate}
                        name="column1">
                    </IgrColumn>
                </IgrTreeGrid>
            </div>
        </div>
        );
    }

    private _foodsData: FoodsData = null;
    public get foodsData(): FoodsData {
        if (this._foodsData == null)
        {
            this._foodsData = new FoodsData();
        }
        return this._foodsData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
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
                <img src="https://static.infragistics.com/xplatform/images/grid/active.png" title="Continued" alt="Continued" />
            );
        } else {
            return (
                <img src="https://static.infragistics.com/xplatform/images/grid/expired.png" title="Discontinued" alt="Discontinued" />
            );
        }
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);