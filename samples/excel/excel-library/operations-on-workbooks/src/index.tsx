import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDataGridModule } from 'igniteui-react-data-grids';
import { IgrDataGrid } from 'igniteui-react-data-grids';
import { Workbook } from 'igniteui-react-excel';
import { WorkbookFormat } from 'igniteui-react-excel';
import { WorksheetRegion } from 'igniteui-react-excel';
import { ExcelUtility } from './ExcelUtility';

IgrDataGridModule.register();

export default class ExcelLibraryUsingWorkbooks extends React.Component<any, any> {

    public grid: IgrDataGrid;

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

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <button className="options-button" onClick={this.createWorkbook}>Create Workbook</button>
                    <button className="options-button" onClick={this.saveWorkbook}>Save Workbook</button>
                    <label className="options-label">Select Table to Export: </label>
                    <select onChange={this.onTableChange} value={(this.state as any).selected}>
                        <option>Employees - Table1</option>
                        <option>Expenses - Table2</option>
                        <option>Income - Table3</option>
                    </select>
                </div>
                <div className="container">
                    <IgrDataGrid
                        ref = {this.onGridRef}
                        height="100%"
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

    public onGridRef(grid: IgrDataGrid) {
        if (!grid) { return; }

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

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ExcelLibraryUsingWorkbooks/>);
