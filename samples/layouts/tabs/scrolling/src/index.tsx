import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrTabsModule, IgrTabs, IgrTab,  IgrTabPanel} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

IgrTabsModule.register();

export default class Scrolling extends React.Component<any, any> {

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
      <div className="container vertical">        
        <IgrTabs ref={this.tabsRef} key="tabs">          
           {Array.from({length: 18}, (_, index) => index + 1).map(number => (
            <React.Fragment key={`tab-${number}`}>
            <IgrTab panel={`tab-${number}`} key={`tab-${number}`}>
              <span key={`tab-${number}-span`}>Tab {number}</span>
            </IgrTab>
            <IgrTabPanel id={`tab-${number}`} key={`tab-${number}-panel`}>
              <span key={`panel-${number}-span`}>Tab {number} panel</span>
            </IgrTabPanel>
          </React.Fragment>
          ))}
        </IgrTabs>
      </div>
    );
  }

  public onRadioChange(e: any) {
       this.tabs.alignment = e.value;      
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Scrolling />);

