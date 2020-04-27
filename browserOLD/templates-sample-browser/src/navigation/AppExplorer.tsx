import * as React from "react";
import { Switch, Route } from "react-router-dom"

import "./AppExplorer.css";
import "./Material.css";
import "./Scrollbars.css";

import AppRouter from "./AppRouter";
import { TOC, SampleFallback } from "./toc"

import IconButton from '@material-ui/core/IconButton';
import * as SidebarMenuIcon from '@material-ui/icons/Menu';
import * as ItemsExpandedIcon from '@material-ui/icons/ExpandMore';
import * as ItemsColapsedIcon from '@material-ui/icons/ExpandLess';
import * as SampleSearchIcon from "@material-ui/icons/Search";
import * as SampleLinkIcon from "@material-ui/icons/FiberManualRecord";

export default class AppExplorer extends React.Component<any, any> {

    public ControlNames: string[] = [];
    public RouteSamples:  JSX.Element[] = [];
    public SidebarMaxWidth: string = "240px";
    public styles: any = {
        toolbarIcon: { display: "inline-block"},
        toolbarBtn: { color: "white", padding: "0.15rem", fontSize: "medium", display: "inline-block", height: "32px",},
        sidebarGroupBtn: { color: "black", padding: "0.15rem", marginRight: "5px", display: "inline-block", fontSize: "small", height: "32px"},
        sidebarLinksBtn: { color: "inherit", padding: "0rem", marginLeft: "0.3rem", marginRight: "0.4rem",
        display: "inline-block", fontSize: "small", verticalAlign: "middle",
        //  height: "32px"
        },

        searchStyle: {fontSize: "1rem", verticalAlign: "middle", color: "white",  },
        iconStyle: {fontSize: "1rem", verticalAlign: "middle" },
    }

    constructor(props: any) {
        super(props);

        // console.log("AppExplorer constructor");

        let currentSample = "";
        console.log("AppExplorer constructor " + currentSample);
        let currentControl = "";
        let expandedControls: any = {};
        for (const control of TOC) {
            control.name = control.name.toUpperCase();
            expandedControls[control.name] = false;
            this.ControlNames.push(control.name);

            for (const sample of control.samples) {
                if (this.props.location.pathname !== undefined &&
                    this.props.location.pathname.indexOf(sample.path) >= 0) {
                    currentSample = sample.name;
                    currentControl = control.name;
                    expandedControls[control.name] = true;
                    // console.log("currentControl " + currentControl)
                }
            }
        }

        for (const route of AppRouter.getSampleRoutes("/samples", false)) {
            this.RouteSamples.push(route);
        }

        this.state = {
            SidebarVisible: true,
            SidebarWidth: this.SidebarMaxWidth,
            SidebarExpanded: true,
            SidebarExpansions: expandedControls,
            CurrentSample: currentSample,
            CurrentControl: currentControl,
            FilterKeyword: "",
        };

        this.onFilterSearchChanged = this.onFilterSearchChanged.bind(this);
        this.onFilterSearchReset = this.onFilterSearchReset.bind(this);
    }

    public render() {
        console.log("AppExplorer render");

        let title = this.state.CurrentControl === "" ? "React Samples" :
        this.state.CurrentControl + " - " + this.state.CurrentSample;

        return (

            // document.getElementById("mySidenav").style.width = "0";
            // document.getElementById("main").style.marginLeft= "0";
            <div className="appRoot">
                <div className="appSidebar" style={{width: this.state.SidebarWidth}} >
                    {/* <a href="#1">About</a> */}
                    {/* <a href="#2">Services</a>
                    <a href="#3">Clients</a>
                    <a href="#4">Contact</a> */}
                    <div className="appToolbar" >
                        <IconButton onClick={this.onSidebarExpandedClick} style={this.styles.toolbarBtn} edge="start">
                            {this.state.SidebarExpanded ?
                            <ItemsColapsedIcon.default /> :
                            <ItemsExpandedIcon.default /> }
                        </IconButton>
                          {/* <label onClick={this.onSidebarExpandedClick} >
                          REACT SAMPLES
                          </label> */}
                        <div className="appToolbaSearchBox">
                            <input className="appToolbarSearchInput" type="text"
                            onChange={this.onFilterSearchChanged} value={this.state.FilterKeyword}
                            id="searchSample" name="searchSample" placeholder=" "/>
                            {/* <CloseIcon.default style={this.styles.searchStyle} onClick={this.onFilterSearchReset}/> */}
                            <SampleSearchIcon.default style={this.styles.searchStyle}  />
                        </div>

                    </div>
                    <div className="appSidebarNav">
                        {this.renderSidebarLinks()}
                    </div>
                </div>

                <div className="appContent" style={{marginLeft: this.state.SidebarWidth}}>
                    <div className="appToolbar" onClick={this.onSidebarVisibleClick}>
                        {/* <label>&#9776;</label> */}
                        <IconButton onClick={this.onSidebarVisibleClick} style={this.styles.toolbarBtn} edge="start" >
                            <SidebarMenuIcon.default />
                        </IconButton>
                        <label onClick={this.onSidebarVisibleClick} className="appToolbarTitle" >
                            {title}
                        </label>
                    </div>
                    <div className="appSample">
                        {/* <DataGridColumnTypes/> */}
                            <Switch>
                                {this.RouteSamples}
                            </Switch>
                        {/* <div className="appTest">sample content sample content sample content sample content sample content sample content sample content sample content sample content sample content sample content sample content </div> */}
                    </div>
                </div>
            </div>

        );
    }

