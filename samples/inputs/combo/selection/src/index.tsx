import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import { IgrCombo, IgrButton } from "igniteui-react";
import "./index.css";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import { Cities } from "./ComboData";

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
        <IgrButton onClick={selectCities}>
          <span>Select UK Cities</span>
        </IgrButton>
        <IgrButton onClick={deselectCities}>
          <span>Deselect UK Favorites</span>
        </IgrButton>
        <IgrButton onClick={selectAll}>
          <span>Select All</span>
        </IgrButton>
        <IgrButton onClick={deselectAll}>
          <span>Deselect All</span>
        </IgrButton>
      </div>
    </div>
  );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ComboSelection />);
