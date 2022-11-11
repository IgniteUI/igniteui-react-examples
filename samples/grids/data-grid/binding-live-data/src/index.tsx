import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './DataGridBindingLiveData.css';
import { LiveFinancialData } from './LiveFinancialData';
// IgrDataGrid modules
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrDataGridToolbar } from 'igniteui-react-grids';
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrDataGridToolbarModule } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrTemplateColumn } from 'igniteui-react-grids';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrDataChartAnnotationModule } from 'igniteui-react-charts';
import { IgrItemToolTipLayer } from 'igniteui-react-charts';
import { IgrColumnGroupDescription } from 'igniteui-react-grids';
import { IgrDataBindingEventArgs } from 'igniteui-react-grids';
import { IgrCellStyleRequestedEventArgs } from 'igniteui-react-grids';
import { IgrTemplateCellUpdatingEventArgs } from 'igniteui-react-grids';
import { IgrTemplateCellInfo } from 'igniteui-react-grids';
import { FilterFactory } from 'igniteui-react-core';
import { ListSortDirection } from 'igniteui-react-core';
import { HeaderClickAction } from 'igniteui-react-grids';
// IgrDataChart modules
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrNumberAbbreviatorModule } from 'igniteui-react-charts';
import { IgrColumnSeries } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
import { IgrNumericYAxis } from 'igniteui-react-charts';
// other modules
import { IgrButton } from 'igniteui-react';
import { IgrInput } from 'igniteui-react';
import { IgrSwitch } from 'igniteui-react';
import { IgrSlider } from 'igniteui-react';

import { IgrButtonModule } from 'igniteui-react';
import { IgrInputModule } from 'igniteui-react';
import { IgrSwitchModule } from 'igniteui-react';
import { IgrSliderModule } from 'igniteui-react';

//import { defineComponents, IgcDialogComponent } from 'igniteui-webcomponents';

import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrDataGridModule.register();
IgrDataGridToolbarModule.register();
IgrDataChartAnnotationModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartInteractivityModule.register();
IgrNumberAbbreviatorModule.register();
IgrButtonModule.register();
IgrInputModule.register();
IgrSwitchModule.register();
IgrSliderModule.register();

//defineComponents(IgcDialogComponent);

interface AppState {
    name: string;
    data: any[];
    liveSomePricesDisabled: boolean;
    liveSomePricesText: string;
    liveAllPricesDisabled: boolean;
    liveAllPricesText: string;
    frequency: number;
    volume: number;
    canvasChecked: boolean;
    groupingChecked: boolean;
    heatChecked: boolean;
    chartOpen: boolean;
    pricesByCountry: any[];
    hiddenColumns: string[];
    allColumns: string[];
}

export default class DataGridBindingLiveData extends React.Component<any, AppState> {

