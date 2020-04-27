import React from "react";

import "../styles.css";
import "./SpreadsheetSharedStyles.css";
import DataUtils from "./DataUtils";
import { IgrExcelXlsxModule } from 'igniteui-react-excel';
import { IgrExcelCoreModule } from 'igniteui-react-excel';
import { IgrExcelModule } from 'igniteui-react-excel';

import { IgrSpreadsheetModule } from 'igniteui-react-spreadsheet';
import { IgrSpreadsheet } from 'igniteui-react-spreadsheet';

import { ExcelUtility } from "./ExcelUtility";
import { SpreadsheetAction } from 'igniteui-react-spreadsheet';

import { SpreadsheetSharedComponent } from "./SpreadsheetSharedComponent";

IgrExcelCoreModule.register();
IgrExcelModule.register();
IgrExcelXlsxModule.register();

IgrSpreadsheetModule.register();

export default class SpreadsheetClipboard extends SpreadsheetSharedComponent {
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
            <div className="sampleContainer">
                <div className="options">
                    <input type="button" className="optionItem" id="cut" value="Cut" onClick={this.cut}/>
                    <input type="button" className="optionItem" id="copy" value="Copy" onClick={this.copy}/>
                    <input type="button" className="optionItem" id="paste" value="Paste" onClick={this.paste}/>
                </div>
                <IgrSpreadsheet ref={this.onSpreadsheetRef} height="calc(100% - 25px)" width="100%" />
            </div>
        );
    }

    public onSpreadsheetRef(spreadsheet: IgrSpreadsheet) {
        this.spreadsheet = spreadsheet;
        const url = DataUtils.getPublicURL();
        ExcelUtility.loadFromUrl(url + "/excel/SalesData.xlsx").then((w) => {
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