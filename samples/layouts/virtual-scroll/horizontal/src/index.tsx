import React from "react";
import ReactDOM from "react-dom/client";
import {
  IgrAvatar,
  IgrCard,
  IgrCardContent,
  IgrCardHeader,
  IgrChip,
  IgrVirtualScroll,
} from "igniteui-react";
import type { VirtualScrollItemContext } from "igniteui-webcomponents";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import { Employee, generateEmployees } from "./EmployeeData";
import "./index.css";

const employees: Employee[] = generateEmployees(10_000);

export default function VirtualScrollHorizontal() {
  // With a horizontal orientation the items are measured by their width.
  const renderItem = (ctx: VirtualScrollItemContext<Employee>) => (
    <div
      className={`cards__item ${ctx.value.bio ? "cards__item--wide" : ""}`}
      role="listitem"
      aria-posinset={ctx.index + 1}
      aria-setsize={ctx.count}
    >
      <IgrCard elevated>
        <IgrCardHeader>
          <IgrAvatar
            slot="thumbnail"
            shape="circle"
            initials={ctx.value.initials}
          />
          <h3 slot="title">{ctx.value.name}</h3>
          <h5 slot="subtitle">
            {ctx.value.bio ? ctx.value.email : `#${ctx.value.id}`}
          </h5>
        </IgrCardHeader>
        <IgrCardContent>
          <IgrChip variant={ctx.value.variant}>{ctx.value.department}</IgrChip>
        </IgrCardContent>
      </IgrCard>
    </div>
  );

  return (
    <div className="container sample">
      <IgrVirtualScroll
        className="cards"
        orientation="horizontal"
        data={employees}
        estimatedItemSize={253}
        itemTemplate={renderItem}
      />
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<VirtualScrollHorizontal />);
