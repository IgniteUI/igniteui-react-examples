import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrTabsModule, IgrTabs, IgrTab,  IgrTabPanel, IgrRadio, IgrRadioGroup, IgrRadioModule, IgrRadioGroupModule, } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

IgrTabsModule.register();
IgrRadioModule.register();
IgrRadioGroupModule.register();

export default class Alignment extends React.Component<any, any> {

    private tabs: IgrTabs
    private tabsRef(r: IgrTabs) {
        this.tabs = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.tabsRef = this.tabsRef.bind(this);
        this.onRadioChange = this.onRadioChange.bind(this);
    }


  public render(): JSX.Element {
    return (
      <div className="container sample">
        <IgrRadioGroup alignment="horizontal" key="radio-group" >
            <IgrRadio name="alignment" value="start" checked={true} key="start" onChange={this.onRadioChange}><span key="radio-span-0">Start</span></IgrRadio>
            <IgrRadio name="alignment" value="center" key="center" onChange={this.onRadioChange}><span key="radio-span-1">Center</span></IgrRadio>
            <IgrRadio name="alignment" value="end" key="end" onChange={this.onRadioChange}><span key="radio-span-2">End</span></IgrRadio>
            <IgrRadio name="alignment" value="justify" key="justify" onChange={this.onRadioChange}><span key="radio-span-3">Justify</span></IgrRadio>
        </IgrRadioGroup>
        <IgrTabs ref={this.tabsRef} key="tabs">
          <IgrTab panel="basics" key="basics-tab">
            <span key="basics-tab-span">Basics</span>
          </IgrTab>
          <IgrTab panel="details" key="details-tab">
            <span key="details-tab-span">Details</span>
          </IgrTab>
          <IgrTab panel="custom" key="custom-tab">
            <span key="custom-tab-span">Custom</span>
          </IgrTab>
          <IgrTab panel="disabled" disabled={true} key="disabled-tab">
            <span key="disabled-tab-span">Disabled</span>
          </IgrTab>
           <IgrTabPanel id="basics" key="basics-panel"><span key="basics-panel-span">Basics tab panel</span></IgrTabPanel>
          <IgrTabPanel id="details" key="details-panel"><span key="details-panel-span">Details tab panel</span></IgrTabPanel>
          <IgrTabPanel id="custom" key="custom-panel"><span key="custom-panel-span">Custom tab panel</span></IgrTabPanel>
          <IgrTabPanel id="disabled" key="disabled-panel"><span key="disabled-panel-span">Disabled tab panel will not be displayed</span></IgrTabPanel>
        </IgrTabs>
      </div>
    );
  }

  public onRadioChange(e: any) {
    this.tabs.alignment = e.detail.value;
  }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Alignment />);

