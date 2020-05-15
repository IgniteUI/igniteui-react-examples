<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/sample-template-files/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Data Grid Column Pinning.
<!-- in the Data Grid component -->
<!-- [Data Grid](https://infragistics.com/Reactsite/components/data-grid.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/grids/data-grid/column-pinning?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataGridColumnPinning.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/grids/data-grid/column-pinning?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataGridColumnPinning.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/grids/data-grid/column-pinning?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataGridColumnPinning.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/DataGridColumnPinning.tsx` file:

```tsx
import * as React from 'react';

import { IgrLiveGridModule } from 'igniteui-react-grids';
import { IgrLiveGrid } from 'igniteui-react-grids';
import { IgrImageColumn } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { SharedData } from './DataGridSharedData';
import { PinnedPositions } from 'igniteui-react-grids';
import { Button } from '@material-ui/core';

IgrLiveGridModule.register();

export default class DataGridColumnPinning extends React.Component<any, any> {

    public data: any[];
    public grid: IgrLiveGrid;

    constructor(props: any) {
        super(props);
        this.onGridRef = this.onGridRef.bind(this);
        this.onPinLeft = this.onPinLeft.bind(this);
        this.onPinRight = this.onPinRight.bind(this);
        this.onUnPin = this.onUnPin.bind(this);
        this.state = {
            componentVisible: true,
            isPinningToLeftDisabled: true,
            isPinningToRightDisabled: true
        }
        this.data = DataGridSharedData.getEmployees();
    }

    public onGridRef(grid: IgrLiveGrid) {
        this.grid = grid;
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igOptions">
                    <button className="igOptions-item" disabled={this.state.isPinningToLeftDisabled} onClick={this.onPinLeft} style={{ width: "100px" }}>Pin Left</button>
                    <button className="igOptions-item" disabled={this.state.isPinningToRightDisabled} onClick={this.onPinRight} style={{ width: "100px" }}>Pin Right</button>
                    <button className="igOptions-item" onClick={this.onUnPin} style={{ width: "105px" }}>Unpin Columns</button>
                </div>
                <IgrLiveGrid
                ref={this.onGridRef}
                height="calc(100% - 40px)"
                width="100%"
                autoGenerateColumns="false"
                defaultColumnMinWidth={120}
                scrollbarStyle = "thin"
                dataSource={this.data}>
                    {/*Columns pinned left*/}
                    <IgrTextColumn pinned="left" propertyPath="ID" headerText="Employee ID" width="100"  horizontalAlignment="center"/>
                    <IgrTextColumn pinned="left" propertyPath="FirstName" headerText="First Name" width="170"/>
                    <IgrTextColumn pinned="left" propertyPath="LastName" headerText="Last Name" width="170"/>

                    <IgrDateTimeColumn propertyPath="Birthday" headerText="Date of Birth" width="150" horizontalAlignment="center"/>
                    <IgrNumericColumn propertyPath="Age" width="100" horizontalAlignment="center"/>
                    <IgrImageColumn propertyPath="CountryFlag" headerText="Country"
                    width="140" contentOpacity="1" horizontalAlignment="center"/>

                    {/*Columns pinned right*/}
                    <IgrTextColumn propertyPath="Street" headerText="Address" width="240"/>
                    <IgrTextColumn propertyPath="City"  width="150" />
                    <IgrTextColumn propertyPath="Country"  width="150" />

                    <IgrNumericColumn propertyPath="Salary" headerText="Salary" positivePrefix="$" showGroupingSeparator="true"/>
                    <IgrNumericColumn propertyPath="Sales" headerText="Sales" positivePrefix="$" showGroupingSeparator="true"/>
                </IgrLiveGrid>
            </div>
        );
    }

    public onPinLeft = (e: any) => {
        this.setState({ isPinningToLeftDisabled: true, isPinningToRightDisabled: true });

        let idColumn = this.grid.actualColumns.item(0);
        let firstNameColumn = this.grid.actualColumns.item(1);
        let lastNameColumn = this.grid.actualColumns.item(2);
        this.grid.pinColumn(idColumn, PinnedPositions.Left);
        this.grid.pinColumn(firstNameColumn, PinnedPositions.Left);
        this.grid.pinColumn(lastNameColumn, PinnedPositions.Left);
    }

    public onPinRight = (e: any) => {
        this.setState({ isPinningToLeftDisabled: true, isPinningToRightDisabled: true});

        let streetColumn = this.grid.actualColumns.item(6);
        let cityColumn = this.grid.actualColumns.item(7);
        let countryColumn = this.grid.actualColumns.item(8);
        this.grid.pinColumn(streetColumn, PinnedPositions.Right);
        this.grid.pinColumn(cityColumn, PinnedPositions.Right);
        this.grid.pinColumn(countryColumn, PinnedPositions.Right);
    }

    public onUnPin = (e: any) => {
        this.setState({ isPinningToLeftDisabled: false, isPinningToRightDisabled: false });

        let idColumn = this.grid.actualColumns.item(0);
        let firstNameColumn = this.grid.actualColumns.item(1);
        let lastNameColumn = this.grid.actualColumns.item(2);
        this.grid.pinColumn(idColumn, PinnedPositions.None);
        this.grid.pinColumn(firstNameColumn, PinnedPositions.None);
        this.grid.pinColumn(lastNameColumn, PinnedPositions.None);

        let streetColumn = this.grid.actualColumns.item(6);
        let cityColumn = this.grid.actualColumns.item(7);
        let countryColumn = this.grid.actualColumns.item(8);
        this.grid.pinColumn(streetColumn, PinnedPositions.None);
        this.grid.pinColumn(cityColumn, PinnedPositions.None);
        this.grid.pinColumn(countryColumn, PinnedPositions.None);
    }
}
```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/grids/data-grid/column-pinning
npm install
npm start

```

Then open http://localhost:3000/ in your browser

