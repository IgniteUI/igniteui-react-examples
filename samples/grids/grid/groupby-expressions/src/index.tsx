import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { InvoicesWorldDataItem, InvoicesWorldData } from './InvoicesWorldData';
import { IgrGroupByRowTemplateContext, IgrCellTemplateContext } from 'igniteui-react-grids';
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
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate="false"
                    data={this.invoicesWorldData}
                    ref={this.gridRef}
                    id="grid"
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


    public webGridGroupByRowTemplate = (e: {dataContext: IgrGroupByRowTemplateContext}) => {

        const groupRow: any = e.dataContext.implicit;
        const values = groupRow.records;

        const startDate = new Date('1/1/2017');
        const endDate = new Date('12/31/2017');
        const calc2017 = values.filter((x: any) => new Date(x.OrderDate) >= startDate && new Date(x.OrderDate) <= endDate).length;
        const spanStyle = {
            color: '#09f'
          };
        return (
            <>
                <div>
                    <span style={spanStyle}>{groupRow.expression.fieldName}: </span>
                    <span>{groupRow.value instanceof Date ? groupRow.value.toLocaleDateString() : groupRow.value} </span>
                    <IgrBadge><span key="content">{groupRow.records.length}</span></IgrBadge>
                    <span style={spanStyle}> Ordered in 2017: </span><span>{calc2017}</span>
                </div>
            </>
        );
    };

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