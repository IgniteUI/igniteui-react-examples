import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { IgrCombo, IgrSwitch } from "igniteui-react";
import "./index.css";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import { Cities } from "./ComboData";

export default function ComboFeatures() {
  const [disableFiltering, setDisableFiltering] = useState(false);
  const [caseSensitiveIcon, setCaseSensitiveIcon] = useState(false);
  const [groupingEnabled, setGroupingEnabled] = useState(false);
  const [comboDisabled, setComboDisabled] = useState(false);

  return (
    <div className="sample">
      <IgrCombo
        valueKey="id"
        displayKey="name"
        label="Cities"
        placeholder="Pick a city"
        placeholderSearch="Search for a city"
        data={Cities}
        disableFiltering={disableFiltering}
        caseSensitiveIcon={caseSensitiveIcon}
        groupKey={groupingEnabled ? "country" : undefined}
        disabled={comboDisabled}>
      </IgrCombo>
      <div className="options">
        <IgrSwitch checked={disableFiltering} onChange={e => setDisableFiltering(e.detail.checked)}>
          <span>Disable Filtering</span>
        </IgrSwitch>
        <IgrSwitch checked={caseSensitiveIcon} onChange={e => setCaseSensitiveIcon(e.detail.checked)}>
          <span>Show Case-sensitive Icon</span>
        </IgrSwitch>
        <IgrSwitch checked={groupingEnabled} onChange={e => setGroupingEnabled(e.detail.checked)}>
          <span>Enable Grouping</span>
        </IgrSwitch>
        <IgrSwitch checked={comboDisabled} onChange={e => setComboDisabled(e.detail.checked)}>
          <span>Disable Combo</span>
        </IgrSwitch>
      </div>
    </div>
  );
}

// rendering above function to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ComboFeatures />);
