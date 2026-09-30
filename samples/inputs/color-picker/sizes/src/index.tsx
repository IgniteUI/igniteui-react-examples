import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrColorPicker } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function ColorPickerSizes() {
  const smallRef = useRef<IgrColorPicker>(null);

  useEffect(() => {
    smallRef.current?.toggle();
  }, []);

  return (
    <div className="container sample">
      <div>
        <span>Small</span>
        <IgrColorPicker ref={smallRef} className="smallPicker" label="Pick a color" />
      </div>
      <div>
        <span>Medium</span>
        <IgrColorPicker className="mediumPicker" label="Pick a color" />
      </div>
      <div>
        <span>Large</span>
        <IgrColorPicker className="largePicker" label="Pick a color" />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ColorPickerSizes />);
