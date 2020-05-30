import * as React from 'react';
import "./DataGridStyles.css";
import { DataGridSharedData } from './DataGridSharedData';

import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrGridColumnOptionsModule } from 'igniteui-react-grids';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrDataGridToolbarModule } from "igniteui-react-grids";
import { IgrDataGridToolbar } from "igniteui-react-grids";
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { IgrImageColumn } from 'igniteui-react-grids';
import { IgrTemplateColumn } from 'igniteui-react-grids';
import { IgrTemplateCellUpdatingEventArgs } from 'igniteui-react-grids';
import { IgrTemplateCellInfo } from 'igniteui-react-grids';
import { IIgrCellTemplateProps } from 'igniteui-react-grids';
import { IgrColumnGroupDescription } from 'igniteui-react-grids';
import { IgrColumnSummaryDescription } from 'igniteui-react-grids'
import { SummaryOperand } from 'igniteui-react-core';

import { IgrSparkline } from 'igniteui-react-charts';
import { IgrSparklineModule } from 'igniteui-react-charts';

IgrDataGridModule.register();
IgrDataGridToolbarModule.register();
IgrGridColumnOptionsModule.register();
IgrSparklineModule.register();

export default class DataGridOverview extends React.Component<any, any> {

    public data: any[];
    public grid: IgrDataGrid;
    public toolbar: IgrDataGridToolbar;

    constructor(props: any) {
        super(props);

        this.onAddressCellUpdating = this.onAddressCellUpdating.bind(this);
        this.onSalesCellUpdating = this.onSalesCellUpdating.bind(this);
        this.onEmailCellUpdating = this.onEmailCellUpdating.bind(this);
        this.data = DataGridSharedData.getEmployees(100);

        this.onGridRef = this.onGridRef.bind(this);
        this.onToolbarRef = this.onToolbarRef.bind(this);

        // this.onLoad = this.onLoad.bind(this);
    }

    public render() {
        return (
            <div className="igContainer">
                 <IgrDataGridToolbar
                    ref={this.onToolbarRef}
                    toolbarTitle="Sales Team"
                    columnChooser="true"
                    columnPinning="true"
                />
                <IgrDataGrid
                    ref={this.onGridRef}
                    height="calc(100% - 2.75rem)"
                    width="100%"
                    rowHeight="50"
                    autoGenerateColumns="false"
                    dataSource={this.data}
                    defaultColumnMinWidth="100"
                    summaryScope="Root"
                    isColumnOptionsEnabled="true"
                    isGroupCollapsable="true"
                    groupHeaderDisplayMode="Combined"
                    groupSummaryDisplayMode="RowBottom"
                    columnMovingMode="Deferred"
                    columnMovingAnimationMode="SlideOver"
                    columnMovingSeparatorWidth="2"
                    columnShowingAnimationMode="slideFromRightAndFadeIn"
                    columnHidingAnimationMode="slideToRightAndFadeOut"
                    >
                    <IgrImageColumn propertyPath="Photo" headerText="Photo" contentOpacity="1"
                    horizontalAlignment="stretch" width="110" paddingTop="5" paddingBottom="5"  paddingRight="10"/>
                    <IgrTextColumn propertyPath="Name" width="*>140"/>

                    <IgrTemplateColumn propertyPath="Sales" headerText="Sales" horizontalAlignment="center"
                    paddingLeft="10" paddingRight="0"
                        cellUpdating={this.onSalesCellUpdating} width="*>160" />

                    <IgrTemplateColumn propertyPath="Productivity" headerText="Productivity"
                    horizontalAlignment="center" width="*>150"
                    template={this.getProductivityChart} />

                    <IgrNumericColumn propertyPath="Salary" positivePrefix="$"
                    showGroupingSeparator="true" width="*>160"/>

                    <IgrDateTimeColumn propertyPath="Birthday" headerText="Date of Birth"
                    horizontalAlignment="stretch" width="*>160" paddingRight="10"/>
                    <IgrImageColumn propertyPath="CountryFlag" headerText="Country" contentOpacity="1"
                    horizontalAlignment="stretch" width="130" paddingTop="7.5" paddingBottom="7.5" />

                    <IgrTemplateColumn propertyPath="Address" headerText="Address" horizontalAlignment="left"
                        cellUpdating={this.onAddressCellUpdating} width="*>160" />

                    <IgrTemplateColumn propertyPath="Phone" horizontalAlignment="center"
                        cellUpdating={this.onPhoneCellUpdating} width="140" />

                    {/* <IgrTemplateColumn propertyPath="Email" horizontalAlignment="center"
                    cellUpdating={this.onEmailCellUpdating} width="160" /> */}

                    {/* <IgrTextColumn propertyPath="Country" width="*>140" horizontalAlignment="center"/> */}
                    <IgrTextColumn propertyPath="Income" width="*>130" horizontalAlignment="center"/>
                    <IgrTextColumn propertyPath="Age" width="*>110" horizontalAlignment="center"/>
               </IgrDataGrid>
            </div>
        );
    }

