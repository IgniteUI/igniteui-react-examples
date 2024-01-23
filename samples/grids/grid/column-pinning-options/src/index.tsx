import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { CustomersDataItem, CustomersData } from './CustomersData';
import { IgrColumnTemplateContext } from 'igniteui-react-grids';

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

    public componentDidMount() {
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate="false"
                    data={this.customersData}
                    ref={this.gridRef}>
                    <IgrColumn
                        field="ID"
                        header="ID"
                        hidden="true">
                    </IgrColumn>
                    <IgrColumn
                        field="CompanyName"
                        header="Company"
                        width="300px"
                        headerTemplate={this.webGridPinHeaderTemplate}
                        name="column1">
                    </IgrColumn>
                    <IgrColumn
                        field="ContactName"
                        header="Name"
                        width="200px"
                        pinned="true"
                        headerTemplate={this.webGridPinHeaderTemplate}
                        name="column2">
                    </IgrColumn>
                    <IgrColumn
                        field="ContactTitle"
                        header="Title"
                        width="200px"
                        pinned="true"
                        headerTemplate={this.webGridPinHeaderTemplate}
                        name="column3">
                    </IgrColumn>
                    <IgrColumn
                        field="Address"
                        header="Address"
                        width="300px"
                        headerTemplate={this.webGridPinHeaderTemplate}
                        name="column4">
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        header="City"
                        width="120px"
                        headerTemplate={this.webGridPinHeaderTemplate}
                        name="column5">
                    </IgrColumn>
                    <IgrColumn
                        field="Region"
                        header="Region"
                        width="120px"
                        headerTemplate={this.webGridPinHeaderTemplate}
                        name="column6">
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        header="Postal Code"
                        width="150px"
                        headerTemplate={this.webGridPinHeaderTemplate}
                        name="column7">
                    </IgrColumn>
                    <IgrColumn
                        field="Phone"
                        header="Phone"
                        width="150px"
                        headerTemplate={this.webGridPinHeaderTemplate}
                        name="column8">
                    </IgrColumn>
                    <IgrColumn
                        field="Fax"
                        header="Fax"
                        width="150px"
                        headerTemplate={this.webGridPinHeaderTemplate}
                        name="column9">
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