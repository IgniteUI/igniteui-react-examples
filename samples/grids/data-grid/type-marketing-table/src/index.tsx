import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './DataGridTypeMarketingTable.css';
import { LiveFinancialData } from './LiveFinancialData';
// IgrDataGrid modules
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrTemplateColumn } from 'igniteui-react-grids';
import { IgrColumnGroupDescription } from 'igniteui-react-grids';
import { IgrDataBindingEventArgs } from 'igniteui-react-grids';
import { IgrCellStyleRequestedEventArgs } from 'igniteui-react-grids';
import { IgrTemplateCellUpdatingEventArgs } from 'igniteui-react-grids';
import { IgrTemplateCellInfo } from 'igniteui-react-grids';
import { ListSortDirection } from 'igniteui-react-core';
import { HeaderClickAction } from 'igniteui-react-grids';

IgrDataGridModule.register();

interface AppState {
    name: string;
    data: any[];
    frequency: number;
    volume: number;
    hiddenColumns: string[];
    allColumns: string[];
}

export default class DataGridTypeMarketingTable extends React.Component<any, AppState> {

    public grid: IgrDataGrid;
    public lastUpdateTime: Date = new Date();
    public isTimerTicking: boolean = false;
    public isUpdatingAllPrices = false;
    public isUpdatingSomePrices = false;
    public valuesIncreasedColor = "#4EB862";
    public valuesDecreasedColor = "#FF134A";
    public valuesDecreasedBorder = "4px solid #FF134A";
    public valuesIncreasedBorder = "4px solid #4EB862";

