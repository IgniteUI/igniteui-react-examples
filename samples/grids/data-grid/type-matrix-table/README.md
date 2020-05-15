<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/sample-template-files/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Data Grid Type Matrix Table.
<!-- in the Data Grid component -->
<!-- [Data Grid](https://infragistics.com/Reactsite/components/data-grid.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/grids/data-grid/type-matrix-table?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataGridTypeMatrixTable.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/grids/data-grid/type-matrix-table?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataGridTypeMatrixTable.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/grids/data-grid/type-matrix-table?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataGridTypeMatrixTable.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/DataGridTypeMatrixTable.tsx` file:

```tsx
import * as React from 'react';



// grid modules:
import { IgrLiveGridModule } from 'igniteui-react-grids';
import { IgrLiveGrid } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrTemplateColumn } from 'igniteui-react-grids';
import { IgrTemplateCellInfo } from 'igniteui-react-grids';
import { IgrTemplateHeader } from 'igniteui-react-grids';

import { IgrTemplateCellUpdatingEventArgs } from 'igniteui-react-grids';
import { IgrTemplateHeaderCellUpdatingEventArgs } from 'igniteui-react-grids';

IgrLiveGridModule.register();

export default class DataGridTypeMatrixTable extends React.Component<any, any> {

    public dataPeople: any[];
    public dataRelations: any[];

    public VerticalHeader: IgrTemplateHeader;
    public HorizontalRightHeader: IgrTemplateHeader;
    public HorizontalLeftHeader: IgrTemplateHeader;
    public cellSize: number = 50;

    public names: string[] = ["Kyle", "Oscar", "Gina", "Irene", "Kate", "Brenda", "Mark", "John", "Andrew", "Casey", "Holly", "Larry", "Pete", "Steve"];

    constructor(props: any) {
        super(props);

        this.onVerticalHeaderUpdating = this.onVerticalHeaderUpdating.bind(this);
        this.onCellUpdating = this.onCellUpdating.bind(this);

        this.createData();

        this.VerticalHeader = new IgrTemplateHeader({});
        this.VerticalHeader.cellUpdating = (s, e) => this.onVerticalHeaderUpdating(s, e);

        this.HorizontalRightHeader = new IgrTemplateHeader({});
        this.HorizontalRightHeader.cellUpdating = (s, e) => this.onHorizontalHeaderUpdating(s, e, "right");

        this.HorizontalLeftHeader = new IgrTemplateHeader({});
        this.HorizontalLeftHeader.cellUpdating = (s, e) => this.onHorizontalHeaderUpdating(s, e, "left");
    }

    public render() {
        return (
            <div className="igContainer">
                <IgrLiveGrid
                    height="100%"
                    width="100%"

                    rowHeight={this.cellSize}
                    rowSeparatorHeight="1"
                    rowSeparatorBackground="lightgray"
                    headerSeparatorBackground="lightgray"
                    headerSeparatorWidth="1"
                    headerHeight="110"

                    columnResizingMode="None"
                    autoGenerateColumns="false"
                    dataSource={this.dataRelations}>

                    <IgrTextColumn propertyPath="Name"
                    headerText="Friends"
                    header={this.HorizontalRightHeader}
                    width="*>110" horizontalAlignment="right" />

                    {this.renderDataColumns()}

                    <IgrTextColumn propertyPath="Count"
                    headerText="Total"
                    header={this.HorizontalLeftHeader}
                    width="*>110" horizontalAlignment="left"    />

               </IgrLiveGrid>
            </div>
        );
    }

    public renderDataColumns(): JSX.Element[] {
        const columns: JSX.Element[] = [];

        for (let i = 0; i < this.dataPeople.length; i++) {
            const name = this.dataPeople[i].Name;
            columns.push(this.renderColumn(name));
        }
        return columns;
    }

    public renderColumn(columnPath: string, columnName?: string) {
        if (columnName === undefined) {
            columnName = columnPath;
        }
        return <IgrTemplateColumn key={columnPath}
        propertyPath={columnPath} headerText={columnName}
        width={this.cellSize.toString()}
        paddingBottom="0" paddingLeft="0" paddingRight="0" paddingTop="0"
        header={this.VerticalHeader}
        cellUpdating={this.onCellUpdating}
        horizontalAlignment="center"
        verticalAlignment="bottom"
        borderLeftWidth="0.5" border="lightgray"
        borderRightWidth="0.5"
        borderTopWidth="0"
        borderBottomWidth="0"
        />;
    }



    public onVerticalHeaderUpdating(s: IgrTemplateHeader, e: IgrTemplateHeaderCellUpdatingEventArgs) {
        const content = e.content as HTMLDivElement;
        let label: HTMLSpanElement | null = null;
        if (content.childElementCount === 0) {
            content.style.lineHeight = "140px";
            label = document.createElement("div");
            label.style.background = "transparent";
            label.style.color = "gray";
            label.style.fontSize = "12pt";
            label.style.transform = "rotate(270deg)";
            label.style.transformOrigin = "center";
            label.style.fontSize = "small";
            content.appendChild(label);
        } else {
            label = content.children[0] as HTMLDivElement;
        }

        const info = e.cellInfo as IgrTemplateCellInfo;
        label.textContent = info.value;;
    }

    public onHorizontalHeaderUpdating(s: IgrTemplateHeader, e: IgrTemplateHeaderCellUpdatingEventArgs, align: string) {
        const content = e.content as HTMLDivElement;
        let label: HTMLSpanElement | null = null;
        if (content.childElementCount === 0) {
            content.style.lineHeight = "140px";
            label = document.createElement("div");
            label.style.background = "transparent";
            label.style.color = "gray";
            label.style.fontSize = "12pt";
            label.style.verticalAlign = "bottom";
            label.style.textAlign = align;
            label.style.fontSize = "small";
            content.appendChild(label);
        } else {
            label = content.children[0] as HTMLDivElement;
        }

        const info = e.cellInfo as IgrTemplateCellInfo;
        label.textContent = info.value;;
    }

    public onCellUpdating(s: IgrTemplateColumn, e: IgrTemplateCellUpdatingEventArgs) {
        const content = e.content as HTMLDivElement;
        const info = e.cellInfo as IgrTemplateCellInfo;
        let cell: HTMLDivElement | null = null;

        if (content.childElementCount === 0) {
            content.style.margin = "0px";
            content.style.padding = "0px";
            cell = document.createElement("div");
            cell.style.margin = "0px";
            cell.style.padding = "0px";
            cell.style.fontFamily = "Verdana";
            cell.style.fontSize = "large";
            cell.style.textAlign = "center";
            cell.style.fontSize = "large";
            content.appendChild(cell);
        } else {
            cell = content.children[0] as HTMLDivElement;
        }

        if (info.value === 1) {
            cell.style.color = "lightgray";
            cell.style.background = "lightgray";
            cell.textContent = "";
        } else if (info.value > 0) {
            cell.style.color = "#02d302";
            cell.style.background = "transparent";
            cell.textContent = "\u2714";
        } else {
            cell.style.color = "red";
            cell.style.background = "transparent";
            cell.textContent = "\u2716";
        }
    }

    public createData() {

        this.dataPeople = [];
        this.dataRelations = [];

        this.names.sort();

        for (let i = 0; i < this.names.length; i++) {
            const person: any = {};
            person.ID = i;
            person.Name = this.names[i];
            this.dataPeople.push(person);
        }

        let friendships = new Map<string, number>();

        for (let row = 0; row < this.dataPeople.length; row++) {
            const person1 = this.dataPeople[row];

            for (let col = 0; col < this.dataPeople.length; col++) {
                const person2 = this.dataPeople[col];

                const rand = Math.random() - 0.5;

                if (person1.Name !== person2.Name) {
                    if (rand > 0) {
                       const p1p2 = person1.Name + person2.Name;
                       const p2p1 = person2.Name + person1.Name;

                       if (!friendships.has(p1p2)) {
                            friendships.set(p1p2, rand);
                       }

                       if (!friendships.has(p2p1)) {
                            friendships.set(p2p1, rand);
                       }
                    }
                }
            }
        }

        for (let row = 0; row < this.dataPeople.length; row++) {
            const person1 = this.dataPeople[row];

            const relation: any = {};
            relation.ID = row;
            relation.Name = person1.Name;
            relation.Count = 0;

            for (let col = 0; col < this.dataPeople.length; col++) {
                const person2 = this.dataPeople[col];
                const key = person2.Name

                if (person1.Name === person2.Name) {
                    relation[key] = 1;
                } else  {

                    const p1p2 = person1.Name + person2.Name;

                    if (friendships.has(p1p2)) {
                        relation[key] = friendships.get(p1p2);
                        relation.Count += 1;
                    } else {
                        relation[key] = 0;
                    }
                }
            }
            this.dataRelations.push(relation);
        }


    }


    public getRandomNumber(min: number, max: number): number {
        return Math.round(min + Math.random() * (max - min));
    }

    public getRandomItem(array: any[]): any {
        const index = Math.round(this.getRandomNumber(0, array.length - 1));
        return array[index];
    }
}
```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/grids/data-grid/type-matrix-table
npm install
npm start

```

Then open http://localhost:3000/ in your browser

