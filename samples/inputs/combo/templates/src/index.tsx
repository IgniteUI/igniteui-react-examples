import React from "react";
import ReactDOM from "react-dom/client";
import { IgrCombo, ComboTemplateProps, IgrIcon, registerIcon } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import { Cities } from "./data";

type City = {
  name: string;
  id: string;
  country: string;
};

registerIcon("down", "images/down.svg", "material");
registerIcon("clear", "images/clear.svg", "material");

const renderItemTemplate = (args: ComboTemplateProps<City>) => {
  const item = args.item;
  return (
    <span>
      <b>{item.name}</b> [{item.id}] - {item.country}
    </span>
  );
};

const renderGroupHeaderTemplate = (args: ComboTemplateProps<City>) => {
  return <span>Country of {args.item.country}</span>;
};

export default function ComboTemplates() {
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
        <header slot="header">Header content goes here</header>
        <footer slot="footer">Footer content goes here</footer>
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

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ComboTemplates />);
