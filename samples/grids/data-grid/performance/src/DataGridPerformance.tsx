import * as React from 'react';
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrColumn } from 'igniteui-react-grids';
import { IgrCellStyleRequestedEventArgs } from 'igniteui-react-grids';
import { IgrDataBindingEventArgs } from 'igniteui-react-grids';
import { HeaderClickAction } from 'igniteui-react-grids';
import { GridSelectionMode } from 'igniteui-react-grids';
import { IgrColumnGroupDescription } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrTemplateColumn, IIgrCellTemplateProps } from 'igniteui-react-grids';
import { IgrTemplateCellUpdatingEventArgs } from 'igniteui-react-grids';
import { IgrTemplateCellInfo } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';

IgrDataGridModule.register();

export default class DataGridPerformance extends React.Component<any, any> {

    public constructor(props: any) {
        super(props);

        this.data = this.generateSalesPeople(8000);
        this.tick = this.tick.bind(this);

        this.onPriceStyleKey = this.onPriceStyleKey.bind(this);
        this.onPriceCellUpdating = this.onPriceCellUpdating.bind(this);
        this.onChartStyleKey = this.onChartStyleKey.bind(this);
        this.onChartCellUpdating = this.onChartCellUpdating.bind(this);
        this.onGridStyleKey = this.onGridStyleKey.bind(this);
        this.onGridCellUpdating = this.onGridCellUpdating.bind(this);
        this.onGridRef = this.onGridRef.bind(this);
        this.onPricePercentStyleKey = this.onPricePercentStyleKey.bind(this);
        this.onPricePercentCellUpdating = this.onPricePercentCellUpdating.bind(this);
        this.onPriceAmountStyleKey = this.onPriceAmountStyleKey.bind(this);
        this.onPriceAmountCellUpdating = this.onPriceAmountCellUpdating.bind(this);

        for (let i = 0; i < 43; i++) {
            this.kpiColumns.push("KPI_" + i);
        }
    }

    public onGridRef(grid: IgrDataGrid) {
        if (!grid) { return; }

        this.grid = grid;
    }

    public kpiColumns: string[] = [];
    public data: SalesPerson[];
    public colorIncreasing = "#4EB862";
    public colorDecreasing = "#FF134A";

    public onPriceStyleKey(grid: any, args: IgrCellStyleRequestedEventArgs) {
        let row: SalesPerson;
        if (this.grid) {
            row = this.grid.actualDataSource.getItemAtIndex(args.rowNumber);
        } else {
            row = this.data[args.rowNumber];
        }
        if (row.Change >= 0) {
            args.styleKey = "priceShiftUp";
        } else {
            args.styleKey = "priceShiftDown";
        }
    }

    public onPriceCellUpdating(grid: any, args: IgrTemplateCellUpdatingEventArgs) {
        let row = args.cellInfo.rowItem;
        let priceShiftUp = row.Change >= 0;
        let templ = args.cellInfo as IgrTemplateCellInfo;

        let content = args.content as HTMLDivElement;
        let sp: HTMLSpanElement | null = null;
        let icon: HTMLSpanElement | null = null;

        if (content.childElementCount > 0) {
            sp = content.children[0] as HTMLSpanElement;
            icon = content.children[1] as HTMLSpanElement;
        } else {
            content.style.textAlign = "right";
            sp = document.createElement("span");
            icon = document.createElement("span");
            sp.style.font = "13px Verdana";
            sp.style.verticalAlign = "center";
            content.appendChild(sp);
            content.appendChild(icon);
            icon.style.fontFamily = "Material Icons";
            icon.style.fontSize = "13px";
            icon.style.fontFeatureSettings = "liga";
            icon.style.verticalAlign = "center";
        }

        sp.textContent = "$" + (+templ.value).toFixed(2);

        if ((sp as any).__isUp === undefined ||
            (sp as any).__isUp !== priceShiftUp) {
            (sp as any).__isUp = priceShiftUp;
            if (priceShiftUp) {
                // icon.textContent = "trending_up";
                icon.style.color = this.colorIncreasing;
                sp.style.color = this.colorIncreasing;
            } else {
            // icon.textContent = "trending_down";
                icon.style.color = this.colorDecreasing;
                sp.style.color = this.colorDecreasing;
            }
        }
    }

    public onPricePercentStyleKey(grid: any, args: IgrCellStyleRequestedEventArgs) {
        if (args.resolvedValue >= 0) {
            args.styleKey = "pricePercentUp";
        } else {
            args.styleKey = "pricePercentDown";
        }
    }

    public borderDecreasing = "4px solid #FF134A";
    public borderIncreasing = "4px solid #4EB862";

