/* eslint-disable no-undef */

import * as React from "react";
import { Route, Switch } from "react-router-dom"
import { withRouter } from 'react-router-dom';

import './Scrollbars.css';
import './SamplesBrowser.css';
import { SamplesRouter } from './SamplesRouter';
import { SamplesLoading } from './SamplesLoading';
import { SamplesFallback } from './SamplesFallback';
import { RoutingSample } from './SamplesData';
import { RoutingGroup } from './SamplesData';

import { gaugesRoutingData } from "../samples/gauges/RoutingData";
// import { gridsRoutingData } from "../samples/grids/RoutingData";
import { chartsRoutingData } from "../samples/charts/RoutingData";
import { mapsRoutingData } from "../samples/maps/RoutingData";
// import { excelRoutingData } from "../samples/excel/RoutingData";
//import { layoutsRoutingData } from "../samples/layouts/RoutingData";
// import { editorsRoutingData } from "../samples/editors/RoutingData";

// https://material-ui.com/components/material-icons/
import IconButton from '@material-ui/core/IconButton';
import * as SidebarMenuIcon from '@material-ui/icons/Menu';
// import * as ToolbarArrowIcon from '@material-ui/icons/ArrowForwardIos';
// import * as ItemsExpandedIcon from '@material-ui/icons/ExpandMore';
// import * as ItemsCollapsedIcon from '@material-ui/icons/ExpandLess';
// import * as SampleSearchIcon from "@material-ui/icons/Search";
// import * as SampleLinkIcon from "@material-ui/icons/FiberManualRecord";

import { CacheBuster, CacheBusterState } from '../CacheBuster';

class SampleInfo {
    public name: string;
    public control: string;
    public group: string;
    public route: string;
}

export class SamplesBrowser extends React.Component<any, any>
{
    public navLinks: any[] = [];
    public navRoutes: any[] = [];
    public navLookup: Map<string, SampleInfo> = new Map();

    public styles: any = {
        toolbarIcon: { display: "inline-block", fontSize: "1rem",},
        toolbarBtn: { color: "white", padding: "0.25rem", marginLeft: "0rem", marginRight: "0.75rem", fontSize: "medium", display: "inline-block", height: "32px",},
        // sidebarGroupBtn: { color: "black", padding: "0.15rem", marginRight: "5px", display: "inline-block", fontSize: "small", height: "32px"},
        // sidebarLinksBtn: { color: "inherit", padding: "0rem", marginLeft: "0.3rem", marginRight: "0.4rem",
        //     display: "inline-block", fontSize: "small", verticalAlign: "middle",
        // //  height: "32px"
        // },

        // searchStyle: {fontSize: "1rem", verticalAlign: "middle", color: "white",  },
        iconStyle: {fontSize: "1rem", verticalAlign: "middle" },
    }

    constructor(props: any) {
        super(props);

        console.log('SB uses IG v16.14.0-beta.2');

        this.onSampleOpen = this.onSampleOpen.bind(this);
        // console.log(TestsRoutes.DataRoutes)

        const routingProviders: RoutingGroup[] = [
            // layoutsRoutingData,
            // gridsRoutingData,
            chartsRoutingData,
            mapsRoutingData,
            gaugesRoutingData,
            // excelRoutingData,
            // editorsRoutingData
        ];

        for (const routingData of routingProviders) {
            this.populateLookup(routingData);
            this.populateLinks(SamplesRouter.getLinks(routingData, this.onSampleOpen));
            this.populateRoutes(SamplesRouter.getRoutes(routingData));
        }

        this.state = {
            SidebarVisible: true,
            SelectedGroup: '',
            SelectedControl: '',
            SelectedSample: 'react samples browser',
        }
    }

    public populateLookup(group: RoutingGroup) {
        for (const component of group.components) {
            for (const route of component.routes) {
                const info = new SampleInfo();
                info.group = group.name;
                info.route = route.path;
                info.control = component.name;
                info.name = route.name;
                this.navLookup.set('/samples' + route.path, info);
                this.navLookup.set(route.path, info);
            }
        }
    }

    public populateLinks(array: any[]) {
        for (const item of array) {
            this.navLinks.push(item);
        }
    }

    public populateRoutes(array: any[]) {
        for (const item of array) {
            this.navRoutes.push(item);
        }
    }

    public onSampleOpen = (sample: RoutingSample) => {
        // const item = event.currentTarget.id;
        // console.log('onControlClick ' + item);
        if (this.navLookup.has(sample.path)) {
            // let info = this.navLookup.get(sample.path);
            // this.setState({
            //     SelectedSample: info.control + ' ' + info.name,
            // });
        }
    };

