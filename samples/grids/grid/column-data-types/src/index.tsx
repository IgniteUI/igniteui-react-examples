import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn, IgrColumnPipeArgs } from 'igniteui-react-grids';
import { InvoicesDataExtendedDates } from './InvoicesDataExtendedDates';

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
    private  _columnPipeArgs1: IgrColumnPipeArgs | null = null;
    public get columnPipeArgs1(): IgrColumnPipeArgs {
        if (this._columnPipeArgs1 == null)
        {
            var columnPipeArgs1: IgrColumnPipeArgs = {} as IgrColumnPipeArgs;
            columnPipeArgs1.currencyCode = "";
            columnPipeArgs1.digitsInfo = "1.4-4";

            this._columnPipeArgs1 = columnPipeArgs1;
        }
        return this._columnPipeArgs1;
    }
    private  _columnPipeArgs2: IgrColumnPipeArgs | null = null;
    public get columnPipeArgs2(): IgrColumnPipeArgs {
        if (this._columnPipeArgs2 == null)
        {
            var columnPipeArgs2: IgrColumnPipeArgs = {} as IgrColumnPipeArgs;
            columnPipeArgs2.format = "long";
            columnPipeArgs2.timezone = "UTC+0";

            this._columnPipeArgs2 = columnPipeArgs2;
        }
        return this._columnPipeArgs2;
    }
    private  _columnPipeArgs3: IgrColumnPipeArgs | null = null;
    public get columnPipeArgs3(): IgrColumnPipeArgs {
        if (this._columnPipeArgs3 == null)
        {
            var columnPipeArgs3: IgrColumnPipeArgs = {} as IgrColumnPipeArgs;
            columnPipeArgs3.format = "mediumDate";

            this._columnPipeArgs3 = columnPipeArgs3;
        }
        return this._columnPipeArgs3;
    }
    private  _columnPipeArgs4: IgrColumnPipeArgs | null = null;
    public get columnPipeArgs4(): IgrColumnPipeArgs {
        if (this._columnPipeArgs4 == null)
        {
            var columnPipeArgs4: IgrColumnPipeArgs = {} as IgrColumnPipeArgs;
            columnPipeArgs4.format = "shortTime";
            columnPipeArgs4.timezone = "UTC+0";

            this._columnPipeArgs4 = columnPipeArgs4;
        }
        return this._columnPipeArgs4;
    }
    private  _columnPipeArgs5: IgrColumnPipeArgs | null = null;
    public get columnPipeArgs5(): IgrColumnPipeArgs {
        if (this._columnPipeArgs5 == null)
        {
            var columnPipeArgs5: IgrColumnPipeArgs = {} as IgrColumnPipeArgs;
            columnPipeArgs5.currencyCode = "";
            columnPipeArgs5.digitsInfo = "1.4-4";

            this._columnPipeArgs5 = columnPipeArgs5;
        }
        return this._columnPipeArgs5;
    }
    private  _columnPipeArgs6: IgrColumnPipeArgs | null = null;
    public get columnPipeArgs6(): IgrColumnPipeArgs {
        if (this._columnPipeArgs6 == null)
        {
            var columnPipeArgs6: IgrColumnPipeArgs = {} as IgrColumnPipeArgs;
            columnPipeArgs6.currencyCode = "";
            columnPipeArgs6.digitsInfo = "1.4-4";

            this._columnPipeArgs6 = columnPipeArgs6;
        }
        return this._columnPipeArgs6;
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
                    autoGenerate={false}
                    data={this.invoicesDataExtendedDates}
                    ref={this.gridRef}
                    id="grid"
                    allowFiltering={true}
                    filterMode="excelStyleFilter"
                    locale="EN">
                    <IgrColumn
                        field="ProductName"
                        header="Prod. Name"
                        width="120px"
                        sortable={true}
                        hasSummary={true}
                        editable={true}
                        resizable={true}
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Unit Price"
                        width="120px"
                        sortable={true}
                        hasSummary={true}
                        editable={true}
                        resizable={true}
                        dataType="number"
                        pipeArgs={this.columnPipeArgs1}>
                    </IgrColumn>
                    <IgrColumn
                        field="OrderFullDate"
                        header="Order Full Date"
                        width="300px"
                        sortable={true}
                        hasSummary={true}
                        editable={true}
                        resizable={true}
                        dataType="dateTime"
                        pipeArgs={this.columnPipeArgs2}>
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        width="160px"
                        sortable={true}
                        hasSummary={true}
                        editable={true}
                        resizable={true}
                        dataType="date"
                        pipeArgs={this.columnPipeArgs3}>
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDateDelay"
                        header="Order Time"
                        width="120px"
                        sortable={true}
                        hasSummary={true}
                        editable={true}
                        resizable={true}
                        dataType="time"
                        pipeArgs={this.columnPipeArgs4}>
                    </IgrColumn>
                    <IgrColumn
                        field="UnitsInStock"
                        header="Stock Value"
                        width="120px"
                        sortable={true}
                        hasSummary={true}
                        editable={true}
                        resizable={true}
                        dataType="currency"
                        pipeArgs={this.columnPipeArgs5}>
                    </IgrColumn>
                    <IgrColumn
                        field="UnitsOnOrder"
                        header="% Change"
                        width="120px"
                        sortable={true}
                        hasSummary={true}
                        editable={true}
                        resizable={true}
                        dataType="percent"
                        pipeArgs={this.columnPipeArgs6}>
                    </IgrColumn>
                    <IgrColumn
                        field="Discontinued"
                        header="Discontinued"
                        width="160px"
                        sortable={true}
                        hasSummary={true}
                        editable={true}
                        resizable={true}
                        dataType="boolean">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _invoicesDataExtendedDates: InvoicesDataExtendedDates = null;
    public get invoicesDataExtendedDates(): InvoicesDataExtendedDates {
        if (this._invoicesDataExtendedDates == null)
        {
            this._invoicesDataExtendedDates = new InvoicesDataExtendedDates();
        }
        return this._invoicesDataExtendedDates;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);