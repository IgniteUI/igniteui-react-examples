import React from "react";
import ReactDOM from "react-dom/client";
import {
  IgrSelect,
  IgrSelectItem,
  IgrSelectHeader
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

export default function SelectHeader() {
  return (
    <div className="sample">
      <IgrSelect>
        <IgrSelectHeader><span>Tasks</span></IgrSelectHeader>
        <IgrSelectItem value="spec" selected><span>Specification</span></IgrSelectItem>
        <IgrSelectItem value="implement"><span>Implementation</span></IgrSelectItem>
        <IgrSelectItem value="test" disabled><span>Testing</span></IgrSelectItem>
        <IgrSelectItem value="docs"><span>Documentation</span></IgrSelectItem>
      </IgrSelect>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SelectHeader />);