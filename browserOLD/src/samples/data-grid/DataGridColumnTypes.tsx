import * as React from "react";
import "../styles.css";
import "./DataGridSharedStyles.css";
import { SharedData } from "./DataGridSharedData";
import "./DataUtils";
// grid modules:
import { IgrLiveGridModule } from 'igniteui-react-grids';
import { IgrLiveGrid } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { IgrImageColumn } from 'igniteui-react-grids';
import { IgrTemplateColumn } from 'igniteui-react-grids';
import { IgrTemplateCellUpdatingEventArgs } from 'igniteui-react-grids';
import { IgrTemplateCellInfo } from 'igniteui-react-grids';

IgrLiveGridModule.register();

export default class DataGridColumnTypes extends React.Component<any, any> {

    public data: any[];

    constructor(props: any) {
        super(props);

        this.onAddressCellUpdating = this.onAddressCellUpdating.bind(this);
        this.onSalesCellUpdating = this.onSalesCellUpdating.bind(this);
        this.onEmailCellUpdating = this.onEmailCellUpdating.bind(this);
        this.data = SharedData.getEmployees();
    }

    public onAddressCellUpdating(s: IgrTemplateColumn, e: IgrTemplateCellUpdatingEventArgs) {
        const content = e.content as HTMLDivElement;
        let span1: HTMLSpanElement | null = null;
        let span2: HTMLSpanElement | null = null;
        const info = e.cellInfo as IgrTemplateCellInfo;
        const item = info.rowItem;

        if (content.childElementCount === 0) {

            span1 = document.createElement("span");
            span2 = document.createElement("span");

            content.style.verticalAlign = "top";
            content.style.marginTop = "15px";
            content.style.lineHeight = "normal";
            content.style.display = "inline-grid";
            content.style.fontFamily = "Verdana";
            content.style.fontSize = "13px";

            content.appendChild(span1);
            content.appendChild(span2);
        }
        else {
            span1 = content.children[0] as HTMLSpanElement;
            span2 = content.children[1] as HTMLSpanElement;
        }

        if (span1 && span2) {
            span1.textContent = item.Street;
            span2.textContent = item.City + ", " + item.Country;
        }
    }

    public onSalesCellUpdating(s: IgrTemplateColumn, e: IgrTemplateCellUpdatingEventArgs) {
        const content = e.content as HTMLDivElement;
        const info = e.cellInfo as IgrTemplateCellInfo;
        const sales = info.rowItem.Sales;
        let gaugeValue: HTMLSpanElement | null = null;
        let gaugeBar: HTMLDivElement | null = null;
        const gaugeWidth = (sales / 1100000) * 100;

        if (content.childElementCount === 0) {
            gaugeValue = document.createElement("span");
            gaugeValue.style.margin = "0px";
            gaugeValue.style.marginTop = "2px";
            gaugeValue.style.padding = "0px";
            gaugeValue.style.fontFamily = "Verdana";
            gaugeValue.style.fontSize = "13px";
            gaugeValue.style.textAlign = "center";

            gaugeBar = document.createElement("div");
            gaugeBar.style.background = "#7f7f7f";
            gaugeBar.style.padding = "0px";
            gaugeBar.style.margin = "0px";
            gaugeBar.style.height = "6px";
            gaugeBar.style.left = "0px";
            gaugeBar.style.top = "0px";
            gaugeBar.style.position = "relative";

            const gauge = document.createElement("div");
            gauge.style.background = "#dddddd";
            gauge.style.padding = "0px";
            gauge.style.margin = "0px";
            gauge.style.height = "6px";
            gauge.style.width = "80px";
            gauge.style.marginRight = "5px";
            gauge.appendChild(gaugeBar);

            content.style.marginTop = "20px";
            content.style.verticalAlign = "top";
            content.style.lineHeight = "normal";
            content.style.display = "inline-grid";
            content.appendChild(gauge);
            content.appendChild(gaugeValue);
        } else {
            const gauge = content.children[0];
            gaugeBar = gauge.children[0] as HTMLDivElement;
            gaugeValue = content.children[1] as HTMLSpanElement;
        }

        // conditional formatting:
        if (sales < 400000) {
            gaugeValue.style.color = "Red";
            gaugeBar.style.background = "Red";
        }
        else if (sales < 650000) {
            gaugeValue.style.color = "Orange";
            gaugeBar.style.background = "Orange";
        }
        else {
            gaugeValue.style.color = "Green";
            gaugeBar.style.background = "Green";
        }
        gaugeValue.textContent = "$" + sales / 1000 + ",000";
        gaugeBar.style.width = gaugeWidth + "px";
    }