    public onPricePercentCellUpdating(grid: any, args: IgrTemplateCellUpdatingEventArgs) {
        let templ = args.cellInfo as IgrTemplateCellInfo;
        let priceShiftUp = templ.value >= 0;

        let content = args.content as HTMLDivElement;
        let sp: HTMLSpanElement | null = null;

        if (content.childElementCount > 0) {
            sp = content.children[0] as HTMLSpanElement;
        } else {
            content.style.textAlign = "right";
            sp = document.createElement("span");
            sp.style.font = "13px Verdana";
            sp.style.verticalAlign = "center";
            content.appendChild(sp);
        }

        sp.textContent = (+templ.value).toFixed(2) + "%";
        if ((sp as any).__isUp === undefined ||
            (sp as any).__isUp !== priceShiftUp) {
            (sp as any).__isUp = priceShiftUp;
            if (priceShiftUp) {
            sp.style.paddingRight = "5px";
            sp.style.borderRight = this.borderIncreasing;
            // sp.style.color = this.colorIncreasing;
            } else {
            sp.style.paddingRight = "5px";
            sp.style.borderRight = this.borderDecreasing;
            // sp.style.color = this.colorDecreasing;
            }
        }
    }

    public onPriceAmountStyleKey(grid: any, args: IgrCellStyleRequestedEventArgs) {
        if (args.resolvedValue >= 0) {
            args.styleKey = "priceAmountUp";
        } else {
            args.styleKey = "priceAmountDown";
        }
    }

    public onPriceAmountCellUpdating(grid: any, args: IgrTemplateCellUpdatingEventArgs) {
        let templ = args.cellInfo as IgrTemplateCellInfo;
        let priceShiftUp = templ.value >= 0;

        let content = args.content as HTMLDivElement;
        let sp: HTMLSpanElement | null = null;

        if (content.childElementCount > 0) {
            sp = content.children[0] as HTMLSpanElement;
        } else {
            content.style.textAlign = "right";
            sp = document.createElement("span");
            sp.style.font = "13px Verdana";
            sp.style.verticalAlign = "center";
            content.appendChild(sp);
        }

        sp.textContent = (+templ.value).toFixed(2);

        if ((sp as any).__isUp === undefined ||
            (sp as any).__isUp !== priceShiftUp) {
            (sp as any).__isUp = priceShiftUp;
            if (priceShiftUp) {
            sp.style.paddingRight = "5px";
            sp.style.borderRight = this.borderIncreasing;
            // sp.style.color = this.colorIncreasing;
            } else {
            sp.style.paddingRight = "5px";
            sp.style.borderRight = this.borderDecreasing;
            // sp.style.color = this.colorDecreasing;
            }
        }
    }

    public onChartStyleKey(grid: any, args: IgrCellStyleRequestedEventArgs) {
        args.styleKey = "igComponent";
    }

    public onChartCellUpdating(grid: any, args: IgrTemplateCellUpdatingEventArgs) {
        let templ = args.cellInfo as IgrTemplateCellInfo;

        let content = args.content as HTMLDivElement;
        let icon: HTMLSpanElement | null = null;

        if (content.childElementCount > 0) {
            icon = content.children[0] as HTMLSpanElement;
            icon.onclick = (e) => {
            console.log("chart clicked!!")
            e.stopPropagation();
            }
        } else {
            icon = document.createElement("span");
            content.appendChild(icon);
            icon.style.fontFamily = "Material Icons";
            icon.style.fontSize = "13px";
            icon.style.fontFeatureSettings = "liga";
            icon.style.verticalAlign = "center";
            icon.textContent = "insert_chart_outlined";
        }
    }

    public onGridStyleKey(grid: any, args: IgrCellStyleRequestedEventArgs) {
        args.styleKey = "grid";
    }

    public onGridCellUpdating(grid: any, args: IgrTemplateCellUpdatingEventArgs) {
        let templ = args.cellInfo as IgrTemplateCellInfo;

        let content = args.content as HTMLDivElement;
        let icon: HTMLSpanElement | null = null;

        if (content.childElementCount > 0) {
            icon = content.children[0] as HTMLSpanElement;
            icon.onclick = (e) => {
            console.log("grid clicked!!")
            e.stopPropagation();
            }
        } else {
            icon = document.createElement("span");
            content.appendChild(icon);
            icon.style.fontFamily = "Material Icons";
            icon.style.fontSize = "13px";
            icon.style.fontFeatureSettings = "liga";
            icon.style.verticalAlign = "center";
            icon.textContent = "table_chart";
        }
    }

