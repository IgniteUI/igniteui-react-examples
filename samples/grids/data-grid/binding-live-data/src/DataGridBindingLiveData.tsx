import React, { Component } from 'react';
import './DataGridBindingLiveData.css';
import { LiveFinancialData } from './LiveFinancialData';
import { TaskUtil } from './TaskUtil';
// IgrDataGrid modules
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrTemplateColumn } from 'igniteui-react-grids';
import { IgrColumn } from 'igniteui-react-grids';
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
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';

IgrDataGridModule.register();
IgrDataChartAnnotationModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartInteractivityModule.register();
IgrNumberAbbreviatorModule.register();

interface IAppState {
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

export default class DataGridBindingLiveData extends Component<any, IAppState> {

    public chart: IgrDataChart;
    public grid: IgrDataGrid;
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

        this.onGridRef = this.onGridRef.bind(this);
        this.onGridStyleKey = this.onGridStyleKey.bind(this);
        this.onGridCellUpdating = this.onGridCellUpdating.bind(this);
        this.onPricePercentStyleKey = this.onPricePercentStyleKey.bind(this);
        this.onPricePercentCellUpdating = this.onPricePercentCellUpdating.bind(this);
        this.onPriceAmountStyleKey = this.onPriceAmountStyleKey.bind(this);
        this.onPriceAmountCellUpdating = this.onPriceAmountCellUpdating.bind(this);
        this.onGridGroupingChanged = this.onGridGroupingChanged.bind(this);
        this.onGridCanvasModeChanged = this.onGridCanvasModeChanged.bind(this);
        this.onGridHeatModeChanged = this.onGridHeatModeChanged.bind(this);
        this.onGridColumnHidden = this.onGridColumnHidden.bind(this);
        this.onGridSearchChanged = this.onGridSearchChanged.bind(this);

        this.onChartRef = this.onChartRef.bind(this);
        this.onChartClose = this.onChartClose.bind(this);
        this.onChartStyleKey = this.onChartStyleKey.bind(this);
        this.onChartCellUpdating = this.onChartCellUpdating.bind(this);
        this.onChartClicked = this.onChartClicked.bind(this);

        this.onPriceFrequencyChanged = this.onPriceFrequencyChanged.bind(this);
        this.onPriceVolumeChanged = this.onPriceVolumeChanged.bind(this);
        this.onPriceDataBound = this.onPriceDataBound.bind(this);
        this.onPriceStyleKey = this.onPriceStyleKey.bind(this);
        this.onPriceCellUpdating = this.onPriceCellUpdating.bind(this);
        this.onLiveAllPricesClicked = this.onLiveAllPricesClicked.bind(this);
        this.onLiveSomePricesClicked = this.onLiveSomePricesClicked.bind(this);

        TaskUtil.start("generateData");
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
        TaskUtil.stop("generateData");
    }

