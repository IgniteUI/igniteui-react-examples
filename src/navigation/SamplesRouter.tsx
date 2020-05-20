import React from 'react';
import { Route, Link } from "react-router-dom"

// import { SamplesEmbedded }from "./SamplesEmbedded";
// import { SamplesBrowser } from "./SamplesBrowser";
import { RoutingComponent } from './SamplesData';
import { RoutingGroup } from './SamplesData';
import { RoutingSample } from './SamplesData';
// import { RouteInfo } from './SamplesData'; extends React.Component

export class SamplesRouter {

    public static isBrowsingMode(): boolean {

        let location = window.location;
        console.log("SB URL  " + location.href);
        console.log("SB origin '" + location.origin + "'");
        console.log("SB pathname '" + location.pathname + "'");

        if (location.pathname === "/" ||
            location.pathname.includes("/samples")) {
            return true;
        }
        return false;
    }

    public static getRoutes(group: RoutingGroup): Route[] {
        let routes: any[] = [];

        for (const component of group.components ) {
            for (const sample of component.routes ) {
                let url = sample.path;
                routes.push (
                    <Route exact={true} path={url} key={url} component={sample.component}/>
                    // <Route exact={false} path={`${process.env.PUBLIC_URL}/samples`} key="samples" component={AppBrowser}/>
                );
                routes.push (
                    <Route exact={true} path={'/samples'+url} key={'/samples'+url} component={sample.component}/>
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

                let id = 'sbNav-link-' + sample.path;
                let url = '/samples' + sample.path;
                links.push (
                    // <a className='sbNavigation-link' key={url2} href={url2}>
                    //     <div className='sbNavigation-link-symbol'>&#x2605;</div>
                    //     <div>{sample.name}</div>
                    // </a>
                    <Link className='sbNavigation-link' key={url} id={id} to={url}
                          onClick={(e) => this.onClickLink(sample, onSampleOpen)}>
                        <div className='sbNavigation-link-symbol'>&#x2605;</div>
                        <div>{sample.name}</div>
                    </Link>
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

    public static onClickLink(sample: RoutingSample, onSampleOpen: (sample: RoutingSample) => void) {
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

    public static onClickToggle(component: RoutingComponent) {
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


    // constructor(props: any) {
    //     super(props);

    //     console.log("SamplesRouter constructor");

    //     this.NavRoutes = [];
    //     this.NavRoutes.push(
    //         <Route exact={false} path="/samples" key="samples" component={SamplesBrowser}/>
    //         // <Route exact={false} path={`${process.env.PUBLIC_URL}/samples`} key="samples" component={AppBrowser}/>
    //     );
    //     // basic routes
    //     this.NavRoutes.push(
    //         <Route exact={false} path="/" key="root" component={SamplesEmbedded}/>
    //         // <Route exact={true} path={`${process.env.PUBLIC_URL}/`} key="root" component={AppBrowser}/>
    //     );
    // }

    // public render() {
    //     // const samplePath = AppRouter.getSamplePath();
    //     // console.log("AppRouter rendering: " + samplePath);
    //     return (
    //         <main style={{height: "100%", width: "100%" }}>
    //             {/* <Switch>
    //                 {this.NavRoutes}
    //             </Switch> */}
    //         </main>
    //     );
    // }

}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