    public TestTemplateContent(props: IIgrCellTemplateProps) {
        let tmpl = props.dataContext as IgrTemplateCellInfo;
        let font = tmpl.font;
        return (
            <div style={{
            textAlign: tmpl.resolvedTextAlign,
            font: font,
            opacity: tmpl.resolvedContentOpacity }}>
            <span>{tmpl.value}</span>
            </div>
        );
    }

    public render() {
        return (
            <div className="igContainer">
                <IgrDataGrid
                width="100%"
                height="100%"
                autoGenerateColumns="false"
                headerClickAction={HeaderClickAction.SortByMultipleColumnsTriState}
                rowHeight="40"
                selectionMode={GridSelectionMode.MultipleRow}
                defaultColumnMinWidth="80"
                columnShowingAnimationMode="auto"
                columnHidingAnimationMode="auto"
                dataSource={this.data}
                ref={this.onGridRef}>

                <IgrTextColumn propertyPath="FirstName" headerText="First Name" width="*>130"></IgrTextColumn>
                <IgrTextColumn propertyPath="LastName" headerText="Last Name" width="*>130"></IgrTextColumn>
                <IgrTextColumn propertyPath="Territory" width="*>130"></IgrTextColumn>
                <IgrNumericColumn propertyPath="YearToDateSales"
                    headerText="YTD Sales" width="*>130" positivePrefix="$"
                    showGroupingSeparator="true">
                </IgrNumericColumn>

                <IgrTemplateColumn propertyPath="AvgSale"
                    headerText="Avg. Sale"
                    width="*>120"
                    horizontalAlignment="right"
                    cellStyleKeyRequested={this.onPriceStyleKey}
                    cellUpdating={this.onPriceCellUpdating} >
                </IgrTemplateColumn>

                <IgrTemplateColumn propertyPath="Change" width="*>120"
                    horizontalAlignment="right"
                    cellStyleKeyRequested={this.onPriceAmountStyleKey}
                    cellUpdating={this.onPriceAmountCellUpdating}>
                </IgrTemplateColumn>

                <IgrTemplateColumn propertyPath="PercentChange" width="*>140"
                    horizontalAlignment="right" headerText="Change (%)"
                    cellStyleKeyRequested={this.onPricePercentStyleKey}
                    cellUpdating={this.onPricePercentCellUpdating}>
                </IgrTemplateColumn>

                <IgrDateTimeColumn propertyPath="DateValue" headerText="Date" width="*>120" >
                </IgrDateTimeColumn>

                {
                    this.kpiColumns.map(function (i) {
                    return ( <IgrNumericColumn width="*>150" key={i} propertyPath={i} /> )
                    })
                }

                </IgrDataGrid>
            </div>
        );
    }

    public componentDidMount() {
        let g = new IgrColumnGroupDescription();
        g.propertyPath = "Territory";
        this.grid.groupDescriptions.add(g);

        for (let i = 0; i < 43; i++) {
            (() => {
                let currVal = i;
                this.grid.forColumnsWithPropertyPath("KPI_" + currVal, (col: IgrColumn) => {
                    col.cellStyleKeyRequested = (sender: any, args: IgrCellStyleRequestedEventArgs) => {
                    let value = args.resolvedValue;
                    if (value < 20.0) {
                        args.styleKey = "kpi_red";
                    } else if (value > 80.0) {
                        args.styleKey = "kpi_green";
                    }
                    };

                    col.dataBound = (sender: any, args: IgrDataBindingEventArgs) => {
                        let value = args.resolvedValue;
                        if (value < 20.0) {
                            if (args.cellInfo.background !== "red") {
                                args.cellInfo.background = this.colorDecreasing;
                            }
                        }

                        if (value > 80.0) {
                            if (args.cellInfo.background !== "green") {
                                args.cellInfo.background = this.colorIncreasing;
                            }
                        }
                    };
                });
            })();
    }

    this.grid.forColumnsWithPropertyPath("AvgSale", (col: IgrColumn) => {
        col.dataBound = (sender: any, args: IgrDataBindingEventArgs) => {
                    let item: any = args.cellInfo.rowItem;
                    if (item !== null)
                    {
                        if (item.AvgSaleHeat > 0)
                        {
                            let p = +item.AvgSaleHeat;
                            let toA = 1.0;
                            let fromA = 1.0;
                            let toR = 0.0;
                            let fromR = 1.0;
                            let toG = 1.0;
                            let fromG = 1.0;
                            let toB = 0.0;
                            let fromB = 1.0;

                            let aByte = fromA + (toA - fromA) * p;
                            let rByte = Math.round((fromR + (toR - fromR) * p) * 255.0);
                            let gByte = Math.round((fromG + (toG - fromG) * p) * 255.0);
                            let bByte = Math.round((fromB + (toB - fromB) * p) * 255.0);

                            let colorString = "rgba(" + rByte + "," + gByte + "," + bByte + "," + aByte + ")";

                            args.cellInfo.background = colorString;
            }
            else if (item.AvgSaleHeat < 0) {
                let p = +item.AvgSaleHeat * -1.0;
                            let toA = 1.0;
                            let fromA = 1.0;
                            let toR = 1.0;
                            let fromR = 1.0;
                            let toG = 0.0;
                            let fromG = 1.0;
                            let toB = 0.0;
                            let fromB = 1.0;

                            let aByte = fromA + (toA - fromA) * p;
                            let rByte = Math.round((fromR + (toR - fromR) * p) * 255.0);
                            let gByte = Math.round((fromG + (toG - fromG) * p) * 255.0);
                            let bByte = Math.round((fromB + (toB - fromB) * p) * 255.0);

                            let colorString = "rgba(" + rByte + "," + gByte + "," + bByte + "," + aByte + ")";

                            args.cellInfo.background = colorString;
            }
                        else
                        {
                            let colorString = "white";
                            args.cellInfo.background = colorString;
                        }
                    }
                };
        });

    window.setTimeout(this.tick, 16);
    }

