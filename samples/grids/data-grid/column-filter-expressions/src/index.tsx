import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DataGridSharedData } from './DataGridSharedData';
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { IgrImageColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { FilterExpression } from 'igniteui-react-core';
import { FilterFactory } from 'igniteui-react-core';
import { IgrGridColumnOptionsModule } from 'igniteui-react-grids';

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();

export default class DataGridColumnFiltering extends React.Component<any, any> {

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
        if (!grid) { return; }

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
        else
        {
            filter = column.endsWith(expression);
        }

        this.grid.filterExpressions.add(filter);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <label className="options-label">  Column: </label>
                    <select className="options-select" value={this.state.filterColumn}
                        onChange={this.onFilterColumnChanged}>
                        <option>Name</option>
                        <option>Street</option>
                        <option>City</option>
                        <option>Country</option>
                    </select>
                    <select className="options-select" value={this.state.filterMode}
                        onChange={this.onFilterModeChanged}>
                        <option>Contains</option>
                        <option>StartsWith</option>
                        <option>EndsWith</option>
                    </select>
                    <label className="options-label"> Expression: </label>
                    <input className="options-text" type="text" name="title" value={this.state.filterText}
                       onChange={this.onFilterTextChanged} />
                </div>

                <IgrDataGrid
                    ref={this.onGridRef}
                    height="calc(100% - 40px)"
                    width="100%"
                    defaultColumnMinWidth={100}
                    autoGenerateColumns={false}
                    dataSource={this.data}
                    isColumnOptionsEnabled="true"
                    filterUIType="ColumnOptions">

                    <IgrTextColumn field="Name" width="*>170"/>
                    <IgrTextColumn field="Street"   width="*>180" />
                    <IgrTextColumn field="City"  width="*>120"/>
                    <IgrImageColumn field="CountryFlag" paddingTop="5" paddingBottom="5" headerText="Country" contentOpacity="1"
                        horizontalAlignment="center" width="*>140"/>
                    <IgrNumericColumn field="Sales" positivePrefix="$" showGroupingSeparator="true" width="*>120"/>
                    <IgrDateTimeColumn field="Birthday" headerText="Birthday" width="*>170"/>

                </IgrDataGrid>
            </div>
        );
    }

}

// rendering above class to the React DOM
ReactDOM.render(<DataGridColumnFiltering />, document.getElementById('root'));
