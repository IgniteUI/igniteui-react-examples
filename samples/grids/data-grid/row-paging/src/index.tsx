import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';


import { DataGridSharedData } from './DataGridSharedData';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { IgrColumnGroupDescription } from 'igniteui-react-grids';
import { ListSortDirection } from 'igniteui-react-core';
import { DataGridPager } from './DataGridPager';
import { IgrGridColumnOptionsModule } from 'igniteui-react-grids';

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();

export default class DataGridRowPaging extends React.Component<any, any> {

    private data: any[];
    private grid: IgrDataGrid;
    private pager: DataGridPager;

    constructor(props: any) {
        super(props);

        this.onGridRef = this.onGridRef.bind(this);
        this.onPagerRef = this.onPagerRef.bind(this);
        this.data = DataGridSharedData.getEmployees();
    }

    public onGridRef(grid: IgrDataGrid) {
        if (!grid) { return; }

        this.grid = grid;

        const desc = new IgrColumnGroupDescription();
        desc.field = "Country";
        desc.displayName = "Country";
        desc.sortDirection = ListSortDirection.Descending;
        this.grid.groupDescriptions.add(desc);
    }
    public onPagerRef(pager: DataGridPager) {
        if (!pager) { return; }

        this.pager = pager;

        if (this.grid) {
            if (this.grid.sortDescriptions.count > 0) {
                this.onSortChanged();
            }
            if (this.grid.groupDescriptions.count > 0) {
                this.onGroupChanged();
            }
            if (this.grid.filterExpressions.size() > 0) {
                this.onFilterChanged();
            }
        }
    }

    public render(): JSX.Element {
        return (
            <div className="igContainer">
                <IgrDataGrid
                    ref={this.onGridRef}
                    width="100%"
                    height="calc(100% - 65px)"
                    autoGenerateColumns={false}
                    sortDescriptionsChanged={this.onSortChanged}
                    groupDescriptionsChanged={this.onGroupChanged}
                    filterExpressionsChanged={this.onFilterChanged}
                    isColumnOptionsEnabled="true">
                    <IgrTextColumn field="FirstName" headerText="First Name" width="*>150" />
                    <IgrTextColumn field="LastName" headerText="Last Name" width="*>150" />
                    <IgrTextColumn field="Street" headerText="Street" width="*>160" />
                    <IgrTextColumn field="City" headerText="City" width="*>120"/>
                    <IgrNumericColumn field="Salary" width="*>120" headerText="Salary" positivePrefix="$" showGroupingSeparator="true" />
                    <IgrNumericColumn field="Sales" width="*>120" headerText="Sales" positivePrefix="$" showGroupingSeparator="true" />
                    <IgrDateTimeColumn field="Birthday" width="*>170" headerText="Date of Birth" />
                    <IgrNumericColumn field="Age" width="*>120" headerText="Age" />
                </IgrDataGrid>

                <DataGridPager
                    ref={this.onPagerRef}
                    dataSource={this.data}
                    pageSize={20}
                    pagedChanged={this.onPageChanged}/>
            </div>
        );
    }

    private onSortChanged = () => {
        if (this.pager) {
            this.pager.applySorts(this.grid.sortDescriptions);
        }
    }
    private onGroupChanged = () => {
        if (this.pager) {
            this.pager.applyGroups(this.grid.groupDescriptions);
        }
    }
    private onFilterChanged = () => {
        if (this.pager) {
            this.pager.applyFilters(this.grid.filterExpressions);
        }
    }
    private onPageChanged = (pageNumber: number, data: any[]) => {
        this.grid.dataSource = data;
        this.grid.flush();
        this.grid.scrollToRowByIndex(0);
    };
}

// rendering above class to the React DOM
ReactDOM.render(<DataGridRowPaging />, document.getElementById('root'));