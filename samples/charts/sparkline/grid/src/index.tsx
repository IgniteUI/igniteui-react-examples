import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';


import "./SparklineGrid.css";
import { Products } from './Products';
// sparkline modules:
import { IgrSparkline } from 'igniteui-react-charts';
import { IgrSparklineModule } from 'igniteui-react-charts';
// grid modules:
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrImageColumn } from 'igniteui-react-grids';
import { IgrTemplateColumn, IIgrCellTemplateProps } from 'igniteui-react-grids';
import { IgrTemplateCellInfo } from 'igniteui-react-grids';

IgrDataGridModule.register();
IgrSparklineModule.register();

export default class SparklineGrid extends React.Component<any, any> {

    public data: any[];

    constructor(props: any) {
        super(props);

        this.data = Products.getData();
    }

    public render(): JSX.Element {
        return (
            <div className="igContainer">
                <IgrDataGrid
                    height="100%"
                    width="100%"
                    rowHeight="70"
                    editMode="None"
                    autoGenerateColumns="false"
                    dataSource={this.data}>

                    <IgrTextColumn field="ProductID" headerText="ID" width="*>90" horizontalAlignment="center"/>
                    <IgrTextColumn field="ProductName" headerText="Product"  width="*>130"    />

                    <IgrNumericColumn field="ProductPrice" headerText="Price" width="*>100"
                    positivePrefix="$" showGroupingSeparator="true" minFractionDigits={2}/>

                    <IgrTemplateColumn field="OrderHistory" headerText="Order History"
                    horizontalAlignment="center" width="*>150"
                    template={this.getOrderHistoryTemplate} />

                    <IgrNumericColumn field="OrderCount" headerText="Orders" width="*>90"
                    horizontalAlignment="center"/>

                    {/* <IgrNumericColumn field="OrderValue" headerText="Order Value" width="*>110"
                    positivePrefix="$" showGroupingSeparator="true" /> */}

                    <IgrTemplateColumn field="ReturnRate" headerText="Return Rate"
                    horizontalAlignment="center" width="*>140"
                    template={this.getReturnRateTemplate}  isEditable="false"/>

                    <IgrImageColumn field="CountryFlag" headerText="Country" width="*>90"
                    contentOpacity="1" horizontalAlignment="center"/>

                    <IgrTextColumn field="Status" headerText="Status" width="110"
                    horizontalAlignment="center"   />
               </IgrDataGrid>
            </div>
        );
    }

    public getOrderHistoryTemplate(props: IIgrCellTemplateProps) {
        const info = props.dataContext as IgrTemplateCellInfo;
        return (
            <div className="sparklineInGrid">
               <IgrSparkline
                   height="60px" width="100%"
                   displayType="Line"
                   dataSource={info.rowItem.OrderHistory}
                   valueMemberPath="Sold"
                   labelMemberPath="Week"
                   lineThickness={2}
                   brush="rgb(21, 190, 6)"
                   negativeBrush="rgb(211, 17, 3)" />
            </div>
        );
    }

    public getReturnRateTemplate(props: IIgrCellTemplateProps) {

        const info = props.dataContext as IgrTemplateCellInfo;
        return (
            <div className="sparklineInGrid">
               <IgrSparkline
                   height="60px" width="100%"
                   displayType="Column"
                   dataSource={info.rowItem.ReturnRate}
                   valueMemberPath="Balance"
                   labelMemberPath="Week"
                   lineThickness={2}
                   brush="rgb(21, 190, 6)"
                   negativeBrush="rgb(211, 17, 3)" />
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<SparklineGrid />, document.getElementById('root'));