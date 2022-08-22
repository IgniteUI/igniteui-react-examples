import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DataGridSharedData } from './DataGridSharedData';
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { IgrImageColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrGridColumnOptionsModule } from 'igniteui-react-grids';

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();

export default class DataGridColumnFiltering extends React.Component<any, any> {

    public data: any[];
    public grid: IgrDataGrid;

    constructor(props: any) {
        super(props);

        this.data = DataGridSharedData.getEmployees(4000);
    }

    public onGridRef = (grid: IgrDataGrid) => {
        if (!grid) { return; }

        this.grid = grid;
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrDataGrid
                    ref={this.onGridRef}
                    height="calc(100% - 40px)"
                    width="100%"
                    defaultColumnMinWidth={100}
                    autoGenerateColumns={false}
                    dataSource={this.data}
                    isColumnOptionsEnabled="true"
                    filterUIType="FilterRow">
                    <IgrTextColumn field="Name" width="*>170"/>
                    <IgrTextColumn field="Street"   width="*>180" />
                    <IgrTextColumn field="City"  width="*>120"/>
                    <IgrImageColumn field="CountryFlag" paddingTop="5" paddingBottom="5" headerText="Country" contentOpacity="1"
                        horizontalAlignment="center" width="*>140"/>
                    <IgrNumericColumn field="Sales" positivePrefix="$" showGroupingSeparator="true" width="*>120"/>
                    <IgrDateTimeColumn field="Birthday" headerText="Birthday" width="*>170"/>
                </IgrDataGrid>
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<DataGridColumnFiltering />, document.getElementById('root'));
