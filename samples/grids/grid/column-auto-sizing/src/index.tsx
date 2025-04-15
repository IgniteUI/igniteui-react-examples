import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { CustomersDataItem, CustomersData } from './CustomersData';

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
                    autoGenerate={false}
                    data={this.customersData}
                    primaryKey="ProductID"
                    ref={this.gridRef}>
                    <IgrColumn
                        field="ID"
                        width="auto"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Company"
                        header="Company Name"
                        width="auto"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ContactName"
                        header="Name"
                        width="auto"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ContactTitle"
                        header="Title"
                        width="auto"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Address"
                        width="auto"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        width="auto"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Region"
                        width="auto"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        header="Postal Code"
                        width="auto"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Phone"
                        width="auto"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Fax"
                        width="auto"
                        resizable={true}>
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