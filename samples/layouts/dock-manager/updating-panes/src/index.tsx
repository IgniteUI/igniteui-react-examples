import { useLayoutEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './DockManagerStyles.css';
import WorldUtils from "./WorldUtils"
import { DockManagerSharedData } from "./DockManagerSharedData";
import { IgrGeographicMap, IgrGeographicMapModule } from "igniteui-react-maps";
import { IgrGeographicSymbolSeries } from 'igniteui-react-maps';
import { IgrArcGISOnlineMapImagery } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import type { IChartTooltipProps, IgRect } from 'igniteui-react-core';
import { IgrCategoryChartModule, MarkerType, ToolTipType, YAxisLabelLocation } from "igniteui-react-charts";
import { IgrCategoryChart, CategoryTransitionInMode, CategoryChartType } from "igniteui-react-charts";
import { IgrLegendModule } from "igniteui-react-charts";
import { IgrDockManager, IgrContentPane, IgrDockManagerPaneType, IgrSplitPaneOrientation } from 'igniteui-react-dockmanager';

IgrCategoryChartModule.register();
IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();
IgrLegendModule.register();

// Fields of DockManagerSharedData.getEmployees() items this sample reads
interface Employee {
    ID: string;
    Name: string;
    Photo: string;
    City: string;
    CountryFlag: string;
    Latitude: number;
    Longitude: number;
    Productivity: object[];
}

function createLocationMapTooltip(tooltipProps: IChartTooltipProps) {
    const dataContext = tooltipProps.dataContext;
    if (!dataContext) {
        return null;
    }

    const dataItem = dataContext.item as Employee;
    if (!dataItem) {
        return null;
    }

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

export default function DockManagerUpdatingPanes() {
    const chartRef = useRef<IgrCategoryChart>(null);
    const mapRef = useRef<IgrGeographicMap>(null);
    const dockManagerRef = useRef<IgrDockManager>(null);

    const [employeesDatabase] = useState<Employee[]>(() => DockManagerSharedData.getEmployees(60));
    const employeesList = useRef<HTMLDivElement[]>([]);
    const geoLocationSeries = useRef<IgrGeographicSymbolSeries | null>(null);

    // Layout effect: runs in the same commit that attaches the refs, like the
    // callback refs that used to trigger onReady
    useLayoutEffect(() => {
        onReady();
    }, []);

    function onReady() {
        createEmployeeList();
        createLocationMap();
        createProductivityChart();

        const productivityChartContainer = document.getElementById("productivityChartContainer") as HTMLDivElement;
        productivityChartContainer.style.overflow = "hidden";

        const productivityChartPane: IgrContentPane = {
            size: 150,
            header: "EMPLOYEE PRODUCTIVITY",
            type: IgrDockManagerPaneType.contentPane,
            contentId: "productivityChartContainer"
        };

        const geoLocationMapPane: IgrContentPane = {
            size: 150,
            header: "EMPLOYEE LOCATIONS",
            type: IgrDockManagerPaneType.contentPane,
            contentId: "geoLocationMapContainer"
        };

        const employeeListPane: IgrContentPane = {
            header: "EMPLOYEE LIST",
            type: IgrDockManagerPaneType.contentPane,
            contentId: "employeeListContainer"
        };

        dockManagerRef.current!.layout = {
            rootPane: {
                type: IgrDockManagerPaneType.splitPane,
                orientation: IgrSplitPaneOrientation.horizontal,
                panes: [
                    {
                        type: IgrDockManagerPaneType.splitPane,
                        orientation: IgrSplitPaneOrientation.vertical,
                        size: 100,
                        panes: [employeeListPane]
                    },
                    {
                        type: IgrDockManagerPaneType.splitPane,
                        orientation: IgrSplitPaneOrientation.vertical,
                        size: 300,
                        panes: [productivityChartPane, geoLocationMapPane]
                    }
                ]
            }
        };

        onEmployeeClick(employeesDatabase[0]);
    }

    function createProductivityChart() {
        const productivityChart = chartRef.current!;
        productivityChart.includedProperties = ["Value", "Month"];
        productivityChart.chartType = CategoryChartType.Column;
        productivityChart.thickness = 1;
        productivityChart.yAxisLabelLocation = YAxisLabelLocation.OutsideRight;
        productivityChart.yAxisLabelRightMargin = 20;
        productivityChart.yAxisMinimumValue = 25;
        productivityChart.yAxisMaximumValue = 100;
        productivityChart.yAxisInterval = 25;
        productivityChart.xAxisInterval = 1;
        productivityChart.width = "100%";
        productivityChart.height = "100%";
        productivityChart.transitionDuration = 100;
        productivityChart.transitionInDuration = 1000;
        productivityChart.isSeriesHighlightingEnabled = true;
        productivityChart.crosshairsAnnotationEnabled = true;
        productivityChart.crosshairsSnapToData = true;
        productivityChart.toolTipType = ToolTipType.Item;

        productivityChart.transitionInMode = CategoryTransitionInMode.AccordionFromBottom;
    }

    function createEmployeeList() {

        let employeeListContainer = document.getElementById("employeeListContainer") as HTMLDivElement;
        employeeListContainer.style.width = "calc(100% - 1rem)";
        employeeListContainer.style.height = "calc(100% - 1rem)";
        // employeeListContainer.style.overflowY = "scroll";
        employeeListContainer.style.display = "flex";
        employeeListContainer.style.flexDirection = "column";

        for (const employee of employeesDatabase) {
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
            employeeListItem.addEventListener("click", () =>
                onEmployeeClick(employee)
            );
            // employeeListItem.appendChild(employeeSurname);

            employeeListContainer.appendChild(employeeListItem);
            employeesList.current.push(employeeListItem);
        }
    }

    function createLocationMap() {
        let allLocationSeries = new IgrGeographicSymbolSeries({
            name: "symbolSeries1"
        });
        allLocationSeries.latitudeMemberPath = "Latitude";
        allLocationSeries.longitudeMemberPath = "Longitude";
        allLocationSeries.dataSource = employeesDatabase;
        allLocationSeries.markerType = MarkerType.Circle;
        allLocationSeries.markerBrush = "white";
        allLocationSeries.markerOutline = "Red";
        allLocationSeries.tooltipTemplate = createLocationMapTooltip;

        const series = new IgrGeographicSymbolSeries({
            name: "symbolSeries2"
        });
        series.latitudeMemberPath = "Latitude";
        series.longitudeMemberPath = "Longitude";
        series.dataSource = [];
        series.markerType = MarkerType.Circle;
        series.markerBrush = "white";
        series.markerOutline = "LimeGreen";
        series.tooltipTemplate = createLocationMapTooltip;
        geoLocationSeries.current = series;

        const tileSource = new IgrArcGISOnlineMapImagery();
        tileSource.mapServerUri = "https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer";

        const geoLocationMap = mapRef.current!;
        geoLocationMap.height = "100%";
        geoLocationMap.width = "100%";
        geoLocationMap.series.add(allLocationSeries);
        geoLocationMap.series.add(series);
        geoLocationMap.backgroundContent = tileSource;
    }

    function onEmployeeClick(employee: Employee) {

        for (const employeeListItem of employeesList.current) {
            if (employeeListItem.id !== employee.ID) {
                employeeListItem.style.background = "transparent";
            } else {
                employeeListItem.style.background = "#a8d3fd";

                geoLocationSeries.current!.dataSource = [employee];
                chartRef.current!.dataSource = employee.Productivity;

                const width = 50;
                const height = 25;
                const geoZoom: IgRect = {
                    width,
                    height,
                    left: employee.Longitude - width / 2,
                    top: employee.Latitude - height / 2,
                };
                mapRef.current!.zoomToGeographic(geoZoom);
            }
        }
    }

    return (
        <div className="container sample">
            <IgrDockManager id="dockManager" ref={dockManagerRef}>
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
                            ref={chartRef}
                            width="calc(100% - 2rem)"
                            height="100%"/>
                </div>
                <div
                    className="dockManagerContent"
                    slot="geoLocationMapContainer"
                    id="geoLocationMapContainer" >
                        <IgrGeographicMap
                            ref={mapRef}
                            key="geoLocationMap"
                            width="100%"
                            height="100%"/>
                </div>
            </IgrDockManager>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<DockManagerUpdatingPanes/>);
