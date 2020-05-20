<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Data Grid Cell Selection.
<!-- in the Data Grid component -->
<!-- [Data Grid](https://infragistics.com/Reactsite/components/data-grid.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/grids/data-grid/cell-selection?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataGridCellSelection.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/grids/data-grid/cell-selection?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataGridCellSelection.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/grids/data-grid/cell-selection?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataGridCellSelection.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/DataGridCellSelection.tsx` file:

```tsx
import * as React from 'react';


import { DataGridSharedData } from './DataGridSharedData';

import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { IgrImageColumn } from 'igniteui-react-grids';

IgrDataGridModule.register();

export default class DataGridCellSelection extends React.Component<any, any> {

    public data: any[];
    public grid: IgrDataGrid;

    constructor(props: any) {
        super(props);

        this.onGridRef = this.onGridRef.bind(this);
        // this.onClick = this.onClick.bind(this);
        this.onSelectionModeChange = this.onSelectionModeChange.bind(this);

        this.state = { selectionMode: "MultipleRow" }
        this.data = DataGridSharedData.getEmployees();
    }

    public onGridRef(grid: IgrDataGrid) {
        this.grid = grid;
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igOptions">
                    <span className="igOptions-item">Selection Mode: </span>
                    <select className="igOptions-item" value={this.state.selectionMode}
                        onChange={this.onSelectionModeChange}>
                        <option>None</option>
                        <option>SingleCell</option>
                        <option>SingleRow</option>
                        <option>MultipleCell</option>
                        <option>MultipleRow</option>
                        <option>RangeCell</option>
                    </select>
                    {/* <button onClick={this.onClick}>Click Me</button> */}
                </div>

                <IgrDataGrid
                    ref={this.onGridRef}
                    height="calc(100% - 40px)"
                    width="100%"
                    defaultColumnMinWidth={120}
                    autoGenerateColumns={false}
                    dataSource={this.data}
                    selectionMode={this.state.selectionMode}>

                    <IgrTextColumn propertyPath="Name" width="*>130"/>
                    <IgrTextColumn propertyPath="Street" headerText="Street" width="140" />
                    <IgrTextColumn propertyPath="City" headerText="City" />
                    <IgrNumericColumn propertyPath="Salary" headerText="Salary" positivePrefix="$" showGroupingSeparator="true" />

                    <IgrImageColumn propertyPath="Photo" headerText="Photo" contentOpacity="1"
                    horizontalAlignment="center"  width="90"/>
                    <IgrDateTimeColumn propertyPath="Birthday" headerText="Date of Birth" />

                </IgrDataGrid>
            </div>
        );
    }

    public onSelectionModeChange = (e: any) => {
        this.setState({ selectionMode: e.target.value });
        this.grid.selectionMode = e.target.value;
    }

    // public onClick = (e: any) => {
    //     this.grid.selectedItems.add(this.data.values[0]);
    // }
}
```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/grids/data-grid/cell-selection
npm install
npm start

```

Then open http://localhost:3000/ in your browser

