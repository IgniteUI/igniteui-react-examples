import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridBaseDirective, IgrGridToolbar, IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { NwindData } from './NwindData';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import { IgrButton, IgrInput, IgrSwitch } from 'igniteui-react';
import { IgrComponentBoolValueChangedEventArgs } from '@infragistics/igniteui-react';
import { IgrColumnComponentEventArgs } from '@infragistics/igniteui-react-grids';

const mods: any[] = [
    IgrGridModule
];
mods.forEach((m) => m.register());

export default function App() {
    const data = new NwindData();
    const gridRef = useRef(null);

    const onColumnInit = (grid: IgrGridBaseDirective, args: IgrColumnComponentEventArgs) => {
        let column = args.detail;
        column.formatter = (val: any) => "** " + val + " **"
        column.header = "🎉" + column.field;
    }

    const changeGridCopyBehavior = (switchComponent: any, result: IgrComponentBoolValueChangedEventArgs): void => {
        gridRef.current.clipboardOptions.enabled = result.detail;
    }

    const changeGridCopyHeadersBehavior = (switchComponent: any, result: IgrComponentBoolValueChangedEventArgs): void => {
        gridRef.current.clipboardOptions.copyHeaders = result.detail;
    }

    const changeGridCopyFormattersBehavior = (switchComponent: any, result: IgrComponentBoolValueChangedEventArgs): void => {
        gridRef.current.clipboardOptions.copyFormatters = result.detail;
    }

    const clearSelection = () => {
        gridRef.current.clearCellSelection();
    }

    return (
        <>
            <div className="container sample">      
                <div className="options horizontal" style={{gap: "1rem", alignItems: "center", margin: "1rem"}}>
                    <IgrInput placeholder='The default value is a single tabulation' style={{flex: "1 0 auto"}}>
                        <span key="prefix" slot="prefix">Change copy separator:</span>
                    </IgrInput>
                    <IgrSwitch labelPosition="before" checked change={changeGridCopyBehavior}>
                        <span key="gridCopy">Grid copy behavior</span>
                    </IgrSwitch>
                    <IgrSwitch labelPosition="before" checked change={changeGridCopyHeadersBehavior}>
                        <span key="gridCopyHeaders">Copying of header labels</span>
                    </IgrSwitch>
                    <IgrSwitch labelPosition="before" checked change={changeGridCopyFormattersBehavior}>
                        <span key="gridCopyFormatters">Copying column formatters</span>
                    </IgrSwitch>
                    <IgrButton clicked={clearSelection}>
                        <span key="clearSelection">Clear selection</span>
                    </IgrButton>
                </div>
                <div className="container fill">
                    <IgrGrid autoGenerate="false" cellSelection="multiple" data={data} ref={gridRef} columnInit={onColumnInit}>
                        <IgrColumn field="ProductID" header="Product ID">
                        </IgrColumn>
                        <IgrColumn field="ProductName" header="Product Name">
                        </IgrColumn>
                        <IgrColumn field="SupplierID" header="Supplier ID">
                        </IgrColumn>
                        <IgrColumn field="CategoryID" header="Category ID">
                        </IgrColumn>
                        <IgrColumn field="QuantityPerUnit" header="Quantity Per Unit">
                        </IgrColumn>
                        <IgrColumn field="UnitPrice" header="Unit Price">
                        </IgrColumn>
                        <IgrColumn field="UnitsInStock" header="Units In Stock">
                        </IgrColumn>
                    </IgrGrid>
                </div>
            </div>
        </>
        );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);