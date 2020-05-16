<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Spreadsheet Adapter.
<!-- in the Spreadsheet component -->
<!-- [Spreadsheet](https://infragistics.com/Reactsite/components/spreadsheet.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/excel/spreadsheet/chart-adapter?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/SpreadsheetAdapter.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/excel/spreadsheet/chart-adapter?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/SpreadsheetAdapter.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/excel/spreadsheet/chart-adapter?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/SpreadsheetAdapter.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/SpreadsheetAdapter.tsx` file:

```tsx
import React from 'react';
import { ExcelUtility } from '/ExcelUtility';

import { IgrExcelXlsxModule } from 'igniteui-react-excel';
import { IgrExcelCoreModule } from 'igniteui-react-excel';
import { IgrExcelModule } from 'igniteui-react-excel';

import { IgrSpreadsheetModule } from 'igniteui-react-spreadsheet';
import { IgrSpreadsheet } from 'igniteui-react-spreadsheet';
import { IgrSpreadsheetChartAdapterModule } from 'igniteui-react-spreadsheet-chart-adapter';
import { SpreadsheetChartAdapter } from 'igniteui-react-spreadsheet-chart-adapter';

import { Worksheet } from 'igniteui-react-excel';
import { WorksheetCell } from 'igniteui-react-excel';
import { ChartType, ChartTitle, FormattedString } from 'igniteui-react-excel';

IgrExcelCoreModule.register();
IgrExcelModule.register();
IgrExcelXlsxModule.register();
IgrSpreadsheetModule.register();
IgrSpreadsheetChartAdapterModule.register();

export default class SpreadsheetAdapter extends React.Component {
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
        const url = "https://static.infragistics.com/xplatform/excel/ChartData.xlsx";
        ExcelUtility.loadFromUrl(url).then((w) => {
            this.spreadsheet.workbook = w;

            const sheet: Worksheet = this.spreadsheet.workbook.worksheets(0);

            sheet.defaultColumnWidth = 450 * 20;
            sheet.rows(0).height = 150 * 20;

            const cell1: WorksheetCell = sheet.getCell("A1");
            const cell2: WorksheetCell = sheet.getCell("B1");
            const cell3: WorksheetCell = sheet.getCell("C1");
            const cell4: WorksheetCell = sheet.getCell("D1");

            const dataCellAddress = "A3:D6";

            const title: ChartTitle = new ChartTitle();
            title.text = new FormattedString("Line Chart");
            const chart1 = sheet.shapes().addChart(ChartType.Line, cell1, { x: 5, y: 5 }, cell1, { x: 90, y: 90 });
            chart1.chartTitle = title;
            chart1.setSourceData(dataCellAddress, true);

            const title2: ChartTitle = new ChartTitle();
            title2.text = new FormattedString("Column Chart");
            const chart2 = sheet.shapes().addChart(ChartType.ColumnClustered, cell2, { x: 5, y: 5 }, cell2, { x: 90, y: 90 });
            chart2.chartTitle = title2;
            chart2.setSourceData(dataCellAddress, true);

            const title3: ChartTitle = new ChartTitle();
            title3.text = new FormattedString("Area Chart");
            const chart3 = sheet.shapes().addChart(ChartType.Area, cell3, { x: 5, y: 5 }, cell3, { x: 90, y: 90 });
            chart3.chartTitle = title3;
            chart3.setSourceData(dataCellAddress, true);

            const title4: ChartTitle = new ChartTitle();
            title4.text = new FormattedString("Pie Chart");
            const chart4 = sheet.shapes().addChart(ChartType.Pie, cell4, { x: 5, y: 5 }, cell4, { x: 90, y: 90 });
            chart4.chartTitle = title4;
            chart4.setSourceData(dataCellAddress, true);
        });
    }
}
```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/excel/spreadsheet/chart-adapter
npm install
npm start

```

Then open http://localhost:3000/ in your browser

