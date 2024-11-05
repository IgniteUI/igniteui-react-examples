import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WorldUtils from "./WorldUtils"
import { ShapeStyling } from './MapElectionStyleUtility';
import { ShapeComparisonStyling } from './MapElectionStyleUtility';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicShapeSeries } from 'igniteui-react-maps';
import { IgrGeographicSymbolSeries } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrShapeDataSource, Random } from 'igniteui-react-core';
// import { IgrShapefileRecord } from 'igniteui-react-core';
import { IgrStyleShapeEventArgs } from 'igniteui-react-charts';
import { IgrDataContext, IgRect } from 'igniteui-react-core';
import { IgrRectChangedEventArgs } from 'igniteui-react-core';
import { IgrSeriesViewer } from 'igniteui-react-charts';
import { IgrDataChartMouseButtonEventArgs,  } from 'igniteui-react-charts';
import { DataTemplateMeasureInfo } from 'igniteui-react-core';
import { DataTemplateRenderInfo } from 'igniteui-react-core';
import { MarkerType } from 'igniteui-react-charts';
import { IgrLinearGauge } from 'igniteui-react-gauges';
import { IgrLinearGraphRange } from 'igniteui-react-gauges';
import { IgrLinearGaugeModule } from 'igniteui-react-gauges';

import { IoChevronDownCircleSharp as WinnerIcon } from "react-icons/io5";
import { PiMouseLeftClickFill as MouseIcon } from "react-icons/pi";
import { IoMdStar as StarIcon } from "react-icons/io";

// https://react-icons.github.io/react-icons/

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();
IgrLinearGaugeModule.register();

export default class MapShapeSelection extends React.Component<any, any> {
  
    public gauge: IgrLinearGauge;
    public geoMap: IgrGeographicMap;
    public geoSeries: IgrGeographicShapeSeries;
    public geoSymbol: IgrGeographicSymbolSeries;
    public shapeRecords: any[] = [];

    public currentShapeStyling: ShapeStyling;
    public shapeComparisonStyling: ShapeComparisonStyling;

    public partyColorREP: string = '#f61616';
    public partyColorDEM: string = '#03adef';
    public partyColorUKN: string = '#535556';
    public partyColors: string = this.partyColorDEM + ", " + this.partyColorREP;

    public candidateR: string = this.getPartyCandidateImage("R");
    public candidateD: string = this.getPartyCandidateImage("D");

    constructor(props: any) {
        super(props);

        this.state = { stylingType: "ShapeComparisonStyling", }
        this.state = { stylingType: "ShapeComparisonStyling", 
            electors: { Count: 0, REP: 0, DEM: 0 },
            electorsCount: 270, 
            electorsTotal: 538, 
            electorsREP: 270, 
            electorsDEM: 0}
        
        this.onGauge = this.onGauge.bind(this);
        this.onMap = this.onMap.bind(this);
        this.onDataLoaded = this.onDataLoaded.bind(this);
        // this.onOptionsSelected = this.onOptionsSelected.bind(this);
        this.onMapStylingShape = this.onMapStylingShape.bind(this);
        this.createTooltip = this.createTooltip.bind(this);
        this.onStateClick = this.onStateClick.bind(this);
        this.onMapResize = this.onMapResize.bind(this);
        
        // setting up ShapeComparisonStyling:
        this.shapeComparisonStyling = new ShapeComparisonStyling();
        this.shapeComparisonStyling.defaultFill = '#959494';
        this.shapeComparisonStyling.itemMemberPath = 'Party';
        this.shapeComparisonStyling.itemMappings = [
            { fill: this.partyColorDEM, itemValue: 'D'  },
            { fill: this.partyColorREP, itemValue: 'R'  }, 
            // { fill: 'Gray', itemValue: '' },
        ];

        // setting default value for current shape styling
        this.currentShapeStyling = this.shapeComparisonStyling;
 
        // this.onChartMouseLeftButtonUp = this.onChartMouseLeftButtonUp.bind(this);
        // this.onChartMouseOver = this.onChartMouseOver.bind(this);
        
        
        this.seriesMouseLeftButtonDown = this.seriesMouseLeftButtonDown.bind(this);
        this.onMapWindowChanged = this.onMapWindowChanged.bind(this);

        // window.addEventListener('resize', this.onMapResize);
    }

