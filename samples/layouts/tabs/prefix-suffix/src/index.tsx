import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrTabsModule, IgrTabs, IgrTab,  IgrTabPanel, IgrIcon, IgrIconModule, IgrIconButton, IgrIconButtonModule } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

IgrTabsModule.register();
IgrIconModule.register();
IgrIconButtonModule.register();

export default class PrefixSuffix extends React.Component<any, any> {

  private tabs: IgrTabs
    private tabsRef(r: IgrTabs) {
        this.tabs = r;
        this.setState({});
    }    

    constructor(props: any) {
        super(props);

        this.tabsRef = this.tabsRef.bind(this);
        this.onCloseClicked = this.onCloseClicked.bind(this);

         this.state = {
          tabs: ['Home','Search', 'Favorite']
        };
    }

  public render(): JSX.Element {
    return (
      <div className="container sample">        
        <IgrTabs key="tabs" ref={this.tabsRef}>
          {this.state.tabs.map((tab:string, index:number) => (
                        <IgrTab panel={tab.toLowerCase()} key={`${tab.toLowerCase()}-tab`}>
                            <span key={`${tab.toLowerCase()}-icon-span`} slot="prefix"><IgrIcon ref={this.iconRef} name={tab.toLowerCase()} collection="material"></IgrIcon></span>
                            <span key={`${tab.toLowerCase()}-span`}>{tab}</span>
                            <span key={`${tab.toLowerCase()}-iconButton-span`} slot="suffix"><IgrIconButton name='close' collection="material" variant="flat" onClick={() => this.onCloseClicked(index)}></IgrIconButton></span>
                        </IgrTab>
                    ))}
                    {this.state.tabs.map((tab:string) => (
                        <IgrTabPanel id={tab.toLowerCase()} key={`${tab.toLowerCase()}-panel`}><span key={`${tab.toLowerCase()}-panel-span`}>{tab} tab panel</span></IgrTabPanel>
                    ))}
        </IgrTabs>
      </div>
    );
  }

  public iconRef(icon: IgrIcon){
        if(!icon){
            return;
        }
       
        const home = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';
        const search = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';
        const favorite = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
         const close = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';
        icon.registerIconFromText("home", home, "material");
        icon.registerIconFromText("search", search, "material");
        icon.registerIconFromText("favorite", favorite, "material");
        icon.registerIconFromText("close", close, "material");        
    }

    public onCloseClicked(index:number) {
        const updatedTabs = [...this.state.tabs];
        updatedTabs.splice(index, 1);
        this.setState({ tabs: updatedTabs }); 
  } 

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<PrefixSuffix/>);
