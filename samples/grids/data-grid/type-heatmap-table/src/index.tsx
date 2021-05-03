import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';


// grid modules:
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrTemplateColumn } from 'igniteui-react-grids';
import { IgrTemplateCellInfo } from 'igniteui-react-grids';
import { IgrTemplateHeader } from 'igniteui-react-grids';
import { IgrTemplateCellUpdatingEventArgs } from 'igniteui-react-grids';
import { IgrTemplateHeaderCellUpdatingEventArgs } from 'igniteui-react-grids';

IgrDataGridModule.register();

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

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrDataGrid
                    height="100%"
                    width="100%"
                    rowHeight={this.cellSize}
                    rowSeparatorHeight="1"
                    rowSeparatorBackground="white"
                    headerHeight="110"

                    columnResizingMode="None"
                    autoGenerateColumns="false"
                    dataSource={this.data}>

                    <IgrTextColumn field="Name"
                    headerText="Productivity"
                    header={this.HorizontalRightHeader}
                    width="*>110" horizontalAlignment="right" />

                    {this.renderHeatColumns()}

                    <IgrTextColumn field="Average"
                    header={this.HorizontalLeftHeader}
                    width="*>110" horizontalAlignment="left"    />

               </IgrDataGrid>
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
        field={columnPath}
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
            label.style.color = "rgb(24, 29, 31)";
            label.style.fontSize = "13px";
            label.style.fontFamily = "Verdana";
            label.style.transform = "rotate(270deg)";
            label.style.transformOrigin = "center";
            content.appendChild(label);
        } else {
            label = content.children[0] as HTMLDivElement;
        }

        const info = e.cellInfo as IgrTemplateCellInfo;
        label.textContent = info.value;
    }

    public onHorizontalHeaderUpdating(s: IgrTemplateHeader, e: IgrTemplateHeaderCellUpdatingEventArgs, align: string) {
        const content = e.content as HTMLDivElement;
        let label: HTMLSpanElement | null = null;
        if (content.childElementCount === 0) {
            content.style.lineHeight = "140px";
            label = document.createElement("div");
            label.style.background = "transparent";
            label.style.color = "rgb(24, 29, 31)";
            label.style.fontSize = "13px";
            label.style.fontFamily = "Verdana";
            label.style.verticalAlign = "bottom";
            label.style.textAlign = align;
            content.appendChild(label);
        } else {
            label = content.children[0] as HTMLDivElement;
        }

        const info = e.cellInfo as IgrTemplateCellInfo;
        label.textContent = info.value;
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
            return this.colors[index];
        }
    }
}

// rendering above class to the React DOM
ReactDOM.render(<DataGridTypeHeatmapTable />, document.getElementById('root'));