    public render(): JSX.Element {
        
        let colorWinnerDEM = this.state.electors.DEM >= 270 ? this.partyColorDEM : "transparent";
        let colorWinnerREP = this.state.electors.REP >= 270 ? this.partyColorREP : "transparent";
        let bgIcons = [];
        for (let c = 0; c < 51; c++) {
            // for (let r = 0; c < 10; r++) {
                let iconBack = c % 2 === 0 ? this.partyColorREP : this.partyColorDEM
                let iconColor = "white" ; //r % 2 === 0 ? "white" : "blue"
                let key = c; // + r;
                bgIcons.push(
                    <StarIcon className="appBackgroundTitleIcon" key={key} style={{color: iconBack, background: iconColor}} />
                );
            // }
        }

        let statePickers: any[] = [];
        // this.sortByName(this.usaStates);
        // this.sortByName(this.usaSymbols);
        for (let i = 0; i < this.usaStates.length; i++) {
            let item = this.usaStates[i]; 
            let info = item.Info; // + " " + (item.KeyRace > 0 ? " *" : "");
            let key = item.KeyRace + "-" + item.Code;
            let electors = "Electors: " + item.Electors; 
            let pop = "Population: " + (item.Population / 1000000).toFixed(1) + "M"; 
            let bgDEM = item.Party === "D" ? this.partyColorDEM : this.partyColorUKN;
            let bgREP = item.Party === "R" ? this.partyColorREP : this.partyColorUKN;
            let bgState = item.Party === "D" ? this.partyColorDEM : this.partyColorREP;
            let stateColor = item.KeyRace > 0 ? this.partyColorUKN : item.Lean === "D" ? this.partyColorDEM : this.partyColorREP;
            let stateLabel = item.KeyRace > 0 ? "KEY RACE" : item.Lean === "D" ? "DEM. LEANING" : "REP. LEANING";
             
            let imgDEM = this.getPartyImage("D", item.Party === "D");
            let imgREP = this.getPartyImage("R", item.Party === "R"); 
            statePickers.push( 
            <div className="horizontal statePickerItem" key={key} onClick={(e) => this.onStateClick(item)}>
                <div className="vertical statePickerInfo"  > 
                    <div style={{fontWeight: 'bold'}}>{info}</div>
                    <div>{pop}</div>
                    <div>{electors}</div>
                </div>
                <div className="horizontal" > 
                    <div className="statePickerPartyCircle" style={{background: bgDEM}} title='Vote for Democrat'><img className="statePickerPartyImage" src={imgDEM}/></div>
                    <div className="statePickerPartyCircle" style={{background: bgREP}} title='Vote for Republican'><img className="statePickerPartyImage" src={imgREP}/></div>
                </div>
                
                <div className="stateLabel" style={{background: stateColor}}>{stateLabel}</div>
            </div>);
        }
        // this.sortByKey(statePickers);
        
        let widthMenu = "16rem";
        let widthContent = "calc(100% - " + widthMenu + ")";
        return (
            <div className="container vertical" style={{background: "transparent"}}>


                <div className="container sample horizontal">
                    
                    <div className="container vertical sideMenu" style={{background: "transparent", width: widthMenu}}>
                        {/* <div className="appTitle">U.S. Presidential Election Map</div> */}

                        <div className="horizontal statePickerItem" style={{borderRadius: "0rem", fontWeight: 'bold', background: "transparent", opacity: "100%"}} >
                            <div className="vertical statePickerInfo"  > 
                                <div >STATE VOTING FORECAST</div> 
                            </div>
                            <div className="horizontal" > 
                                <div className="statePickerPartyInfo" title='Voting for Democrat'> DEM. </div>
                                <div className="statePickerPartyInfo" title='Voting for Republican'> REP. </div>
                            </div>
                        </div>

                        <div className="container statePickerContainer"  >
                            {statePickers}
                        </div>
                    </div>
                    <div className="container vertical" style={{background: "transparent", width: widthContent }}>


                        <div className="container vertical electionResult" >
                            {/* <div className="appBackgroundTitle">{bgIcons}</div> */}
                            <div className="appTitle">Interactive USA Election Map</div>
                            {/* <div className="appBackgroundTitle">{bgIcons}</div> */}

                            <div className='igCandidate-bar'>
                                <div className='igCandidate-value' style={{color: this.partyColorDEM}}>{this.state.electors.DEM}</div>
                                <div className='igCandidate-name' style={{color: this.partyColorDEM}}>{this.getPartyCandidateName("D")}</div>
                                <WinnerIcon className="igCandidate-winner animateFade" style={{color: colorWinnerDEM}} title='Election Winner'/>
                                   
                                <div className="igCandidate-target" >
                                    <img className="electionWhiteHouse" src="https://www.infragistics.com/blazor-apps/usa-elections/images/gauge_white_house.svg"/>
                                    <div className="electionTargetValue">270 to win</div>
                                    <img className="electionTargetArrow" src="https://www.infragistics.com/blazor-apps/usa-elections/images/gauge_mid_arrow.png"/>
                                </div>

                                <WinnerIcon className="igCandidate-winner animateFade" style={{color: colorWinnerREP}} title='Election Winner'/>
                                <div className='igCandidate-name' style={{color: this.partyColorREP}}>{this.getPartyCandidateName("R")}</div>
                                <div className='igCandidate-value' style={{color: this.partyColorREP}}>{this.state.electors.REP}</div>
                            </div>


                            <div className="container horizontal" >
                                
                                {/* <div className="candidateInfo horizontal" style={{color: this.partyColorDEM}}>  style={{alignItems: "center",  }} */}
                                    {/* <WinnerIcon className="candidateWinner animateFade" style={{color: colorWinnerDEM}} title='Election Winner'/> */}
                                    {/* <div className="candidateName" > {this.getPartyCandidateName("D")}</div> */}
                                    {/* <div className="candidateElector" > {this.state.electors.DEM}</div> */}
                                    {/* <div className="statePickerPartyCircle electionCandidateImage" style={{background: this.partyColorREP}} ><img className="statePickerPartyImage" src={this.candidateR}/></div> */}
                                {/* </div> */}

                                <div className="electionGauge"  >
                                    <IgrLinearGauge
                                        ref={this.onGauge}
                                        height="60px"
                                        width="100%"
                                        backingBrush='transparent'
                                        backingOutline='transparent'
                                        minimumValue={0} 
                                        maximumValue={this.state.electorsTotal} 
                                        value={this.state.electors.DEM}
                                        interval={270} minorTickCount={1} 
                                        minorTickBrush='transparent'
                                        tickBrush='transparent'
                                        tickEndExtent={0.9}
                                        tickStartExtent={0.25}
                                        minorTickEndExtent={0.25}
                                        needleBrush='transparent'
                                        needleOutline='transparent'
                                        scaleEndExtent={1}
                                        scaleStartExtent={0}
                                        rangeBrushes={this.partyColors}
                                        rangeOutlines={this.partyColors}  >
                                        <IgrLinearGraphRange name="range1"
                                            endValue={this.state.electors.DEM}
                                            startValue={0} 
                                            innerStartExtent={0.25} innerEndExtent={0.25}
                                            outerStartExtent={0.85} outerEndExtent={0.85}  />
                                        <IgrLinearGraphRange name="range2"
                                            startValue={this.state.electors.DEM} 
                                            endValue={this.state.electorsTotal}
                                            innerStartExtent={0.25} innerEndExtent={0.25}
                                            outerStartExtent={0.85} outerEndExtent={0.85} />
                                    </IgrLinearGauge>
                                </div>
                                {/* <div className="candidateInfo horizontal" style={{color: this.partyColorREP}}>   */}
                                    {/* <div className="candidateElector" > {this.state.electors.REP}</div> */}
                                    {/* <div className="candidateName" > {this.getPartyCandidateName("R")}</div> */}
                                    {/* <WinnerIcon className="candidateWinner animateFade" style={{color: colorWinnerREP}} title='Election Winner'/> */}
                                    {/* <div className="statePickerPartyCircle electionCandidateImage" style={{background: this.partyColorREP}} ><img className="statePickerPartyImage" src={this.candidateR}/></div> */}

                                {/* </div>  */}
                            </div>

                            <div className="appBackgroundTitle" style={{paddingTop: "1rem"}}>{bgIcons}</div>

                        </div>
                        {/* onResize={this.onMapResize} */}
                        <div className="container" id="mapContainer" >
                            <IgrGeographicMap
                                ref={this.onMap}
                                seriesMouseLeftButtonDown={this.seriesMouseLeftButtonDown}
                                windowRectChanged={this.onMapWindowChanged}
                                
                                width="100%"
                                height="100%"
                                zoomable="true"/>
                                
                                <div className="horizontal" >
                                    {/* <MouseIcon className="mapHintIcon animateFade" title='Click on a map to change which state votes for a candidate'/> */}
                                    {/* <div className="mapHint">Powered by Infragistics Ignite-UI for React Components</div> */}
                                    <a className="mapHint" href="https://www.infragistics.com/products/ignite-ui-react">
                                        <img className="mapSource" src="https://www.infragistics.com/blazor-apps/usa-elections/images/ig_engine_horizontal_light.svg"></img>
                                    </a>
                                    <MouseIcon className="mapHintIcon animateFade" title='Click on a map to change which state votes for a candidate'/>
                                </div>
                                
                       </div>
                    </div>
                </div>
            </div>
        );
    }

