import React from "react";
import ReactDOM from "react-dom/client";
import "./Styling.css";
import "./index.css";
import { IgrAvatar, IgrTooltip } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default class TooltipStyling extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div className="container sample">
        <IgrAvatar id="avatar" shape="circle"
          src="https://www.infragistics.com/angular-demos-lob/assets/images/avatar/10.jpg"
        ></IgrAvatar>
        <IgrTooltip placement="bottom-start" anchor="avatar" withArrow={true}>
          Her name is Madelyn James
        </IgrTooltip>
      </div>
    );
  }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TooltipStyling />);

