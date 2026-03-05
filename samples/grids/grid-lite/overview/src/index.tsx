import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { GridLiteDataService, User } from "./GridLiteDataService";
import "./index.css";
import {
  IgrAvatar,
  IgrBadge,
  IgrRating,
  type StyleVariant,
} from "igniteui-react";
import {
  IgrGridLite,
  IgrGridLiteColumn,
  type IgrCellContext,
} from "igniteui-react/grid-lite";

import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";

const avatarCellTemplate = (ctx: IgrCellContext) => (
  <IgrAvatar shape="circle" alt="User avatar" src={ctx.value}></IgrAvatar>
);

const satisfactionCellTemplate = (ctx: IgrCellContext) => (
  <IgrRating readOnly max={5} step={0.01} value={ctx.value}></IgrRating>
);

const getDepartmentBadgeVariant = (value: string): StyleVariant => {
  switch (value) {
    case "Engineering":
      return "primary";
    case "Marketing":
      return "warning";
    case "Sales":
      return "danger";
    case "Finance":
      return "success";
    default:
      return "primary";
  }
};

const getEmploymentTypeOutline = (value: string): StyleVariant => {
  switch (value) {
    case "Full-Time":
      return "success";
    case "Part-Time":
      return "warning";
    case "Contract":
      return "primary";
    default:
      return "primary";
  }
};

const employmentTypeCellTemplate = (ctx: IgrCellContext) => (
  <IgrBadge
    variant={getEmploymentTypeOutline(ctx.value)}
    outlined={true}
    className="badge-padded badge-employment"
  >
    {ctx.value}
  </IgrBadge>
);

const departmentCellTemplate = (ctx: IgrCellContext) => (
  <IgrBadge
    variant={getDepartmentBadgeVariant(ctx.value)}
    className="badge-padded badge-department"
  >
    {ctx.value}
  </IgrBadge>
);

const registeredAtCellTemplate = (ctx: IgrCellContext) => (
  <span>{ctx.value.toLocaleString()}</span>
);

export default function Sample() {
  const [data, setData] = React.useState<User[]>([]);

  useEffect(() => {
    const dataService = new GridLiteDataService();
    const data: User[] = dataService.generateUsers(1000);
    setData(data);
  }, []);

  return (
    <div className="container sample ig-typography">
      <div className="grid-lite-wrapper">
        <IgrGridLite data={data} id="grid-lite" adoptRootStyles={true}>
          <IgrGridLiteColumn
            field="avatar"
            header="Avatar"
            cellTemplate={avatarCellTemplate}
          ></IgrGridLiteColumn>
          <IgrGridLiteColumn
            field="firstName"
            header="First Name"
            sortable
            filterable
            resizable
          ></IgrGridLiteColumn>
          <IgrGridLiteColumn
            field="lastName"
            header="Last Name"
            sortable
            filterable
            resizable
          ></IgrGridLiteColumn>
          <IgrGridLiteColumn
            field="satisfaction"
            header="Satisfaction Rating"
            dataType="number"
            sortable
            filterable
            resizable
            cellTemplate={satisfactionCellTemplate}
          ></IgrGridLiteColumn>
          <IgrGridLiteColumn
            field="employmentType"
            header="Employment Type"
            sortable
            filterable
            resizable
            cellTemplate={employmentTypeCellTemplate}
          ></IgrGridLiteColumn>
          <IgrGridLiteColumn
            field="email"
            header="Email Address"
            resizable
          ></IgrGridLiteColumn>
          <IgrGridLiteColumn
            field="department"
            header="Department"
            sortable
            filterable
            resizable
            cellTemplate={departmentCellTemplate}
          ></IgrGridLiteColumn>
          <IgrGridLiteColumn
            field="registeredAt"
            header="Registered On"
            sortable
            resizable
            cellTemplate={registeredAtCellTemplate}
          ></IgrGridLiteColumn>
        </IgrGridLite>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Sample />);
