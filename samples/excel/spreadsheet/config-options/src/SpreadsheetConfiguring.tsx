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

export default class SpreadsheetConfiguring extends React.Component<any, any> {
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