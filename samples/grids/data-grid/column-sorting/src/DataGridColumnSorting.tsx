import * as React from "react";


import { SharedData } from "./DataGridSharedData";

import { IgrLiveGridModule } from 'igniteui-react-grids';
import { IgrLiveGrid } from 'igniteui-react-grids';
import { IgrImageColumn } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { HeaderClickAction } from 'igniteui-react-grids';
import { IgrColumnSortDescription } from 'igniteui-react-grids';
import { ListSortDirection } from 'igniteui-react-core';

IgrLiveGridModule.register();

export default class DataGridColumnSorting extends React.Component<any, any> {

    public data: any[];
    public grid: IgrLiveGrid;

    constructor(props: any) {
        super(props);

        this.state = { sortType: "SortByMultipleColumnsTriState" }
        this.onGridRef = this.onGridRef.bind(this);
        this.data = SharedData.getHouses();
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igOptions">
                    <span className="igOptions-item">Header Click Action: </span>
                    <select className="igOptions-item" value={this.state.sortType}
                        onChange={this.onChartTypeChanged}>
                        <option>SortByMultipleColumns</option>
                        <option>SortByMultipleColumnsTriState</option>
                        <option>SortByOneColumnOnly</option>
                        <option>SortByOneColumnOnlyTriState</option>
                    </select>
                </div>
                <IgrLiveGrid
                height="calc(100% - 40px)"
                width="100%"
                headerClickAction={HeaderClickAction.SortByMultipleColumnsTriState}
                autoGenerateColumns="false"
                dataSource={this.data}
                defaultColumnMinWidth={100}
                ref={this.onGridRef}>
                    <IgrTextColumn propertyPath="ID" width="*>80" horizontalAlignment="center"/>
                    <IgrTextColumn propertyPath="Property" headerText="Property Type" width="*>130"/>
                    <IgrImageColumn propertyPath="CountryFlag" headerText="Country" width="*>100" contentOpacity="1" horizontalAlignment="center"/>
                    <IgrTextColumn propertyPath="City" width="*>130"/>
                    <IgrNumericColumn propertyPath="Price" width="*>110" positivePrefix="$" showGroupingSeparator="true"/>
                    <IgrNumericColumn propertyPath="Rooms" width="80" />
               </IgrLiveGrid>
            </div>
        );
    }

    public onGridRef(grid: IgrLiveGrid) {
        this.grid = grid;
        let csd = new IgrColumnSortDescription();
        csd.propertyPath = "Property";
        csd.sortDirection = ListSortDirection.Descending;
        this.grid.sortDescriptions.add(csd);
    }

    public onChartTypeChanged = (e: any) =>{
        this.setState({sortType: e.target.value});
        this.grid.headerClickAction = e.target.value;
    }
}