import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
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
        this.data = DataGridSharedData.getHouses();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <label className="options-label">Header Click Action: </label>
                    <select className="options-select" value={this.state.sortType}
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
                    <IgrTextColumn field="ID" width="*>110" horizontalAlignment="center"/>
                    <IgrTextColumn field="Property" headerText="Property" width="*>150"/>
                    <IgrImageColumn field="CountryFlag" headerText="Country" width="*>160" contentOpacity="1"
                    horizontalAlignment="center" paddingTop="5" paddingBottom="5"/>
                    <IgrTextColumn field="City" width="*>150"/>
                    <IgrNumericColumn field="Price" width="*>130" positivePrefix="$" showGroupingSeparator="true"/>
                    <IgrNumericColumn field="Rooms" width="*>110" />
               </IgrDataGrid>
            </div>
        );
    }

    public onGridRef = (grid: IgrDataGrid) => {
        if (!grid) { return; }

        this.grid = grid;
        let csd = new IgrColumnSortDescription();
        csd.field = "Property";
        csd.sortDirection = ListSortDirection.Descending;
        this.grid.sortDescriptions.add(csd);
    }

    public onChartTypeChanged = (e: any) => {
        this.setState({sortType: e.target.value});
        this.grid.headerClickAction = e.target.value;
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataGridColumnSorting/>);
