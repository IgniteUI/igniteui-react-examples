import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  IgrCombo,
  ComboTemplateProps,
  IgrIcon,
  registerIconFromText
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import { Cities, City } from "./data";
import "./index.css";

export default function ComboTemplates() {

  const downIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z"/></svg>';
  const clearIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M120-280v-80h560v80H120Zm80-160v-80h560v80H200Zm80-160v-80h560v80H280Z"/></svg>';

  useEffect(() => {
    registerIconFromText("down", downIcon, "material");
    registerIconFromText("clear", clearIcon, "material");
  }, []);

  const renderGroupHeaderTemplate = (args: ComboTemplateProps<City>) => {
    return <span>Country of {args.item.country}</span>;
  };

  const renderItemTemplate = (args: ComboTemplateProps<City>) => {
    const item = args.item;
    return (
      <span>
        <b>{item.name}</b> [{item.id}] - {item.country}
      </span>
    );
  };

  return (
    <div className="sample">
      <IgrCombo
        valueKey="id"
        displayKey="name"
        groupKey="country"
        data={Cities}
        itemTemplate={renderItemTemplate}
        groupHeaderTemplate={renderGroupHeaderTemplate}
      >
        <header slot="header" className="combo-padding">
          <strong>Select a City</strong>
          <div>List of countries and their most popular cities</div>
        </header>
        <footer slot="footer" className="combo-padding">
          <em>
            Tip: Start typing to find your city if you have troubles finding it.
          </em>
        </footer>
        <span slot="toggle-icon">
          <IgrIcon name="down" collection="material"></IgrIcon>
        </span>
        <span slot="clear-icon">
          <IgrIcon name="clear" collection="material"></IgrIcon>
        </span>
      </IgrCombo>
    </div>
  );
}

// rendering above function to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ComboTemplates />);
