import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrInputModule } from 'igniteui-react';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { CustomersDataItem, CustomersData } from './CustomersData';
import { IgrCellTemplateContext } from 'igniteui-react-grids';
import { IgrInput } from 'igniteui-react';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule,
    IgrInputModule
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
                    primaryKey="ID">
                    <IgrColumn
                        header="ID"
                        field="ID">
                    </IgrColumn>
                    <IgrColumn
                        field="ContactName"
                        header="Contact"
                        editable={true}
                        bodyTemplate={this.webGridCompositeContactCellTemplate}
                        inlineEditorTemplate={this.webGridCompositeContactEditCellTemplate}
                        width="250px"
                        resizable={false}>
                    </IgrColumn>
                    <IgrColumn
                        header="Address"
                        field="Address"
                        editable={true}
                        bodyTemplate={this.webGridCompositeAddressCellTemplate}
                        inlineEditorTemplate={this.webGridCompositeAddressEditCellTemplate}
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


    public webGridCompositeContactCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        var cell = props.dataContext.cell as any;
        if (cell === undefined || cell.row === undefined || cell.row.data === undefined) {
            return <></>;
        }

        return (
        <>
            <div className="contact-container">
                <span><strong>Name:</strong> {cell.row.data.ContactName}</span>
                <br />
                <span><strong>Title:</strong> {cell.row.data.ContactTitle}</span>
                <br />
                <span><strong>Company:</strong> {cell.row.data.Company}</span>
                <br />
            </div>
        </>
        );
    }

    public webGridCompositeContactEditCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {

        var cell = props.dataContext.cell as any;
        var grid = this.grid;
        if (cell === undefined || cell.row === undefined || cell.row.data === undefined) {
            return <></>
        }

        return (
            <>
                <div className="contact-container--edit" style={{padding: "1rem"}}>
                    <IgrInput label='Name' inputOcurred={(input: any, e: any) =>
                        {
                            cell.row.data.ContactName = e.detail;
                            grid.forceUpdate();
                        }
                        } value={cell.row.data.ContactName}></IgrInput>
                    <IgrInput label='Title' inputOcurred={(input: any, e: any) =>
                        {
                            cell.row.data.ContactTitle = e.detail;
                            grid.forceUpdate();
                        }
                        } value={cell.row.data.ContactTitle}></IgrInput>
                    <IgrInput label='Company' inputOcurred={(input: any, e: any) =>
                        {
                            cell.row.data.Company = e.detail;
                            grid.forceUpdate();
                        }
                        } value={cell.row.data.Company}></IgrInput>
                </div>
            </>
        );
    }

    public webGridCompositeAddressCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        var cell = props.dataContext.cell as any;
        if (cell === undefined || cell.row === undefined || cell.row.data === undefined) {
            return <></>;
        }

        return (
        <>
            <div className="address-container">
                <div className="country-city">
                    <span><strong>Country:</strong> {cell.row.data.Country}</span>
                    <br/>
                    <span><strong>City:</strong> {cell.row.data.City}</span>
                </div>
                <div className="phone-pscode">
                    <span><strong>Postal Code:</strong> {cell.row.data.PostalCode}</span>
                    <br/>
                    <span><strong>Phone:</strong> {cell.row.data.Phone}</span>
                </div>
                <br />
            </div>
        </>
        );
    }

    public webGridCompositeAddressEditCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {

        var cell = props.dataContext.cell as any;
        var grid = this.grid;
        if (cell === undefined || cell.row === undefined || cell.row.data === undefined) {
            return <></>;
        }

        return (
            <>
                <div className="contact-container--edit" style={{padding: "1rem"}}>
                    <IgrInput label='Country' inputOcurred={(input: any, e: any) =>
                        {
                            cell.row.data.Country = e.detail;
                            grid.forceUpdate();
                        }
                        } value={cell.row.data.Country}></IgrInput>
                    <IgrInput label='City' inputOcurred={(input: any, e: any) =>
                        {
                            cell.row.data.City = e.detail;
                            grid.forceUpdate();
                        }
                        } value={cell.row.data.City}></IgrInput>
                    <IgrInput label='Postal Code' inputOcurred={(input: any, e: any) =>
                        {
                            cell.row.data.PostalCode = e.detail;
                            grid.forceUpdate();
                        }
                        } value={cell.row.data.PostalCode}></IgrInput>
                    <IgrInput label='Phone' inputOcurred={(input: any, e: any) =>
                        {
                            cell.row.data.Phone = e.detail;
                            grid.forceUpdate();
                        }
                        } value={cell.row.data.Phone}></IgrInput>
                </div>
            </>
        );
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);