    public chart: IgrDataChart;
    public grid: IgrDataGrid;
    public toolbar: IgrDataGridToolbar;
    public recordsUpdatedLastSecond: number[];
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
            data: LiveFinancialData.generateData(1000),
            liveSomePricesDisabled: false,
            liveSomePricesText: "Live Prices",
            liveAllPricesDisabled: false,
            liveAllPricesText: "Live All Prices",
            frequency: 100,
            volume: 1000,
            canvasChecked: false,
            groupingChecked: true,
            heatChecked: true,
            chartOpen: false,
            pricesByCountry: [],
            hiddenColumns: ["ID"],
            allColumns: []
        };
    }

    public render(): JSX.Element {
        let buttonStyle: any = { height: "2rem", marginLeft: "10px", marginBottom: "-10px", width: "160px", whiteSpace: "nowrap" };
        let labelStyle: any = { fontSize: "0.8rem", marginTop: "0px", marginLeft: "0px" };
        let iconStyle: any = { paddingLeft: "20px", paddingTop: "5px" };

        return (
            <div className="container sample">

                <div className="toolAreaRow">
                    <div className="toolAreaColumn">
                        <IgrButton variant="contained" style={buttonStyle}
                            disabled={this.state.liveSomePricesDisabled}
                            clicked={this.onLiveSomePricesClicked} >
                                <span>{this.state.liveSomePricesText}</span>
                        </IgrButton>
                        <label>&nbsp;</label>
                        <IgrButton variant="contained" style={buttonStyle}
                        disabled={this.state.liveAllPricesDisabled}
                        clicked={this.onLiveAllPricesClicked} >
                            <span>{this.state.liveAllPricesText}</span>
                        </IgrButton>
                        <label>&nbsp;</label>
                        <IgrButton variant="contained" style={buttonStyle}
                        clicked={this.onChartClicked} >
                            <span>Chart</span>
                        </IgrButton>
                    </div>

                    <div className="toolAreaColumn">
                        <div className="frequencySlider">
                                <label id="label">Frequency: {this.state.frequency / 1000}s</label>
                                <IgrSlider
                                    min={100}
                                    max={1000}
                                    step={100}
                                    className="options-slider"
                                    value={this.state.frequency}
                                    change={this.onPriceFrequencyChanged}/>
                        </div>
                        <div className="volumeSlider">
                            <label id="label">Volume: {this.state.volume / 1000}k</label>
                            <IgrSlider
                                min={100}
                                max={10000}
                                step={100}
                                className="options-slider"
                                value={this.state.volume}
                                change={this.onPriceVolumeChanged}/>
                        </div>
                    </div>

                    <div className="toolAreaColumn">
                        <div className="toolAreaRow">
                            <div className="gridSwitch">
                                <label id="label">Canvas</label>
                                <IgrSwitch checked={this.state.canvasChecked}
                                    change={this.onGridCanvasModeChanged}
                                    value="canvas" />
                            </div>
                            <div className="gridSwitch">
                                <label id="label">Grouping</label>
                                <IgrSwitch checked={this.state.groupingChecked}
                                    change={this.onGridGroupingChanged}
                                    value="grouping" />
                            </div>
                            <div className="gridSwitch">
                                <label id="label">Heat</label>
                                <IgrSwitch checked={this.state.heatChecked}
                                    change={this.onGridHeatModeChanged}
                                    value="heat" />
                            </div>
                        </div>
                        <div className="toolAreaRow" style={{paddingTop: "25px"}}>
                            <IgrInput inputOcurred={this.onGridSearchChanged} placeholder="Search" displayType="text" />
                        </div>
                    </div>
                </div>

                <IgrDataGridToolbar
                    ref={this.onToolbarRef}                    
                    columnChooser="true" />
                <IgrDataGrid
                ref={this.onGridRef}
                width="100%"
                height="calc(100% - 120px)"
                key={this.state.canvasChecked ? "canvasGrid" : "domGrid" }
                useCanvas={this.state.canvasChecked}
                rowHeight="32"
                selectionMode="MultipleRow"
                autoGenerateColumns="false"
                isGroupCollapsable="true"
                headerClickAction={HeaderClickAction.SortByMultipleColumnsTriState}
                columnShowingAnimationMode="slideFromRightAndFadeIn"
                columnHidingAnimationMode="slideToRightAndFadeOut"
                dataSource={this.state.data}
                defaultColumnMinWidth="100"
                isRowHoverEnabled="false">
                    <IgrTextColumn field="ID" width="*>90" isHidden="true"/>
                    <IgrTextColumn field="Category" width="*>130" />
                    <IgrTextColumn field="Type" width="*>100"    />
                    <IgrTextColumn field="Risk" width="*>100" />
                    <IgrNumericColumn field="Open Price" width="*>140"/>
                    <IgrTemplateColumn field="Price" width="*>100"
                        horizontalAlignment="right"
                        cellStyleKeyRequested={this.onPriceStyleKey}
                        cellUpdating={this.onPriceCellUpdating}
                        dataBound={this.onPriceDataBound}/>

                    <IgrTemplateColumn field="Change" width=">*100"
                        horizontalAlignment="right"
                        cellStyleKeyRequested={this.onPriceAmountStyleKey}
                        cellUpdating={this.onPriceAmountCellUpdating}/>

                    <IgrTemplateColumn name="ChangePer" field="Change(%)" width="*>150"
                        horizontalAlignment="right"
                        cellStyleKeyRequested={this.onPricePercentStyleKey}
                        cellUpdating={this.onPricePercentCellUpdating}/>

                    <IgrTextColumn field="Contract" width="*>120" />
                    <IgrTextColumn field="Settlement" width="*>140" />
                    <IgrTextColumn field="Region" width="*>130" />
                    <IgrTextColumn field="Country" width="*>120" />
                    {/* TODO open chart on clicking a cell in the Chart column */}
                    {/* <IgrTemplateColumn field="Chart" width="*>90"
                        cellStyleKeyRequested={this.onChartStyleKey}
                        cellUpdating={this.onChartCellUpdating}/>
                    <IgrTemplateColumn field="Grid" width="*>90"
                        cellStyleKeyRequested={this.onGridStyleKey}
                        cellUpdating={this.onGridCellUpdating} /> */}
                    <IgrTextColumn field="IndGroup" headerText="Group" width="*>110" />
                    <IgrTextColumn field="IndSector" headerText="Industry" width="*>120"/>
                    <IgrTextColumn field="IndCategory" headerText="Category" width="*>130" />
                    <IgrTextColumn field="Sector" width="*>110" />
                    <IgrTextColumn field="Issuer" width="*>170"/>
                    <IgrTextColumn field="Rating" width="*>110" />
                    <IgrTextColumn field="Currency" width="*>130" />
                    <IgrTextColumn field="Security" width="*>120" />
                    <IgrNumericColumn field="Transactions" width="*>150" />
                    <IgrNumericColumn field="CPN" width="*>90" />
                    <IgrTextColumn field="Maturity" width="*>120" />
                    <IgrTextColumn field="Collateral" width="*>130" />
                    <IgrNumericColumn field="Buy" width="*>110"/>
                    <IgrNumericColumn field="Sell" width="*>110"/>
                    <IgrNumericColumn field="Spread" width="*>110"/>
                    <IgrNumericColumn field="Volume" width="*>120"/>
                    <IgrNumericColumn field="High(D)" width="*>120"/>
                    <IgrNumericColumn field="Low(D)" width="*>120"/>
                    <IgrNumericColumn field="High(Y)" width="*>120"/>
                    <IgrNumericColumn field="Low(Y)" width="*>110"/>
                    <IgrNumericColumn field="Start(Y)" width="*>120"/>
                    <IgrNumericColumn field="KRD_3YR" width="*>130" />
                    <IgrNumericColumn field="KRD_5YR" width="*>130" />
                    <IgrNumericColumn field="KRD_1YR" width="*>130" />
                </IgrDataGrid>

                {/* <Dialog
                    className="chartDialog"
                    open={this.state.chartOpen}
                    // TransitionComponent={this.transition}
                    maxWidth="md"
                    fullWidth={true}
                    keepMounted={true}
                    onClose={this.onChartClose}>
                    <DialogContent>
                        <div style={{ textAlign: "center", width: "100%" }}>
                            <IgrDataChart
                            width="100%"
                            height="350px"
                            chartTitle="Data Chart with Prices By Country"
                            titleTopMargin={10}
                            ref={this.onChartRef} />
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.onChartClose} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog> */}

                {/* <igc-dialog id="something" >

                </igc-dialog> */}

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

        if (this.state.groupingChecked) {
            this.onGridGroupingAdd();
        }

        let columns = [];
        for (let i = 0; i < this.grid.actualColumns.count; i++) {
            let col = this.grid.actualColumns.item(i);

            let name = col.name || col.field;
            columns.push(name);
        }
        this.setState({ allColumns: columns });
    }

    public onToolbarRef = (toolbar: IgrDataGridToolbar) => {
        this.toolbar = toolbar;
        if (this.toolbar) {
            this.toolbar.targetGrid = this.grid;
        }
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
        let stillAnimating = false;

        for (const item of this.state.data) {
            if (item.PriceHeat !== 0)
            {
                stillAnimating = true;
            }
        }

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

        let changing = false;
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
                changing = true;
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

        if (intervalElapsed && this.state.chartOpen) {
            this.updatePricesByCountry();
            this.chart.notifyClearItems(this.state.pricesByCountry);
        }

        window.setTimeout(() => this.onTimerTick(), 16);
    }

    public updatePricesByCountry = () => {
        let shouldPopulate = false;
        if (this.state.pricesByCountry.length === 0) {
            shouldPopulate = true;
        }

        let pricesByCountry = new Map<string, number>();
        let countryNames = [];

        for (const item of this.state.data) {
            const country = item.Country;
            if (!country) {
                continue;
            }
            if (!pricesByCountry.has(country)) {
                pricesByCountry.set(country, 0);
                if (shouldPopulate) {

                    countryNames.push(country);
                }
            }
            let currVal = pricesByCountry.get(country);
            // if (currVal !== 0) {
                currVal += item.Price;
                currVal = Math.round(currVal * 100.0) / 100.0;
                pricesByCountry.set(country, currVal);
            // }
        }

        if (shouldPopulate) {

            countryNames = countryNames.sort();
            let dataByCountry = this.state.pricesByCountry;
            for (const name of countryNames) {
                dataByCountry.push({
                    Country: name,
                    Price: pricesByCountry.get(name)
                })
            }
            this.setState({ pricesByCountry: dataByCountry});
        } else {
            let dataByCountry = this.state.pricesByCountry;
            for (let i = 0; i < dataByCountry.length; i++) {
                const country = dataByCountry[i].Country
                dataByCountry[i].Price = pricesByCountry.get(country);
            }
            this.setState({ pricesByCountry: dataByCountry});
        }
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

    public onChartStyleKey = (grid: any, args: IgrCellStyleRequestedEventArgs) => {
        args.styleKey = "container";
    }

    public onChartCellUpdating = (grid: any, args: IgrTemplateCellUpdatingEventArgs) => {
        if (args.isCanvasBased) {
            return;
        }
        let templ = args.cellInfo as IgrTemplateCellInfo;

        let content = args.content as HTMLDivElement;
        let icon: HTMLSpanElement;

        if (content.childElementCount > 0) {
            icon = content.children[0] as HTMLSpanElement;
            icon.onclick = (e) => {
                // console.log("chart clicked!!")
                e.stopPropagation();
            }
        } else {
            icon = document.createElement("span");
            content.appendChild(icon);
            icon.style.fontFamily = "Material Icons";
            icon.style.fontSize = "13px";
            icon.style.fontFeatureSettings = "liga";
            icon.style.verticalAlign = "center";
            icon.textContent = "insertchart_outlined";
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

    public stopTicking = () => {
        if (this.isTimerTicking) {
            this.isTimerTicking = false;
        }
    }

    public onLiveSomePricesClicked = () => {
        this.isUpdatingAllPrices = false;
        this.isUpdatingSomePrices = !this.isUpdatingSomePrices;
        if (this.isTimerTicking) {
            this.isTimerTicking = false;
            this.setState({
                liveSomePricesText: "Live Prices",
                liveSomePricesDisabled: false,
                liveAllPricesDisabled: false,
            });
        } else {
            this.startTicking();
            this.setState({
                liveSomePricesText: "Stop Prices",
                liveSomePricesDisabled: false,
                liveAllPricesDisabled: true,
            });
        }
    }

    public onLiveAllPricesClicked = () => {
        this.isUpdatingAllPrices = !this.isUpdatingAllPrices;
        this.isUpdatingSomePrices = false;
        if (this.isTimerTicking) {
            this.isTimerTicking = false;
            this.setState({
                liveAllPricesText: "Live All Prices",
                liveAllPricesDisabled: false,
                liveSomePricesDisabled: false,
            });
        } else {
            this.startTicking();
            this.setState({
                liveAllPricesText: "Stop All Prices",
                liveAllPricesDisabled: false,
                liveSomePricesDisabled: true,
            });
        }
    }

    public onChartClicked = () => {
        this.updatePricesByCountry();
            this.setState({
                chartOpen: true
            });
    }

    // onChange?: (event: React.ChangeEvent<{}>, value: number | number[]) => void;
    // public onPriceFrequencyChanged(event: any, value: number) {
    // public onPriceFrequencyChanged(event: any, value: number | number[]) {
        public onPriceFrequencyChanged = (event: any, input: any) => {
    // public onPriceFrequencyChanged(event: React.ChangeEvent<{}>, value: number) {        
        let value = parseFloat(input.detail.toString());
        this.setState({
            frequency: value,
        });
    }

    public onPriceVolumeChanged = (event: any, input: any) => {
        let value = parseFloat(input.detail.toString());
        this.setState({
            volume: value,
            data: LiveFinancialData.generateData(value)
        });
        this.grid.dataSource = this.state.data;
    }

    public onGridCanvasModeChanged = (event: any) => {
        this.setState({ canvasChecked: event.checked });
    }

    public onGridHeatModeChanged = (event: any) => {
        this.setState({ heatChecked: event.checked });
    }

    public onGridGroupingChanged = (event: any) => {

        this.setState({ groupingChecked: event.checked });

        if (event.checked) {
            this.onGridGroupingAdd();
        } else {
            this.onGridGroupingRemove();
        }
    }

    public onGridGroupingRemove = () => {
        this.grid.groupDescriptions.clear();
        this.grid.flush();
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

            if (item.PriceHeat > 0 && this.state.heatChecked)
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
            else if (item.PriceHeat < 0 && this.state.heatChecked) {
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

    public onChartClose = () => {
        this.setState({ chartOpen: false });
    }

    public onChartRef = (chart: IgrDataChart) => {
        if (!chart) { return; }

        this.chart = chart;
        // console.log(this.chart);

        if (this.chart) {
            this.updatePricesByCountry();
            // this.chart.animateSeriesWhenAxisRangeChanges = true;
            this.chart.isHorizontalZoomEnabled = true;
            this.chart.isVerticalZoomEnabled = false;
            let xAxis = new IgrCategoryXAxis({ name: "xAxis" });
            xAxis.dataSource = this.state.pricesByCountry;
            xAxis.label = "Country";
            xAxis.labelAngle = 90;
            xAxis.interval = 1;
            let yAxis = new IgrNumericYAxis({ name: "yAxis", abbreviateLargeNumbers: false });

            let columnSeries = new IgrColumnSeries({ name: "columnSeries" });
            columnSeries.transitionDuration = this.state.frequency;
            columnSeries.xAxisName = "xAxis";
            columnSeries.yAxisName = "yAxis";
            columnSeries.xAxis = xAxis;
            columnSeries.yAxis = yAxis;
            columnSeries.showDefaultTooltip = true;
            columnSeries.isHighlightingEnabled = true;
            columnSeries.title = "Price";

            columnSeries.dataSource = this.state.pricesByCountry;
            columnSeries.valueMemberPath = "Price";

            let itemTooltip = new IgrItemToolTipLayer({ name: "tooltips" });

            this.chart.series.add(columnSeries);
            this.chart.axes.add(xAxis);
            this.chart.axes.add(yAxis);
            // this.chart.series.add(itemTooltip);
            yAxis.abbreviateLargeNumbers = true;
        }
    }

    // public transition = (props: any) => {
    //     return <Slide direction="up" {...props} />;
    // }

    public onGridSearchChanged = (event: any) => {

        let term = event.value;

        if (!this.grid) {
            return;
        }

        if (!term || term.length === 0) {
            this.grid.filterExpressions.clear();
        } else {
            let ff = FilterFactory.instance;
            let filter = ff.property("Category").toLower().contains(ff.literal(term).toLower())
                .or(ff.property("Type").toLower().contains(ff.literal(term).toLower()))
                .or(ff.property("Contract").toLower().contains(ff.literal(term).toLower()))
                .or(ff.property("Settlement").toLower().contains(ff.literal(term).toLower()))
                .or(ff.property("Region").toLower().contains(ff.literal(term).toLower()))
                .or(ff.property("Country").toLower().contains(ff.literal(term).toLower()));

            this.grid.filterExpressions.clear();
            this.grid.filterExpressions.add(filter);
        }
    }

    public onGridColumnHidden = (event: any) => {
        let options = event.target.value;
        // console.log(event.target);
        let hidden = [];
        let hiddenSet = new Set<string>();
        for (let i = 0, l = options.length; i < l; i += 1) {
            hidden.push(options[i]);
            hiddenSet.add(options[i]);
        }
        this.setState({
            hiddenColumns: hidden,
        });

        if (!this.grid) {
            return;
        }
        for (let i = 0; i < this.grid.actualColumns.count; i++) {
            let col = this.grid.actualColumns.item(i);
            if (hiddenSet.has(col.name || col.field)) {
                if (!col.isHidden) {
                    col.isHidden = true;
                }
            } else {
                if (col.isHidden) {
                    col.isHidden = false;
                }
            }
        }
    }

}
// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataGridBindingLiveData/>);
