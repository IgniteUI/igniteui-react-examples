import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./layout.css";
import { IgrTileManager, IgrTile, IgrRadio, IgrRadioGroup } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import { IgcRadioChangeEventArgs } from "igniteui-webcomponents/components/radio/radio";

export default class DragNDrop extends React.Component<any, any> {

  private tileManagerRef = React.createRef<IgrTileManager>();

  constructor(props: any) {
    super(props);
  }

  private onRadioChange = (event: CustomEvent<IgcRadioChangeEventArgs>) => {
      const radio = event.target as IgrRadio;
      this.tileManagerRef.current.dragMode = radio.value as any;
  };

  public render(): JSX.Element {
    return (
      <div className="container sample center">
        <div className="radioWrapper">
        <IgrRadioGroup id="dragMode" alignment="horizontal" onChange={this.onRadioChange}>
          <IgrRadio name="dragMode" value="tile-header" checked>Tile-header</IgrRadio>
          <IgrRadio name="dragMode" value="tile">Tile</IgrRadio>
          <IgrRadio name="dragMode" value="none">None</IgrRadio>
        </IgrRadioGroup>
        </div>
        <IgrTileManager drag-mode="tile-header" drag-action="slide" column-count="2" gap="20px" ref={this.tileManagerRef}>
          <IgrTile>
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
root.render(<DragNDrop/>);
