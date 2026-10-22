import ReactDOM from "react-dom/client";
import "./Styling.css";
import "./index.css";
import { IgrAvatar, IgrTooltip } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function TooltipStyling() {
  return (
    <div className="container sample">
      <IgrAvatar id="avatar" shape="circle"
        src="https://dl.infragistics.com/x/img/avatars/10.jpg"
      ></IgrAvatar>
      <IgrTooltip placement="bottom-start" anchor="avatar" withArrow={true}>
        Her name is Madelyn James
      </IgrTooltip>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<TooltipStyling />);

