import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrGroupingExpression, SortingDirection, IgrColumn } from 'igniteui-react-grids';
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
    private _groupingExpression1: IgrGroupingExpression[] | null = null;
    public get groupingExpression1(): IgrGroupingExpression[] {
        if (this._groupingExpression1 == null)
        {
            let groupingExpression1: IgrGroupingExpression[] = [];
            var groupingExpression2: IgrGroupingExpression = {} as IgrGroupingExpression;
            groupingExpression2.fieldName = "ShipCountry";
            groupingExpression2.ignoreCase = false;
            groupingExpression2.dir = SortingDirection.Asc;

            groupingExpression1.push(groupingExpression2)
            var groupingExpression3: IgrGroupingExpression = {} as IgrGroupingExpression;
            groupingExpression3.fieldName = "ShipCity";
            groupingExpression3.ignoreCase = false;
            groupingExpression3.dir = SortingDirection.Asc;

            groupingExpression1.push(groupingExpression3)
            this._groupingExpression1 = groupingExpression1;
        }
        return this._groupingExpression1;
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
                    groupingExpressions={this.groupingExpression1}
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
        return <><div>
            <span style={spanStyle}>{groupRow.expression.fieldName} :</span>
            <span>${groupRow.value}</span>
            <IgrBadge><span key="content">{groupRow.records.length}</span></IgrBadge>
            <span style={spanStyle}> Ordered in 2017:</span><span>${calc2017}</span>
        </div>
        </>;
    };

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