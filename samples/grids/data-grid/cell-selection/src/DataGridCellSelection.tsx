import * as React from "react";

import "./DataGridSharedStyles.css";
import { SharedData } from "./DataGridSharedData";
import "./DataUtils";
import { IgrLiveGrid } from 'igniteui-react-grids';
import { IgrLiveGridModule } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { IgrImageColumn } from 'igniteui-react-grids';

IgrLiveGridModule.register();

export default class DataGridCellSelection extends React.Component<any, any> {

    public data: any[];
    public grid: IgrLiveGrid;

    constructor(props: any) {
        super(props);

        this.onGridRef = this.onGridRef.bind(this);
        // this.onClick = this.onClick.bind(this);
        this.onSelectionModeChange = this.onSelectionModeChange.bind(this);

        this.state = { selectionMode: "MultipleRow" }
        this.data = SharedData.getEmployees();
    }

    public onGridRef(grid: IgrLiveGrid) {
        this.grid = grid;
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igOptions">
                    <span className="igOptions-item">Selection Mode: </span>
                    <select className="igOptions-item" value={this.state.selectionMode}
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

                <IgrLiveGrid
                    ref={this.onGridRef}
                    height="calc(100% - 40px)"
                    width="100%"
                    defaultColumnMinWidth={120}
                    autoGenerateColumns={false}
                    dataSource={this.data}
                    selectionMode={this.state.selectionMode}>

                    <IgrTextColumn propertyPath="Name" width="*>130"/>
                    <IgrTextColumn propertyPath="Street" headerText="Street" width="140" />
                    <IgrTextColumn propertyPath="City" headerText="City" />
                    <IgrNumericColumn propertyPath="Salary" headerText="Salary" positivePrefix="$" showGroupingSeparator="true" />

                    <IgrImageColumn propertyPath="Photo" headerText="Photo" contentOpacity="1"
                    horizontalAlignment="center"  width="90"/>
                    <IgrDateTimeColumn propertyPath="Birthday" headerText="Date of Birth" />

                </IgrLiveGrid>
            </div>
        );
    }

    public onSelectionModeChange = (e: any) => {
        this.setState({ selectionMode: e.target.value });
        this.grid.selectionMode = e.target.value;
    }

    // public onClick = (e: any) => {
    //     this.grid.selectedItems.add(this.data.values[0]);
    // }
}