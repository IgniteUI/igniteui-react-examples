import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";

import {
  FilterMode,
  IgrActionStrip,
  IgrColumn,
  IgrGridModule,
  IgrGridPinningActions,
  IgrGridToolbar,
  IgrGridToolbarActions,
  IgrGridToolbarHiding,
  IgrGridToolbarPinning,
  IgrPaginator,
  IgrGridState,
  IgrGridStateOptions,
  GridSelectionMode,
  IgrHierarchicalGrid,
  IgrRowIsland,
} from "igniteui-react-grids";
import {
  IgrButton,
  IgrCheckbox,
  IgrCheckboxModule,
  IgrCheckboxChangeEventArgs,
  IgrIcon,
  IgrIconModule,
  registerIconFromText,
} from "igniteui-react";
import SingersData from "./SingersData.json";

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
  const gridData = SingersData;
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
    rowIslands: true,
  });

  let grid: IgrHierarchicalGrid;
  function gridRef(ref: IgrHierarchicalGrid) {
    grid = ref;
  }
  let paginatorRef = useRef<IgrPaginator>(null);
  const stateKey = "hierarchical-grid-state";
  let gridStateRef = useRef<IgrGridState>(null);

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
    paginatorRef.current.page = 0;
    paginatorRef.current.perPage = 15;
    paginatorRef.current.totalRecords = gridData.length;
    grid.clearFilter(null);
    grid.sortingExpressions = [];
    grid.deselectAllColumns();
    grid.deselectAllRows();
    grid.clearCellSelection();
  }

  function onChange(e: IgrCheckboxChangeEventArgs) {
    const s = e.target as IgrCheckbox;
    if (s.name === "allFeatures") {
      setOption({
        cellSelection: e.detail.checked,
        rowSelection: e.detail.checked,
        filtering: e.detail.checked,
        advancedFiltering: e.detail.checked,
        paging: e.detail.checked,
        sorting: e.detail.checked,
        columns: e.detail.checked,
        expansion: e.detail.checked,
        rowPinning: e.detail.checked,
        columnSelection: e.detail.checked,
        rowIslands: e.detail.checked,
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
    window.location.replace(
      "./grids/hierarchical-grid/state-persistence-about"
    );
  }

  function clearStorage() {
    window.localStorage.removeItem(stateKey);
  }

  function reloadPage() {
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
            <a
              id="leaveLink"
              href="./grids/hierarchical-grid/state-persistence-about"
            >
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
        <IgrCheckbox
          name="rowIslands"
          onChange={onChange}
          checked={options.rowIslands}
        >
          <span>Row Islands</span>
        </IgrCheckbox>
      </div>
      <IgrHierarchicalGrid
        ref={gridRef}
        data={gridData}
        primaryKey="ID"
        width="95%"
        height="500px"
        autoGenerate={false}
        moving={true}
        allowFiltering={true}
        allowAdvancedFiltering={true}
        filterMode={FilterMode.ExcelStyleFilter}
        columnSelection={GridSelectionMode.Multiple}
        rowSelection={GridSelectionMode.Multiple}
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
        <IgrPaginator ref={paginatorRef}></IgrPaginator>

        <IgrColumn field="Artist" sortable={true}></IgrColumn>
        <IgrColumn
          dataType="image"
          field="Photo"
          editable={false}
          sortable={true}
        ></IgrColumn>
        <IgrColumn field="Debut" dataType="number" sortable={true}></IgrColumn>
        <IgrColumn
          field="GrammyNominations"
          header="Grammy Nominations"
          dataType="number"
          sortable={true}
        ></IgrColumn>
        <IgrColumn
          field="GrammyAwards"
          header="Grammy Awards"
          dataType="number"
          sortable={true}
        ></IgrColumn>
        <IgrRowIsland
          height="null"
          childDataKey="Albums"
          autoGenerate={false}
          primaryKey="Album"
          allowFiltering={true}
          columnSelection={GridSelectionMode.Multiple}
          rowSelection={GridSelectionMode.Multiple}
        >
          <IgrColumn field="Album" sortable={true}></IgrColumn>
          <IgrColumn
            field="LaunchDate"
            header="Launch Date"
            dataType="date"
            sortable={true}
          ></IgrColumn>
          <IgrColumn
            field="BillboardReview"
            header="Billboard Review"
            sortable={true}
          ></IgrColumn>
          <IgrColumn
            field="USBillboard200"
            header="US Billboard 200"
            sortable={true}
          ></IgrColumn>
          <IgrRowIsland
            height="null"
            childDataKey="Songs"
            columnSelection={GridSelectionMode.Multiple}
            rowSelection={GridSelectionMode.Multiple}
            autoGenerate={false}
            primaryKey="Number"
            allowFiltering={true}
          >
            <IgrColumn field="Number" header="No." sortable={true}></IgrColumn>
            <IgrColumn field="Title" sortable={true}></IgrColumn>
            <IgrColumn
              field="Released"
              dataType="date"
              sortable={true}
            ></IgrColumn>
            <IgrColumn field="Genre"></IgrColumn>
          </IgrRowIsland>
        </IgrRowIsland>

        <IgrRowIsland
          height="null"
          childDataKey="Tours"
          autoGenerate={false}
          primaryKey="Tour"
          allowFiltering={true}
          columnSelection={GridSelectionMode.Multiple}
          rowSelection={GridSelectionMode.Multiple}
        >
          <IgrColumn field="Tour" sortable={true}></IgrColumn>
          <IgrColumn
            field="StartedOn"
            header="Started on"
            sortable={true}
          ></IgrColumn>
          <IgrColumn field="Location" sortable={true}></IgrColumn>
          <IgrColumn field="Headliner" sortable={true}></IgrColumn>
        </IgrRowIsland>
      </IgrHierarchicalGrid>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
