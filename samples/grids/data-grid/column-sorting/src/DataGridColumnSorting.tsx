import * as React from 'react';
import { DataGridSharedData } from './DataGridSharedData';
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrImageColumn } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { HeaderClickAction } from 'igniteui-react-grids';
import { IgrColumnSortDescription } from 'igniteui-react-grids';
import { ListSortDirection } from 'igniteui-react-core';
import { IgrGridColumnOptionsModule } from 'igniteui-react-grids';

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();

export default class DataGridColumnSorting extends React.Component<any, any> {

    public data: any[];
    public grid: IgrDataGrid;

    constructor(props: any) {
        super(props);

        this.state = { sortType: "SortByMultipleColumnsTriState" }
        this.onGridRef = this.onGridRef.bind(this);
        this.data = DataGridSharedData.getHouses();
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
                <IgrDataGrid
                height="calc(100% - 40px)"
                width="100%"
                headerClickAction={HeaderClickAction.SortByMultipleColumnsTriState}
                autoGenerateColumns="false"
                dataSource={this.data}
                defaultColumnMinWidth={100}
                isColumnOptionsEnabled="true"
                ref={this.onGridRef}>
                    <IgrTextColumn propertyPath="ID" width="*>110" horizontalAlignment="center"/>
                    <IgrTextColumn propertyPath="Property" headerText="Property" width="*>150"/>
                    <IgrImageColumn propertyPath="CountryFlag" headerText="Country" width="*>160" contentOpacity="1"
                    horizontalAlignment="center" paddingTop="5" paddingBottom="5"/>
                    <IgrTextColumn propertyPath="City" width="*>150"/>
                    <IgrNumericColumn propertyPath="Price" width="*>130" positivePrefix="$" showGroupingSeparator="true"/>
                    <IgrNumericColumn propertyPath="Rooms" width="*>110" />
               </IgrDataGrid>
            </div>
        );
    }

    public onGridRef(grid: IgrDataGrid) {
        if (!grid) { return; }

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
