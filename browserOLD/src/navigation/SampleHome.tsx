import * as React from "react";
import { Component } from "react";
import SamplePreview from './SamplePreview.jpg';
import "../samples/styles.css";

class SampleHome extends Component {

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div style={{margin: "10px",  }}>
                <label> Welcome to samples browser for Ignite-UI React components.</label>
                <label> You can use a navigation tree on left side to browse samples for charts, grids, and gauges.</label>

                <div style={{height: "100%", width: "100%", margin: "0px"}}>
                     <img src={SamplePreview}/>
                </div>
            </div>
        );
    }
}

export default SampleHome;