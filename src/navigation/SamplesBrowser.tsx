import * as React from "react";
import { Route, Switch, Link } from "react-router-dom"
import { withRouter } from 'react-router-dom';

import './Scrollbars.css';
import './SamplesBrowser.css';
import { SamplesRouter } from './SamplesRouter';
import { RoutingSample } from './SamplesData';
import { RoutingGroup } from './SamplesData';

import { gaugesRoutingData } from "../samples/gauges/RoutingData";
// import { gridsRoutingData } from "../samples/grids/RoutingData";
// import { chartsRoutingData } from "../samples/charts/RoutingData";
// import { mapsRoutingData } from "../samples/maps/RoutingData";
// import { tests1RoutingData } from "../samples/tests1/RoutingData";
// import { tests2RoutingData } from "../samples/tests2/RoutingData";

// https://material-ui.com/components/material-icons/
import IconButton from '@material-ui/core/IconButton';
import * as SidebarMenuIcon from '@material-ui/icons/Menu';
import * as ToolbarArrowIcon from '@material-ui/icons/ArrowForwardIos';
import * as ItemsExpandedIcon from '@material-ui/icons/ExpandMore';
import * as ItemsCollapsedIcon from '@material-ui/icons/ExpandLess';
import * as SampleSearchIcon from "@material-ui/icons/Search";
import * as SampleLinkIcon from "@material-ui/icons/FiberManualRecord";

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
    public SidebarMaxWidth: string = "240px";
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

        console.log("SB ()");

        this.onSampleOpen = this.onSampleOpen.bind(this);
        // console.log(TestsRoutes.DataRoutes)

        // this.populateLookup(chartsRoutingData);
        // this.populateLookup(mapsRoutingData);
        this.populateLookup(gaugesRoutingData);
        // this.populateLookup(gridsRoutingData);

        // this.populateLinks(SamplesRouter.getLinks(chartsRoutingData, this.onSampleOpen));
        // this.populateLinks(SamplesRouter.getLinks(mapsRoutingData, this.onSampleOpen));
        this.populateLinks(SamplesRouter.getLinks(gaugesRoutingData, this.onSampleOpen));
        // this.populateLinks(SamplesRouter.getLinks(gridsRoutingData, this.onSampleOpen));
        // this.populateLinks(SamplesRouter.getLinks(tests1RoutingData, this.onSampleOpen));
        // this.populateLinks(SamplesRouter.getLinks(tests2RoutingData, this.onSampleOpen));

        // this.populateRoutes(SamplesRouter.getRoutes(chartsRoutingData));
        // this.populateRoutes(SamplesRouter.getRoutes(mapsRoutingData));
        this.populateRoutes(SamplesRouter.getRoutes(gaugesRoutingData));
        // this.populateRoutes(SamplesRouter.getRoutes(gridsRoutingData));
        // this.populateRoutes(SamplesRouter.getRoutes(tests1RoutingData));
        // this.populateRoutes(SamplesRouter.getRoutes(tests2RoutingData));

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
                let info = new SampleInfo();
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
        let sbBrowsingMode = SamplesRouter.isBrowsingMode();
        let sbSidebarStyle = sbBrowsingMode && this.state.SidebarVisible ? { display: "flex" } : { display: "none" };
        let sbToolbarStyle = sbBrowsingMode ? { display: "flex" } : { display: "none" };

        console.log("SB render  " + sbBrowsingMode);

        return (
            <div className="sbRoot" >

                <div className="sbNavigation" style={sbSidebarStyle}>
                    {/* <Link to={`/`}>Samples root</Link>
                    <Link to={`/samples`}>Samples home</Link> */}
                    {/* <Link to={`/samples/charts`}>samples charts </Link> */}
                    {/* <Link to={`/charts`}>charts</Link> */}
                    {this.navLinks}
                    {/* {this.test2Links} */}
                    {/* {this.test1Links}
                    {this.test2Links} */}
                </div>

                <div className="sbContent" >
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
                    <div className="sbSwitch" >
                        <Switch >
                            {/* <Route exact={false} path="/samples/charts" key="charts" component={ChartsRouter}/> */}
                            {/* <Route exact={false} path="/charts" key="charts" component={ChartsRouter}/> */}
                            <Route exact={true} path="/"  >
                                <h3>Please select a sample</h3>
                            </Route>
                            <Route exact={true} path="/samples">
                                <h3>Please select a sample</h3>
                            </Route>
                            {this.navRoutes}
                            {/* {this.test2Routes} */}

                            {/* <Route exact={true} >
                                <h3>NoPageFound exact=true</h3>
                            </Route> */}
                            <Route exact={false} >
                                <h3>NoPageFound exact=false</h3>
                            </Route>
                            {/* <Route component={NoPageFound} /> */}
                        </Switch>
                    </div>

                </div>

            </div>
        );
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
            SidebarVisible: !this.state.SidebarVisible ,
            SidebarWidth: !this.state.SidebarVisible ? this.SidebarMaxWidth : "0px"
        });
    };
}

export default withRouter(SamplesBrowser);