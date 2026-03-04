import React from "react";
import ReactDOM from "react-dom/client";
import { GridLiteDataService, User } from "./GridLiteDataService";

import { IgrCheckbox } from "igniteui-react";
import {
  IgrGridLite,
  IgrGridLiteColumn,
  type IgrCellContext,
} from "igniteui-react/grid-lite";

import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";

// Define cellTemplate function outside component
const activeCellTemplate = (ctx: IgrCellContext) => (
  <IgrCheckbox checked={ctx.value}></IgrCheckbox>
);

export default function Sample() {
  const [data, setData] = React.useState<User[]>([]);

  React.useEffect(() => {
    const dataService = new GridLiteDataService();
    const items: User[] = dataService.generateUsers(50);
    setData(items);
  }, []);

  return (
    <div className="container sample ig-typography">
      <div className="grid-lite-wrapper">
        <IgrGridLite id="grid-lite" data={data}>
          <IgrGridLiteColumn
            field="firstName"
            header="First name"
            filterable
          ></IgrGridLiteColumn>
          <IgrGridLiteColumn
            field="lastName"
            header="Last name"
            filterable
          ></IgrGridLiteColumn>
          <IgrGridLiteColumn
            field="age"
            header="Age"
            filterable
            dataType="number"
          ></IgrGridLiteColumn>
          <IgrGridLiteColumn
            field="active"
            header="Active"
            dataType="boolean"
            filterable
            cellTemplate={activeCellTemplate}
          ></IgrGridLiteColumn>
        </IgrGridLite>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Sample />);
