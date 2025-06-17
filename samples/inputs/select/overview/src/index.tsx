import React from "react";
import ReactDOM from "react-dom/client";
import { IgrSelect, IgrSelectItem } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";


export default function SelectOverview() {
  return (
    <div className="sample">
      <IgrSelect>
        <IgrSelectItem value="Orange"><span>Orange</span></IgrSelectItem>
        <IgrSelectItem value="Apple"><span>Apple</span></IgrSelectItem>
        <IgrSelectItem value="Banana"><span>Banana</span></IgrSelectItem>
        <IgrSelectItem value="Mango"><span>Mango</span></IgrSelectItem>
      </IgrSelect>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SelectOverview />);