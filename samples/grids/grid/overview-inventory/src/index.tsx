import { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import {
    ColumnPinningPosition,
    IgrCellTemplateContext,
    IgrColumn,
    IgrColumnExportingEventArgsDetail,
    IgrColumnPipeArgs,
    IgrExporterEventArgs,
    IgrGrid,
    IgrGridToolbar,
    IgrGridToolbarActions,
    IgrGridToolbarAdvancedFiltering,
    IgrGridToolbarExporter,
    IgrGridToolbarHiding,
    IgrGridToolbarPinning,
    IgrGridToolbarTitle,
    IgrGroupingExpression,
    IgrPaginator,
    IgrRowType,
    IgrSortingExpression,
    SortingDirection,
} from 'igniteui-react-grids';
import { IgrBadge, IgrChip, IgrIcon, IgrIconButton, IgrLinearProgress, registerIconFromText } from 'igniteui-react';
import { StockStatus, StorageType, organicFoods } from './OrganicFoodsData';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './index.css';

// The Material icons of the cell templates, as SVG; they take the colour of the text.
const icons: Record<string, string> = {
    ac_unit: '<svg viewBox="0 0 20 20"><path d="M18.3333 9.16667H14.8583L17.5583 6.46667L16.3833 5.28333L12.5 9.16667H10.8333V7.5L14.7167 3.61667L13.5333 2.44167L10.8333 5.14167V1.66667H9.16667V5.14167L6.46667 2.44167L5.28333 3.61667L9.16667 7.5V9.16667H7.5L3.61667 5.28333L2.44167 6.46667L5.14167 9.16667H1.66667V10.8333H5.14167L2.44167 13.5333L3.61667 14.7167L7.5 10.8333H9.16667V12.5L5.28333 16.3833L6.46667 17.5583L9.16667 14.8583V18.3333H10.8333V14.8583L13.5333 17.5583L14.7167 16.3833L10.8333 12.5V10.8333H12.5L16.3833 14.7167L17.5583 13.5333L14.8583 10.8333H18.3333V9.16667Z"/></svg>',
    format_color_reset: '<svg viewBox="0 0 20 20"><path d="M15 11.6667C15 8.33333 10 2.66667 10 2.66667C10 2.66667 8.89167 3.925 7.725 5.6L14.8833 12.7583C14.9583 12.4083 15 12.0417 15 11.6667ZM14.2667 14.2667L10.4167 10.4167L4.39167 4.39167L3.33333 5.45833L6.1 8.225C5.45833 9.43333 5 10.6583 5 11.6667C5 14.425 7.24167 16.6667 10 16.6667C11.2667 16.6667 12.4167 16.1917 13.3 15.4167L15.4917 17.6083L16.55 16.55L14.2667 14.2667Z"/></svg>',
    thermostat: '<svg viewBox="0 0 20 20"><path d="M12.5 10.8333V4.16667C12.5 2.78333 11.3833 1.66667 10 1.66667C8.61667 1.66667 7.5 2.78333 7.5 4.16667V10.8333C6.49167 11.5917 5.83333 12.8083 5.83333 14.1667C5.83333 16.4667 7.7 18.3333 10 18.3333C12.3 18.3333 14.1667 16.4667 14.1667 14.1667C14.1667 12.8083 13.5083 11.5917 12.5 10.8333ZM9.16667 9.16667V4.16667C9.16667 3.70833 9.54167 3.33333 10 3.33333C10.4583 3.33333 10.8333 3.70833 10.8333 4.16667V5H10V5.83333H10.8333V7.5H10V8.33333H10.8333V9.16667H9.16667Z"/></svg>',
    edit: '<svg viewBox="0 0 18 18"><path d="M2.25 12.9372V15.7497H5.0625L13.3575 7.45468L10.545 4.64218L2.25 12.9372ZM15.5325 5.27968C15.825 4.98718 15.825 4.51468 15.5325 4.22218L13.7775 2.46718C13.485 2.17468 13.0125 2.17468 12.72 2.46718L11.3475 3.83968L14.16 6.65218L15.5325 5.27968Z"/></svg>',
    delete: '<svg viewBox="0 0 18 18"><path d="M4.5 14.25C4.5 15.075 5.175 15.75 6 15.75H12C12.825 15.75 13.5 15.075 13.5 14.25V5.25H4.5V14.25ZM14.25 3H11.625L10.875 2.25H7.125L6.375 3H3.75V4.5H14.25V3Z"/></svg>',
};
for (const name of Object.keys(icons)) {
    registerIconFromText(name, icons[name], 'material');
}

const storageIcons: Record<StorageType, string> = {
    Chilled: 'ac_unit',
    Dry: 'format_color_reset',
    Ambient: 'thermostat',
};

const sorting: IgrSortingExpression[] = [{ fieldName: 'ProductName', dir: SortingDirection.Asc, ignoreCase: true }];
const grouping: IgrGroupingExpression[] = [{ fieldName: 'Category', dir: SortingDirection.Asc, ignoreCase: true }];
const euro: IgrColumnPipeArgs = { currencyCode: 'EUR', digitsInfo: '1.2-2' };

const productTemplate = ({ cell }: IgrCellTemplateContext) => (
    <div className="product">
        <img className="product__photo" src={cell.row.data.Image} alt="" />
        <span className="product__name">{cell.value}</span>
    </div>
);

const storageTemplate = ({ cell }: IgrCellTemplateContext) => {
    const storage: StorageType = cell.value;
    return (
        <IgrChip className="storage" data-storage={storage} outlined tabIndex={-1}>
            <IgrIcon slot="prefix" name={storageIcons[storage]} collection="material" aria-hidden="true" />
            {storage}
        </IgrChip>
    );
};

const stockLevelTemplate = ({ cell }: IgrCellTemplateContext) => (
    <IgrLinearProgress
        className="stock-level"
        value={cell.value}
        variant={cell.row.data.Status === 'Low' ? 'warning' : 'success'}
        hideLabel
        animationDuration={0}
        aria-label={`Stock level ${cell.value}%`}
    />
);

const statusTemplate = ({ cell }: IgrCellTemplateContext) => {
    const status: StockStatus = cell.value;
    return (
        <div className="status">
            <IgrBadge className="status__dot" data-status={status} dot aria-hidden="true" />
            <span className="status__text">{status}</span>
        </div>
    );
};

/** The Actions column holds only buttons, so it is left out of the exported file. */
const excludeActions = ({ detail }: IgrExporterEventArgs) => {
    const exporter = detail.exporter as any;
    const columns = exporter.columnExporting.subscribe((column: IgrColumnExportingEventArgsDetail) => {
        column.cancel = column.header === 'Actions';
    });
    const ended = exporter.exportEnded.subscribe(() => {
        columns.unsubscribe();
        ended.unsubscribe();
    });
};

export default function GridOverviewInventory() {
    const gridRef = useRef<IgrGrid>(null);

    /** Starts row editing in the first editable cell, the same as a double click on that cell. */
    const editRow = (row: IgrRowType) => {
        const grid = gridRef.current!;
        const [column] = grid.visibleColumns
            .filter((c) => c.editable)
            .sort((a, b) => a.visibleIndex - b.visibleIndex);
        if (!column) {
            return;
        }
        // Activate the cell first, so that Tab, Enter and Escape work in the row as usual.
        grid.navigateTo(row.index, column.visibleIndex, ({ target }: { target: { activate(): void } }) => {
            target.activate();
            grid.getCellByKey(row.key, column.field).editMode = true;
        });
    };

    // Clicks and Space/Enter stay with the buttons, so the grid does not also select the row or edit its
    // active cell. The grid gets an event before a bubbling React handler does, so the buttons take their
    // clicks and keys in the capture phase.
    const actionsTemplate = ({ cell }: IgrCellTemplateContext) => {
        const row = cell.row;
        return (
            <div
                className="actions"
                onKeyDownCapture={(event) => {
                    if (event.key === ' ' || event.key === 'Enter') {
                        event.stopPropagation();
                    }
                }}
            >
                <IgrIconButton
                    variant="flat"
                    name="edit"
                    collection="material"
                    aria-label={`Edit ${row.data.ProductName}`}
                    onClickCapture={(event) => {
                        event.stopPropagation();
                        editRow(row);
                    }}
                />
                <IgrIconButton
                    variant="flat"
                    name="delete"
                    collection="material"
                    aria-label={`Delete ${row.data.ProductName}`}
                    onClickCapture={(event) => {
                        event.stopPropagation();
                        gridRef.current!.deleteRow(row.key);
                    }}
                />
            </div>
        );
    };

    return (
        <div className="container ig-typography">
            <div className="container fill">
                <IgrGrid
                    ref={gridRef}
                    className="inventory-grid"
                    data={organicFoods}
                    primaryKey="SKU"
                    rowHeight={51}
                    rowSelection="multiple"
                    rowEditable
                    allowFiltering
                    filterMode="excelStyleFilter"
                    allowAdvancedFiltering
                    sortingExpressions={sorting}
                    groupingExpressions={grouping}
                    hideGroupedColumns
                >
                    <IgrGridToolbar>
                        <IgrGridToolbarTitle>Organic and natural foods</IgrGridToolbarTitle>
                        <IgrGridToolbarActions>
                            <IgrGridToolbarHiding />
                            <IgrGridToolbarPinning />
                            <IgrGridToolbarExporter onExportStarted={excludeActions} />
                            <IgrGridToolbarAdvancedFiltering />
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>

                    <IgrColumn field="ProductName" header="Product" width="304px" sortable editable={false} bodyTemplate={productTemplate} />
                    <IgrColumn field="SKU" header="SKU" width="88px" sortable editable={false} />
                    <IgrColumn field="Category" header="Category" width="160px" sortable groupable editable={false} />
                    <IgrColumn field="Supplier" header="Supplier" width="156px" sortable groupable editable />
                    <IgrColumn field="Organic" header="Organic" dataType="boolean" width="104px" sortable groupable editable={false} />
                    <IgrColumn field="Storage" header="Storage" width="128px" sortable groupable editable={false} bodyTemplate={storageTemplate} />
                    <IgrColumn field="Quantity" header="Quantity" dataType="number" width="108px" sortable editable={false} />
                    <IgrColumn field="StockLevel" header="Stock Level" dataType="number" width="132px" sortable editable={false} bodyTemplate={stockLevelTemplate} />
                    <IgrColumn field="Unit" header="Unit" width="120px" sortable editable={false} />
                    <IgrColumn field="Status" header="Status" width="120px" sortable groupable editable={false} bodyTemplate={statusTemplate} />
                    <IgrColumn field="UnitPrice" header="Unit Price" dataType="currency" pipeArgs={euro} width="116px" sortable editable />
                    <IgrColumn field="RetailPrice" header="Retail Price" dataType="currency" pipeArgs={euro} width="124px" sortable editable />
                    <IgrColumn field="ExpiryDate" header="Expiry Date" dataType="date" width="124px" sortable editable />
                    <IgrColumn
                        header="Actions"
                        width="84px"
                        pinned
                        pinningPosition={ColumnPinningPosition.End}
                        filterable={false}
                        editable={false}
                        disableHiding
                        disablePinning
                        bodyTemplate={actionsTemplate}
                    />

                    <IgrPaginator perPage={15} />
                </IgrGrid>
            </div>
        </div>
    );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<GridOverviewInventory />);
