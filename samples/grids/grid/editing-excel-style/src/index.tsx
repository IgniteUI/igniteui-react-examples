import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrGrid, IgrColumn, IgrActiveNodeChangeEventArgs } from 'igniteui-react-grids';
import NwindData from './NwindData.json';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const nwindData = NwindData;

const Sample = () => {
    const gridRef = useRef<IgrGrid>(null);
    const shouldAppendValue = useRef(false);

    useEffect(() => {
        const gridElement = gridRef.current;

        if (!gridElement) {
            return undefined;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            var code = event.code;
            var activeElem = gridRef.current.selectedCells[0];

            if ((event.code >= 'Digit0' && event.code <= 'Digit9') || 
                (event.code >= 'KeyA' && event.code <= 'KeyZ') ||
                (event.code >= 'Numpad0' && event.code <= 'Numpad9') && 
                 event.code !== 'Enter' && event.code !== 'NumpadEnter') {
    
                if (activeElem && activeElem.editMode === false) {
                    activeElem.editMode = true;
                    activeElem.editValue = event.key;
                    shouldAppendValue.current = true;
                    gridRef.current.markForCheck();
                } else
                
                if (activeElem && activeElem.editMode && shouldAppendValue.current) {
                    event.preventDefault();
                    activeElem.editValue = activeElem.editValue + event.key;
                    shouldAppendValue.current = false;
                  }
            }

            if (code === 'Backspace') {
                if(activeElem == null) {
                    return;
                }
                const rowIndex = activeElem.row.index;
                const columnKey = activeElem.column.field; 
        
                gridRef.current.data[rowIndex][columnKey] = '';
                gridRef.current.markForCheck();

            }

            if (code === 'Enter' || code === 'NumpadEnter') {
                
                if(activeElem == null) {
                    return;
                }

                const thisRow = activeElem.row.index;
                const dataView = gridRef.current.dataView;
                const nextRowIndex = getNextEditableRowIndex(thisRow, dataView, event.shiftKey);    

                gridRef.current.navigateTo(nextRowIndex, activeElem.column.visibleIndex, (obj: any) => {
                
                    requestAnimationFrame(() => {
                        gridRef.current.endEdit(true, obj);
                        gridRef.current.clearCellSelection();
                        obj.target.activate();
                    
                    });
                });

            }
        };

        gridElement.addEventListener("keydown", handleKeyDown);
        
        return () => {
            gridElement.removeEventListener("keydown", handleKeyDown);
        };
    }, []);


    const getNextEditableRowIndex = (currentRowIndex: number, dataView: any, previous: boolean) => {
        if (currentRowIndex < 0 || (currentRowIndex === 0 && previous) || (currentRowIndex >= dataView.length - 1 && !previous)) {
            return currentRowIndex;
        }
        if (previous) {
            return dataView.findLastIndex((rec: any, index: number) => index < currentRowIndex && isEditableDataRecordAtIndex(index, dataView));
        }
        return dataView.findIndex((rec: any, index: number) => index > currentRowIndex && isEditableDataRecordAtIndex(index, dataView));
    };

    const isEditableDataRecordAtIndex = (dataViewIndex: number, dataView: any) => {
        const rec = dataView[dataViewIndex];
        return !rec.expression && !rec.summaries && !rec.childGridsData && !rec.detailsData;
    };

    function gridEndEdit(event: IgrActiveNodeChangeEventArgs): void {
        gridRef.current.endEdit(true, event.detail);
    }

    return (
        <div className="container sample ig-typography">
            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    data={nwindData}
                    primaryKey="ProductID"
                    ref={gridRef}
                    onActiveNodeChange={gridEndEdit}
                >
                    <IgrColumn field="ProductID" header="Product ID" editable={true} groupable={true} hidden={true} />
                    <IgrColumn field="ProductName" header="Product Name" dataType="string" editable={true} />
                    <IgrColumn field="UnitPrice" header="Unit Price" dataType="number" editable={true} />
                    <IgrColumn field="QuantityPerUnit" header="Quantity Per Unit" groupable={true} dataType="string" editable={true} />
                    <IgrColumn field="ReorderLevel" header="Reorder Level" dataType="number" groupable={true} editable={true} />
                </IgrGrid>
            </div>
        </div>
    );
};

export default Sample;

// Render the component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample />);
