import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { CustomersDataItem, CustomersData } from './CustomersData';
import { IgrGridMasterDetailContext } from 'igniteui-react-grids';

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
                    primaryKey="ID"
                    detailTemplate={this.webGridMasterDetailTemplate}
                    ref={this.gridRef}>
                    <IgrColumn
                        field="ContactName"
                        header="Contact"
                        width="250px"
                        resizable={false}>
                    </IgrColumn>
                    <IgrColumn
                        header="Address"
                        field="Address"
                        editable={true}
                        width="250px"
                        resizable={false}>
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


    public webGridMasterDetailTemplate = (props: {dataContext: IgrGridMasterDetailContext}) => {
        const data = props.dataContext.implicit;

        return (
            <>
            <div className="contact-container">
                <span><strong>Name:</strong> {data.ContactName}</span>
                <br />
                <span><strong>Title:</strong> {data.ContactTitle}</span>
                <br />
                <span><strong>Company:</strong> {data.Company}</span>
                <br />
            </div>
            </>
        );
    };

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);