    constructor(props: any) {
        super(props);

        this.state = {
            name: 'React',
            data: LiveFinancialData.generateData(3000),
            frequency: 1000,
            volume: 3000,
            hiddenColumns: ["ID"],
            allColumns: []
        };
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrDataGrid
                ref={this.onGridRef}
                width="100%"
                height="100%"
                rowHeight="32"
                selectionMode="MultipleRow"
                autoGenerateColumns="false"
                isGroupCollapsable="true"
                headerClickAction={HeaderClickAction.SortByMultipleColumnsTriState}
                columnShowingAnimationMode="slideFromRightAndFadeIn"
                columnHidingAnimationMode="slideToRightAndFadeOut"
                defaultColumnMinWidth="100"
                dataSource={this.state.data} >

                    <IgrTextColumn field="ID" width="*>90" isHidden="true"/>
                    <IgrTextColumn field="Category" width="*>120" />
                    <IgrTextColumn field="Type" width="*>90"    />
                    <IgrTextColumn field="Risk" width="*>100" />
                    <IgrNumericColumn field="Open Price" width="*>130"/>
                    <IgrTemplateColumn field="Price" width="*>100"
                        horizontalAlignment="right"
                        cellStyleKeyRequested={this.onPriceStyleKey}
                        cellUpdating={this.onPriceCellUpdating}
                        dataBound={this.onPriceDataBound}/>

                    <IgrTemplateColumn field="Change" width=">*100"
                        horizontalAlignment="right"
                        cellStyleKeyRequested={this.onPriceAmountStyleKey}
                        cellUpdating={this.onPriceAmountCellUpdating}/>

                    <IgrTemplateColumn name="ChangePer" field="Change(%)" width="*>130"
                        horizontalAlignment="right"
                        cellStyleKeyRequested={this.onPricePercentStyleKey}
                        cellUpdating={this.onPricePercentCellUpdating}/>

                    <IgrTextColumn field="Contract" width="*>120" />
                    <IgrTextColumn field="Settlement" width="*>130" />
                    <IgrTextColumn field="Region" width="*>130" />
                    <IgrTextColumn field="Country" width="*>120" />
                    <IgrTextColumn field="IndGroup" headerText="Group" width="*>100" />
                    <IgrTextColumn field="IndSector" headerText="Industry" width="*>120"/>
                    <IgrTextColumn field="IndCategory" headerText="Category" width="*>100" />
                    <IgrTextColumn field="Sector" width="*>90" />
                    <IgrTextColumn field="Issuer" width="*>170"/>
                    <IgrTextColumn field="Rating" width="*>90" />
                    <IgrTextColumn field="Currency" width="*>90" />
                    <IgrTextColumn field="Security" width="*>120" />
                    <IgrNumericColumn field="Transactions" width="*>150" />
                    <IgrNumericColumn field="CPN" width="*>90" />
                    <IgrTextColumn field="Maturity" width="*>120" />
                    <IgrTextColumn field="Collateral" width="*>120" />
                    <IgrNumericColumn field="Buy" width="*>110"/>
                    <IgrNumericColumn field="Sell" width="*>110"/>
                    <IgrNumericColumn field="Spread" width="*>110"/>
                    <IgrNumericColumn field="Volume" width="*>110"/>
                    <IgrNumericColumn field="High(D)" width="*>110"/>
                    <IgrNumericColumn field="Low(D)" width="*>110"/>
                    <IgrNumericColumn field="High(Y)" width="*>110"/>
                    <IgrNumericColumn field="Low(Y)" width="*>110"/>
                    <IgrNumericColumn field="Start(Y)" width="*>110"/>
                    <IgrNumericColumn field="KRD_3YR" width="*>120" />
                    <IgrNumericColumn field="KRD_5YR" width="*>120" />
                    <IgrNumericColumn field="KRD_1YR" width="*>120" />
                </IgrDataGrid>
            </div>
        );
    }

    public onGridRef = (grid: IgrDataGrid) => {
        if (!grid) { return; }

        let oldRef = this.grid;
        if (oldRef) {
            oldRef.flush();
        }
        this.grid = grid;
        if (!this.grid) {
            return;
        }

        this.onGridGroupingAdd();

        let columns = [];
        for (let i = 0; i < this.grid.actualColumns.count; i++) {
            let col = this.grid.actualColumns.item(i);

            let name = col.name || col.field;
            columns.push(name);
        }
        this.setState({ allColumns: columns });
        this.startTicking();
    }

    public onTimerTick = () =>
    {
        if (!this.isTimerTicking) {
            return;
        }
        if (!this.grid) {
            window.setTimeout(() => this.onTimerTick(), 16);
            return;
        }

        let toChangeIndexes = {};
        let toChange = Math.round(this.state.volume / 10);

        let now = new Date();
        let intervalElapsed = false;
        if ((+now - +this.lastUpdateTime) > this.state.frequency) {
            intervalElapsed = true;
        }

        let useClear = this.isUpdatingAllPrices;
        let updateAll = this.isUpdatingAllPrices;

        if (updateAll) {
            toChange = this.state.data.length;
        }

        let sortingByPrice = false;
        for (let i = 0; i < this.grid.sortDescriptions.count; i++) {
            if (this.grid.sortDescriptions.item(i).field === "Price" ||
            this.grid.sortDescriptions.item(i).field.indexOf("Change") >= 0) {
                sortingByPrice = true;
            }
        }

        if (intervalElapsed)
        {
            this.lastUpdateTime = new Date();
            for (let i = 0; i < toChange; i++)
            {
                let index = Math.round(Math.random() * this.state.data.length - 1);
                while (toChangeIndexes[index.toString()] !== undefined)
                {
                    index = Math.round(Math.random() * this.state.data.length - 1);
                }
                toChangeIndexes[index.toString()] = true;
            }
        }

        for (let i = 0; i < this.state.data.length; i++)
        {
            let item = this.state.data[i];
            if (toChangeIndexes[i.toString()] !== undefined)
            {
                if (sortingByPrice && !useClear) {

                this.grid.notifyRemoveItem(i, item);
                LiveFinancialData.randomizeDataValues(item);
                this.grid.notifyInsertItem(i, item);
                } else {
                    LiveFinancialData.randomizeDataValues(item);
                }

                if (item.Change > 0) {
                    // item.YearToDateSales += Math.round(Math.random() * 4.0);
                    item.PriceHeat = 1;
                } else {
                    item.PriceHeat = -1;
                }
            }
            else
            {
                if (item.PriceHeat > 0)
                {
                    item.PriceHeat -= .06;
                    if (item.PriceHeat < 0)
                    {
                        item.PriceHeat = 0;
                    }
                }
                if (item.PriceHeat < 0) {
                    item.PriceHeat += .06;
                    if (item.PriceHeat > 0) {
                        item.PriceHeat = 0;
                    }
                }
            }
        }

        if (sortingByPrice && useClear && intervalElapsed) {
            this.grid.actualDataSource.queueAutoRefresh();
        }

        // if (!useClear) {
        if (!sortingByPrice || !intervalElapsed) {
            this.grid.invalidateVisibleRows();
        }
        // }
        // this.grid.invalidateVisibleRows();

        window.setTimeout(() => this.onTimerTick(), 16);
    }

    // cellStyleKeyRequested?: (s: IgrDefinitionBase, e: IgrCellStyleRequestedEventArgs) => void;
    public onPriceStyleKey = (grid: any, args: IgrCellStyleRequestedEventArgs) => {
        let row: any | null = null;
        if (this.grid) {
            row = this.grid.actualDataSource.getItemAtIndex(args.rowNumber);
        } else {
            row = this.state.data[args.rowNumber];
        }
        if (row.Change >= 0) {
            args.styleKey = "priceShiftUp";
        } else {
            args.styleKey = "priceShiftDown";
        }
    }

    public onPriceCellUpdating = (grid: any, args: IgrTemplateCellUpdatingEventArgs) => {
        let item = args.cellInfo.rowItem;
        let priceShiftUp = item.Change >= 0;
        let templ = args.cellInfo as IgrTemplateCellInfo;

        if (args.isCanvasBased) {
            let resized = args.ensureCorrectSize();
            if (resized || args.cellInfo.isContentDirty) {
                args.renderStandardBackground();

                let context: CanvasRenderingContext2D = args.context;

                let iconText = "trending_up";
                let iconColor = this.valuesIncreasedColor;

                let scale = window.devicePixelRatio;
                if (scale !== 1.0) {
                    context.save();
                    context.scale(scale, scale);
                }

                if (priceShiftUp) {
                    iconText = "trending_up";
                    iconColor = this.valuesIncreasedColor;
                } else {
                    iconText = "trending_down";
                    iconColor = this.valuesDecreasedColor;
                }

                // context.fillStyle = "blue";
                // context.fillRect(0,0,args.cellInfo.width,args.cellInfo.height);
                let txt = "$" + (+templ.value).toFixed(2);
                context.font = "13px Verdana";
                let width = context.measureText(txt).width;

                context.font = "13px 'Material Icons'";
                let iconWidth = context.measureText(iconText).width;

                let totalWidth = width + iconWidth;
                context.font = "13px Verdana";
                context.fillStyle = iconColor;
                context.textBaseline = "top";
                context.fillText(txt, templ.width - (totalWidth + 5), (templ.height / 2.0) - 7);

                context.font = "13px 'Material Icons'";
                context.fillStyle = iconColor;
                context.textBaseline = "top";
                context.fillText(iconText, templ.width - (iconWidth + 5), (templ.height / 2.0) - 7);

                if (scale !== 1.0) {
                    context.restore();
                }
            }

            return;
        }

        let content = args.content as HTMLDivElement;
        let sp: HTMLSpanElement;
        let icon: HTMLSpanElement;

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
                icon.textContent = "trending_up";
                icon.style.color = this.valuesIncreasedColor;
                sp.style.color = this.valuesIncreasedColor;
            } else {
                icon.textContent = "trending_down";
                icon.style.color = this.valuesDecreasedColor;
                sp.style.color = this.valuesDecreasedColor;
            }
        }
    }

    public onPricePercentStyleKey = (grid: any, args: IgrCellStyleRequestedEventArgs) => {
        if (args.resolvedValue >= 0) {
            args.styleKey = "pricePercentUp";
        } else {
            args.styleKey = "pricePercentDown";
        }
    }

    public onPricePercentCellUpdating = (grid: any, args: IgrTemplateCellUpdatingEventArgs) => {
        let templ = args.cellInfo as IgrTemplateCellInfo;
        let priceShiftUp = templ.value >= 0;

        if (args.isCanvasBased) {
            let resized = args.ensureCorrectSize();
            if (resized || args.cellInfo.isContentDirty) {
                args.renderStandardBackground();

                let context: CanvasRenderingContext2D = args.context;

                let iconColor = this.valuesIncreasedColor;

                let scale = window.devicePixelRatio;
                if (scale !== 1.0) {
                    context.save();
                    context.scale(scale, scale);
                }

                if (priceShiftUp) {
                    iconColor = this.valuesIncreasedColor;
                } else {
                    iconColor = this.valuesDecreasedColor;
                }

                // context.fillStyle = "blue";
                // context.fillRect(0,0,args.cellInfo.width,args.cellInfo.height);
                let txt = (+templ.value).toFixed(2) + "%";
                context.font = "13px Verdana";
                let width = context.measureText(txt).width;

                let totalWidth = width + 4;

                context.font = "13px Verdana";
                context.fillStyle = templ.textColor;
                context.textBaseline = "top";
                context.fillText(txt, templ.width - (totalWidth + 10), (templ.height / 2.0) - 7);

                context.font = "13px 'Material Icons'";
                context.fillStyle = iconColor;
                context.fillRect(templ.width - (5 + 4), (templ.height / 2.0) - 8, 4, 16);

                 if (scale !== 1.0) {
                    context.restore();
                }
            }

            return;
        }

        let content = args.content as HTMLDivElement;
        let sp: HTMLSpanElement;

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
                sp.style.borderRight = this.valuesIncreasedBorder;
                // sp.style.color = this.valuesIncreasedColor;
            } else {
                sp.style.paddingRight = "5px";
                sp.style.borderRight = this.valuesDecreasedBorder;
                // sp.style.color = this.valuesDecreasedColor;
            }
        }
    }

    public onPriceAmountStyleKey = (grid: any, args: IgrCellStyleRequestedEventArgs) => {
        if (args.resolvedValue >= 0) {
            args.styleKey = "priceAmountUp";
        } else {
            args.styleKey = "priceAmountDown";
        }
    }

    public onPriceAmountCellUpdating = (grid: any, args: IgrTemplateCellUpdatingEventArgs) => {
        let templ = args.cellInfo as IgrTemplateCellInfo;
        let priceShiftUp = templ.value >= 0;

        if (args.isCanvasBased) {
            let resized = args.ensureCorrectSize();
            if (resized || args.cellInfo.isContentDirty) {
                args.renderStandardBackground();

                let context: CanvasRenderingContext2D = args.context;
                let iconColor = this.valuesIncreasedColor;
                let scale = window.devicePixelRatio;
                if (scale !== 1.0) {
                    context.save();
                    context.scale(scale, scale);
                }

                if (priceShiftUp) {
                    iconColor = this.valuesIncreasedColor;
                } else {
                    iconColor = this.valuesDecreasedColor;
                }

                // context.fillStyle = "blue";
                // context.fillRect(0,0,args.cellInfo.width,args.cellInfo.height);
                let txt = (+templ.value).toFixed(2);
                context.font = "13px Verdana";
                let width = context.measureText(txt).width;

                let totalWidth = width + 4;
                context.font = "13px Verdana";
                context.fillStyle = templ.textColor;
                context.textBaseline = "top";
                context.fillText(txt, templ.width - (totalWidth + 10), (templ.height / 2.0) - 7);

                context.font = "13px 'Material Icons'";
                context.fillStyle = iconColor;
                context.fillRect(templ.width - (5 + 4), (templ.height / 2.0) - 8, 4, 16);

                 if (scale !== 1.0) {
                    context.restore();
                }
            }

            return;
        }

        let content = args.content as HTMLDivElement;
        let sp: HTMLSpanElement;

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
                sp.style.borderRight = this.valuesIncreasedBorder;
                // sp.style.color = this.valuesIncreasedColor;
            } else {
                sp.style.paddingRight = "5px";
                sp.style.borderRight = this.valuesDecreasedBorder;
                // sp.style.color = this.valuesDecreasedColor;
            }
        }
    }

    public onGridStyleKey = (grid: any, args: IgrCellStyleRequestedEventArgs) => {
        args.styleKey = "grid";
    }

    public onGridCellUpdating = (grid: any, args: IgrTemplateCellUpdatingEventArgs) => {
        if (args.isCanvasBased) {
            return;
        }

        let content = args.content as HTMLDivElement;
        let icon: HTMLSpanElement;

        if (content.childElementCount > 0) {
            icon = content.children[0] as HTMLSpanElement;
            icon.onclick = (e) => {
                // console.log("grid clicked!!")
                e.stopPropagation();
            }
        } else {
            icon = document.createElement("span");
            content.appendChild(icon);
            icon.style.fontFamily = "Material Icons";
            icon.style.fontSize = "13px";
            icon.style.fontFeatureSettings = "liga";
            icon.style.verticalAlign = "center";
            icon.textContent = "tablechart";
        }
    }

    public startTicking = () => {
        if (!this.isTimerTicking) {
            this.isTimerTicking = true;
            window.setTimeout(() => this.onTimerTick(), 16);
        }
    }

    public onGridGroupingAdd = () => {
        let g = new IgrColumnGroupDescription();
        g.field = "Category";
        g.sortDirection = ListSortDirection.Descending;
        this.grid.groupDescriptions.add(g);

        g = new IgrColumnGroupDescription();
        g.field = "Type";
        g.sortDirection = ListSortDirection.Descending;
        this.grid.groupDescriptions.add(g);

        g = new IgrColumnGroupDescription();
        g.field = "Contract";
        g.sortDirection = ListSortDirection.Descending;
        this.grid.groupDescriptions.add(g);
    }

    public onPriceDataBound = (sender: any, args: IgrDataBindingEventArgs) => {
            let item: any = args.cellInfo.rowItem;
            if (item === null) { return; }

            if (item.PriceHeat > 0)
            {
                let p = +item.PriceHeat;
                let minA = 1.0;
                let maxA = 0.25;

                let maxR = 0.0;
                let minR = 1.0;
                let minG = 1.0;
                let maxG = 1.0;
                let minB = 1.0;
                let maxB = 0.0;

                let a = minA + (maxA - minA) * p;
                let r = minR + (maxR - minR) * p;
                let g = minG + (maxG - minG) * p;
                let b = minB + (maxB - minB) * p;
                r = Math.round(r * 255.0);
                g = Math.round(g * 255.0);
                b = Math.round(b * 255.0);

                let colorString = "rgba(" + r + "," + g + "," + b + "," + a + ")";
                args.cellInfo.background = colorString;
            }
            else if (item.PriceHeat < 0) {
                let p = +item.PriceHeat * -1.0;
                let minA = 1.0;
                let maxA = 0.25;

                let minR = 1.0;
                let maxR = 1.0;
                let minG = 1.0;
                let maxG = 0.0;
                let minB = 1.0;
                let maxB = 0.0;

                let a = minA + (maxA - minA) * p;
                let r = minR + (maxR - minR) * p;
                let g = minG + (maxG - minG) * p;
                let b = minB + (maxB - minB) * p;
                r = Math.round(r * 255.0);
                g = Math.round(g * 255.0);
                b = Math.round(b * 255.0);

                let colorString = "rgba(" + r + "," + g + "," + b + "," + a + ")";
                args.cellInfo.background = colorString;
            }
            else
            {
                args.cellInfo.background = "white";
            }
    }
}
// rendering above class to the React DOM
ReactDOM.render(<DataGridTypeMarketingTable />, document.getElementById('root'));
