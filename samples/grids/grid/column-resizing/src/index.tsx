import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { CustomersDataItem, CustomersData } from './CustomersData';
import { IgrGridBaseDirective, IgrColumnResizeEventArgs } from 'igniteui-react-grids';

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
    private iD: IgrColumn
    private company: IgrColumn
    private contactName: IgrColumn
    private contactTitle: IgrColumn
    private address: IgrColumn
    private city: IgrColumn
    private region: IgrColumn
    private postalCode: IgrColumn
    private country: IgrColumn
    private phone: IgrColumn

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
        this.webGridColumnResized = this.webGridColumnResized.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    data={this.customersData}
                    id="grid"
                    ref={this.gridRef}
                    columnResized={this.webGridColumnResized}>
                    <IgrColumn
                        name="ID"
                        field="ID"
                        header="ID">
                    </IgrColumn>
                    <IgrColumn
                        name="Company"
                        field="Company"
                        header="Company"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        name="ContactName"
                        field="ContactName"
                        header="Name"
                        minWidth="60px"
                        maxWidth="230px"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        name="ContactTitle"
                        field="ContactTitle"
                        header="Title"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        name="Address"
                        field="Address"
                        header="Address"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        name="City"
                        field="City"
                        header="City">
                    </IgrColumn>
                    <IgrColumn
                        name="Region"
                        field="Region"
                        header="Region"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        name="PostalCode"
                        field="PostalCode"
                        header="Postal Code"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        name="Country"
                        field="Country"
                        header="Country"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        name="Phone"
                        field="Phone"
                        header="Phone"
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


    public webGridColumnResized(grid: IgrGridBaseDirective, args: IgrColumnResizeEventArgs): void {
        var col = args.detail.column;
        var pWidth = args.detail.prevWidth;
        var nWidth = args.detail.newWidth;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);