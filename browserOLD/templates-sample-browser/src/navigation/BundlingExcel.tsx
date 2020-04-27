
// this improves bundling of common excel modules
import { IgrExcelCoreModule } from 'igniteui-react-excel';
// import { IgrExcelXlsxModule } from 'igniteui-react-excel';
// import { IgrExcelModule } from 'igniteui-react-excel';

IgrExcelCoreModule.register();
// IgrExcelModule.register();
// IgrExcelXlsxModule.register();

import * as React from "react";
import { Switch, Route } from "react-router-dom"
import { Component } from "react";
import SampleList from "./SampleList"
import AppRouter from "./AppRouter"
import "../samples/styles.css";

class BundlingExcel extends Component {

    public SamplesRoutes: any[];

    constructor(props: any) {
        super(props);

        console.log("BundlingExcel constructor");

        this.SamplesRoutes = [];
        const currentPath = AppRouter.getCurrentPath();
        const usePrefix = currentPath.search("samples") > 0;
        if (usePrefix) {
            // routes for samples with navigation
            this.SamplesRoutes = AppRouter.getSampleRoutesFor("excel-library", "/samples")
        } else {
            // routes for samples without navigation (embedded in docs)
            this.SamplesRoutes = AppRouter.getSampleRoutesFor("excel-library", "")
        }

        // route for landing of page of excel-library samples
        this.SamplesRoutes.push(
            <Route exact={false} path="/excel-library" key="/excel-library" component={SampleList}/>
        );
    }

    public render() {
        // console.log("BundlingExcel render ");
        return (
            <div style={{height: "100%", width: "100%" }}>
                <Switch>
                        {this.SamplesRoutes}
                </Switch>
            </div>
        );
    }
}

export default BundlingExcel;