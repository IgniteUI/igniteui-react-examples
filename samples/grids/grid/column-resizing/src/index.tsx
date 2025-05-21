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
                    onColumnResized={this.webGridColumnResized}>
                    <IgrColumn
                        field="ID"
                        header="ID">
                    </IgrColumn>
                    <IgrColumn
                        field="Company"
                        header="Company"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ContactName"
                        header="Name"
                        minWidth="60px"
                        maxWidth="230px"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ContactTitle"
                        header="Title"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Address"
                        header="Address"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        header="City">
                    </IgrColumn>
                    <IgrColumn
                        field="Region"
                        header="Region"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        header="Postal Code"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Country"
                        header="Country"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
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


    public webGridColumnResized(args: IgrColumnResizeEventArgs): void {
        var col = args.detail.column;
        var pWidth = args.detail.prevWidth;
        var nWidth = args.detail.newWidth;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);