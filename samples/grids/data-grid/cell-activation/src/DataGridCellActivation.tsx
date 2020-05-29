import * as React from 'react';
import { DataGridSharedData } from './DataGridSharedData';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';

IgrDataGridModule.register();

export default class DataGridCellActivation extends React.Component<any, any> {

    public data: any[];

    constructor(props: any) {
        super(props);
        this.data = DataGridSharedData.getEmployees();
    }

    public render() {
        return (
            <div className="igContainer">
                <IgrDataGrid
                    height="100%"
                    width="100%"
                    defaultColumnMinWidth={100}
                    autoGenerateColumns={false}
                    dataSource={this.data}
                    selectionMode="SingleCell"
                    activationMode="Cell">

                    <IgrTextColumn propertyPath="Name" width="*>150"/>
                    <IgrTextColumn propertyPath="Street" headerText="Address" width="*>130" />
                    <IgrTextColumn propertyPath="City" width="*>110"/>
                    <IgrNumericColumn propertyPath="Salary" width="*>110" positivePrefix="$" showGroupingSeparator="true" />
                    <IgrDateTimeColumn propertyPath="Birthday"  width="*>130" />

                </IgrDataGrid>
            </div>
        );
    }
}
