import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrTabs, IgrTab, IgrIcon, registerIconFromText } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

const home = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';
const search = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';
const favorite = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
registerIconFromText("home", home, "material");
registerIconFromText("search", search, "material");
registerIconFromText("favorite", favorite, "material");

export default class TabsStyling extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div className="container sample">
        <IgrTabs>
          <IgrTab>
            <span slot="label"><IgrIcon name='home' collection="material"></IgrIcon></span>
            <span>Home tab panel</span>
          </IgrTab>
          <IgrTab>
             <span slot="label"><IgrIcon name='search' collection="material"></IgrIcon></span>
             <span>Search tab panel</span>
          </IgrTab>
          <IgrTab>
             <span slot="label"><IgrIcon name='favorite' collection="material"></IgrIcon></span>
             <span>Favorite tab panel</span>
          </IgrTab>
        </IgrTabs>
      </div>
    );
  }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TabsStyling/>);
