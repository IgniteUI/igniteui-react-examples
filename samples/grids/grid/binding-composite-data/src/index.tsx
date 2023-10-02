import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { CustomersDataItem, CustomersData } from './CustomersData';
import { IgrCellTemplateContext } from 'igniteui-react-grids';

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


    public webGridCompositeContactCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        var cell = props.dataContext.cell as any;
        if (cell === undefined || cell.row === undefined || cell.row.data === undefined) {
            return <></>;
        }

        return (
        <>
            <div className="contact-container">
                <span><strong>Name:</strong> {cell.row.data.ContactName}</span>
                <span><strong>Title:</strong> {cell.row.data.ContactTitle}</span>
                <br />
                <span><strong>Company:</strong> {cell.row.data.CompanyName}</span>
                <br />
            </div>
        </>
        );
    }

    public webGridCompositeContactEditCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {

        var cell = props.dataContext.cell as any;
        if (cell === undefined || cell.row === undefined || cell.row.data === undefined) {
            return <></>
        }

        function keyUpHandler(event: any, ctx: IgrCellTemplateContext) {
            var cell = ctx.cell as any;
            if (cell !== undefined && cell.row !== undefined && cell.row.data !== undefined) {
                cell.row.data[event.target.id] = event.target.value;
            }
        }

        return (
            <>
                <div className="contact-container--edit" style={{display: "inline-grid"}}>
                    <div>
                        <strong>Name:</strong>
                        <input id='ContactName' onKeyUp={(e: any) => keyUpHandler(e, props.dataContext)} value={cell.row.data.ContactName}></input>
                    </div>
                    <div>
                        <strong>Title:</strong>
                        <input id='ContactTitle' onKeyUp={(e: any) => keyUpHandler(e, props.dataContext)} value={cell.row.data.ContactTitle}></input>
                    </div>
                    <div>
                        <strong>Company:</strong>
                        <input id='CompanyName' onKeyUp={(e: any) => keyUpHandler(e, props.dataContext)} value={cell.row.data.CompanyName}></input>
                    </div>
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
        if (cell === undefined || cell.row === undefined || cell.row.data === undefined) {
            return <></>;
        }

        function keyUpHandler(event: any, ctx: IgrCellTemplateContext) {
            var cell = ctx.cell as any;
            if (cell !== undefined && cell.row !== undefined && cell.row.data !== undefined) {
                cell.row.data[event.target.id] = event.target.value;
            }
         }

        return (
            <>
                <div className="address-container--edit" style={{display: "inline-grid"}}>
                    <div>
                        <span><strong>Country:</strong></span>
                        <input id='Country' onKeyUp={(e: any) => keyUpHandler(e, props.dataContext)} value={cell.row.data.Country}></input>
                        <br/>
                        <span><strong>City:</strong></span>
                        <input id='City' onKeyUp={(e: any) => keyUpHandler(e, props.dataContext)} value={cell.row.data.City}></input>
                    </div>
                    <div>
                        <span><strong>Postal Code:</strong></span>
                        <input id='PostalCode' onKeyUp={(e: any) => keyUpHandler(e, props.dataContext)} value={cell.row.data.PostalCode}></input>
                        <br/>
                        <span><strong>Selected:</strong></span>
                        <input id='Phone' onKeyUp={(e: any) => keyUpHandler(e, props.dataContext)} value={cell.row.data.Phone}></input>
                    </div>
                    <br/>
                </div>
            </>
        );
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);