<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Spreadsheet Config Options.
<!-- in the Spreadsheet component -->
<!-- [Spreadsheet](https://infragistics.com/Reactsite/components/spreadsheet.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/excel/spreadsheet/config-options?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/SpreadsheetConfigOptions.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/excel/spreadsheet/config-options?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/SpreadsheetConfigOptions.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/excel/spreadsheet/config-options?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/SpreadsheetConfigOptions.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/SpreadsheetConfigOptions.tsx` file:

```tsx
import React from 'react';
import { ExcelUtility } from '/ExcelUtility';
import { IgrExcelXlsxModule } from 'igniteui-react-excel';
import { IgrExcelCoreModule } from 'igniteui-react-excel';
import { IgrExcelModule } from 'igniteui-react-excel';
import { IgrSpreadsheetModule } from 'igniteui-react-spreadsheet';
import { IgrSpreadsheet } from 'igniteui-react-spreadsheet';
import { SpreadsheetEnterKeyNavigationDirection } from 'igniteui-react-spreadsheet';
import { SpreadsheetCellSelectionMode } from 'igniteui-react-spreadsheet';

IgrExcelCoreModule.register();
IgrExcelModule.register();
IgrExcelXlsxModule.register();
IgrSpreadsheetModule.register();

export default class SpreadsheetConfigOptions extends React.Component<any, any> {
    public spreadsheet: IgrSpreadsheet;

    constructor(props: any) {
        super(props);

        this.onEnterKeyNavEnabledChanged = this.onEnterKeyNavEnabledChanged.bind(this);
        this.onEnterKeyNavDirectionChanged = this.onEnterKeyNavDirectionChanged.bind(this);

        this.onFormulaBarVisibleChanged = this.onFormulaBarVisibleChanged.bind(this);
        this.onGridlinesVisibleChanged = this.onGridlinesVisibleChanged.bind(this);
        this.onHeadersVisibleChanged = this.onHeadersVisibleChanged.bind(this);
        this.onTabAreaVisibleChanged = this.onTabAreaVisibleChanged.bind(this);

        this.onProtectedChanged = this.onProtectedChanged.bind(this);
        this.onSelectionModeChanged = this.onSelectionModeChanged.bind(this);
        this.onZoomLevelChanged = this.onZoomLevelChanged.bind(this);

        this.onSpreadsheetRef = this.onSpreadsheetRef.bind(this);

        this.state = {
            areGridlinesVisible: true,
            areHeadersVisible: true,
            enterKeyNavigationDirection: SpreadsheetEnterKeyNavigationDirection.Down,
            isEnterKeyNavEnabled: true,
            isFormulaBarVisible: true,
            isProtected: false,
            isTabBarAreaVisible: true,
            spreadsheetSelectionMode: SpreadsheetCellSelectionMode.Normal,
            spreadsheetZoomLevel: 100
        }
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igOptions">
                    <span className="igOptions-item">Selection Mode: </span>
                    <select onChange={this.onSelectionModeChanged} defaultValue="Normal">
                        <option>AddToSelection</option>
                        <option>ExtendSelection</option>
                        <option>Normal</option>
                    </select>

                    <span className="igOptions-item">Enter Key Navigation Direction: </span>
                    <select onChange={this.onEnterKeyNavDirectionChanged} defaultValue="Down">
                        <option>Down</option>
                        <option>Left</option>
                        <option>Right</option>
                        <option>Up</option>
                    </select>

                </div>
                <div className="igOptions">
                    <label className="igOptions-item" style={{width: "145px"}}><input type="checkbox" checked={this.state.areHeadersVisible} onChange={this.onHeadersVisibleChanged}/> Enable Headers</label>
                    <label className="igOptions-item" style={{width: "175px"}}><input type="checkbox" checked={this.state.isFormulaBarVisible} onChange={this.onFormulaBarVisibleChanged} /> Enable Formula Bar</label>
                    <label className="igOptions-item" style={{width: "225px"}}><input type="checkbox" checked={this.state.isEnterKeyNavEnabled} onChange={this.onEnterKeyNavEnabledChanged} />Enable Enter Key Navigation</label>
                    <label className="igOptions-item">Zoom Level: {this.state.spreadsheetZoomLevel}%</label>
                </div>
                <div className="igOptions">
                    <label className="igOptions-item" style={{width: "145px"}}><input type="checkbox" checked={this.state.areGridlinesVisible} onChange={this.onGridlinesVisibleChanged} /> Enable Gridlines</label>
                    <label className="igOptions-item" style={{width: "175px"}}><input type="checkbox" checked={this.state.isTabBarAreaVisible} onChange={this.onTabAreaVisibleChanged} /> Enable Tab Bar Area</label>
                    <label className="igOptions-item" style={{width: "225px"}}><input type="checkbox" checked={this.state.isProtected} onChange={this.onProtectedChanged} /> Enable Protected Mode</label>
                    <input className="igOptions-slider" type="range" min={50} max={150} step={5} value={this.state.spreadsheetZoomLevel} onChange={this.onZoomLevelChanged} />
                </div>

                <IgrSpreadsheet ref={this.onSpreadsheetRef}
                    height="calc(100% - 120px)"
                    width="100%"
                    selectionMode={this.state.spreadsheetSelectionMode}
                    enterKeyNavigationDirection={this.state.enterKeyNavigationDirection}
                    zoomLevel={this.state.spreadsheetZoomLevel}
                    isFormulaBarVisible={this.state.isFormulaBarVisible}
                    isEnterKeyNavigationEnabled={this.state.isEnterKeyNavEnabled}
                    areGridlinesVisible={this.state.areGridlinesVisible}
                    areHeadersVisible={this.state.areHeadersVisible} />
            </div>
        );
    }

    public onSelectionModeChanged(e: any) {
        const selection: string = e.target.value;

        switch (selection) {
            case "AddToSelection": {
                this.setState({ spreadsheetSelectionMode: SpreadsheetCellSelectionMode.AddToSelection });
                break;
            }
            case "ExtendSelection": {
                this.setState({ spreadsheetSelectionMode: SpreadsheetCellSelectionMode.ExtendSelection });
                break;
            }
            case "Normal": {
                this.setState({ spreadsheetSelectionMode: SpreadsheetCellSelectionMode.Normal });
                break;
            }
        }
    }

    public onEnterKeyNavDirectionChanged(e: any) {
        const selection: string = e.target.value;

        switch (selection) {
            case "Down": {
                this.setState({ enterKeyNavigationDirection: SpreadsheetEnterKeyNavigationDirection.Down });
                break;
            }
            case "Up": {
                this.setState({ enterKeyNavigationDirection: SpreadsheetEnterKeyNavigationDirection.Up });
                break;
            }
            case "Left": {
                this.setState({ enterKeyNavigationDirection: SpreadsheetEnterKeyNavigationDirection.Left });
                break;
            }
            case "Right": {
                this.setState({ enterKeyNavigationDirection: SpreadsheetEnterKeyNavigationDirection.Right });
                break;
            }
        }
    }

    public onZoomLevelChanged(e: any) {
        this.setState({ spreadsheetZoomLevel: e.target.value });
    }

    public onProtectedChanged(e: any) {
        const checked : boolean = e.target.checked;
        this.setState({isProtected : checked});

        if (checked) {
            this.spreadsheet.activeWorksheet.protect();
        }
        else{
            this.spreadsheet.activeWorksheet.unprotect();
        }
    }

    public onFormulaBarVisibleChanged(e: any) {
        this.setState({isFormulaBarVisible : e.target.checked});
    }

    public onEnterKeyNavEnabledChanged(e: any) {
        this.setState({isEnterKeyNavEnabled : e.target.checked});
    }

    public onTabAreaVisibleChanged(e: any) {
        const checked : boolean = e.target.checked;
        this.setState({isTabBarAreaVisible : checked});

        if(checked){
            this.spreadsheet.workbook.windowOptions.tabBarVisible = true;
        }
        else{
            this.spreadsheet.workbook.windowOptions.tabBarVisible = false;
        }
    }

    public onGridlinesVisibleChanged(e: any) {
        this.setState({areGridlinesVisible : e.target.checked});
    }

    public onHeadersVisibleChanged(e: any) {
        this.setState({areHeadersVisible : e.target.checked});
    }

    public onSpreadsheetRef(spreadsheet: IgrSpreadsheet) {
        this.spreadsheet = spreadsheet;

        const url = "https://static.infragistics.com/xplatform/excel/SalesData.xlsx";
        ExcelUtility.loadFromUrl(url).then((w) => {
            this.spreadsheet.workbook = w;
        });
    }
}

```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/excel/spreadsheet/config-options
npm install
npm start

```

Then open http://localhost:3000/ in your browser

