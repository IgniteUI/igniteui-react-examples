<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Sparkline Grid.
<!-- in the Sparkline component -->
<!-- [Sparkline](https://infragistics.com/Reactsite/components/sparkline.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/sparkline/grid?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/SparklineGrid.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/sparkline/grid?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/SparklineGrid.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/sparkline/grid?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/SparklineGrid.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/SparklineGrid.tsx` file:

```tsx
import * as React from 'react';
import "./SparklineGrid.css";
import { Products } from './Products';
// sparkline modules:
import { IgrSparkline } from 'igniteui-react-charts';
import { IgrSparklineModule } from 'igniteui-react-charts';
// grid modules:
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrImageColumn } from 'igniteui-react-grids';
import { IgrTemplateColumn, IIgrCellTemplateProps } from 'igniteui-react-grids';
import { IgrTemplateCellInfo } from 'igniteui-react-grids';

IgrDataGridModule.register();
IgrSparklineModule.register();

export default class SparklineGrid extends React.Component<any, any> {

    public data: any[];

    constructor(props: any) {
        super(props);

        this.data = Products.getData();
    }

    public render() {
        return (
            <div className="igContainer">
                <IgrDataGrid
                    height="100%"
                    width="100%"
                    rowHeight="70"
                    autoGenerateColumns="false"
                    dataSource={this.data}>

                    <IgrTextColumn propertyPath="ProductID" headerText="ID" width="60" horizontalAlignment="center"/>
                    <IgrTextColumn propertyPath="ProductName" headerText="Product"  width="*>130"    />

                    <IgrNumericColumn propertyPath="ProductPrice" headerText="Price" width="100"
                    positivePrefix="$" showGroupingSeparator="true" minFractionDigits={2}/>

                    <IgrTemplateColumn propertyPath="OrderHistory" headerText="Order History"
                    horizontalAlignment="center" width="*>120"
                    template={this.getOrderHistoryTemplate} />

                    <IgrNumericColumn propertyPath="OrderCount" headerText="Orders" width="*>90"
                    horizontalAlignment="center"/>

                    {/* <IgrNumericColumn propertyPath="OrderValue" headerText="Order Value" width="*>110"
                    positivePrefix="$" showGroupingSeparator="true" /> */}

                    <IgrTemplateColumn propertyPath="ReturnRate" headerText="Return Rate"
                    horizontalAlignment="center" width="*>120"
                    template={this.getReturnRateTemplate} />

                    <IgrImageColumn propertyPath="CountryFlag" headerText="Country" width="*>90"
                    contentOpacity="1" horizontalAlignment="center"/>

                    <IgrTextColumn propertyPath="Status" headerText="Status" width="110"
                    horizontalAlignment="center"   />
               </IgrDataGrid>
            </div>
        );
    }

    public getOrderHistoryTemplate(props: IIgrCellTemplateProps) {
        const info = props.dataContext as IgrTemplateCellInfo;
        return (
            <div className="sparklineInGrid">
               <IgrSparkline
                   height="60px" width="100%"
                   displayType="Line"
                   dataSource={info.rowItem.OrderHistory}
                   valueMemberPath="Sold"
                   labelMemberPath="Week"
                   lineThickness={2}
                   brush="rgb(21, 190, 6)"
                   negativeBrush="rgb(211, 17, 3)" />
            </div>
        );
    }

    public getReturnRateTemplate(props: IIgrCellTemplateProps) {

        const info = props.dataContext as IgrTemplateCellInfo;
        return (
            <div className="sparklineInGrid">
               <IgrSparkline
                   height="60px" width="100%"
                   displayType="Column"
                   dataSource={info.rowItem.ReturnRate}
                   valueMemberPath="Balance"
                   labelMemberPath="Week"
                   lineThickness={2}
                   brush="rgb(21, 190, 6)"
                   negativeBrush="rgb(211, 17, 3)" />
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
cd ./samples/charts/sparkline/grid
npm install
npm start

```

Then open http://localhost:3000/ in your browser

