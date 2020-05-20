<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Data Grid Binding Data Service.
<!-- in the Data Grid component -->
<!-- [Data Grid](https://infragistics.com/Reactsite/components/data-grid.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/grids/data-grid/binding-data-service?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataGridBindingDataService.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/grids/data-grid/binding-data-service?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataGridBindingDataService.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/grids/data-grid/binding-data-service?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataGridBindingDataService.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/DataGridBindingDataService.tsx` file:

```tsx
import * as React from 'react';

import { LiveFinancialData } from './LiveFinancialData';

import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';

IgrDataGridModule.register();

export default class DataGridBindingDataService extends React.Component<any, any> {

    public data: any[];

    constructor(props: any) {
        super(props);

        this.state = { componentVisible: true };
        this.data = LiveFinancialData.generateData(200);
    }

    public render() {
        return (
            <div className="igContainer">
                <IgrDataGrid
                height="100%"
                width="100%"
                rowHeight="60"
                autoGenerateColumns="false"
                defaultColumnMinWidth="110"
                dataSource={this.data}>

                    <IgrTextColumn width="120" propertyPath="Category" />
                    <IgrTextColumn width="140" propertyPath="Type" />
                    <IgrTextColumn width="120" propertyPath="Contract" />
                    <IgrTextColumn width="90"  propertyPath="Settlement" />
                    <IgrTextColumn width="130" propertyPath="Region" />
                    <IgrTextColumn width="140" propertyPath="Country" />

                    <IgrNumericColumn width="120" propertyPath="Open Price" headerText="Open" showGroupingSeparator="true" positivePrefix="$" minFractionDigits={2} maxFractionDigits={2} />
                    <IgrNumericColumn width="120" propertyPath="Price" headerText="Close" showGroupingSeparator="true" positivePrefix="$" minFractionDigits={2} maxFractionDigits={2}/>
                    <IgrNumericColumn width="110" propertyPath="Change"  minFractionDigits={2} maxFractionDigits={2}/>
                    <IgrNumericColumn width="120" propertyPath="Change(%)" negativeSuffix="%" positiveSuffix="%" minFractionDigits={2} maxFractionDigits={2}/>
                    <IgrNumericColumn width="90"  propertyPath="Buy" showGroupingSeparator="true" positivePrefix="$"  minFractionDigits={2} maxFractionDigits={2}/>
                    <IgrNumericColumn width="90"  propertyPath="Sell" showGroupingSeparator="true" positivePrefix="$" minFractionDigits={2} maxFractionDigits={2}/>
                    <IgrNumericColumn width="110" propertyPath="Spread" showGroupingSeparator="true"  minFractionDigits={2} maxFractionDigits={2}/>
                    <IgrNumericColumn width="110" propertyPath="Volume" showGroupingSeparator="true"  minFractionDigits={0} maxFractionDigits={0}/>
                    <IgrNumericColumn width="110" propertyPath="High(D)" showGroupingSeparator="true" minFractionDigits={2} maxFractionDigits={2} positivePrefix="$"/>
                    <IgrNumericColumn width="110" propertyPath="Low(D)" showGroupingSeparator="true" minFractionDigits={2} maxFractionDigits={2} positivePrefix="$"/>
                    <IgrNumericColumn width="110" propertyPath="High(Y)" showGroupingSeparator="true" minFractionDigits={2} maxFractionDigits={2} positivePrefix="$"/>
                    <IgrNumericColumn width="110" propertyPath="Low(Y)" showGroupingSeparator="true" minFractionDigits={2} maxFractionDigits={2} positivePrefix="$"/>
                    <IgrNumericColumn width="110" propertyPath="Start(Y)" showGroupingSeparator="true" minFractionDigits={2} maxFractionDigits={2} positivePrefix="$"/>

                    <IgrDateTimeColumn width="120" propertyPath="Maturity" horizontalAlignment="right" />
                    <IgrTextColumn width="100" propertyPath="Currency" />
                    <IgrTextColumn width="90" propertyPath="Risk" />
                    <IgrTextColumn width="110" propertyPath="Sector" />
                    <IgrTextColumn width="110" propertyPath="Security" />
                    <IgrTextColumn width="150" propertyPath="Issuer" />

                </IgrDataGrid>
            </div>
        );
    }
}
```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/grids/data-grid/binding-data-service
npm install
npm start

```

Then open http://localhost:3000/ in your browser

