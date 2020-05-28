import React from 'react';
import { IgrExcelXlsxModule } from 'igniteui-react-excel';
import { IgrExcelCoreModule } from 'igniteui-react-excel';
import { IgrExcelModule } from 'igniteui-react-excel';
import { IgrSpreadsheetModule } from 'igniteui-react-spreadsheet';
import { IgrSpreadsheet } from 'igniteui-react-spreadsheet';
import { ExcelUtility } from './ExcelUtility';

IgrExcelCoreModule.register();
IgrExcelModule.register();
IgrExcelXlsxModule.register();

IgrSpreadsheetModule.register();

export default class SpreadsheetOverview extends React.Component<any, any> {
    public spreadsheet: IgrSpreadsheet;

    constructor(props: any) {
        super(props);
        this.onSpreadsheetRef = this.onSpreadsheetRef.bind(this);
        this.openFile = this.openFile.bind(this);
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igOptions">
                    <input type="file" onChange={(e) => this.openFile(e.target.files as FileList)} accept=".xls, .xlt, .xlsx, .xlsm, .xltm, .xltx"/>
                </div>
                <IgrSpreadsheet ref={this.onSpreadsheetRef} height="calc(100% - 30px)" width="100%" />
            </div>
        );
    }

    public openFile(selectorFiles: FileList) {
        if (selectorFiles != null && selectorFiles.length > 0) {
            ExcelUtility.load(selectorFiles[0]).then((w) => {
                this.spreadsheet.workbook = w;
            }, (e) => {
                console.error("Workbook Load Error");
            });
        }
    }

    public onSpreadsheetRef(spreadsheet: IgrSpreadsheet) {
        if (!spreadsheet) { return; }

        this.spreadsheet = spreadsheet;

        const url = "https://static.infragistics.com/xplatform/excel/SalesData.xlsx"
        ExcelUtility.loadFromUrl(url).then((w) => {
            this.spreadsheet.workbook = w;
        });
    }
}
