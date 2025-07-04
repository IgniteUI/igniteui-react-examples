import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // styles shared between all samples

import { DataGridSharedData } from './DataGridSharedData';
import { IgrDataGrid } from 'igniteui-react-data-grids';
import { IgrDataGridModule } from 'igniteui-react-data-grids';
import { IgrTextColumn } from 'igniteui-react-data-grids';
import { IgrNumericColumn } from 'igniteui-react-data-grids';
import { IgrDateTimeColumn } from 'igniteui-react-data-grids';
import { IgrImageColumn } from 'igniteui-react-data-grids';
import { IgrGridColumnOptionsModule } from 'igniteui-react-data-grids';

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();

export default class DataGridRowSelection extends React.Component<any, any> {

    public data: any[];
    public grid: IgrDataGrid;

    constructor(props: any) {
        super(props);

        this.data = DataGridSharedData.getEmployees();
    }

    public onGridRef = (grid: IgrDataGrid) => {
        if (!grid) { return; }

        this.grid = grid;
    }

    public render(): JSX.Element {
        return (
            <div className="container">
                <div className="options">
                    <button className="options-button" onClick={this.onSelectAllClick}>Select All Rows</button>
                    <button className="options-button" onClick={this.onDeselectAllClick}>Deselect All Rows</button>
                </div>

                <IgrDataGrid
                    ref={this.onGridRef}
                    height="calc(100% - 40px)"
                    width="100%"
                    defaultColumnMinWidth={120}
                    autoGenerateColumns={false}
                    dataSource={this.data}
                    selectionMode="MultipleRow"
                    isColumnOptionsEnabled="true">

                    <IgrTextColumn field="Name" width="*>150"/>
                    <IgrTextColumn field="Street" headerText="Street" width="*>160" />
                    <IgrTextColumn field="City" headerText="City" width="*>120" />
                    <IgrNumericColumn field="Salary" headerText="Salary" width="*>120" positivePrefix="$" showGroupingSeparator="true" />

                    <IgrImageColumn field="Photo" headerText="Photo" contentOpacity="1" horizontalAlignment="center"  width="*>110"/>
                    <IgrDateTimeColumn field="Birthday" headerText="Date of Birth" width="*>170"/>

                </IgrDataGrid>
            </div>
        );
    }

    public onSelectAllClick = (e: any) => {
        this.grid.selectAllRows();
    }

    public onDeselectAllClick = (e: any) => {
        this.grid.deselectAllRows();
    }
}

root.render(<DataGridRowSelection/>);
