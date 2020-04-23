
import * as React from "react";
import "./SourceInfo.css";

export default class SourceInfo extends React.Component<any, any> {

    render() {
        const hasLink = this.props.href !== undefined;

        return hasLink ?
        <div className="SourceStyle">
            <a target="_blank" href={this.props.href} >
            {this.props.text}</a>
        </div> :
        // <div >
            <label className="SourceLabel">{this.props.text}</label>
        // </div>
    }
}