    public onMapWindowChanged(s: IgrSeriesViewer, e: IgrRectChangedEventArgs){
        // console.log('onMapWindowChanged');
        // console.log(e.newRect);
    }

    public onGauge(gauge: IgrLinearGauge) {
        if (gauge === null) return;
        this.gauge = gauge;
        this.gauge.formatLabel = (s: any, e: any) => {
            // if (e.value === 270) e.label = "270 to win";
            // else 
            e.label = "";
        };

    }

    public getPartyImage(party: string, isSelected: boolean): string {
        let suffix = isSelected ? "_active" : "_inactive";
        let prefix = party === "D" ? "dem" : "rep";
        // return "https://assets-cdn.abcotvs.net/static/images/Election/party_icons/dem_inactive_filled_dm.svg";
        return "https://assets-cdn.abcotvs.net/static/images/Election/party_icons/" + prefix + suffix + "_filled_dm.svg"
    // REP 
    // https://assets-cdn.abcotvs.net/static/images/Election/party_icons/rep_active_filled_dm.svg
    // https://assets-cdn.abcotvs.net/static/images/Election/party_icons/rep_inactive_filled_dm.svg
    // DEM 
    // https://assets-cdn.abcotvs.net/static/images/Election/party_icons/dem_active_filled_dm.svg
    // https://assets-cdn.abcotvs.net/static/images/Election/party_icons/dem_inactive_filled_dm.svg

    }

