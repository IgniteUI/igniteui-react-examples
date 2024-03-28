import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import { IgrComboModule, IgrCombo, IgrSwitchModule, IgrSwitch } from "igniteui-react";
import "./index.css";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import { Cities } from "./ComboData";

IgrComboModule.register();
IgrSwitchModule.register();

export default function ComboFeatures() {
  const comboRef = useRef<IgrCombo>(null);
  const switchCaseSensitiveRef = useRef<IgrSwitch>(null);

  const disableFiltering = (switchComponent: IgrSwitch) => {
    comboRef.current.disableFiltering =
      switchCaseSensitiveRef.current.disabled = switchComponent.checked;
  };

  const showCaseSencitiveIcon = (switchComponent: IgrSwitch) => {
    comboRef.current.caseSensitiveIcon = switchComponent.checked;
  };

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
        placeholderSearch="Search for a city"
        data={Cities}
        ref={comboRef}
      ></IgrCombo>
      <div className="options">
        <IgrSwitch change={disableFiltering}>
          <span key="filtering">Disable Filtering</span>
        </IgrSwitch>
        <IgrSwitch change={showCaseSencitiveIcon} ref={switchCaseSensitiveRef}>
          <span key="caseSensitive">Show Case-sensitive Icon</span>
        </IgrSwitch>
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
root.render(<ComboFeatures />);
