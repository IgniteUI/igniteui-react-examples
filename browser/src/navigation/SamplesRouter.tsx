import React from 'react';
import { Route, BrowserRouter as Router, Link, useLocation } from "react-router-dom"
// import { SamplesEmbedded }from "./SamplesEmbedded";
// import { SamplesBrowser } from "./SamplesBrowser";
import { RoutingComponent } from './SamplesData';
import { RoutingGroup } from './SamplesData';
import { RoutingSample } from './SamplesData';
// import { RouteInfo } from './SamplesData'; extends React.Component

export class SamplesRouter {

    public static isBrowsingMode(): boolean {

        let location = window.location;
        // console.log("SB nav: " + location.href);
        // console.log("SB origin '" + location.origin + "'");
        // console.log("SB pathname '" + location.pathname + "'");

        if (location.pathname === "/" ||
            location.pathname.indexOf("/samples") > 0) {
            return true;
        }
        return false;
    }

    public static getRoutes(group: RoutingGroup): any {
        let routes: any[] = [];

        for (const component of group.components ) {
            for (const sample of component.routes ) {
                let url = sample.path;
                // console.log('getRoutes ' + typeof(sample.component) + " " + sample.path);
                // console.log('getRoutes sample.name ' + sample.name);
                routes.push (
                    <Router>
                        <Route path={url} key={url} element={sample.component}/>                    
                    </Router>
                    // <Route exact={false} path={`${process.env.PUBLIC_URL}/samples`} key="samples" component={AppBrowser}/>
                );
                routes.push (
                    <Router>
                    <Route path={'/samples'+url} key={'/samples'+url} element={sample.component}/>
                    </Router>
                );
            }
        }
        return routes;
    }

    public static getLinks(group: RoutingGroup, onSampleOpen: (sample: RoutingSample) => void): any[] {
        let lists: any[] = [];
        // if (routePrefix === undefined) { routePrefix = ""; }

        lists.push(<div className='sbNavigation-group' key={'group-' + group.name}>{group.name}</div>);
        for (const component of group.components ) {
            let links: any[] = [];
            for (const sample of component.routes ) {
                const location = useLocation();

                let id = 'sbNav-link-' + sample.path;
                let url = '/samples' + sample.path;
                links.push (
                    // <a className='sbNavigation-link' key={url2} href={url2}>
                    //     <div className='sbNavigation-link-symbol'>&#x2605;</div>
                    //     <div>{sample.name}</div>
                    // </a>
                    <Router>
                        <Route>
                            <Link className='sbNavigation-link' key={url} id={id} to={url}
                                onClick={(e) => this.onClickLink(sample, onSampleOpen)}>
                                <div className='sbNavigation-link-symbol'>─</div>
                                <div>{sample.name}</div>
                            </Link>
                        </Route>
                    </Router>
                );
            }
            let navListID = 'sbNav-list-' + component.name
            let navList = <div className='sbNavigation-list' key={navListID} id={navListID} style={{display: "none"}} >{links}</div>;

            let navComponentID = 'sbNav-component-' + component.name
            let navComponent = <div
                className='sbNavigation-control'
                key={navComponentID}
                id={navComponentID}
                onClick={(e) => this.onClickToggle(component)}>&#10148;  {component.name}</div>;

            lists.push(navComponent);
            lists.push(navList);
        }
        return lists;
    }

    public static onClickLink(sample: RoutingSample, onSampleOpen: (sample: RoutingSample) => void): void {
        // console.log('onClickOpen ' + window.location.pathname );
        let selectedLink = "sbNav-link-" + sample.path;
        document.querySelectorAll(".sbNavigation-link").forEach(element => {
            let navLink = element as HTMLElement;
            if (navLink) {
                navLink.setAttribute("style", navLink.id === selectedLink ? "color: #55a8fa;" : "color: #dbdbdb;");
            }
        });
        onSampleOpen(sample);
    }

    public static onClickToggle(component: RoutingComponent): void {
        let navList = document.getElementById("sbNav-list-" + component.name);
        if (navList) {
            let style = navList.style as CSSStyleDeclaration;
            let isVisible = style.display === "none";
            // let state = navList.getAttribute("state") as string;
            // let isVisible = state === "expanded";
            // navList.setAttribute("state", isVisible ? "expanded" : "collapsed");
            navList.setAttribute("style", isVisible ? "display: block;" : "display: none;");
        }
    }
}