    public getPartyColor(party: string): string {
        if (party === "R") return this.partyColorREP;
        else if (party === "D") return  this.partyColorDEM;
        return this.partyColorUKN;
    }

    public getPartyCandidateName(party: string): string {
        if (party === "R") return "Donald Trump";
        else if (party === "D") return  "Kamala Harris";
        return "Not Selected";
    }

    public getPartyCandidateImage(party: string): string {
        if (party === "R") 
            return "https://s.abcnews.com/assets/dtci/elections/headshots/sm/8639.jpg";
        else 
            return "https://s.abcnews.com/assets/dtci/elections/headshots/sm/64984.jpg"; 
    }

    public getPartyName(party: string): string {
        if (party === "R") return "Republican";
        else if (party === "D") return  "Democrat";
        return "Not Selected";
    }

    public onMap(geoMap: IgrGeographicMap) {
        if (!geoMap) { return; }

        this.geoMap = geoMap;
        this.geoMap.backgroundContent = undefined;

        // loading a shapefile with geographic polygons
        const sds = new IgrShapeDataSource();
        sds.importCompleted = this.onDataLoaded;
        sds.shapefileSource = "https://static.infragistics.com/xplatform/shapes/usa_states_ak_below.shp";
        sds.databaseSource  = "https://static.infragistics.com/xplatform/shapes/usa_states_ak_below.dbf";
        // sds.shapefileSource = "https://github.com/IgniteUI/igniteui-blazor-apps/tree/main/usa-elections/wwwroot/shapes/usa_states_hex_map.shp";
        // sds.databaseSource  = "https://github.com/IgniteUI/igniteui-blazor-apps/tree/main/usa-elections/wwwroot/shapes/usa_states_hex_map.dbf";
        // sds.shapefileSource = "https://github.com/IgniteUI/igniteui-blazor-apps/raw/refs/heads/main/usa-elections/wwwroot/shapes/usa_states_ak_below.shp";
        // sds.databaseSource  = "https://github.com/IgniteUI/igniteui-blazor-apps/raw/refs/heads/main/usa-elections/wwwroot/shapes/usa_states_ak_below.dbf";
        
        window.addEventListener('resize', this.onMapResize);
        sds.dataBind();
    }

    public onMapResize(args: any): void {
        // console.log("onMapResize");
        let geoRegion = { left: -120, top: 32, width: 40, height: 12 };
        this.geoMap.zoomToGeographic(geoRegion);
    }

    public sortByKey(states: any[]): void {
        states.sort((a, b) => a.key < b.key ? 1 : -1);
    }

    public sortByName(states: any[]): void {
        states.sort((a, b) => b.KeyRace - a.KeyRace || (a.Code > b.Code ? 1 : -1));
    }

