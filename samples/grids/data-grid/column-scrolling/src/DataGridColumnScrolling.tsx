import * as React from 'react';
import { DataGridSharedData } from './DataGridSharedData';
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { IgrImageColumn } from 'igniteui-react-grids';

IgrDataGridModule.register();

export default class DataGridColumnScrolling extends React.Component<any, any> {

    public data: any[];

    constructor(props: any) {
        super(props);

        this.state = { componentVisible: true }
        this.data = DataGridSharedData.getEmployees();
    }

    public render() {
        return (
            <div className="igContainer">
                <IgrDataGrid
                height="100%"
                width="100%"
                autoGenerateColumns="false"
                defaultColumnMinWidth={120}
                dataSource={this.data}>
                    <IgrTextColumn propertyPath="ID" headerText="Employee ID" width="100"  horizontalAlignment="center"/>
                    <IgrTextColumn propertyPath="FirstName" headerText="First Name" width="170"/>
                    <IgrTextColumn propertyPath="LastName" headerText="Last Name" width="170"/>

                    <IgrDateTimeColumn propertyPath="Birthday" headerText="Date of Birth" width="150" horizontalAlignment="center"/>
                    <IgrNumericColumn propertyPath="Age" width="100" horizontalAlignment="center"/>
                    <IgrImageColumn propertyPath="CountryFlag" headerText="Country"
                    width="140" contentOpacity="1" horizontalAlignment="center"/>
                    <IgrTextColumn propertyPath="Street" headerText="Address" width="240"/>
                    <IgrTextColumn propertyPath="City"  width="150" />
                    <IgrTextColumn propertyPath="Country"  width="150" />

                    <IgrNumericColumn propertyPath="Salary" headerText="Salary" positivePrefix="$" showGroupingSeparator="true"/>
                    <IgrNumericColumn propertyPath="Sales" headerText="Sales" positivePrefix="$" showGroupingSeparator="true"/>
                </IgrDataGrid>
            </div>
        );
    }
}
