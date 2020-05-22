<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
- [Preview](#Preview)
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Spreadsheet Activation.
<!-- in the Spreadsheet component -->
<!-- [Spreadsheet](https://infragistics.com/Reactsite/components/spreadsheet.html) -->

## Preview

You can preview example of this React application on CodeSandbox by clicking on this sample:

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/excel/spreadsheet/activation?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/SpreadsheetActivation.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/excel/spreadsheet/activation?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/SpreadsheetActivation.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/excel/spreadsheet/activation?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/SpreadsheetActivation.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

You can find source code for this example in :
[./src/SpreadsheetActivation.tsx](./src/SpreadsheetActivation.tsx) file.

<!-- The following section provides source code from:
`./src/SpreadsheetActivation.tsx` file: -->

<!-- ```tsx
import React from 'react';
import { ExcelUtility } from '/ExcelUtility';
import { IgrExcelXlsxModule } from 'igniteui-react-excel';
import { IgrExcelCoreModule } from 'igniteui-react-excel';
import { IgrExcelModule } from 'igniteui-react-excel';
import { IgrSpreadsheetModule } from 'igniteui-react-spreadsheet';
import { IgrSpreadsheet } from 'igniteui-react-spreadsheet';
import { SpreadsheetCell } from 'igniteui-react-spreadsheet';
import { IgrSpreadsheetActiveCellChangedEventArgs } from 'igniteui-react-spreadsheet';

IgrExcelCoreModule.register();
IgrExcelModule.register();
IgrExcelXlsxModule.register();
IgrSpreadsheetModule.register();

export default class SpreadsheetActivation extends React.Component<any, any> {
    public spreadsheet: IgrSpreadsheet;
    public filterText: string = "";

    constructor(props: any) {
        super(props);
        this.onSpreadsheetRef = this.onSpreadsheetRef.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onFilterTextChanged = this.onFilterTextChanged.bind(this);
        this.onActiveCellChanged = this.onActiveCellChanged.bind(this);

        this.state = { filterText: this.filterText}
    }

    public render() {

        return (
            <div className="igContainer">
                <div className="igOptions">
                    <input className="igOptions-input-text" type="text" name="filterText" value={this.state.filterText} onChange={this.onFilterTextChanged} />
                    <button className="igOptions-button" onClick={this.onClick} >Active Cell</button>
                    <label className="igOptions-item"> Current Active Cell: {this.state.activeCell } </label>
                </div>
                 <IgrSpreadsheet activeCellChanged={this.onActiveCellChanged}  ref={this.onSpreadsheetRef} height="800px" width="100%" />
            </div>
        );
    }
     public onActiveCellChanged (s: IgrSpreadsheet, e: IgrSpreadsheetActiveCellChangedEventArgs)
     {
       this.setState({activeCell: e.newValue.toString()});
     }

    public onFilterTextChanged = (e: any) => {
        this.filterText = e.target.value;
        this.setState({filterText: e.target.value});
    }

    public onClick = (e: any) => {
       this.spreadsheet.activeCell = new SpreadsheetCell(this.filterText);
    }
    public onSpreadsheetRef(ss: IgrSpreadsheet) {
         this.spreadsheet = ss;
         const url = "https://static.infragistics.com/xplatform/excel/SalesData.xlsx";
         ExcelUtility.loadFromUrl(url).then((w) => {
            this.spreadsheet.workbook = w;
            this.spreadsheet.activeCell = new SpreadsheetCell("C15");
        });
    }
}

``` -->

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/excel/spreadsheet/activation
npm install
npm start

```

Then open http://localhost:3000/ in your browser

