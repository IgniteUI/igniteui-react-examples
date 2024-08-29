import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';

import {
    FilterMode,
    IgrActionStrip,
    IgrGrid,
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
    GridSelectionMode
} from 'igniteui-react-grids';
import { IgrButton, IgrCheckbox, IgrCheckboxModule, IgrCheckboxChangeEventArgs, IgrIcon, IgrIconModule } from 'igniteui-react';
import { registerIconFromText } from 'igniteui-webcomponents';
import { CustomersData } from './CustomersData';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import './index.css';

const mods: any[] = [
    IgrGridModule,
    IgrIconModule,
    IgrCheckboxModule
];
mods.forEach((m) => m.register());

const restoreIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z"/></svg>';
const saveIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"/></svg>';
const clearIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>';
const forwardIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>';
const deleteIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>';
const refreshIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"/></svg>';

export default function App() {
    const gridData = new CustomersData();
    const [allOptions, setAllOptions] = useState(true);
    const [options, setOption] = useState<IgrGridStateOptions>({
        cellSelection: true,
        rowSelection: true,
        filtering: true,
        advancedFiltering: true,
        paging: true,
        sorting: true,
        groupBy: true,
        columns: true,
        expansion: true,
        rowPinning: true,
        columnSelection: true
    });

    let grid: IgrGrid;
    function gridRef(ref: IgrGrid) {
        grid = ref;
    }
    let paginatorRef = useRef<IgrPaginator>(null);
    const stateKey = "grid-state";
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
    });

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
        grid.groupingExpressions = [];
        grid.deselectAllColumns();
        grid.deselectAllRows();
        grid.clearCellSelection();
    }

    function onChange(s: IgrCheckbox, e: IgrCheckboxChangeEventArgs) {
        if (s.name === 'allFeatures') {
            const bEnabled = e.detail.checked;
            setOption({
                cellSelection: bEnabled,
                rowSelection: bEnabled,
                filtering: bEnabled,
                advancedFiltering: bEnabled,
                paging: bEnabled,
                sorting: bEnabled,
                groupBy: bEnabled,
                columns: bEnabled,
                expansion: bEnabled,
                rowPinning: bEnabled,
                columnSelection: bEnabled
            });
            for (const key of Object.keys(options)) {
                gridStateRef.current.options[key] = bEnabled;
            }
        } else {
            gridStateRef.current.options[s.name] = e.detail.checked;
        }
    }

    function leavePage() {
        saveGridState();
        window.location.replace("./grids/grid/state-persistence-about");
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
                <IgrButton clicked={restoreGridState}>
                    <IgrIcon name="restore" collection="material"></IgrIcon>
                    <span>Restore</span>
                </IgrButton>
                <IgrButton clicked={saveGridState}>
                    <IgrIcon name="save" collection="material"></IgrIcon>
                    <span>Save</span>
                </IgrButton>
                <IgrButton clicked={resetGridState}>
                    <IgrIcon name="clear" collection="material"></IgrIcon>
                    <span>Reset</span>
                </IgrButton>
                <IgrButton clicked={leavePage}>
                    <IgrIcon name="forward" collection="material"></IgrIcon>
                    <span>Leave</span>
                </IgrButton>
                <IgrButton clicked={clearStorage}>
                    <IgrIcon name="delete" collection="material"></IgrIcon>
                    <span>Clear</span>
                </IgrButton>
                <IgrButton clicked={reloadPage}>
                    <IgrIcon name="refresh" collection="material"></IgrIcon>
                    <span>Reload</span>
                </IgrButton>
            </div>
            <div className="container horizontal">
                <ul>
                    <li>Clicking the SAVE button or leaving the page <a id="leaveLink" href="./grids/grid/state-persistence-about"><strong>here</strong></a> will save grid state to localStorage.</li>
                    <li>Use the control buttons to SAVE / RESTORE / RESET / DELETE / grid state or LEAVE the page.</li>
                    <li>Select/Deselect checkboxes to control saving / restoring feature state.</li>
                </ul>
            </div>
            <div className="container horizontal">
                <IgrCheckbox name="allFeatures" change={onChange} checked={allOptions}><span>All Features</span></IgrCheckbox>
                <IgrCheckbox name="advancedFiltering" change={onChange} checked={options.advancedFiltering}><span>Adv. Filtering</span></IgrCheckbox>
                <IgrCheckbox name="cellSelection" change={onChange} checked={options.cellSelection}><span>Cell Selection</span></IgrCheckbox>
                <IgrCheckbox name="columns" change={onChange} checked={options.columns}><span>Columns</span></IgrCheckbox>
                <IgrCheckbox name="columnSelection" change={onChange} checked={options.columnSelection}><span>Col Selection</span></IgrCheckbox>
                <IgrCheckbox name="expansion" change={onChange} checked={options.expansion}><span>Expansion</span></IgrCheckbox>
                <IgrCheckbox name="filtering" change={onChange} checked={options.filtering}><span>Filtering </span></IgrCheckbox>
                <IgrCheckbox name="paging" change={onChange} checked={options.paging}><span>Paging</span></IgrCheckbox>
                <IgrCheckbox name="rowPinning" change={onChange} checked={options.rowPinning}><span>Row Pinning</span></IgrCheckbox>
                <IgrCheckbox name="rowSelection" change={onChange} checked={options.rowSelection}><span>Row Selection</span></IgrCheckbox>
                <IgrCheckbox name="sorting" change={onChange} checked={options.sorting}><span>Sorting</span></IgrCheckbox>
                <IgrCheckbox name="groupBy" change={onChange} checked={options.groupBy}><span>Group By</span></IgrCheckbox>
            </div>
            <IgrGrid ref={gridRef} data={gridData} primaryKey="ID" width="95%" height="500px" autoGenerate="false" moving="true" allowFiltering="true"
                allowAdvancedFiltering="true" filterMode={FilterMode.ExcelStyleFilter} columnSelection={GridSelectionMode.Multiple} rowSelection={GridSelectionMode.Multiple}>
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

                <IgrColumn field="ID" width="100px" sortable="true" filterable="true" pinned="true"></IgrColumn>
                <IgrColumn field="ContactName" header="Contact Name" minWidth="200px" sortable="true" filterable="true" pinned="true"></IgrColumn>
                <IgrColumn field="ContactTitle" header="Contact Title" minWidth="200px" sortable="true" filterable="true" groupable="true"></IgrColumn>
                <IgrColumn field="CompanyName" header="Company Name" minWidth="200px" sortable="true" filterable="true" groupable="true"></IgrColumn>
                <IgrColumn field="Country" minWidth="200px" sortable="true" filterable="true" groupable="true"></IgrColumn>
                <IgrColumn field="City" minWidth="200px" sortable="true" filterable="true" groupable="true"></IgrColumn>
                <IgrColumn field="Address" minWidth="200px" sortable="true" filterable="true" groupable="true"></IgrColumn>
                <IgrColumn field="PostalCode" header="Postal Code" minWidth="200px" sortable="true" filterable="true" groupable="true"></IgrColumn>
            </IgrGrid>
        </div>
    );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);