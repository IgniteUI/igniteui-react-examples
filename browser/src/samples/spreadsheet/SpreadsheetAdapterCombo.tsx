import React from "react";

import { IgrExcelXlsxModule } from 'igniteui-react-excel';
import { IgrExcelCoreModule } from 'igniteui-react-excel';
import { IgrExcelModule } from 'igniteui-react-excel';

import { IgrSpreadsheetModule } from 'igniteui-react-spreadsheet';
import { IgrSpreadsheet } from 'igniteui-react-spreadsheet';
import { IgrSpreadsheetChartAdapterModule } from 'igniteui-react-spreadsheet-chart-adapter';
import { SpreadsheetChartAdapter } from 'igniteui-react-spreadsheet-chart-adapter';

import { AxisGroup, AxisPosition, AxisType, CellReferenceMode, ChartType, ChartTitle, FormattedString, Legend, 
    LegendPosition, Workbook, WorksheetTableColumnArea, WorkbookFormat, XValues } from "igniteui-react-excel";

IgrExcelCoreModule.register();
IgrExcelModule.register();
IgrExcelXlsxModule.register();
IgrSpreadsheetModule.register();
IgrSpreadsheetChartAdapterModule.register();

export default class SpreadsheetAdapterCombo extends React.Component {
    public spreadsheet: IgrSpreadsheet;

    constructor(props: any) {
        super(props);
        this.onSpreadsheetRef = this.onSpreadsheetRef.bind(this);
    }

    public render() {
        return (
            <div className="sampleContainer">
                <IgrSpreadsheet ref={this.onSpreadsheetRef} height="calc(100% - 25px)" width="100%" />
            </div>
        );
    }

    public onSpreadsheetRef(spreadsheet: IgrSpreadsheet) {
        this.spreadsheet = spreadsheet;
        this.spreadsheet.chartAdapter = new SpreadsheetChartAdapter();

        const wb = new Workbook(WorkbookFormat.Excel2007);

        const ws = wb.worksheets().add("Sheet1");
        ws.getCell("A1").value = "Date";
        ws.getCell("B1").value = "Sold Count";
        ws.getCell("C1").value = "Average Price";
        ws.getCell("A2").value = new Date(2019, 1, 1);
        ws.getCell("B2").value = 275;
        ws.getCell("C2").value = 410;
        ws.getCell("A3").value = new Date(2019, 2, 1);
        ws.getCell("B3").value = 150;
        ws.getCell("C3").value = 450;
        ws.getCell("A4").value = new Date(2019, 3, 1);
        ws.getCell("B4").value = 225;
        ws.getCell("C4").value = 430;
        ws.getCell("A5").value = new Date(2019, 4, 1);
        ws.getCell("B5").value = 275;
        ws.getCell("C5").value = 425;
        ws.getCell("A6").value = new Date(2019, 5, 1);
        ws.getCell("B6").value = 150;
        ws.getCell("C6").value = 410;
        ws.getCell("A7").value = new Date(2019, 6, 1);
        ws.getCell("B7").value = 250;
        ws.getCell("C7").value = 400;
        const tbl = ws.tables().add("A1:C7", true);
        tbl.columns(0).areaFormats(WorksheetTableColumnArea.DataArea).formatString = "mmm yy";

        this.spreadsheet.workbook = wb;

        ws.shapes().addChart(ChartType.Combo, ws.getCell("E1"), {x: 0, y: 0}, ws.getCell("M12"), {x: 100, y: 100}, (chart) => {
            chart.setComboChartSourceData("B1:C7", [ ChartType.ColumnClustered, ChartType.Line ]);
            const axis2 = chart.axisCollection().add(AxisType.Value, AxisGroup.Secondary);
            axis2.position = AxisPosition.Right;
            chart.seriesCollection(1).axisGroup = AxisGroup.Secondary;

            const legend = new Legend();
            legend.position = LegendPosition.Right;
            chart.legend = legend;

            const title: ChartTitle = new ChartTitle();
            title.text = new FormattedString("Combo Chart");
            chart.chartTitle = title;

            chart.seriesCollection(0).xValues = new XValues(ws, "A2:A7", CellReferenceMode.A1);
            chart.seriesCollection(1).xValues = new XValues(ws, "A2:A7", CellReferenceMode.A1);
        });
    }
}