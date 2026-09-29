import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGrid, IgrGridToolbar, IgrGridToolbarTitle, IgrGridToolbarActions, IgrGridToolbarPinning, IgrColumn } from 'igniteui-react-grids';
import CustomersDataLocal from './CustomersDataLocal.json';

import 'igniteui-react-grids/grids/themes/dark/bootstrap.css';

export default function GridColumnPinningCustomTheme() {
    return (
        <div className="container sample ig-typography">
            <div className="container fill">
                <IgrGrid autoGenerate={false} id="grid" className="custom-grid-palette-theme" data={CustomersDataLocal}>
                    <IgrGridToolbar>
                        <IgrGridToolbarTitle />
                        <IgrGridToolbarActions>
                            <IgrGridToolbarPinning />
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn field="ID" header="ID" hidden={true} />
                    <IgrColumn field="Company" header="Company Name" width="300px" />
                    <IgrColumn field="ContactName" header="Contact Name" width="200px" pinned={true} />
                    <IgrColumn field="ContactTitle" header="Contact Title" width="200px" pinned={true} />
                    <IgrColumn field="Address" header="Address" width="300px" />
                    <IgrColumn field="City" header="City" width="120px" />
                    <IgrColumn field="Region" header="Region" width="120px" />
                    <IgrColumn field="PostalCode" header="Postal Code" width="150px" />
                    <IgrColumn field="Phone" header="Phone" width="150px" />
                    <IgrColumn field="Fax" header="Fax" width="150px" />
                </IgrGrid>
            </div>
        </div>
    );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<GridColumnPinningCustomTheme/>);
