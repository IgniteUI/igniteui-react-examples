import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrGrid, IgrColumn } from "igniteui-react-grids";
import NwindData from "./NwindData.json";

import "igniteui-react-grids/grids/themes/light/bootstrap.css";

function Sample() {
  const gridRef = useRef<IgrGrid>();
  useEffect(() => {
    gridRef.current.addEventListener("keydown", handleKeyDown);
    return () => {
      gridRef.current.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (event: KeyboardEvent) => {
    const code = event.code;
    const grid = event.currentTarget as IgrGrid;
    const activeElem = grid.selectedCells[0];

    if ((event.code >= "Digit0" && event.code <= "Digit9") || (event.code >= "KeyA" && event.code <= "KeyZ") || (event.code >= "Numpad0" && event.code <= "Numpad9" && event.code !== "Enter" && event.code !== "NumpadEnter")) {
      if (activeElem && !activeElem.editMode) {
        activeElem.editMode = true;
        activeElem.editValue = event.key;
      } else if (activeElem && activeElem.editMode) {
        event.preventDefault();
        activeElem.editValue = activeElem.editValue + event.key;
      }
    }

    if (code === "Enter" || code === "NumpadEnter") {
      const thisRow = activeElem.row.index;
      const dataView = grid.dataView;
      const nextRowIndex = getNextEditableRowIndex(thisRow, dataView, event.shiftKey);

      grid.navigateTo(nextRowIndex, activeElem.column.visibleIndex, (obj: any) => {
        obj.target.activate();
        grid.endEdit(true);
        grid.markForCheck();
      });
    }
  };

  const getNextEditableRowIndex = (currentRowIndex: number, dataView: any, previous: boolean) => {
    if (currentRowIndex < 0 || (currentRowIndex === 0 && previous) || (currentRowIndex >= dataView.length - 1 && !previous)) {
      return currentRowIndex;
    }
    if (previous) {
      return dataView.findLastIndex((rec: any, index: number) => index < currentRowIndex && isEditableDataRecordAtIndex(index, dataView));
    }
    return dataView.findIndex((rec: any, index: number) => index > currentRowIndex && isEditableDataRecordAtIndex(index, dataView));
  };

  const isEditableDataRecordAtIndex = (dataViewIndex: number, dataView: any) => {
    const rec = dataView[dataViewIndex];
    return !rec.expression && !rec.summaries && !rec.childGridsData && !rec.detailsData;
  };

  return (
    <div className="container sample ig-typography">
      <div className="container fill">
        <IgrGrid ref={gridRef} autoGenerate={false} data={NwindData} primaryKey="ProductID">
          <IgrColumn field="ProductID" header="Product ID" editable={true} groupable={true} hidden={true} />
          <IgrColumn field="ProductName" header="Product Name" dataType="string" editable={true} />
          <IgrColumn field="UnitPrice" header="Unit Price" dataType="number" editable={true} />
          <IgrColumn field="QuantityPerUnit" header="Quantity Per Unit" groupable={true} dataType="string" editable={true} />
          <IgrColumn field="ReorderLevel" header="Reorder Level" dataType="number" groupable={true} editable={true} />
        </IgrGrid>
      </div>
    </div>
  );
}

export default Sample;

// Render the component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Sample />);
