import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import { IgrComboModule, IgrCombo, IgrSwitchModule, IgrSwitch } from "igniteui-react";
import "./index.css";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import { Cities } from "./ComboData";

IgrComboModule.register();
IgrSwitchModule.register();

export default function ComboSingleSelection() {
  const comboRef = useRef<IgrCombo>(null);

  const enableGrouping = (switchComponent: IgrSwitch) => {
    comboRef.current.groupKey = switchComponent.checked ? "country" : undefined;
  };

  const disableCombo = (switchComponent: IgrSwitch) => {
    comboRef.current.disabled = switchComponent.checked;
  };

  return (
    <div className="sample">
      <IgrCombo
        valueKey="id"
        displayKey="name"
        label="Cities"
        placeholder="Pick a city"
        singleSelect
        data={Cities}
        ref={comboRef}
      ></IgrCombo>
      <div className="options">
        <IgrSwitch change={enableGrouping}>
          <span key="grouping">Enable Grouping</span>
        </IgrSwitch>
        <IgrSwitch change={disableCombo}>
          <span key="disabled">Disable Combo</span>
        </IgrSwitch>
      </div>
    </div>
  );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ComboSingleSelection />);
