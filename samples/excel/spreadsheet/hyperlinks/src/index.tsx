import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import React from 'react';
import { ExcelUtility } from './ExcelUtility';
import { IgrExcelXlsxModule } from 'igniteui-react-excel';
import { IgrExcelCoreModule } from 'igniteui-react-excel';
import { IgrExcelModule } from 'igniteui-react-excel';
import { IgrSpreadsheetModule } from 'igniteui-react-spreadsheet';
import { IgrSpreadsheet } from 'igniteui-react-spreadsheet';

IgrExcelCoreModule.register();
IgrExcelModule.register();
IgrExcelXlsxModule.register();
IgrSpreadsheetModule.register();

export default class SpreadsheetHyperlinks extends React.Component {
    public spreadsheet: IgrSpreadsheet;

    constructor(props: any) {
        super(props);
        this.onSpreadsheetRef = this.onSpreadsheetRef.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="igContainer">
                <IgrSpreadsheet ref={this.onSpreadsheetRef} height="100%" width="100%" />
            </div>
        );
    }

    public onSpreadsheetRef(spreadsheet: IgrSpreadsheet) {
        if (!spreadsheet) { return; }

        this.spreadsheet = spreadsheet;

        const url = "https://static.infragistics.com/xplatform/excel/Hyperlinks.xlsx";
        ExcelUtility.loadFromUrl(url).then((w) => {
            this.spreadsheet.workbook = w;
        });
    }
}

// rendering above class to the React DOM
ReactDOM.render(<SpreadsheetHyperlinks />, document.getElementById('root'));