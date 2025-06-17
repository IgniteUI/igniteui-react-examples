import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrTabs, IgrTab} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default class Scrolling extends React.Component<any, any> {

  public render(): JSX.Element {
    return (
      <div className="container vertical">
        <IgrTabs key="tabs">
           {Array.from({length: 18}, (_, index) => index + 1).map(number => (
            <IgrTab key={`tab-${number}`}>
              <span slot="label">Tab {number}</span>
              <span>Tab {number} panel</span>
            </IgrTab>
          ))}
        </IgrTabs>
      </div>
    );
  }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Scrolling />);