    public onDataLoaded(sds: IgrShapeDataSource, e: any) {
        this.shapeRecords = sds.getPointData();
        // console.log("loaded WorldCountries.shp " +  this.shapeRecords.length);
        
        let smallStates = ["VT", "MA", "RI", "CT", "NJ", "DE", "MD", "DC", ];
       
        let electorsTotal = 0;
        let electors = { Count: 0, REP: 0, DEM: 0  }; 

        let statesByParty = this.getWebsiteParams();
        let statesPicked = statesByParty.R.length > 0 && statesByParty.D.length > 0;
       
        let xMax = 0;
        let yMax = 0;        
        let xMin = 1000;
        let yMin = 1000; 
        for (let i = 0; i < this.shapeRecords.length; i++) {
            let record = this.shapeRecords[i]; // as IgrShapefileRecord;
            if (i === 0) {
                // console.log(record); 
            }
            let code = record.fieldValues['Code'];
            let state = this.usaData[code];
            
            state.Code = code;
            state.Points = record.points;
            state.X = record.fieldValues['CodePosX'];
            state.Y = record.fieldValues['CodePosY'];
            state.Area = record.fieldValues['Area'];
            state.Name = record.fieldValues['Name'];
            state.Region = record.fieldValues['Region'];
            state.Population = record.fieldValues['Population'];
            
            if (code === "DC") {
                state.Info = state.Name;
            } else {
                state.Info = state.Name + " (" + state.Code + ")";
            }

            xMax = Math.max(xMax, state.X);
            yMax = Math.max(yMax, state.Y);
            xMin = Math.min(xMin, state.X);
            yMin = Math.min(yMin, state.Y);

            if (statesPicked) {
                if (statesByParty.R.indexOf(code) >= 0) {
                    state.Party = "R";
                }
                else if (statesByParty.D.indexOf(code) >= 0) {
                    state.Party = "D";
                } else {
                    state.Party = "N";
                }
            }
            
            state.Voters = Math.min(0.9, Math.max(0.4, 0.2 + Math.random())) * state.Population;
            state.Attendance = Math.round((state.Voters / state.Population) * 100);
            // if (item.Code === "VT") {
            //     item.X -= 0.5; 
            //     // this.usaData[code].Y = record.fieldValues['CodePosY'];
            // }
            // console.log(code + " " + item.Attendance);
            state.Color = this.getPartyColor(state.Party);  
            // state.Color = state.Party === "R" ? this.partyColorREP : this.partyColorDEM;
            if (state.Party === "D") {
                // electors.Count += item.Electors;
                electors.DEM += state.Electors;
            }
            if (state.Party === "R") {
                electors.REP += state.Electors;
            }
            electorsTotal += state.Electors;

            this.usaStates.push(state);
            this.usaSymbols.push(state);
        }

        
        this.sortByName(this.usaStates);
        this.sortByName(this.usaSymbols);

        // this.usaData["VT"].X -=  1; 
        this.usaData["NH"].Y -=  3.5; 
        this.usaData["NH"].X -=  3; 

        for (let i = 0; i < smallStates.length; i++) {
            let code = smallStates[i];
            let item = this.usaData[code];
            item.X = this.usaData["NH"].X;
            item.Y = this.usaData["NH"].Y - ((i + 1) * 1.5);
        }

        // console.log(this.usaData);
  

        this.geoSeries = new IgrGeographicShapeSeries ( { name: "series" });
        this.geoSeries.title = "usaStates";
        this.geoSeries.dataSource = this.usaStates;
        this.geoSeries.shapeMemberPath = "Points"; 
        this.geoSeries.brush = "rgba(146, 146, 146, 0.6)";
        this.geoSeries.outline = "Black";
        this.geoSeries.tooltipTemplate = this.createTooltip;
        this.geoSeries.thickness = 2;
        // this.geoSeries.markerTemplate=this.createMarker()
        
        // adding event handler for styleShape
        this.geoSeries.styleShape = this.onMapStylingShape;

        this.geoSymbol = new IgrGeographicSymbolSeries( { name: "series" });
        this.geoSymbol.title = "usaCodes";
        this.geoSymbol.dataSource = this.usaSymbols;
        this.geoSymbol.markerType = MarkerType.Circle;
        this.geoSymbol.showDefaultTooltip  = false;
        // this.geoSymbol.mouseOverEnabled = false;
        this.geoSymbol.latitudeMemberPath  = "Y";
        this.geoSymbol.longitudeMemberPath = "X";
        this.geoSymbol.markerBrush = "LightGray";
        this.geoSymbol.markerOutline = "Black";
        this.geoSymbol.markerTemplate=this.createMarker()
        this.geoSymbol.tooltipTemplate = this.createTooltip;

        this.geoMap.series.add(this.geoSeries);
        this.geoMap.series.add(this.geoSymbol); 
        // this.geoMap.windowRect = { height: 0.2, left: 0.15, top: 0.3, width: 0.2};
        // this.geoMap.windowRect = { top: 0.3294, left: 0.3015, width: 0.0944, height: 0.1144};
        // this.geoMap.zoomable = false;
        // this.geoMap.windowRect = {top: 0.33089979638559797, left: 0.23950540516618768, width: 0.14048512930673307, height: 0.14048512930673307};

        
        let geoRegion = { left: -120, top: 32, width: 40, height: 12 };
        // console.log("geoRegion"); 
        // console.log(geoRegion); 
        this.geoMap.zoomToGeographic(geoRegion);
         

        this.gauge.transitionDuration = 500;

        this.setWebsiteParams();
        this.setState({ electors: electors, });
    }

    public getWebsiteParams(): any {
        let location = window.location;
        // let params = location.search;
        let states: any = { R: [], D: []};
        if (location.search.length > 0) {
            let parts = location.search.replace("?", "").split("&")
            for (let i = 0; i < parts.length; i++) {
                const values = parts[i];
                const party = values.startsWith("D=") ? "D" : "R";
                states[party] = values.replace("D=", "").replace("R=", "").split(".")
            }
        }
        // console.log("getWebsiteParams"); 
        // console.log(states); 
        return states;
    }

    public setWebsiteParams() {

        let statesREP = [];
        let statesDEM = [];
        for (let i = 0; i < this.usaStates.length; i++) {
            let item = this.usaStates[i];
            if (item.Party === "R") {
                statesREP.push(item.Code);
            }
            if (item.Party === "D") {
                statesDEM.push(item.Code);
            }
        }
        let location = window.location;
        let locationBase = location.origin + location.pathname;
        // console.log("location"); 
        // console.log(location); 
        // console.log(locationBase); 

        const url = new URL(locationBase);  
        url.searchParams.set("D", statesDEM.join("."));
        url.searchParams.set("R", statesREP.join("."));
        history.pushState({}, "", url);
    }
    
