import * as React from "react";
import AppRouter from "./AppRouter";

import IconButton from '@material-ui/core/IconButton';
import * as ItemsExpandedIcon from '@material-ui/icons/ExpandMore';
import * as ItemsColapsedIcon from '@material-ui/icons/ExpandLess';

import "./SampleFallback.css";
import { TOC } from "./toc"

class SampleFallback extends React.Component<any, any> {
    public existingRoutes: any[];
    public existingSamples: any[];

    public styles: any = {
        toolbarIcon: { display: "inline-block"},
        toolbarBtn: { color: "black", padding: "0.15rem", fontSize: "medium", display: "inline-block", height: "32px",},
    }

    constructor(props: any) {
        super(props);

        this.existingRoutes = [];
        this.existingSamples = [];
        for (const control of TOC) {
            const samplesCount = control.samples.length;
            this.existingSamples.push(
                <p key={control.name}>
                    <b>{control.name}</b>
                    <label> - {samplesCount} samples:</label>
                </p>
            );
            for (const sample of control.samples) {
                // const sampleLink = "/samples" + sample.path;
                const path = sample.path.replace("/","");
                const link = "/samples/" + sample.path.replace("/","");

                this.existingRoutes.push(path);
                this.existingSamples.push(
                    <li key={path} >
                        <span>
                            {/* <a href={link}>{sample.path}</a> */}
                            {/* <label> path for <b>{sample.name}</b> sample</label> */}
                            {/* <label> path for </label>
                            <a href={link}>{sample.name}</a>
                            <label> sample</label> */}

                            <label>{sample.name} - </label>
                            <a href={link}>{path}</a>
                            <label> path</label>

                            {/* <label> - {sample.path} path</label>
                            <a href={link}>{name}</a> */}
                        </span>
                    </li>
                );
            }
        }

        this.state = {
            ChecklistExpanded: false,
            SamplesExpanded: false,
        };
    }


    public render() {
        const path = AppRouter.getSamplePath();
        const sample = AppRouter.getSampleFile(path);
        const control = AppRouter.getControlName(path);

        let issue = "";
        let file = "";
        if (this.existingRoutes.indexOf(path) > 0) {
            issue = "Samples Browser does not have sample with name: ";
            file = sample + ".tsx";
        } else {
            issue = "Samples Browser does not have TOC entry with path:";
            file = path;
        }

        return (
            <div className="fallback">
                {/* <div style={{background: "gray", padding: 10}}> */}
                <div>
                    <h3>Detected Issue</h3>
                    <p>{issue} <br/> <b style={{color: "red"}}>{file}</b> </ p>

                    <div>
                        <IconButton onClick={this.onChecklistExpanded} style={this.styles.toolbarBtn} edge="start">
                            {this.state.ChecklistExpanded ?
                            <ItemsColapsedIcon.default /> :
                            <ItemsExpandedIcon.default /> }
                        </IconButton>
                        <h3 style={{display: "inline-block"}}>Samples Checklist</h3>
                    </div>
                    {this.state.ChecklistExpanded &&
                        <ul>
                            <li>open <b>/samples/</b><b style={{color: "green"}}>{control}</b> folder</li>
                            <li>create <b style={{color: "blue"}}>{sample}.tsx</b> file (if missing)</li>
                            <li>open <b>/navigation/toc.js</b> file</li>
                            <li>load the <b style={{color: "blue"}}>{sample}</b> component using lazy loading </li>
                            <li>scroll down to TOC <b>samples</b> array for the <b style={{color: "green"}}>{control}</b> control </li>
                            <li>locate or create an entry with <b>path</b> set to <b style={{color: "red"}}>{path}</b> string</li>
                            <li>replace <b>Fallback</b> with <b style={{color: "blue"}}>{sample}</b></li>
                            <li>save <b>/navigation/toc.js</b> file</li>
                            <li>re-build this application</li>
                        </ul>
                    }

                    <div>
                        <IconButton onClick={this.onSamplesExpanded} style={this.styles.toolbarBtn} edge="start">
                            {this.state.SamplesExpanded ?
                            <ItemsColapsedIcon.default /> :
                            <ItemsExpandedIcon.default /> }
                        </IconButton>
                        <h3 style={{display: "inline-block"}}>Samples List</h3>
                    </div>
                    {this.state.SamplesExpanded &&
                        <ul>{this.existingSamples}</ul>
                    }

                </div>
            </div>
        );
    }

    public onChecklistExpanded = (event: any) => {
        this.setState({ChecklistExpanded: !this.state.ChecklistExpanded});
    };
    public onSamplesExpanded = (event: any) => {
        this.setState({SamplesExpanded: !this.state.SamplesExpanded});
    };


}

export default SampleFallback;