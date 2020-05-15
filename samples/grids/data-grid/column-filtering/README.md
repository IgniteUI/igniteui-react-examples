<!-- WARNING Do not change this file because it wil be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/sample-template-files/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of the Data Grid component. Use the following buttons to open or edit this sample on CodeSandbox website:

<!-- [Data Grid](https://infragistics.com/Reactsite/components/data-grid.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/grids/data-grid/column-filtering?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataGridColumnFiltering.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.3rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/edit.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/grids/data-grid/column-filtering?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataGridColumnFiltering.tsx">
            <img height="40px" style="border-radius: 0.3rem" alt="View on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/view.png"/>
        </a>
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/grids/data-grid/column-filtering?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataGridColumnFiltering.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/DataGridColumnFiltering.tsx` file:

```tsx
import * as React from 'react';


import { DataGridSharedData } from './DataGridSharedData';

import { IgrLiveGridModule } from 'igniteui-react-grids';
import { IgrLiveGrid } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { IgrImageColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { FilterExpression } from 'igniteui-react-core';
import { FilterFactory } from 'igniteui-react-core';


IgrLiveGridModule.register();

export default class DataGridRowFiltering extends React.Component<any, any> {

    public data: any[];
    public grid: IgrLiveGrid;
    public filterColumn: string = "Street";
    public filterMode: string = "Contains";
    public filterText: string = "Market";
    public filterFactory: FilterFactory;

    constructor(props: any) {
        super(props);

        this.onGridRef = this.onGridRef.bind(this);
        this.onFilterTextChanged = this.onFilterTextChanged.bind(this);
        this.onFilterModeChanged = this.onFilterModeChanged.bind(this);

        this.state = { filterText: this.filterText, filterMode: this.filterMode, filterColumn: this.filterColumn }
        this.data = DataGridSharedData.getEmployees(4000);
    }

    public onGridRef(grid: IgrLiveGrid) {
        this.grid = grid;
        this.applyFilter();
    }

    public onFilterTextChanged = (e: any) => {
        this.filterText = e.target.value;
        this.setState({filterText: e.target.value});
        this.applyFilter();
    }

    public onFilterModeChanged = (e: any) => {
        this.filterMode = e.target.value;
        this.setState({filterMode: e.target.value});
        this.applyFilter();
    }

    public onFilterColumnChanged = (e: any) => {
        this.filterColumn = e.target.value;
        this.setState({filterColumn: e.target.value});
        this.applyFilter();
    }

    public applyFilter()
    {
        this.grid.filterExpressions.clear();
        if (this.filterText === "") {
            return;
        }

        this.filterFactory = new FilterFactory();
        const expression = this.filterText.toUpperCase();
        const column = this.filterFactory.property(this.filterColumn).toUpper();

        let filter: FilterExpression;
        if (this.filterMode === "Contains")
        {
            filter = column.contains(expression)
        }
        else if (this.filterMode === "StartsWith")
        {
            filter = column.startsWith(expression);
        }
        else // if (this.filterMode === "EndsWith")
        {
            filter = column.endsWith(expression);
        }

        this.grid.filterExpressions.add(filter);
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igOptions">
                    <span className="igOptions-item">  Column: </span>
                    <select className="igOptions-item" value={this.state.filterColumn}
                        onChange={this.onFilterColumnChanged}>
                        <option>Name</option>
                        <option>Street</option>
                        <option>City</option>
                        <option>Country</option>
                    </select>
                    <select className="igOptions-item" value={this.state.filterMode}
                        onChange={this.onFilterModeChanged}>
                        <option>Contains</option>
                        <option>StartsWith</option>
                        <option>EndsWith</option>
                    </select>
                    <label className="igOptions-item"> Expression: </label>
                    <input className="igOptions-input-text" type="text" name="title" value={this.state.filterText}
                       onChange={this.onFilterTextChanged} />
                </div>

                <IgrLiveGrid
                    ref={this.onGridRef}
                    height="calc(100% - 40px)"
                    width="100%"
                    defaultColumnMinWidth={100}
                    autoGenerateColumns={false}
                    dataSource={this.data} >

                    <IgrTextColumn propertyPath="Name" width="*>150"/>
                    <IgrTextColumn propertyPath="Street"   width="160" />
                    <IgrTextColumn propertyPath="City"  />
                    <IgrImageColumn propertyPath="CountryFlag" headerText="Country" contentOpacity="1"
                        horizontalAlignment="center" width="90"/>
                    <IgrNumericColumn propertyPath="Sales" positivePrefix="$" showGroupingSeparator="true" />
                    <IgrDateTimeColumn propertyPath="Birthday" headerText="Birthday" />

                </IgrLiveGrid>
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
cd ./samples/grids/data-grid/column-filtering
npm install
npm start

# Open http://localhost:3000/ in your browser
```

