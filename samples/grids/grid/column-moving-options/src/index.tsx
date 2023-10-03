import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrBadgeModule } from 'igniteui-react-webinputs';
import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn, IgrColumnPipeArgs } from 'igniteui-react-grids';
import { FinancialDataAllItem, FinancialDataAll } from './FinancialDataAll';
import { IgrColumnTemplateContext } from 'igniteui-react-grids';

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
    private column4: IgrColumn
    private column5: IgrColumn
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
        <div className="container sample">

            <div className="container fill">
                <IgrGrid
                    autoGenerate="false"
                    data={this.financialDataAll}
                    primaryKey="ProductID"
                    moving="true"
                    ref={this.gridRef}>
                    <IgrColumn
                        header="Category"
                        field="Category"
                        pinned="true"
                        width="200px"
                        headerTemplate={this.webGridPinHeaderTemplate}
                        name="column1">
                    </IgrColumn>
                    <IgrColumn
                        header="Type"
                        field="Type"
                        pinned="true"
                        headerTemplate={this.webGridPinHeaderTemplate}
                        name="column2">
                    </IgrColumn>
                    <IgrColumn
                        header="Price"
                        field="Price"
                        dataType="Currency"
                        headerTemplate={this.webGridPinHeaderTemplate}
                        name="column3">
                        <IgrColumnPipeArgs
                            currencyCode="USD"
                            digitsInfo="1.2-2">
                        </IgrColumnPipeArgs>
                    </IgrColumn>
                    <IgrColumn
                        header="Buy"
                        field="Buy"
                        dataType="Currency"
                        headerTemplate={this.webGridPinHeaderTemplate}
                        name="column4">
                        <IgrColumnPipeArgs
                            currencyCode="USD"
                            digitsInfo="1.2-2">
                        </IgrColumnPipeArgs>
                    </IgrColumn>
                    <IgrColumn
                        header="Sell"
                        field="Sell"
                        dataType="Currency"
                        headerTemplate={this.webGridPinHeaderTemplate}
                        name="column5">
                        <IgrColumnPipeArgs
                            currencyCode="USD"
                            digitsInfo="1.2-2">
                        </IgrColumnPipeArgs>
                    </IgrColumn>
                    <IgrColumn
                        header="Spread"
                        field="Spread"
                        headerTemplate={this.webGridPinHeaderTemplate}
                        name="column6">
                    </IgrColumn>
                    <IgrColumn
                        field="Change"
                        header="Change"
                        bodyTemplate={this.webGridCurrencyCellTemplate}
                        headerTemplate={this.webGridPinHeaderTemplate}
                        name="column7">
                    </IgrColumn>
                    <IgrColumn
                        field="ChangePercent"
                        header="Change Percent"
                        dataType="Number"
                        width="150px"
                        bodyTemplate={this.webGridCurrencyCellTemplate}
                        headerTemplate={this.webGridPinHeaderTemplate}
                        name="column8">
                    </IgrColumn>
                    <IgrColumn
                        field="AnnualChange"
                        header="Annual Change"
                        dataType="Number"
                        width="150px"
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