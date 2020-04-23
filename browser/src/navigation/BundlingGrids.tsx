
// importing common modules for all grids samples
// this improves bundling of common modules
import { IgrLiveGridModule } from 'igniteui-react-grids';

IgrLiveGridModule.register();

import * as React from "react";
import { Switch, Route } from "react-router-dom"
import { Component } from "react";
import SampleList from "./SampleList"
import AppRouter from "./AppRouter"
import "../samples/styles.css";

class BundlingGrids extends Component {

    public SamplesRoutes: any[];

    constructor(props: any) {
        super(props);

        console.log("BundlingGrids constructor");

        this.SamplesRoutes = [];
        const currentPath = AppRouter.getCurrentPath();
        const usePrefix = currentPath.search("samples") > 0;
        if (usePrefix) {
            // routes for samples with navigation
            this.SamplesRoutes = AppRouter.getSampleRoutesFor("grids", "/samples")
        } else {
            // routes for samples without navigation (embedded in docs)
            this.SamplesRoutes = AppRouter.getSampleRoutesFor("grids", "")
        }

        // route for landing of page of grids samples
        this.SamplesRoutes.push(
            <Route exact={false} path="/grids" key="/grids" component={SampleList}/>
        );
    }

    public render() {
        // console.log("BundlingGrids render ");
        return (
            <div style={{height: "100%", width: "100%" }}>
                <Switch>
                        {this.SamplesRoutes}
                </Switch>
            </div>
        );
    }
}

export default BundlingGrids;