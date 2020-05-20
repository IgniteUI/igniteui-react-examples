import * as React from 'react';


import { DataGridSharedData } from './DataGridSharedData';

import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { IgrImageColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { FilterExpression } from 'igniteui-react-core';
import { FilterFactory } from 'igniteui-react-core';


IgrDataGridModule.register();

export default class DataGridRowFiltering extends React.Component<any, any> {

    public data: any[];
    public grid: IgrDataGrid;
    public filterColumn: string = "Street";
    public filterMode: string = "Contains";
    public filterText: string = "Market";
    public filterFactory: FilterFactory;

    constructor(props: any) {
        super(props);

        this.onGridRef = this.onGridRef.bind(this);
        this.onFilterTextChanged = this.onFilterTextChanged.bind(this);
        this.onFilterModeChanged = this.onFilterModeChanged.bind(this);

        this.state = { filterText: this.filterText, filterMode: this.filterMode, filterColumn: this.filterColumn }
        this.data = DataGridSharedData.getEmployees(4000);
    }

    public onGridRef(grid: IgrDataGrid) {
        this.grid = grid;
        this.applyFilter();
    }

    public onFilterTextChanged = (e: any) => {
        this.filterText = e.target.value;
        this.setState({filterText: e.target.value});
        this.applyFilter();
    }

    public onFilterModeChanged = (e: any) => {
        this.filterMode = e.target.value;
        this.setState({filterMode: e.target.value});
        this.applyFilter();
    }

    public onFilterColumnChanged = (e: any) => {
        this.filterColumn = e.target.value;
        this.setState({filterColumn: e.target.value});
        this.applyFilter();
    }

    public applyFilter()
    {
        this.grid.filterExpressions.clear();
        if (this.filterText === "") {
            return;
        }

        this.filterFactory = new FilterFactory();
        const expression = this.filterText.toUpperCase();
        const column = this.filterFactory.property(this.filterColumn).toUpper();

        let filter: FilterExpression;
        if (this.filterMode === "Contains")
        {
            filter = column.contains(expression)
        }
        else if (this.filterMode === "StartsWith")
        {
            filter = column.startsWith(expression);
        }
        else // if (this.filterMode === "EndsWith")
        {
            filter = column.endsWith(expression);
        }

        this.grid.filterExpressions.add(filter);
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igOptions">
                    <span className="igOptions-item">  Column: </span>
                    <select className="igOptions-item" value={this.state.filterColumn}
                        onChange={this.onFilterColumnChanged}>
                        <option>Name</option>
                        <option>Street</option>
                        <option>City</option>
                        <option>Country</option>
                    </select>
                    <select className="igOptions-item" value={this.state.filterMode}
                        onChange={this.onFilterModeChanged}>
                        <option>Contains</option>
                        <option>StartsWith</option>
                        <option>EndsWith</option>
                    </select>
                    <label className="igOptions-item"> Expression: </label>
                    <input className="igOptions-input-text" type="text" name="title" value={this.state.filterText}
                       onChange={this.onFilterTextChanged} />
                </div>

                <IgrDataGrid
                    ref={this.onGridRef}
                    height="calc(100% - 40px)"
                    width="100%"
                    defaultColumnMinWidth={100}
                    autoGenerateColumns={false}
                    dataSource={this.data} >

                    <IgrTextColumn propertyPath="Name" width="*>150"/>
                    <IgrTextColumn propertyPath="Street"   width="160" />
                    <IgrTextColumn propertyPath="City"  />
                    <IgrImageColumn propertyPath="CountryFlag" headerText="Country" contentOpacity="1"
                        horizontalAlignment="center" width="90"/>
                    <IgrNumericColumn propertyPath="Sales" positivePrefix="$" showGroupingSeparator="true" />
                    <IgrDateTimeColumn propertyPath="Birthday" headerText="Birthday" />

                </IgrDataGrid>
            </div>
        );
    }

}