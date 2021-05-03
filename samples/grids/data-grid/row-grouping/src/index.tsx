import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';


import { DataGridSharedData } from './DataGridSharedData';
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrImageColumn } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { IgrColumnGroupDescription } from 'igniteui-react-grids';
import { IgrGridColumnOptionsModule } from 'igniteui-react-grids';

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();

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

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <label className="options-label" style={{ width: "215px" }}>Section Header Display Mode:</label>
                    <select className="options-select" style={{ width: "100px" }} defaultValue="Deferred" onChange={this.onSectionHeaderDisplayModeChanging}>
                        <option>Combined</option>
                        <option>Split</option>
                    </select>
                    {/* temporally excluded this option: */}
                    {/* <label className="options-label" > Group Header Collapsible: </label>
                    <input type="checkbox" checked={this.state.isGroupCollapsible} onChange={this.onGroupHeaderCollapsible}/> */}

                </div>

                <IgrDataGrid
                    ref={this.onGridRef}
                    height="calc(100% - 39px)"
                    width="100%"
                    autoGenerateColumns="false"
                    isGroupCollapsable={this.state.isGroupCollapsible}
                    groupHeaderDisplayMode = "combined"
                    dataSource={this.data}
                    isColumnOptionsEnabled="true">
                        <IgrTextColumn field="Name" headerText="Name" />
                        <IgrNumericColumn field="Age" headerText="Age" width="*>110"/>
                        <IgrDateTimeColumn field="Birthday" headerText="Date of Birth"
                        horizontalAlignment="right"  width="*>160"/>
                        <IgrImageColumn field="CountryFlag" headerText="Country" width="*>160"
                        paddingTop="5" paddingBottom="5" contentOpacity="1" horizontalAlignment="center"/>
                        <IgrTextColumn field="Street" headerText="Address" width="*>160"/>
                        <IgrNumericColumn field="Salary" headerText="Salary" width="*>130"
                        positivePrefix="$" showGroupingSeparator="true"  />
                        <IgrTextColumn field="City" width="*>120" headerText="City" horizontalAlignment="center"/>
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
        if (!grid) { return; }

        this.grid = grid;
        this.grid.actualDataSource.isSectionExpandedDefault = true;
    }

    public componentDidMount() {
        window.addEventListener('load', this.onLoad);
    }

    public onLoad() {
        const state = new IgrColumnGroupDescription();
        state.field = "Country";
        state.displayName = "Location";
        const city = new IgrColumnGroupDescription();
        city.field = "City";
        city.displayName = "";
        const income = new IgrColumnGroupDescription();
        income.field = "Income";
        income.displayName = "Income";
        this.grid.groupDescriptions.add(state);
        this.grid.groupDescriptions.add(city);
        this.grid.groupDescriptions.add(income);
    }
}

// rendering above class to the React DOM
ReactDOM.render(<DataGridRowGrouping />, document.getElementById('root'));