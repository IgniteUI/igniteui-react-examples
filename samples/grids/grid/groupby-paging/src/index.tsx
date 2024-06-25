import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrPaginator, IgrColumn } from 'igniteui-react-grids';
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
                    ref={this.gridRef}
                    id="grid"
                    data={this.invoicesWorldData}
                    rowSelection="Multiple"
                    groupRowTemplate={this.webGridGroupByRowTemplate}>
                    <IgrPaginator
                        perPage="10">
                    </IgrPaginator>
                    <IgrColumn
                        field="ShipCountry"
                        header="Ship Country"
                        width="200px"
                        groupable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="ShipCity"
                        header="Ship City"
                        width="250px"
                        groupable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Unit Price"
                        width="150px"
                        dataType="Number"
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

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);