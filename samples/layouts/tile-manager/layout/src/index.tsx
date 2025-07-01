import React, { Component, createRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./layout.css";
import { IgrTileManager, IgrTile, IgrButton } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default class Layout extends Component<any, any> {

  private tileManagerRef = createRef<IgrTileManager>();
  state = {
    serializedData: '',
  };
  constructor(props: any) {
    super(props);
  }

  private onAddTileClick = () => {
    const newTile = document.createElement("igc-tile");  
    const contentHeader = document.createElement('span');
    const content = document.createElement('p');
    const index = this.tileManagerRef.current.tiles.length + 1;
    contentHeader.textContent = `Tile ${index} header`;
    content.textContent = `Content for Tile ${index}`;
    contentHeader.setAttribute('slot', 'title');
    newTile.position = 0;
    newTile.append(contentHeader);
    newTile.append(content);
    this.tileManagerRef.current.insertBefore(newTile, this.tileManagerRef.current.tiles.at(-1));
  }

  public render(): JSX.Element {
    return (
      <div className="container sample center">
        <div className="btnWrapper">
          <IgrButton id="saveL" onClick={() => this.setState({ serializedData: this.tileManagerRef?.current.saveLayout()})}>Save Layout</IgrButton>
          <IgrButton id="loadL" onClick={() => this.tileManagerRef.current.loadLayout(this.state.serializedData)}>Load Layout</IgrButton>
          <IgrButton id="addT" onClick={this.onAddTileClick}>Add Tile</IgrButton>
          <IgrButton id="remT" onClick={()=> this.tileManagerRef.current.querySelector('igc-tile:first-of-type')?.remove()}>Remove Tile</IgrButton>
        </div>
        <IgrTileManager ref={this.tileManagerRef} resize-mode="always" drag-mode="tile" column-count="2" gap="20px">
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
root.render(<Layout/>);
