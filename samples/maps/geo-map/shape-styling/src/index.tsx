import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WorldUtils from "./WorldUtils"
import { ShapeStyling } from './MapShapeStyleUtility';
import { ShapeScaleStyling } from './MapShapeStyleUtility';
import { ShapeRangeStyling } from './MapShapeStyleUtility';
import { ShapeRandomStyling } from './MapShapeStyleUtility';
import { ShapeComparisonStyling } from './MapShapeStyleUtility';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicShapeSeries } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrShapeDataSource } from 'igniteui-react-core';
import { IgrShapefileRecord } from 'igniteui-react-core';
import { IgrStyleShapeEventArgs } from 'igniteui-react-charts';
import { IgrDataContext } from 'igniteui-react-core';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapShapeStyling extends React.Component<any, any> {

    public geoMap: IgrGeographicMap;
    public geoSeries: IgrGeographicShapeSeries;
    public shapeRecords: any[] = [];

    public currentShapeStyling: ShapeStyling;
    public shapeRandomStyling: ShapeRandomStyling;
    public shapeComparisonStyling: ShapeComparisonStyling;
    public shapeScaleStyling: ShapeScaleStyling;
    public shapeRangeStyling: ShapeRangeStyling;

    constructor(props: any) {
        super(props);

        this.state = { stylingType: "ShapeComparisonStyling"}

        this.onMapRef = this.onMapRef.bind(this);
        this.onDataLoaded = this.onDataLoaded.bind(this);
        this.onOptionsSelected = this.onOptionsSelected.bind(this);
        this.onStylingShape = this.onStylingShape.bind(this);
        this.createTooltip = this.createTooltip.bind(this);

        // setting up ShapeRandomStyling:
        this.shapeRandomStyling = new ShapeRandomStyling();
        this.shapeRandomStyling.shapeStrokeColors = ['Black'];
        this.shapeRandomStyling.shapeFillColors = ['#8C23D1', '#0E9759', '#B4D336', '#F2A464', '#D74545', 'DodgerBlue'];

        // setting up ShapeScaleStyling:
        this.shapeScaleStyling = new ShapeScaleStyling();
        this.shapeScaleStyling.defaultFill = 'Gray';
        this.shapeScaleStyling.shapeStrokeColors = ['Black'];
        this.shapeScaleStyling.shapeFillColors = ['DodgerBlue', 'yellow', '#c2f542', '#e8c902', '#e8b602', '#e87902', 'brown'];
        this.shapeScaleStyling.itemMinimumValue = 5000;
        this.shapeScaleStyling.itemMaximumValue = 2000000000; // 2 Billions
        this.shapeScaleStyling.itemMemberPath = 'Population';
        this.shapeScaleStyling.isLogarithmic = true;

        // setting up ShapeComparisonStyling:
        this.shapeRangeStyling = new ShapeRangeStyling();
        this.shapeRangeStyling.defaultFill = 'Gray';
        this.shapeRangeStyling.itemMemberPath = 'Population';
        this.shapeRangeStyling.ranges = [
            { fill: 'yellow', minimum: 5000, maximum: 10000000, },        // 5 K - 10 M
            { fill: 'orange', minimum: 10000000, maximum: 100000000, },   // 10 M - 100 M
            { fill: 'red',    minimum: 100000000, maximum: 500000000, },  // 100 M - 500 M
            { fill: 'brown',  minimum: 500000000, maximum: 2000000000, }, // 500 M - 2 B
        ];

        // setting up ShapeComparisonStyling:
        this.shapeComparisonStyling = new ShapeComparisonStyling();
        this.shapeComparisonStyling.defaultFill = 'Gray';
        this.shapeComparisonStyling.itemMemberPath = 'Region';
        this.shapeComparisonStyling.itemMappings = [
            { fill: 'Red', itemValue: 'Central Asia' },
            { fill: 'Red', itemValue: 'Eastern Asia' },
            { fill: 'Orange', itemValue: 'Southern Asia' },
            { fill: 'Orange', itemValue: 'Middle East' },
            { fill: 'Orange', itemValue: 'Northern Africa' },
            { fill: 'Yellow', itemValue: 'Eastern Africa' },
            { fill: 'Yellow', itemValue: 'Western Africa' },
            { fill: 'Yellow', itemValue: 'Middle Africa' },
            { fill: 'Yellow', itemValue: 'Southern Africa' },
            { fill: 'DodgerBlue', itemValue: 'Central America' },
            { fill: 'DodgerBlue', itemValue: 'Northern America' },
            { fill: 'DodgerBlue', itemValue: 'Western Europe' },
            { fill: 'DodgerBlue', itemValue: 'Southern Europe' },
            { fill: 'DodgerBlue', itemValue: 'Northern Europe' },
            { fill: 'DodgerBlue', itemValue: 'Eastern Europe' },
            { fill: '#22c928', itemValue: 'South America' },
            { fill: '#b64fff', itemValue: 'Melanesia' },
            { fill: '#b64fff', itemValue: 'Micronesia' },
            { fill: '#b64fff', itemValue: 'Polynesia' },
            { fill: '#b64fff', itemValue: 'Australia' },
            // { fill: 'Gray', itemValue: 'Antarctica' },
        ];

        // setting default value for current shape styling
        this.currentShapeStyling = this.shapeComparisonStyling;
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <label >Shape Styling:</label>
                    <select value={this.state.stylingType}
                            onChange={this.onOptionsSelected}
                            style={{width: "14rem"}}>
                            <option>ShapeComparisonStyling</option>
                            <option>ShapeScaleStyling</option>
                            <option>ShapeRangeStyling</option>
                            <option>ShapeRandomStyling</option>
                    </select>
                </div>
                <div className="container" >
                    <IgrGeographicMap
                        ref={this.onMapRef}
                        width="100%"
                        height="100%"
                        zoomable="true"/>
                </div>
            </div>
        );
    }

    public onMapRef(geoMap: IgrGeographicMap) {
        if (!geoMap) { return; }

        this.geoMap = geoMap;
        this.geoMap.backgroundContent = undefined;

        // loading a shapefile with geographic polygons
        const sds = new IgrShapeDataSource();
        sds.importCompleted = this.onDataLoaded;
        sds.shapefileSource = "https://static.infragistics.com/xplatform/shapes/world_countries_all.shp";
        sds.databaseSource  = "https://static.infragistics.com/xplatform/shapes/world_countries_all.dbf";
        sds.dataBind();
    }

    public onDataLoaded(sds: IgrShapeDataSource, e: any) {
        this.shapeRecords = sds.getPointData();
        console.log("loaded WorldCountries.shp " +  this.shapeRecords.length);

        this.geoSeries = new IgrGeographicShapeSeries ( { name: "series" });
        this.geoSeries.dataSource = this.shapeRecords;
        this.geoSeries.shapeMemberPath = "points";
        this.geoSeries.brush = "rgba(146, 146, 146, 0.6)";
        this.geoSeries.outline = "Black";
        this.geoSeries.tooltipTemplate = this.createTooltip;
        this.geoSeries.thickness = 1;
        // adding event handler for styleShape
        this.geoSeries.styleShape = this.onStylingShape;

        this.geoMap.series.add(this.geoSeries);
    }

    public onStylingShape(s: IgrGeographicShapeSeries, args: IgrStyleShapeEventArgs) {

        const itemRecord = args.item as IgrShapefileRecord;

        const shapeStyle = this.currentShapeStyling.generate(itemRecord);
        args.shapeOpacity = shapeStyle.opacity;
        args.shapeFill = shapeStyle.fill;
        args.shapeStroke = shapeStyle.stroke;
        args.shapeStrokeThickness = shapeStyle.strokeThickness;
    }

    public onOptionsSelected = (e: any) => {
        const stylingType = e.target.value;

        if (stylingType === 'ShapeComparisonStyling') {
            this.currentShapeStyling = this.shapeComparisonStyling;
        } else if (stylingType === 'ShapeScaleStyling') {
            this.currentShapeStyling = this.shapeScaleStyling;
        } else if (stylingType === 'ShapeRangeStyling') {
            this.currentShapeStyling = this.shapeRangeStyling;
        } else {
            this.currentShapeStyling = this.shapeRandomStyling;
        }

        this.geoSeries.dataSource = this.shapeRecords;
        this.setState({ stylingType: stylingType});
    }

    public createTooltip(context: any) {
        const dataContext = context.dataContext as IgrDataContext;
        if (!dataContext) return null;

        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        const reg = dataItem.fieldValues.Region;
        const name = dataItem.fieldValues.Name;
        const pop = WorldUtils.toStringAbbr(dataItem.fieldValues.Population);

        return <div className="tooltipBox" >
            <div className="tooltipTitle" > {name}</div>
            <div className="tooltipBox">
                <div className="tooltipRow">
                    <div className="tooltipLbl">Region:</div>
                    <div className="tooltipVal">{reg}</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">Population:</div>
                    <div className="tooltipVal">{pop}</div>
                </div>
            </div>
        </div>
    }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MapShapeStyling/>);
