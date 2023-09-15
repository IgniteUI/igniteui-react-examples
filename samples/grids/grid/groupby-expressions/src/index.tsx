import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { InvoicesWorldDataItem, InvoicesWorldData } from './InvoicesWorldData';
import { IgrGroupByRowTemplateContext } from 'igniteui-react-grids';
import { IgrBadge } from 'igniteui-react';

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
    private column1: IgrColumn

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
                    data={this.invoicesWorldData}
                    ref={this.gridRef}
                    id="grid"
                    groupingExpressions={["Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder"]}
                    groupRowTemplate={this.webGridGroupByRowTemplate}>
                    <IgrColumn
                        field="OrderID"
                        hidden="true">
                    </IgrColumn>
                    <IgrColumn
                        field="ShipCountry"
                        header="Ship Country"
                        width="200px"
                        groupable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        dataType="Date"
                        width="200px"
                        groupable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        header="Postal Code"
                        width="200px"
                        groupable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Discontinued"
                        width="200px"
                        dataType="Boolean"
                        groupable="true"
                        bodyTemplate={this.webGridBooleanCellTemplate}
                        name="column1">
                    </IgrColumn>
                    <IgrColumn
                        field="ShipName"
                        header="Ship Name"
                        width="200px"
                        groupable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="ShipCity"
                        header="Ship City"
                        width="200px"
                        groupable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="ShipperName"
                        header="Shipper Name"
                        width="200px"
                        groupable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Salesperson"
                        header="Sales Person"
                        width="200px"
                        groupable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Unit Price"
                        width="200px"
                        groupable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Quantity"
                        width="200px"
                        groupable="true">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _invoicesWorldData: InvoicesWorldData = null;
    public get invoicesWorldData(): InvoicesWorldData {
        if (this._invoicesWorldData == null)
        {
            this._invoicesWorldData = new InvoicesWorldData();
        }
        return this._invoicesWorldData;
    }


    public webGridGroupByRowTemplate = (ctx: IgrGroupByRowTemplateContext) => {

        const groupRow: any = ctx["$implicit"];
        const values = groupRow.records;

        const startDate = new Date('1/1/2017');
        const endDate = new Date('12/31/2017');
        var calc2017 = values.filter((x) => new Date(x.OrderDate) >= startDate && new Date(x.OrderDate) <= endDate).length;

        return <><div>
            <span style="color:#09f;">${groupRow.expression.fieldName} :</span>
            <span>${groupRow.value}</span>
            <IgrBadge>${groupRow.records.length}</IgrBadge>
            <span style="color:#09f;"> Ordered in 2017:</span><span>${calc2017}</span>
        </div>
        </>;

    };

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);