import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { CustomersDataItem, CustomersData } from './CustomersData';

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
                    ref={this.gridRef}
                    id="grid"
                    className="custom-selection-palette"
                    data={this.customersData}
                    cellSelection="multiple"
                    rowSelection="multiple"
                    columnSelection="multiple"
                    primaryKey="ID"
                    allowFiltering={true}>
                    <IgrColumn
                        field="ID"
                        header="Customer ID"
                        width="120px"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Company"
                        header="Company Name"
                        width="200px"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ContactName"
                        header="Contact"
                        width="150px"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        header="City"
                        width="120px"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Country"
                        header="Country"
                        width="120px"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Phone"
                        header="Phone"
                        width="150px">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _customersData: CustomersData = null;
    public get customersData(): CustomersData {
        if (this._customersData == null)
        {
            this._customersData = new CustomersData();
        }
        return this._customersData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);