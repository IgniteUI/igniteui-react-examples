import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrColorPicker } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

const oneLineSwatches = [
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#3f51b5",
  "#2196f3",
  "#4caf50",
];

const multiLineSwatches = [
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#3f51b5",
  "#2196f3",
  "#4caf50",
  "#ffeb3b",
  "#ff9800",
  "#795548",
  "#607d8b",
  "#ffffff",
  "#000000",
  "#0000ff",
  "#00ff00",
  "#ff00ff",
  "#00ffff",
  "#ff0000",
  "#ffff00",
  "#ff00ff",
  "#00ffff",
  "#c0c0c0",
  "#808080",
  "#800000",
  "#808000",
];

export default function ColorPickerSwatches() {
  const oneLineRef = useRef<IgrColorPicker>(null);
  const multiLineRef = useRef<IgrColorPicker>(null);

  useEffect(() => {
    oneLineRef.current?.toggle();
    multiLineRef.current?.toggle();
  }, []);

  return (
    <div className="container sample">
      <IgrColorPicker
        ref={oneLineRef}
        id="one-line"
        label="Pick a color"
        swatches={oneLineSwatches}
      />
      <IgrColorPicker
        ref={multiLineRef}
        id="multi-line"
        label="Pick a color"
        swatches={multiLineSwatches}
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ColorPickerSwatches />);
