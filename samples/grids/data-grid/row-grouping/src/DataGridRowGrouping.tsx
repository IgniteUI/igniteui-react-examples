import * as React from "react";


import { SharedData } from "./DataGridSharedData";

import { IgrLiveGridModule } from 'igniteui-react-grids';
import { IgrLiveGrid } from 'igniteui-react-grids';
import { IgrImageColumn } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { IgrColumnGroupDescription } from 'igniteui-react-grids';

IgrLiveGridModule.register();

export default class DataGridRowGrouping extends React.Component<any, any> {

    public data: any[];
    public grid: IgrLiveGrid;

    constructor(props: any) {
        super(props);
        this.onGridRef = this.onGridRef.bind(this);
        this.onLoad = this.onLoad.bind(this);

        this.state = { componentVisible: true, isGroupCollapsable: true }
        this.data = SharedData.getEmployees(50);
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igOptions">
                    <span className="igOptions-item" style={{ width: "175px" }}>Section Header Display Mode:</span>
                    <select className="igOptions-item" style={{ width: "100px" }} defaultValue="Deferred" onChange={this.onSectionHeaderDisplayModeChanging}>
                        <option>Combined</option>
                        <option>Split</option>
                    </select>
                    <label className="igOptions-label" > Group Header Collapsable: </label>

                    <input type="checkbox" checked={this.state.isGroupCollapsable} onChange={this.onGroupHeaderCollapsable}/>

                </div>

                <IgrLiveGrid
                    ref={this.onGridRef}
                    height="calc(100% - 39px)"
                    width="100%"
                    autoGenerateColumns="false"
                    isGroupCollapsable={this.state.isGroupCollapsable}
                    groupHeaderDisplayMode = "combined"
                    dataSource={this.data}>
                        <IgrTextColumn propertyPath="Name" headerText="Name" />
                        <IgrNumericColumn propertyPath="Age" headerText="Age" width="*>80"/>
                        <IgrDateTimeColumn propertyPath="Birthday" headerText="Date of Birth"
                        horizontalAlignment="right"  width="140"/>
                        <IgrTextColumn propertyPath="Street" headerText="Address" width="*>140"/>
                        <IgrNumericColumn propertyPath="Salary" headerText="Salary" width="90"
                        positivePrefix="$" showGroupingSeparator="true"  />
                        <IgrTextColumn propertyPath="City" headerText="City" width="120" horizontalAlignment="center"/>
                        <IgrImageColumn propertyPath="CountryFlag" headerText="Country" width="90" contentOpacity="1" horizontalAlignment="center"/>
                </IgrLiveGrid>
            </div>
        );
    }

    public onGroupHeaderCollapsable = (e: any) =>{
        const isCollapsable = e.target.checked;

        if (isCollapsable) {
            this.setState( {isGroupCollapsable: true} );
        }
        else {
            this.setState( {isGroupCollapsable: false} );
        }
    }

    public onSectionHeaderDisplayModeChanging = (e: any) => {
        this.grid.groupHeaderDisplayMode = e.target.value;
    }

    public onGridRef(grid: IgrLiveGrid) {
        this.grid = grid;
        this.grid.actualDataSource.isSectionExpandedDefault = true;
    }


    public componentDidMount() {
        window.addEventListener('load', this.onLoad);
    }

    public onLoad() {
        const state = new IgrColumnGroupDescription();
        state.propertyPath = "Country";
        state.displayName = "Location";
        const city = new IgrColumnGroupDescription();
        city.propertyPath = "City";
        city.displayName = "";
        const income = new IgrColumnGroupDescription();
        income.propertyPath = "Income";
        income.displayName = "Income";
        this.grid.groupDescriptions.add(state);
        this.grid.groupDescriptions.add(city);
        this.grid.groupDescriptions.add(income);
    }
}