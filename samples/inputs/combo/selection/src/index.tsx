import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import { IgrComboModule, IgrCombo, IgrButtonModule, IgrButton } from "igniteui-react";
import "./index.css";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import { Cities } from "./ComboData";

IgrComboModule.register();
IgrButtonModule.register();

export default function ComboSelection() {
  const comboRef = useRef<IgrCombo>(null);

  const selectCities = () => {
    comboRef.current.select(["UK01", "UK02", "UK03", "UK04", "UK05"]);
  };

  const deselectCities = () => {
    comboRef.current.deselect(["UK01", "UK02", "UK03", "UK04", "UK05"]);
  };

  const selectAll = () => {
    comboRef.current.select([]);
  };

  const deselectAll = () => {
    comboRef.current.deselect([]);
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
      <div className="button-container">
        <IgrButton clicked={selectCities}>
          <span key="selectUK">Select UK Cities</span>
        </IgrButton>
        <IgrButton clicked={deselectCities}>
          <span key="deselectUK">Deselect UK Favorites</span>
        </IgrButton>
        <IgrButton clicked={selectAll}>
          <span key="selectAll">Select All</span>
        </IgrButton>
        <IgrButton clicked={deselectAll}>
          <span key="deselectAll">Deselect All</span>
        </IgrButton>
      </div>
    </div>
  );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ComboSelection />);
