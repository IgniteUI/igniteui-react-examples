import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./layout.css";
import "./styles.css";
import { IgrTileManager, IgrTile, IgrIcon, registerIconFromText } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default class Styling extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    const indicatorIcon =
      '<svg xmlns="http://www.w3.org/2000/svg" fill="none"><path d="M3.993 12.508V.765h-.979v11.743h.979ZM1.54 10.06V3.21H.56v6.85h.98Z" fill="#09F"/></svg>';

    registerIconFromText('indicator', indicatorIcon);
  }

  public render(): JSX.Element {
    return (
      <div className="container sample center">
        <IgrTileManager column-count="2" gap="20px" resize-mode="always">
          <IgrTile>
            <IgrIcon slot="side-adorner" className="side" name="indicator"></IgrIcon>
            <IgrIcon slot="corner-adorner" className="corner" name="indicator"></IgrIcon>
            <IgrIcon slot="bottom-adorner" className="bottom" name="indicator"></IgrIcon>
            <span slot="title">Tile 1 header</span>
            <p>Content for Tile 1</p>
          </IgrTile>
          <IgrTile>
            <span slot="title">Tile 2 header</span>
            <p>Content for Tile 2</p>
          </IgrTile>
          <IgrTile>
            <span slot="title">Tile 3 header</span>
            <p>Content for Tile 3</p>
          </IgrTile>
          <IgrTile>
            <span slot="title">Tile 4 header</span>
            <p>Content for Tile 4</p>
          </IgrTile>
        </IgrTileManager>
      </div>
    );
  }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Styling/>);
