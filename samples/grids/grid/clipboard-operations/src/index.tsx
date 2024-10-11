import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrButton, IgrInput, IgrSwitch, IgrCheckboxChangeEventArgs, IgrComponentDataValueChangedEventArgs } from 'igniteui-react';
import { IgrGridBaseDirective, IgrGridModule, IgrColumnComponentEventArgs } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { NwindData } from './NwindData';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule
];
mods.forEach((m) => m.register());

export default function App() {
    let defaultSeparator = " ";
    const data = new NwindData();
    const gridRef = useRef<IgrGrid>(null);

    useEffect(() => {
        defaultSeparator = gridRef.current.clipboardOptions.separator;
    }, []);

    const onColumnInit = (grid: IgrGridBaseDirective, args: IgrColumnComponentEventArgs) => {
        let column = args.detail;
        column.formatter = (val: any) => "** " + val + " **"
        column.header = "🎉" + column.field;
    }

    const changeCopySeparator = (inputComponent: IgrInput, args: IgrComponentDataValueChangedEventArgs): void => {
        gridRef.current.clipboardOptions.separator = args.detail || defaultSeparator;
    }

    const changeGridCopyBehavior = (switchComponent: any, args: IgrCheckboxChangeEventArgs): void => {
        gridRef.current.clipboardOptions.enabled = args.detail.checked;
    }

    const changeGridCopyHeadersBehavior = (switchComponent: any, args: IgrCheckboxChangeEventArgs): void => {
        gridRef.current.clipboardOptions.copyHeaders = args.detail.checked;
    }

    const changeGridCopyFormattersBehavior = (switchComponent: any, args: IgrCheckboxChangeEventArgs): void => {
        gridRef.current.clipboardOptions.copyFormatters = args.detail.checked;
    }

    const clearSelection = () => {
        gridRef.current.clearCellSelection();
    }

    return (
        <>
            <div className="container sample">      
                <div className="options horizontal" style={{gap: "1rem", alignItems: "center", margin: "1rem"}}>
                    <IgrInput placeholder='The default value is a single tabulation' style={{flex: "1 0 auto"}} change={changeCopySeparator}>
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