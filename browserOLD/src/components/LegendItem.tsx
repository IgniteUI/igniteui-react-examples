
import * as React from "react";
import "./LegendItem.css";

export default class LegendItem extends React.Component<any, any> {

    render() {
        const bg = this.props.background;
        const bgStyle = { background: bg } as React.CSSProperties;

        return (
            <div  className="LegendItem">
                <div   className="LegendItemMap" style={bgStyle}></div>
                <label className="LegendItemLabel">{this.props.text}</label>
            </div>
        );
    }
}
