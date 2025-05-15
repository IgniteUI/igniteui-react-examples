import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import NwindData from './NwindData.json';
import { IgrRowType } from 'igniteui-react-grids';

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
    private productID: IgrColumn
    private productName: IgrColumn
    private unitsInStock: IgrColumn
    private unitPrice: IgrColumn
    private discontinued: IgrColumn
    private orderDate: IgrColumn

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
                    rowClasses={this.webGridRowClassesHandler}
                    ref={this.grid1Ref}>
                    <IgrColumn
                        name="ProductID"
                        field="ProductID"
                        header="Product ID">
                    </IgrColumn>
                    <IgrColumn
                        name="ProductName"
                        field="ProductName"
                        header="Product Name">
                    </IgrColumn>
                    <IgrColumn
                        name="UnitsInStock"
                        field="UnitsInStock"
                        header="Units In Stock"
                        dataType="Number">
                    </IgrColumn>
                    <IgrColumn
                        name="UnitPrice"
                        field="UnitPrice"
                        header="Unit Price"
                        dataType="Number">
                    </IgrColumn>
                    <IgrColumn
                        name="Discontinued"
                        field="Discontinued"
                        header="Discontinued"
                        dataType="Boolean">
                    </IgrColumn>
                    <IgrColumn
                        name="OrderDate"
                        field="OrderDate"
                        header="Order Date"
                        dataType="Date">
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


    public webGridRowClassesHandler = {
      activeRow: (row: IgrRowType) => row.index % 2 === 0
    };

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);