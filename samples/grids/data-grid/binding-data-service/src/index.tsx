import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';


import { LiveFinancialData } from './LiveFinancialData';
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { IgrGridColumnOptionsModule } from 'igniteui-react-grids';

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();

export default class DataGridBindingDataService extends React.Component<any, any> {

    public data: any[];

    constructor(props: any) {
        super(props);

        this.state = { componentVisible: true };
        this.data = LiveFinancialData.generateData(200);
    }

    public render(): JSX.Element {
        return (
            <div className="igContainer">
                <IgrDataGrid
                height="100%"
                width="100%"
                rowHeight="60"
                autoGenerateColumns="false"
                defaultColumnMinWidth="110"
                isColumnOptionsEnabled="true"
                dataSource={this.data}>

                    <IgrTextColumn width="*>140" field="Category" />
                    <IgrTextColumn width="*>160" field="Type" />
                    <IgrTextColumn width="*>140" field="Contract" />
                    <IgrTextColumn width="*>150"  field="Settlement" />
                    <IgrTextColumn width="*>150" field="Region" />
                    <IgrTextColumn width="*>160" field="Country" />

                    <IgrNumericColumn width="*>140" field="Open Price" headerText="Open" showGroupingSeparator="true" positivePrefix="$" minFractionDigits={2} maxFractionDigits={2} />
                    <IgrNumericColumn width="*>140" field="Price" headerText="Close" showGroupingSeparator="true" positivePrefix="$" minFractionDigits={2} maxFractionDigits={2}/>
                    <IgrNumericColumn width="*>130" field="Change"  minFractionDigits={2} maxFractionDigits={2}/>
                    <IgrNumericColumn width="*>150" field="Change(%)" negativeSuffix="%" positiveSuffix="%" minFractionDigits={2} maxFractionDigits={2}/>
                    <IgrNumericColumn width="*>110"  field="Buy" showGroupingSeparator="true" positivePrefix="$"  minFractionDigits={2} maxFractionDigits={2}/>
                    <IgrNumericColumn width="*>110"  field="Sell" showGroupingSeparator="true" positivePrefix="$" minFractionDigits={2} maxFractionDigits={2}/>
                    <IgrNumericColumn width="*>130" field="Spread" showGroupingSeparator="true"  minFractionDigits={2} maxFractionDigits={2}/>
                    <IgrNumericColumn width="*>130" field="Volume" showGroupingSeparator="true"  minFractionDigits={0} maxFractionDigits={0}/>
                    <IgrNumericColumn width="*>130" field="High(D)" showGroupingSeparator="true" minFractionDigits={2} maxFractionDigits={2} positivePrefix="$"/>
                    <IgrNumericColumn width="*>130" field="Low(D)" showGroupingSeparator="true" minFractionDigits={2} maxFractionDigits={2} positivePrefix="$"/>
                    <IgrNumericColumn width="*>130" field="High(Y)" showGroupingSeparator="true" minFractionDigits={2} maxFractionDigits={2} positivePrefix="$"/>
                    <IgrNumericColumn width="*>130" field="Low(Y)" showGroupingSeparator="true" minFractionDigits={2} maxFractionDigits={2} positivePrefix="$"/>
                    <IgrNumericColumn width="*>130" field="Start(Y)" showGroupingSeparator="true" minFractionDigits={2} maxFractionDigits={2} positivePrefix="$"/>

                    <IgrDateTimeColumn width="*>140" field="Maturity" horizontalAlignment="right" />
                    <IgrTextColumn width="*>120" field="Currency" />
                    <IgrTextColumn width="*>110" field="Risk" />
                    <IgrTextColumn width="*>130" field="Sector" />
                    <IgrTextColumn width="*>130" field="Security" />
                    <IgrTextColumn width="*>170" field="Issuer" />

                </IgrDataGrid>
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<DataGridBindingDataService />, document.getElementById('root'));