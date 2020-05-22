<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
- [Preview](#Preview)
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Excel Library Working With Sparklines.
<!-- in the Excel Library component -->
<!-- [Excel Library](https://infragistics.com/Reactsite/components/excel-library.html) -->

## Preview

You can preview example of this React application on CodeSandbox by clicking on this sample:

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/excel/excel-library/working-with-sparklines?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/ExcelLibraryWorkingWithSparklines.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/excel/excel-library/working-with-sparklines?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/ExcelLibraryWorkingWithSparklines.tsx">
            <img height="40px" style="border-radius: 5px" alt="View on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/view.png"/>
        </a> -->
        <!-- <a target="_blank"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="View on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/view.png"/>
        </a>
https://codesandbox.io/embed/react-treemap-overview-rtb45
https://codesandbox.io/static/img/play-codesandbox.svg
https://codesandbox.io/embed/react-treemap-overview-rtb45?view=browser -->
    </body>
</html>

<!-- ## Sample Preview -->

<!-- <iframe
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/excel/excel-library/working-with-sparklines?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/ExcelLibraryWorkingWithSparklines.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

You can find source code for this example in :
[./src/ExcelLibraryWorkingWithSparklines.tsx](./src/ExcelLibraryWorkingWithSparklines.tsx) file.

<!-- The following section provides source code from:
`./src/ExcelLibraryWorkingWithSparklines.tsx` file: -->

<!-- ```tsx
import * as React from 'react';
import { ExcelUtility } from './ExcelUtility';
// import { ExcelSharedData } from './ExcelSharedData';
import { Workbook } from 'igniteui-react-excel';
import { WorkbookFormat } from 'igniteui-react-excel';
import { WorksheetRegion } from 'igniteui-react-excel';
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrTemplateColumn, IIgrCellTemplateProps } from 'igniteui-react-grids';
import { IgrTemplateCellUpdatingEventArgs } from 'igniteui-react-grids';
import { IgrTemplateCellInfo } from 'igniteui-react-grids';
// data chart's elements for category series:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
import { IgrColumnSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrExcelXlsxModule } from 'igniteui-react-excel';
import { IgrExcelCoreModule } from 'igniteui-react-excel';
import { IgrExcelModule } from 'igniteui-react-excel';
import { Visibility } from 'igniteui-react-core';
import { WorkbookFontProxy, SparklineType } from 'igniteui-react-excel';

IgrDataGridModule.register();

IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();

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

    public render() {
        return (
            <div className="igContainer">
                <div className="igOptions">
                    <button className="igOptions-item" onClick={this.exportGrid}>Export</button>
                </div>
                <IgrDataGrid autoGenerateColumns={false} dataSource={this.data} height="calc(100% - 30px)" width="100%">
                    <IgrTemplateColumn propertyPath="Orders" template={this.templateColTestMethod} />
                    <IgrTextColumn propertyPath="CompanyName" />
                    <IgrTextColumn propertyPath="ContactName" />
                    <IgrTextColumn propertyPath="ContactTitle" />
                    <IgrTextColumn propertyPath="Country" />
                </IgrDataGrid>
            </div>
        );
    }

    public templateColTestMethod(props: IIgrCellTemplateProps) {
        const tmpl = props.dataContext as IgrTemplateCellInfo;

        return (
            <IgrDataChart dataSource={tmpl.rowItem.Orders} height="40px" width="200px">
                <IgrCategoryXAxis name="xAxis" labelVisibility="Collapsed" />
                <IgrNumericYAxis name="yAxis" minValue={0} labelVisibility="Collapsed" />

                <IgrColumnSeries name="series" xAxisName="xAxis" yAxisName="yAxis" valueMemberPath="Freight" />
            </IgrDataChart>
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
        for (let i = 0; i < 10; i++) {
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
                    Freight: this.getRandom(1, 10),
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

``` -->

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/excel/excel-library/working-with-sparklines
npm install
npm start

```

Then open http://localhost:3000/ in your browser

