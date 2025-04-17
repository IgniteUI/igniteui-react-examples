import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { PeriodicElements } from './PeriodicElements';
import { IgrDataGridModule } from 'igniteui-react-data-grids';
import { IgrDataGrid } from 'igniteui-react-data-grids';
import { IgrTextColumn } from 'igniteui-react-data-grids';
import { IgrTemplateColumn } from 'igniteui-react-data-grids';
import { IgrTemplateCellInfo } from 'igniteui-react-data-grids';
import { IgrTemplateHeader } from 'igniteui-react-data-grids';
import { IgrTemplateCellUpdatingEventArgs } from 'igniteui-react-data-grids';
import { IgrTemplateHeaderCellUpdatingEventArgs } from 'igniteui-react-data-grids';
import { IgrGridSelectedItemsChangedEventArgs } from 'igniteui-react-data-grids';
import { IgrGridSelectedKeysChangedEventArgs } from 'igniteui-react-data-grids';
import { IgrGridSelectedCellsChangedEventArgs } from 'igniteui-react-data-grids';
import { IgrGridSelectedCellRangesChangedEventArgs } from 'igniteui-react-data-grids';
import { IgrGridActiveCellChangedEventArgs } from 'igniteui-react-data-grids';

IgrDataGridModule.register();

export default class DataGridTypePeriodicTable extends React.Component<any, any> {

    public ElementsData: any[] = [];
    public ElementGroups: number = 18;

    public HorizontalCenterHeader: IgrTemplateHeader;
    public HorizontalRightHeader: IgrTemplateHeader;
    public HorizontalLeftHeader: IgrTemplateHeader;
    public HeatScale: HeatScale;
    public CellSize: number = 50;

    constructor(props: any) {
        super(props);

        this.createData();

        this.HeatScale = new HeatScale(0, 6000);
        this.HeatScale.isInverted = true;
        this.HeatScale.colors = ['#ffd425', '#e5cc8b', '#e9bc86', '#edac7d', '#f29a71', '#f68863', '#f97454', '#fc5d45', '#fe4035', '#ff0025'];

        this.HorizontalCenterHeader = new IgrTemplateHeader({});
        this.HorizontalCenterHeader.cellUpdating = (s, e) => this.onHorizontalHeaderUpdating(s, e, "center");

        this.HorizontalRightHeader = new IgrTemplateHeader({});
        this.HorizontalRightHeader.cellUpdating = (s, e) => this.onHorizontalHeaderUpdating(s, e, "right");

        this.HorizontalLeftHeader = new IgrTemplateHeader({});
        this.HorizontalLeftHeader.cellUpdating = (s, e) => this.onHorizontalHeaderUpdating(s, e, "left");

        this.state = {
            selectedElement: "",
        }
    }

    public render(): JSX.Element {

        let labelStyle: any = { fontSize: "13px", fontFamily: "Verdana", color: "rgb(24, 29, 31)", padding: "5px"};

        return (
            <div className="container sample" >
                <label style={labelStyle}>Selected Element: {this.state.selectedElement }</label>

                <IgrDataGrid
                    height="calc(100% - 30px)"
                    width="100%"
                    rowHeight={this.CellSize + 5}
                    rowSeparatorHeight="1"
                    rowSeparatorBackground="white"
                    headerHeight="60"
                    headerSeparatorBackground="white"

                    autoGenerateColumns="false"
                    dataSource={this.ElementsData}

                    columnResizingMode="None"
                    activationMode="Cell"
                    activeCellChanged={this.activeCellChanged}
                    selectionMode="SingleCell"
                    selectedItemsChanged={this.selectedItemsChanged}
                    selectedKeysChanged={this.selectedKeysChanged}
                    selectedCellsChanged={this.selectedCellsChanged}
                    selectedCellRangesChanged={this.selectedCellRangesChanged}>

                    <IgrTextColumn field="row"
                    headerText=" "
                    header={this.HorizontalRightHeader}
                    width="*>40" horizontalAlignment="right" />

                    {this.renderElementColumns()}

                    <IgrTextColumn field="space" headerText=""
                    header={this.HorizontalLeftHeader}
                    width="*>40" horizontalAlignment="left"    />

               </IgrDataGrid>
            </div>
        );
    }

