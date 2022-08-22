import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DataGridSharedData } from './DataGridSharedData';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { IgrImageColumn } from 'igniteui-react-grids';
import { IgrGridColumnOptionsModule } from 'igniteui-react-grids';

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();

export default class DataGridCellSelection extends React.Component<any, any> {

    public data: any[];
    public grid: IgrDataGrid;

    constructor(props: any) {
        super(props);

        this.state = { selectionMode: "MultipleRow" }
        this.data = DataGridSharedData.getEmployees();
    }

    public onGridRef = (grid: IgrDataGrid) => {
        if (!grid) { return; }

        this.grid = grid;
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <label className="options-label">Selection Mode: </label>
                    <select className="options-select" value={this.state.selectionMode}
                        onChange={this.onSelectionModeChange}>
                        <option>None</option>
                        <option>SingleCell</option>
                        <option>SingleRow</option>
                        <option>MultipleCell</option>
                        <option>MultipleRow</option>
                        <option>RangeCell</option>
                    </select>
                    {/* <button onClick={this.onClick}>Click Me</button> */}
                </div>

                <IgrDataGrid
                    ref={this.onGridRef}
                    height="calc(100% - 40px)"
                    width="100%"
                    defaultColumnMinWidth={120}
                    autoGenerateColumns={false}
                    dataSource={this.data}
                    selectionMode={this.state.selectionMode}
                    isColumnOptionsEnabled="true">

                    <IgrTextColumn field="Name" width="*>150"/>
                    <IgrTextColumn field="Street" headerText="Street" width="*>160" />
                    <IgrTextColumn field="City" headerText="City" width="*>120" />
                    <IgrNumericColumn field="Salary" headerText="Salary" width="*>120" positivePrefix="$" showGroupingSeparator="true" />

                    <IgrImageColumn field="Photo" headerText="Photo" contentOpacity="1"
                    horizontalAlignment="center"  width="*>110"/>
                    <IgrDateTimeColumn field="Birthday" headerText="Date of Birth" width="*>170"/>

                </IgrDataGrid>
            </div>
        );
    }

    public onSelectionModeChange = (e: any) => {
        this.setState({ selectionMode: e.target.value });
        this.grid.selectionMode = e.target.value;
    }
}

// rendering above class to the React DOM
ReactDOM.render(<DataGridCellSelection />, document.getElementById('root'));
