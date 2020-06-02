import * as React from 'react';
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

    public render() {
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

                    <IgrTextColumn width="*>140" propertyPath="Category" />
                    <IgrTextColumn width="*>160" propertyPath="Type" />
                    <IgrTextColumn width="*>140" propertyPath="Contract" />
                    <IgrTextColumn width="*>150"  propertyPath="Settlement" />
                    <IgrTextColumn width="*>150" propertyPath="Region" />
                    <IgrTextColumn width="*>160" propertyPath="Country" />

                    <IgrNumericColumn width="*>140" propertyPath="Open Price" headerText="Open" showGroupingSeparator="true" positivePrefix="$" minFractionDigits={2} maxFractionDigits={2} />
                    <IgrNumericColumn width="*>140" propertyPath="Price" headerText="Close" showGroupingSeparator="true" positivePrefix="$" minFractionDigits={2} maxFractionDigits={2}/>
                    <IgrNumericColumn width="*>130" propertyPath="Change"  minFractionDigits={2} maxFractionDigits={2}/>
                    <IgrNumericColumn width="*>150" propertyPath="Change(%)" negativeSuffix="%" positiveSuffix="%" minFractionDigits={2} maxFractionDigits={2}/>
                    <IgrNumericColumn width="*>110"  propertyPath="Buy" showGroupingSeparator="true" positivePrefix="$"  minFractionDigits={2} maxFractionDigits={2}/>
                    <IgrNumericColumn width="*>110"  propertyPath="Sell" showGroupingSeparator="true" positivePrefix="$" minFractionDigits={2} maxFractionDigits={2}/>
                    <IgrNumericColumn width="*>130" propertyPath="Spread" showGroupingSeparator="true"  minFractionDigits={2} maxFractionDigits={2}/>
                    <IgrNumericColumn width="*>130" propertyPath="Volume" showGroupingSeparator="true"  minFractionDigits={0} maxFractionDigits={0}/>
                    <IgrNumericColumn width="*>130" propertyPath="High(D)" showGroupingSeparator="true" minFractionDigits={2} maxFractionDigits={2} positivePrefix="$"/>
                    <IgrNumericColumn width="*>130" propertyPath="Low(D)" showGroupingSeparator="true" minFractionDigits={2} maxFractionDigits={2} positivePrefix="$"/>
                    <IgrNumericColumn width="*>130" propertyPath="High(Y)" showGroupingSeparator="true" minFractionDigits={2} maxFractionDigits={2} positivePrefix="$"/>
                    <IgrNumericColumn width="*>130" propertyPath="Low(Y)" showGroupingSeparator="true" minFractionDigits={2} maxFractionDigits={2} positivePrefix="$"/>
                    <IgrNumericColumn width="*>130" propertyPath="Start(Y)" showGroupingSeparator="true" minFractionDigits={2} maxFractionDigits={2} positivePrefix="$"/>

                    <IgrDateTimeColumn width="*>140" propertyPath="Maturity" horizontalAlignment="right" />
                    <IgrTextColumn width="*>120" propertyPath="Currency" />
                    <IgrTextColumn width="*>110" propertyPath="Risk" />
                    <IgrTextColumn width="*>130" propertyPath="Sector" />
                    <IgrTextColumn width="*>130" propertyPath="Security" />
                    <IgrTextColumn width="*>170" propertyPath="Issuer" />

                </IgrDataGrid>
            </div>
        );
    }
}
