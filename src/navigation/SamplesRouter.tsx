import React from 'react';
import { Route, Link } from "react-router-dom"

// import { SamplesEmbedded }from "./SamplesEmbedded";
// import { SamplesBrowser } from "./SamplesBrowser";
import { RouteComponent } from './SamplesData';
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

    public static getRoutes(routeComponents: RouteComponent[]): Route[] {
        let routes: any[] = [];

        for (const component of routeComponents ) {
            for (const sample of component.routes ) {
                let url = sample.path;
                routes.push (
                    <Route exact={false} path={url} key={url} component={sample.component}/>
                    // <Route exact={false} path={`${process.env.PUBLIC_URL}/samples`} key="samples" component={AppBrowser}/>
                );
                routes.push (
                    <Route exact={false} path={'/samples'+url} key={'/samples'+url} component={sample.component}/>
                );
            }
        }
        return routes;
    }

    public static getLinks(routeComponents: RouteComponent[], routePrefix?: string): Route[] {
        let lists: any[] = [];
        if (routePrefix === undefined) { routePrefix = ""; }

        for (const component of routeComponents ) {
            let links: any[] = [];
            for (const sample of component.routes ) {
                let url = routePrefix + sample.path;
                links.push (
                    <li key={url}>
                        <Link to={url}>{sample.name}</Link>
                    </li>
                );
            }
            lists.push(<h2 key={'header-' + component.name}>{component.name}</h2>);
            lists.push(<ul key={'list-' + component.name}>{links}</ul>);
        }
        return lists;
    }

    public NavRoutes: any[];

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
