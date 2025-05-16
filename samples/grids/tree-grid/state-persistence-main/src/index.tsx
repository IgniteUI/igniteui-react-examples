import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";

import {
  IgrActionStrip,
  IgrColumn,
  IgrGridPinningActions,
  IgrGridToolbar,
  IgrGridToolbarActions,
  IgrGridToolbarHiding,
  IgrGridToolbarPinning,
  IgrPaginator,
  IgrGridState,
  IgrGridStateOptions,
  IgrTreeGrid,
} from "igniteui-react-grids";
import {
  IgrButton,
  IgrCheckbox,
  IgrCheckboxChangeEventArgs,
  IgrIcon,
  registerIconFromText,
} from "igniteui-react";

import "igniteui-react-grids/grids/combined";
import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import "./index.css";
import { EmployeesNestedData } from "./EmployeesNestedData";

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
  const gridData = new EmployeesNestedData();
  const stateKey = "tree-grid-state";

  const [allOptions, setAllOptions] = useState(true);
  const [options, setOption] = useState<IgrGridStateOptions>({
    cellSelection: true,
    rowSelection: true,
    filtering: true,
    advancedFiltering: true,
    paging: true,
    sorting: true,
    columns: true,
    expansion: true,
    rowPinning: true,
    columnSelection: true,
  });
  const [page, setPage] = useState<number>(0);
  const [perPage, setPerPage] = useState<number>(15);
  const [totalRecords, setTotalRecords] = useState<number>(gridData.length);

  let grid: IgrTreeGrid;
  const gridRef = (ref: IgrTreeGrid) => {
    grid = ref;
  }
  const gridStateRef = useRef<IgrGridState>(null);

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

  const saveGridState = () => {
    const state = gridStateRef.current.getStateAsString([]);
    window.localStorage.setItem(stateKey, state);
  }

  const restoreGridState = () => {
    const state = window.localStorage.getItem(stateKey);
    if (state) {
      gridStateRef.current.applyStateFromString(state, []);
    }
  }

  const resetGridState = () => {
    setPage(0);
    setPerPage(15);
    setTotalRecords(gridData.length);

    grid.clearFilter(null);
    grid.sortingExpressions = [];
    grid.deselectAllColumns();
    grid.deselectAllRows();
    grid.clearCellSelection();
  }

  const onChange = (e: IgrCheckboxChangeEventArgs) => {
    const s = e.target as IgrCheckbox;

    if (s.name === "allFeatures") {
      const isChecked = e.detail.checked;
      setAllOptions(isChecked);

      setOption({
        cellSelection: isChecked,
        rowSelection: isChecked,
        filtering: isChecked,
        advancedFiltering: isChecked,
        paging: isChecked,
        sorting: isChecked,
        columns: isChecked,
        expansion: isChecked,
        rowPinning: isChecked,
        columnSelection: isChecked,
      });
    } else {
      const newOptions = { ...options };
      newOptions[s.name as keyof typeof newOptions] = e.detail.checked;
      setOption(newOptions);
    }
  }

  const leavePage = () => {
    saveGridState();
    window.location.replace("./grids/tree-grid/state-persistence-about");
  }

  const clearStorage = () => {
    window.localStorage.removeItem(stateKey);
  }

  const reloadPage = () => {
    window.location.reload();
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
            <a id="leaveLink" href="./grids/tree-grid/state-persistence-about">
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
          name="advancedFiltering"
          onChange={onChange}
          checked={options.advancedFiltering}
        >
          <span>Adv. Filtering</span>
        </IgrCheckbox>
        <IgrCheckbox
          name="cellSelection"
          onChange={onChange}
          checked={options.cellSelection}
        >
          <span>Cell Selection</span>
        </IgrCheckbox>
        <IgrCheckbox name="columns" onChange={onChange} checked={options.columns}>
          <span>Columns</span>
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
        <IgrCheckbox name="paging" onChange={onChange} checked={options.paging}>
          <span>Paging</span>
        </IgrCheckbox>
        <IgrCheckbox
          name="rowPinning"
          onChange={onChange}
          checked={options.rowPinning}
        >
          <span>Row Pinning</span>
        </IgrCheckbox>
        <IgrCheckbox
          name="rowSelection"
          onChange={onChange}
          checked={options.rowSelection}
        >
          <span>Row Selection</span>
        </IgrCheckbox>
        <IgrCheckbox name="sorting" onChange={onChange} checked={options.sorting}>
          <span>Sorting</span>
        </IgrCheckbox>
      </div>
      <IgrTreeGrid
        ref={gridRef}
        data={gridData}
        primaryKey="ID"
        childDataKey="Employees"
        width="95%"
        height="500px"
        autoGenerate={false}
        moving={true}
        allowFiltering={true}
        allowAdvancedFiltering={true}
        filterMode="excelStyleFilter"
        columnSelection="multiple"
        rowSelection="multiple"
      >
        <IgrGridState ref={gridStateRef}></IgrGridState>
        <IgrGridToolbar>
          <IgrGridToolbarActions>
            <IgrGridToolbarHiding></IgrGridToolbarHiding>
            <IgrGridToolbarPinning></IgrGridToolbarPinning>
          </IgrGridToolbarActions>
        </IgrGridToolbar>
        <IgrActionStrip>
          <IgrGridPinningActions></IgrGridPinningActions>
        </IgrActionStrip>
        <IgrPaginator 
          page={page}  
          perPage={perPage} 
          totalRecords={totalRecords}
          onPageChange={(ev) => setPage(ev.detail)}
          onPerPageChange={(ev) => setPerPage(ev.detail)}>
        </IgrPaginator>
        <IgrColumn
          field="ID"
          header="ID"
          sortable={true}
          filterable={true}
          hidden={true}
        ></IgrColumn>
        <IgrColumn
          field="Name"
          header="Name"
          sortable={true}
          filterable={true}
          pinned={true}
        ></IgrColumn>
        <IgrColumn
          field="Title"
          header="Title"
          sortable={true}
          filterable={true}
        ></IgrColumn>
        <IgrColumn
          field="Age"
          header="Age"
          sortable={true}
          filterable={true}
          groupable={true}
        ></IgrColumn>
        <IgrColumn
          field="Phone"
          header="Phone"
          sortable={true}
          filterable={true}
        ></IgrColumn>
        <IgrColumn
          field="OnPTO"
          header="On PTO"
          sortable={true}
          filterable={true}
          groupable={true}
        ></IgrColumn>
      </IgrTreeGrid>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
