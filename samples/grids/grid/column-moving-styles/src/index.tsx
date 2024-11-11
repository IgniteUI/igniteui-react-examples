import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrBadgeModule } from 'igniteui-react';
import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn, IgrColumnPipeArgs } from 'igniteui-react-grids';
import { FinancialDataAllItem, FinancialDataAll } from './FinancialDataAll';
import { IgrColumnTemplateContext, IgrCellTemplateContext } from 'igniteui-react-grids';
import { IgrBadge } from 'igniteui-react';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrBadgeModule,
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
    private column2: IgrColumn
    private column3: IgrColumn
    private  _columnPipeArgs1: IgrColumnPipeArgs | null = null;
    public get columnPipeArgs1(): IgrColumnPipeArgs {
        if (this._columnPipeArgs1 == null)
        {
            var columnPipeArgs1: IgrColumnPipeArgs = {} as IgrColumnPipeArgs;
            columnPipeArgs1.currencyCode = "USD";
            columnPipeArgs1.digitsInfo = "1.2-2";

            this._columnPipeArgs1 = columnPipeArgs1;
        }
        return this._columnPipeArgs1;
    }
    private column4: IgrColumn
    private  _columnPipeArgs2: IgrColumnPipeArgs | null = null;
    public get columnPipeArgs2(): IgrColumnPipeArgs {
        if (this._columnPipeArgs2 == null)
        {
            var columnPipeArgs2: IgrColumnPipeArgs = {} as IgrColumnPipeArgs;
            columnPipeArgs2.currencyCode = "USD";
            columnPipeArgs2.digitsInfo = "1.2-2";

            this._columnPipeArgs2 = columnPipeArgs2;
        }
        return this._columnPipeArgs2;
    }
    private column5: IgrColumn
    private  _columnPipeArgs3: IgrColumnPipeArgs | null = null;
    public get columnPipeArgs3(): IgrColumnPipeArgs {
        if (this._columnPipeArgs3 == null)
        {
            var columnPipeArgs3: IgrColumnPipeArgs = {} as IgrColumnPipeArgs;
            columnPipeArgs3.currencyCode = "USD";
            columnPipeArgs3.digitsInfo = "1.2-2";

            this._columnPipeArgs3 = columnPipeArgs3;
        }
        return this._columnPipeArgs3;
    }
    private column6: IgrColumn
    private column7: IgrColumn
    private column8: IgrColumn
    private column9: IgrColumn

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
                    data={this.financialDataAll}
                    primaryKey="ProductID"
                    moving="true"
                    ref={this.gridRef}
                    id="grid">
                    <IgrColumn
                        field="Category"
                        pinned="true"
                        width="200px"
                        headerTemplate={this.webGridPinHeaderTemplate}
                        name="column1">
                    </IgrColumn>
                    <IgrColumn
                        field="Type"
                        pinned="true"
                        headerTemplate={this.webGridPinHeaderTemplate}
                        name="column2">
                    </IgrColumn>
                    <IgrColumn
                        field="Price"
                        dataType="Currency"
                        pipeArgs={this.columnPipeArgs1}
                        headerTemplate={this.webGridPinHeaderTemplate}
                        name="column3">
                    </IgrColumn>
                    <IgrColumn
                        field="Buy"
                        dataType="Currency"
                        pipeArgs={this.columnPipeArgs2}
                        headerTemplate={this.webGridPinHeaderTemplate}
                        name="column4">
                    </IgrColumn>
                    <IgrColumn
                        field="Sell"
                        dataType="Currency"
                        pipeArgs={this.columnPipeArgs3}
                        headerTemplate={this.webGridPinHeaderTemplate}
                        name="column5">
                    </IgrColumn>
                    <IgrColumn
                        field="Spread"
                        headerTemplate={this.webGridPinHeaderTemplate}
                        name="column6">
                    </IgrColumn>
                    <IgrColumn
                        field="Change"
                        bodyTemplate={this.webGridCurrencyCellTemplate}
                        headerTemplate={this.webGridPinHeaderTemplate}
                        name="column7">
                    </IgrColumn>
                    <IgrColumn
                        field="ChangePercent"
                        header="Change Percent"
                        dataType="Number"
                        minWidth="150px"
                        bodyTemplate={this.webGridCurrencyCellTemplate}
                        headerTemplate={this.webGridPinHeaderTemplate}
                        name="column8">
                    </IgrColumn>
                    <IgrColumn
                        field="YearlyChange"
                        header="Yearly Change"
                        dataType="Number"
                        minWidth="150px"
                        bodyTemplate={this.webGridCurrencyCellTemplate}
                        headerTemplate={this.webGridPinHeaderTemplate}
                        name="column9">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _financialDataAll: FinancialDataAll = null;
    public get financialDataAll(): FinancialDataAll {
        if (this._financialDataAll == null)
        {
            this._financialDataAll = new FinancialDataAll();
        }
        return this._financialDataAll;
    }


    public webGridPinHeaderTemplate = (props: {dataContext: IgrColumnTemplateContext}) => {
        const column = (props.dataContext as any).column;
        return (
            <div>
                <span style={{float: 'left'}}>{column.field}</span>
                <span style={{float: 'right'}} onPointerDown={(e: any) => this.toggleColumnPin(column.field)}>📌</span>
            </div>
        );
    }

    public webGridCurrencyCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        var cell = props.dataContext.cell as any;
        if (cell.value > 0) {
            return(
            <div style={{width: '80px', float: 'right'}}>
                <IgrBadge variant="success" style={{float: 'left'}}><span>▲</span></IgrBadge>
                 <span style={{color:'green',float: 'right'}}>${cell.value.toFixed(2)}</span>
            </div>
            );
        } else {
            return(
            <div style={{width: '80px', float: 'right'}}>
                <IgrBadge variant="danger" style={{float: 'left'}}><span>▼</span></IgrBadge>
                <span style={{color:'red',float: 'right'}}>${cell.value.toFixed(2)}</span>
            </div>
            );
        }
    }

    public toggleColumnPin(field: string) {
        var grid = this.grid;
        var col = grid.getColumnByName(field);
        col.pinned = !col.pinned;
        grid.markForCheck();
    }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);