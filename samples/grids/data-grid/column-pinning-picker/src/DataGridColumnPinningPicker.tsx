import * as React from 'react';
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrImageColumn } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { DataGridSharedData } from './DataGridSharedData';
import { PinnedPositions } from 'igniteui-react-grids';

IgrDataGridModule.register();

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

    public render() {
        return (
            <div className="igContainer">
                <div className="igOptions">
                    <button className="igOptions-item" disabled={this.state.isPinningToLeftDisabled} onClick={this.onPinLeft} style={{ width: "100px" }}>Pin Left</button>
                    <button className="igOptions-item" disabled={this.state.isPinningToRightDisabled} onClick={this.onPinRight} style={{ width: "100px" }}>Pin Right</button>
                    <button className="igOptions-item" onClick={this.onUnPin} style={{ width: "125px" }}>Unpin Columns</button>
                </div>
                <IgrDataGrid
                ref={this.onGridRef}
                height="calc(100% - 40px)"
                width="100%"
                autoGenerateColumns="false"
                defaultColumnMinWidth={120}
                scrollbarStyle = "thin"
                dataSource={this.data}>
                    <IgrTextColumn pinned="left" propertyPath="ID" headerText="ID" width="*>70"  horizontalAlignment="center"/>
                    <IgrTextColumn pinned="left" propertyPath="FirstName" headerText="First Name" width="*>170"/>
                    <IgrTextColumn pinned="left" propertyPath="LastName" headerText="Last Name" width="*>170"/>

                    <IgrDateTimeColumn propertyPath="Birthday" headerText="Date of Birth" width="*>150" horizontalAlignment="center"/>
                    <IgrNumericColumn propertyPath="Age" width="*>100" horizontalAlignment="center"/>
                    <IgrImageColumn propertyPath="CountryFlag" headerText="Country" paddingTop="5" paddingBottom="5"
                    width="*>140" contentOpacity="1" horizontalAlignment="center"/>

                    <IgrTextColumn propertyPath="Street" headerText="Address" width="*>240"/>
                    <IgrTextColumn propertyPath="City"  width="*>150" />
                    <IgrTextColumn propertyPath="Country"  width="*>150" />

                    <IgrNumericColumn propertyPath="Salary" width="*>100" headerText="Salary" positivePrefix="$" showGroupingSeparator="true"/>
                    <IgrNumericColumn propertyPath="Sales" width="*>100" headerText="Sales" positivePrefix="$" showGroupingSeparator="true"/>
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
