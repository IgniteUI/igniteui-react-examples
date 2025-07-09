import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { IgrGrid, IgrColumn, IgrGridKeydownEventArgs, IgrCellType } from "igniteui-react-grids";
import NwindData from "./NwindData.json";

import "igniteui-react-grids/grids/themes/light/bootstrap.css";

function Sample() {
  const gridRef = useRef<IgrGrid>();
  const lastActiveCellRef = useRef<IgrCellType>(null);
  useEffect(() => {
    gridRef.current.addEventListener("keydown", handleKeyDown);
    return () => {
      gridRef.current.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (event: KeyboardEvent) => {
    const code = event.code;
    const grid = event.currentTarget as IgrGrid;
    const activeElem = grid.selectedCells[0] || lastActiveCellRef.current;

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
      const nextRowIndex = getNextEditableIndex(thisRow, dataView, event.shiftKey);

      grid.navigateTo(nextRowIndex, activeElem.column.visibleIndex, (obj: any) => {
        obj.target.activate();
        grid.endEdit(true);
        grid.markForCheck();
      });
    }
  };

  const getNextEditableIndex = (currentIndex: number, dataView: any, previous: boolean): number => {
    if (currentIndex < 0 || (currentIndex === 0 && previous) || (currentIndex >= dataView.length - 1 && !previous)) {
      return currentIndex;
    }
    if (previous) {
      return dataView.findLastIndex((rec: any, index: number) => index < currentIndex && isEditableDataRecordAtIndex(index, dataView));
    }
    return dataView.findIndex((rec: any, index: number) => index > currentIndex && isEditableDataRecordAtIndex(index, dataView));
  };

  const isEditableDataRecordAtIndex = (dataViewIndex: number, dataView: any) => {
    const rec = dataView[dataViewIndex];
    return !rec.expression && !rec.summaries && !rec.childGridsData && !rec.detailsData;
  };

  const cancelGridKeydown = (args: IgrGridKeydownEventArgs) => {
    if (args.detail.event.code === "Enter" || args.detail.event.code === "NumpadEnter") {
      args.detail.cancel = true;
    }
  };

  const handleArrowKeyDown = (event: any) => {
    const code = event.code;
    const grid = event.currentTarget as IgrGrid;
    const activeElem = grid.selectedCells[0];
    if (!activeElem || !activeElem.editMode) return;

    const dataView = grid.dataView;

    if (code === "ArrowDown" || code === "ArrowUp") {
      event.preventDefault();
      event.stopPropagation();

      const thisRow = activeElem.row.index;
      const isUp = code === "ArrowUp";
      const nextRowIndex = getNextEditableIndex(thisRow, dataView, isUp);

      navigateAndFocus(grid, nextRowIndex, activeElem.column.visibleIndex, isUp);
    }

    if (code === "ArrowLeft" || code === "ArrowRight") {
      event.preventDefault();
      event.stopPropagation();

      const thisColumn = activeElem.column.visibleIndex;
      const isLeft = code === "ArrowLeft";
      const nextColIndex = getNextEditableIndex(thisColumn, dataView, isLeft);

      navigateAndFocus(grid, activeElem.row.index, nextColIndex, isLeft);
    }
  };

  const navigateAndFocus = (
    grid: IgrGrid,
    rowIndex: number,
    colIndex: number,
    reverse: boolean
  ) => {
    grid.navigateTo(rowIndex, colIndex, (obj: any) => {
      obj.target.activate();
      grid.endEdit(true);

      const selected = grid.selectedCells;
      let cell = selected[0]

      if (selected.length > 1) {
        cell = reverse ? selected[0] : selected[selected.length - 1];
      }

      grid.clearCellSelection();
      cell.selected = true;
      cell.editMode = true;

      lastActiveCellRef.current = cell;
    });
  };

  return (
    <div className="container sample ig-typography">
      <div className="container fill">
        <IgrGrid ref={gridRef} autoGenerate={false} data={NwindData} primaryKey="ProductID" onGridKeydown={cancelGridKeydown} onKeyDownCapture={handleArrowKeyDown}>
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
