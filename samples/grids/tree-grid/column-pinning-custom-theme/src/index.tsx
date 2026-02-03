import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGrid, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarPinning, IgrColumn } from 'igniteui-react-grids';
import { EmployeesFlatData } from './EmployeesFlatData';

import 'igniteui-react-grids/grids/themes/dark/bootstrap.css';

function TreeGridColumnPinningCustomTheme() {
    const [employeeData] = React.useState(() => new EmployeesFlatData());
    
    return (
        <div className="container sample ig-typography">
            <div className="container fill">
                <IgrTreeGrid
                    autoGenerate={false}
                    id="treeGrid"
                    className="custom-grid-palette-theme"
                    data={employeeData}
                    primaryKey="ID"
                    foreignKey="ParentID">
                    <IgrGridToolbar>
                        <IgrGridToolbarActions>
                            <IgrGridToolbarPinning>
                            </IgrGridToolbarPinning>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn
                        field="Name"
                        dataType="string"
                        pinned={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Title"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="Phone"
                        dataType="string"
                        pinned={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Age"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="HireDate"
                        dataType="date">
                    </IgrColumn>
                    <IgrColumn
                        field="OnPTO"
                        dataType="boolean">
                    </IgrColumn>
                </IgrTreeGrid>
            </div>
        </div>
    );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TreeGridColumnPinningCustomTheme/>);
