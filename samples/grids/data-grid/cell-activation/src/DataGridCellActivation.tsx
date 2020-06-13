import * as React from 'react';
import { DataGridSharedData } from './DataGridSharedData';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { IgrGridColumnOptionsModule } from 'igniteui-react-grids';

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();

export default class DataGridCellActivation extends React.Component<any, any> {

    public data: any[];

    constructor(props: any) {
        super(props);
        this.data = DataGridSharedData.getEmployees();
    }

    public render(): JSX.Element {
        return (
            <div className="igContainer">
                <IgrDataGrid
                    height="100%"
                    width="100%"
                    defaultColumnMinWidth={100}
                    autoGenerateColumns={false}
                    dataSource={this.data}
                    selectionMode="SingleCell"
                    activationMode="Cell"
                    isColumnOptionsEnabled="true">

                    <IgrTextColumn propertyPath="Name" width="*>170"/>
                    <IgrTextColumn propertyPath="Street" headerText="Address" width="*>150" />
                    <IgrTextColumn propertyPath="City" width="*>130"/>
                    <IgrNumericColumn propertyPath="Salary" width="*>130" positivePrefix="$" showGroupingSeparator="true" />
                    <IgrDateTimeColumn propertyPath="Birthday"  width="*>150" />

                </IgrDataGrid>
            </div>
        );
    }
}
