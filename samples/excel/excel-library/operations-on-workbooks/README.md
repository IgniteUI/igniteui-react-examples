<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Excel Library Workbooks.
<!-- in the Excel Library component -->
<!-- [Excel Library](https://infragistics.com/Reactsite/components/excel-library.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/excel/excel-library/operations-on-workbooks?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/ExcelLibraryWorkbooks.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/excel/excel-library/operations-on-workbooks?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/ExcelLibraryWorkbooks.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/excel/excel-library/operations-on-workbooks?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/ExcelLibraryWorkbooks.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/ExcelLibraryWorkbooks.tsx` file:

```tsx
import * as React from 'react';



import { IgrLiveGridModule } from 'igniteui-react-grids';
import { IgrLiveGrid } from 'igniteui-react-grids';
import { Workbook } from 'igniteui-react-excel';
import { WorkbookFormat } from 'igniteui-react-excel';
import { WorksheetRegion } from 'igniteui-react-excel';
import { ExcelUtility } from './ExcelUtility';

IgrLiveGridModule.register();

export default class ExcelLibraryWorkbooks extends React.Component<any, any> {

    public grid : IgrLiveGrid;

    public employeeData: any[];
    public expenseData: any[];
    public incomeData: any[];

    public companies: string[];
    public firstNames: string[];
    public lastNames: string[];
    public countries: string[];
    public titles: string[];
    public employeeColumns: string[];

    constructor(props: any) {
        super(props);

        this.onGridRef = this.onGridRef.bind(this);
        this.createWorkbook = this.createWorkbook.bind(this);
        this.saveWorkbook = this.saveWorkbook.bind(this);
        this.switchDataSource = this.switchDataSource.bind(this);

        this.companies = ["Amazon", "Ford", "Jaguar", "Tesla", "IBM", "Microsoft"];
        this.firstNames = ["Andrew", "Mike", "Martin", "Ann", "Victoria", "John", "Brian", "Jason", "David"];
        this.lastNames = ["Smith", "Jordan", "Johnson", "Anderson", "Louis", "Phillips", "Williams"];
        this.countries = ["UK", "France", "USA", "Germany", "Poland", "Brazil"];
        this.titles = ["Sales Rep.", "Engineer", "Administrator", "Manager"];
        this.employeeColumns = ["Name", "Company", "Title", "Age", "Country", "Salary"];

        this.initData();

        this.state = {
            selected: "Employees - Table1"
        } as any;
    }

    public render() {
        return (
            <div>
                <div className="igOptions">
                    <button className="igOptions-item" onClick={this.createWorkbook}>Create Workbook</button>
                    <button className="igOptions-item" onClick={this.saveWorkbook}>Save Workbook</button>
                    <span className="igOptions-item">Select Table to Export: </span>
                    <select onChange={this.onTableChange} value={(this.state as any).selected}>
                        <option>Employees - Table1</option>
                        <option>Expenses - Table2</option>
                        <option>Income - Table3</option>
                    </select>
                </div>
                <div className="previewGrid">
                    <IgrLiveGrid
                        ref = {this.onGridRef}
                        height="300px"
                        width="100%"
                        dataSource={this.employeeData} />
                </div>
            </div>
        );
    }


    public initData() {
        this.expenseData = [];
        this.employeeData = [];
        this.incomeData = [];

        const startYear = 2011;

        for (let i = 1; i < 20; i++) {

            const year = startYear + i;

            // Employee Data
            const name: string = this.getItem(this.firstNames) + " " + this.getItem(this.lastNames);
            const company: string = this.getItem(this.companies);
            const title: string = this.getItem(this.titles);
            const age: number = this.getRandom(25, 60);
            const country: string = this.getItem(this.countries);
            const salary: string = this.getAmount(60000, 80000);

            // Expense Data
            const computerExpense: string = this.getAmount(50000, 60000);
            const researchExpense: string = this.getAmount(120000, 160000);
            const travelExpense: string = this.getAmount(15000, 25000);
            const salaryExpense: string = this.getAmount(1000000, 2000000);
            const softwareExpense: string = this.getAmount(100000, 150000);

            // Income Data
            const phoneIncome: string = this.getAmount(3500000, 6000000);
            const computerIncome: string = this.getAmount(200000, 300000);
            const softwareIncome: string = this.getAmount(700000, 800000);
            const serviceIncome: string = this.getAmount(650000, 750000);
            const royaltyIncome: string = this.getAmount(400000, 450000);

            this.employeeData.push({
                "Name": name,
                "Company": company,
                "Title": title,
                "Age": age,
                "Country": country,
                "Salary": salary
            });

            this.expenseData.push({
                "Year": year,
                "Computers": computerExpense,
                "Research": researchExpense,
                "Travel": travelExpense,
                "Salary": salaryExpense,
                "Software": softwareExpense
            });

            this.incomeData.push({
                "Year": year,
                "Phones": phoneIncome,
                "Computers": computerIncome,
                "Software": softwareIncome,
                "Services": serviceIncome,
                "Royalties": royaltyIncome
            });
        }
    }

    public getItem(array: string[]): string {
        const i = this.getRandom(0, array.length - 1);
        return array[i];
    }

    public getRandom(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    public getAmount(min: number, max: number) {
        const n = this.getRandom(min, max);
        const s = n.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
        return "$" + s.replace(".00", "");
    }

    public onGridRef(grid: IgrLiveGrid) {
        this.grid = grid;
    }

    public onTableChange = (e: any) => {
        const newVal: string = e.target.value.toString();
        this.setState({selected: newVal} as any);
        this.switchDataSource(newVal);
    }

    public createWorkbook() {
        this.initData();
        this.switchDataSource((this.state as any).selected);
    }

    public saveWorkbook() {
        const headers = Object.keys(this.grid.dataSource[0]);
        headers.pop();

        const wb = new Workbook(WorkbookFormat.Excel2007);
        const ws = wb.worksheets().add("Sheet1");

        for(let i=0; i<headers.length; i++){
            ws.rows(0).cells(i).value = headers[i];
        }

        for(let i=0; i<this.grid.dataSource.length; i++){
            const dataRow = this.grid.dataSource[i];
            const xlRow = ws.rows(i + 1);
            for(let j=0; j<headers.length; j++){
                xlRow.setCellValue(j, dataRow[headers[j]]);
            }
        }

        ExcelUtility.save(wb, "WorkbookSample");
    }

    public switchDataSource(value: string){
        if(value.includes("Employee")){
            // this.setState({data: this.employeeData} as any);
            this.grid.dataSource = this.employeeData;
        }
        else if(value.includes("Expense")){
            // this.setState({data: this.expenseData} as any);
            this.grid.dataSource = this.expenseData;
        }
        else{
            // this.setState({data: this.incomeData} as any);
            this.grid.dataSource = this.incomeData;
        }
    }
}
```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/excel/excel-library/operations-on-workbooks
npm install
npm start

```

Then open http://localhost:3000/ in your browser

