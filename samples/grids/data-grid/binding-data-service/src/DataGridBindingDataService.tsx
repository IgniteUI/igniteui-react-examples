import * as React from "react";
import "../styles.css";
import "./DataGridSharedStyles.css";
import { FinancialData } from './FinancialData';

import { IgrLiveGridModule } from 'igniteui-react-grids';
import { IgrLiveGrid } from 'igniteui-react-grids';
import { IgrImageColumn } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';

IgrLiveGridModule.register();

export default class DataGridBindingDataService extends React.Component<any, any> {

    public data: any[];

    constructor(props: any) {
        super(props);

        this.state = { componentVisible: true };
        this.data = FinancialData.generateData(200);
    }

    public render() {
        return (
            <div className="sampleContainer">
                <IgrLiveGrid
                height="100%"
                width="100%"
                rowHeight="60"
                autoGenerateColumns="false"
                defaultColumnMinWidth="110"
                dataSource={this.data}>

                    <IgrTextColumn width="120" propertyPath="Category" />
                    <IgrTextColumn width="140" propertyPath="Type" />
                    <IgrTextColumn width="120" propertyPath="Contract" />
                    <IgrTextColumn width="90"  propertyPath="Settlement" />
                    <IgrTextColumn width="130" propertyPath="Region" />
                    <IgrTextColumn width="140" propertyPath="Country" />

                    <IgrNumericColumn width="120" propertyPath="Open Price" headerText="Open" showGroupingSeparator="true" positivePrefix="$" minFractionDigits={2} maxFractionDigits={2} />
                    <IgrNumericColumn width="120" propertyPath="Price" headerText="Close" showGroupingSeparator="true" positivePrefix="$" minFractionDigits={2} maxFractionDigits={2}/>
                    <IgrNumericColumn width="110" propertyPath="Change"  minFractionDigits={2} maxFractionDigits={2}/>
                    <IgrNumericColumn width="120" propertyPath="Change(%)" negativeSuffix="%" positiveSuffix="%" minFractionDigits={2} maxFractionDigits={2}/>
                    <IgrNumericColumn width="90"  propertyPath="Buy" showGroupingSeparator="true" positivePrefix="$"  minFractionDigits={2} maxFractionDigits={2}/>
                    <IgrNumericColumn width="90"  propertyPath="Sell" showGroupingSeparator="true" positivePrefix="$" minFractionDigits={2} maxFractionDigits={2}/>
                    <IgrNumericColumn width="110" propertyPath="Spread" showGroupingSeparator="true"  minFractionDigits={2} maxFractionDigits={2}/>
                    <IgrNumericColumn width="110" propertyPath="Volume" showGroupingSeparator="true"  minFractionDigits={0} maxFractionDigits={0}/>
                    <IgrNumericColumn width="110" propertyPath="High(D)" showGroupingSeparator="true" minFractionDigits={2} maxFractionDigits={2} positivePrefix="$"/>
                    <IgrNumericColumn width="110" propertyPath="Low(D)" showGroupingSeparator="true" minFractionDigits={2} maxFractionDigits={2} positivePrefix="$"/>
                    <IgrNumericColumn width="110" propertyPath="High(Y)" showGroupingSeparator="true" minFractionDigits={2} maxFractionDigits={2} positivePrefix="$"/>
                    <IgrNumericColumn width="110" propertyPath="Low(Y)" showGroupingSeparator="true" minFractionDigits={2} maxFractionDigits={2} positivePrefix="$"/>
                    <IgrNumericColumn width="110" propertyPath="Start(Y)" showGroupingSeparator="true" minFractionDigits={2} maxFractionDigits={2} positivePrefix="$"/>

                    <IgrDateTimeColumn width="120" propertyPath="Maturity" horizontalAlignment="right" />
                    <IgrTextColumn width="100" propertyPath="Currency" />
                    <IgrTextColumn width="90" propertyPath="Risk" />
                    <IgrTextColumn width="110" propertyPath="Sector" />
                    <IgrTextColumn width="110" propertyPath="Security" />
                    <IgrTextColumn width="150" propertyPath="Issuer" />

                </IgrLiveGrid>
            </div>
        );
    }
}