import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { CustomersDataItem, CustomersData } from './CustomersData';
import { IgrColumnTemplateContext } from 'igniteui-react-grids';

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
                    ref={this.gridRef}>
                    <IgrColumn
                        field="ID"
                        header="ID"
                        hidden={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Company"
                        header="Company"
                        width="300px"
                        headerTemplate={this.webGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="ContactName"
                        header="Name"
                        width="200px"
                        pinned={true}
                        headerTemplate={this.webGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="ContactTitle"
                        header="Title"
                        width="200px"
                        pinned={true}
                        headerTemplate={this.webGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Address"
                        header="Address"
                        width="300px"
                        headerTemplate={this.webGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        header="City"
                        width="120px"
                        headerTemplate={this.webGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Region"
                        header="Region"
                        width="120px"
                        headerTemplate={this.webGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        header="Postal Code"
                        width="150px"
                        headerTemplate={this.webGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Phone"
                        header="Phone"
                        width="150px"
                        headerTemplate={this.webGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Fax"
                        header="Fax"
                        width="150px"
                        headerTemplate={this.webGridPinHeaderTemplate}>
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