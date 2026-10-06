import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  IgrAvatar,
  IgrChip,
  IgrLinearProgress,
  IgrList,
  IgrListHeader,
  IgrListItem,
  IgrVirtualScroll,
} from "igniteui-react";
import type {
  VirtualScrollDataRequest,
  VirtualScrollItemContext,
} from "igniteui-webcomponents";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import { Employee, generateEmployees } from "./EmployeeData";
import "./index.css";

/** The size of the whole remote collection. */
const TOTAL_COUNT = 1_000;
const PAGE_SIZE = 50;

export default function VirtualScrollInfiniteScroll() {
  // Load the first page up front: an empty list has no rendered window to run
  // out of, so it does not request data.
  const [employees, setEmployees] = useState<Employee[]>(() =>
    generateEmployees(PAGE_SIZE)
  );
  const [loading, setLoading] = useState(false);
  const pending = useRef(false);

  const renderItem = (ctx: VirtualScrollItemContext<Employee>) => (
    <IgrListItem aria-posinset={ctx.index + 1} aria-setsize={TOTAL_COUNT}>
      <IgrAvatar slot="start" shape="circle" initials={ctx.value.initials} />
      <span slot="title">
        #{ctx.value.id} {ctx.value.name}
      </span>
      <span slot="subtitle">{ctx.value.email}</span>
      <IgrChip slot="end" variant={ctx.value.variant}>
        {ctx.value.department}
      </IgrChip>
    </IgrListItem>
  );

  /**
   * `igcDataRequest` is emitted when the rendered window nears the end of `data`.
   * Only one request is emitted at a time: the next one follows the next `data` change.
   */
  const loadMore = (request: VirtualScrollDataRequest) => {
    if (pending.current || request.startIndex >= TOTAL_COUNT) {
      return;
    }

    pending.current = true;
    setLoading(true);
    const count = Math.min(
      Math.max(request.count, PAGE_SIZE),
      TOTAL_COUNT - request.startIndex
    );

    // Simulates a request to a remote service.
    setTimeout(() => {
      // Assign a new array: `data` is compared by reference.
      setEmployees((current) => [
        ...current,
        ...generateEmployees(count, request.startIndex),
      ]);
      pending.current = false;
      setLoading(false);
    }, 800);
  };

  return (
    <div className="container sample">
      <IgrList className="employees">
        <IgrListHeader>
          Loaded {employees.length} of {TOTAL_COUNT} employees
        </IgrListHeader>
        <IgrVirtualScroll
          className="employees__viewport"
          data={employees}
          estimatedItemSize={55}
          itemTemplate={renderItem}
          onDataRequest={(event) => loadMore(event.detail)}
        />
        <div className="employees__status">
          {loading && <IgrLinearProgress indeterminate hideLabel />}
        </div>
      </IgrList>
    </div>
  );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<VirtualScrollInfiniteScroll />);
