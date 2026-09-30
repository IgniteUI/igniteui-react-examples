import { useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./layout.css";
import { IgrTileManager, IgrTile, IgrRadio, IgrRadioGroup, IgrRadioChangeEventArgs, TileManagerDragMode } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function DragNDrop() {
  const tileManagerRef = useRef<IgrTileManager>(null);

  function onRadioChange(event: IgrRadioChangeEventArgs) {
      const radio = event.target as IgrRadio;
      tileManagerRef.current!.dragMode = radio.value as TileManagerDragMode;
  }

  return (
    <div className="container sample center">
      <div className="radioWrapper">
      <IgrRadioGroup id="dragMode" alignment="horizontal" onChange={onRadioChange}>
        <IgrRadio name="dragMode" value="tile-header" checked>Tile-header</IgrRadio>
        <IgrRadio name="dragMode" value="tile">Tile</IgrRadio>
        <IgrRadio name="dragMode" value="none">None</IgrRadio>
      </IgrRadioGroup>
      </div>
      <IgrTileManager drag-mode="tile-header" drag-action="slide" column-count="2" gap="20px" ref={tileManagerRef}>
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
root.render(<DragNDrop/>);
