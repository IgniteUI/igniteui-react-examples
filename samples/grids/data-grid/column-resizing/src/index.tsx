import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { DataGridSharedData } from './DataGridSharedData';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { IgrGridColumnOptionsModule } from 'igniteui-react-grids';

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();

export default class GridColumnResizing extends React.Component<any, any> {
    public data: any[];
    public grid: IgrDataGrid;

    constructor(props: any) {
        super(props);

        this.onGridRef = this.onGridRef.bind(this);
        this.onColumnResizingModeChange = this.onColumnResizingModeChange.bind(this);
        this.onColumnResizingAnimationModeChange = this.onColumnResizingAnimationModeChange.bind(this);
        this.onSeparatorWidthChanged = this.onSeparatorWidthChanged.bind(this);

        this.state = {
            columnSeparatorWidth: 1,
            columnResizingMode: "Deferred",
            columnResizingAnimation: "Interpolate"
        };
        this.data = DataGridSharedData.getEmployees();
    }

    public onGridRef(grid: IgrDataGrid) {
        if (!grid) { return; }

        this.grid = grid;
        this.grid.columnResizingSeparatorBackground = "Black";
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <label className="options-label" style={{ width: "120px" }}>Resizing Mode:</label>
                    <select className="options-select" style={{ width: "135px" }} defaultValue="Deferred" onChange={this.onColumnResizingModeChange}>
                        <option>Deferred</option>
                        <option>Immediate</option>
                        <option>None</option>
                    </select>

                    {/* commented out the slider for now.
                    <label className="options-label">Separator Width: </label>
                    <input className="options-slider" type="range" min={1} max={5} step="1" style={{ width: "90px"}} value={this.state.columnSeparatorWidth} onChange={this.onSeparatorWidthChanged} />
                </div>
                <div className="options horizontal"> */}
                    <label className="options-label" style={{ width: "180px" }}>Resizing Animation:</label>
                    <select className="options-select" style={{ width: "135px" }} defaultValue="Auto" onChange={this.onColumnResizingAnimationModeChange}>
                        <option>Auto</option>
                        <option>Interpolate</option>
                        <option>None</option>
                    </select>
                </div>

                <IgrDataGrid
                    ref={this.onGridRef}
                    height="calc(100% - 40px)"
                    width="100%"
                    columnResizingAnimationMode="Interpolate"
                    columnResizingMode="Deferred"
                    columnResizingSeparatorWidth={1}
                    autoGenerateColumns={false}
                    defaultColumnMinWidth={100}
                    dataSource={this.data}
                    isColumnOptionsEnabled="true">

                    <IgrTextColumn field="Name" width="*>170"/>
                    <IgrTextColumn field="Street" width="*>120" headerText="Address" />
                    <IgrTextColumn field="City" width="*>120"/>
                    <IgrNumericColumn field="Salary" width="*>120" positivePrefix="$" showGroupingSeparator="true" />
                    <IgrDateTimeColumn field="Birthday" width="*>170" />

                </IgrDataGrid>
            </div>
        );
    }

    public onColumnResizingModeChange = (e: any) => {
        this.grid.columnResizingMode = e.target.value;
    }

    public onColumnResizingAnimationModeChange = (e: any) => {
        this.grid.columnResizingAnimationMode = e.target.value;
    }

    public onSeparatorWidthChanged(e: any) {
        this.grid.columnResizingSeparatorWidth = e.target.value;
        // this.setState({ columnSeparatorWidth: e.target.value });
    }
}

// rendering above class to the React DOM
ReactDOM.render(<DataGridColumnResizing />, document.getElementById('root'));