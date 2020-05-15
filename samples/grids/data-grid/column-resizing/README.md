<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/sample-template-files/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Data Grid Column Resizing.
<!-- in the Data Grid component -->
<!-- [Data Grid](https://infragistics.com/Reactsite/components/data-grid.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/grids/data-grid/column-resizing?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataGridColumnResizing.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/grids/data-grid/column-resizing?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataGridColumnResizing.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/grids/data-grid/column-resizing?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataGridColumnResizing.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/DataGridColumnResizing.tsx` file:

```tsx
import React from 'react';


import { DataGridSharedData } from './DataGridSharedData';

import { IgrLiveGrid } from 'igniteui-react-grids';
import { IgrLiveGridModule } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';

IgrLiveGridModule.register();

export default class GridColumnResizing extends React.Component<any, any> {
    public data: any[];
    public grid: IgrLiveGrid;

    constructor(props: any) {
        super(props);

        this.onGridRef = this.onGridRef.bind(this);
        this.onColumnResizingModeChange = this.onColumnResizingModeChange.bind(this);
        this.onColumnResizingAnimationModeChange = this.onColumnResizingAnimationModeChange.bind(this);
        this.onSeparatorWidthChanged = this.onSeparatorWidthChanged.bind(this);

        this.state = {
            columnSeparatorWidth: 1,
            columnResizingMode: "Deferred",
            columnResizingAnimation: "Interpolate"
        };
        this.data = DataGridSharedData.getEmployees();
    }

    public onGridRef(grid: IgrLiveGrid) {
        this.grid = grid;
        this.grid.columnResizingSeparatorBackground = "Black";
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igOptions">
                    <span className="igOptions-item" style={{ width: "120px" }}>Resizing Mode:</span>
                    <select className="igOptions-item" style={{ width: "135px" }} defaultValue="Deferred" onChange={this.onColumnResizingModeChange}>
                        <option>Deferred</option>
                        <option>Immediate</option>
                        <option>None</option>
                    </select>

                    {/* commented out the slider for now.
                    <span className="igOptions-item">Separator Width: </span>
                    <input className="igOptions-slider" type="range" min={1} max={5} step="1" style={{ width: "90px"}} value={this.state.columnSeparatorWidth} onChange={this.onSeparatorWidthChanged} />
                </div>
                <div className="igOptions"> */}
                    <span className="igOptions-item" style={{ width: "120px" }}>Resizing Animation:</span>
                    <select className="igOptions-item" style={{ width: "135px" }} defaultValue="Auto" onChange={this.onColumnResizingAnimationModeChange}>
                        <option>Auto</option>
                        <option>Interpolate</option>
                        <option>None</option>
                    </select>
                </div>

                <IgrLiveGrid
                    ref={this.onGridRef}
                    height="calc(100% - 40px)"
                    width="100%"
                    columnResizingAnimationMode="Interpolate"
                    columnResizingMode="Deferred"
                    columnResizingSeparatorWidth={1}
                    autoGenerateColumns={false}
                    defaultColumnMinWidth={100}
                    dataSource={this.data} >

                    <IgrTextColumn propertyPath="Name" width="*>150"/>
                    <IgrTextColumn propertyPath="Street" headerText="Address" />
                    <IgrTextColumn propertyPath="City" />
                    <IgrNumericColumn propertyPath="Salary" positivePrefix="$" showGroupingSeparator="true" />
                    <IgrDateTimeColumn propertyPath="Birthday"  />

                </IgrLiveGrid>
            </div>
        );
    }

    public onColumnResizingModeChange = (e: any) => {
        this.grid.columnResizingMode = e.target.value;
    }

    public onColumnResizingAnimationModeChange = (e: any) => {
        this.grid.columnResizingAnimationMode = e.target.value;
    }

    public onSeparatorWidthChanged(e: any) {
        this.grid.columnResizingSeparatorWidth = e.target.value;
        // this.setState({ columnSeparatorWidth: e.target.value });
    }
}
```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/grids/data-grid/column-resizing
npm install
npm start

```

Then open http://localhost:3000/ in your browser

