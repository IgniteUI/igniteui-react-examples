import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrExcelXlsxModule } from 'igniteui-react-excel';
import { IgrExcelCoreModule } from 'igniteui-react-excel';
import { IgrExcelModule } from 'igniteui-react-excel';
import { IgrSpreadsheetModule } from 'igniteui-react-spreadsheet';
import { IgrSpreadsheet } from 'igniteui-react-spreadsheet';
import { ExcelUtility } from './ExcelUtility';
import { SpreadsheetAction } from 'igniteui-react-spreadsheet';

IgrExcelCoreModule.register();
IgrExcelModule.register();
IgrExcelXlsxModule.register();
IgrSpreadsheetModule.register();

export default class SpreadsheetCommands extends React.Component<any, any> {
    public spreadsheet: IgrSpreadsheet;

    constructor(props: any) {
        super(props);
        this.onSpreadsheetRef = this.onSpreadsheetRef.bind(this);
        this.onCommandClick = this.onCommandClick.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <button className="options-button" id="zoomIn" onClick={this.onCommandClick}>Zoom In</button>
                    <button className="options-button" id="zoomOut" onClick={this.onCommandClick}>Zoom Out</button>
                </div>
                <IgrSpreadsheet ref={this.onSpreadsheetRef} height="calc(100% - 25px)" width="100%" />
            </div>
        );
    }

    public onCommandClick(e: any) {
        const id: string = e.target.id;

        switch (id) {
            case "zoomIn": {
                this.spreadsheet.executeAction(SpreadsheetAction.ZoomIn);
                break;
            }
            case "zoomOut": {
                this.spreadsheet.executeAction(SpreadsheetAction.ZoomOut);
                break;
            }
        }
    }

    public onSpreadsheetRef(spreadsheet: IgrSpreadsheet) {
        if (!spreadsheet) { return; }

        this.spreadsheet = spreadsheet;

        const url = "https://static.infragistics.com/xplatform/excel/SalesData.xlsx";
        ExcelUtility.loadFromUrl(url).then((w) => {
            this.spreadsheet.workbook = w;
        });
    }
}

// rendering above class to the React DOM
ReactDOM.render(<SpreadsheetCommands />, document.getElementById('root'));
