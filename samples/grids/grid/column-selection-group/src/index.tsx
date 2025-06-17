import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule, IgrColumnGroupModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumnGroup, IgrColumn } from 'igniteui-react-grids';
import { CustomersDataItem, CustomersData } from './CustomersData';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule,
    IgrColumnGroupModule
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
                    data={this.customersData}
                    columnSelection="multiple">
                    <IgrColumnGroup
                        header="General Information">
                        <IgrColumn
                            field="Company"
                            header="Company">
                        </IgrColumn>
                        <IgrColumnGroup
                            header="Personal Details">
                            <IgrColumn
                                field="ContactName"
                                header="Name"
                                hidden={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="ContactTitle"
                                header="Title"
                                selectable={false}>
                            </IgrColumn>
                        </IgrColumnGroup>
                    </IgrColumnGroup>
                    <IgrColumn
                        field="ID">
                    </IgrColumn>
                    <IgrColumnGroup
                        header="Country Information">
                        <IgrColumnGroup
                            header="Region Information">
                            <IgrColumn
                                field="Country"
                                selectable={false}>
                            </IgrColumn>
                            <IgrColumn
                                field="City">
                            </IgrColumn>
                            <IgrColumn
                                field="PostalCode">
                            </IgrColumn>
                        </IgrColumnGroup>
                        <IgrColumnGroup
                            header="City Information">
                            <IgrColumn
                                field="Fax"
                                selectable={false}>
                            </IgrColumn>
                            <IgrColumn
                                field="Address"
                                selectable={false}>
                            </IgrColumn>
                        </IgrColumnGroup>
                    </IgrColumnGroup>
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