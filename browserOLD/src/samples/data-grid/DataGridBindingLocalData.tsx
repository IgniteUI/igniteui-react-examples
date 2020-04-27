import * as React from "react";
import "../styles.css";
import "./DataGridSharedStyles.css";
import DataUtils from "./DataUtils";

import { IgrLiveGridModule } from 'igniteui-react-grids';
import { IgrLiveGrid } from 'igniteui-react-grids';
import { IgrImageColumn } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { IgrColumnGroupDescription } from 'igniteui-react-grids';

IgrLiveGridModule.register();

export default class DataGridBindingLocalData extends React.Component<any, any> {

    public data: any[];
    public grid: IgrLiveGrid;

    constructor(props: any) {
        super(props);

        this.onGridRef = this.onGridRef.bind(this);
        this.state = { componentVisible: true }
        this.initData();
    }

    public onGridRef(grid: IgrLiveGrid) {
        const state = new IgrColumnGroupDescription();
        state.propertyPath = "Status";
        state.displayName = "Status";
        this.grid = grid;
        this.grid.groupDescriptions.add(state);
    }

    public render() {
        return (
            <div className="sampleContainer">
                <IgrLiveGrid
                ref={this.onGridRef}
                height="100%"
                width="100%"
                rowHeight="45"
                autoGenerateColumns="false"
                dataSource={this.data}>
                    <IgrTextColumn propertyPath="ProductID" headerText="Order ID" width="*>70" horizontalAlignment="center"/>
                    <IgrTextColumn propertyPath="ProductName" headerText="Product Name"   />
                    <IgrNumericColumn propertyPath="ProductPrice" headerText="Price" width="*>90"
                    positivePrefix="$" showGroupingSeparator="true" minFractionDigits={2}/>
                    <IgrNumericColumn propertyPath="OrderItems" headerText="Orders" width="*>70"/>
                    <IgrNumericColumn propertyPath="OrderValue" headerText="Order Value" width="*>100"
                    positivePrefix="$" showGroupingSeparator="true" />
                    <IgrDateTimeColumn propertyPath="OrderDate" headerText="Order Date" width="*>100"
                    horizontalAlignment="right" dateTimeFormat="DateShort" />
                    <IgrImageColumn propertyPath="CountryFlag" headerText="Country" width="*>100"
                    contentOpacity="1" horizontalAlignment="center"/>
                    <IgrNumericColumn propertyPath="Margin" headerText="Margin" width="90"
                    positiveSuffix="%" horizontalAlignment="center" />
                    <IgrNumericColumn propertyPath="Profit" headerText="Profit" width="70"
                    positivePrefix="$" showGroupingSeparator="true" />
                    <IgrTextColumn propertyPath="Status" headerText="Status" width="110"
                    horizontalAlignment="center"   />

                </IgrLiveGrid>
            </div>
        );
    }

    public getRandomDate(): Date {
        const today: Date = new Date();
        const year: number = today.getFullYear();
        const month: number = this.getRandomNumber(0, 8);
        const day: number = this.getRandomNumber(10, 27);
        return new Date(year, month, day);
    }

    public getRandomNumber(min: number, max: number): number {
        return Math.round(min + Math.random() * (max - min));
    }

    public getRandomItem(array: any[]): any {
        const index = Math.round(this.getRandomNumber(0, array.length - 1));
        return array[index];
    }

    public getCountryFlag(country: string): string {
        const url = DataUtils.getPublicURL();
        const flag = url + '/images/flags/' + country + '.png'
        return flag;
    }

    public initData() {

        const names: string[] = [
            "Intel CPU", "AMD CPU",
            "Intel Motherboard", "AMD Motherboard", "Nvidia Motherboard",
            "Nvidia GPU", "Gigabyte GPU", "Asus GPU", "AMD GPU", "MSI GPU",
            "Corsair Memory", "Patriot Memory", "Skill Memory",
            "Samsung HDD", "WD HDD", "Seagate HDD", "Intel HDD", "Asus HDD",
            "Samsung SSD", "WD SSD", "Seagate SSD", "Intel SSD", "Asus SSD",
            "Samsung Monitor", "Asus Monitor", "LG Monitor", "HP Monitor" ];

        const countries: string[] = ["USA", "UK", "France", "Canada", "Poland",
            "Denmark", "Croatia", "Australia", "Seychelles",
            "Sweden", "Germany", "Japan", "Ireland",
            "Barbados", "Jamaica", "Cuba", "Spain",];
        const status: string[] = [ "Packing", "Shipped", "Delivered"]
        const sales: any[] = [];

        for (let i = 0; i < 200; i++) {
            const price = this.getRandomNumber(10000, 90000) / 100;
            const items = this.getRandomNumber(4, 30);
            const value = Math.round(price * items);
            const margin = this.getRandomNumber(2, 5);
            const profit = Math.round((price * margin / 100) * items);
            const country = this.getRandomItem(countries);
            sales.push({
                Country: country,
                CountryFlag: this.getCountryFlag(country),
                Margin: margin,
                OrderDate: this.getRandomDate(),
                OrderItems: items,
                OrderValue: value,
                ProductID: 1001 + i,
                ProductName: this.getRandomItem(names),
                ProductPrice: price,
                Profit: Math.round(profit),
                Status: this.getRandomItem(status),
            });
        }

        this.data = sales;
    }
}