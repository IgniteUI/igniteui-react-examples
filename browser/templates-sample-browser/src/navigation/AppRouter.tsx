import * as React from "react";
import { Switch, Route } from "react-router-dom"
import AppExplorer from "./AppExplorer"
import AppEmbedded from "./AppEmbedded"

// use this code for bundling of similar samples:
// import { TOC, SampleFallback, BundlingCharts, BundlingGauges, BundlingGrids, BundlingExcel } from "./toc"
// use this code for not bundling of samples
import { TOC, SampleFallback } from "./toc"

class AppRouter extends React.Component
{
    public static basename: string = "/react-demos";

    public static getCurrentPath(): string {
        const url = window.location.href;
        return url;
    }

    public static getSamplePath(): string {
        const url = window.location.href;
        const start = url.lastIndexOf("/") + 1;
        const path = url.substring(start);
        return path;
    }

    public static getSampleName(path?: string): string {
        if (path === undefined) {
            // defaulting to path of current sample
            path = AppRouter.getSamplePath();
        }
        for (const control of TOC) {
            for (const sample of control.samples) {
                if (sample.path.endsWith(path)){
                    return control.name + " - " + sample.name;
                }
            }
        }
        return "";
    }

    public static getSampleFile(path: string): string {
        const words = path.split('-');
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        const name = words.join('');
        return name;
    }

    public static getSampleMappings(): string[] {
        const names: string[] = [];
        for (const control of TOC) {
            for (const sample of control.samples) {
                const path = sample.path.replace("/","")
                const file = AppRouter.getSampleFile(path);
                names.push(path + " -> " + file);
            }
        }
        return names;
    }

    public static getControls(id: string): any[] {
        const matches: any[] = [];
        for (const control of TOC) {
            if (control.samples === undefined ||
                control.samples.length === 0) {
                continue;
            }
            if (control.samples[0].path.search(id) > 0) {
                matches.push(control);
            }
        }
        return matches;
    }

    public static getControlName(path: string): string {
        let name = "";
        const words = path.split('-');
        if (words.length < 2) {
            console.log("sample's path '" + path + "' is missing control name prefix, e.g. 'controlName-" + path + "'");
            return "unknown";
        }
        for (let i = 0; i < 2; i++) {
            name = name + "-" + words[i];
        }
        name = name.substring(1);
        return name;
    }

    public static getSampleRoutes(prefix: string, isExact: boolean): any[] {
        const routes = [];
        const links: string[] = [];
        // creating routes for all known samples
        for (const control of TOC) {
            for (const sample of control.samples) {
                const sampleLink = prefix + sample.path;
                const sampleComp = sample.comp;
                if (links.indexOf(sampleLink) === -1) {
                    links.push(sampleLink);
                    routes.push(
                        <Route exact={isExact} path={sampleLink} key={sampleLink} component={sampleComp}/>
                    );
                }
            }
        }
        // const fallbackPath = prefix + "/"
        // routes.push(
        //     <Route exact={false}
        //     path={fallbackPath}
        //     key={fallbackPath}
        //     component={SampleFallback}/>
        // );

        // creating fallback routes for all non-existing samples
        for (const control of TOC) {
            const sampleLink = prefix + "/" + control.group.toLowerCase();
            if (links.indexOf(sampleLink) === -1) {
                links.push(sampleLink);
                routes.push(
                    <Route exact={false} path={sampleLink} key={sampleLink} component={SampleFallback}/>
                );
            }
        }
        console.log("AppRoutes " + routes.length + " with '" + prefix + "' prefix");
        return routes;
    }

    public static getSampleRoutesFor(id: string, prefix: string): any[] {
        const routes = [];
        console.log("adding routes for " + id + " with '" + prefix + "' prefix");
        const controls = AppRouter.getControls(id);
        for (const control of controls) {
            for (const sample of control.samples) {
                const sampleLink = prefix + sample.path;
                const sampleComp = sample.comp;
                // console.log("adding route: " + sampleLink);
                routes.push(
                    <Route exact={true}
                    path={sampleLink}
                    key={sampleLink}
                    component={sampleComp}/>
                );
            }
        }
        return routes;
    }

    public static getSortedTOC(): any[] {
        let controls: any[] = [];
        for (const c of TOC) {

            const control: any = { samples: [], group: c.group, name: c.name, release: c.release  };
            for (const s of c.samples) {
                control.samples.push(s);
            }
            controls.push(control);
        }
        controls = controls.sort(this.sortControls)
        return controls;
    }

    public static sortControls(a: any, b: any) {
        // descending sort by control's release
        // if (a.release < b.release) { return 1; }
        // if (a.release > b.release) { return -1; }

        // descending sort by control's group
        // if (a.group < b.group) { return 1; }
        // if (a.group > b.group) { return -1; }

        // ascending sort by control's name
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }

        return 0;
    }

    public SamplesRoutes: any[];

    constructor(props: any) {
        super(props);

        console.log("AppRouter constructor");

        this.SamplesRoutes = [];
        // basic routes
        this.SamplesRoutes.push(
            <Route exact={true} path="/" key="root" component={AppExplorer}/>
            // <Route exact={true} path={`${process.env.PUBLIC_URL}/`} key="root" component={AppBrowser}/>
        );
        this.SamplesRoutes.push(
            <Route exact={false} path="/samples" key="samples" component={AppExplorer}/>
            // <Route exact={false} path={`${process.env.PUBLIC_URL}/samples`} key="samples" component={AppBrowser}/>
        );
        this.SamplesRoutes.push(
            <Route exact={true} path="/app" key="app" component={AppEmbedded}/>
            // <Route exact={true} path={`${process.env.PUBLIC_URL}/app`} key="app" component={AppEmbedded}/>
        );

        // use this code for bundling of similar samples:
        // this.SamplesRoutes.push(
        //     <Route exact={false} path="/charts" key="charts" component={BundlingCharts}/>
        // );
        // this.SamplesRoutes.push(
        //     <Route exact={false} path="/gauges" key="gauges" component={BundlingGauges}/>
        // );
        // this.SamplesRoutes.push(
        //     <Route exact={false} path="/grids" key="grids" component={BundlingGrids}/>
        // );
        // this.SamplesRoutes.push(
        //     <Route exact={false} path="/excel-library" key="excel-library" component={BundlingExcel}/>
        // );

        // routing to embedded samples (no side navigation)
        for (const route of AppRouter.getSampleRoutes("", true)) {
            this.SamplesRoutes.push(route);
        }
    }

    public render() {
        const samplePath = AppRouter.getSamplePath();
        console.log("AppRouter rendering: " + samplePath);
        return (
            <main style={{height: "100%", width: "100%" }}>
                    <Switch>
                        {this.SamplesRoutes}
                    </Switch>
            </main>
        );
    }
}


export default AppRouter
