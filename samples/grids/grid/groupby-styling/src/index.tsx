import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn, IgrColumnPipeArgs } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule } from 'igniteui-react-core';
import { InvoicesDataItem, InvoicesData } from './InvoicesData';
import { IgrCellTemplateContext } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }
    private orderID: IgrColumn
    private shipCountry: IgrColumn
    private orderDate: IgrColumn
    private postalCode: IgrColumn
    private discontinued: IgrColumn
    private shipName: IgrColumn
    private shipCity: IgrColumn
    private shipperName: IgrColumn
    private salesperson: IgrColumn
    private unitPrice: IgrColumn
    private  _columnPipeArgs1: IgrColumnPipeArgs | null = null;
    public get columnPipeArgs1(): IgrColumnPipeArgs {
        if (this._columnPipeArgs1 == null)
        {
            var columnPipeArgs1: IgrColumnPipeArgs = {} as IgrColumnPipeArgs;
            columnPipeArgs1.digitsInfo = "1.2-2";

            this._columnPipeArgs1 = columnPipeArgs1;
        }
        return this._columnPipeArgs1;
    }
    private quantity: IgrColumn

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate="false"
                    ref={this.gridRef}
                    id="grid"
                    data={this.invoicesData}>
                    <IgrColumn
                        name="OrderID"
                        field="OrderID"
                        header="Order ID"
                        hidden="true">
                    </IgrColumn>
                    <IgrColumn
                        name="ShipCountry"
                        field="ShipCountry"
                        header="Ship Country"
                        width="200px"
                        groupable="true">
                    </IgrColumn>
                    <IgrColumn
                        name="OrderDate"
                        field="OrderDate"
                        header="Order Date"
                        width="200px"
                        groupable="true">
                    </IgrColumn>
                    <IgrColumn
                        name="PostalCode"
                        field="PostalCode"
                        header="Postal Code"
                        width="200px"
                        groupable="true">
                    </IgrColumn>
                    <IgrColumn
                        name="Discontinued"
                        field="Discontinued"
                        header="Discontinued"
                        width="200px"
                        groupable="true"
                        bodyTemplate={this.webGridBooleanCellTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        name="ShipName"
                        field="ShipName"
                        header="Ship Name"
                        width="250px"
                        groupable="true">
                    </IgrColumn>
                    <IgrColumn
                        name="ShipCity"
                        field="ShipCity"
                        header="Ship City"
                        width="250px"
                        groupable="true">
                    </IgrColumn>
                    <IgrColumn
                        name="ShipperName"
                        field="ShipperName"
                        header="Shipper Name"
                        width="250px"
                        groupable="true">
                    </IgrColumn>
                    <IgrColumn
                        name="Salesperson"
                        field="Salesperson"
                        header="Sales Person"
                        width="250px"
                        groupable="true">
                    </IgrColumn>
                    <IgrColumn
                        name="UnitPrice"
                        field="UnitPrice"
                        header="Unit Price"
                        width="150px"
                        dataType="Currency"
                        pipeArgs={this.columnPipeArgs1}
                        groupable="true">
                    </IgrColumn>
                    <IgrColumn
                        name="Quantity"
                        field="Quantity"
                        header="Quantity"
                        width="150px"
                        dataType="Number"
                        groupable="true">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _invoicesData: InvoicesData = null;
    public get invoicesData(): InvoicesData {
        if (this._invoicesData == null)
        {
            this._invoicesData = new InvoicesData();
        }
        return this._invoicesData;
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