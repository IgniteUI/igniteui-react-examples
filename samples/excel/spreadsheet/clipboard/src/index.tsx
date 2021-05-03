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

export default class SpreadsheetClipboard extends React.Component<any, any> {
    public spreadsheet: IgrSpreadsheet;

    constructor(props: any) {
        super(props);
        this.onSpreadsheetRef = this.onSpreadsheetRef.bind(this);
        this.cut = this.cut.bind(this);
        this.copy = this.copy.bind(this);
        this.paste = this.paste.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <button className="options-button" id="cut" onClick={this.cut}>Cut</button>
                    <button className="options-button" id="copy"  onClick={this.copy}>Copy</button>
                    <button className="options-button" id="paste" onClick={this.paste}>Paste</button>
                </div>
                <IgrSpreadsheet ref={this.onSpreadsheetRef} height="calc(100% - 25px)" width="100%" />
            </div>
        );
    }

    public onSpreadsheetRef(spreadsheet: IgrSpreadsheet) {
        if (!spreadsheet) { return; }

        this.spreadsheet = spreadsheet;

        const url = "https://static.infragistics.com/xplatform/excel/SalesData.xlsx";
        ExcelUtility.loadFromUrl(url).then((w) => {
            this.spreadsheet.workbook = w;
        });
    }

    public cut() {
        if (!this.spreadsheet) { return; }

        this.spreadsheet.executeAction(SpreadsheetAction.Cut);
    }

    public copy() {
        if (!this.spreadsheet) { return; }

        this.spreadsheet.executeAction(SpreadsheetAction.Copy);
    }

    public paste() {
        if (!this.spreadsheet) { return; }

        this.spreadsheet.executeAction(SpreadsheetAction.Paste);
    }
}

// rendering above class to the React DOM
ReactDOM.render(<SpreadsheetClipboard />, document.getElementById('root'));