    public render() {
        return (
            <div className="igContainer">

                <div className="toolArea">
                    <div className="toolAreaRow1">
                    <span>&nbsp;&nbsp;&nbsp;</span>

                    <FormControlLabel
                        label="Canvas" labelPlacement="top" style={{marginTop: "-35px", marginLeft: "0px" }}
                        control={
                            <Switch
                                checked={this.state.canvasChecked}
                                onChange={this.onGridCanvasModeChanged}
                                value="canvas"
                                color="primary"/>}/>

                    <FormControlLabel
                        label="Grouping" labelPlacement="top" style={{marginTop: "-35px", marginLeft: "0px" }}
                        control={
                            <Switch
                                checked={this.state.groupingChecked}
                                onChange={this.onGridGroupingChanged}
                                value="grouping"
                                color="primary"
                            />}/>
                    <FormControlLabel
                        label="Heat" labelPlacement="top" style={{marginTop: "-35px", marginLeft: "0px" }}
                        control={
                            <Switch
                                checked={this.state.heatChecked}
                                onChange={this.onGridHeatModeChanged}
                                value="heat"
                                color="primary"/>}/>

                        <div className="frequencySlider">
                            <Typography id="label">Frequency: {this.state.frequency / 1000}s</Typography>
                            <Slider
                                min={100}
                                max={1000}
                                step={100}
                                className="igOptions-slider"
                                value={this.state.frequency}
                                onChange={this.onPriceFrequencyChanged}/>
                        </div>

                        <div className="volumeSlider">
                            <Typography id="label">Volume: {this.state.volume / 1000}k</Typography>
                            <Slider
                                min={100}
                                max={10000}
                                step={100}
                                className="igOptions-slider"
                                value={this.state.volume}
                                onChange={this.onPriceVolumeChanged}/>
                        </div>

                        <Button variant="contained" color="primary" style={{marginTop: "-40px", marginRight: "5px" }}
                        disabled={this.state.liveSomePricesDisabled}
                        onClick={this.onLiveSomePricesClicked} >
                            {this.state.liveSomePricesText}
                        </Button>
                        <span>&nbsp;</span>
                        <Button variant="contained" color="secondary" style={{marginTop: "-40px", marginRight: "5px" }}
                        disabled={this.state.liveAllPricesDisabled}
                        onClick={this.onLiveAllPricesClicked} >
                            {this.state.liveAllPricesText}
                        </Button>
                        <span>&nbsp;</span>
                        <Button variant="contained" style={{marginTop: "-40px", marginRight: "5px" }}
                        onClick={this.onChartClicked} >
                            Chart
                        </Button>
                    </div>
                    <div className="toolAreaRow2">
                        <span>&nbsp;&nbsp;&nbsp;</span>

                        <span className="hiddenIcon">visibility_off</span>
                        <Select
                        className="hiddenDrop"
                        value={this.state.hiddenColumns}
                        multiple={true}
                        onChange={this.onGridColumnHidden}
                        input={<Input id="select-multiple-checkbox" />}
                        renderValue={selected => (selected as any).length ? ((selected as any).length + ' columns hidden') : '0 columns hidden'}
                        MenuProps={{
                            PaperProps: {
                                style: {
                                    maxHeight: 48 * 4.5 + 8,
                                    width: 250,
                                },
                            },
                        }}>
                        {this.state.allColumns.map(name => (
                            <MenuItem key={name} value={name}>
                                <Checkbox checked={this.state.hiddenColumns.indexOf(name) > -1} />
                                <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                        </Select>

                        <TextField
                        id="standard-search"
                        label="Search for grid values"
                        type="search"
                        className="searchField"
                        onChange={this.onGridSearchChanged}/>

                    </div>
                </div>

                <IgrDataGrid
                ref={this.onGridRef}
                width="100%"
                height="calc(100% - 120px)"
                key={this.state.canvasChecked ? "canvasGrid" : "domGrid" }
                useCanvas={this.state.canvasChecked}
                rowHeight="32"
                selectionMode="MultipleRow"
                autoGenerateColumns={false}
                headerClickAction={HeaderClickAction.SortByMultipleColumnsTriState}
                columnShowingAnimationMode="slideFromRightAndFadeIn"
                columnHidingAnimationMode="slideToRightAndFadeOut"
                dataSource={this.state.data}
                defaultColumnMinWidth="100">
                    <IgrTextColumn propertyPath="ID" width="*>90" isHidden="true"/>
                    <IgrTextColumn propertyPath="Category" width="*>120" />
                    <IgrTextColumn propertyPath="Type" width="*>90"    />
                    <IgrTextColumn propertyPath="Risk" width="*>100" />
                    <IgrTextColumn propertyPath="Contract" width="*>120" />
                    <IgrNumericColumn propertyPath="Open Price" width="*>130"/>
                    <IgrTemplateColumn propertyPath="Price" width="*>100"
                        horizontalAlignment="right"
                        cellStyleKeyRequested={this.onPriceStyleKey}
                        cellUpdating={this.onPriceCellUpdating}
                        dataBound={this.onPriceDataBound}/>

                    <IgrTemplateColumn propertyPath="Change" width=">*100"
                        horizontalAlignment="right"
                        cellStyleKeyRequested={this.onPriceAmountStyleKey}
                        cellUpdating={this.onPriceAmountCellUpdating}/>

                    <IgrTemplateColumn name="ChangePer" propertyPath="Change(%)" width="*>130"
                        horizontalAlignment="right"
                        cellStyleKeyRequested={this.onPricePercentStyleKey}
                        cellUpdating={this.onPricePercentCellUpdating}/>

                    <IgrTextColumn propertyPath="Settlement" width="*>130" />
                    <IgrTextColumn propertyPath="Region" width="*>130" />
                    <IgrTextColumn propertyPath="Country" width="*>120" />
                    <IgrNumericColumn propertyPath="Buy" width="*>110"/>
                    <IgrNumericColumn propertyPath="Sell" width="*>110"/>
                    <IgrNumericColumn propertyPath="Spread" width="*>110"/>
                    <IgrNumericColumn propertyPath="Volume" width="*>110"/>
                    <IgrNumericColumn propertyPath="High(D)" width="*>110"/>
                    <IgrNumericColumn propertyPath="Low(D)" width="*>110"/>
                    <IgrNumericColumn propertyPath="High(Y)" width="*>110"/>
                    <IgrNumericColumn propertyPath="Low(Y)" width="*>110"/>
                    <IgrNumericColumn propertyPath="Start(Y)" width="*>110"/>
                    <IgrTemplateColumn propertyPath="Chart" width="*>60"
                        cellStyleKeyRequested={this.onChartStyleKey}
                        cellUpdating={this.onChartCellUpdating}/>
                    <IgrTemplateColumn propertyPath="Grid" width="*>80"
                        cellStyleKeyRequested={this.onGridStyleKey}
                        cellUpdating={this.onGridCellUpdating} />
                    <IgrTextColumn propertyPath="IndGroup" width="*>100" />
                    <IgrTextColumn propertyPath="IndSector" width="*>120"/>
                    <IgrTextColumn propertyPath="IndCategory" width="*>100" />
                    <IgrTextColumn propertyPath="Sector" width="*>90" />
                    <IgrTextColumn propertyPath="Issuer" width="*>170"/>
                    <IgrTextColumn propertyPath="Rating" width="*>60" />
                    <IgrTextColumn propertyPath="Currency" width="*>60" />
                    <IgrTextColumn propertyPath="Security" width="*>120" />
                    <IgrNumericColumn propertyPath="Transactions" width="*>150" />
                    <IgrNumericColumn propertyPath="CPN" width="*>80" />
                    <IgrTextColumn propertyPath="Maturity" width="*>120" />
                    <IgrTextColumn propertyPath="Collateral" width="*>90" />
                    <IgrNumericColumn propertyPath="KRD_3YR" width="*>120" />
                    <IgrNumericColumn propertyPath="KRD_5YR" width="*>120" />
                    <IgrNumericColumn propertyPath="KRD_1YR" width="*>120" />
                </IgrDataGrid>

                <Dialog
                    className="chartDialog"
                    open={this.state.chartOpen}
                    // TransitionComponent={this.transition}
                    maxWidth="md"
                    fullWidth={true}
                    keepMounted={true}
                    onClose={this.onChartClose}>
                    {/* <DialogTitle>
                        {"IgrDataChart"}
                    </DialogTitle> */}
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
                </Dialog>
            </div>
        );
    }

    public onGridRef(grid: IgrDataGrid) {
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

            let name = col.name || col.propertyPath;
            columns.push(name);
        }
        this.setState({ allColumns: columns });
    }

    public onTimerTick()
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
            if (this.grid.sortDescriptions.item(i).propertyPath === "Price" ||
            this.grid.sortDescriptions.item(i).propertyPath.indexOf("Change") >= 0) {
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

    public updatePricesByCountry() {
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
        console.log('updatePricesByCountry ' + this.state.pricesByCountry);

        if (shouldPopulate) {
            console.log('updatePricesByCountry shouldPopulate');
            countryNames = countryNames.sort();
            for (const name of countryNames) {
                this.state.pricesByCountry.push({
                    Country: name,
                    Price: pricesByCountry.get(name)
                })
            }
        } else {
            for (let i = 0; i < this.state.pricesByCountry.length; i++) {
                const country = this.state.pricesByCountry[i].Country
                this.state.pricesByCountry[i].Price = pricesByCountry.get(country);
            }
        }
    }

    // cellStyleKeyRequested?: (s: IgrDefinitionBase, e: IgrCellStyleRequestedEventArgs) => void;
    public onPriceStyleKey(grid: any, args: IgrCellStyleRequestedEventArgs) {
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

    public onPriceCellUpdating(grid: any, args: IgrTemplateCellUpdatingEventArgs) {
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

    public onPricePercentStyleKey(grid: any, args: IgrCellStyleRequestedEventArgs) {
        if (args.resolvedValue >= 0) {
            args.styleKey = "pricePercentUp";
        } else {
            args.styleKey = "pricePercentDown";
        }
    }

    public onPricePercentCellUpdating(grid: any, args: IgrTemplateCellUpdatingEventArgs) {
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

    public onChartStyleKey(grid: any, args: IgrCellStyleRequestedEventArgs) {
        args.styleKey = "igComponent";
    }

    public onChartCellUpdating(grid: any, args: IgrTemplateCellUpdatingEventArgs) {
        if (args.isCanvasBased) {
            return;
        }
        let templ = args.cellInfo as IgrTemplateCellInfo;

        let content = args.content as HTMLDivElement;
        let icon: HTMLSpanElement;

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
            icon.textContent = "insertchart_outlined";
        }

    }

    public onGridStyleKey(grid: any, args: IgrCellStyleRequestedEventArgs) {
        args.styleKey = "grid";
    }

    public onGridCellUpdating(grid: any, args: IgrTemplateCellUpdatingEventArgs) {
        if (args.isCanvasBased) {
            return;
        }

        let content = args.content as HTMLDivElement;
        let icon: HTMLSpanElement;

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
            icon.textContent = "tablechart";
        }
    }

    public startTicking() {
        if (!this.isTimerTicking) {
            this.isTimerTicking = true;
            window.setTimeout(() => this.onTimerTick(), 16);
        }
    }

    public stopTicking() {
        if (this.isTimerTicking) {
            this.isTimerTicking = false;
        }
    }

    public onLiveSomePricesClicked() {
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

    public onLiveAllPricesClicked() {
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

    public onChartClicked() {
        this.updatePricesByCountry();
            this.setState({
                chartOpen: true
            });
    }

    // onChange?: (event: React.ChangeEvent<{}>, value: number | number[]) => void;
    // public onPriceFrequencyChanged(event: any, value: number) {
    // public onPriceFrequencyChanged(event: any, value: number | number[]) {
        public onPriceFrequencyChanged(event: any, input: any) {
    // public onPriceFrequencyChanged(event: React.ChangeEvent<{}>, value: number) {
        let value = parseFloat(input.toString());
        this.setState({
            frequency: value,
        });
    }

    public onPriceVolumeChanged(event: any, input: any) {
        let value = parseFloat(input.toString());
        this.setState({
            volume: value,
            data: LiveFinancialData.generateData(value)
        });
        this.grid.dataSource = this.state.data;
    }

    public onGridCanvasModeChanged(event: any) {
        this.setState({ canvasChecked: event.target.checked });
    }

    public onGridHeatModeChanged(event: any) {
        this.setState({ heatChecked: event.target.checked });
    }

    public onGridGroupingChanged(event: any) {
        this.setState({ groupingChecked: event.target.checked });

        if (event.target.checked) {
            this.onGridGroupingAdd();
        } else {
            this.onGridGroupingRemove();
        }
    }

    public onGridGroupingRemove() {
        this.grid.groupDescriptions.clear();
        this.grid.flush();
    }

    public onGridGroupingAdd() {
        let g = new IgrColumnGroupDescription();
        g.propertyPath = "Category";
        g.sortDirection = ListSortDirection.Descending;
        this.grid.groupDescriptions.add(g);

        g = new IgrColumnGroupDescription();
        g.propertyPath = "Type";
        g.sortDirection = ListSortDirection.Descending;
        this.grid.groupDescriptions.add(g);

        g = new IgrColumnGroupDescription();
        g.propertyPath = "Contract";
        g.sortDirection = ListSortDirection.Descending;
        this.grid.groupDescriptions.add(g);
    }

    public onPriceDataBound(sender: any, args: IgrDataBindingEventArgs) {
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

    public onChartClose() {
        this.setState({ chartOpen: false });
    }

    public onChartRef(chart: IgrDataChart) {
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

    public transition(props: any) {
        return <Slide direction="up" {...props} />;
    }

    public onGridSearchChanged(event: any) {
        let term = event.target.value;

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

    public onGridColumnHidden(event: any) {
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
            if (hiddenSet.has(col.name || col.propertyPath)) {
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