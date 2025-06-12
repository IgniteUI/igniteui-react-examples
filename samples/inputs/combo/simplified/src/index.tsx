import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { IgrCheckboxChangeEventArgs, IgrCombo, IgrSwitch } from "igniteui-react";
import "./index.css";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import { Cities } from "./ComboData";

export default function ComboSingleSelection() {
  const [groupingEnabled, setGroupingEnabled] = useState(false);
  const [comboDisabled, setComboDisabled] = useState(false);

  return (
    <div className="sample">
      <IgrCombo
        valueKey="id"
        displayKey="name"
        label="Cities"
        placeholder="Pick a city"
        singleSelect
        data={Cities}
        groupKey={groupingEnabled ? "country" : undefined}
        disabled={comboDisabled}
      ></IgrCombo>
      <div className="options">
        <IgrSwitch
          checked={groupingEnabled}
          onChange={(e) => setGroupingEnabled(e.detail.checked)}>
          <span>Enable Grouping</span>
        </IgrSwitch>
        <IgrSwitch
          checked={comboDisabled}
          onChange={(e) => setComboDisabled(e.detail.checked)}>
          <span>Disable Combo</span>
        </IgrSwitch>
      </div>
    </div>
  );
}

// rendering above function to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ComboSingleSelection />);
