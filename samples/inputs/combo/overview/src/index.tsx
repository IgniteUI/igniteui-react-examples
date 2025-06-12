import React from "react";
import ReactDOM from "react-dom/client";
import { IgrCombo } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

interface City {
  id: string;
  name: string;
}

const cities: City[] = [
  { name: "London", id: "UK01" },
  { name: "Sofia", id: "BG01" },
  { name: "New York", id: "NY01" },
];

export default function ComboOverview() {
  return (
    <div className="sample">
      <IgrCombo
        valueKey="id"
        displayKey="name"
        data={cities}
        value={["BG01"]}
      ></IgrCombo>
    </div>
  );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ComboOverview />);
