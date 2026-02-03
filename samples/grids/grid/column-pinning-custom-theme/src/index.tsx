import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGrid, IgrGridToolbar, IgrGridToolbarTitle, IgrGridToolbarActions, IgrGridToolbarPinning, IgrColumn } from 'igniteui-react-grids';
import CustomersDataLocal from './CustomersDataLocal.json';

import 'igniteui-react-grids/grids/themes/dark/bootstrap.css';

function GridColumnPinningCustomTheme() {
    const customersData = React.useMemo(() => CustomersDataLocal, []);
    
    return (
        <div className="container sample ig-typography">
            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    id="grid"
                    className="custom-grid-palette-theme"
                    data={customersData}>
                    <IgrGridToolbar>
                        <IgrGridToolbarTitle>
                        </IgrGridToolbarTitle>
                        <IgrGridToolbarActions>
                            <IgrGridToolbarPinning>
                            </IgrGridToolbarPinning>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn
                        field="ID"
                        header="ID"
                        hidden={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Company"
                        header="Company Name"
                        width="300px">
                    </IgrColumn>
                    <IgrColumn
                        field="ContactName"
                        header="Contact Name"
                        width="200px"
                        pinned={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ContactTitle"
                        header="Contact Title"
                        width="200px"
                        pinned={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Address"
                        header="Address"
                        width="300px">
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        header="City"
                        width="120px">
                    </IgrColumn>
                    <IgrColumn
                        field="Region"
                        header="Region"
                        width="120px">
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        header="Postal Code"
                        width="150px">
                    </IgrColumn>
                    <IgrColumn
                        field="Phone"
                        header="Phone"
                        width="150px">
                    </IgrColumn>
                    <IgrColumn
                        field="Fax"
                        header="Fax"
                        width="150px">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
    );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<GridColumnPinningCustomTheme/>);
