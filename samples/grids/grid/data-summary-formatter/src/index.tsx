import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import NwindData from './NwindData.json';
import { IgrSummaryResult, IgrSummaryOperand } from 'igniteui-react-grids';

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
        this.webGridSummaryFormatter = this.webGridSummaryFormatter.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    data={this.nwindData}
                    ref={this.gridRef}
                    id="grid">
                    <IgrColumn
                        field="ProductName"
                        header="Product Name"
                        sortable={true}
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="QuantityPerUnit"
                        header="Quantity Per Unit"
                        sortable={true}
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Unit Price Category"
                        sortable={true}
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        sortable={true}
                        hasSummary={true}
                        dataType="date"
                        summaryFormatter={this.webGridSummaryFormatter}>
                    </IgrColumn>
                    <IgrColumn
                        field="Discontinued"
                        header="Discontinued"
                        sortable={true}
                        dataType="boolean">
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


    public webGridSummaryFormatter(summary: IgrSummaryResult, summaryOperand: IgrSummaryOperand): string {
        const result = summary.summaryResult;
        if (summary.key !== "count" && result !== null && result !== undefined) {
            const format = new Intl.DateTimeFormat("en", { year: "numeric" });
            return format.format(new Date(result));
        }
        return result;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);