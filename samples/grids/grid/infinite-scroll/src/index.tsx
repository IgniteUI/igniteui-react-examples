import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrForOfStateEventArgs, IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { loadDataForPage, getCachedData } from './NwindService';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule
];
mods.forEach((m) => m.register());

export default function App() {
    let pageSize = 10;
    let page = 1;
    let totalPageCount = 0;
    let totalItems = 0;
    const gridRef = useRef<IgrGrid>(null);

    useEffect(() => {
        gridRef.current.isLoading = true;
        const dataViewSize = 9.6;
        pageSize = Math.floor(dataViewSize * 1.5);

        loadDataForPage(page,pageSize, (request) => {
            if (request.data) {
                gridRef.current.data = getCachedData({startIndex: 0, chunkSize: 10});
                gridRef.current.totalItemCount = page * pageSize;
                totalItems = request.data['@odata.count'];
                totalPageCount = Math.ceil(totalItems / pageSize);
                gridRef.current.isLoading = false;
            }
        });
    }, [])

    function handlePreLoad(grid: IgrGrid, e: IgrForOfStateEventArgs) {
        const isLastChunk = grid.totalItemCount === e.detail.startIndex + e.detail.chunkSize;
        if (isLastChunk) {
            if (totalPageCount === page) {
                grid.data = getCachedData(e.detail);
                return;
            }
            page++;
            grid.isLoading = true;
            loadDataForPage(page, pageSize, (request) => {
                if (request.data) {
                    grid.totalItemCount = Math.min(page * pageSize, totalItems);
                    grid.data = getCachedData(e.detail);
                    grid.isLoading = false;
                }
            })
        } else {
            grid.data = getCachedData(e.detail);
        }
    }
    

    return (
        <>
            <div className="container sample">
                <div className="container fill" >
                    <IgrGrid
                        autoGenerate="false" dataPreLoad={handlePreLoad}
                        ref={gridRef} height='480px' width='100%'>
                        <IgrColumn field="ProductID" header="Product ID">
                        </IgrColumn>
                        <IgrColumn field="ProductName" header="Product Name">
                        </IgrColumn>
                        <IgrColumn field="UnitsInStock" header="Units In Stock" dataType="number">
                        </IgrColumn>
                        <IgrColumn field="UnitPrice" header="Units Price" dataType="number">
                        </IgrColumn>
                        <IgrColumn field="QuantityPerUnit">
                        </IgrColumn>
                        <IgrColumn field="ReorderLevel" data-type="number" header-classes="headerAlignSyle">
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