import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGrid, IgrPaginator, IgrColumn, IgrCellTemplateContext } from 'igniteui-react-grids';
import { IgrButton, IgrDialog, IgrNumberEventArgs } from 'igniteui-react';
import { RemotePagingService } from './RemotePagingService';
import { ProductsWithPageResponseModel } from './ProductsWithPageResponseModel';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

interface SampleState {
    undoDisabled: boolean;
    redoDisabled: boolean;
    commitDisabled: boolean;
    discardDisabled: boolean;
    transactionData: any[];
    data: any[];
    page: number;
    perPage: number;
    totalRecords: number;
}

export default class Sample extends React.Component<Record<string, never>, SampleState> {
    private grid: IgrGrid | null = null;
    private paginator: IgrPaginator | null = null;
    private dialog: IgrDialog | null = null;
    private addProductId: number = 1000;
    private stateUpdateSubscription: (() => void) | null = null;
    private isUpdatingTransactionState: boolean = false;

    constructor(props: Record<string, never>) {
        super(props);
        this.state = {
            undoDisabled: true,
            redoDisabled: true,
            commitDisabled: true,
            discardDisabled: true,
            transactionData: [],
            data: [],
            page: 0,
            perPage: 10,
            totalRecords: 0
        };
    }

    public componentDidMount(): void {
        this.loadGridData(this.state.page, this.state.perPage);
    }

    public componentWillUnmount(): void {
        if (this.stateUpdateSubscription) {
            this.stateUpdateSubscription();
        }
    }

    private loadGridData(pageIndex: number, pageSize: number): void {
        if (this.grid) {
            this.grid.isLoading = true;
        }

        RemotePagingService.getDataWithPaging(pageIndex, pageSize)
            .then((response: ProductsWithPageResponseModel) => {
                this.setState({
                    data: response.items,
                    totalRecords: response.totalRecordsCount
                });
                if (this.grid) {
                    this.grid.isLoading = false;
                }
                if (this.paginator) {
                    this.paginator.totalRecords = response.totalRecordsCount;
                }
            })
            .catch((error) => {
                console.error(error.message);
                this.setState({ data: [] });
                if (this.grid) {
                    this.grid.isLoading = false;
                }
            });
    }

    public render() {
        const { undoDisabled, redoDisabled, commitDisabled, discardDisabled, transactionData, data, perPage } = this.state;

        return (
        <div className="container sample ig-typography">
            <div className="container fill">
                <IgrGrid
                    ref={this.gridRef}
                    data={data}
                    rowEditable={true}
                    allowFiltering={true}
                    primaryKey="ProductID"
                    pagingMode="remote">
                    <IgrPaginator
                        ref={this.paginatorRef}
                        page={this.state.page}
                        perPage={perPage}
                        onPageChange={this.onPageChange}
                        onPerPageChange={this.onPerPageChange}
                    />
                    <IgrColumn
                        header="Actions"
                        width="120px"
                        bodyTemplate={this.deleteRowCellTemplate}
                    />
                    <IgrColumn field="ProductID" header="Product ID" dataType="number" sortable editable={false} resizable />
                    <IgrColumn field="ProductName" header="Product Name" dataType="string" sortable editable resizable />
                    <IgrColumn field="UnitPrice" header="Unit Price" dataType="number" sortable editable resizable />
                    <IgrColumn field="UnitsInStock" header="Units in Stock" dataType="number" sortable editable resizable />
                    <IgrColumn field="UnitsOnOrder" header="Units on Order" dataType="number" sortable editable resizable />
                    <IgrColumn field="QuantityPerUnit" header="Quantity Per Unit" dataType="string" sortable editable resizable />
                    <IgrColumn field="ReorderLevel" header="Reorder Level" dataType="number" sortable editable resizable />
                    <IgrColumn field="SupplierID" header="Supplier ID" dataType="number" sortable editable resizable />
                    <IgrColumn field="CategoryID" header="Category ID" dataType="number" sortable editable resizable />
                    <IgrColumn field="Discontinued" header="Discontinued" dataType="boolean" sortable editable />
                </IgrGrid>
            </div>
            <div className="buttons-wrapper">
                <IgrButton variant="contained" onClick={this.onAddRow}>
                    <span>Add Row</span>
                </IgrButton>
                <div className="buttons-right">
                    <IgrButton variant="outlined" disabled={undoDisabled} onClick={this.onUndo}>
                        <span>Undo</span>
                    </IgrButton>
                    <IgrButton variant="outlined" disabled={redoDisabled} onClick={this.onRedo}>
                        <span>Redo</span>
                    </IgrButton>
                    <IgrButton variant="outlined" disabled={discardDisabled} onClick={this.onDiscard}>
                        <span>Discard</span>
                    </IgrButton>
                    <IgrButton variant="outlined" disabled={commitDisabled} onClick={this.onOpenCommitDialog}>
                        <span>Commit</span>
                    </IgrButton>
                </div>
            </div>

            <IgrDialog title="Transactions" ref={this.dialogRef}>
                <IgrGrid
                    data={transactionData}
                    autoGenerate={false}
                    width="600px"
                    height="300px">
                    <IgrColumn field="id" header="ID" dataType="string" />
                    <IgrColumn field="type" header="Type" dataType="string" bodyTemplate={this.typeColumnTemplate} />
                    <IgrColumn field="newValue" header="Value" dataType="string" bodyTemplate={this.valueColumnTemplate} />
                </IgrGrid>
                <div slot="footer" className="dialog-buttons">
                    <IgrButton variant="contained" onClick={this.onCommit}>
                        <span>Commit</span>
                    </IgrButton>
                    <IgrButton variant="outlined" onClick={this.onDiscard}>
                        <span>Discard</span>
                    </IgrButton>
                    <IgrButton variant="flat" onClick={this.onCancel}>
                        <span>Cancel</span>
                    </IgrButton>
                </div>
            </IgrDialog>
        </div>
        );
    }

