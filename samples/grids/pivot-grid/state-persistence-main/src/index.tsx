import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";

import {
  IgrGridModule,
  IgrGridState,
  IgrGridStateOptions,
  IgrPivotGrid,
  IgrPivotConfiguration,
  IgrPivotValueEventArgs,
  IgrPivotValue,
  GridSelectionMode,
} from "igniteui-react-grids";
import {
  IgrButton,
  IgrCheckbox,
  IgrCheckboxChangeEventArgs,
  IgrCheckboxModule,
  IgrIcon,
  IgrIconModule,
  registerIconFromText,
} from "igniteui-react";
import { PivotDataFlat } from "./PivotDataFlat";

import "igniteui-react-grids/grids/combined";
import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import "./index.css";

const mods: any[] = [IgrGridModule, IgrIconModule, IgrCheckboxModule];
mods.forEach((m) => m.register());

const restoreIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z"/></svg>';
const saveIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"/></svg>';
const clearIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>';
const forwardIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>';
const deleteIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>';
const refreshIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"/></svg>';

export default function App() {
  const gridData = new PivotDataFlat();
  const [allOptions, setAllOptions] = useState(true);
  const [options, setOption] = useState<IgrGridStateOptions>({
    cellSelection: true,
    filtering: true,
    sorting: true,
    expansion: true,
    columnSelection: true,
    pivotConfiguration: true,
  });

  let grid: IgrPivotGrid;
  function gridRef(ref: IgrPivotGrid) {
    grid = ref;
  }
  const stateKey = "pivot-grid-state";
  let gridStateRef = useRef<IgrGridState>(null);

  const pivotConfiguration: IgrPivotConfiguration = {
    // column dimensions
    columns: [
      {
        memberName: "SellerName",
        enabled: true,
      },
    ],
    // row dimensions
    rows: [
      {
        memberName: "ProductName",
        enabled: true,
        width: "150px",
      },
      {
        memberName: "SellerCity",
        displayName: "City",
        enabled: true,
        width: "150px",
      },
    ],
    // values
    values: [
      {
        enabled: true,
        member: "Value",
        aggregate: {
          aggregatorName: "SUM",
          key: "SUM",
          label: "SUM",
        },
        styles: {
          downFontValue: (rowData: any, columnKey: any): boolean =>
            parseFloat(rowData.aggregationValues.get(columnKey.field)) <= 150,
          upFontValue: (rowData: any, columnKey: any): boolean =>
            parseFloat(rowData.aggregationValues.get(columnKey.field)) > 150,
        },
      },
      {
        enabled: true,
        member: "AmountofSale",
        displayName: "Amount of Sale",
        aggregate: {
          aggregator: totalSale,
          label: "Sum of Sale",
          key: "SUM",
        },
        aggregateList: [
          {
            aggregator: totalSale,
            label: "Sum of Sale",
            key: "SUM",
          },
          {
            aggregator: totalMin,
            label: "Minimum of Sale",
            key: "MIN",
          },
          {
            aggregator: totalMax,
            label: "Maximum of Sale",
            key: "MAX",
          },
        ],
      },
    ],
  };

  useEffect(() => {
    registerIconFromText("restore", restoreIcon, "material");
    registerIconFromText("save", saveIcon, "material");
    registerIconFromText("clear", clearIcon, "material");
    registerIconFromText("forward", forwardIcon, "material");
    registerIconFromText("delete", deleteIcon, "material");
    registerIconFromText("refresh", refreshIcon, "material");
    restoreGridState();

    window.addEventListener("beforeunload", saveGridState);
    return () => {
      window.removeEventListener("beforeunload", saveGridState);
    };
  }, []);

  function saveGridState() {
    const state = gridStateRef.current.getStateAsString([]);
    window.localStorage.setItem(stateKey, state);
  }

  function restoreGridState() {
    const state = window.localStorage.getItem(stateKey);
    if (state) {
      gridStateRef.current.applyStateFromString(state, []);
    }
  }

  function resetGridState() {
    grid.allDimensions.forEach((dimension) =>
      grid.clearFilter(dimension.memberName)
    );
    grid.sortingExpressions = [];
    grid.deselectAllColumns();
    grid.clearCellSelection();
  }

  function onValueInit(s: IgrPivotGrid, event: IgrPivotValueEventArgs) {
    const value: IgrPivotValue = event.detail;
    if (value.member === "AmountofSale") {
      value.aggregate.aggregator = totalSale;
      value.aggregateList?.forEach((aggr: any) => {
        switch (aggr.key) {
          case "SUM":
            aggr.aggregator = totalSale;
            break;
          case "MIN":
            aggr.aggregator = totalMin;
            break;
          case "MAX":
            aggr.aggregator = totalMax;
            break;
        }
      });
    } else if (value.member === "Value") {
      value.styles.upFontValue = (rowData: any, columnKey: any): boolean =>
        parseFloat(rowData.aggregationValues.get(columnKey.field)) > 150;
      value.styles.downFontValue = (rowData: any, columnKey: any): boolean =>
        parseFloat(rowData.aggregationValues.get(columnKey.field)) <= 150;
    }
  }

  function onChange(e: IgrCheckboxChangeEventArgs) {
    const s = e.target as IgrCheckbox;
    if (s.name === "allFeatures") {
      setOption({
        cellSelection: e.detail.checked,
        filtering: e.detail.checked,
        sorting: e.detail.checked,
        expansion: e.detail.checked,
        columnSelection: e.detail.checked,
        pivotConfiguration: e.detail.checked,
      });
      for (const key of Object.keys(options)) {
        gridStateRef.current.options[key] = e.detail.checked;
      }
    } else {
      gridStateRef.current.options[s.name] = e.detail.checked;
    }
  }

  function leavePage() {
    saveGridState();
    window.location.replace("./grids/pivot-grid/state-persistence-about");
  }

  function clearStorage() {
    window.localStorage.removeItem(stateKey);
  }

  function reloadPage() {
    window.location.reload();
  }

  function totalSale(member: any, data: any) {
    return data.reduce(
      (accumulator: any, value: any) =>
        accumulator + value.ProductUnitPrice * value.NumberOfUnits,
      0
    );
  }

  function totalMin(member: any, data: any) {
    return data
      .map((x: any) => x.ProductUnitPrice * x.NumberOfUnits)
      .reduce((a: any, b: any) => Math.min(a, b));
  }

  function totalMax(member: any, data: any) {
    return data
      .map((x: any) => x.ProductUnitPrice * x.NumberOfUnits)
      .reduce((a: any, b: any) => Math.max(a, b));
  }

  return (
    <div className="vertical sampleContainer">
      <div className="container horizontal">
        <IgrButton onClick={restoreGridState}>
          <IgrIcon name="restore" collection="material"></IgrIcon>
          <span>Restore</span>
        </IgrButton>
        <IgrButton onClick={saveGridState}>
          <IgrIcon name="save" collection="material"></IgrIcon>
          <span>Save</span>
        </IgrButton>
        <IgrButton onClick={resetGridState}>
          <IgrIcon name="clear" collection="material"></IgrIcon>
          <span>Reset</span>
        </IgrButton>
        <IgrButton onClick={leavePage}>
          <IgrIcon name="forward" collection="material"></IgrIcon>
          <span>Leave</span>
        </IgrButton>
        <IgrButton onClick={clearStorage}>
          <IgrIcon name="delete" collection="material"></IgrIcon>
          <span>Clear</span>
        </IgrButton>
        <IgrButton onClick={reloadPage}>
          <IgrIcon name="refresh" collection="material"></IgrIcon>
          <span>Reload</span>
        </IgrButton>
      </div>
      <div className="container horizontal">
        <ul>
          <li>
            Clicking the SAVE button or leaving the page{" "}
            <a id="leaveLink" href="./grids/pivot-grid/state-persistence-about">
              <strong>here</strong>
            </a>{" "}
            will save grid state to localStorage.
          </li>
          <li>
            Use the control buttons to SAVE / RESTORE / RESET / DELETE / grid
            state or LEAVE the page.
          </li>
          <li>
            Select/Deselect checkboxes to control saving / restoring feature
            state.
          </li>
        </ul>
      </div>
      <div className="container horizontal">
        <IgrCheckbox name="allFeatures" onChange={onChange} checked={allOptions}>
          <span>All Features</span>
        </IgrCheckbox>
        <IgrCheckbox
          name="cellSelection"
          onChange={onChange}
          checked={options.cellSelection}
        >
          <span>Cell Selection</span>
        </IgrCheckbox>
        <IgrCheckbox
          name="columnSelection"
          onChange={onChange}
          checked={options.columnSelection}
        >
          <span>Col Selection</span>
        </IgrCheckbox>
        <IgrCheckbox
          name="expansion"
          onChange={onChange}
          checked={options.expansion}
        >
          <span>Expansion</span>
        </IgrCheckbox>
        <IgrCheckbox
          name="filtering"
          onChange={onChange}
          checked={options.filtering}
        >
          <span>Filtering </span>
        </IgrCheckbox>
        <IgrCheckbox name="sorting" onChange={onChange} checked={options.sorting}>
          <span>Sorting</span>
        </IgrCheckbox>
        <IgrCheckbox
          name="pivotConfiguration"
          onChange={onChange}
          checked={options.pivotConfiguration}
        >
          <span>Pivot Configuration</span>
        </IgrCheckbox>
      </div>
      <IgrPivotGrid
        ref={gridRef}
        data={gridData}
        width="95%"
        height="500px"
        pivotConfiguration={pivotConfiguration}
        valueInit={onValueInit}
        superCompactMode={true}
        columnSelection={GridSelectionMode.Single}
        cellSelection={GridSelectionMode.Single}
      >
        <IgrGridState ref={gridStateRef}></IgrGridState>
      </IgrPivotGrid>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
