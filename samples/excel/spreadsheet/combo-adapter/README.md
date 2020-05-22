<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
- [Preview](#Preview)
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Spreadsheet Combo Adapter.
<!-- in the Spreadsheet component -->
<!-- [Spreadsheet](https://infragistics.com/Reactsite/components/spreadsheet.html) -->

## Preview

You can preview example of this React application on CodeSandbox by clicking on this sample:

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/excel/spreadsheet/combo-adapter?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/SpreadsheetComboAdapter.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/excel/spreadsheet/combo-adapter?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/SpreadsheetComboAdapter.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/excel/spreadsheet/combo-adapter?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/SpreadsheetComboAdapter.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

You can find source code for this example in :
[./src/SpreadsheetComboAdapter.tsx](./src/SpreadsheetComboAdapter.tsx) file.

<!-- The following section provides source code from:
`./src/SpreadsheetComboAdapter.tsx` file: -->

<!-- ```tsx
import React from 'react';
import { IgrExcelXlsxModule } from 'igniteui-react-excel';
import { IgrExcelCoreModule } from 'igniteui-react-excel';
import { IgrExcelModule } from 'igniteui-react-excel';
import { IgrSpreadsheetModule } from 'igniteui-react-spreadsheet';
import { IgrSpreadsheet } from 'igniteui-react-spreadsheet';
import { IgrSpreadsheetChartAdapterModule } from 'igniteui-react-spreadsheet-chart-adapter';
import { SpreadsheetChartAdapter } from 'igniteui-react-spreadsheet-chart-adapter';
import { AxisGroup, AxisPosition, AxisType, CellReferenceMode,

    ChartType, ChartTitle, FormattedString, Legend,
    LegendPosition, Workbook,
    WorksheetTableColumnArea, WorkbookFormat, XValues } from 'igniteui-react-excel';

IgrExcelCoreModule.register();
IgrExcelModule.register();
IgrExcelXlsxModule.register();
IgrSpreadsheetModule.register();
IgrSpreadsheetChartAdapterModule.register();

export default class SpreadsheetComboAdapter extends React.Component {
    public spreadsheet: IgrSpreadsheet;

    constructor(props: any) {
        super(props);
        this.onSpreadsheetRef = this.onSpreadsheetRef.bind(this);
    }

    public render() {
        return (
            <div className="igContainer">
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

``` -->

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/excel/spreadsheet/combo-adapter
npm install
npm start

```

Then open http://localhost:3000/ in your browser

