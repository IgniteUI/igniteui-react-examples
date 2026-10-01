import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrColorPicker } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function ColorPickerInputSizes() {
  const smallRef = useRef<IgrColorPicker>(null);

  useEffect(() => {
    smallRef.current?.toggle();
  }, []);

  return (
    <div className="container sample">
      <div>
        <span>Small</span>
        <IgrColorPicker ref={smallRef} className="smallPicker" mode="input" label="Pick a color" />
      </div>
      <div>
        <span>Medium</span>
        <IgrColorPicker className="mediumPicker" mode="input" label="Pick a color" />
      </div>
      <div>
        <span>Large</span>
        <IgrColorPicker className="largePicker" mode="input" label="Pick a color" />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ColorPickerInputSizes />);
