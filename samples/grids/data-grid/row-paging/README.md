<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
- [Preview](#Preview)
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Data Grid Row Paging.
<!-- in the Data Grid component -->
<!-- [Data Grid](https://infragistics.com/Reactsite/components/data-grid.html) -->

## Preview

You can preview example of this React application on CodeSandbox by clicking on this sample:

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/grids/data-grid/row-paging?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataGridRowPaging.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/grids/data-grid/row-paging?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataGridRowPaging.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/grids/data-grid/row-paging?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataGridRowPaging.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

You can find source code for this example in :
[./src/DataGridRowPaging.tsx](./src/DataGridRowPaging.tsx) file.

<!-- The following section provides source code from:
`./src/DataGridRowPaging.tsx` file: -->

<!-- ```tsx
import * as React from 'react';
import { DataGridSharedData } from './DataGridSharedData';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { IgrColumnGroupDescription } from 'igniteui-react-grids';
import { ListSortDirection } from 'igniteui-react-core';
import { DataGridPager } from './DataGridPager';

IgrDataGridModule.register();

export default class DataGridRowPaging extends React.Component<any, any> {

    private data: any[];
    private grid: IgrDataGrid;
    private pager: DataGridPager;

    constructor(props: any) {
        super(props);

        this.onGridRef = this.onGridRef.bind(this);
        this.onPagerRef = this.onPagerRef.bind(this);
        this.data = DataGridSharedData.getEmployees();
    }

    public onGridRef(grid: IgrDataGrid) {
        this.grid = grid;

        const desc = new IgrColumnGroupDescription();
        desc.propertyPath = "Country";
        desc.displayName = "Country";
        desc.sortDirection = ListSortDirection.Descending;
        this.grid.groupDescriptions.add(desc);
    }
    public onPagerRef(pager: DataGridPager) {
        this.pager = pager;

        if (this.grid) {
            if (this.grid.sortDescriptions.count > 0) {
                this.onSortChanged();
            }
            if (this.grid.groupDescriptions.count > 0) {
                this.onGroupChanged();
            }
            if (this.grid.filterExpressions.size() > 0) {
                this.onFilterChanged();
            }
        }
    }

    public render() {
        return (
            <div className="igContainer">
                <IgrDataGrid
                    ref={this.onGridRef}
                    width="100%"
                    height="calc(100% - 65px)"
                    autoGenerateColumns={false}
                    sortDescriptionsChanged={this.onSortChanged}
                    groupDescriptionsChanged={this.onGroupChanged}
                    filterExpressionsChanged={this.onFilterChanged}>
                    <IgrTextColumn propertyPath="FirstName" headerText="First Name" />
                    <IgrTextColumn propertyPath="LastName" headerText="Last Name" />
                    <IgrTextColumn propertyPath="Street" headerText="Street" width="140" />
                    <IgrTextColumn propertyPath="City" headerText="City" />
                    <IgrNumericColumn propertyPath="Salary" headerText="Salary" positivePrefix="$" showGroupingSeparator="true" />
                    <IgrNumericColumn propertyPath="Sales" headerText="Sales" positivePrefix="$" showGroupingSeparator="true" />
                    <IgrDateTimeColumn propertyPath="Birthday" headerText="Date of Birth" />
                    <IgrNumericColumn propertyPath="Age" headerText="Age" />
                </IgrDataGrid>

                <DataGridPager
                    ref={this.onPagerRef}
                    dataSource={this.data}
                    pageSize={20}
                    pagedChanged={this.onPageChanged}/>
            </div>
        );
    }

    private onSortChanged = () => {
        if (this.pager) {
            this.pager.applySorts(this.grid.sortDescriptions);
        }
    }
    private onGroupChanged = () => {
        if (this.pager) {
            this.pager.applyGroups(this.grid.groupDescriptions);
        }
    }
    private onFilterChanged = () => {
        if (this.pager) {
            this.pager.applyFilters(this.grid.filterExpressions);
        }
    }
    private onPageChanged = (pageNumber: number, data: any[]) => {
        this.grid.dataSource = data;
        this.grid.flush();
        this.grid.scrollToRowByIndex(0);
    };
}

``` -->

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/grids/data-grid/row-paging
npm install
npm start

```

Then open http://localhost:3000/ in your browser

