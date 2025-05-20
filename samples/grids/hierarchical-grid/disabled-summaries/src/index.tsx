import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrButton, IgrDialog, IgrCheckbox } from 'igniteui-react';
import { IgrSummaryOperand, IgrSummaryResult, IgrHierarchicalGrid, IgrRowIsland, IgrColumn } from 'igniteui-react-grids';
import  SingersData from './SingersData.json';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

export class GrammySummary extends IgrSummaryOperand {
    operate(data: any[] = [], allData: any[] = [], fieldName: string = ""): IgrSummaryResult[] {
        const result: IgrSummaryResult[] = [];

        result.push({
            key: "count",
            label: "Count",
            summaryResult: allData.filter((rec) => rec["Artist"] !== undefined && rec["Artist"] !== null && rec["Artist"] !== "").length
        });

        result.push({
            key: "nominatedSingers",
            label: "Nominated Singers",
            summaryResult: allData.filter((rec) => rec["GrammyNominations"] > 0).length
        });

        result.push({
            key: "singersWithAwards",
            label: "Singers with Awards",
            summaryResult: allData.filter((rec) => rec["GrammyAwards"] > 0).length
        });

        result.push({
            key: "nominations",
            label: "Total Nominations",
            summaryResult: allData.reduce((sum, rec) => sum + (rec["GrammyNominations"] || 0), 0)
        });

        result.push({
            key: "awards",
            label: "Total Awards",
            summaryResult: allData.reduce((sum, rec) => sum + (rec["GrammyAwards"] || 0), 0)
        });

        return result;
    }
}

interface SummaryColumn {
    field: string;
    header: string;
    hasSummary: boolean;
    dataType?: string;
    summaries?: any;
    disabledSummaries: string[];
}
  