    public onGridRef(grid: IgrDataGrid) {
        if (!grid) { return; }

        this.grid = grid;
        this.grid.actualDataSource.isSectionExpandedDefault = true;

        if (this.toolbar !== null) {
            this.toolbar.targetGrid = this.grid;
        }
    }

    public onToolbarRef(toolbar: IgrDataGridToolbar) {
          this.toolbar = toolbar;
          if (this.toolbar !== null) {
              this.toolbar.targetGrid = this.grid;
          }
    }

    public componentDidMount() {
    //     window.addEventListener('load', this.onLoad);
    // }

    // public onLoad() {
        const peopleGroup = new IgrColumnGroupDescription();
        peopleGroup.propertyPath = "Country";
        peopleGroup.displayName = "Country";
        this.grid.groupDescriptions.add(peopleGroup);

        const incomeGroup = new IgrColumnGroupDescription();
        incomeGroup.propertyPath = "Income";
        incomeGroup.displayName = "Income";
        this.grid.groupDescriptions.add(incomeGroup);

        const peopleCount = new IgrColumnSummaryDescription();
        peopleCount.propertyPath = "Photo";
        peopleCount.operand = SummaryOperand.Count;
        this.grid.summaryDescriptions.add(peopleCount);

        const sales = new IgrColumnSummaryDescription();
        sales.propertyPath = "Sales";
        sales.operand = SummaryOperand.Max;
        sales.formatOverride = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
        this.grid.summaryDescriptions.add(sales);

        const salary = new IgrColumnSummaryDescription();
        salary.propertyPath = "Salary";
        salary.operand = SummaryOperand.Average;
        salary.formatOverride = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
        this.grid.summaryDescriptions.add(salary);
    }

    public getProductivityChart(props: IIgrCellTemplateProps) {
        const info = props.dataContext as IgrTemplateCellInfo;
        return (
            <div className="gridSparklineContainer">
               <IgrSparkline
                   height="30px" width="100%"
                   displayType="Column"
                   dataSource={info.rowItem.Productivity}
                   valueMemberPath="Value"
                   labelMemberPath="Week"
                   lineThickness={2}
                   brush="rgb(21, 190, 6)"
                   negativeBrush="rgb(211, 17, 3)" />
            </div>
        );
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

            content.style.fontFamily = "Verdana";
            content.style.fontSize = "13px";
            content.style.verticalAlign = "center";
            content.style.lineHeight = "normal";
            content.style.display = "flex";
            content.style.flexDirection = "column";
            content.style.justifyContent = "center";
            content.style.height = "100%";
            content.style.width = "100%";
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
            gauge.style.marginTop = "8px";
            gauge.style.width = "100%";
            gauge.appendChild(gaugeBar);

            content.style.verticalAlign = "center";
            content.style.lineHeight = "normal";
            content.style.display = "flex";
            content.style.flexDirection = "column";
            content.style.justifyContent = "center";
            content.style.height = "100%";
            content.style.width = "calc(100% - 2rem)";
            content.style.marginRight = "1rem";
            content.style.marginLeft = "1rem";

            content.appendChild(gauge);
            content.appendChild(gaugeValue);
        } else {
            const gauge = content.children[0];
            gaugeBar = gauge.children[0] as HTMLDivElement;
            gaugeValue = content.children[1] as HTMLSpanElement;
        }

        // conditional formatting:
        if (sales < 400000) {
            gaugeValue.style.color = "rgb(211, 17, 3)";
            gaugeBar.style.background = "rgb(211, 17, 3)";
        }
        else if (sales < 650000) {
            gaugeValue.style.color = "Orange";
            gaugeBar.style.background = "Orange";
        }
        else {
            gaugeValue.style.color = "rgb(21, 190, 6)";
            gaugeBar.style.background = "rgb(21, 190, 6)";
        }
        gaugeValue.textContent = "$" + sales / 1000 + ",000";

        let gaugeWidth = (sales / 990000) * 100;
        gaugeWidth = Math.min(100, gaugeWidth);
        gaugeBar.style.width = gaugeWidth + "%";
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
            content.style.width = "100%";

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
            content.style.width = "100%";

            content.appendChild(link);
        } else {
            link = content.children[0] as HTMLAnchorElement;
        }

        link.href = "tel:" + item.Phone;
        link.textContent = item.Phone;
    }

}
