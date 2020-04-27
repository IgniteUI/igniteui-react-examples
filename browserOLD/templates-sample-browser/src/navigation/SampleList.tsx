import * as React from "react";
import { Component } from "react";
import AppRouter from "./AppRouter";
import "../samples/styles.css";

class SampleList extends Component {
    public existingRoutes: any[];
    public existingSamples: any[];

    constructor(props: any) {
        super(props);

        console.log("SampleList constructor ");
        this.existingRoutes = [];
        this.existingSamples = [];
    }

    public generateSampleListFor(id: string) {

        this.existingRoutes = [];
        this.existingSamples= [];
        const controls = AppRouter.getControls(id);

        for (const control of controls) {

            let headerAdded = false;
            for (const sample of control.samples) {

                if (!headerAdded) {
                    headerAdded = true;
                    const samplesCount = control.samples.length;
                    this.existingSamples.push(
                        <p key={control.name}>
                            <b>{control.name}</b>
                            <label> - {samplesCount} samples:</label>
                        </p>
                    );
                }
                const path = sample.path;
                const link = sample.path.replace("/","");
                // const link = "/samples/" + sample.path.replace("/","");

                this.existingRoutes.push(path);
                this.existingSamples.push(
                    <li key={path} >
                        <span>
                            <a href={link}>{sample.name}</a>
                            <label> sample</label>
                            {/* <label>{sample.name} - </label>
                            <a href={link}>{path}</a>
                            <label> path</label> */}
                        </span>
                    </li>
                );
            }
        }
    }
    public render() {
        const path = AppRouter.getSamplePath();
        const id = AppRouter.getSampleFile(path);
        this.generateSampleListFor(id);
        return (
            <div className="fallback">
                {/* <div style={{background: "gray", padding: 10}}> */}
                <div>
                    <p>You can navigate to the following {id} samples:</p>
                    <ul>
                         {this.existingSamples}
                    </ul>
                </div>
            </div>
        );
    }
}

export default SampleList;