export default function DisabledSummariesHierarchicalGridSample() {
    // State
    const [singersData, setSingersData] = useState<any[]>([]);
    const [currentColumn, setCurrentColumn] = useState<SummaryColumn | null>(null);
    const [currentColumnSource, setCurrentColumnSource] = useState<"dialog" | "toggle" | null>(null);
    const [pendingUpdateType, setPendingUpdateType] = useState<null | "disableAll" | "enableAll">(null);
    const [disableAllBtnDisabled, setDisableAllBtnDisabled] = useState(false);
    const [enableAllBtnDisabled, setEnableAllBtnDisabled] = useState(false);
    const [checkboxStates, setCheckboxStates] = useState([]);

    const [columns, setColumns] = useState([
        { field: "Artist", header: "Artist", hasSummary: true, disabledSummaries: [] },
        { field: "Photo", header: "Photo", dataType: "image", hasSummary: true, summaries: GrammySummary, disabledSummaries: [] },
        { field: "Debut", header: "Debut", hasSummary: true, disabledSummaries: [] },
        { field: "GrammyNominations", header: "Grammy Nominations", dataType: "number", hasSummary: true, disabledSummaries: [] },
        { field: "GrammyAwards", header: "Grammy Awards", dataType: "number", hasSummary: true, disabledSummaries: [] }
    ]);

    // Refs
    let hierarchicalGrid: IgrHierarchicalGrid;
    const hierarchicalGridRef = (ref: IgrHierarchicalGrid) => {
        hierarchicalGrid = ref;
    };
    let dialog: IgrDialog;
    const dialogRef = (ref: IgrDialog) => {
        dialog = ref;
        if (dialog) {
          dialog.closeOnOutsideClick = true;
          dialog.keepOpenOnEscape = false;
        }
    };

    useEffect(() => {
        setSingersData(SingersData);
    }, []);

    useEffect(() => {
        if (!currentColumn) return;
    
        const shouldShowDialog = currentColumnSource === "dialog";
        const shouldMarkForCheck =
          currentColumnSource === "toggle" ||
          pendingUpdateType === "disableAll" ||
          pendingUpdateType === "enableAll";
    
        if (shouldShowDialog) {
          updateCheckboxes();
          dialog?.show();
          setCurrentColumnSource(null);
        }
    
        if (shouldMarkForCheck && hierarchicalGrid) {
          updateCheckboxes();
          hierarchicalGrid.markForCheck();
          setPendingUpdateType(null);
          setCurrentColumnSource(null);
        }
    }, [currentColumn, currentColumnSource, pendingUpdateType, hierarchicalGrid]);

    const openDialog = (column: any) => {
        const columnState = columns.find((c) => c.field === column.field);
        setCurrentColumn(columnState!);
        setCurrentColumnSource("dialog");
        setCheckboxStates([]);
    };

    const getSummaryResults = (
        operand: any,
        data: any[],
        field: string
      ): IgrSummaryResult[] => {
        if (typeof operand === "function") {
          operand = new operand();
        }
        if (operand instanceof IgrSummaryOperand) {
          return operand.operate([], data, field, null);
        } else if (!operand) {
          return new IgrSummaryOperand().operate([], data, field, null);
        }
        return [];
    };

    const getDefaultSummaries = (
        data: any[],
        field: string
      ): IgrSummaryResult[] => {
        const columnInstance = hierarchicalGrid.columns.find((c) => c.field === field);
        if (
          columnInstance &&
          columnInstance.summaries &&
          typeof columnInstance.summaries.operate === "function"
        ) {
          return columnInstance.summaries.operate([], data, field, null);
        }
        return [];
    };

    const updateCheckboxes = () => {
        if (!currentColumn || !hierarchicalGrid) return;
    
        const gridData: any[] = hierarchicalGrid.data;
        let allSummaries: IgrSummaryResult[] = [];
        if (currentColumn.summaries) {
          allSummaries = getSummaryResults(
            currentColumn.summaries,
            gridData,
            currentColumn.field
          );
        } else {
          allSummaries = getDefaultSummaries(gridData, currentColumn.field);
        }
    
        let allDisabled: boolean = true;
        let allEnabled: boolean = true;
    
        const newCheckboxStates: any[] = allSummaries.map((summary) => {
          const isDisabled = currentColumn.disabledSummaries.includes(summary.key);
          if (isDisabled) {
            allEnabled = false;
          } else {
            allDisabled = false;
          }
          return {
            label: summary.label,
            key: summary.key,
            checked: isDisabled,
          };
        });
    
        setCheckboxStates(newCheckboxStates);
        setDisableAllBtnDisabled(allDisabled);
        setEnableAllBtnDisabled(allEnabled);
    };

    const toggleSummary = (summaryKey: string) => {
        if (!currentColumn || !hierarchicalGrid) return;
    
        const updatedDisabledSummaries = currentColumn.disabledSummaries.includes(
          summaryKey
        )
          ? currentColumn.disabledSummaries.filter((key: any) => key !== summaryKey)
          : [...currentColumn.disabledSummaries, summaryKey];
    
        const updatedColumns = columns.map((col: any) =>
          col.field === currentColumn.field
            ? { ...col, disabledSummaries: updatedDisabledSummaries }
            : col
        );
    
        setCurrentColumn((prev) => ({
          ...prev,
          disabledSummaries: updatedDisabledSummaries,
        }));
        setColumns(updatedColumns);
        setCurrentColumnSource("toggle");
    };

    const disableAllSummaries = () => {
        if (!currentColumn || !hierarchicalGrid) return;
    
        const gridData: any[] = hierarchicalGrid.data;
        let allSummaries: IgrSummaryResult[] = currentColumn.summaries
          ? getSummaryResults(
              currentColumn.summaries,
              gridData,
              currentColumn.field
            )
          : getDefaultSummaries(gridData, currentColumn.field);
    
        const allSummaryKeys: string[] = allSummaries.map((s) => s.key);
    
        const updatedColumns = columns.map((col: any) =>
          col.field === currentColumn.field
            ? { ...col, disabledSummaries: allSummaryKeys }
            : col
        );
    
        setCurrentColumn((prev) => ({
          ...prev,
          disabledSummaries: allSummaryKeys,
        }));
        setColumns(updatedColumns);
        setDisableAllBtnDisabled(true);
        setEnableAllBtnDisabled(false);
    
        setPendingUpdateType("disableAll");
    };

    const enableAllSummaries = () => {
        if (!currentColumn || !hierarchicalGrid) return;
    
        const updatedColumns = columns.map((col: any) =>
          col.field === currentColumn.field
            ? { ...col, disabledSummaries: [] }
            : col
        );
    
        setCurrentColumn((prev) => ({ ...prev, disabledSummaries: [] }));
        setColumns(updatedColumns);
        setDisableAllBtnDisabled(false);
        setEnableAllBtnDisabled(true);
    
        setPendingUpdateType("enableAll");
    };

    return (
        <div className="grid-wrapper container sample ig-typography">
                <div className="summaries">
                    <p className="summaries-title">Disable Summaries for Column:</p>
                    {columns.map((col: any) => (
                        <IgrButton
                            key={col.field}
                            className="summary-button"
                            variant="contained"
                            onClick={() => openDialog({ field: col.field, header: col.header })}
                        >
                            <span>{col.header}</span>
                        </IgrButton>
                    ))}
                </div>
                <IgrDialog ref={dialogRef} title={currentColumn ? `Disable Summaries for ${currentColumn.header}` : ""}>
                    <div className="summaries-dialog-items">
                         {currentColumn && checkboxStates.map((checkbox: any) => (
                            <IgrCheckbox
                                key={checkbox.key}
                                className="summaries-dialog-item"
                                checked={checkbox.checked}
                                onClick={() => toggleSummary(checkbox.key)}
                            >
                                <span>{checkbox.label}</span>
                            </IgrCheckbox>
                        ))}
                    </div>
                    <IgrButton key="disableAll" slot="footer" variant="flat" onClick={disableAllSummaries} disabled={disableAllBtnDisabled}><span>Disable All</span></IgrButton>
                    <IgrButton key="enableAll" slot="footer" variant="flat" onClick={enableAllSummaries} disabled={enableAllBtnDisabled}><span>Enable All</span></IgrButton>
                </IgrDialog>

                <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate={false}
                    data={singersData}
                    ref={hierarchicalGridRef}
                    id="hierarchicalGrid"
                    primaryKey="ID">
                    <IgrColumn
                        field="Artist"
                        header="Artist"
                        hasSummary={true}
                        disabledSummaries={columns.find((col: any) => col.field === "Artist")?.disabledSummaries}>
                    </IgrColumn>
                    <IgrColumn
                        field="Photo"
                        header="Photo"
                        dataType="image"
                        hasSummary={true}
                        summaries={GrammySummary}
                        disabledSummaries={columns.find((col: any) => col.field === "Photo")?.disabledSummaries}>
                    </IgrColumn>
                    <IgrColumn
                        field="Debut"
                        header="Debut"
                        hasSummary={true}
                        disabledSummaries={columns.find((col: any) => col.field === "Debut")?.disabledSummaries}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyNominations"
                        header="Grammy Nominations"
                        dataType="number"
                        hasSummary={true}
                        disabledSummaries={columns.find((col: any) => col.field === "GrammyNominations")?.disabledSummaries}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyAwards"
                        header="Grammy Awards"
                        dataType="number"
                        hasSummary={true}
                        disabledSummaries={columns.find((col: any) => col.field === "GrammyAwards")?.disabledSummaries}>
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Albums"
                        autoGenerate={false}>
                        <IgrColumn
                            field="Album"
                            header="Album"
                            dataType="string"
                            hasSummary={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="LaunchDate"
                            header="Launch Date"
                            dataType="date"
                            hasSummary={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="BillboardReview"
                            header="Billboard Review"
                            dataType="number"
                            hasSummary={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="USBillboard200"
                            header="US Billboard 200"
                            dataType="number"
                            hasSummary={true}>
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="Songs"
                            autoGenerate={false}>
                            <IgrColumn
                                field="Number"
                                header="No."
                                dataType="string"
                                hasSummary={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Title"
                                header="Title"
                                dataType="string"
                                hasSummary={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Released"
                                header="Released"
                                dataType="date"
                                hasSummary={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Genre"
                                header="Genre"
                                dataType="string"
                                hasSummary={true}>
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                    <IgrRowIsland
                        childDataKey="Tours"
                        autoGenerate={false}>
                        <IgrColumn
                            field="Tour"
                            header="Tour"
                            dataType="string"
                            hasSummary={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="StartedOn"
                            header="Started on"
                            dataType="string"
                            hasSummary={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="Location"
                            header="Location"
                            dataType="string"
                            hasSummary={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="Headliner"
                            header="Headliner"
                            dataType="string"
                            hasSummary={true}>
                        </IgrColumn>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
                </div>
        </div>
    );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DisabledSummariesHierarchicalGridSample/>);