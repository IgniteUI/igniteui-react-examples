import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarExporter } from 'igniteui-react-grids';
import { IgrGridToolbarExportEventArgs, IgrExporterOptionsBase } from 'igniteui-react-grids';
import NwindData from './NwindData.json';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
        this.webGridToolbarExporting = this.webGridToolbarExporting.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    ref={this.gridRef}
                    data={this.nwindData}
                    primaryKey="ProductID"
                    onToolbarExporting={this.webGridToolbarExporting}>
                    <IgrGridToolbar>
                        <IgrGridToolbarActions>
                            <IgrGridToolbarExporter exportCSV={true} exportExcel={true}>
                            </IgrGridToolbarExporter>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn
                        field="ProductID">
                    </IgrColumn>
                    <IgrColumn
                        field="ProductName"
                        header="Product Name"
                        hasSummary={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Unit Price"
                        dataType="number"
                        hasSummary={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="UnitsInStock"
                        header="Units In Stock"
                        hasSummary={true}
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="Discontinued"
                        header="Discontinued"
                        dataType="boolean"
                        hasSummary={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        hasSummary={true}
                        dataType="date">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _nwindData: any[] = NwindData;
    public get nwindData(): any[] {
        return this._nwindData;
    }

    public webGridToolbarExporting(args: IgrGridToolbarExportEventArgs): void {
        const options: IgrExporterOptionsBase = args.detail.options;
        options.exportSummaries = true;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);