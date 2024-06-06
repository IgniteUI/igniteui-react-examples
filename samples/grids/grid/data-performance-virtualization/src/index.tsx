import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrBadgeModule } from 'igniteui-react';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { FinancialDataAllItem, FinancialDataAll } from './FinancialDataAll';
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
    private column3: IgrColumn

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
                    allowFiltering="true">
                    <IgrColumn
                        field="Category"
                        width="120px">
                    </IgrColumn>
                    <IgrColumn
                        field="Type"
                        filterable="false"
                        width="150px">
                    </IgrColumn>
                    <IgrColumn
                        field="Open"
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
                        dataType="Number"
                        bodyTemplate={this.webGridCurrencyCellTemplate}
                        name="column2">
                    </IgrColumn>
                    <IgrColumn
                        field="YearlyChange"
                        header="Change On Year(%)"
                        width="150px"
                        dataType="Number"
                        bodyTemplate={this.webGridCurrencyCellTemplate}
                        name="column3">
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
                        width="130px"
                        dataType="Currency">
                    </IgrColumn>
                    <IgrColumn
                        field="Low"
                        width="130px"
                        dataType="Currency">
                    </IgrColumn>
                    <IgrColumn
                        field="YearlyHigh"
                        header="High(Y)"
                        width="130px"
                        dataType="Currency">
                    </IgrColumn>
                    <IgrColumn
                        field="YearlyLow"
                        header="Low(Y)"
                        width="130px"
                        dataType="Currency">
                    </IgrColumn>
                    <IgrColumn
                        field="YearlyStart"
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