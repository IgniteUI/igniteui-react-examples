import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './DockManagerStyles.css';
import WorldUtils from "./WorldUtils"
import { DockManagerSharedData } from "./DockManagerSharedData";
import { IgrGeographicMap, IgrGeographicMapModule } from "igniteui-react-maps";
import { IgrGeographicSymbolSeries } from 'igniteui-react-maps';
import { IgrArcGISOnlineMapImagery } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrDataContext } from 'igniteui-react-core';
import { IgrCategoryChartModule, MarkerType, ToolTipType, YAxisLabelLocation } from "igniteui-react-charts";
import { IgrCategoryChart, CategoryTransitionInMode, CategoryChartType } from "igniteui-react-charts";
import { IgrLegendModule } from "igniteui-react-charts";
import { IgrDockManager, IgrContentPane, IgrDockManagerPaneType, IgrSplitPaneOrientation } from 'igniteui-react-dockmanager';
import { defineCustomElements } from "igniteui-dockmanager/loader";

/* eslint-disable */
declare global {
    namespace JSX {
        // tslint:disable-next-line:interface-name
        interface IntrinsicElements {
            "igc-dockmanager": any;
        }
    }
}
/* eslint-enable */

defineCustomElements();

IgrCategoryChartModule.register();
IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();
IgrLegendModule.register();

export default class DockManagerUpdatingPanes extends React.Component<any, any> {
    private chart: IgrCategoryChart;
    private map: IgrGeographicMap;
    private dockManager: IgrDockManager;
    private employeesDatabase = DockManagerSharedData.getEmployees(60);

    private employeeListContainer: HTMLDivElement;
    private employeeListPane: IgrContentPane;
    private employeesList: HTMLDivElement[] = [];

    private productivityChart: IgrCategoryChart;
    private productivityChartPane: IgrContentPane;
    private productivityChartContainer: HTMLDivElement;

    private geoLocationMap: IgrGeographicMap;
    private geoLocationMapPane: IgrContentPane;
    private geoLocationMapContainer: HTMLDivElement;
    private geoLocationSeries: IgrGeographicSymbolSeries;