    public onEmailCellUpdating(s: IgrTemplateColumn, e: IgrTemplateCellUpdatingEventArgs) {
        const content = e.content as HTMLDivElement;
        const info = e.cellInfo as IgrTemplateCellInfo;
        const item = info.rowItem;
        let link: HTMLAnchorElement;

        if (content.childElementCount === 0) {
            link = document.createElement("a");

            content.style.verticalAlign = "center";
            content.style.marginTop = "15px";
            content.style.lineHeight = "normal";
            content.style.display = "inline-grid";
            content.style.fontFamily = "Verdana";
            content.style.fontSize = "13px";
            content.style.color = "#4286f4";

            content.appendChild(link);
        } else {
            link = content.children[0] as HTMLAnchorElement;
        }

        link.href = "mailto:" + item.Email + "?Subject=Hello%20Friend";
        link.textContent = item.Email;
    }

    public onPhoneCellUpdating(s: IgrTemplateColumn, e: IgrTemplateCellUpdatingEventArgs) {
        const content = e.content as HTMLDivElement;

        const info = e.cellInfo as IgrTemplateCellInfo;
        const item = info.rowItem;
        let link: HTMLAnchorElement;

        if (content.childElementCount === 0) {

            link = document.createElement("a");

            content.style.verticalAlign = "center";
            content.style.marginTop = "15px";
            content.style.lineHeight = "normal";
            content.style.display = "inline-block";
            // content.style.display = "inline-grid";
            content.style.fontFamily = "Verdana";
            content.style.fontSize = "13px";
            content.style.color = "#4286f4";

            content.appendChild(link);
        } else {
            link = content.children[0] as HTMLAnchorElement;
        }

        link.href = "tel:" + item.Phone;
        link.textContent = item.Phone;
    }

    public render() {
        return (
            <div className="sampleContainer">
                <IgrLiveGrid
                    height="100%"
                    width="100%"
                    rowHeight="70"
                    autoGenerateColumns="false"
                    dataSource={this.data}>
                    <IgrImageColumn propertyPath="Photo" headerText="Photo" contentOpacity="1"
                    horizontalAlignment="center"  width="90"/>
                    <IgrTextColumn propertyPath="Name" width="*>130"/>
                    <IgrTemplateColumn propertyPath="Address" headerText="Address" horizontalAlignment="left"
                        cellUpdating={this.onAddressCellUpdating} width="*>140" />
                    <IgrTemplateColumn propertyPath="Sales" headerText="Sales" horizontalAlignment="center"
                        cellUpdating={this.onSalesCellUpdating} width="110" />
                    <IgrNumericColumn propertyPath="Salary" positivePrefix="$" showGroupingSeparator="true" />
                    <IgrDateTimeColumn propertyPath="Birthday" headerText="Date of Birth"
                    horizontalAlignment="right"  width="120"/>
                    {/*
                    <IgrTemplateColumn propertyPath="Email" horizontalAlignment="center"
                    cellUpdating={this.onEmailCellUpdating} width="*>140" />
                    <IgrTemplateColumn propertyPath="Phone" horizontalAlignment="center"
                    cellUpdating={this.onPhoneCellUpdating} width="140" /> */}
               </IgrLiveGrid>
            </div>
        );
    }
}