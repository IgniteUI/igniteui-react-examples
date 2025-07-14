import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./layout.css";
import { IgrTileManager, IgrTile, IgrRadio, IgrRadioGroup, IgrInput } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import { IgcRadioChangeEventArgs } from "igniteui-webcomponents/components/radio/radio";

export default class Actions extends React.Component<any, any> {

  private tileManagerRef = React.createRef<IgrTileManager>();
  constructor(props: any) {
    super(props);
  }

  private onRadioChange = (event: CustomEvent<IgcRadioChangeEventArgs>) => {
      const radio = event.target as IgrRadio;
      (this.tileManagerRef.current as IgrTileManager).resizeMode = radio.value as any;
  };

  private onInputChange = (event: CustomEvent) => {
    const tileManager = this.tileManagerRef.current;
    const input = event.target as IgrInput;
    switch (input.label) {
      case 'Minimum Column Width': tileManager.minColumnWidth = input.value;
        break;
      case 'Minimum Row Height': tileManager.minRowHeight = input.value;
        break;
    }
  }

  public render(): JSX.Element {
    return (
      <div className="container sample center">
        <div className="inputWrapper">
          <IgrRadioGroup id="resize" alignment="horizontal" onChange={this.onRadioChange}>
            <IgrRadio name="resize" value="always" checked>Always</IgrRadio>
            <IgrRadio name="resize" value="hover">Hover</IgrRadio>
            <IgrRadio name="resize" value="none">None</IgrRadio>
          </IgrRadioGroup>
          <IgrInput label="Minimum Column Width" placeholder="200px" type={"text"} onChange={this.onInputChange}></IgrInput>
          <IgrInput label="Minimum Row Height" placeholder="200px" type={"text"} onChange={this.onInputChange}></IgrInput>
        </div>
        <IgrTileManager resize-mode="always" gap="20px" ref={this.tileManagerRef}>
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
root.render(<Actions/>);
