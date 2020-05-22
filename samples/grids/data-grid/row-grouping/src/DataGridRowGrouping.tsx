import * as React from 'react';
import { DataGridSharedData } from './DataGridSharedData';
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrImageColumn } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { IgrColumnGroupDescription } from 'igniteui-react-grids';

IgrDataGridModule.register();

export default class DataGridRowGrouping extends React.Component<any, any> {

    public data: any[];
    public grid: IgrDataGrid;

    constructor(props: any) {
        super(props);
        this.onGridRef = this.onGridRef.bind(this);
        this.onLoad = this.onLoad.bind(this);

        this.state = { componentVisible: true, isGroupCollapsible: true }
        this.data = DataGridSharedData.getEmployees(50);
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
                    <label className="igOptions-label" > Group Header Collapsible: </label>

                    <input type="checkbox" checked={this.state.isGroupCollapsible} onChange={this.onGroupHeaderCollapsible}/>

                </div>

                <IgrDataGrid
                    ref={this.onGridRef}
                    height="calc(100% - 39px)"
                    width="100%"
                    autoGenerateColumns="false"
                    isGroupCollapsable={this.state.isGroupCollapsible}
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
                </IgrDataGrid>
            </div>
        );
    }

    public onGroupHeaderCollapsible = (e: any) =>{
        const isCollapsible = e.target.checked;

        if (isCollapsible) {
            this.setState( {isGroupCollapsible: true} );
        }
        else {
            this.setState( {isGroupCollapsible: false} );
        }
    }

    public onSectionHeaderDisplayModeChanging = (e: any) => {
        this.grid.groupHeaderDisplayMode = e.target.value;
    }

    public onGridRef(grid: IgrDataGrid) {
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
