import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ExcelUtility } from './ExcelUtility';
import { Workbook } from 'igniteui-react-excel';
import { WorkbookFormat } from 'igniteui-react-excel';
import { IgrDataGridModule } from 'igniteui-react-data-grids';
import { IgrDataGrid } from 'igniteui-react-data-grids';
import { IgrTextColumn } from 'igniteui-react-data-grids';
import { IgrTemplateColumn, IIgrCellTemplateProps } from 'igniteui-react-data-grids';
import { IgrTemplateCellInfo } from 'igniteui-react-data-grids';
import { IgrSparkline } from 'igniteui-react-charts';
import { IgrSparklineModule } from 'igniteui-react-charts';
import { IgrExcelXlsxModule } from 'igniteui-react-excel';
import { IgrExcelCoreModule } from 'igniteui-react-excel';
import { IgrExcelModule } from 'igniteui-react-excel';
import { SparklineType } from 'igniteui-react-excel';

IgrDataGridModule.register();

IgrSparklineModule.register();

IgrExcelCoreModule.register();
IgrExcelModule.register();
IgrExcelXlsxModule.register();

export default class ExcelLibraryWorkingWithSparklines extends React.Component<any, any> {

    public data: any[];

    constructor(props: any) {
        super(props);

        this.exportGrid = this.exportGrid.bind(this);

        this.initData();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <button className="options-button" onClick={this.exportGrid}>Export</button>
                </div>
                <IgrDataGrid autoGenerateColumns={false} dataSource={this.data} height="calc(100% - 30px)" width="100%">
                    <IgrTemplateColumn width="*>90" field="Orders" template={this.templateColTestMethod} />
                    <IgrTextColumn width="*>130" field="CompanyName"  headerText="Company" />
                    <IgrTextColumn width="*>90"  field="ContactName" headerText="Name" />
                    <IgrTextColumn width="*>70"  field="ContactTitle" headerText="Title" />
                    <IgrTextColumn width="*>90"  field="Country" headerText="Country" />
                </IgrDataGrid>
            </div>
        );
    }

    public templateColTestMethod(props: IIgrCellTemplateProps) {
        const tmpl = props.dataContext as IgrTemplateCellInfo;

        return (
            <IgrSparkline dataSource={tmpl.rowItem.Orders} height="40px" width="200px"
                          displayType="Column" valueMemberPath="Freight" minimum={0} />
        );
    }

    public exportGrid() {
        const headers = ["Orders", "Company Name", "Contact Name", "Contact Title", "Country"];
        const keys = ["Orders", "CompanyName", "ContactName", "ContactTitle", "Country"];
        const orderHeaders = ["Customer ID", "Order ID", "Freight"];

        const wb = new Workbook(WorkbookFormat.Excel2007);
        const exportSheet = wb.worksheets().add("Sheet1");
        const ordersSheet = wb.worksheets().add("Orders");

        exportSheet.defaultColumnWidth = 300 * 20;
        exportSheet.defaultRowHeight = 50 * 20;

        for (let i = 0; i < headers.length; i++) {
            exportSheet.rows(0).cells(i).value = headers[i];
        }

        for (let i = 0; i < this.data.length; i++) {
            const item = this.data[i];
            const orders = item.Orders;

            for (let j = 0; j < orders.length; j++) {
                ordersSheet.rows(i).cells(j).value = orders[j].Freight;
            }
        }

        for (let i = 0; i < this.data.length; i++) {

            const index = (i + 1).toString();
            const dataItem = this.data[i];

            for (let j = 0; j < headers.length; j++) {
                if (j === 0) {
                    exportSheet.sparklineGroups().add(SparklineType.Column, "A" + (i + 2).toString(), "Orders!A" + index + ":F" + index);
                }
                else {
                    exportSheet.rows(i + 1).cells(j).value = dataItem[keys[j]];
                }
            }
        }

        ExcelUtility.save(wb, "myWorksheet");
    }

    public initData() {
        const companies = ["Amazon", "Ford", "Jaguar", "Tesla", "IBM", "Microsoft"];
        const firstNames = ["Andrew", "Mike", "Martin", "Ann", "Victoria", "John", "Brian", "Jason", "David"];
        const lastNames = ["Smith", "Jordan", "Johnson", "Anderson", "Louis", "Phillips", "Williams", "Novak"];
        const cities = ["London", "Paris", "Boston", "Berlin"];
        const countries = ["UK", "France", "USA", "Germany"];
        const titles = ["Sales Rep.", "Owner", "Administrator", "Manager"];
        const streets = ["Main St", "Madison St", "Broad Way"];
        const shippings = ["Federal Ex", "UPS Air", "UPS Ground"];

        const data = new Array<any>();
        // generating excel data source
        for (let i = 0; i < 20; i++) {
            const companyName = this.getItem(companies);
            const contactTitle = this.getItem(titles);
            const country = this.getItem(countries);
            const city = this.getItem(cities);
            const shipping = this.getItem(shippings);
            const contactName = this.getItem(firstNames) + " " + this.getItem(lastNames);
            const employeeName = this.getItem(firstNames) + " " + this.getItem(lastNames);
            const address = this.getRandom(10, 60) + " " + this.getItem(streets);
            const postalCode = this.getRandom(100, 400) + " " + this.getRandom(50, 90);
            const customerID = "CID-" + this.getRandom(500, 900);
            const phone = this.getRandom(500, 900) + "-" + this.getRandom(200, 900) + "-" + this.getRandom(2000, 9000);
            const fax = this.getRandom(500, 900) + "-" + this.getRandom(200, 900) + "-" + this.getRandom(2000, 9000);

            const companyOrders = new Array<any>();
            for (let o = 0; o < 6; o++) {
                const reqDate = "2020-06-" + this.getRandom(1, 25) + "T" + this.getRandom(10, 12) + ":00:00";
                const shipDate = "2020-06-" + this.getRandom(1, 25) + "T" + this.getRandom(10, 12) + ":00:00";
                const orderDate = "2020-05-" + this.getRandom(1, 25) + "T" + this.getRandom(10, 12) + ":00:00";
                const order = {
                    ContactName: contactName,
                    CustomerID: customerID,
                    EmployeeID: this.getRandom(1000, 8000),
                    EmployeeName: employeeName,
                    Freight: this.getRandom(3, 10),
                    OrderDate: orderDate,
                    OrderID: this.getRandom(3000, 5000),
                    RequiredDate: reqDate,
                    ShipAddress: address,
                    ShipCity: city,
                    ShipCountry: country,
                    ShipName: companyName,
                    ShipPostalCode: postalCode,
                    ShipRegion: "",
                    ShipVia: this.getRandom(1, 10),
                    ShippedDate: shipDate,
                    ShipperID: this.getRandom(1, 10),
                    ShipperName: shipping,
                    TotalItems: this.getRandom(10, 20),
                    TotalPrice: this.getRandom(400, 600)
                };
                companyOrders.push(order);
            }
            const dataItem = {
                Address: address,
                City: city,
                CompanyName: companyName,
                ContactName: contactName,
                ContactTitle: contactTitle,
                Country: country,
                Fax: fax,
                ID: customerID,
                Orders: companyOrders,
                Phone: phone,
                PostalCode: postalCode,
                Region: ""
            };
            data.push(dataItem);
        }
        this.data = data;
    }

    public getRandom(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    public getItem(array: string[]): string {
        const i = this.getRandom(0, array.length - 1);
        return array[i];
    }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ExcelLibraryWorkingWithSparklines/>);
