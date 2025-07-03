import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./layout.css";
import { IgrTileManager, IgrTile, IgrInput } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default class ColumnGap extends React.Component<any, any> {

  private tileManagerRef = React.createRef<IgrTileManager>();
  constructor(props: any) {
    super(props);
  }

  private onInputChange = (event: CustomEvent) => {    
    const tileManager = this.tileManagerRef.current;
    const input = event.target as IgrInput;
    switch (input.label) {
      case 'Columns Number': tileManager.columnCount = parseInt(input.value);
        break;
      case 'Gap Size': tileManager.gap = input.value;
        break;
    }
  }

  public render(): JSX.Element {
    return (
      <div className="container sample center">
        <div className="inputWrapper">
          <IgrInput label="Columns Number" id="rowIn" onChange={this.onInputChange}></IgrInput>
          <IgrInput label="Gap Size" placeholder="10px" onChange={this.onInputChange}></IgrInput>
        </div>
        <IgrTileManager id="tile-manager1" gap="10px" ref={this.tileManagerRef}>
          <IgrTile disableFullscreen disableMaximize>
            <div className="picture">
              <img src="https://picsum.photos/1048/998" alt="picture" />
            </div>
          </IgrTile>
          <IgrTile disableFullscreen disableMaximize>
            <div className="picture">
              <img src="https://picsum.photos/1049/999" alt="picture" />
            </div>
          </IgrTile>
          <IgrTile disableFullscreen disableMaximize>
            <div className="picture">
              <img src="https://picsum.photos/1050/1000" alt="picture" />
            </div>
          </IgrTile>
          <IgrTile disableFullscreen disableMaximize>
            <div className="picture">
              <img src="https://picsum.photos/1051/1001" alt="picture" />
            </div>
          </IgrTile>
          <IgrTile disableFullscreen disableMaximize>
            <div className="picture">
              <img src="https://picsum.photos/1052/1002" alt="picture" />
            </div>
          </IgrTile>
          <IgrTile disableFullscreen disableMaximize>
            <div className="picture">
              <img src="https://picsum.photos/1053/1003" alt="picture" />
            </div>
          </IgrTile>
        </IgrTileManager>
      </div>
    );
  }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ColumnGap/>);
