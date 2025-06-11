import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  IgrCombo,
  ComboTemplateProps,
  IgrIcon,
  registerIcon,
} from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import { Cities, City } from "./data";
import "./index.css";

export default function ComboTemplates() {
  useEffect(() => {
    registerIcon("down", "/images/down.svg", "material");
    registerIcon("clear", "/images/clear.svg", "material");
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
