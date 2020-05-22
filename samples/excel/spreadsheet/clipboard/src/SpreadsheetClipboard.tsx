import React from 'react';
import { IgrExcelXlsxModule } from 'igniteui-react-excel';
import { IgrExcelCoreModule } from 'igniteui-react-excel';
import { IgrExcelModule } from 'igniteui-react-excel';
import { IgrSpreadsheetModule } from 'igniteui-react-spreadsheet';
import { IgrSpreadsheet } from 'igniteui-react-spreadsheet';
import { ExcelUtility } from '/ExcelUtility';
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

    public render() {
        return (
            <div className="igContainer">
                <div className="igOptions">
                    <input type="igOptions-button" className="igOptions-item" id="cut" value="Cut" onClick={this.cut}/>
                    <input type="igOptions-button" className="igOptions-item" id="copy" value="Copy" onClick={this.copy}/>
                    <input type="igOptions-button" className="igOptions-item" id="paste" value="Paste" onClick={this.paste}/>
                </div>
                <IgrSpreadsheet ref={this.onSpreadsheetRef} height="calc(100% - 25px)" width="100%" />
            </div>
        );
    }

    public onSpreadsheetRef(spreadsheet: IgrSpreadsheet) {
        this.spreadsheet = spreadsheet;

        const url = "https://static.infragistics.com/xplatform/excel/SalesData.xlsx";
        ExcelUtility.loadFromUrl(url).then((w) => {
            this.spreadsheet.workbook = w;
        });
    }

    public cut() {
        this.spreadsheet.executeAction(SpreadsheetAction.Cut);
    }

    public copy() {
        this.spreadsheet.executeAction(SpreadsheetAction.Copy);
    }

    public paste() {
        this.spreadsheet.executeAction(SpreadsheetAction.Paste);
    }
}
