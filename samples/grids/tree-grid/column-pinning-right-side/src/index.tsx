import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrPinningConfig, ColumnPinningPosition, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarPinning, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebTreeGridDescriptionModule } from 'igniteui-react-core';
import { EmployeesFlatDetailsItem, EmployeesFlatDetails } from './EmployeesFlatDetails';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrTreeGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private treeGrid: IgrTreeGrid
    private treeGridRef(r: IgrTreeGrid) {
        this.treeGrid = r;
        this.setState({});
    }
    private  _pinningConfig1: IgrPinningConfig | null = null;
    public get pinningConfig1(): IgrPinningConfig {
        if (this._pinningConfig1 == null)
        {
            var pinningConfig1: IgrPinningConfig = {} as IgrPinningConfig;
            pinningConfig1.columns = ColumnPinningPosition.End;

            this._pinningConfig1 = pinningConfig1;
        }
        return this._pinningConfig1;
    }

    constructor(props: any) {
        super(props);

        this.treeGridRef = this.treeGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrTreeGrid
                    autoGenerate={false}
                    ref={this.treeGridRef}
                    id="treeGrid"
                    data={this.employeesFlatDetails}
                    primaryKey="ID"
                    foreignKey="ParentID"
                    pinning={this.pinningConfig1}>
                    <IgrGridToolbar
                    >
                        <IgrGridToolbarActions
                        >
                            <IgrGridToolbarPinning
                            >
                            </IgrGridToolbarPinning>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn
                        field="Name"
                        dataType="string"
                        width="250">
                    </IgrColumn>
                    <IgrColumn
                        field="Title"
                        dataType="string"
                        width="300"
                        pinned={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="HireDate"
                        header="Hire Date"
                        dataType="date"
                        width="200">
                    </IgrColumn>
                    <IgrColumn
                        field="Age"
                        dataType="number"
                        width="100">
                    </IgrColumn>
                    <IgrColumn
                        field="Address"
                        dataType="string"
                        width="200">
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        dataType="string"
                        width="200">
                    </IgrColumn>
                    <IgrColumn
                        field="Country"
                        dataType="string"
                        width="200">
                    </IgrColumn>
                    <IgrColumn
                        field="Fax"
                        dataType="string"
                        width="200">
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        header="Postal Code"
                        dataType="string"
                        width="200">
                    </IgrColumn>
                    <IgrColumn
                        field="Phone"
                        dataType="string"
                        width="200">
                    </IgrColumn>
                </IgrTreeGrid>
            </div>
        </div>
        );
    }

    private _employeesFlatDetails: EmployeesFlatDetails = null;
    public get employeesFlatDetails(): EmployeesFlatDetails {
        if (this._employeesFlatDetails == null)
        {
            this._employeesFlatDetails = new EmployeesFlatDetails();
        }
        return this._employeesFlatDetails;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebTreeGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);