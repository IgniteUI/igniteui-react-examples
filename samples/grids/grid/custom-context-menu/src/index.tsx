import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  IgrGridContextMenuEventArgs
} from "igniteui-react-grids";
import { IgrGrid, IgrColumn } from "igniteui-react-grids";
import { NwindData } from "./NwindData";

import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import { IgrIcon, registerIconFromText } from "igniteui-react";

const icon = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M180-81q-24 0-42-18t-18-42v-603h60v603h474v60H180Zm120-120q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h440q24 0 42 18t18 42v560q0 24-18 42t-42 18H300Zm0-60h440v-560H300v560Zm0 0v-560 560Z"/></svg>`;

export default function App() {
  const [clickedCell, setClickedCell] = useState(null);
  const [isCellWithinRange, setIsCellWithinRange] = useState(false);
  const [selectedData, setSelectedData] = useState("");
  const gridRef = useRef<IgrGrid>(null);
  const contextMenuRef = useRef(null);
  const northWindData = new NwindData();

  useEffect(() => {
    registerIconFromText("content_copy", icon, "material");
  }, []);

  const rightClick = (event: IgrGridContextMenuEventArgs) => {
    const eventArgs = event.detail;
    eventArgs.event.preventDefault();
    const node = eventArgs.cell.cellID;
    const isCellWithinRange = gridRef.current
      .getSelectedRanges()
      .some((range: any) => {
        if (
          node.columnID >= range.columnStart &&
          node.columnID <= range.columnEnd &&
          node.rowIndex >= range.rowStart &&
          node.rowIndex <= range.rowEnd
        ) {
          return true;
        }
        return false;
      });
    setIsCellWithinRange(isCellWithinRange);
    setClickedCell(eventArgs.cell);
    openContextMenu(eventArgs.event.clientX, eventArgs.event.clientY);
  };

  const openContextMenu = (x: number, y: number) => {
    contextMenuRef.current.style.left = x + "px";
    contextMenuRef.current.style.top = y + "px";
    contextMenuRef.current.style.display = "";
  };

  const closeContextMenu = () => {
    contextMenuRef.current.style.display = "none";
  };

  const copySelectedRowData = () => {
    const selectedData = gridRef.current.getRowData(clickedCell.cellID.rowID);
    copyData(selectedData);
    closeContextMenu();
  };

  const copySelectedCellData = () => {
    const selectedData = clickedCell.value;
    copyData(selectedData);
    closeContextMenu();
  };

  const copySelectedData = () => {
    const selectedData = gridRef.current.getSelectedData(null, null);
    copyData(selectedData);
    closeContextMenu();
  };

  const copyData = (data: any[]) => {
    const tempElement = document.createElement("input");
    document.body.appendChild(tempElement);
    tempElement.setAttribute("id", "temp_id");
    (document.getElementById("temp_id") as HTMLInputElement).value =
      JSON.stringify(data);
    tempElement.select();
    const dataStringified = JSON.stringify(data);
    navigator.clipboard.writeText(dataStringified).catch((err) => {
       console.error("Failed to copy: ", err);
    });
    document.body.removeChild(tempElement);
    setSelectedData(dataStringified);
  };

  return (
    <>
      <div className="container sample">
        <div className="wrapper" onClick={closeContextMenu}>
          <IgrGrid
            autoGenerate={false}
            data={northWindData}
            primaryKey="ProductID"
            ref={gridRef}
            onContextMenu={rightClick}
          >
            <IgrColumn field="ProductID" header="Product ID"></IgrColumn>
            <IgrColumn field="ProductName" header="Product Name"></IgrColumn>
            <IgrColumn
              field="UnitsInStock"
              header="Units In Stock"
              dataType="number"
            ></IgrColumn>
            <IgrColumn
              field="UnitPrice"
              header="Units Price"
              dataType="number"
            ></IgrColumn>
            <IgrColumn field="Discontinued" dataType="boolean"></IgrColumn>
            <IgrColumn
              field="OrderDate"
              header="Order Date"
              dataType="date"
            ></IgrColumn>
          </IgrGrid>
          <div className="selected-data-area">{selectedData}</div>
        </div>
      </div>
      <div
        style={{ display: "none" }}
        className="contextmenu"
        ref={contextMenuRef}
      >
        <span className="item" onClick={copySelectedCellData}>
          <IgrIcon
            collection="material"
            name="content_copy"
          ></IgrIcon>
          Copy Cell Data
        </span>
        <span className="item" onClick={copySelectedRowData}>
          <IgrIcon collection="material" name="content_copy"></IgrIcon>Copy Row
          Data
        </span>
        {isCellWithinRange && (
          <span className="item" onClick={copySelectedData}>
            <IgrIcon collection="material" name="content_copy"></IgrIcon>Copy
            Cells Data
          </span>
        )}
      </div>
    </>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