    private gridRef = (r: IgrGrid) => {
        if (!r) { return; }
        this.grid = r;
        (this.grid as any).batchEditing = true;

        this.stateUpdateSubscription = this.grid.transactions.onStateUpdate.subscribe(() => {
            if (!this.grid) { return; }
            const hasChanges = this.grid.transactions.getAggregatedChanges(false).length > 0;
            this.isUpdatingTransactionState = true;
            this.setState({
                undoDisabled: !this.grid.transactions.canUndo,
                redoDisabled: !this.grid.transactions.canRedo,
                commitDisabled: !hasChanges,
                discardDisabled: !hasChanges
            }, () => {
                this.isUpdatingTransactionState = false;
            });
        });
    }

    private paginatorRef = (r: IgrPaginator) => {
        this.paginator = r;
        if (this.paginator && this.state.totalRecords > 0) {
            this.paginator.totalRecords = this.state.totalRecords;
        }
    }

    private dialogRef = (r: IgrDialog) => {
        this.dialog = r;
    }

    private onPageChange = (args: IgrNumberEventArgs) => {
        // Ignore page changes triggered by transaction state updates
        if (this.isUpdatingTransactionState) {
            return;
        }
        const newPage = args.detail;
        // Only load data if page actually changed
        if (newPage !== this.state.page) {
            this.setState({ page: newPage });
            this.loadGridData(newPage, this.state.perPage);
        }
    }

    private onPerPageChange = (args: IgrNumberEventArgs) => {
        const newPerPage = args.detail;
        this.setState({ perPage: newPerPage, page: 0 });
        this.loadGridData(0, newPerPage);
    }

    private randomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    public onAddRow = () => {
        this.grid?.addRow({
            CategoryID: this.randomInt(1, 10),
            Discontinued: this.randomInt(1, 10) % 2 === 0,
            ProductID: this.addProductId++,
            ProductName: `Product with index ${this.randomInt(0, 20)}`,
            QuantityPerUnit: `${this.randomInt(1, 10) * 10} pcs.`,
            ReorderLevel: this.randomInt(10, 20),
            SupplierID: this.randomInt(1, 20),
            UnitPrice: this.randomInt(10, 1000),
            UnitsInStock: this.randomInt(1, 100),
            UnitsOnOrder: this.randomInt(1, 20)
        });
    }

    public onUndo = () => {
        this.grid?.endEdit(true);
        this.grid?.transactions.undo();
    }

    public onRedo = () => {
        this.grid?.endEdit(true);
        this.grid?.transactions.redo();
    }

    public onOpenCommitDialog = () => {
        if (!this.grid) { return; }
        this.setState({
            transactionData: this.grid.transactions.getAggregatedChanges(true)
        });
        this.dialog?.show();
    }

    public onCommit = () => {
        if (!this.grid) { return; }
        this.grid.transactions.commit(this.grid.data);
        this.dialog?.hide();
    }

    public onDiscard = () => {
        this.grid?.transactions.clear();
        this.dialog?.hide();
    }

    public onCancel = () => {
        this.dialog?.hide();
    }

    public deleteRowCellTemplate = (e: { dataContext: IgrCellTemplateContext }) => {
        const id = e.dataContext.cell.id.rowID;
        return (
            <IgrButton variant="contained" onClick={() => this.grid?.deleteRow(id)}>
                <span>Delete</span>
            </IgrButton>
        );
    }

    public typeColumnTemplate = (e: { dataContext: IgrCellTemplateContext }) => {
        const type = e.dataContext.cell.value as string;
        return <span className={`transaction--${type.toLowerCase()}`}>{type.toUpperCase()}</span>;
    }

    public valueColumnTemplate = (e: { dataContext: IgrCellTemplateContext }) => {
        return <span>{JSON.stringify(e.dataContext.cell.value)}</span>;
    }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
