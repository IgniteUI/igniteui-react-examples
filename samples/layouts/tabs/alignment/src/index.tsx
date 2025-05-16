import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrTabs, IgrTab, TabsAlignment, IgrRadio, IgrRadioGroup } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default class Alignment extends React.Component<any, { alignment: TabsAlignment }> {

  constructor(props) {
    super(props);
    this.state = { alignment: "start" };
  }

  public render(): JSX.Element {
    return (
      <div className="container sample">
        <IgrRadioGroup alignment="horizontal" value={this.state.alignment} onChange={this.onRadioChange}>
            <IgrRadio name="alignment" value="start">Start</IgrRadio>
            <IgrRadio name="alignment" value="center">Center</IgrRadio>
            <IgrRadio name="alignment" value="end">End</IgrRadio>
            <IgrRadio name="alignment" value="justify">Justify</IgrRadio>
        </IgrRadioGroup>
        <IgrTabs alignment={this.state.alignment}>
          <IgrTab label="Basics">
            <span>Basics tab panel</span>
          </IgrTab>
          <IgrTab label="Details">
            <span>Details tab panel</span>
          </IgrTab>
          <IgrTab label="Custom">
            <span>Custom tab panel</span>
          </IgrTab>
          <IgrTab disabled={true} label="Disabled">
            <span>Disabled tab panel will not be displayed</span>
          </IgrTab>
        </IgrTabs>
      </div>
    );
  }

  public onRadioChange = (e: any) => {
    this.setState({ alignment: e.detail.value });
  }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Alignment />);

