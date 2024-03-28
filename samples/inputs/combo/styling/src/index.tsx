import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import { IgrComboModule, IgrCombo, IgrIconModule, IgrIcon } from "igniteui-react";
import "./index.css";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import { Cities } from "./ComboData";

IgrComboModule.register();
IgrIconModule.register();

const placeSvg =
  '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z"/></svg>';

export default function ComboStyling() {
  const iconPlace = useRef<IgrIcon>(null);

  useEffect(() => {
    if (iconPlace?.current) {
      iconPlace.current.registerIconFromText("place", placeSvg, "material");
    }
  }, []);

  return (
    <div className="sample">
      <IgrCombo
        valueKey="id"
        displayKey="name"
        groupKey="country"
        label="Destinations"
        caseSensitiveIcon
        data={Cities}
      >
        <span slot="helper-text" key="helperText">Choose the desired place</span>
        <span slot="prefix" key="prefix">
          <IgrIcon name="place" ref={iconPlace} collection="material"></IgrIcon>
        </span>
      </IgrCombo>
    </div>
  );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ComboStyling />);