    public lastDataUpdate: Date = new Date();
    public interval: number = 100;

    private randomizeItem(item: SalesPerson) {
        item.Change = Math.random() * 40.0 - 20.0;
        let prevSale = item.AvgSale;

        item.AvgSale += item.Change;
        item.PercentChange = ((item.AvgSale / prevSale) * 100.0);
    }

    private tick()
    {
        let sortedBySales = false;
        // foreach (let item in grid.SortDescriptions)
        // {
        // 	if (item.PropertyName === "YearToDateSales")
        // 	{
        // 		sortedBySales = true;
        // 	}
        // }

        let toChange = 200;
        let toChangeIndexes = {};
        let stillAnimating = false;
        for (let i = 0; i < this.data.length; i++)
        {
            let item = this.data[i];
            if (item.AvgSaleHeat !== 0)
            {
                stillAnimating = true;
            }
        }

        let now = new Date();
        let intervalElapsed = false;
        if ((+now - +this.lastDataUpdate) > this.interval) {
            intervalElapsed = true;
        }

        let useClear = false;
        let sortingByAvgSale = false;
        for (let i = 0; i < this.grid.sortDescriptions.count; i++) {
            if (this.grid.sortDescriptions.item(i).propertyPath === "AvgSale" ||
                this.grid.sortDescriptions.item(i).propertyPath.indexOf("Change") >= 0) {
                sortingByAvgSale = true;
            }
        }

        let changing = false;
        if (intervalElapsed)
        {
            this.lastDataUpdate = new Date();
            for (let i = 0; i < toChange; i++)
            {
                let index = Math.round(Math.random() * this.data.length - 1);
                while (toChangeIndexes[index.toString()] !== undefined)
                {
                    index = Math.round(Math.random() * this.data.length - 1);
                }
                toChangeIndexes[index.toString()] = true;
                changing = true;
            }
        }

        for (let i = 0; i < this.data.length; i++)
        {
            let item = this.data[i];
            if (toChangeIndexes[i.toString()] !== undefined)
            {
                if (sortingByAvgSale && !useClear) {

                this.grid.notifyRemoveItem(i, item);
                this.randomizeItem(item);
                this.grid.notifyInsertItem(i, item);
                } else {
                    this.randomizeItem(item);
                }

                if (item.Change > 0) {
                    // item.YearToDateSales += Math.round(Math.random() * 4.0);
                    item.AvgSaleHeat = 1;
                } else {
                    item.AvgSaleHeat = -1;
                }
            }
            else
            {
                if (item.AvgSaleHeat > 0)
                {
                    item.AvgSaleHeat -= .06;
                    if (item.AvgSaleHeat < 0)
                    {
                        item.AvgSaleHeat = 0;
                    }
                }
                if (item.AvgSaleHeat < 0) {
                    item.AvgSaleHeat += .06;
                    if (item.AvgSaleHeat > 0) {
                        item.AvgSaleHeat = 0;
                    }
                }
            }
        }

        if (sortingByAvgSale && useClear) {
            this.grid.actualDataSource.queueAutoRefresh();
        }

        // if (!sortingByPrice) {
            // if (!useClear) {
        if (!sortingByAvgSale || !intervalElapsed) {
            this.grid.invalidateVisibleRows();
        }
            // }
        // }
        // this.grid.invalidateVisibleRows();
        // actualDataSource.queueAutoRefresh();

        window.setTimeout(() => this.tick(), 16);

    }