    public renderSidebarLinks(): JSX.Element[] {
        const navigationLinks: JSX.Element[] = [];
        const styleSampleSelected = { backgroundColor: "dodgerblue", color: "white"} as React.CSSProperties;
        const styleSampleDefault  = { backgroundColor: "unset", color: "dodgerblue" } as React.CSSProperties;
        const styleControlSelected = { backgroundColor: "#d8d6d6"} as React.CSSProperties;
        const styleControlDefault  = { backgroundColor: "unset" } as React.CSSProperties;
        // const navigationHasBasename = this.props.location.pathname.indexOf(AppRouter.basename) >= 0;

        for (const control of AppRouter.getSortedTOC()) { // TOC) {
            const isExpanded = this.state.SidebarExpansions[control.name];
            const isMatchingControl = this.isMatching(control.name, this.state.FilterKeyword);
            const isMatchingGroup = this.isMatching(control.group, this.state.FilterKeyword);

            const sampleLinks: JSX.Element[] = [];
            for (const sample of control.samples) {
                const sampleSelected = this.props.location.pathname.indexOf(sample.path) >= 0;

                let samplePath = "";
                // if (navigationHasBasename) {
                    // samplePath = "/samples" + sample.path;
                // } else {
                    samplePath = AppRouter.basename + "/samples" + sample.path;
                // }

                const sampleStyle = sampleSelected ? styleSampleSelected : styleSampleDefault;

                const isMatchingSample = this.isMatching(sample.name, this.state.FilterKeyword);
                if (isMatchingSample || isMatchingControl || isMatchingGroup) {
                    const link = <div key={control.name + sample.path} style={sampleStyle}>
                        <a href={samplePath}>
                        {/*   */}
                        {/* <IconButton style={this.styles.sidebarLinksBtn}
                        size="small" edge="start" >
                        </IconButton> */}
                        <SampleLinkIcon.default fontSize="small" style={this.styles.sidebarLinksBtn}/>

                        {/* <img className="appSidebarNavBullet"></img> */}
                        <label className="appSidebarNavSample" > {sample.name || sample.path} </label>
                        </a>
                    </div>;
                    sampleLinks.push(link);
                }
            }

            let headerContent = control.name; // + " (" + sampleLinks.length + ")";
            if (sampleLinks.length > 0) {
                headerContent += " (" + sampleLinks.length + ")";
            }

            const headerSelected = this.state.CurrentControl === control.name;
            // const headerStyle = headerSelected ? styleControlSelected : styleControlDefault;
            // style={headerStyle}
            const header = <div key={control.name} >
                <section id={control.name} onClick={this.onSidebarSectionClick} >
                    <IconButton id={control.name} onClick={this.onSidebarSectionClick} style={this.styles.sidebarGroupBtn} edge="start" >
                        {isExpanded && sampleLinks.length > 0 ?
                        <ItemsColapsedIcon.default /> :
                        <ItemsExpandedIcon.default /> }
                    </IconButton>
                    <label className="appSidebarNavControl" id={control.name}>{headerContent}</label>
                </section>
            </div>

            navigationLinks.push(header);
            if (isExpanded && sampleLinks.length > 0) {
                for (const link of sampleLinks) {
                    navigationLinks.push(link);
                }
            }

        }
        return navigationLinks;
    }

    public isMatching(str: string, keyword: string): boolean {
        return keyword === "" || str.toLowerCase().indexOf(keyword.toLowerCase()) >= 0;
    }

    public onFilterSearchReset(event: any) {
        const keyword = "";
        this.setState({FilterKeyword: keyword});
    }
    public onFilterSearchChanged(event: any) {
        const keyword = event.target.value.toLowerCase();
        this.setState({FilterKeyword: keyword});
    }

    public onSidebarExpandedClick = (event: any) => {
        event.preventDefault();
        event.stopPropagation();

        const expansions = this.state.SidebarExpansions;
        const controlsNames = Object.getOwnPropertyNames(expansions);
        for (const name of controlsNames) {
            // console.log(" " + name + " " + expansions[name])
            expansions[name] = !this.state.SidebarExpanded
        }
        this.setState({
            SidebarExpanded: !this.state.SidebarExpanded,
            SidebarExpansions: expansions
        });
    };

    public onSidebarVisibleClick = (event: any) => {
        event.preventDefault();
        event.stopPropagation();

        this.setState({
            SidebarVisible: !this.state.SidebarVisible ,
            SidebarWidth: !this.state.SidebarVisible ? this.SidebarMaxWidth : "0px"
        });
    };

    public onSidebarSectionClick = (event: any) => {
        let id = event.target.id;
        if (id === "") {
            id = event.currentTarget.id;
        }
        // console.log("onSidebarSectionClick " + id)

        if (id === "") {
            return;
        }
        event.preventDefault();
        event.stopPropagation();

        const expansions = this.state.SidebarExpansions;

        // console.log("onSidebarSectionClick " + id + " " + expansions[id])
        expansions[id] = !expansions[id];

        let controlsExpanded = 0;
        let controlsNames = Object.getOwnPropertyNames(expansions);
        for (const name of controlsNames) {
            if (expansions[name]) {
                controlsExpanded += 1;
            }
        }

        this.setState({
            SidebarExpansions: expansions,
            SidebarExpanded: controlsExpanded === controlsNames.length
        });
    };

}


