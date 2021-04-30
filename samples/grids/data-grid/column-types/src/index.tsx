import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';


import "./DataGridStyles.css";
import { DataGridSharedData } from './DataGridSharedData';

import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrGridColumnOptionsModule } from 'igniteui-react-grids';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { IgrImageColumn } from 'igniteui-react-grids';
import { IgrTemplateColumn } from 'igniteui-react-grids';
import { IgrComboBoxColumn } from 'igniteui-react-grids';
import { IgrTemplateCellUpdatingEventArgs, 
    IgrGridCellValueChangingEventArgs } from 'igniteui-react-grids';
import { IgrTemplateCellInfo } from 'igniteui-react-grids';
import { IIgrCellTemplateProps } from 'igniteui-react-grids';

import { IgrSparkline } from 'igniteui-react-charts';
import { IgrSparklineModule } from 'igniteui-react-charts';

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();
IgrSparklineModule.register();

export default class DataGridColumnTypes extends React.Component<any, any> {

    public data: any[];
    public grid: IgrDataGrid;
    public cityList: any[];
    public cityLookup = new Map<string, any>();

    constructor(props: any) {
        super(props);

        this.onAddressCellUpdating = this.onAddressCellUpdating.bind(this);
        this.onSalesCellUpdating = this.onSalesCellUpdating.bind(this);
        this.onEmailCellUpdating = this.onEmailCellUpdating.bind(this);
        this.onCellValueChanging = this.onCellValueChanging.bind(this);

        this.data = DataGridSharedData.getEmployees(100);
        this.cityList = [];

        // iterate all employees and generate a list of cities
        this.data.forEach(employee => {
            if(!this.cityLookup.has(employee.City)) {
                this.cityLookup.set(employee.City, employee);
                this.cityList.push(employee);
            }
        });
        
        this.onGridRef = this.onGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="igContainer">
                <IgrDataGrid
                    ref={this.onGridRef}
                    height="100%"
                    width="100%"
                    rowHeight="50"
                    autoGenerateColumns="false"
                    dataSource={this.data}
                    defaultColumnMinWidth={100}
                    isColumnOptionsEnabled="true"
                    cellValueChanging={this.onCellValueChanging}
                    >
                    <IgrImageColumn field="Photo" headerText="Photo" contentOpacity="1"
                    horizontalAlignment="stretch" width="130" paddingTop="5" paddingBottom="5"  paddingRight="10"/>
                    <IgrTextColumn field="Name" width="*>160"/>

                    <IgrTemplateColumn field="Sales" headerText="Sales" horizontalAlignment="center"
                    paddingLeft="10" paddingRight="0"
                        cellUpdating={this.onSalesCellUpdating} width="*>180"/>

                    {/* TODO un-comment this column and getProductivityChart function when editing templated columns is corrected
                    <IgrTemplateColumn field="Productivity" headerText="Productivity"
                    horizontalAlignment="center" width="*>170" isEditable="false"
                    template={this.getProductivityChart} /> */}

                    <IgrNumericColumn field="Salary" positivePrefix="$"
                    showGroupingSeparator="true" width="*>180"/>

                    <IgrDateTimeColumn field="Birthday" headerText="Date of Birth"
                    horizontalAlignment="stretch" width="*>180" paddingRight="10"/>

                    <IgrComboBoxColumn field="City" headerText="City" dataSource={this.cityList} textField="City" valueField={["City"]} width="*>130"/>

                    <IgrImageColumn field="CountryFlag" headerText="Country Flag" contentOpacity="1"
                    horizontalAlignment="stretch" width="150" paddingTop="5" paddingBottom="5" />

                    <IgrTemplateColumn field="Address" headerText="Address" horizontalAlignment="left"
                        cellUpdating={this.onAddressCellUpdating} width="*>180" />

                    <IgrTemplateColumn field="Phone" horizontalAlignment="center"
                        cellUpdating={this.onPhoneCellUpdating} width="160" />

                    <IgrTextColumn field="Income" width="*>150" horizontalAlignment="center"/>
                    <IgrTextColumn field="Age" width="*>130" horizontalAlignment="center"/>
               </IgrDataGrid>
            </div>
        );
    }

    public onGridRef(grid: IgrDataGrid) {
        if (!grid) { return; }

        this.grid = grid;
    }

    // TODO un-comment when editing templated columns is corrected

    // public getProductivityChart(props: IIgrCellTemplateProps) {
    //     const info = props.dataContext as IgrTemplateCellInfo;
    //     return (
    //         <div className="gridSparklineContainer">
    //            <IgrSparkline
    //                height="30px" width="100%"
    //                displayType="Column"
    //                dataSource={info.rowItem.Productivity}
    //                valueMemberPath="Value"
    //                labelMemberPath="Week"
    //                lineThickness={2}
    //                brush="rgb(21, 190, 6)"
    //                negativeBrush="rgb(211, 17, 3)" />
    //         </div>
    //     );
    // }

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
        let gaugeWidth = (sales / 950000) * 100;
        gaugeWidth = Math.min(100, gaugeWidth);

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
        gaugeBar.id = sales + "_" + gaugeWidth.toFixed(1);
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

    public onCellValueChanging(s: IgrDataGrid, e: IgrGridCellValueChangingEventArgs) {
 
        let row = e.cellInfo.rowItem;
        if (e.column.field === "City")
        {
            let employee = this.cityLookup.get(e.newValue);
            
            if(employee !== undefined) {
                row.City = employee.City;
                row.Country = employee.Country;
                row.Street = employee.Street;
                row.CountryFlag = employee.CountryFlag;
                row.Address = employee.Address;

                //required for pushing changes to the grid
                s.notifySetItem(e.cellInfo.dataRow, row, row);
            }
            
        }        
    }

}

// rendering above class to the React DOM
ReactDOM.render(<DataGridColumnTypes />, document.getElementById('root'));