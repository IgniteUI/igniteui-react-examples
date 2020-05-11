import React from 'react';

import "./DataGridSharedStyles.css";
import "./DataUtils";
import { SharedData } from "./DataGridSharedData";
import { IgrLiveGrid } from 'igniteui-react-grids';
import { IgrLiveGridModule } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';

IgrLiveGridModule.register();

export default class DataGridColumnMoving extends React.Component<any, any> {
    public data: any[];
    public grid: IgrLiveGrid;

    constructor(props: any) {
        super(props);

        this.onGridRef = this.onGridRef.bind(this);
        this.onColumnMovingModeChange = this.onColumnMovingModeChange.bind(this);
        this.onColumnMovingAnimationModeChange = this.onColumnMovingAnimationModeChange.bind(this);
        this.onSeparatorWidthChanged = this.onSeparatorWidthChanged.bind(this);

        this.state = {
            columnSeparatorWidth: 1,
            columnMovingMode: "Deferred",
            columnMovingAnimation: "SlideOver"
        };
        this.data = SharedData.getEmployees();
    }

    public onGridRef(grid: IgrLiveGrid) {
        this.grid = grid;
        this.grid.columnMovingSeparatorBackground = "Black";
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igOptions">
                    <span className="igOptions-item" style={{ width: "160px" }}>Column Moving Mode:</span>
                    <select className="igOptions-item" style={{ width: "135px" }} defaultValue="Deferred" onChange={this.onColumnMovingModeChange}>
                        <option>Deferred</option>
                        <option>None</option>
                    </select>
                    <span className="igOptions-item">Separator Width: </span>
                    <input className="igOptions-slider" type="range" min={1} max={5} step="1" defaultValue={this.state.columnSeparatorWidth}
                    onChange={this.onSeparatorWidthChanged}/>
                </div>
                <div className="igOptions">
                    <span className="igOptions-item"style={{ width: "160px" }}>Column Moving Animation:</span>
                    <select className="igOptions-item" style={{ width: "135px" }} defaultValue="SlideOver" onChange={this.onColumnMovingAnimationModeChange} >
                        <option>Auto</option>
                        <option>SlideOver</option>
                        <option>None</option>
                    </select>
                </div>

                <IgrLiveGrid
                    ref={this.onGridRef}
                    height="calc(100% - 90px)"
                    width="100%"
                    columnMovingMode="Deferred"
                    columnMovingAnimationMode="SlideOver"
                    columnMovingSeparatorWidth={1}
                    defaultColumnMinWidth={100}
                    autoGenerateColumns={false}
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

    public onColumnMovingModeChange = (e: any) => {
        this.grid.columnMovingMode = e.target.value;
    }

    public onColumnMovingAnimationModeChange = (e: any) => {
        this.grid.columnMovingAnimationMode = e.target.value;
    }

    public onSeparatorWidthChanged(e: any) {
        this.grid.columnMovingSeparatorWidth = e.target.value;
    }
}