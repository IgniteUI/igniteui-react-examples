<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
- [Preview](#Preview)
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Data Grid Column Sorting.
<!-- in the Data Grid component -->
<!-- [Data Grid](https://infragistics.com/Reactsite/components/data-grid.html) -->

## Preview

You can preview example of this React application on CodeSandbox by clicking on this sample:

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/grids/data-grid/column-sorting?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataGridColumnSorting.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/grids/data-grid/column-sorting?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataGridColumnSorting.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/grids/data-grid/column-sorting?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataGridColumnSorting.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

You can find source code for this example in :
[./src/DataGridColumnSorting.tsx](./src/DataGridColumnSorting.tsx) file.

<!-- The following section provides source code from:
`./src/DataGridColumnSorting.tsx` file: -->

<!-- ```tsx
import * as React from 'react';
import { DataGridSharedData } from './DataGridSharedData';
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrImageColumn } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { HeaderClickAction } from 'igniteui-react-grids';
import { IgrColumnSortDescription } from 'igniteui-react-grids';
import { ListSortDirection } from 'igniteui-react-core';

IgrDataGridModule.register();

export default class DataGridColumnSorting extends React.Component<any, any> {

    public data: any[];
    public grid: IgrDataGrid;

    constructor(props: any) {
        super(props);

        this.state = { sortType: "SortByMultipleColumnsTriState" }
        this.onGridRef = this.onGridRef.bind(this);
        this.data = DataGridSharedData.getHouses();
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igOptions">
                    <span className="igOptions-item">Header Click Action: </span>
                    <select className="igOptions-item" value={this.state.sortType}
                        onChange={this.onChartTypeChanged}>
                        <option>SortByMultipleColumns</option>
                        <option>SortByMultipleColumnsTriState</option>
                        <option>SortByOneColumnOnly</option>
                        <option>SortByOneColumnOnlyTriState</option>
                    </select>
                </div>
                <IgrDataGrid
                height="calc(100% - 40px)"
                width="100%"
                headerClickAction={HeaderClickAction.SortByMultipleColumnsTriState}
                autoGenerateColumns="false"
                dataSource={this.data}
                defaultColumnMinWidth={100}
                ref={this.onGridRef}>
                    <IgrTextColumn propertyPath="ID" width="*>80" horizontalAlignment="center"/>
                    <IgrTextColumn propertyPath="Property" headerText="Property Type" width="*>130"/>
                    <IgrImageColumn propertyPath="CountryFlag" headerText="Country" width="*>100" contentOpacity="1" horizontalAlignment="center"/>
                    <IgrTextColumn propertyPath="City" width="*>130"/>
                    <IgrNumericColumn propertyPath="Price" width="*>110" positivePrefix="$" showGroupingSeparator="true"/>
                    <IgrNumericColumn propertyPath="Rooms" width="80" />
               </IgrDataGrid>
            </div>
        );
    }

    public onGridRef(grid: IgrDataGrid) {
        this.grid = grid;
        let csd = new IgrColumnSortDescription();
        csd.propertyPath = "Property";
        csd.sortDirection = ListSortDirection.Descending;
        this.grid.sortDescriptions.add(csd);
    }

    public onChartTypeChanged = (e: any) =>{
        this.setState({sortType: e.target.value});
        this.grid.headerClickAction = e.target.value;
    }
}

``` -->

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/grids/data-grid/column-sorting
npm install
npm start

```

Then open http://localhost:3000/ in your browser

