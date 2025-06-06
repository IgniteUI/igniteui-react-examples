import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import { IgrCheckboxChangeEventArgs, IgrComboModule, IgrCombo, IgrSwitchModule, IgrSwitch } from "igniteui-react";
import "./index.css";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import { Cities } from "./ComboData";

IgrComboModule.register();
IgrSwitchModule.register();

export default function ComboSingleSelection() {
  const comboRef = useRef<IgrCombo>(null);

  const enableGrouping = (e: IgrCheckboxChangeEventArgs) => {
    comboRef.current.groupKey = e.detail.checked ? "country" : undefined;
  };

  const disableCombo = (e: IgrCheckboxChangeEventArgs) => {
    comboRef.current.disabled = e.detail.checked;
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
        <IgrSwitch onChange={enableGrouping}>
          <span key="grouping">Enable Grouping</span>
        </IgrSwitch>
        <IgrSwitch onChange={disableCombo}>
          <span key="disabled">Disable Combo</span>
        </IgrSwitch>
      </div>
    </div>
  );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ComboSingleSelection />);
