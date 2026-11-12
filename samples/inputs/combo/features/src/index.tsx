import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import { IgrCombo, IgrSwitch } from "igniteui-react";
import "./index.css";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import { usStates } from "./ComboData";

export default function ComboFeatures() {
  const [disableFiltering, setDisableFiltering] = useState(false);
  const [caseSensitiveIcon, setCaseSensitiveIcon] = useState(false);
  const [grouping, setGrouping] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [selection, setSelection] = useState<string[]>([]);
  const comboRef = useRef<IgrCombo>(null);

  const selectedNames = selection.map((id) => usStates.find((state) => state.id === id)?.name ?? id);

  return (
    <div className="sample combo-features">
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
  );
}

// rendering above function to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ComboFeatures />);
