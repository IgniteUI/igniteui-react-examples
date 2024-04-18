import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from "@infragistics/igniteui-react-grids";
import { IgrGrid, IgrGroupingExpression, SortingDirection, IgrGridToolbar, IgrGridToolbarTitle, IgrGridToolbarActions, IgrGridToolbarPinning, IgrGridToolbarHiding, IgrColumnLayout, IgrColumn } from "@infragistics/igniteui-react-grids";
import { ComponentRenderer, WebGridDescriptionModule } from "@infragistics/igniteui-react-core";
import { CustomersDataItem, CustomersData } from './CustomersData';

import "@infragistics/igniteui-react-grids/grids/combined";
import "@infragistics/igniteui-react-grids/grids/themes/light/bootstrap.css";

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
    private _groupingExpression1: IgrGroupingExpression[] | null = null;
    public get groupingExpression1(): IgrGroupingExpression[] {
        if (this._groupingExpression1 == null)
        {
            let groupingExpression1: IgrGroupingExpression[] = [];
            var groupingExpression2: IgrGroupingExpression = {} as IgrGroupingExpression;
            groupingExpression2.fieldName = "Country";
            groupingExpression2.ignoreCase = false;
            groupingExpression2.dir = SortingDirection.Asc;

            groupingExpression1.push(groupingExpression2)
            this._groupingExpression1 = groupingExpression1;
        }
        return this._groupingExpression1;
    }

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    ref={this.gridRef}
                    data={this.customersData}
                    rowEditable="true"
                    allowFiltering="true"
                    filterMode="ExcelStyleFilter"
                    primaryKey="CompanyName"
                    groupingExpressions={this.groupingExpression1}>
                    <IgrGridToolbar
                    >
                        <IgrGridToolbarTitle
                        >
                        </IgrGridToolbarTitle>
                        <IgrGridToolbarActions
                        >
                            <IgrGridToolbarPinning
                            >
                            </IgrGridToolbarPinning>
                            <IgrGridToolbarHiding
                            >
                            </IgrGridToolbarHiding>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumnLayout
                        header="ID">
                        <IgrColumn
                            field="ID"
                            rowStart="1"
                            colStart="1"
                            rowEnd="3"
                            filterable="false"
                            width="150px">
                        </IgrColumn>
                    </IgrColumnLayout>
                    <IgrColumnLayout
                        pinned="true"
                        header="Contact Details">
                        <IgrColumn
                            field="CompanyName"
                            header="Company"
                            rowStart="1"
                            colStart="1"
                            colEnd="3"
                            sortable="true"
                            width="350px">
                        </IgrColumn>
                        <IgrColumn
                            field="ContactName"
                            header="Name"
                            rowStart="2"
                            colStart="1"
                            colEnd="2"
                            groupable="true">
                        </IgrColumn>
                        <IgrColumn
                            field="ContactTitle"
                            header="Title"
                            rowStart="2"
                            colStart="2"
                            colEnd="3"
                            groupable="true">
                        </IgrColumn>
                    </IgrColumnLayout>
                    <IgrColumnLayout
                        pinned="false"
                        header="Address Details">
                        <IgrColumn
                            field="Country"
                            rowStart="1"
                            colStart="1"
                            colEnd="3"
                            groupable="true"
                            filterable="false"
                            width="220px">
                        </IgrColumn>
                        <IgrColumn
                            field="Region"
                            rowStart="1"
                            colStart="3"
                            colEnd="5"
                            groupable="true"
                            filterable="false"
                            width="220px">
                        </IgrColumn>
                        <IgrColumn
                            field="PostalCode"
                            rowStart="1"
                            colStart="5"
                            colEnd="7"
                            groupable="true"
                            filterable="false"
                            width="220px">
                        </IgrColumn>
                        <IgrColumn
                            field="City"
                            rowStart="2"
                            colStart="1"
                            colEnd="4"
                            groupable="true"
                            filterable="false"
                            width="220px">
                        </IgrColumn>
                        <IgrColumn
                            field="Address"
                            rowStart="2"
                            colStart="4"
                            colEnd="7"
                            filterable="false">
                        </IgrColumn>
                    </IgrColumnLayout>
                    <IgrColumnLayout
                        header="Phone Details">
                        <IgrColumn
                            field="Phone"
                            rowStart="1"
                            colStart="1"
                            colEnd="2"
                            filterable="false"
                            width="220px">
                        </IgrColumn>
                        <IgrColumn
                            field="Fax"
                            rowStart="2"
                            colStart="1"
                            colEnd="2"
                            filterable="false"
                            width="220px">
                        </IgrColumn>
                    </IgrColumnLayout>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _customersData: CustomersData = null;
    public get customersData(): CustomersData {
        if (this._customersData == null)
        {
            this._customersData = new CustomersData();
        }
        return this._customersData;
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

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);