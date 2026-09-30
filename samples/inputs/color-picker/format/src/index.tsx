import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrColorPicker } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function ColorPickerFormat() {
  const pickerRef = useRef<IgrColorPicker>(null);

  useEffect(() => {
    pickerRef.current?.toggle();
  }, []);

  return (
    <div className="container sample">
      <IgrColorPicker ref={pickerRef} format="rgb" label="Pick a color" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ColorPickerFormat />);