    public onStateClick(item: any) {
        this.updateData(item);
    }

    public updateData(target: any) {
        
        let electors = { Count: 0, REP: 0, DEM: 0  }; 
        for (let i = 0; i < this.usaStates.length; i++) {
            let item = this.usaStates[i];
            if (item.Code === target.Code) {
                // console.log(item); 

                item.Party = target.Party === "R" ? "D" : "R";
                item.Color = item.Party === "R" ? this.partyColorREP : this.partyColorDEM;
                this.usaStates[i] = item;
                this.usaSymbols[i] = item;
                // console.log(item); 
            }

            if (item.Party === "D") {
                electors.Count += item.Electors;
                electors.DEM += item.Electors;
            }
            if (item.Party === "R") {
                electors.REP += item.Electors;
            }
        }

        this.geoSeries.dataSource = null; 
        this.geoSeries.dataSource = this.usaStates;
        this.geoSymbol.dataSource = null; 
        this.geoSymbol.dataSource = this.usaSymbols;

        this.setWebsiteParams();

        this.setState({ electors: electors, });
 
    }

    public seriesMouseLeftButtonDown(s: IgrSeriesViewer, e: IgrDataChartMouseButtonEventArgs) {
        
        // if (e.series === null) return;  
        // if (e.series.title === "usaCodes") return;

        let item = e.item as any;
        if (item === null) {
            console.log('seriesMouseLeftButtonDown null' );
        } else {
            // console.log(item);
            console.log('seriesMouseLeftButtonDown ' + item.Code);
            this.updateData(item);
        }
    }

    public onMapStylingShape(s: IgrGeographicShapeSeries, args: IgrStyleShapeEventArgs) {

        // const itemRecord = args.item as any;
        const shapeStyle = this.currentShapeStyling.generate(args.item);
        args.shapeOpacity = shapeStyle.opacity;
        args.shapeFill = shapeStyle.fill;
        args.shapeStroke = shapeStyle.stroke;
        args.shapeStrokeThickness = shapeStyle.strokeThickness;
    }

    public static drawText(ctx: any , text: string, x: number, y: number, lineHeight: number, useMultipleLines: boolean)
    { 
        if (!useMultipleLines)
        {
            ctx.fillText(text, x, y );
            return;
        }
        
        let lines = text.split(' ');
        for (let i = 0; i < lines.length; i++) {
            let str = lines[i];
            ctx.fillText(str, x, y + (i * lineHeight));
        }
    }

    public createMarker(): any
    {
        let smallStates = ["NH", "VT", "MA", "RI", "CT", "NJ", "DE", "MD", "DC", ];
        
        const size = 12;

        return {
            measure: function (measureInfo: DataTemplateMeasureInfo) {
                const data = measureInfo.data;
                const context = measureInfo.context;
                let value = "FL";
                let item = data.item as any;
                if (item != null) {
                    value = item.Code.toString();
                }
                const height = context.measureText("M").width;
                const width = context.measureText(value).width;
                measureInfo.width = 25; //width;
                measureInfo.height = height + size;
            },
            render: function (renderInfo: DataTemplateRenderInfo) {
                const item = renderInfo.data.item as any;
                const code = item.Code.toString();

                const ctx = renderInfo.context as CanvasRenderingContext2D;
                let x = renderInfo.xPosition;
                let y = renderInfo.yPosition;

                let width = renderInfo.availableWidth + 35;
                let height = renderInfo.availableHeight + 0;
                if (renderInfo.isHitTestRender) {
                    ctx.fillStyle = renderInfo.data.actualItemBrush.fill;
                    ctx.fillRect(x - (width / 2), y - (height / 2), width, height);
                    return;
                }
 
                let isSmallState = false;
                if (smallStates.indexOf(code) >= 0) {
                    isSmallState = true;
                    ctx.beginPath();     
                    ctx.fillStyle =  item.Color;
                    ctx.fillRect(x - (width / 2), y - (height / 2), width, height);
                    ctx.closePath();
                }

                let kr = ""; //item.KeyRace > 0 ? "* " : "";
                let txt = kr + code + " (" + item.Electors + ")";
                
                ctx.fillStyle = code === "HI" ? "black" : "white";
                ctx.font = '7pt Verdana';
                 
                // ctx.lineWidth = 40;
                // x = x - (xOffset / 2); 
                // ctx.textBaseline = 'top';
                // ctx.fillText(txt, x - (xOffset / 2), y - (yOffset / 2));

                ctx.textBaseline = 'middle';
                if (isSmallState) {
                    MapShapeSelection.drawText(ctx, txt, x, y, 12, false);
                } else {
                    ctx.textAlign = 'center';
                    MapShapeSelection.drawText(ctx, txt, x, y - 5, 12, true);
                }
            }
        }
    }

