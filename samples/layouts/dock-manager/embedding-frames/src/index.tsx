import { useLayoutEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './DockManagerStyles.css';
import { IgrContentPane, IgrDockManager, IgrDockManagerPaneType, IgrSplitPaneOrientation } from 'igniteui-react-dockmanager';

export default function DockManagerEmbeddingFrames() {
    const dockManagerRef = useRef<IgrDockManager>(null);

    // Before paint, like componentDidMount: no empty dock manager frame.
    useLayoutEffect(() => {
        // fetching JSON data with geographic locations from public folder

        const gaugePane: IgrContentPane = {
            // size: 150,
            header: 'ANGULAR RADIAL GAUGE',
            type: IgrDockManagerPaneType.contentPane,
            contentId: 'gaugeContainer'
        };

        const doughnutChartPane: IgrContentPane = {
            // size: 150,
            header: 'WEB COMPONENT DOUGHNUT CHART',
            type: IgrDockManagerPaneType.contentPane,
            contentId: 'doughnutChartContainer'
        };

        const geoMapPane: IgrContentPane = {
            // size: 200,
            header: 'REACT GEOGRAPHIC MAP',
            type: IgrDockManagerPaneType.contentPane,
            contentId: 'geoMapContainer'
        };

        dockManagerRef.current!.layout = {
            rootPane: {
                type: IgrDockManagerPaneType.splitPane,
                orientation: IgrSplitPaneOrientation.vertical,
                panes: [
                    {
                        type: IgrDockManagerPaneType.splitPane,
                        orientation: IgrSplitPaneOrientation.horizontal,
                        // size: 250,
                        panes: [  gaugePane, doughnutChartPane]
                    },
                    {
                        type: IgrDockManagerPaneType.splitPane,
                        orientation: IgrSplitPaneOrientation.vertical,
                        // size: 200,
                        panes: [
                            // financialChartPane,
                            geoMapPane ]
                    },

                ]
            },
        };
    }, []);

    return (
        <div className="container sample">
            <IgrDockManager id="dockManager" ref={dockManagerRef}>
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
            </IgrDockManager>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<DockManagerEmbeddingFrames/>);
