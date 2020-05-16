<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Data Grid Row Grouping.
<!-- in the Data Grid component -->
<!-- [Data Grid](https://infragistics.com/Reactsite/components/data-grid.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/grids/data-grid/row-grouping?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataGridRowGrouping.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/grids/data-grid/row-grouping?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataGridRowGrouping.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/grids/data-grid/row-grouping?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataGridRowGrouping.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/DataGridRowGrouping.tsx` file:

```tsx
import * as React from 'react';


import { DataGridSharedData } from './DataGridSharedData';

import { IgrLiveGridModule } from 'igniteui-react-grids';
import { IgrLiveGrid } from 'igniteui-react-grids';
import { IgrImageColumn } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { IgrColumnGroupDescription } from 'igniteui-react-grids';

IgrLiveGridModule.register();

export default class DataGridRowGrouping extends React.Component<any, any> {

    public data: any[];
    public grid: IgrLiveGrid;

    constructor(props: any) {
        super(props);
        this.onGridRef = this.onGridRef.bind(this);
        this.onLoad = this.onLoad.bind(this);

        this.state = { componentVisible: true, isGroupCollapsible: true }
        this.data = DataGridSharedData.getEmployees(50);
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igOptions">
                    <span className="igOptions-item" style={{ width: "175px" }}>Section Header Display Mode:</span>
                    <select className="igOptions-item" style={{ width: "100px" }} defaultValue="Deferred" onChange={this.onSectionHeaderDisplayModeChanging}>
                        <option>Combined</option>
                        <option>Split</option>
                    </select>
                    <label className="igOptions-label" > Group Header Collapsible: </label>

                    <input type="checkbox" checked={this.state.isGroupCollapsible} onChange={this.onGroupHeaderCollapsible}/>

                </div>

                <IgrLiveGrid
                    ref={this.onGridRef}
                    height="calc(100% - 39px)"
                    width="100%"
                    autoGenerateColumns="false"
                    isGroupCollapsable={this.state.isGroupCollapsible}
                    groupHeaderDisplayMode = "combined"
                    dataSource={this.data}>
                        <IgrTextColumn propertyPath="Name" headerText="Name" />
                        <IgrNumericColumn propertyPath="Age" headerText="Age" width="*>80"/>
                        <IgrDateTimeColumn propertyPath="Birthday" headerText="Date of Birth"
                        horizontalAlignment="right"  width="140"/>
                        <IgrTextColumn propertyPath="Street" headerText="Address" width="*>140"/>
                        <IgrNumericColumn propertyPath="Salary" headerText="Salary" width="90"
                        positivePrefix="$" showGroupingSeparator="true"  />
                        <IgrTextColumn propertyPath="City" headerText="City" width="120" horizontalAlignment="center"/>
                        <IgrImageColumn propertyPath="CountryFlag" headerText="Country" width="90" contentOpacity="1" horizontalAlignment="center"/>
                </IgrLiveGrid>
            </div>
        );
    }

    public onGroupHeaderCollapsible = (e: any) =>{
        const isCollapsible = e.target.checked;

        if (isCollapsible) {
            this.setState( {isGroupCollapsible: true} );
        }
        else {
            this.setState( {isGroupCollapsible: false} );
        }
    }

    public onSectionHeaderDisplayModeChanging = (e: any) => {
        this.grid.groupHeaderDisplayMode = e.target.value;
    }

    public onGridRef(grid: IgrLiveGrid) {
        this.grid = grid;
        this.grid.actualDataSource.isSectionExpandedDefault = true;
    }


    public componentDidMount() {
        window.addEventListener('load', this.onLoad);
    }

    public onLoad() {
        const state = new IgrColumnGroupDescription();
        state.propertyPath = "Country";
        state.displayName = "Location";
        const city = new IgrColumnGroupDescription();
        city.propertyPath = "City";
        city.displayName = "";
        const income = new IgrColumnGroupDescription();
        income.propertyPath = "Income";
        income.displayName = "Income";
        this.grid.groupDescriptions.add(state);
        this.grid.groupDescriptions.add(city);
        this.grid.groupDescriptions.add(income);
    }
}
```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/grids/data-grid/row-grouping
npm install
npm start

```

Then open http://localhost:3000/ in your browser

