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
    private column1: IgrColumn
    private column2: IgrColumn

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="container fill">
                <IgrGrid
                    autoGenerate="false"
                    data={this.customersData}
                    primaryKey="ID"
                    ref={this.gridRef}>
                    <IgrColumn
                        header="ID"
                        field="ID">
                    </IgrColumn>
                    <IgrColumn
                        field="ContactName"
                        header="Contact"
                        editable="true"
                        bodyTemplate={this.webGridCompositeContactCellTemplate}
                        inlineEditorTemplate={this.webGridCompositeContactEditCellTemplate}
                        width="250px"
                        resizable="false"
                        name="column1">
                    </IgrColumn>
                    <IgrColumn
                        header="Address"
                        field="Address"
                        editable="true"
                        bodyTemplate={this.webGridCompositeAddressCellTemplate}
                        inlineEditorTemplate={this.webGridCompositeAddressEditCellTemplate}
                        width="250px"
                        resizable="false"
                        name="column2">
                    </IgrColumn>
                    <IgrColumn
                        header="Country"
                        field="Country">
                    </IgrColumn>
                    <IgrColumn
                        header="Region"
                        field="Region">
                    </IgrColumn>
                    <IgrColumn
                        header="Phone"
                        field="Phone">
                    </IgrColumn>
                    <IgrColumn
                        header="Fax"
                        field="Fax">
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