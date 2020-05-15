<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/sample-template-files/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Data Grid Binding Remote Data.
<!-- in the Data Grid component -->
<!-- [Data Grid](https://infragistics.com/Reactsite/components/data-grid.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/grids/data-grid/binding-remote-data?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataGridBindingRemoteData.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/grids/data-grid/binding-remote-data?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataGridBindingRemoteData.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/grids/data-grid/binding-remote-data?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataGridBindingRemoteData.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/DataGridBindingRemoteData.tsx` file:

```tsx
import * as React from 'react';

import './odatajs-4.0.0';


import { IgrLiveGridModule } from 'igniteui-react-grids';
import { IgrLiveGrid } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { ODataVirtualDataSource } from 'igniteui-react-datasources';

IgrLiveGridModule.register();

export default class DataGridBindingRemoteData extends React.Component<any, any> {

    public data: any[];
    private virtualData: ODataVirtualDataSource;

    constructor(props: any) {
        super(props);

        this.state = { componentVisible: true }
        this.initData();
    }

    public render() {
        return (
            <div className="igContainer">
                <IgrLiveGrid
                   width="100%"
                   height="100%"
                   autoGenerateColumns="false"
                   dataSource={this.virtualData}>
                   <IgrTextColumn propertyPath="OrderID" headerText="Order ID" width="90" horizontalAlignment="center"/>
                   <IgrDateTimeColumn propertyPath="OrderDate" headerText="Order Date" width="110"/>
                   <IgrTextColumn propertyPath="ShipName" headerText="Name"  width="*>130"/>
                   <IgrNumericColumn propertyPath="Freight" headerText="Freight" width="80"
                   positivePrefix="$" minFractionDigits={2}/>
                   <IgrDateTimeColumn propertyPath="ShippedDate" headerText="Ship Date" width="110"
                   horizontalAlignment="right"/>
                   <IgrTextColumn propertyPath="ShipAddress" headerText="Address" />
                   <IgrTextColumn propertyPath="ShipCity" headerText="City" width="130"/>
                   <IgrTextColumn propertyPath="ShipCountry" headerText="Country" width="110"/>
                </IgrLiveGrid>
            </div>
        );
    }

    public initData() {
        const vds = new ODataVirtualDataSource();
        vds.baseUri = ("https://services.odata.org/V4/Northwind/Northwind.svc");
        vds.entitySet = ("Orders");
        this.virtualData = vds;
    }
}
```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/grids/data-grid/binding-remote-data
npm install
npm start

```

Then open http://localhost:3000/ in your browser

