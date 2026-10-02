import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrColorPicker } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function ColorPickerStates() {
  const defaultRef = useRef<IgrColorPicker>(null);
  const [invalid, setInvalid] = useState(true);

  useEffect(() => {
    defaultRef.current?.toggle();
  }, []);

  return (
    <div className="container sample">
      <div>
        <span>Default state</span>
        <IgrColorPicker ref={defaultRef} id="defaultPicker" label="Pick a color" />
      </div>
      <div>
        <span>Invalid state</span>
        <IgrColorPicker
          id="invalidPicker"
          invalid={invalid}
          required={true}
          label="Pick a color"
          onInput={() => setInvalid(false)}
        />
      </div>
      <div>
        <span>Disabled state</span>
        <IgrColorPicker disabled={true} label="Pick a color" />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ColorPickerStates />);