    public createTooltip(context: any) {
        const dataContext = context.dataContext as IgrDataContext;
        if (!dataContext) return null;

        const item = dataContext.item as any;
        if (!item) return null;
  
        const pop = WorldUtils.toStringAbbr(item.Population);
        const winner = this.getPartyCandidateName(item.Party);
        const party = this.getPartyName(item.Party);
        const color = this.getPartyColor(item.Party);
        const statusColor = item.KeyRace > 0 ? "black" : item.Lean === "D" ? this.partyColorDEM : this.partyColorREP;
        const statusText = item.KeyRace > 0 ? "Toss-up" : item.Lean === "D" ? "Democrat" : "Republican";
            
        return <div className="tooltipBox" style={{color: color}}>
            {/* <div className="tooltipTitle" > </div> */}
            <div className="tooltipBox">
                <div className="tooltipRow">
                    <div className="tooltipLbl" >State:</div>
                    <div className="tooltipVal">{item.Info}</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">Population:</div>
                    <div className="tooltipVal">{pop}</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl" >Electoral Votes:</div>
                    <div className="tooltipVal">{item.Electors}</div>
                </div>
                <div className="tooltipRow" style={{color: statusColor}} >
                    <div className="tooltipLbl">Likely Outcome:</div>
                    <div className="tooltipVal">{statusText}</div>
                </div>
                <div className="tooltipRow" style={{color: color}}>
                    <div className="tooltipLbl">Winner:</div>
                    <div className="tooltipVal">{winner}</div>
                </div>
                <div className="tooltipRow" style={{color: color}}>
                    <div className="tooltipLbl">Party:</div>
                    <div className="tooltipVal">{party}</div> 
                </div>
                {/* <div className="tooltipRow">
                    <div className="tooltipLbl">Attendance:</div>
                    <div className="tooltipVal">{item.Attendance}%</div>
                </div> */}
            </div>
        </div>
    }

