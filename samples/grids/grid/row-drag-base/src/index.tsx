import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrRowDragEndEventArgs } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { CustomersData } from './CustomersData';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

export default function App() {
    const data = new CustomersData();
    const rightGridRef = useRef<IgrGrid>(null);

    const onGridRowDragEnd = (evt: IgrRowDragEndEventArgs) => {
        const leftGrid = evt.target as IgrGrid;
        const ghostElement = evt.detail.dragDirective.ghostElement;
        if (ghostElement != null) {
            const dragElementPos = ghostElement.getBoundingClientRect();
            const gridPosition = document.getElementById("rightGrid").getBoundingClientRect();

            const withinXBounds = dragElementPos.x >= gridPosition.x && dragElementPos.x <= gridPosition.x + gridPosition.width;
            const withinYBounds = dragElementPos.y >= gridPosition.y && dragElementPos.y <= gridPosition.y + gridPosition.height;
            if (withinXBounds && withinYBounds) {
                leftGrid.deleteRow(evt.detail.dragData.key);
                rightGridRef.current.addRow(evt.detail.dragData.data);
            }
        }
    }

    return (
        <div className="container sample">
            <div className="container horizontal wrapper">
                <IgrGrid data={data} width="40%" primaryKey='ID' autoGenerate={false} rowDraggable={true} onRowDragEnd={onGridRowDragEnd}>
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

                <IgrGrid id="rightGrid" ref={rightGridRef} data={[]} autoGenerate={false} width="40%"
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
    );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);