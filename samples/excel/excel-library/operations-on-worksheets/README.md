<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Excel Library Worksheets.
<!-- in the Excel Library component -->
<!-- [Excel Library](https://infragistics.com/Reactsite/components/excel-library.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/excel/excel-library/operations-on-worksheets?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/ExcelLibraryWorksheets.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/excel/excel-library/operations-on-worksheets?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/ExcelLibraryWorksheets.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/excel/excel-library/operations-on-worksheets?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/ExcelLibraryWorksheets.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/ExcelLibraryWorksheets.tsx` file:

```tsx
import * as React from 'react';

import { SharedData } from './ExcelSharedData';
import { IgrExcelModule } from 'igniteui-react-excel';
import { Workbook } from 'igniteui-react-excel';
import { Worksheet } from 'igniteui-react-excel';
import { WorkbookFormat } from 'igniteui-react-excel';
import { ExcelUtility } from './ExcelUtility';
import { Color } from 'igniteui-react-core';

import {
    CustomFilterCondition,
    ExcelComparisonOperator,
    FormatConditionTextOperator,
    OrderedSortCondition,
    RelativeIndex,
    SortDirection,
    WorkbookColorInfo
} from 'igniteui-react-excel';

IgrExcelModule.register();

export default class ExcelLibraryWorksheets extends React.Component<any, any> {
    public data: any;
    public isSorted: boolean;
    public isFiltered: boolean;
    public isProtected: boolean;
    public showGridlines: boolean;
    public showHeaders: boolean;
    public applyConditionalFormatting: boolean;
    public workbook: Workbook;

    constructor(props: any) {
        super(props);

        this.showGridlines = true;
        this.showHeaders = true;
    }

    public exportData = (): void => {
        this.initData();
        const sheet = this.workbook.worksheets(0);
        sheet.defaultColumnWidth = 220 * 20;

        if (this.isSorted) {
            sheet.sortSettings.setRegion("A1:A20");
            sheet.sortSettings.sortConditions().addItem(
                new RelativeIndex(0), new OrderedSortCondition(SortDirection.Ascending));
        }
        if (this.isFiltered) {
            sheet.filterSettings.setRegion("C1:C20");
            sheet.filterSettings.applyCustomFilter(0, new CustomFilterCondition(ExcelComparisonOperator.Equals, "USA"));
        }
        if (this.isProtected) {
            sheet.protect();
        }
        if (!this.showHeaders) {
            sheet.displayOptions.showRowAndColumnHeaders = false;
        }
        if (!this.showGridlines) {
            sheet.displayOptions.showGridlines = false;
        }
        if (this.applyConditionalFormatting) {
            const green = new Color();
            green.colorString = "Green";

            const blue = new Color();
            blue.colorString = "Blue";

            const orange = new Color();
            orange.colorString = "Orange";

            const format = sheet.conditionalFormats().addTextCondition(
                "A1:A20", "Amazon", FormatConditionTextOperator.Contains);

            const format2 = sheet.conditionalFormats().addTextCondition(
                "A1:A20", "IBM", FormatConditionTextOperator.Contains);

            const format3 = sheet.conditionalFormats().addTextCondition(
                "A1:A20", "Tesla", FormatConditionTextOperator.Contains);

            format.cellFormat.font.colorInfo = new WorkbookColorInfo(green);
            format2.cellFormat.font.colorInfo = new WorkbookColorInfo(blue);
            format3.cellFormat.font.colorInfo = new WorkbookColorInfo(orange);
        }

        ExcelUtility.save(this.workbook, "worksheetsSample");
    }

    public onChange = (e: any): void => {
        switch (e.target.id)
        {
            case "isSorted":
                this.isSorted = e.target.checked;
            break;
            case "isFiltered":
                this.isFiltered = e.target.checked;
            break;
            case "isProtected":
                this.isProtected = e.target.checked;
            break;
            case "showGridlines":
                this.showGridlines = e.target.checked;
            break;
            case "showHeaders":
                this.showHeaders = e.target.checked;
            break;
            case "applyFormat":
                this.applyConditionalFormatting = e.target.checked;
            break;
        }
    }

    public render() {
        return (
            <div className="igContainer">
            <button className="igOptions-item" onClick={this.exportData}>Save Workbook</button>
            <label className="igOptions-item"><input id="isSorted" defaultChecked={this.isSorted} onChange={this.onChange} type="checkbox" />Apply Sort</label>
            <label className="igOptions-item"><input id="isFiltered" defaultChecked={this.isFiltered} onChange={this.onChange} type="checkbox" />Apply Filter</label>
            <label className="igOptions-item"><input id="isProtected" defaultChecked={this.isProtected} onChange={this.onChange} type="checkbox" />Protect Worksheet</label>
            <label className="igOptions-item"><input id="showGridlines" defaultChecked={this.showGridlines} onChange={this.onChange} type="checkbox" />Show Gridlines</label>
            <label className="igOptions-item"><input id="showHeaders" defaultChecked={this.showHeaders} onChange={this.onChange} type="checkbox" />Show Row and Column Headers</label>
            <label className="igOptions-item"><input id="applyFormat" defaultChecked={this.applyConditionalFormatting} onChange={this.onChange} type="checkbox" />Apply Conditional Formatting</label>
            </div>
        );
    }

    public initData() {
        const companies = ["Amazon", "Ford", "Jaguar", "Tesla", "IBM", "Microsoft"];
        const firstNames = ["Andrew", "Mike", "Martin", "Ann", "Victoria", "John", "Brian", "Jason", "David"];
        const lastNames = ["Smith", "Jordan", "Johnson", "Anderson", "Louis", "Phillips", "Williams"];
        const cities = ["London", "Paris", "Boston", "Berlin"];
        const countries = ["UK", "France", "USA", "Germany", "Poland", "Brazil"];
        const titles = ["Sales Rep.", "Owner", "Administrator", "Manager"];
        const streets = ["Main St", "Madison St", "Broad Way"];
        const headers = ["Company Name",
            "Contact Title",
            "Country",
            "City",
            "Contact Name",
            "Address",
            "Postal Code",
            "Customer ID",
            "Salary",
            "Age"];
        const dataSource = new Array<any>();
        // generating excel data source
        this.workbook = new Workbook(WorkbookFormat.Excel2007);
        const sheet = this.workbook.worksheets().add("Sheet1");

        for (let i = 0; i < headers.length; i++) {
            sheet.rows(0).cells(i).value = headers[i];
        }

        for (let i = 1; i < 20; i++) {
            const companyName = this.getItem(companies);
            const contactTitle = this.getItem(titles);
            const country = this.getItem(countries);
            const city = this.getItem(cities);
            const contactName = this.getItem(firstNames) + " " + this.getItem(lastNames);
            const address = this.getRandom(10, 60) + " " + this.getItem(streets);
            const postalCode = this.getRandom(100, 400) + " " + this.getRandom(50, 90);
            const customerID = "CID-" + this.getRandom(500, 900);
            const salary = this.getSalary(85000, 200000);
            const age = this.getRandom(20, 65);
            const dataItem = [
                companyName,
                contactTitle,
                country,
                city,
                contactName,
                address,
                postalCode,
                customerID,
                salary,
                age
            ];
            for (let j = 0; j < dataItem.length; j++) {
                sheet.rows(i).cells(j).value = dataItem[j];
            }
        }
    }

    public getRandom(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    public getItem(array: string[]): string {
        const i = this.getRandom(0, array.length - 1);
        return array[i];
    }

    public getSalary(min: number, max: number) {
        const n = this.getRandom(min, max);
        const s = n.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
        return "$" + s.replace(".00", "");
    }
}
```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/excel/excel-library/operations-on-worksheets
npm install
npm start

```

Then open http://localhost:3000/ in your browser

