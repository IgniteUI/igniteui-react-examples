
import * as React from "react";
import "./LegendOverlay.css";
import SourceInfo from "./SourceInfo"

export default class LegendOverlay extends React.Component<any, any> {

    render() {

        let bg: string = this.props.background;
        if (bg === undefined)
            bg = "rgba(221, 221, 221, 0.65)";

        let style = { background: bg, bottom: 3, left: 3 } as React.CSSProperties;

        const dock: string = this.props.dock;
        if (dock === "TopRight")
            style = { background: bg, top: 3, right: 3 } as React.CSSProperties;
        else if (dock === "TopLeft")
            style = { background: bg, top: 3, left: 3 } as React.CSSProperties;
        else if (dock === "BottomRight")
            style = { background: bg, bottom: 3, right: 3 } as React.CSSProperties;
        else // if (dock === "BottomLeft")
            style = { background: bg, bottom: 3, left: 3 } as React.CSSProperties;

        // let title: JSX.Element;

        const hasLink = this.props.href !== undefined || this.props.text !== undefined;
        return hasLink ?
            <div className="LegendOverlay" style={style}>
                <SourceInfo text={this.props.text} href={this.props.href}  />
                <div   >
                    {this.props.children}
                </div>
            </div>
            :
            <div className="LegendOverlay" style={style}>
                <div   >
                    {this.props.children}
                </div>
            </div>

        // return (
            // <div className="LegendOverlay" style={style}>
            //     {this.props.children}
            // </div>
        // );
    }
}
