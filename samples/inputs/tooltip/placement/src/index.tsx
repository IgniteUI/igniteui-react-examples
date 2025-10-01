import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrButton, IgrTooltip } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

type PopoverPlacement =
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "right"
  | "right-start"
  | "right-end"
  | "left"
  | "left-start"
  | "left-end";

export default class TooltipPlacement extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  Positions = ["top", "bottom", "left", "right"].flatMap((each) => [
    each,
    `${each}-start`,
    `${each}-end`,
  ]) as Array<PopoverPlacement>;

  public render(): JSX.Element {
    return (
      <div className="container sample">
        <IgrButton
          variant="outlined"
          id="tooltip-position"
        >Click to trigger all supported placements
        </IgrButton>

        {this.Positions.map((pos) => (
          <IgrTooltip
            anchor="tooltip-position"
            showTriggers="click"
            showDelay={0}
            hideDelay={0}
            sticky={true}
            withArrow={true}
            placement={pos}
            key={pos}
          >
            <div>
              <strong>{pos}</strong>
            </div>
          </IgrTooltip>
        ))}
      </div>
    );
  }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TooltipPlacement />);
