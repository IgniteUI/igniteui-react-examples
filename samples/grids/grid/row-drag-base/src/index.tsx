import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridBaseDirective, IgrGridCellEventArgs, IgrGridModule, IgrRowDragEndEventArgs } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { CustomersData } from './CustomersData';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule
];
mods.forEach((m) => m.register());
const icon = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M180-81q-24 0-42-18t-18-42v-603h60v603h474v60H180Zm120-120q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h440q24 0 42 18t18 42v560q0 24-18 42t-42 18H300Zm0-60h440v-560H300v560Zm0 0v-560 560Z"/></svg>`;

export default function App() {
    const data = new CustomersData();
    const rightGridRef = useRef<IgrGrid>(null);

    function onGridRowDragEnd(grid: IgrGrid, evt: IgrRowDragEndEventArgs): void {
        const ghostElement = evt.detail.dragDirective.ghostElement;
        if (ghostElement != null) {
            const dragElementPos = ghostElement.getBoundingClientRect();
            const gridPosition =  document.getElementById("rightGrid").getBoundingClientRect();
            
            const withinXBounds = dragElementPos.x >= gridPosition.x && dragElementPos.x <= gridPosition.x + gridPosition.width;
            const withinYBounds = dragElementPos.y >= gridPosition.y && dragElementPos.y <= gridPosition.y + gridPosition.height;
            if (withinXBounds && withinYBounds) {
                grid.deleteRow(evt.detail.dragData.index);
                rightGridRef.current.addRow(evt.detail.dragData.data);
            }
        }
    }

    return (
        <>
            <div className="container sample">      
                <div className="container horizontal wrapper">
                    <IgrGrid data={data} width="40%" autoGenerate="false" rowDraggable="true" rowDragEnd={onGridRowDragEnd}>
                        <IgrColumn field="ID" width="100px"></IgrColumn>
                        <IgrColumn field="CompanyName" width="100px"></IgrColumn>
                        <IgrColumn field="ContactName" width="100px"></IgrColumn>
                        <IgrColumn field="ContactTitle" width="100px"></IgrColumn>
                        <IgrColumn field="Address" width="100px"></IgrColumn>
                        <IgrColumn field="City" width="100px"></IgrColumn>
                        <IgrColumn field="Region" width="100px"></IgrColumn>
                        <IgrColumn field="PostalCode" width="100px"></IgrColumn>
                        <IgrColumn field="Phone" width="100px"></IgrColumn>
                        <IgrColumn field="Fax" width="100px"></IgrColumn>
                    </IgrGrid>

                    <IgrGrid id="rightGrid" ref={rightGridRef} data={[]} autoGenerate="false" width="40%"
                        emptyGridMessage="Drag and Drop a row from the left grid to this grid">
                        <IgrColumn field="ID" width="100px"></IgrColumn>
                        <IgrColumn field="CompanyName" width="100px"></IgrColumn>
                        <IgrColumn field="ContactName" width="100px"></IgrColumn>
                        <IgrColumn field="ContactTitle" width="100px"></IgrColumn>
                        <IgrColumn field="Address" width="100px"></IgrColumn>
                        <IgrColumn field="City" width="100px"></IgrColumn>
                        <IgrColumn field="Region" width="100px"></IgrColumn>
                        <IgrColumn field="PostalCode" width="100px"></IgrColumn>
                        <IgrColumn field="Phone" width="100px"></IgrColumn>
                        <IgrColumn field="Fax" width="100px"></IgrColumn>
                    </IgrGrid>
                </div>
            </div>
        </>
        );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);