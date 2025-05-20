import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrBadgeModule } from 'igniteui-react';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { FinancialDataAllItem, FinancialDataAll } from './FinancialDataAll';
import { IgrPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-react-layouts';
import { IgrRowType } from 'igniteui-react-grids';
import { IgrBadge } from 'igniteui-react';
import { IgrCellTemplateContext } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule,
    IgrBadgeModule
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
                    data={this.financialDataAll}
                    ref={this.gridRef}
                    id="grid"
                    allowFiltering={true}
                    rowStyles={this.webGridRowStylesHandler}>
                    <IgrColumn
                        field="Category"
                        width="120px">
                    </IgrColumn>
                    <IgrColumn
                        field="Type"
                        filterable={false}
                        width="120px">
                    </IgrColumn>
                    <IgrColumn
                        field="Open"
                        header="Open Price"
                        width="120px"
                        dataType="currency">
                    </IgrColumn>
                    <IgrColumn
                        field="Price"
                        width="120px"
                        dataType="currency">
                    </IgrColumn>
                    <IgrColumn
                        field="Change"
                        width="120px"
                        dataType="number"
                        bodyTemplate={this.webGridCurrencyCellTemplate}
                        name="column1">
                    </IgrColumn>
                    <IgrColumn
                        field="ChangePercent"
                        header="Change(%)"
                        width="120px"
                        dataType="percent"
                        bodyTemplate={this.webGridCurrencyCellTemplate}
                        name="column2">
                    </IgrColumn>
                    <IgrColumn
                        field="YearlyChange"
                        header="Change On Year(%)"
                        width="150px"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="Buy"
                        width="130px"
                        dataType="currency">
                    </IgrColumn>
                    <IgrColumn
                        field="Sell"
                        width="130px"
                        dataType="currency">
                    </IgrColumn>
                    <IgrColumn
                        field="Spread"
                        width="130px"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="Volume"
                        width="130px"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="High"
                        header="High(D)"
                        width="130px"
                        dataType="currency">
                    </IgrColumn>
                    <IgrColumn
                        field="Low"
                        header="Low(D)"
                        width="130px"
                        dataType="currency">
                    </IgrColumn>
                    <IgrColumn
                        field="YearlyHigh"
                        header="High(Y)"
                        width="130px"
                        dataType="currency">
                    </IgrColumn>
                    <IgrColumn
                        field="YearlyLow"
                        header="Low(Y)"
                        width="130px"
                        dataType="currency">
                    </IgrColumn>
                    <IgrColumn
                        field="YearlyStart"
                        header="Start(Y)"
                        width="130px"
                        dataType="currency">
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


    public webGridRowStylesHandler = {
        'background': (row: IgrRowType) => (+row.data['Change'] < 0 && +row.data['YearlyChange'] < 0) ? '#FF000088' : '#00000000',
        'border': (row: IgrRowType) => (+row.data['Change'] < 0 && +row.data['YearlyChange'] < 0) ? '2px solid' : '1px solid',
        'border-color': (row: IgrRowType) => (+row.data['Change'] < 0 && +row.data['YearlyChange'] < 0) ? '#FF000099' : '#E9E9E9'
    };

    public webGridCurrencyCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        var cell = props.dataContext.cell as any;
        const isCellCurrencyUp = typeof cell.value === 'number' && cell.value > 0;
        const isCellCurrencyDown = typeof cell.value === 'number' && cell.value <= 0;

        return (

            <div style={{width: '80px', float: 'right'}}>
                {
                    isCellCurrencyUp || isCellCurrencyDown ?
                    <span>
                        <IgrBadge variant={isCellCurrencyUp ? "success" : "danger"} style={{float: 'left'}}><span>{isCellCurrencyUp ? '▲' : '▼'}</span></IgrBadge>
                        <span style={{color: isCellCurrencyUp ? 'green' : 'red', float: 'right'}}>${cell.value.toFixed(2)}</span>
                    </span>
                    : <span>${cell.value}</span>
                }
            </div>
        );
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);