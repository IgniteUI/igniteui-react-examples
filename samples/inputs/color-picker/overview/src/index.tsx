import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import {
  IgrButton,
  IgrCard,
  IgrCardActions,
  IgrCardContent,
  IgrColorPicker,
  IgrIconButton,
  IgrSelect,
  IgrSelectItem,
  registerIconFromText,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";

const refreshIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08a5.99 5.99 0 0 1-5.65 4c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>';

export default function ColorPickerOverview() {
  const pickerRef = useRef<IgrColorPicker>(null);

  useEffect(() => {
    registerIconFromText("refresh", refreshIcon, "material");
  }, []);

  const resetColor = () => {
    if (pickerRef.current) {
      pickerRef.current.value = "";
    }
  };

  return (
    <div className="container sample">
      <IgrCard>
        <IgrCardContent>
          <h2>Choose your interior color</h2>
          <IgrSelect label="Type of wall paints" value="satin" outlined={true}>
            <IgrSelectItem value="matte"><span>Matte</span></IgrSelectItem>
            <IgrSelectItem value="satin"><span>Satin</span></IgrSelectItem>
            <IgrSelectItem value="eggshell"><span>Eggshell</span></IgrSelectItem>
            <IgrSelectItem value="gloss"><span>Gloss</span></IgrSelectItem>
          </IgrSelect>
          <IgrSelect label="Paint quantity" value="3l" outlined={true}>
            <IgrSelectItem value="1l"><span>1 litre</span></IgrSelectItem>
            <IgrSelectItem value="3l"><span>3 litres</span></IgrSelectItem>
            <IgrSelectItem value="5l"><span>5 litres</span></IgrSelectItem>
            <IgrSelectItem value="10l"><span>10 litres</span></IgrSelectItem>
          </IgrSelect>
          <div className="color-row">
            <IgrColorPicker ref={pickerRef} mode="input" value="#0598fa" />
            <IgrIconButton
              id="colorReset"
              name="refresh"
              collection="material"
              variant="flat"
              onClick={resetColor}
            />
          </div>
        </IgrCardContent>
        <IgrCardActions>
          <IgrButton variant="flat">Back</IgrButton>
          <div className="stepper">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot active"></span>
          </div>
          <IgrButton variant="flat">Confirm</IgrButton>
        </IgrCardActions>
      </IgrCard>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ColorPickerOverview />);
