import * as React from 'react';

import './DockManagerStyles.css';

import { defineCustomElements } from 'igniteui-dockmanager/loader';
import { IgcDockManagerPaneType } from 'igniteui-dockmanager';
import { IgcSplitPaneOrientation } from 'igniteui-dockmanager';
import { IgcDockManagerComponent } from 'igniteui-dockmanager';
// defineCustomElements(); // called in index.tsx

// import { IgrGeographicMapModule } from 'igniteui-react-maps';
// import { IgrGeographicMap } from 'igniteui-react-maps';
// import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
// IgrGeographicMapModule.register();
// IgrDataChartInteractivityModule.register();

export default class DockManagerOverview extends React.Component {
    // public geoMap: IgrGeographicMap;

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="igContainer">
                {/* ISSUE: cannot create DockManager: */}
                {/* <igc-dockmanager id="dockManager"> */}
                    <div slot="content1" className="dockManagerContent">Content 1</div>
                    <div slot="content2" className="dockManagerContent">Content 2</div>
                    <div slot="content3" className="dockManagerContent">Content 3</div>
                    <div slot="content4" className="dockManagerContent">Content 4</div>
                    <div slot="content5" className="dockManagerContent">Content 5</div>
                    <div slot="content6" className="dockManagerContent">Content 6</div>
                    <div slot="content7" className="dockManagerContent">Content 7</div>
                    <div slot="content8" className="dockManagerContent">Content 8</div>
                    <div slot="content9" className="dockManagerContent">Content 9</div>
                {/* </igc-dockmanager> */}
            </div>
        );
    }

    public componentDidMount() {
        // fetching JSON data with geographic locations from public folder

    }

}
