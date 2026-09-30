import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  IgrAvatar,
  IgrButton,
  IgrChip,
  IgrInput,
  IgrList,
  IgrListHeader,
  IgrListItem,
  IgrRadio,
  IgrRadioGroup,
  IgrVirtualScroll,
} from "igniteui-react";
import type { VirtualScrollItemContext } from "igniteui-webcomponents";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import { Employee, generateEmployees } from "./EmployeeData";
import "./index.css";

const employees: Employee[] = generateEmployees(100_000);
const LAST_INDEX = employees.length - 1;

export default function VirtualScrollScrollToIndex() {
  const virtualScroll = useRef<IgrVirtualScroll>(null);
  const [targetIndex, setTargetIndex] = useState("50000");
  const [alignment, setAlignment] = useState<ScrollLogicalPosition>("start");

  const renderItem = (ctx: VirtualScrollItemContext<Employee>) => (
    <IgrListItem aria-posinset={ctx.index + 1} aria-setsize={ctx.count}>
      <IgrAvatar slot="start" shape="circle" initials={ctx.value.initials} />
      <span slot="title">
        #{ctx.index} {ctx.value.name}
      </span>
      <span slot="subtitle">{ctx.value.email}</span>
      <IgrChip slot="end" variant={ctx.value.variant}>
        {ctx.value.department}
      </IgrChip>
    </IgrListItem>
  );

  const goTo = async (index: number) => {
    const target = Math.min(Math.max(Math.trunc(index) || 0, 0), LAST_INDEX);
    setTargetIndex(String(target));

    // Items that have not been rendered only have an estimated size, so the
    // first jump lands near the target. The promise resolves once the
    // component has measured the landing area and corrected the offset.
    await virtualScroll.current?.scrollToIndex(target, { block: alignment });
    highlight(target);
  };

  const highlight = (index: number) => {
    const item = virtualScroll.current?.querySelector<HTMLElement>(
      `[data-vs-index="${index}"]`
    );
    if (!item) {
      return;
    }

    // Restart the animation when the same item is highlighted again.
    item.classList.remove("employees__item--highlighted");
    void item.offsetWidth;
    item.classList.add("employees__item--highlighted");
  };

  return (
    <div className="container sample">
      <div className="toolbar">
        <IgrInput
          className="toolbar__index"
          type="number"
          label="Index"
          min={0}
          max={LAST_INDEX}
          value={targetIndex}
          onInput={(event) => setTargetIndex(event.detail)}
        />
        <IgrRadioGroup
          alignment="horizontal"
          onChange={(event) =>
            setAlignment((event.target as IgrRadio).value as ScrollLogicalPosition)
          }
        >
          <IgrRadio name="alignment" value="start" checked>
            <span>start</span>
          </IgrRadio>
          <IgrRadio name="alignment" value="center">
            <span>center</span>
          </IgrRadio>
          <IgrRadio name="alignment" value="end">
            <span>end</span>
          </IgrRadio>
          <IgrRadio name="alignment" value="nearest">
            <span>nearest</span>
          </IgrRadio>
        </IgrRadioGroup>
        <div className="toolbar__actions">
          <IgrButton onClick={() => goTo(Number(targetIndex))}>
            <span>Go</span>
          </IgrButton>
          <IgrButton variant="outlined" onClick={() => goTo(0)}>
            <span>First</span>
          </IgrButton>
          <IgrButton variant="outlined" onClick={() => goTo(LAST_INDEX / 2)}>
            <span>Middle</span>
          </IgrButton>
          <IgrButton variant="outlined" onClick={() => goTo(LAST_INDEX)}>
            <span>Last</span>
          </IgrButton>
          <IgrButton
            variant="outlined"
            onClick={() => goTo(Math.random() * LAST_INDEX)}
          >
            <span>Random</span>
          </IgrButton>
        </div>
      </div>
      <IgrList className="employees">
        <IgrListHeader>Employees ({employees.length})</IgrListHeader>
        <IgrVirtualScroll
          ref={virtualScroll}
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
root.render(<VirtualScrollScrollToIndex />);
