<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Data Grid Type Heatmap Table.
<!-- in the Data Grid component -->
<!-- [Data Grid](https://infragistics.com/Reactsite/components/data-grid.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/grids/data-grid/type-heatmap-table?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataGridTypeHeatmapTable.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/grids/data-grid/type-heatmap-table?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataGridTypeHeatmapTable.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/grids/data-grid/type-heatmap-table?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataGridTypeHeatmapTable.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/DataGridTypeHeatmapTable.tsx` file:

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

export default class DataGridTypeHeatmapTable extends React.Component<any, any> {

    public data: any[];
    public VerticalHeader: IgrTemplateHeader;
    public HorizontalRightHeader: IgrTemplateHeader;
    public HorizontalLeftHeader: IgrTemplateHeader;
    public HeatScale: HeatScale;
    public cellSize: number = 50;

    public genders: string[] = ["male", "female"];
    public maleNames: string[] = ["Kyle", "Oscar", "Ralph", "Mike", "Bill", "Frank", "Howard", "Jack", "Larry", "Pete", "Steve", "Vince", "Mark", "Alex", "Max", "Brian", "Chris", "Andrew", "Martin", "Mike", "Steve", "Glenn", "Bruce"];
    public femaleNames: string[] = ["Gina", "Irene", "Katie", "Brenda", "Casey", "Fiona", "Holly", "Kate", "Liz", "Pamela", "Nelly", "Marisa", "Monica", "Anna", "Jessica", "Sofia", "Isabella", "Margo", "Jane", "Audrey", "Sally", "Melanie", "Greta", "Aurora", "Sally"];
    public lastNames: string[] = ["Adams", "Crowley", "Ellis", "Martinez", "Irvine", "Maxwell", "Clark", "Owens", "Rooney", "Lincoln", "Thomas", "Spacey", "Betts", "King", "Newton", "Fitzgerald", "Holmes", "Jefferson", "Landry", "Newberry", "Perez", "Spencer", "Starr", "Carter", "Edwards", "Stark", "Johnson", "Fitz", "Chief", "Blanc", "Perry", "Stone", "Williams", "Lane", "Jobs", "Adama", "Power", "Tesla"];
    public monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    constructor(props: any) {
        super(props);

        this.onVerticalHeaderUpdating = this.onVerticalHeaderUpdating.bind(this);
        this.onHeatCellUpdating = this.onHeatCellUpdating.bind(this);

        this.createData();

        this.HeatScale = new HeatScale(0, 1);
        this.HeatScale.isInverted = true;
        this.HeatScale.colors = ['#009f00', '#3eb342', '#62c768', '#86db83', '#b2ef8e', '#fcd741', '#ffae4b', '#ff824d', '#f95048', '#e9002c'];

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
                    rowSeparatorBackground="white"
                    headerHeight="110"

                    columnResizingMode="None"
                    autoGenerateColumns="false"
                    dataSource={this.data}>

                    <IgrTextColumn propertyPath="Name"
                    headerText="Productivity"
                    header={this.HorizontalRightHeader}
                    width="*>110" horizontalAlignment="right" />

                    {this.renderHeatColumns()}

                    <IgrTextColumn propertyPath="Average"
                    header={this.HorizontalLeftHeader}
                    width="*>110" horizontalAlignment="left"    />

               </IgrLiveGrid>
            </div>
        );
    }

    public renderHeatColumns(): JSX.Element[] {
        const columns: JSX.Element[] = [];

        for (let i = 0; i < this.monthNames.length; i++) {
            const name = this.monthNames[i];
            columns.push(this.renderColumn(name));
        }
        return columns;
    }

    public renderColumn(columnPath: string, columnName?: string) {
        if (columnName === undefined) {
            columnName = columnPath;
        }
        return <IgrTemplateColumn
        key={columnPath}
        propertyPath={columnPath}
        headerText={columnName}
        header={this.VerticalHeader}
        width={this.cellSize.toString()}
        paddingBottom="0" paddingLeft="0"
        paddingRight="0" paddingTop="0"
        cellUpdating={this.onHeatCellUpdating}
        horizontalAlignment="center"
        verticalAlignment="bottom"
        border="white"
        borderLeftWidth="0.5"
        borderRightWidth="0.5"
        borderTopWidth="0"
        borderBottomWidth="0" />;
    }

    public onVerticalHeaderUpdating(s: IgrTemplateHeader, e: IgrTemplateHeaderCellUpdatingEventArgs) {
        const content = e.content as HTMLDivElement;
        let label: HTMLSpanElement | null = null;
        if (content.childElementCount === 0) {
            content.style.lineHeight = "140px";
            label = document.createElement("div");
            label.style.background = "transparent";
            label.style.color = "gray";
            label.style.fontSize = "small";
            label.style.transform = "rotate(270deg)";
            label.style.transformOrigin = "center";
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
            label.style.fontSize = "small";
            label.style.verticalAlign = "bottom";
            label.style.textAlign = align;
            content.appendChild(label);
        } else {
            label = content.children[0] as HTMLDivElement;
        }

        const info = e.cellInfo as IgrTemplateCellInfo;
        label.textContent = info.value;;
    }

    public onHeatCellUpdating(s: IgrTemplateColumn, e: IgrTemplateCellUpdatingEventArgs) {
        const content = e.content as HTMLDivElement;
        const info = e.cellInfo as IgrTemplateCellInfo;
        let heatCell: HTMLDivElement | null = null;

        if (content.childElementCount !== 0) {
            heatCell = content.children[0] as HTMLDivElement;
        } else {
            heatCell = document.createElement("div");
            heatCell.style.margin = "0px";
            heatCell.style.padding = "0px";
            heatCell.style.fontFamily = "Verdana";
            heatCell.style.fontSize = "small";
            heatCell.style.textAlign = "center";
            heatCell.style.color = "black"

            content.style.margin = "0px";
            content.style.padding = "0px";
            content.appendChild(heatCell);
        }

        const productivity = (info.value * 100).toFixed(0) + "%";
        heatCell.style.background = this.HeatScale.getColor(info.value);
        heatCell.textContent = productivity;
    }

    public createData() {

        this.data = [];
        for (let row = 0; row < 30; row++) {

            const person: any = {};
            person.ID = row;
            person.Gender = this.getRandomGender();
            person.FirstName = this.getRandomNameFirst(person.Gender);
            person.LastName = this.getRandomNameLast();
            person.Name = person.FirstName + " " + person.LastName;

            person.Average = 0;
            // generating productivity per month
            for (let c = 0; c < this.monthNames.length; c++) {
                const month = this.monthNames[c];
                const rand = Math.random();
                person[month] = rand;
                person.Average += rand;
            }

            person.Average = person.Average / this.monthNames.length * 100;
            person.Average = person.Average.toFixed(0) + "%";

            this.data.push(person);
        }

        this.data.sort(this.compareData);
    }

    public compareData(a: any, b: any): number {
        if (a.Name < b.Name) {
            return 1;
        }
        if (a.Name > b.Name) {
            return -1;
        }
        return 0;
    }

    public getRandomGender(): string {
        return this.getRandomItem(this.genders);
    }
    public getRandomNameLast(): string {
        return this.getRandomItem(this.lastNames);
    }

    public getRandomNameFirst(gender: string): string {
        if (gender === "male") {
            return this.getRandomItem(this.maleNames);
        }
        else {
            return this.getRandomItem(this.femaleNames);
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

class HeatScale {

    public minimum: number = 0;
    public maximum: number = 1;
    public colors: string[] = ["white", "yellow", "orange", "red"];
    public isInverted: boolean = false;

    constructor(min: number, max: number) {
        this.minimum = min;
        this.maximum = max;
    }

    public getRange(): number {
        return this.maximum - this.minimum;
    }

    public getUnscaled(v: number): number {
        return this.Clamp(this.minimum + v * this.getRange(), this.minimum, this.maximum);
    }

    public getScaled(v: number): number
    {
        return this.Clamp((v - this.minimum) / this.getRange(), this.minimum, this.maximum);
    }

    public Clamp(value: number, min: number, max: number): number {
        return Math.min(max, Math.max(min, value));
    }

    public getColor(v: number): string
    {
        let scale =  this.getScaled(v);
        let index = Math.round(scale * (this.colors.length - 1));
        if (this.isInverted) {
            index = this.colors.length - index - 1;
        }
        // console.log("" +  index + " " + scale + " " + v)
        if (index < 0 || index > this.colors.length) {
            return "white";
        } else {
            return this.colors[index]
        } ;
    }
}
```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/grids/data-grid/type-heatmap-table
npm install
npm start

```

Then open http://localhost:3000/ in your browser