    private generateSalesPeople(num: number) {
        let firstNames = [
            "Kyle",
            "Gina",
            "Irene",
            "Katie",
            "Michael",
            "Oscar",
            "Ralph",
            "Torrey",
            "William",
            "Bill",
            "Daniel",
            "Frank",
            "Brenda",
            "Danielle",
            "Fiona",
            "Howard",
            "Jack",
            "Larry",
            "Holly",
            "Jennifer",
            "Liz",
            "Pete",
            "Steve",
            "Vince",
            "Zeke"
        ];

        let lastNames = [
            "Adams",
        "Crowley",
        "Ellis",
        "Gable",
        "Irvine",
        "Keefe",
        "Mendoza",
        "Owens",
        "Rooney",
        "Waddell",
        "Thomas",
        "Betts",
        "Doran",
        "Fitzgerald",
        "Holmes",
        "Jefferson",
        "Landry",
        "Newberry",
        "Perez",
        "Spencer",
        "Vargas",
        "Grimes",
        "Edwards",
        "Stark",
        "Cruise",
        "Fitz",
        "Chief",
        "Blanc",
        "Perry",
        "Stone",
        "Williams",
        "Lane",
        "Jobs"
        ];

        let genders = [
            "GUY",
            "GIRL",
            "GIRL",
            "GIRL",
            "GUY",
            "GUY",
            "GUY",
            "GUY",
            "GUY",
            "GUY",
            "GUY",
            "GUY",
            "GIRL",
            "GIRL",
            "GIRL",
            "GUY",
            "GUY",
            "GUY",
            "GIRL",
            "GIRL",
            "GIRL",
            "GUY",
            "GUY",
            "GUY",
            "GUY"
        ];

        let territories = [
            "Australia",
            "Canada",
            "Egypt",
            "Greece",
            "Italy",
            "Kenya",
            "Mexico",
            "Oman",
            "Qatar",
            "Sweden",
            "Uruguay",
            "Yemen",
            "Bulgaria",
            "Denmark",
            "France",
            "Hungary",
            "Japan",
            "Latvia",
            "Netherlands",
            "Portugal",
            "Russia",
            "Turkey",
            "Venezuela",
            "Zimbabwe"
        ];

        // let min = 10;
        // let max = 35;

        let items = [];
        for (let i = 0; i < num; i++)
        {
            let item = new SalesPerson();
            let firstIndex = Math.round(Math.random() * (firstNames.length - 1));
            item.Index = i;
            item.FirstName = firstNames[firstIndex];
            item.LastName = lastNames[Math.round(Math.random() * (lastNames.length - 1))];
            item.Name = item.FirstName + item.LastName;

            let randomIndex = Math.round(Math.random() * (firstNames.length - 1));
            if (randomIndex === 0)
                randomIndex = 1;

            let value = randomIndex.toString();
            if (randomIndex < 10)
                value = "0" + value;
            item.ImageName = this.createUri(genders[firstIndex] + value + ".png");
            item.Territory = territories[Math.round(Math.random() * (territories.length - 1))];
            item.AvgSale = Math.round(Math.random() * 800) + 200.0;
            item.Change = Math.random() * 40.0 - 20.0;
            item.PercentChange = 0;
            item.YearToDateSales = Math.round(Math.random() * 50000);

            item.DateValue = new Date();
            item.DateValue.setDate(item.DateValue.getDate() + Math.round(Math.random() * 500))

            for (let j = 0; j < 43; j++) {
                item["KPI_" + j] = Math.round(Math.random() * 100.0);
            }

            items.push(item);
        }

        return items;
    }

    private createUri(val: string): string {
        return "https://static.infragistics.com/xplatform/images/people/" + val;
    }

    // private title = 'app';
    // @ViewChild(IgxDataChartComponent)
    // chart: IgxDataChartComponent;
    // private bigData: any[];
    // private data: any[];

    // private financialData: any[];
    // private context = {
    //     name: "name",
    //     value: "value-0"
    // };
    // private finData: any[];
    private grid: IgrDataGrid;

}

export class SalesPerson {
    public FirstName: string;
    public LastName: string;
    public Name: string;
    public ImageName: string;
    public Territory: string;
    public Index: number;
    public AvgSale: number;
    public AvgSaleHeat: number;
    public Change: number;
    public PercentChange: number;
    public YearToDateSales: number;
    public DateValue: Date;
}
