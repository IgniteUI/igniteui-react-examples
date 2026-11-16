import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import { IgrCombo, IgrIcon, IgrSwitch, registerIconFromText } from "igniteui-react";
import "./index.css";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import { usStates } from "./ComboData";

// The icon of the hint under the sample.
registerIconFromText(
  "info_outline",
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"/></svg>',
  "material"
);

export default function ComboFeatures() {
  const [disableFiltering, setDisableFiltering] = useState(false);
  const [caseSensitiveIcon, setCaseSensitiveIcon] = useState(false);
  const [grouping, setGrouping] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [selection, setSelection] = useState<string[]>([]);
  const comboRef = useRef<IgrCombo>(null);

  const selectedNames = selection.map((id) => usStates.find((state) => state.id === id)?.name ?? id);

  return (
    <div className="sample features-sample">
      <div className="combo-features">
        <div className="combo-column">
          <IgrCombo
            ref={comboRef}
            outlined
            label="Location"
            placeholderSearch="Search…"
            data={usStates}
            valueKey="id"
            displayKey="name"
            disableFiltering={disableFiltering}
            caseSensitiveIcon={caseSensitiveIcon}
            groupKey={grouping ? "region" : undefined}
            disabled={disabled}
            // onChange fires before the selection changes, so read the value once the change applies.
            onChange={() => queueMicrotask(() => setSelection((comboRef.current?.value ?? []) as string[]))}
          />

          <div className="selection-panel">
            <span className="selection-title" id="selection-title">Selection</span>
            {selectedNames.length > 0 ? (
              <ul className="selection-list" aria-labelledby="selection-title">
                {selectedNames.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            ) : (
              <span className="selection-empty">No items selected</span>
            )}
          </div>
        </div>

        <div className="controls">
          <IgrSwitch checked={disableFiltering} onChange={(e) => setDisableFiltering(e.detail.checked)}>
            Disable Filtering
          </IgrSwitch>
          {/* Without filtering the combo hides its search input, and the case-sensitive icon with it. */}
          <IgrSwitch checked={caseSensitiveIcon} disabled={disableFiltering} onChange={(e) => setCaseSensitiveIcon(e.detail.checked)}>
            Show Case-sensitive Icon
          </IgrSwitch>
          <IgrSwitch checked={grouping} onChange={(e) => setGrouping(e.detail.checked)}>
            Enable Grouping
          </IgrSwitch>
          <IgrSwitch checked={disabled} onChange={(e) => setDisabled(e.detail.checked)}>
            Disable Combo
          </IgrSwitch>
        </div>
      </div>

      <p className="sample-hint">
        <IgrIcon name="info_outline" collection="material" />
        <span>Open the combo to see the features</span>
      </p>
    </div>
  );
}

// rendering above function to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ComboFeatures />);
