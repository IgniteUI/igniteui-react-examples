import React from "react";
import ReactDOM from "react-dom/client";
import { IgrCombo, ComboTemplateProps } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import { Cities } from "./data";

type City = {
  name: string;
  id: string;
  country: string;
};

const renderItemTemplate = (args: ComboTemplateProps<City>) => {
  const item = args.item;
  return (
    <span>
      <b>{item.name}</b> [{item.id}] - {item.country}
    </span>
  );
};

export default function ComboTemplates() {
  return (
    <div className="sample">
      <IgrCombo
        valueKey="id"
        displayKey="name"
        groupKey="country"
        data={Cities}
        itemTemplate={renderItemTemplate}>
      </IgrCombo>
    </div>
  );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ComboTemplates />);
