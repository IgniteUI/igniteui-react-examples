
// importing common modules for all gauges samples
// this improves bundling of common modules
import { IgrBulletGraphModule } from 'igniteui-react-gauges';
import { IgrLinearGaugeModule } from 'igniteui-react-gauges';
import { IgrRadialGaugeModule } from 'igniteui-react-gauges';

IgrBulletGraphModule.register();
IgrLinearGaugeModule.register();
IgrRadialGaugeModule.register();

import * as React from "react";
import { Switch, Route } from "react-router-dom"
import { Component } from "react";
import SampleList from "./SampleList"
import AppRouter from "./AppRouter"
import "../samples/styles.css";

class BundlingGauges extends Component {

    public SamplesRoutes: any[];

    constructor(props: any) {
        super(props);

        console.log("BundlingGauges constructor");

        this.SamplesRoutes = [];
        const currentPath = AppRouter.getCurrentPath();
        const usePrefix = currentPath.search("samples") > 0;
        if (usePrefix) {
            // routes for samples with navigation
            this.SamplesRoutes = AppRouter.getSampleRoutesFor("gauges", "/samples")
        } else {
            // routes for samples without navigation (embedded in docs)
            this.SamplesRoutes = AppRouter.getSampleRoutesFor("gauges", "")
        }

        // route for landing of page of gauges samples
        this.SamplesRoutes.push(
            <Route exact={false} path="/gauges" key="/gauges" component={SampleList}/>
        );
    }

    public render() {
        // console.log("BundlingGauges render ");
        return (
            <div style={{height: "100%", width: "100%" }}>
                <Switch>
                        {this.SamplesRoutes}
                </Switch>
            </div>
        );
    }
}

export default BundlingGauges;