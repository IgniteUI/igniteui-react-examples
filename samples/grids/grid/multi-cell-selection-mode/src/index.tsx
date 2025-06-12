import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrColumn, IgrGrid, IgrGridModule, IgrGridSelectionRangeEventArgs } from 'igniteui-react-grids';
import { InvoicesData } from './InvoicesData';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule
];
mods.forEach((m) => m.register());
const icon = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M180-81q-24 0-42-18t-18-42v-603h60v603h474v60H180Zm120-120q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h440q24 0 42 18t18 42v560q0 24-18 42t-42 18H300Zm0-60h440v-560H300v560Zm0 0v-560 560Z"/></svg>`;

export default function App() {
    const data = new InvoicesData();
    const rightGridRef = useRef(null);

    function onGridRangeSelected(evt: IgrGridSelectionRangeEventArgs): void {
        const grid = evt.target as IgrGrid;
        rightGridRef.current.data = grid.getSelectedData(false, false);
    }

    return (
        <>
            <div className="container sample">      
                <div className="container horizontal wrapper">
                    <IgrGrid autoGenerate={false} cellSelection="multiple" data={data} onRangeSelected={onGridRangeSelected} width="40%">
                        <IgrColumn field="ProductID" header="Product ID">
                        </IgrColumn>
                        <IgrColumn field="ProductName" header="Product Name">
                        </IgrColumn>
                        <IgrColumn field="UnitPrice" header="Unit Price">
                        </IgrColumn>
                        <IgrColumn field="Quantity">
                        </IgrColumn>
                    </IgrGrid>

                    <IgrGrid ref={rightGridRef} autoGenerate={false} width="40%">
                        <IgrColumn field="ProductID" header="Product ID">
                        </IgrColumn>
                        <IgrColumn field="ProductName" header="Product Name">
                        </IgrColumn>
                        <IgrColumn field="UnitPrice" header="Unit Price">
                        </IgrColumn>
                        <IgrColumn field="Quantity">
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