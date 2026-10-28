import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrTabs, IgrTab, TabsAlignment, IgrRadio, IgrRadioGroup, IgrRadioChangeEventArgs } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function Alignment() {
  const [alignment, setAlignment] = useState<TabsAlignment>("start");

  function onRadioChange(e: IgrRadioChangeEventArgs) {
    setAlignment(e.detail.value as TabsAlignment);
  }

  return (
    <div className="container sample">
      <IgrRadioGroup alignment="horizontal" value={alignment} onChange={onRadioChange}>
          <IgrRadio name="alignment" value="start">Start</IgrRadio>
          <IgrRadio name="alignment" value="center">Center</IgrRadio>
          <IgrRadio name="alignment" value="end">End</IgrRadio>
          <IgrRadio name="alignment" value="justify">Justify</IgrRadio>
      </IgrRadioGroup>
      <IgrTabs alignment={alignment}>
        <IgrTab label="Basics">
          <span>Basics tab panel</span>
        </IgrTab>
        <IgrTab label="Details">
          <span>Details tab panel</span>
        </IgrTab>
        <IgrTab label="Custom">
          <span>Custom tab panel</span>
        </IgrTab>
        <IgrTab disabled={true} label="Disabled">
          <span>Disabled tab panel will not be displayed</span>
        </IgrTab>
      </IgrTabs>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<Alignment />);
