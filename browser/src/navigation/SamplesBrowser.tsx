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

// import { gaugesRoutingData } from "../samples/gauges/RoutingData";
// import { gridsRoutingData } from "../samples/grids/RoutingData";
// import { chartsRoutingData } from "../samples/charts/RoutingData";
import { mapsRoutingData } from "../samples/maps/RoutingData";
// import { excelRoutingData } from "../samples/excel/RoutingData";
// import { layoutsRoutingData } from "../samples/layouts/RoutingData";
// import { inputsRoutingData } from "../samples/inputs/RoutingData";
// import { editorsRoutingData } from "../samples/editors/RoutingData";
// import { notificationsRoutingData } from "../samples/notifications/RoutingData";
// import { menusRoutingData } from "../samples/menus/RoutingData";
// import { schedulingRoutingData } from "../samples/scheduling/RoutingData";

// import { CacheBuster, CacheBusterState } from '../CacheBuster';
import BrowserInfo from './BrowserInfo.json';

import CacheApp from '../CacheApp.json';
const currentVersion = CacheApp.version;
console.log('SB loaded CacheApp.json file: ' + currentVersion)

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
    public igrVersion: string = "";

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

        // logging versions of IG packages
        for (const item of BrowserInfo) {
            if (item.name && item.name.indexOf('igniteui-react-core') >= 0) {
                console.log('SB uses v' + item.version + ' ' + item.name);
                this.igrVersion = item.version.toString();
                break;
            }
        }

        this.onSampleOpen = this.onSampleOpen.bind(this);
        // console.log(TestsRoutes.DataRoutes)

        const routingProviders: RoutingGroup[] = [
            // inputsRoutingData,
            // layoutsRoutingData,
            // gridsRoutingData,
            // chartsRoutingData,
            mapsRoutingData,
            // gaugesRoutingData,
            // excelRoutingData,
            // editorsRoutingData,
            // notificationsRoutingData,
            // menusRoutingData,
            // schedulingRoutingData
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

// version from response - first param, local version second param
public isObsolete(versionA: string, versionB: string) {
    const versionsA = versionA.split(/\./g);
    const versionsB = versionB.split(/\./g);
    while (versionsA.length || versionsB.length) {
      const a = Number(versionsA.shift());
      const b = Number(versionsB.shift());
      // eslint-disable-next-line no-continue
      if (a === b) continue;
      // eslint-disable-next-line no-restricted-globals
      const comp = a < b || isNaN(b);
      console.log('SB version isObsolete ' + a + ' vs ' + b + ' = ' + comp );
      return comp; // a > b || isNaN(b);
    }
    return false;
}

    public async fetchMetadata(): Promise<string> {
        let metaVersion = '1.0.0';
        let metaURL = '/meta.json';
        let pathname = window.location.pathname;
        // if (pathname !== '/') {
        //     metaURL = pathname + '/meta.json';
        // }
        console.log('SB version location: ' + pathname);
        console.log('SB version public: ' + process.env.PUBLIC_URL);
        try {
          const response = await fetch(metaURL);
          const metaJson = await response.json();  // may error if there is no body
          metaVersion = metaJson.version;
        //   console.log('SB version: '+ metaURL + ' ver: ' + metaVersion);
        } catch (ex) {
            console.log('SB fetch error \n' + ex);
            // this.loadOfflineData(index, observer);
        }
        return new Promise<string>((resolve, reject) => { resolve(metaVersion); });
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
        console.log("SB nav " + sbRoute);

        this.fetchMetadata()
        .then((cachedVersion) => {
          console.log('SB version meta.json file: ' + cachedVersion + ' vs cacheApp.json ' + currentVersion)
          if (this.isObsolete(cachedVersion, currentVersion)) {
            console.log(`SB version changed from  ${cachedVersion} to ${currentVersion}. Forcing refresh`);

            // console.log('SB cache clearing ...')
            // if (caches) {
            //   // Service worker cache should be cleared with caches.delete()
            //   caches.keys().then(function(names) {
            //     for (let name of names) caches.delete(name);
            //   });
            // }
            // console.log('SB cache hard reloading...')
            // delete browser cache and hard reload
            // window.location.reload();
          } else {
            console.log(`SB version not changed ${currentVersion}. No cache refresh.`);
          }
        });

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

                                    <div className="sbToolbarMenu" onClick={this.onSidebarVisibleClick}>&#x2630;</div>

                                    {/* <div className="sbToolbarLabel"> {this.state.SelectedControl} </div> */}
                                    {/* <ToolbarArrowIcon.default className="sbToolbarIcon" /> */}
                                    {/* <div className="sbToolbarLabel"> - </div> */}
                                    <div className="sbToolbarLabel"> {this.state.SelectedSample} </div>
                                    {/* <ToolbarArrowIcon.default className="sbToolbarIcon" /> */}
                                    <div className="sbToolbarVersion">v{this.igrVersion}</div>
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