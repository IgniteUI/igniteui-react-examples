
// this improves bundling of common modules:

// TODO decide if we want to bundle these modules:
// import { IgrDataChartCoreModule } from 'igniteui-react-charts';
// import { IgrCategoryChartModule } from 'igniteui-react-charts';
// import { IgrFinancialChartModule } from 'igniteui-react-charts';
// import { IgrLegendModule } from 'igniteui-react-charts';
// import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
// import { IgrDataChartScatterCoreModule } from 'igniteui-react-charts';
// import { IgrDataChartScatterModule } from 'igniteui-react-charts';
// import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
// import { IgrDataChartPolarCoreModule } from 'igniteui-react-charts';
// import { IgrDataChartPolarModule } from 'igniteui-react-charts';
// import { IgrDataChartRadialCoreModule } from 'igniteui-react-charts';
// import { IgrDataChartRadialModule } from 'igniteui-react-charts';
// import { IgrDataChartShapeCoreModule } from 'igniteui-react-charts';
// import { IgrDataChartShapeModule } from 'igniteui-react-charts';
// other charts:
// import { IgrDoughnutChartModule } from 'igniteui-react-charts';
// import { IgrItemLegendModule } from 'igniteui-react-charts';
// import { IgrRingSeriesModule } from 'igniteui-react-charts';
// import { IgrPieChartModule } from 'igniteui-react-charts';

// IgrDataChartCoreModule.register();
// IgrCategoryChartModule.register();
// IgrFinancialChartModule.register();
// IgrDataChartCategoryModule.register();
// IgrDataChartScatterCoreModule.register();
// IgrDataChartScatterModule.register();
// IgrDataChartPolarCoreModule.register();
// IgrDataChartPolarModule.register();
// IgrDataChartInteractivityModule.register();
// IgrDataChartRadialCoreModule.register();
// IgrDataChartRadialModule.register();
// IgrDataChartShapeCoreModule.register();
// IgrDataChartShapeModule.register();
// IgrLegendModule.register();
// IgrDoughnutChartModule.register();
// IgrRingSeriesModule.register();
// IgrItemLegendModule.register();
// IgrPieChartModule.register();

import * as React from "react";
import { Switch, Route } from "react-router-dom"
import { Component } from "react";
import SampleList from "./SampleList"
import AppRouter from "./AppRouter"
import "../samples/styles.css";

class BundlingCharts extends Component {

    public SamplesRoutes: any[];

    constructor(props: any) {
        super(props);

        console.log("BundlingCharts constructor");

        this.SamplesRoutes = [];
        const currentPath = AppRouter.getCurrentPath();
        const usePrefix = currentPath.search("samples") > 0;
        if (usePrefix) {
            // routes for samples with navigation
            this.SamplesRoutes = AppRouter.getSampleRoutesFor("charts", "/samples")
        } else {
            // routes for samples without navigation (embedded in docs)
            this.SamplesRoutes = AppRouter.getSampleRoutesFor("charts", "")
        }

        // route for landing of page of charts samples
        this.SamplesRoutes.push(
            <Route exact={false} path="/charts" key="/charts" component={SampleList}/>
        );
    }

    public render() {
        // console.log("BundlingCharts render ");
        return (
            <div style={{height: "100%", width: "100%" }}>
                <Switch>
                        {this.SamplesRoutes}
                </Switch>
            </div>
        );
    }
}

export default BundlingCharts;