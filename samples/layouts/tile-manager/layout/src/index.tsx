import { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./layout.css";
import { IgrTileManager, IgrTile, IgrButton } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function Layout() {
  const tileManagerRef = useRef<IgrTileManager>(null);
  const [serializedData, setSerializedData] = useState('');

  function onAddTileClick() {
    const newTile = document.createElement("igc-tile");  
    const contentHeader = document.createElement('span');
    const content = document.createElement('p');
    const index = tileManagerRef.current!.tiles.length + 1;
    contentHeader.textContent = `Tile ${index} header`;
    content.textContent = `Content for Tile ${index}`;
    contentHeader.setAttribute('slot', 'title');
    newTile.position = 0;
    newTile.append(contentHeader);
    newTile.append(content);
    tileManagerRef.current!.appendChild(newTile);
  }

  return (
    <div className="container sample center">
      <div className="btnWrapper">
        <IgrButton id="saveL" onClick={() => setSerializedData(tileManagerRef.current!.saveLayout())}>Save Layout</IgrButton>
        <IgrButton id="loadL" onClick={() => tileManagerRef.current!.loadLayout(serializedData)}>Load Layout</IgrButton>
        <IgrButton id="addT" onClick={onAddTileClick}>Add Tile</IgrButton>
        <IgrButton id="remT" onClick={()=> tileManagerRef.current!.querySelector('igc-tile:first-of-type')?.remove()}>Remove Tile</IgrButton>
      </div>
      <IgrTileManager ref={tileManagerRef} resize-mode="always" drag-mode="tile" column-count="2" gap="20px">
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

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<Layout/>);
