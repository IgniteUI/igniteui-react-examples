import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { DataGridSharedData } from './DataGridSharedData';
import { IgrDataGridModule } from 'igniteui-react-data-grids';
import { IgrDataGrid } from 'igniteui-react-data-grids';
import { IgrTextColumn } from 'igniteui-react-data-grids';
import { IgrNumericColumn } from 'igniteui-react-data-grids';
import { IgrDateTimeColumn } from 'igniteui-react-data-grids';
import { IgrGridColumnOptionsModule } from 'igniteui-react-data-grids';

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();

export default class DataGridRowGrouping extends React.Component<any, any> {

    public data: any[];
    public grid: IgrDataGrid;

    constructor(props: any) {
        super(props);
        this.data = DataGridSharedData.getEmployees(50);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrDataGrid
                    height="calc(100% - 39px)"
                    width="100%"
                    autoGenerateColumns="false"
                    isGroupCollapsable="true"
                    groupHeaderDisplayMode = "combined"
                    dataSource={this.data}
                    isColumnOptionsEnabled="true"
                    isGroupByAreaVisible="true">
                        <IgrTextColumn field="Name" headerText="Name" />
                        <IgrNumericColumn field="Age" headerText="Age" width="*>110"/>
                        <IgrDateTimeColumn field="Birthday" headerText="Date of Birth"
                        horizontalAlignment="right"  width="*>160"/>
                        <IgrTextColumn field="Country" headerText="Country" width="*>160"
                        paddingTop="5" paddingBottom="5" contentOpacity="1" horizontalAlignment="center"/>
                        <IgrTextColumn field="Street" headerText="Address" width="*>160"/>
                        <IgrNumericColumn field="Salary" headerText="Salary" width="*>130"
                        positivePrefix="$" showGroupingSeparator="true"  />
                        <IgrTextColumn field="City" width="*>120" headerText="City" horizontalAlignment="center"/>
                </IgrDataGrid>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataGridRowGrouping/>);
