import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrGrid, IgrColumn } from "igniteui-react-grids";
import NwindData from "./NwindData.json";

// The ?inline suffix tells Vite to return CSS content as a string
// instead of injecting it into <head>, enabling runtime theme switching.
import lightBootstrap from "igniteui-react-grids/grids/themes/light/bootstrap.css?inline";
import lightMaterial from "igniteui-react-grids/grids/themes/light/material.css?inline";
import lightFluent from "igniteui-react-grids/grids/themes/light/fluent.css?inline";
import lightIndigo from "igniteui-react-grids/grids/themes/light/indigo.css?inline";
import darkBootstrap from "igniteui-react-grids/grids/themes/dark/bootstrap.css?inline";
import darkMaterial from "igniteui-react-grids/grids/themes/dark/material.css?inline";
import darkFluent from "igniteui-react-grids/grids/themes/dark/fluent.css?inline";
import darkIndigo from "igniteui-react-grids/grids/themes/dark/indigo.css?inline";

const themes: { value: string; label: string; css: string; dark: boolean }[] = [
  { value: "light-bootstrap", label: "Bootstrap (Light)", css: lightBootstrap, dark: false },
  { value: "light-material", label: "Material (Light)", css: lightMaterial, dark: false },
  { value: "light-fluent", label: "Fluent (Light)", css: lightFluent, dark: false },
  { value: "light-indigo", label: "Indigo (Light)", css: lightIndigo, dark: false },
  { value: "dark-bootstrap", label: "Bootstrap (Dark)", css: darkBootstrap, dark: true },
  { value: "dark-material", label: "Material (Dark)", css: darkMaterial, dark: true },
  { value: "dark-fluent", label: "Fluent (Dark)", css: darkFluent, dark: true },
  { value: "dark-indigo", label: "Indigo (Dark)", css: darkIndigo, dark: true },
];

function Sample() {
  const [theme, setTheme] = useState("light-bootstrap");

  const activeTheme = themes.find((t) => t.value === theme);
  const isDark = activeTheme?.dark ?? false;

  return (
    <div
      className={`container sample ig-typography${isDark ? " container--dark" : ""}`}
    >
      <div className="options horizontal">
        <label className={isDark ? "label--dark" : ""}>Choose Theme:</label>
        <select
          className={`theme-select ${isDark ? "theme-select--dark" : ""}`}
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          {themes.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>
      <div className="container fill">
        <style>{activeTheme?.css}</style>
        <IgrGrid
          autoGenerate={false}
          data={NwindData}
          primaryKey="ProductID"
          allowFiltering={true}
        >
          <IgrColumn field="ProductID" header="Product ID" hidden={true} />
          <IgrColumn field="ProductName" header="Product Name" dataType="string" sortable={true} />
          <IgrColumn field="UnitPrice" header="Unit Price" dataType="number" sortable={true} />
          <IgrColumn field="QuantityPerUnit" header="Quantity Per Unit" dataType="string" sortable={true} />
          <IgrColumn field="ReorderLevel" header="Reorder Level" dataType="number" sortable={true} />
          <IgrColumn field="Discontinued" header="Discontinued" dataType="boolean" sortable={true} />
          <IgrColumn field="OrderDate" header="Order Date" dataType="date" sortable={true} />
        </IgrGrid>
      </div>
    </div>
  );
}

export default Sample;

// Render the component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Sample />);
