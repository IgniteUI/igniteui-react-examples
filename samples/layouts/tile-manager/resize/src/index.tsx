import { useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./layout.css";
import { IgrTileManager, IgrTile, IgrRadio, IgrRadioGroup, IgrInput, IgrRadioChangeEventArgs, IgrComponentValueChangedEventArgs, TileManagerResizeMode } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function Actions() {
  const tileManagerRef = useRef<IgrTileManager>(null);

  function onRadioChange(event: IgrRadioChangeEventArgs) {
      const radio = event.target as IgrRadio;
      tileManagerRef.current!.resizeMode = radio.value as TileManagerResizeMode;
  }

  function onInputChange(event: IgrComponentValueChangedEventArgs) {
    const tileManager = tileManagerRef.current!;
    const input = event.target as IgrInput;
    switch (input.label) {
      case 'Minimum Column Width': tileManager.minColumnWidth = input.value;
        break;
      case 'Minimum Row Height': tileManager.minRowHeight = input.value;
        break;
    }
  }

  return (
    <div className="container sample center">
      <div className="inputWrapper">
        <IgrRadioGroup id="resize" alignment="horizontal" onChange={onRadioChange}>
          <IgrRadio name="resize" value="always" checked>Always</IgrRadio>
          <IgrRadio name="resize" value="hover">Hover</IgrRadio>
          <IgrRadio name="resize" value="none">None</IgrRadio>
        </IgrRadioGroup>
        <IgrInput label="Minimum Column Width" placeholder="200px" type={"text"} onChange={onInputChange}></IgrInput>
        <IgrInput label="Minimum Row Height" placeholder="200px" type={"text"} onChange={onInputChange}></IgrInput>
      </div>
      <IgrTileManager resize-mode="always" gap="20px" ref={tileManagerRef}>
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
root.render(<Actions/>);