    public render() {
        const sbBrowsingMode = SamplesRouter.isBrowsingMode();
        const sbSidebarStyle: any = {}; // sbBrowsingMode && this.state.SidebarVisible ? { display: "flex" } : { display: "none" };
        const sbToolbarStyle: any = {}; // sbBrowsingMode ? { display: "flex" } : { display: "none" };
        const sbSwitchStyle: any = {}; // sbBrowsingMode ? { width: "calc(100% - 270px)" } : { width: "100%" };
        const sbContentStyle: any = {};

        const sbToolbarHeight = 50;
        const sbSidebarWidth = 270;
        if (sbBrowsingMode && this.state.SidebarVisible) {
            sbSidebarStyle.minWidth = sbSidebarWidth + "px";
            sbSidebarStyle.width = sbSidebarWidth + "px";
            sbSidebarStyle.display = "flex";
            sbContentStyle.width = "calc(100% - " + sbSidebarWidth + "px)";
        } else {
            sbSidebarStyle.display = "none";
            sbSidebarStyle.minWidth = "0px";
            sbSidebarStyle.width = "0px";
        }

        if (sbBrowsingMode) {
            sbToolbarStyle.display = "flex";
            sbToolbarStyle.height = sbToolbarHeight + "px";
            // sbToolbarStyle.width = "calc(100% - " + sbSidebarWidth + "px)";
            // sbContentStyle.width = "calc(100% - " + sbSidebarWidth + "px)";
            // sbSwitchStyle.width = "calc(100% - " + sbSidebarWidth + "px)";
            sbSwitchStyle.height = "calc(100% - " + sbToolbarHeight + "px)";
            sbSwitchStyle.width = "100%";
            // sbSidebarStyle.minWidth = sbSidebarWidth + "px";
        } else {
            sbToolbarStyle.display = "none";
            // sbContentStyle.width = "100%";
            sbSwitchStyle.width = "100%";
            sbSwitchStyle.height = "100%";
        }

        let sbRoute = window.location.pathname;
        console.log("SB render " + sbRoute + " with browsing=" + sbBrowsingMode);

        // NOTE CacheBuster is not used at this moment:
        // return (
            // <CacheBuster>
            //     {({ loading, isLatest, isRefreshed, refreshWebsite }: CacheBusterState) => {
            //         // const sbReloads = window.localStorage.getItem("sb-reloads");
            //         if (loading) return (<SamplesLoading/>);
            //         if (!loading && !isLatest && !isRefreshed) {
            //             console.log('SB refreshing');
            //             refreshWebsite();
            //             // window.localStorage.setItem("sb-reloads", "true");
            //         }
                    return (
                        <div className="sbRoot" >
                            <div className="sbSidebar" style={sbSidebarStyle}>
                                {/*  <Link to={`/samples`}>Samples home</Link> */}
                                {this.navLinks}
                            </div>

                            <div className="sbContent" style={sbContentStyle}>
                                <div className="sbToolbar" style={sbToolbarStyle}>
                                    <IconButton onClick={this.onSidebarVisibleClick} style={this.styles.toolbarBtn} edge="start" >
                                        <SidebarMenuIcon.default  />
                                    </IconButton>
                                    {/* <div className="sbToolbarLabel"> {this.state.SelectedControl} </div> */}
                                    {/* <ToolbarArrowIcon.default className="sbToolbarIcon" /> */}
                                    {/* <div className="sbToolbarLabel"> - </div> */}
                                    <div className="sbToolbarLabel"> {this.state.SelectedSample} </div>
                                    {/* <ToolbarArrowIcon.default className="sbToolbarIcon" /> */}

                                    {/* {this.state.SelectedSample} style={this.styles.toolbarIcon} */}
                                </div>
                                {/* <React.Suspense fallback={<span>Loading...</span>}> */}
                                <React.Suspense fallback={<SamplesLoading/>}>
                                <div className="sbSwitch" style={sbSwitchStyle}>
                                    <Switch >
                                        {/* <Route exact={false} path="/samples/charts" key="charts" component={ChartsRouter}/> */}
                                        {/* <Route exact={false} path="/charts" key="charts" component={ChartsRouter}/> */}
                                        <Route exact={true} path="/"  >
                                            <div/>
                                            {/* style={{paddingLeft: "1rem"}}>Please select a sample</h3> */}
                                        </Route>
                                        <Route exact={true} path="/samples">
                                            <h3 style={{marginLeft: "1rem"}}>Please select a sample</h3>
                                            {/* <SamplesLoading/> */}
                                        </Route>
                                        {/* routes to all samples */}
                                        {this.navRoutes}

                                        {/* routing fallback displayed when a sample is missing */}
                                        <Route exact={false} >
                                            <SamplesFallback />
                                        </Route>
                                    </Switch>
                                </div>
                                </React.Suspense>

                            </div>

                        </div>
                    );
        //         }}
        //     </CacheBuster>
        // );
    }

    public componentDidMount() {
        this.updateToolbar();
    }

    public componentDidUpdate(prevProps: any) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            // console.log('Route change!');
            this.updateToolbar();
        }
    }

    public updateToolbar() {
        if (this.navLookup.has(this.props.location.pathname)) {
            let info = this.navLookup.get(this.props.location.pathname);
            this.setState({
                SelectedGroup: info.group,
                SelectedControl: info.control,
                // SelectedSample: info.name,
                SelectedSample: info.control + '  -  ' + info.name,
            });
        }
    }
    public onSidebarVisibleClick = (event: any) => {
        event.preventDefault();
        event.stopPropagation();

        this.setState({
            SidebarVisible: !this.state.SidebarVisible,
        });
    };
}

export default withRouter(SamplesBrowser);