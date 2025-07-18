import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// grid modules:
import { IgrDataGridModule } from 'igniteui-react-data-grids';
import { IgrDataGrid } from 'igniteui-react-data-grids';
import { IgrTextColumn } from 'igniteui-react-data-grids';
import { IgrTemplateColumn } from 'igniteui-react-data-grids';
import { IgrTemplateCellInfo } from 'igniteui-react-data-grids';
import { IgrTemplateHeader } from 'igniteui-react-data-grids';
import { IgrTemplateCellUpdatingEventArgs } from 'igniteui-react-data-grids';
import { IgrTemplateHeaderCellUpdatingEventArgs } from 'igniteui-react-data-grids';

IgrDataGridModule.register();

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

        this.createData();

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
                    rowSeparatorBackground="lightgray"
                    headerSeparatorBackground="lightgray"
                    headerSeparatorWidth="1"
                    headerHeight="110"

                    columnResizingMode="None"
                    autoGenerateColumns="false"
                    dataSource={this.dataRelations}>

                    <IgrTextColumn field="Name"
                    headerText="Friends"
                    header={this.HorizontalRightHeader}
                    width="*>110" horizontalAlignment="right" />

                    {this.renderDataColumns()}

                    <IgrTextColumn field="Count"
                    headerText="Total"
                    header={this.HorizontalLeftHeader}
                    width="*>110" horizontalAlignment="left"    />

               </IgrDataGrid>
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
        field={columnPath} headerText={columnName}
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

    public onVerticalHeaderUpdating = (s: IgrTemplateHeader, e: IgrTemplateHeaderCellUpdatingEventArgs) => {
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

    public onHorizontalHeaderUpdating = (s: IgrTemplateHeader, e: IgrTemplateHeaderCellUpdatingEventArgs, align: string) => {
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

    public onCellUpdating = (s: IgrTemplateColumn, e: IgrTemplateCellUpdatingEventArgs) => {
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

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataGridTypeMatrixTable/>);
