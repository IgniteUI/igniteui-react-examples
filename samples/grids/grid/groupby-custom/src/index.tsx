import React, { KeyboardEvent, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { IgrGridModule, IgrGroupByRowTemplateContext, SortingDirection } from "igniteui-react-grids";
import { IgrGrid, IgrColumn } from "igniteui-react-grids";
import { InvoicesWorldData } from "./InvoicesWorldData";

import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import {
  IgrBadge,
  IgrButton,
  IgrDropdown,
  IgrDropdownItem,
  IgrDropdownModule
} from "igniteui-react";

const mods: any[] = [IgrGridModule, IgrDropdownModule];
mods.forEach((m) => m.register());

const data = new InvoicesWorldData();

export default function Sample() {
  const gridRef = useRef<IgrGrid>(null);
  const dropDownRef = useRef<IgrDropdown>(null);

  function getParsedDate(date: any) {
    return {
      day: date.getDay(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
    };
  }
  function getWeekOfDate(date: any) {
    const onejan = new Date(date.getFullYear(), 0, 1);
    const week = Math.ceil((((date.getTime() - onejan.getTime()) / 86400000) + onejan.getDay() + 1) / 7);
    return week;
  }

  function setMode(e: any) {
    setGroupByMode(e.target.textContent);
  }



  const [groupByMode, setGroupByMode] = useState("Month");
  const groupExpression = [
    {
      fieldName: 'OrderDate', dir: SortingDirection.Desc,
      groupingComparer: (a: any, b: any) => {
        const dateA = getParsedDate(a);
        const dateB = getParsedDate(b);
        if (groupByMode === 'Month') {
          return dateA.month === dateB.month ? 0 : -1;
        } else if (groupByMode === "Year") {
          return dateA.year === dateB.year ? 0 : -1;
        } else if (groupByMode === 'Week') {
          return getWeekOfDate(a) === getWeekOfDate(b) ? 0 : -1;
        }
        return dateA.day === dateB.day && dateA.month === dateB.month ? 0 : -1;
      }
    }
  ] as any;

  function getMonthName(date: Date) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[date.getMonth()];
  }

  function groupByRowTemplate(ctx: { dataContext: IgrGroupByRowTemplateContext }) {
    const groupRow: any = ctx.dataContext.implicit;

    const dateTypes = {
      "Day": groupRow.value.toLocaleDateString(),
      "Month": getMonthName(groupRow.value),
      "Year": groupRow.value.getFullYear(),
      "Week": getWeekOfDate(groupRow.value)
    };

    const value = (dateTypes as any)[groupByMode];
    return <><div>
      <span style={{ color: "#09f" }}>OrderDate:</span>
      <span>{value}</span>
      <IgrBadge><span key="badge">{groupRow.records.length}</span></IgrBadge>
    </div></>;
  }

  return (
    <div className="container sample ig-typography">
      <div style={{ alignSelf: "flex-end" }} className="fill">
          <IgrDropdown ref={dropDownRef}>
            <div slot="target">
              <IgrButton key="btn"><span key="content">Group By Options</span></IgrButton>
            </div>
            <span onClick={e => setMode(e)}>
              <IgrDropdownItem key="day"><span key="contentDay">Day</span></IgrDropdownItem>
              <IgrDropdownItem key="week"><span key="contentWeek">Week</span></IgrDropdownItem>
              <IgrDropdownItem key="month" selected={true}><span key="contentMonth">Month</span></IgrDropdownItem>
              <IgrDropdownItem key="year"><span key="contentYear">Year</span></IgrDropdownItem>
            </span>
          </IgrDropdown>
      </div>
      <div className="container fill">
        <IgrGrid
          data={data}
          ref={gridRef}
          groupRowTemplate={groupByRowTemplate}
          groupingExpressions={groupExpression}
          autoGenerate={false}>
          <IgrColumn
            id="OrderID"
            field="OrderID"
            header="Order ID">
          </IgrColumn>
          <IgrColumn
            id="ShipCountry"
            field="ShipCountry"
            header="Ship Country">
          </IgrColumn>
          <IgrColumn
            id="OrderDate"
            dataType="date"
            field="OrderDate"
            header="Order Date">
          </IgrColumn>
          <IgrColumn
            id="PostalCode"
            field="PostalCode"
            header="Postal Code">
          </IgrColumn>
          <IgrColumn
            id="Discontinued"
            field="Discontinued"
            header="Discontinued">
          </IgrColumn>
          <IgrColumn
            id="ShipName"
            field="ShipName"
            header="Ship Name">
          </IgrColumn>
          <IgrColumn
            id="ShipperName"
            field="ShipperName"
            header="Shipper Name">
          </IgrColumn>
          <IgrColumn
            id="SalesPerson"
            field="SalesPerson"
            header="Sales Person">
          </IgrColumn>
          <IgrColumn
            id="UnitPrice"
            field="UnitPrice"
            header="Unit Price">
          </IgrColumn>
          <IgrColumn
            id="Quantity"
            field="Quantity"
            header="Quantity">
          </IgrColumn>
        </IgrGrid>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample />);
