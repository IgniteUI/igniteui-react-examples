import * as React from 'react';
import './DockManagerStyles.css';

import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';

import { IgcDockManagerComponent, IgcContentPane } from "igniteui-dockmanager";
import { IgcDockManagerPaneType, IgcSplitPaneOrientation } from "igniteui-dockmanager";
import { defineCustomElements } from "igniteui-dockmanager/loader";

/* eslint-disable */
declare global {
    namespace JSX {
        // tslint:disable-next-line:interface-name
        interface IntrinsicElements {
            "igc-dockmanager": any;
        }
    }
}
/* eslint-enable */

defineCustomElements();

export default class DockManagerEmbeddingFrames extends React.Component {

    public dockManager: IgcDockManagerComponent;
    public geoMapPane: IgcContentPane;
    public gaugePane: IgcContentPane;
    public doughnutChartPane: IgcContentPane;

    constructor(props: any) {
        super(props);

        // this.onMapRef = this.onMapRef.bind(this);
    }

    public render() {
        return (
            <div className="igContainer">
                <igc-dockmanager id="dockManager">
                    <div className="dockManagerFull" slot="doughnutChartContainer"  >
                        <iframe className="dockManagerFrame" seamless frameBorder="0"
                        src='https://infragistics.com/webcomponents-demos/charts/doughnut-chart-overview' ></iframe>
                    </div>
                    <div className="dockManagerFull" slot="gaugeContainer" >
                        <iframe className="dockManagerFrame" seamless frameBorder="0"
                        src='https://infragistics.com/webcomponents-demos/gauges/radial-gauge-needle' ></iframe>
                    </div>
                    <div className="dockManagerFull" slot="geoMapContainer"  >
                        <iframe className="dockManagerFrame" seamless frameBorder="0"
                        src='https://infragistics.com/react-demos/maps/geo-map-binding-data-csv'  ></iframe>
                    </div>
                </igc-dockmanager>
            </div>
        );
    }

    public componentDidMount() {
        // fetching JSON data with geographic locations from public folder


        this.gaugePane = {
            // size: 150,
            header: 'ANGULAR RADIAL GAUGE',
            type: IgcDockManagerPaneType.contentPane,
            contentId: 'gaugeContainer'
        };

        this.doughnutChartPane = {
            // size: 150,
            header: 'WEB COMPONENT DOUGHNUT CHART',
            type: IgcDockManagerPaneType.contentPane,
            contentId: 'doughnutChartContainer'
        };

        this.geoMapPane = {
            // size: 200,
            header: 'REACT GEOGRAPHIC MAP',
            type: IgcDockManagerPaneType.contentPane,
            contentId: 'geoMapContainer'
        };

        this.dockManager = document.getElementById("dockManager") as IgcDockManagerComponent;
        this.dockManager.layout = {
            rootPane: {
                type: IgcDockManagerPaneType.splitPane,
                orientation: IgcSplitPaneOrientation.vertical,
                panes: [
                    {
                        type: IgcDockManagerPaneType.splitPane,
                        orientation: IgcSplitPaneOrientation.horizontal,
                        // size: 250,
                        panes: [  this.gaugePane, this.doughnutChartPane]
                    },
                    {
                        type: IgcDockManagerPaneType.splitPane,
                        orientation: IgcSplitPaneOrientation.vertical,
                        // size: 200,
                        panes: [
                            // this.financialChartPane,
                            this.geoMapPane ]
                    },

                ]
            },
        };
    }

}
