import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrPaginator, IgrColumn } from 'igniteui-react-grids';
import { NwindDataItem, NwindDataItem_LocationsItem, NwindData } from './NwindData';
import { IgrCellTemplateContext } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid1: IgrGrid
    private grid1Ref(r: IgrGrid) {
        this.grid1 = r;
        this.setState({});
    }
    private column1: IgrColumn

    constructor(props: any) {
        super(props);

        this.grid1Ref = this.grid1Ref.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate="false"
                    data={this.nwindData}
                    primaryKey="ProductID"
                    displayDensity="Cosy"
                    allowFiltering="true"
                    filterMode="ExcelStyleFilter"
                    ref={this.grid1Ref}>
                    <IgrPaginator
                        perPage="10">
                    </IgrPaginator>
                    <IgrColumn
                        field="ProductName"
                        header="Product Name"
                        dataType="String"
                        sortable="true"
                        hasSummary="true"
                        editable="true"
                        resizable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Unit Price"
                        dataType="Number"
                        sortable="true"
                        hasSummary="true"
                        editable="true"
                        resizable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="UnitsInStock"
                        header="Units in Stock"
                        dataType="Number"
                        sortable="true"
                        hasSummary="true"
                        editable="true"
                        resizable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        dataType="Date"
                        sortable="true"
                        hasSummary="true"
                        editable="true"
                        resizable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Discontinued"
                        header="Discontinued"
                        dataType="Boolean"
                        sortable="true"
                        hasSummary="true"
                        editable="true"
                        bodyTemplate={this.webGridBooleanCellTemplate}
                        name="column1">
                    </IgrColumn>
                    <IgrColumn
                        field="ReorderLevel"
                        header="Reorder Level"
                        dataType="Number"
                        sortable="true"
                        hasSummary="true"
                        editable="true"
                        filterable="true">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _nwindData: NwindData = null;
    public get nwindData(): NwindData {
        if (this._nwindData == null)
        {
            this._nwindData = new NwindData();
        }
        return this._nwindData;
    }


    public webGridBooleanCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        if (props.dataContext.cell.value) {
            return (
                <img src="https://static.infragistics.com/xplatform/images/grid/active.png" title="Continued" alt="Continued" />
            );
        } else {
            return (
                <img src="https://static.infragistics.com/xplatform/images/grid/expired.png" title="Discontinued" alt="Discontinued" />
            );
        }
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);