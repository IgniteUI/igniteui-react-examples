import React from "react";


import "./SpreadsheetSharedStyles.css";

import { ExcelUtility } from "./ExcelUtility";

import { IgrExcelXlsxModule } from 'igniteui-react-excel';
import { IgrExcelCoreModule } from 'igniteui-react-excel';
import { IgrExcelModule } from 'igniteui-react-excel';

import { IgrSpreadsheetModule } from 'igniteui-react-spreadsheet';
import { IgrSpreadsheet } from 'igniteui-react-spreadsheet';
import { SpreadsheetCell } from 'igniteui-react-spreadsheet';
import { IgrSpreadsheetActiveCellChangedEventArgs } from 'igniteui-react-spreadsheet';

import { SpreadsheetSharedComponent } from "./SpreadsheetSharedComponent";

IgrExcelCoreModule.register();
IgrExcelModule.register();
IgrExcelXlsxModule.register();
IgrSpreadsheetModule.register();

export default class SpreadsheetActivation extends SpreadsheetSharedComponent {
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
                <input className="optionText" type="text" name="filterText" value={this.state.filterText} onChange={this.onFilterTextChanged} />

                <button onClick={this.onClick} className="igOptions-button">Active Cell</button>
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