    public renderElementColumns(): JSX.Element[] {
        const columns: JSX.Element[] = [];

        for (let i = 0; i < this.ElementGroups; i++) {
            const property = "group" + i;
            const group = (i + 1).toString();
            columns.push(this.renderColumn(property, group));
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
        header={this.HorizontalCenterHeader}
        width={this.CellSize.toString()}
        paddingBottom="0" paddingLeft="0"
        paddingRight="0" paddingTop="0"
        cellUpdating={this.onElementCellUpdating}
        horizontalAlignment="center"
        verticalAlignment="bottom"
        border="white"
        borderLeftWidth="0.5"
        borderRightWidth="0.5"
        borderTopWidth="0"
        borderBottomWidth="0" />;
    }

    public activeCellChanged = (s: IgrDataGrid, e: IgrGridActiveCellChangedEventArgs) => {
        // console.log("activeCellChanged");

        const column = e.newActiveCell.columnUniqueKey.toString();
        const row = e.newActiveCell.rowIndex;

        const item = this.ElementsData[row];
        if (item === undefined ||
            item[column] === undefined||
            item[column].name === undefined) {
            this.setState({selectedElement: ""});
        } else {
            this.setState({selectedElement: item[column].name + " (" + item[column].symbol + ")"});
        }
    }

    public selectedCellRangesChanged = (s: IgrDataGrid, e: IgrGridSelectedCellRangesChangedEventArgs) => {
        // console.log("selectedCellRangesChanged");
    }

    public selectedItemsChanged = (s: IgrDataGrid, e: IgrGridSelectedItemsChangedEventArgs) => {
        // console.log("selectedItemsChanged");
    }

    public selectedKeysChanged = (s: IgrDataGrid, e: IgrGridSelectedKeysChangedEventArgs) => {
        // console.log("selectedKeysChanged");
    }

    public selectedCellsChanged = (s: IgrDataGrid, e: IgrGridSelectedCellsChangedEventArgs) => {
        // console.log("selectedCellsChanged");
    }

    public onVerticalHeaderUpdating = (s: IgrTemplateHeader, e: IgrTemplateHeaderCellUpdatingEventArgs) => {
        const content = e.content as HTMLDivElement;
        let label: HTMLSpanElement | null = null;
        if (content.childElementCount === 0) {
            label = document.createElement("div");
            label.style.background = "transparent";
            label.style.color = "rgb(24, 29, 31)";
            label.style.fontSize = "13px";
            label.style.fontFamily = "Verdana";
            label.style.textAlign = "center";
            // content.style.lineHeight = "140px";
            content.style.margin = "0px";
            content.style.padding = "0px";
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
            label = document.createElement("div");
            label.style.background = "transparent";
            label.style.color = "rgb(24, 29, 31)";
            label.style.fontSize = "13px";
            label.style.fontFamily = "Verdana";
            label.style.verticalAlign = "bottom";
            label.style.textAlign = align;
            // content.style.lineHeight = "140px";
            content.style.margin = "0px";
            content.style.padding = "0px";
            content.appendChild(label);
        } else {
            label = content.children[0] as HTMLDivElement;
        }

        const info = e.cellInfo as IgrTemplateCellInfo;
        label.textContent = info.value;
    }

    public onElementCellUpdating = (s: IgrTemplateColumn, e: IgrTemplateCellUpdatingEventArgs) => {
        const content = e.content as HTMLDivElement;
        const info = e.cellInfo as IgrTemplateCellInfo;
        let cell: HTMLDivElement | null = null;
        let atomic: HTMLDivElement | null = null;
        let symbol: HTMLDivElement | null = null;
        let mass:   HTMLDivElement | null = null;

        if (content.childElementCount !== 0) {
            cell = content.children[0] as HTMLDivElement;
            atomic = cell.children[0] as HTMLDivElement;
            symbol = cell.children[1] as HTMLDivElement;
            mass   = cell.children[2] as HTMLDivElement;
        } else {
            atomic = document.createElement("div");
            atomic.style.minWidth = "10px";
            atomic.style.margin = "0px";
            atomic.style.padding = "0px";
            atomic.style.fontFamily = "Verdana";
            atomic.style.fontSize = "8pt";
            atomic.style.textAlign = "left";
            // atomic.style.color = "gray"
            atomic.style.lineHeight = "initial";

            symbol = document.createElement("div");
            symbol.style.minWidth = "10px";
            symbol.style.margin = "0px";
            symbol.style.padding = "0px";
            symbol.style.fontFamily = "Verdana";
            symbol.style.fontSize = "12pt";
            symbol.style.textAlign = "left";
            symbol.style.lineHeight = "initial";

            mass = document.createElement("div");
            mass.style.minWidth = "10px";
            mass.style.margin = "0px";
            mass.style.padding = "0px";
            mass.style.fontFamily = "Verdana";
            mass.style.fontSize = "7pt";
            mass.style.textAlign = "left";
            // mass.style.color = "gray"
            mass.style.lineHeight = "initial";

            cell = document.createElement("div");
            cell.style.display = "grid";
            cell.style.lineHeight = "initial";
            cell.style.height = "100%";
            // cell.style.height = "70px";
            cell.style.padding = "2px";
            cell.style.paddingBottom = "5px";
            cell.appendChild(atomic);
            cell.appendChild(symbol);
            cell.appendChild(mass);

            content.style.height = "100%";
            content.style.display = "block";
            content.style.margin = "0px";
            content.style.padding = "0px";
            content.appendChild(cell);
        }

        // symbol.style.background = this.HeatScale.getColor(info.value);

        const element = info.value;

        if (element === undefined || element === null || element.symbol === "") {
            cell.style.background = "white";
            cell.style.color = "black";

            atomic.textContent = "";
            symbol.textContent = "";
            mass.textContent = "";

        } else if (element.symbol === "..") {
            cell.style.background = "#ffbb00";
            cell.style.color = "black";

            mass.textContent   = "";
            atomic.textContent = "";
            symbol.textContent = "...";
            symbol.style.textAlign = "center";

        } else {

            mass.textContent = element.standardState;
            atomic.textContent = element.atomic;
            symbol.textContent = element.symbol;
            symbol.style.textAlign = "left";

            if (element.standardState === "gas") {
                cell.style.background = "#10b401";
                cell.style.color = "black";

            } else if (element.standardState === "solid") {
                cell.style.background = "#ffbb00";
                cell.style.color = "black";

            } else if (element.standardState === "liquid") {
                cell.style.background = "#00aeff";
                cell.style.color = "black";

            } else {
                cell.style.background = "gray";
                cell.style.color = "white";
                mass.textContent = "unknown";
            }
        }
    }

    public createData() {

        let elementsLookup = new Map<string, any>();
        for (const element of PeriodicElements.getData()) {
            const symbol = element.symbol.toString().toUpperCase();
            elementsLookup.set(symbol, element);
        }

        let elementsTable = [
            // 1    2     3     4     5     6     7     8     9    10    11    12    13    14    15    16    17    18
            ["H" , ""  , ""  , ""  , ""  , ""  , ""  , ""  , ""  , ""  , ""  , ""  , ""  , ""  , ""  , ""  , ""  , "HE"],
            ["LI", "BE", ""  , ""  , ""  , ""  , ""  , ""  , ""  , ""  , ""  , ""  , "B" , "C" , "N" , "O" , "F" , "NE"],
            ["NA", "MG", ""  , ""  , ""  , ""  , ""  , ""  , ""  , ""  , ""  , ""  , "AL", "SI", "P" , "S" , "CL", "AR"],
            ["K" , "CA", "SC", "TI", "V" , "CR", "MN", "FE", "CO", "NI", "CU", "ZN", "GA", "GE", "AS", "SE", "BR", "KR"],
            ["RB", "SR", "Y" , "ZR", "NB", "MO", "TC", "RU", "RH", "PB", "AG", "CD", "IN", "SN", "SB", "TE", "I" , "XE"],
            ["CS", "BA", "..", "HF", "TA", "W" , "RE", "OS", "IR", "PT", "AU", "HG", "TI", "PB", "BI", "PO", "AT", "RN"],
            ["FR", "RA", "..", "RF", "DB", "SG", "BH", "HS", "MT", "DS", "RG", "CN", "NH", "FL", "MC", "LV", "TS", "OG"],
            [""  , ""  , "..", ""  , ""  , ""  , ""  , ""  , ""  , ""  , ""  , ""  , ""  , ""  , ""  , ""  , ""  , ""  ],
            [""  , ""  , "..", "LA", "CE", "PR", "ND", "PM", "SM", "EU", "GD", "TB", "DY", "HO", "ER", "TM", "YB", "LU"],
            [""  , ""  , "..", "AC", "TH", "PA", "U" , "NP", "PU", "AM", "CM", "BK", "CF", "ES", "FM", "MD", "NO", "LR"],
        ];

        this.ElementsData = [];
        for (let r = 0; r < elementsTable.length; r++) {

            const dataItem: any = {};
            dataItem.row = r < 7 ? r + 1 : "";
            dataItem.space = r < 7 ? r + 1 : "";

            for (let g = 0; g < elementsTable[r].length; g++) {
                const group = "group" + g;

                const symbol = elementsTable[r][g];

                if (symbol === "" || symbol === "..") {
                    const element: any = {};
                    element.row = r + 1;
                    element.group = g + 1;
                    element.symbol = symbol;
                    dataItem[group] = element;
                } else if (!elementsLookup.has(symbol)) {
                    console.error("missing element data for " + symbol)
                } else  {
                    const element = elementsLookup.get(symbol);
                    element.row = r + 1;
                    element.group = g + 1;
                    dataItem[group] = element;
                }
            }
            this.ElementsData.push(dataItem);
        }
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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataGridTypePeriodicTable/>);
