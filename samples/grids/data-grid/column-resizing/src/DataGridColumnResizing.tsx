import React from 'react';


import { DataGridSharedData } from './DataGridSharedData';

import { IgrLiveGrid } from 'igniteui-react-grids';
import { IgrLiveGridModule } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';

IgrLiveGridModule.register();

export default class GridColumnResizing extends React.Component<any, any> {
    public data: any[];
    public grid: IgrLiveGrid;

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

    public onGridRef(grid: IgrLiveGrid) {
        this.grid = grid;
        this.grid.columnResizingSeparatorBackground = "Black";
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igOptions">
                    <span className="igOptions-item" style={{ width: "120px" }}>Resizing Mode:</span>
                    <select className="igOptions-item" style={{ width: "135px" }} defaultValue="Deferred" onChange={this.onColumnResizingModeChange}>
                        <option>Deferred</option>
                        <option>Immediate</option>
                        <option>None</option>
                    </select>

                    {/* commented out the slider for now.
                    <span className="igOptions-item">Separator Width: </span>
                    <input className="igOptions-slider" type="range" min={1} max={5} step="1" style={{ width: "90px"}} value={this.state.columnSeparatorWidth} onChange={this.onSeparatorWidthChanged} />
                </div>
                <div className="igOptions"> */}
                    <span className="igOptions-item" style={{ width: "120px" }}>Resizing Animation:</span>
                    <select className="igOptions-item" style={{ width: "135px" }} defaultValue="Auto" onChange={this.onColumnResizingAnimationModeChange}>
                        <option>Auto</option>
                        <option>Interpolate</option>
                        <option>None</option>
                    </select>
                </div>

                <IgrLiveGrid
                    ref={this.onGridRef}
                    height="calc(100% - 40px)"
                    width="100%"
                    columnResizingAnimationMode="Interpolate"
                    columnResizingMode="Deferred"
                    columnResizingSeparatorWidth={1}
                    autoGenerateColumns={false}
                    defaultColumnMinWidth={100}
                    dataSource={this.data} >

                    <IgrTextColumn propertyPath="Name" width="*>150"/>
                    <IgrTextColumn propertyPath="Street" headerText="Address" />
                    <IgrTextColumn propertyPath="City" />
                    <IgrNumericColumn propertyPath="Salary" positivePrefix="$" showGroupingSeparator="true" />
                    <IgrDateTimeColumn propertyPath="Birthday"  />

                </IgrLiveGrid>
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