    constructor(props: any) {
        super(props);

        this.mapRef = this.mapRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
        this.dockManagerRef = this.dockManagerRef.bind(this);

        this.createEmployeeList = this.createEmployeeList.bind(this);
        this.createLocationMapTooltip = this.createLocationMapTooltip.bind(this);
        this.createProductivityChart = this.createProductivityChart.bind(this);

        this.createLocationMap = this.createLocationMap.bind(this);
        this.onEmployeeClick = this.onEmployeeClick.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrDockManager id="dockManager" ref={this.dockManagerRef}>
                    <div
                        className="dockManagerContent"
                        slot="employeeListContainer"
                        id="employeeListContainer"/>
                    <div
                        className="dockManagerContent"
                        slot="productivityChartContainer"
                        id="productivityChartContainer">
                            <IgrCategoryChart
                                key="productivityChart"
                                ref={this.chartRef}
                                width="calc(100% - 2rem)"
                                height="100%"/>
                    </div>
                    <div
                        className="dockManagerContent"
                        slot="geoLocationMapContainer"
                        id="geoLocationMapContainer" >
                            <IgrGeographicMap
                                ref={this.mapRef}
                                key="geoLocationMap"
                                width="100%"
                                height="100%"/>
                    </div>
                </IgrDockManager>
            </div>
        );
    }

    private chartRef(chart: IgrCategoryChart) {
        this.chart = chart;
        if (this.chart && this.map && this.dockManager) {
            this.onReady();
        }
    }

    private mapRef(map: IgrGeographicMap) {
        this.map = map;
        if (this.chart && this.map && this.dockManager) {
            this.onReady();
        }
    }

    private dockManagerRef(dockManager: IgrDockManager) {
        this.dockManager = dockManager;
        if (this.chart && this.map && this.dockManager) {
            this.onReady();
        }
    }

    private onReady() {
        this.createEmployeeList();
        this.createLocationMap();
        this.createProductivityChart();

        this.employeeListContainer = document.getElementById("employeeListContainer") as HTMLDivElement;
        this.geoLocationMapContainer = document.getElementById("geoLocationMapContainer") as HTMLDivElement;
        this.productivityChartContainer = document.getElementById("productivityChartContainer") as HTMLDivElement;
        this.productivityChartContainer.style.overflow = "hidden";

        this.productivityChartPane = {
            size: 150,
            header: "EMPLOYEE PRODUCTIVITY",
            type: IgrDockManagerPaneType.contentPane,
            contentId: "productivityChartContainer"
        };

        this.geoLocationMapPane = {
            size: 150,
            header: "EMPLOYEE LOCATIONS",
            type: IgrDockManagerPaneType.contentPane,
            contentId: "geoLocationMapContainer"
        };

        this.employeeListPane = {
            header: "EMPLOYEE LIST",
            type: IgrDockManagerPaneType.contentPane,
            contentId: "employeeListContainer"
        };

        this.dockManager.layout = {
            rootPane: {
                type: IgrDockManagerPaneType.splitPane,
                orientation: IgrSplitPaneOrientation.horizontal,
                panes: [
                    {
                        type: IgrDockManagerPaneType.splitPane,
                        orientation: IgrSplitPaneOrientation.vertical,
                        size: 100,
                        panes: [this.employeeListPane]
                    },
                    {
                        type: IgrDockManagerPaneType.splitPane,
                        orientation: IgrSplitPaneOrientation.vertical,
                        size: 300,
                        panes: [this.productivityChartPane, this.geoLocationMapPane]
                    }
                ]
            }
        };

        this.onEmployeeClick(this.employeesDatabase[0]);
    }

    public createProductivityChart() {
        this.productivityChart = this.chart;
        this.productivityChart.includedProperties = ["Value", "Month"];
        this.productivityChart.chartType = CategoryChartType.Column;
        this.productivityChart.thickness = 1;
        this.productivityChart.yAxisLabelLocation = YAxisLabelLocation.OutsideRight;
        this.productivityChart.yAxisLabelRightMargin = 20;
        this.productivityChart.yAxisMinimumValue = 25;
        this.productivityChart.yAxisMaximumValue = 100;
        this.productivityChart.yAxisInterval = 25;
        this.productivityChart.xAxisInterval = 1;
        this.productivityChart.width = "100%";
        this.productivityChart.height = "100%";
        this.productivityChart.transitionDuration = 100;
        this.productivityChart.transitionInDuration = 1000;
        this.productivityChart.isSeriesHighlightingEnabled = true;
        this.productivityChart.crosshairsAnnotationEnabled = true;
        this.productivityChart.crosshairsSnapToData = true;
        this.productivityChart.toolTipType = ToolTipType.Item;

        this.productivityChart.transitionInMode = CategoryTransitionInMode.AccordionFromBottom;
    }

    public createEmployeeList() {

        let employeeListContainer = document.getElementById("employeeListContainer") as HTMLDivElement;
        employeeListContainer.style.width = "calc(100% - 1rem)";
        employeeListContainer.style.height = "calc(100% - 1rem)";
        // employeeListContainer.style.overflowY = "scroll";
        employeeListContainer.style.display = "flex";
        employeeListContainer.style.flexDirection = "column";

        for (const employee of this.employeesDatabase) {
            let employeeName = document.createElement("div");
            employeeName.style.paddingLeft = "1rem";
            employeeName.textContent = employee.Name;
            // let employeeSurname = document.createElement("div");
            // employeeSurname.style.paddingLeft = "1rem";
            // employeeSurname.textContent = employee.LastName;
            let employeePhoto = document.createElement("img");
            employeePhoto.height = 50;
            employeePhoto.width = 50;
            employeePhoto.src = employee.Photo;

            let employeeListItem = document.createElement("div");
            employeeListItem.id = employee.ID;
            employeeListItem.style.height = "3rem";
            employeeListItem.style.display = "flex";
            employeeListItem.style.flexDirection = "row";
            employeeListItem.style.paddingLeft = "0.5rem";
            employeeListItem.style.paddingTop = "0.5rem";
            employeeListItem.style.paddingBottom = "0.5rem";
            employeeListItem.style.alignItems = "center";
            employeeListItem.style.cursor = "pointer";
            employeeListItem.appendChild(employeePhoto);
            employeeListItem.appendChild(employeeName);
            employeeListItem.addEventListener("click", e =>
                this.onEmployeeClick(employee)
            );
            // employeeListItem.appendChild(employeeSurname);

            employeeListContainer.appendChild(employeeListItem);
            this.employeesList.push(employeeListItem);
        }
    }

    public createLocationMap() {
        let allLocationSeries = new IgrGeographicSymbolSeries({
            name: "symbolSeries1"
        });
        allLocationSeries.latitudeMemberPath = "Latitude";
        allLocationSeries.longitudeMemberPath = "Longitude";
        allLocationSeries.dataSource = this.employeesDatabase;
        allLocationSeries.markerType = MarkerType.Circle;
        allLocationSeries.markerBrush = "white";
        allLocationSeries.markerOutline = "Red";
        allLocationSeries.tooltipTemplate = this.createLocationMapTooltip;

        this.geoLocationSeries = new IgrGeographicSymbolSeries({
            name: "symbolSeries2"
        });
        this.geoLocationSeries.latitudeMemberPath = "Latitude";
        this.geoLocationSeries.longitudeMemberPath = "Longitude";
        this.geoLocationSeries.dataSource = [];
        this.geoLocationSeries.markerType = MarkerType.Circle;
        this.geoLocationSeries.markerBrush = "white";
        this.geoLocationSeries.markerOutline = "LimeGreen";
        this.geoLocationSeries.tooltipTemplate = this.createLocationMapTooltip;

        const tileSource = new IgrArcGISOnlineMapImagery();
        tileSource.mapServerUri = "https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer";

        this.geoLocationMap = this.map;
        this.geoLocationMap.height = "100%";
        this.geoLocationMap.width = "100%";
        this.geoLocationMap.series.add(allLocationSeries);
        this.geoLocationMap.series.add(this.geoLocationSeries);
        this.geoLocationMap.backgroundContent = tileSource;
    }

    public createLocationMapTooltip(tooltipProps: any) {
        const dataContext = tooltipProps.dataContext as IgrDataContext;
        if (!dataContext) return null;

        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        const lbl = dataItem.City;
        const scr = dataItem.CountryFlag;
        const lat = WorldUtils.toStringLat(dataItem.Latitude);
        const lon = WorldUtils.toStringLon(dataItem.Longitude);

        return <div className="tooltipHorizontal">
            <img className="tooltipFlagImage" src={scr}/>
            <div className="tooltipBox">
                <div className="tooltipRow">
                    <div className="tooltipLbl">Latitude:</div>
                    <div className="tooltipVal">{lat}</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">Longitude:</div>
                    <div className="tooltipVal">{lon}</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">City: </div>
                    <div className="tooltipVal">{lbl}</div>
                </div>
            </div>
        </div>
    }

    public onEmployeeClick(employee: any) {

        for (const employeeListItem of this.employeesList) {
            if (employeeListItem.id !== employee.ID) {
                employeeListItem.style.background = "transparent";
            } else {
                employeeListItem.style.background = "#a8d3fd";

                this.geoLocationSeries.dataSource = [employee];
                this.productivityChart.dataSource = employee.Productivity;

                let geoZoom: any = {};
                geoZoom.width = 50;
                geoZoom.height = 25;
                geoZoom.left = employee.Longitude - geoZoom.width / 2;
                geoZoom.top = employee.Latitude - geoZoom.height / 2;
                this.geoLocationMap.zoomToGeographic(geoZoom);
            }
        }
    }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DockManagerUpdatingPanes/>);
