import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrAvatar, IgrTooltip, IgrIcon, registerIconFromText } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

const location =
  '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"/></svg>';

registerIconFromText("location_on", location, "material");

export default class TooltipRich extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div className="container sample center">
        <div className="map">
          <IgrIcon
            id="location_icon"
            slot="actions"
            collection="material"
            name="location_on"
          ></IgrIcon>
          <IgrTooltip anchor="location_icon" className="locationTooltip">
            <div className="locationTooltipContent">
              <IgrAvatar
                className="logo"
                src="https://dl.infragistics.com/x/img/browser/ig.png.png"
                shape="square"
              ></IgrAvatar>
              <div>
                <div>Infragistics Inc. HQ</div>
                <div>2 Commerce Dr, Cranbury, NJ 08512, USA</div>
              </div>
            </div>
          </IgrTooltip>
        </div>
      </div>
    );
  }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TooltipRich />);
