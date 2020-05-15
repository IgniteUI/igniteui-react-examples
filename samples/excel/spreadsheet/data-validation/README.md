<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/sample-template-files/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Spreadsheet Data Validation.
<!-- in the Spreadsheet component -->
<!-- [Spreadsheet](https://infragistics.com/Reactsite/components/spreadsheet.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/excel/spreadsheet/data-validation?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/SpreadsheetDataValidation.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/excel/spreadsheet/data-validation?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/SpreadsheetDataValidation.tsx">
            <img height="40px" style="border-radius: 5px" alt="View on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/view.png"/>
        </a> -->
        <!-- <a target="_blank"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="View on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/view.png"/>
        </a>
https://codesandbox.io/embed/react-treemap-overview-rtb45
https://codesandbox.io/static/img/play-codesandbox.svg
https://codesandbox.io/embed/react-treemap-overview-rtb45?view=browser -->
    </body>
</html>

<!-- ## Sample Preview -->

<!-- <iframe
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/excel/spreadsheet/data-validation?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/SpreadsheetDataValidation.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/SpreadsheetDataValidation.tsx` file:

```tsx
import React from 'react';

import "../styles.css";


import { IgrExcelXlsxModule } from 'igniteui-react-excel';
import { IgrExcelCoreModule } from 'igniteui-react-excel';
import { IgrExcelModule } from 'igniteui-react-excel';

import { IgrSpreadsheetModule } from 'igniteui-react-spreadsheet';
import { IgrSpreadsheet } from 'igniteui-react-spreadsheet';

import { AnyValueDataValidationRule } from 'igniteui-react-excel';
import { CustomDataValidationRule } from 'igniteui-react-excel';
import { DataValidationErrorStyle } from 'igniteui-react-excel';
import { ListDataValidationRule } from 'igniteui-react-excel';
import { OneConstraintDataValidationOperator } from 'igniteui-react-excel';
import { OneConstraintDataValidationRule } from 'igniteui-react-excel';
import { TwoConstraintDataValidationOperator } from 'igniteui-react-excel';
import { TwoConstraintDataValidationRule } from 'igniteui-react-excel';
import { WorksheetColumnWidthUnit } from 'igniteui-react-excel';



IgrExcelCoreModule.register();
IgrExcelModule.register();
IgrExcelXlsxModule.register();

IgrSpreadsheetModule.register();

export default class SpreadsheetDataValidation extends React.Component<any, any> {
    public spreadsheet: IgrSpreadsheet;

    constructor(props: any) {
        super(props);
        this.onSpreadsheetRef = this.onSpreadsheetRef.bind(this);
    }

    public render() {
        return (
            <div className="igContainer">
                <IgrSpreadsheet ref={this.onSpreadsheetRef} height="100%" width="100%" />
            </div>
        );
    }

    public onSpreadsheetRef(spreadsheet: IgrSpreadsheet) {
        if (spreadsheet != null) {
            this.spreadsheet = spreadsheet;

            this.spreadsheet.workbook.worksheets(0).columns(0).setWidth(25, WorksheetColumnWidthUnit.Character);
            this.spreadsheet.workbook.worksheets(0).columns(1).setWidth(15, WorksheetColumnWidthUnit.Character);

            // this validation rule has only input message set
            const valRule1 = new AnyValueDataValidationRule();
            valRule1.inputMessageTitle = "Hotel room booking form";
            valRule1.inputMessageDescription = "Please us the form below to choose your accommodation type";
            this.spreadsheet.workbook.worksheets(0).rows(1).cells(0).dataValidationRule = valRule1;
            this.spreadsheet.workbook.worksheets(0).rows(1).cells(0).value = "Hotel room booking form";

            // this validation rule has a two constraint validation set
            const valRule2 = new TwoConstraintDataValidationRule();
            valRule2.validationOperator = TwoConstraintDataValidationOperator.Between;
            valRule2.setLowerConstraint(1);
            valRule2.setUpperConstraint(4);
            valRule2.inputMessageTitle = "Adults";
            valRule2.inputMessageDescription = "Adults count must be min, 1 and max. 4.";
            valRule2.errorMessageTitle = "Adult requirement not met";
            valRule2.errorMessageDescription = "There must be between 1 and 4 adults per room.";
            valRule2.errorStyle = DataValidationErrorStyle.Information;
            this.spreadsheet.workbook.worksheets(0).rows(3).cells(1).dataValidationRule = valRule2;
            this.spreadsheet.workbook.worksheets(0).rows(3).cells(1).value = 1;
            this.spreadsheet.workbook.worksheets(0).rows(3).cells(0).value = "Adults";

            // this validation rule has a custom formula validation set
            const valRule3 = new CustomDataValidationRule();
            valRule3.setFormula("=AND((B4+B5)<5 , (B4+B5)>0)", "B5");
            valRule3.inputMessageTitle = "Children";
            valRule3.inputMessageDescription = "Children and adults cannot be more than 4 per room.";
            valRule3.errorMessageTitle = "Room limit exceeded";
            valRule3.errorMessageDescription = "The maximum persons per room is 4.";
            valRule3.errorStyle = DataValidationErrorStyle.Warning;
            this.spreadsheet.workbook.worksheets(0).rows(4).cells(1).dataValidationRule = valRule3;
            this.spreadsheet.workbook.worksheets(0).rows(4).cells(1).value = 0;
            this.spreadsheet.workbook.worksheets(0).rows(4).cells(0).value = "Children";

            // this validation rule has a list of accepted choices validation set
            const valRule4 = new ListDataValidationRule();
            valRule4.setValues(["FB", "HB", "BB"]);
            valRule4.inputMessageTitle = "Servicing";
            valRule4.inputMessageDescription = "Allowed values: FB (Full board - breakfast, lunch, and dinner)" +
                ", HB (Half board - breakfast and dinner), BB (Bed and breakfast)";
            valRule4.errorMessageTitle = "Invalid Option";
            valRule4.errorMessageDescription = "Please choose FB, HB, or BB";
            valRule4.errorStyle = DataValidationErrorStyle.Stop;
            this.spreadsheet.workbook.worksheets(0).rows(5).cells(1).dataValidationRule = valRule4;
            this.spreadsheet.workbook.worksheets(0).rows(5).cells(1).value = "FB";
            this.spreadsheet.workbook.worksheets(0).rows(5).cells(0).value = "Servicing";

            // this validation rule has a single constraint validation set
            const valRule5 = new OneConstraintDataValidationRule();
            valRule5.inputMessageTitle = "Check In Date";
            const checkInDate = new Date();
            valRule5.inputMessageDescription = "The hotel operates from " + checkInDate;
            valRule5.validationOperator = OneConstraintDataValidationOperator.GreaterThanOrEqualTo;
            valRule5.setConstraint(checkInDate);
            this.spreadsheet.workbook.worksheets(0).rows(6).cells(1).dataValidationRule = valRule5;
            this.spreadsheet.workbook.worksheets(0).rows(6).cells(1).value = checkInDate.toLocaleDateString();
            this.spreadsheet.workbook.worksheets(0).rows(6).cells(0).value = "Check In Date";

            // this validation rule has a single constraint validation set
            const valRule6 = new OneConstraintDataValidationRule();
            valRule6.inputMessageTitle = "Check Out Date";
            valRule6.inputMessageDescription = "The check out date must be greater than the check in date";
            valRule6.validationOperator = OneConstraintDataValidationOperator.GreaterThan;
            valRule6.setConstraintFormula("=B7", "B7");
            const checkOutDate = new Date();
            checkOutDate.setDate(checkOutDate.getDate() + 1);
            this.spreadsheet.workbook.worksheets(0).rows(7).cells(1).dataValidationRule = valRule6;
            this.spreadsheet.workbook.worksheets(0).rows(7).cells(1).value = checkOutDate.toLocaleDateString();
            this.spreadsheet.workbook.worksheets(0).rows(7).cells(0).value = "Check Out Date";
        }
    }
}
```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/excel/spreadsheet/data-validation
npm install
npm start

```

Then open http://localhost:3000/ in your browser

