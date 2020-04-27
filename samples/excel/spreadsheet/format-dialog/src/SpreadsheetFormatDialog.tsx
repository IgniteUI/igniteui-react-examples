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

import { SpreadsheetSharedComponent } from "./SpreadsheetSharedComponent";

IgrExcelCoreModule.register();
IgrExcelModule.register();
IgrExcelXlsxModule.register();

IgrSpreadsheetModule.register();

export default class SpreadsheetFormatDialog extends SpreadsheetSharedComponent {
    public spreadsheet: IgrSpreadsheet;

    constructor(props: any) {
        super(props);
        this.onSpreadsheetRef = this.onSpreadsheetRef.bind(this);
    }

    public render() {
        return (
            <div className="sampleContainer">
                <IgrSpreadsheet ref={this.onSpreadsheetRef} height="100%" width="100%" />
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
}