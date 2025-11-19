import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './DockManagerStyles.css';
import { IgrContentPane, IgrDockManager, IgrDockManagerPaneType, IgrSplitPaneOrientation } from 'igniteui-react-dockmanager';

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

export default class DockManagerEmbeddingFrames extends React.Component {

    public dockManager: IgrDockManager;
    public geoMapPane: IgrContentPane;
    public gaugePane: IgrContentPane;
    public doughnutChartPane: IgrContentPane;

    constructor(props: any) {
        super(props);

        // this.onMapRef = this.onMapRef.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
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
            type: IgrDockManagerPaneType.contentPane,
            contentId: 'gaugeContainer'
        };

        this.doughnutChartPane = {
            // size: 150,
            header: 'WEB COMPONENT DOUGHNUT CHART',
            type: IgrDockManagerPaneType.contentPane,
            contentId: 'doughnutChartContainer'
        };

        this.geoMapPane = {
            // size: 200,
            header: 'REACT GEOGRAPHIC MAP',
            type: IgrDockManagerPaneType.contentPane,
            contentId: 'geoMapContainer'
        };

        this.dockManager = document.getElementById("dockManager") as IgrDockManager;
        this.dockManager.layout = {
            rootPane: {
                type: IgrDockManagerPaneType.splitPane,
                orientation: IgrSplitPaneOrientation.vertical,
                panes: [
                    {
                        type: IgrDockManagerPaneType.splitPane,
                        orientation: IgrSplitPaneOrientation.horizontal,
                        // size: 250,
                        panes: [  this.gaugePane, this.doughnutChartPane]
                    },
                    {
                        type: IgrDockManagerPaneType.splitPane,
                        orientation: IgrSplitPaneOrientation.vertical,
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

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DockManagerEmbeddingFrames/>);
