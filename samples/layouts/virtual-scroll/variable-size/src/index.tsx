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

const employees: Employee[] = generateEmployees(10_000);

export default function VirtualScrollVariableSize() {
  // Every third employee has a bio, so the items have different heights.
  // Each rendered item is measured and its size replaces the estimate.
  const renderItem = (ctx: VirtualScrollItemContext<Employee>) => (
    <IgrListItem aria-posinset={ctx.index + 1} aria-setsize={ctx.count}>
      <IgrAvatar slot="start" shape="circle" initials={ctx.value.initials} />
      <span slot="title">{ctx.value.name}</span>
      <span slot="subtitle">{ctx.value.email}</span>
      {ctx.value.bio && <span className="employees__bio">{ctx.value.bio}</span>}
      <IgrChip slot="end" variant={ctx.value.variant}>
        {ctx.value.department}
      </IgrChip>
    </IgrListItem>
  );

  return (
    <div className="container sample">
      <IgrList className="employees">
        <IgrListHeader>Team directory ({employees.length})</IgrListHeader>
        <IgrVirtualScroll
          className="employees__viewport"
          data={employees}
          estimatedItemSize={63}
          itemTemplate={renderItem}
        />
      </IgrList>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<VirtualScrollVariableSize />);