    public usaSymbols: any[] = [];
    public usaStates: any[] = [];
    public usaData: any = {
        AK: {Code: 'AK', Party: 'R', Lean: 'R', KeyRace: 0, Electors: 3, Voters: 333151, Population: 731545},
        AL: {Code: 'AL', Party: 'R', Lean: 'R', KeyRace: 0, Electors: 9, Voters: 2014244, Population: 4903185},
        AR: {Code: 'AR', Party: 'R', Lean: 'R', KeyRace: 0, Electors: 6, Voters: 1057163, Population: 3017825},
        AZ: {Code: 'AZ', Party: 'D', Lean: 'D', KeyRace: 1, Electors: 11, Voters: 3241478, Population: 7278717},
        CA: {Code: 'CA', Party: 'D', Lean: 'D', KeyRace: 0, Electors: 55, Voters: 24113728, Population: 39512223},
        CO: {Code: 'CO', Party: 'D', Lean: 'D', KeyRace: 0, Electors: 9, Voters: 3759070, Population: 5758736},
        CT: {Code: 'CT', Party: 'D', Lean: 'D', KeyRace: 0, Electors: 7, Voters: 2472120, Population: 3565287},
        DC: {Code: 'DC', Party: 'D', Lean: 'D', KeyRace: 0, Electors: 3, Voters: 768547, Population: 705749},
        DE: {Code: 'DE', Party: 'D', Lean: 'D', KeyRace: 0, Electors: 3, Voters: 650886, Population: 973764},
        FL: {Code: 'FL', Party: 'R', Lean: 'R', KeyRace: 0, Electors: 29, Voters: 23595237, Population: 21477737},
        GA: {Code: 'GA', Party: 'R', Lean: 'R', KeyRace: 1, Electors: 16, Voters: 10082120, Population: 10617423},
        HI: {Code: 'HI', Party: 'D', Lean: 'D', KeyRace: 0, Electors: 4, Voters: 736560, Population: 1415872},
        IA: {Code: 'IA', Party: 'R', Lean: 'R', KeyRace: 0, Electors: 6, Voters: 3620050, Population: 3155070},
        ID: {Code: 'ID', Party: 'R', Lean: 'R', KeyRace: 0, Electors: 4, Voters: 540697, Population: 1787147},
        IL: {Code: 'IL', Party: 'D', Lean: 'D', KeyRace: 0, Electors: 20, Voters: 8554565, Population: 12671821},
        IN: {Code: 'IN', Party: 'R', Lean: 'R', KeyRace: 0, Electors: 11, Voters: 2923433, Population: 6732219},
        KS: {Code: 'KS', Party: 'R', Lean: 'R', KeyRace: 0, Electors: 6, Voters: 1208320, Population: 2913314},
        KY: {Code: 'KY', Party: 'R', Lean: 'R', KeyRace: 0, Electors: 8, Voters: 1751658, Population: 4467673},
        LA: {Code: 'LA', Party: 'R', Lean: 'R', KeyRace: 0, Electors: 8, Voters: 2144394, Population: 4648794},
        MA: {Code: 'MA', Party: 'D', Lean: 'D', KeyRace: 0, Electors: 11, Voters: 5525047, Population: 6949503},
        MD: {Code: 'MD', Party: 'D', Lean: 'D', KeyRace: 0, Electors: 10, Voters: 4610011, Population: 6045680},
        ME: {Code: 'ME', Party: 'D', Lean: 'D', KeyRace: 0, Electors: 4, Voters: 1003990, Population: 1344212},
        MI: {Code: 'MI', Party: 'R', Lean: 'R', KeyRace: 1, Electors: 16, Voters: 11814019, Population: 9986857},
        MN: {Code: 'MN', Party: 'R', Lean: 'R', KeyRace: 0, Electors: 10, Voters: 7044975, Population: 5639632},
        MO: {Code: 'MO', Party: 'R', Lean: 'R', KeyRace: 0, Electors: 10, Voters: 2989243, Population: 6137428},
        MS: {Code: 'MS', Party: 'R', Lean: 'R', KeyRace: 0, Electors: 6, Voters: 1324289, Population: 2976149},
        MT: {Code: 'MT', Party: 'R', Lean: 'R', KeyRace: 0, Electors: 3, Voters: 507852, Population: 1068778},
        NC: {Code: 'NC', Party: 'R', Lean: 'R', KeyRace: 1, Electors: 15, Voters: 11644415, Population: 10488084},
        ND: {Code: 'ND', Party: 'R', Lean: 'R', KeyRace: 0, Electors: 3, Voters: 274581, Population: 762062},
        NE: {Code: 'NE', Party: 'R', Lean: 'R', KeyRace: 0, Electors: 5, Voters: 807080, Population: 1934408},
        NH: {Code: 'NH', Party: 'D', Lean: 'D', KeyRace: 0, Electors: 4, Voters: 971797, Population: 1359711},
        NJ: {Code: 'NJ', Party: 'D', Lean: 'D', KeyRace: 0, Electors: 14, Voters: 5872828, Population: 8882190},
        NM: {Code: 'NM', Party: 'D', Lean: 'D', KeyRace: 0, Electors: 5, Voters: 1114673, Population: 2096829},
        NV: {Code: 'NV', Party: 'D', Lean: 'D', KeyRace: 1, Electors: 6, Voters: 1493386, Population: 3080156},
        NY: {Code: 'NY', Party: 'D', Lean: 'D', KeyRace: 0, Electors: 29, Voters: 12478133, Population: 19453561},
        OH: {Code: 'OH', Party: 'R', Lean: 'R', KeyRace: 0, Electors: 18, Voters: 13119914, Population: 11689100},
        OK: {Code: 'OK', Party: 'R', Lean: 'R', KeyRace: 0, Electors: 7, Voters: 1218494, Population: 3956971},
        OR: {Code: 'OR', Party: 'D', Lean: 'D', KeyRace: 0, Electors: 7, Voters: 2799917, Population: 4217737},
        PA: {Code: 'PA', Party: 'D', Lean: 'D', KeyRace: 1, Electors: 20, Voters: 15283931, Population: 12801989},
        RI: {Code: 'RI', Party: 'D', Lean: 'D', KeyRace: 0, Electors: 4, Voters: 696564, Population: 1059361},
        SC: {Code: 'SC', Party: 'R', Lean: 'R', KeyRace: 0, Electors: 9, Voters: 2358712, Population: 5148714},
        SD: {Code: 'SD', Party: 'R', Lean: 'R', KeyRace: 0, Electors: 3, Voters: 337987, Population: 884659},
        TN: {Code: 'TN', Party: 'R', Lean: 'R', KeyRace: 0, Electors: 11, Voters: 2421274, Population: 6833174},
        TX: {Code: 'TX', Party: 'R', Lean: 'R', KeyRace: 0, Electors: 38, Voters: 10753736, Population: 28995881},
        UT: {Code: 'UT', Party: 'R', Lean: 'R', KeyRace: 0, Electors: 6, Voters: 878433, Population: 3205958},
        VA: {Code: 'VA', Party: 'D', Lean: 'D', KeyRace: 0, Electors: 13, Voters: 5468252, Population: 8535519},
        VT: {Code: 'VT', Party: 'D', Lean: 'D', KeyRace: 0, Electors: 3, Voters: 492226, Population: 623989},
        WA: {Code: 'WA', Party: 'D', Lean: 'D', KeyRace: 0, Electors: 12, Voters: 4866218, Population: 7614893},
        WI: {Code: 'WI', Party: 'D', Lean: 'D', KeyRace: 1, Electors: 10, Voters: 7223309, Population: 5822434},
        WV: {Code: 'WV', Party: 'R', Lean: 'R', KeyRace: 0, Electors: 5, Voters: 532748, Population: 1792065},
        WY: {Code: 'WY', Party: 'R', Lean: 'R', KeyRace: 0, Electors: 3, Voters: 164415, Population: 578759},
    }; 

}


// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MapShapeSelection/>);


