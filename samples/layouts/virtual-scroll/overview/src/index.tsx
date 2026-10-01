import React from "react";
import ReactDOM from "react-dom/client";
import {
  IgrAvatar,
  IgrChip,
  IgrList,
  IgrListHeader,
  IgrListItem,
  IgrVirtualScroll,
} from "igniteui-react";
import type { VirtualScrollItemContext } from "igniteui-webcomponents";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import { Employee, generateEmployees } from "./EmployeeData";
import "./index.css";

const employees: Employee[] = generateEmployees(100_000);

export default function VirtualScrollOverview() {
  // Only the items in the viewport, plus a small buffer, are rendered.
  const renderItem = (ctx: VirtualScrollItemContext<Employee>) => (
    <IgrListItem aria-posinset={ctx.index + 1} aria-setsize={ctx.count}>
      <IgrAvatar slot="start" shape="circle" initials={ctx.value.initials} />
      <span slot="title">{ctx.value.name}</span>
      <span slot="subtitle">{ctx.value.email}</span>
      <IgrChip slot="end" variant={ctx.value.variant}>
        {ctx.value.department}
      </IgrChip>
    </IgrListItem>
  );

  return (
    <div className="container sample">
      <IgrList className="employees">
        <IgrListHeader>Employees ({employees.length})</IgrListHeader>
        <IgrVirtualScroll
          className="employees__viewport"
          data={employees}
          estimatedItemSize={55}
          itemTemplate={renderItem}
        />
      </IgrList>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<VirtualScrollOverview />);
