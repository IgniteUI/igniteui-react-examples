import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Workbook } from 'igniteui-react-excel';
import { WorkbookFormat } from 'igniteui-react-excel';
import { WorksheetRegion } from 'igniteui-react-excel';
import { ChartType } from 'igniteui-react-excel';
import { AxisType } from 'igniteui-react-excel';
import { IgrDataGridModule } from 'igniteui-react-data-grids';
import { IgrDataGrid } from 'igniteui-react-data-grids';
import { IgrTextColumn } from 'igniteui-react-data-grids';
import { IgrNumericColumn } from 'igniteui-react-data-grids';
import { IgrCategoryChart } from 'igniteui-react-charts';
import { IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrExcelXlsxModule } from 'igniteui-react-excel';
import { IgrExcelCoreModule } from 'igniteui-react-excel';
import { IgrExcelModule } from 'igniteui-react-excel';
import { ExcelUtility } from './ExcelUtility';

IgrDataGridModule.register();
IgrCategoryChartModule.register();

IgrExcelCoreModule.register();
IgrExcelModule.register();
IgrExcelXlsxModule.register();

export default class ExcelLibraryWorkingWithCharts extends React.Component<any, any> {

    public excelData: any[];
    public chartData: any[];

    constructor(props: any) {
        super(props);

        this.exportData = this.exportData.bind(this);

        this.initData();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <button className="options-button" onClick={this.exportData}>Export</button>
                </div>
                <div className="container">
                    <IgrCategoryChart
                        height="50%" width="100%"
                        yAxisMinimumValue={0}
                        xAxisInterval={1}
                        chartType="column"
                        brushes="#4f81bd, #c0504d, #9bbb59, #8064a2"
                        outlines="#4f81bd, #c0504d, #9bbb59, #8064a2"
                        thickness={0}
                        dataSource={this.chartData} />
                    <IgrDataGrid
                        height="50%"
                        width="100%"
                        autoGenerateColumns="false"
                        dataSource={this.excelData}>
                        <IgrTextColumn field="Expense" width="*>100" />
                        <IgrNumericColumn field="Jan" width="*>75" />
                        <IgrNumericColumn field="Feb" width="*>75" />
                        <IgrNumericColumn field="Mar" width="*>75" />
                        <IgrNumericColumn field="Apr" width="*>75" />
                        <IgrNumericColumn field="May" width="*>75" />
                        <IgrNumericColumn field="Jun" width="*>75" />
                        <IgrNumericColumn field="Jul" width="*>75" />
                        <IgrNumericColumn field="Aug" width="*>75" />
                        <IgrNumericColumn field="Sep" width="*>75" />
                        <IgrNumericColumn field="Oct" width="*>75" />
                        <IgrNumericColumn field="Nov" width="*>75" />
                        <IgrNumericColumn field="Dec" width="*>75" />
                    </IgrDataGrid>
                </div>
            </div>
        );
    }

    public initData() {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const groups = ["Heating", "Electricity", "Water", "Taxes"];

        const expanseKey = "Expense";
        const monthKey = "Month";
        const data = new Array<any>();
        // generating excel data source
        for (const group of groups) {
            const r: any = {};
            r[expanseKey] = group;
            let index = 0;
            for (const month of months) {
                const x = index * 15 * Math.PI / 180;
                const rand = this.getRandom(50, 100);
                const heat = Math.abs(Math.cos(x)) * 300 + rand;
                const ac = Math.abs(Math.sin(x)) * 500 + rand;
                if (group === "Heating") {
                    r[month] = Math.round(heat);
                } else if (group === "Electricity") {
                    r[month] = Math.round(ac);
                } else if (group === "Water") {
                    r[month] = this.getRandom(100, 150);
                } else if (group === "Taxes") {
                    r[month] = this.getRandom(700, 800);
                }
                index = index + 1;
            }
            data.push(r);
        }
        this.excelData = data;
        // since we will export the data transposed (plotByRows will be true)
        // if we want to show the data that way in the ui then we need a transposed
        // version of the data for the category chart to bind to
        const chartData = new Array<any>();
        for (const month of months) {
            const r = {};
            r[monthKey] = month;
            for (const item of data) {
                r[item[expanseKey]] = item[month];
            }
            chartData.push(r);
        }
        this.chartData = chartData;
    }

    public getRandom(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    public exportData() {
        const headers = Object.keys(this.excelData[0]);
        headers.pop();

        const wb = new Workbook(WorkbookFormat.Excel2007);
        const ws = wb.worksheets().add("Sheet1");
        ws.defaultColumnWidth = 200 * 20;

        // reserving the [0] row where we will place the chart shape
        // the [1] will be the headers. so data will start on [2]
        const firstDataRow = 2;
        const headerRow = ws.rows(firstDataRow - 1);
        for (let c = 0; c < headers.length; c++) {
            headerRow.setCellValue(c, headers[c]);
        }

        for (let r = 0; r < this.excelData.length; r++) {
            const xlRow = ws.rows(r + firstDataRow);
            const dataRow = this.excelData[r];
            for (let c = 0; c < headers.length; c++) {
                xlRow.setCellValue(c, dataRow[headers[c]]);
            }
        }
        const indexRow = firstDataRow - 1;
        const indexData = firstDataRow + this.excelData.length - 1;
        const indexHeader = headers.length - 1;

        const tableRegion = new WorksheetRegion(ws, indexRow, 0, indexData, indexHeader);
        const table = ws.tables().add(tableRegion.toString(), true);

        // set some extra height for the row where the chart will be
        ws.rows(0).height = 5000;
        const chart = ws.shapes().addChart(ChartType.ColumnClustered,
            ws.rows(0).cells(0), { x: 0, y: 0 },
            ws.rows(0).cells(headers.length - 1), { x: 100, y: 100 });
        chart.setSourceData(table.wholeTableRegion.toString(), true);

        chart.axisCollection(AxisType.Category).axisBetweenCategories = true;

        ExcelUtility.save(wb, "chartSample");
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ExcelLibraryWorkingWithCharts/>);
