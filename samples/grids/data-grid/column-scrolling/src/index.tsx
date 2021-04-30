import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';


import { DataGridSharedData } from './DataGridSharedData';
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { IgrImageColumn } from 'igniteui-react-grids';
import { IgrGridColumnOptionsModule } from 'igniteui-react-grids';

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();

export default class DataGridColumnScrolling extends React.Component<any, any> {

    public data: any[];

    constructor(props: any) {
        super(props);

        this.state = { componentVisible: true }
        this.data = DataGridSharedData.getEmployees();
    }

    public render(): JSX.Element {
        return (
            <div className="igContainer">
                <IgrDataGrid
                height="100%"
                width="100%"
                autoGenerateColumns="false"
                defaultColumnMinWidth={120}
                dataSource={this.data}
                isColumnOptionsEnabled="true">
                    <IgrTextColumn field="ID" headerText="ID" width="*>110"  horizontalAlignment="center"/>
                    <IgrTextColumn field="FirstName" headerText="First Name" width="*>190"/>
                    <IgrTextColumn field="LastName" headerText="Last Name" width="*>190"/>

                    <IgrImageColumn field="CountryFlag" headerText="Country" paddingTop="5" paddingBottom="5"
                    width="*>160" contentOpacity="1" horizontalAlignment="center"/>
                    <IgrDateTimeColumn field="Birthday" headerText="Date of Birth" width="*>170" horizontalAlignment="center"/>
                    <IgrNumericColumn field="Age" width="*>120" horizontalAlignment="center"/>
                    <IgrTextColumn field="Street" headerText="Address" width="*>260"/>
                    <IgrTextColumn field="City"  width="*>170" />
                    <IgrTextColumn field="Country"  width="*>170" />

                    <IgrNumericColumn field="Salary" width="*>120" headerText="Salary" positivePrefix="$" showGroupingSeparator="true"/>
                    <IgrNumericColumn field="Sales" width="*>120" headerText="Sales" positivePrefix="$" showGroupingSeparator="true"/>
                </IgrDataGrid>
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<DataGridColumnScrolling />, document.getElementById('root'));