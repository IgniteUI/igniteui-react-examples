import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrBadgeModule } from 'igniteui-react';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { FinancialDataAllItem, FinancialDataAll } from './FinancialDataAll';
import { IgrPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-react-layouts';
import { IgrRowType, IgrCellTemplateContext } from 'igniteui-react-grids';
import { IgrBadge } from 'igniteui-react';

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
                    autoGenerate="false"
                    data={this.financialDataAll}
                    ref={this.gridRef}
                    id="grid"
                    allowFiltering="true"
                    rowStyles={this.webGridRowStylesHandler}>
                    <IgrColumn
                        field="Category"
                        width="120px">
                    </IgrColumn>
                    <IgrColumn
                        field="Type"
                        filterable="false"
                        width="120px">
                    </IgrColumn>
                    <IgrColumn
                        field="Open"
                        header="Open Price"
                        width="120px"
                        dataType="Currency">
                    </IgrColumn>
                    <IgrColumn
                        field="Price"
                        width="120px"
                        dataType="Currency">
                    </IgrColumn>
                    <IgrColumn
                        field="Change"
                        width="120px"
                        dataType="Number"
                        bodyTemplate={this.webGridCurrencyCellTemplate}
                        name="column1">
                    </IgrColumn>
                    <IgrColumn
                        field="ChangePercent"
                        header="Change(%)"
                        width="120px"
                        dataType="Percent"
                        bodyTemplate={this.webGridCurrencyCellTemplate}
                        name="column2">
                    </IgrColumn>
                    <IgrColumn
                        field="AnnualChange"
                        header="Change On Year(%)"
                        width="150px"
                        dataType="Number">
                    </IgrColumn>
                    <IgrColumn
                        field="Buy"
                        width="130px"
                        dataType="Currency">
                    </IgrColumn>
                    <IgrColumn
                        field="Sell"
                        width="130px"
                        dataType="Currency">
                    </IgrColumn>
                    <IgrColumn
                        field="Spread"
                        width="130px"
                        dataType="Number">
                    </IgrColumn>
                    <IgrColumn
                        field="Volume"
                        width="130px"
                        dataType="Number">
                    </IgrColumn>
                    <IgrColumn
                        field="High"
                        header="High(D)"
                        width="130px"
                        dataType="Currency">
                    </IgrColumn>
                    <IgrColumn
                        field="Low"
                        header="Low(D)"
                        width="130px"
                        dataType="Currency">
                    </IgrColumn>
                    <IgrColumn
                        field="AnnualHigh"
                        header="High(Y)"
                        width="130px"
                        dataType="Currency">
                    </IgrColumn>
                    <IgrColumn
                        field="AnnualLow"
                        header="Low(Y)"
                        width="130px"
                        dataType="Currency">
                    </IgrColumn>
                    <IgrColumn
                        field="AnnualStart"
                        header="Start(Y)"
                        width="130px"
                        dataType="Currency">
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
        'background': (row: IgrRowType) => (+row.data['Change'] < 0 && +row.data['AnnualChange'] < 0) ? '#FF000088' : '#00000000',
        'border': (row: IgrRowType) => (+row.data['Change'] < 0 && +row.data['AnnualChange'] < 0) ? '2px solid' : '1px solid',
        'border-color': (row: IgrRowType) => (+row.data['Change'] < 0 && +row.data['AnnualChange'] < 0) ? '#FF000099' : '#E9E9E9'
    };

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

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);