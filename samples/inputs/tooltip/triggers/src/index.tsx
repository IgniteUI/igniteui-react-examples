import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrTooltip, IgrButton, IgrInput, IgrCard, IgrCardContent, IgrCardHeader } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default class TooltipTriggers extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div className="container sample">
        <div id="triggers-container">
          <IgrCard>
            <IgrCardHeader>
              <h4 slot="title">Default triggers</h4>
            </IgrCardHeader>
            <IgrCardContent>
              <p>
                Hovering over the button below will display the tooltip using
                its default configuration: it appears on{" "}
                <strong>pointer enter</strong> and hides on{" "}
                <strong>pointer leave</strong> or <strong>click</strong>.
              </p>
              <IgrButton variant="outlined" id="triggers-default">
                Hover over me
              </IgrButton>
              <IgrTooltip anchor="triggers-default">
                I am show on pointer enter and hidden on pointer leave and/or
                click.
              </IgrTooltip>
            </IgrCardContent>
          </IgrCard>

          <IgrCard>
            <IgrCardHeader>
              <h4 slot="title">Focus based</h4>
            </IgrCardHeader>
            <IgrCardContent>
              <p>
                In this instance, the tooltip is bound to show on its anchor
                <strong>focus</strong> and will hide when its anchor is
                <strong>blurred</strong>.
              </p>
              <p>
                Try to navigate with a Tab key to the anchor to see the effect.
              </p>
              <IgrButton variant="outlined" id="triggers-focus-blur">
                Focus me
              </IgrButton>
              <IgrTooltip
                anchor="triggers-focus-blur"
                show-delay="0"
                hide-delay="0"
                show-triggers="focus"
                hide-triggers="blur"
              >
                I am shown on focus and hidden on blur.
              </IgrTooltip>
            </IgrCardContent>
          </IgrCard>

          <IgrCard>
            <IgrCardHeader>
              <h4 slot="title">Same trigger(s) for showing and hiding</h4>
            </IgrCardHeader>
            <IgrCardContent>
              <p>
                The same trigger can be bound to both show and hide the tooltip.
                The button below has its tooltip bound to show/hide on
                <strong>click</strong>.
              </p>
              <IgrButton variant="outlined" id="triggers-click">
                Click
              </IgrButton>
              <IgrTooltip
                show-delay="0"
                hide-delay="0"
                anchor="triggers-click"
                show-triggers="click"
                hide-triggers="click"
              >
                I am show on click and will hide on anchor click.
              </IgrTooltip>
            </IgrCardContent>
          </IgrCard>

          <IgrCard>
            <IgrCardHeader>
              <h4 slot="title">Keyboard interactions</h4>
            </IgrCardHeader>
            <IgrCardContent>
              <p>
                Keyboard interactions are also supported. The button below has
                its tooltip bound to show on a <strong>keypress</strong> and
                hide on a<strong>keypress</strong> or <strong>blur</strong>.
              </p>
              <p>Try it out by focusing the button and pressing a key.</p>
              <IgrButton variant="outlined" id="triggers-keypress">
                Press a key
              </IgrButton>
              <IgrTooltip
                anchor="triggers-keypress"
                show-triggers="keypress"
                hide-triggers="keypress blur"
              >
                I am shown on a keypress and will hide on a keypress or blur.
              </IgrTooltip>
            </IgrCardContent>
          </IgrCard>

          <IgrCard>
            <IgrCardHeader>
              <h4 slot="title">Custom events</h4>
            </IgrCardHeader>
            <IgrCardContent>
              <p>
                The tooltip supports any DOM event, including custom events. Try
                entering a value in the input below, then &quot;commit&quot; it
                by either <strong>blurring</strong> the input or pressing{" "}
                <strong>Enter</strong>.
              </p>
              <IgrInput id="triggers-custom" label="Username"></IgrInput>
              <IgrTooltip anchor="triggers-custom" show-triggers="igcChange">
                Value changed!
              </IgrTooltip>
            </IgrCardContent>
          </IgrCard>
        </div>
      </div>
    );
  }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TooltipTriggers />);
