<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Data Grid Row Pinning.
<!-- in the Data Grid component -->
<!-- [Data Grid](https://infragistics.com/Reactsite/components/data-grid.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/grids/data-grid/row-pinning?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataGridRowPinning.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/grids/data-grid/row-pinning?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataGridRowPinning.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/grids/data-grid/row-pinning?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataGridRowPinning.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/DataGridRowPinning.tsx` file:

```tsx
import * as React from 'react';
import { DataGridSharedData } from './DataGridSharedData';
// grid modules:
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { IgrImageColumn } from 'igniteui-react-grids';

IgrDataGridModule.register();

export default class DataGridRowPinning extends React.Component<any, any> {

    public data: any[];
    public grid: IgrDataGrid;

    constructor(props: any) {
        super(props);

        this.state = { componentVisible: true };
        this.onGridRef = this.onGridRef.bind(this);
        this.data = DataGridSharedData.getEmployees();
    }

    public render() {
        return (
        <div className="igContainer">

            <IgrDataGrid
                height="100%"
                width="100%"
                rowHeight="70"
                autoGenerateColumns="false"
                dataSource={this.data}
                ref={this.onGridRef}>
                <IgrTextColumn propertyPath="ID"  width="80" />
                <IgrTextColumn propertyPath="FirstName" headerText="First Name" />
                <IgrTextColumn propertyPath="LastName" headerText="Last Name" width="100"/>
                <IgrTextColumn propertyPath="City"  width="100"/>
                <IgrTextColumn propertyPath="Country"  width="100"/>

                <IgrNumericColumn propertyPath="Sales"  width="120" positivePrefix="$" showGroupingSeparator="true"/>
                <IgrNumericColumn propertyPath="Age"  width="70"/>
                <IgrDateTimeColumn propertyPath="Birthday" headerText="Date of Birth" horizontalAlignment="right"/>
                <IgrImageColumn propertyPath="Photo" contentOpacity="1" horizontalAlignment="center"/>
            </IgrDataGrid>
        </div>
        );
    }

    public onGridRef(grid: IgrDataGrid) {
        this.grid = grid;
        this.grid.pinnedItems.add(this.data[2]);
        this.grid.pinnedItems.add(this.data[4]);
    }

}

```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/grids/data-grid/row-pinning
npm install
npm start

```

Then open http://localhost:3000/ in your browser

