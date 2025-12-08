import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrAvatar, IgrTooltip } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default class TooltipOverview extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div className="container sample">
        <IgrAvatar id="avatar" shape="circle"
          src="https://dl.infragistics.com/x/img/avatars/10.jpg"
        ></IgrAvatar>
        <IgrTooltip placement="bottom-start" anchor="avatar">
          Her name is Madelyn James
        </IgrTooltip>
      </div>
    );
  }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TooltipOverview />);
