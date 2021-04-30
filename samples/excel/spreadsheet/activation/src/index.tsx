import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { ExcelUtility } from './ExcelUtility';
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
    public inputAddress: string = "C9";

    constructor(props: any) {
        super(props);
        this.onSpreadsheetRef = this.onSpreadsheetRef.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onInputAddress = this.onInputAddress.bind(this);
        this.onActiveCellChanged = this.onActiveCellChanged.bind(this);

        this.state = { inputAddress: this.inputAddress}
    }

    public render(): JSX.Element {

        return (
            <div className="igContainer">
                <div className="igOptions">
                    <input className="igOptions-input-text" type="text" name="inputAddress" value={this.state.inputAddress} onChange={this.onInputAddress} />
                    <button className="igOptions-button" onClick={this.onClick} >Active Cell</button>
                    <label className="igOptions-item"> Current Active Cell: {this.state.activeCell } </label>
                </div>
                <div className="igComponent">
                    <IgrSpreadsheet activeCellChanged={this.onActiveCellChanged} ref={this.onSpreadsheetRef}
                    height="100%" width="100%" />
                </div>
            </div>
        );
    }

    public onActiveCellChanged (s: IgrSpreadsheet, e: IgrSpreadsheetActiveCellChangedEventArgs)
    {
        this.setState({activeCell: e.newValue.toString()});
    }

    public onInputAddress = (e: any) => {
        this.inputAddress = e.target.value;
        this.inputAddress = this.inputAddress.toUpperCase()
        this.setState({inputAddress: this.inputAddress});
    }

    public onClick = (e: any) => {

        if (this.inputAddress === "") {
            this.inputAddress = "C9";
            this.setState({inputAddress: this.inputAddress});
        }
        this.spreadsheet.activeCell = new SpreadsheetCell(this.inputAddress);
    }

    public onSpreadsheetRef(spreadsheet: IgrSpreadsheet) {
        if (!spreadsheet) { return; }

         this.spreadsheet = spreadsheet;
         const url = "https://static.infragistics.com/xplatform/excel/SalesData.xlsx";
         ExcelUtility.loadFromUrl(url).then((w) => {
            this.spreadsheet.workbook = w;
            this.spreadsheet.activeCell = new SpreadsheetCell("C15");
        });
    }
}

// rendering above class to the React DOM
ReactDOM.render(<SpreadsheetActivation />, document.getElementById('root'));