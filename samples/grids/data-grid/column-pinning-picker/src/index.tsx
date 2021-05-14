import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrImageColumn } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { DataGridSharedData } from './DataGridSharedData';
import { PinnedPositions } from 'igniteui-react-grids';
import { IgrGridColumnOptionsModule } from 'igniteui-react-grids';

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();

export default class DataGridColumnPinningPicker extends React.Component<any, any> {

    public data: any[];
    public grid: IgrDataGrid;

    constructor(props: any) {
        super(props);
        this.onGridRef = this.onGridRef.bind(this);
        this.onPinLeft = this.onPinLeft.bind(this);
        this.onPinRight = this.onPinRight.bind(this);
        this.onUnPin = this.onUnPin.bind(this);
        this.state = {
            componentVisible: true,
            isPinningToLeftDisabled: true,
            isPinningToRightDisabled: true
        }
        this.data = DataGridSharedData.getEmployees();
    }

    public onGridRef(grid: IgrDataGrid) {
        if (!grid) { return; }

        this.grid = grid;
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <button className="options-button" disabled={this.state.isPinningToLeftDisabled} onClick={this.onPinLeft} style={{ width: "100px" }}>Pin Left</button>
                    <button className="options-button" disabled={this.state.isPinningToRightDisabled} onClick={this.onPinRight} style={{ width: "100px" }}>Pin Right</button>
                    <button className="options-button" onClick={this.onUnPin} style={{ width: "125px" }}>Unpin Columns</button>
                </div>
                <IgrDataGrid
                ref={this.onGridRef}
                height="calc(100% - 40px)"
                width="100%"
                autoGenerateColumns="false"
                defaultColumnMinWidth={120}
                scrollbarStyle = "thin"
                dataSource={this.data}
                isColumnOptionsEnabled="true">
                    <IgrTextColumn pinned="left" field="ID" headerText="ID" width="*>110"  horizontalAlignment="center"/>
                    <IgrTextColumn pinned="left" field="FirstName" headerText="First Name" width="*>190"/>
                    <IgrTextColumn pinned="left" field="LastName" headerText="Last Name" width="*>190"/>

                    <IgrDateTimeColumn field="Birthday" headerText="Date of Birth" width="*>170" horizontalAlignment="center"/>
                    <IgrNumericColumn field="Age" width="*>110" horizontalAlignment="center"/>
                    <IgrImageColumn field="CountryFlag" headerText="Country" paddingTop="5" paddingBottom="5"
                    width="*>160" contentOpacity="1" horizontalAlignment="center"/>

                    <IgrTextColumn field="Street" headerText="Address" width="*>260"/>
                    <IgrTextColumn field="City"  width="*>170" />
                    <IgrTextColumn field="Country"  width="*>170" />

                    <IgrNumericColumn field="Salary" width="*>120" headerText="Salary" positivePrefix="$" showGroupingSeparator="true"/>
                    <IgrNumericColumn field="Sales" width="*>120" headerText="Sales" positivePrefix="$" showGroupingSeparator="true"/>
                </IgrDataGrid>
            </div>
        );
    }

    public onPinLeft = (e: any) => {
        this.setState({ isPinningToLeftDisabled: true, isPinningToRightDisabled: true });

        let idColumn = this.grid.actualColumns.item(0);
        let firstNameColumn = this.grid.actualColumns.item(1);
        let lastNameColumn = this.grid.actualColumns.item(2);
        this.grid.pinColumn(idColumn, PinnedPositions.Left);
        this.grid.pinColumn(firstNameColumn, PinnedPositions.Left);
        this.grid.pinColumn(lastNameColumn, PinnedPositions.Left);
    }

    public onPinRight = (e: any) => {
        this.setState({ isPinningToLeftDisabled: true, isPinningToRightDisabled: true});

        let streetColumn = this.grid.actualColumns.item(6);
        let cityColumn = this.grid.actualColumns.item(7);
        let countryColumn = this.grid.actualColumns.item(8);
        this.grid.pinColumn(streetColumn, PinnedPositions.Right);
        this.grid.pinColumn(cityColumn, PinnedPositions.Right);
        this.grid.pinColumn(countryColumn, PinnedPositions.Right);
    }

    public onUnPin = (e: any) => {
        this.setState({ isPinningToLeftDisabled: false, isPinningToRightDisabled: false });

        let idColumn = this.grid.actualColumns.item(0);
        let firstNameColumn = this.grid.actualColumns.item(1);
        let lastNameColumn = this.grid.actualColumns.item(2);
        this.grid.pinColumn(idColumn, PinnedPositions.None);
        this.grid.pinColumn(firstNameColumn, PinnedPositions.None);
        this.grid.pinColumn(lastNameColumn, PinnedPositions.None);

        let streetColumn = this.grid.actualColumns.item(6);
        let cityColumn = this.grid.actualColumns.item(7);
        let countryColumn = this.grid.actualColumns.item(8);
        this.grid.pinColumn(streetColumn, PinnedPositions.None);
        this.grid.pinColumn(cityColumn, PinnedPositions.None);
        this.grid.pinColumn(countryColumn, PinnedPositions.None);
    }
}

// rendering above class to the React DOM
ReactDOM.render(<DataGridColumnPinningPicker />, document.getElementById('root'));
