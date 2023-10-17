import React, { KeyboardEvent, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { IgrGridModule, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarExporter, IgrGridToolbarHiding, IgrGridToolbarPinning } from "igniteui-react-grids";
import { IgrGrid, IgrColumn } from "igniteui-react-grids";
import "igniteui-react-grids/grids/combined";
import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import {
  IgrButton,
  IgrChip,
  IgrChipModule,
  IgrComponentValueChangedEventArgs,
  IgrIcon,
  IgrIconButton,
  IgrInput,
  IgrSlider,
  IgrSwitch,
} from "igniteui-react";
import { FinancialData } from "./FinancialData";

const mods: any[] = [IgrGridModule];
mods.forEach((m) => m.register());
const data = FinancialData.generateData(1000);

export default function Sample() {
  const gridRef = useRef<IgrGrid>(null);
  return (
    <div className="container sample">
        <div className="controls-holder">
        <div className="switches">
          <div className="switch-control-item">
            <IgrSwitch checked="true"><span key="switch">Grouped</span></IgrSwitch>
          </div>
          <div className="switch-control-item">
            <IgrSwitch checked="true"><span key="switch2">Toolbar</span></IgrSwitch>
          </div>
          <div className="control-item">
            <label id="recordsLabel">Records: <span id="slider-rec-value">1000</span></label>
            <IgrSlider className="finjs-slider" value="1000" min="0" max="10000" step="100"></IgrSlider>
          </div>
          <div className="control-item">
            <label id="frequencyLabel" >Frequency:<span id="slider-freq-value">500</span></label>
            <IgrSlider className="finjs-slider" value="500" min="100" max="3000" step="10"></IgrSlider>
          </div>
        </div>
        <div className="control-item finjs-play-controls">
          <IgrButton variant="outlined">
            <span key='content'>
            <IgrIcon name="update" collection="material"></IgrIcon>
            LIVE ALL PRICES
            </span>
          </IgrButton>
          <IgrButton variant="outlined" disabled="true">
            <span key='content2'>
            <IgrIcon name="stop" collection="material"></IgrIcon>
            Stop
            </span>
          </IgrButton>
          <IgrButton variant="outlined">
            <span key='content3'>
            <IgrIcon name="insert_chart" collection="material"></IgrIcon>
            Chart
            </span>
          </IgrButton>
        </div>
      </div>
      <div className="container vertical">
        <IgrGrid ref={gridRef} autoGenerate="false" data={data} rowSelection="multiple" primaryKey="id" displayDensity="cosy" hideGroupedColumns="true"
          allowFiltering="true" filterMode="excelStyleFilter">
        <IgrGridToolbar>
            <IgrGridToolbarActions>
              <IgrGridToolbarHiding></IgrGridToolbarHiding>
              <IgrGridToolbarPinning></IgrGridToolbarPinning>
              <IgrGridToolbarExporter></IgrGridToolbarExporter>
            </IgrGridToolbarActions>
          </IgrGridToolbar>
          <IgrColumn field="id" header="Id" dataType="number" sortable="true" editable="true" resizable="true">
          </IgrColumn>
          <IgrColumn field="category" header="Category" width="120px" dataType="string" sortable="true"
            editable="true" resizable="true">
          </IgrColumn>
          <IgrColumn field="type" header="Type" width="100px" dataType="string" sortable="true" editable="true"
            resizable="true">
          </IgrColumn>
          <IgrColumn field="contract" header="Contract" width="110px" dataType="string" sortable="true"
            editable="true" groupable="true">
          </IgrColumn>
          <IgrColumn field="settlement" width="100px" header="Settlement" dataType="string" sortable="true"
            editable="true" resizable="true">
          </IgrColumn>
          <IgrColumn field="country" header="Country" width="100px" dataType="string" sortable="true" editable="true"
            resizable="true">
          </IgrColumn>
          <IgrColumn field="region" width="100px" header="Region" dataType="string" sortable="true" editable="true">
          </IgrColumn>
          <IgrColumn field="lastUpdated" width="120px" header="Last Updated" dataType="date" sortable="true"
            editable="true" filterable="true">
          </IgrColumn>
          <IgrColumn field="openPrice" width="120px" header="Open Price" dataType="currency" sortable="true"
            editable="true" filterable="true">
          </IgrColumn>
          <IgrColumn field="price" id="price" header="Price" width="120px" dataType="currency" sortable="true"
            editable="true" filterable="true">
          </IgrColumn>
          <IgrColumn id="chart" field="Chart" header="Chart" width="60px">
          </IgrColumn>
          <IgrColumn field="change" id="change" header="Change" width="120px" dataType="number" sortable="true"
            editable="true" filterable="true">
          </IgrColumn>
          <IgrColumn field="changeP" id="changeP" header="Change %" width="120px" dataType="percent" sortable="true"
            editable="true" filterable="true">
          </IgrColumn>
          <IgrColumn field="buy" header="Buy" width="110px" dataType="currency" sortable="true" filterable="true">
          </IgrColumn>
          <IgrColumn field="sell" header="Sell" width="110px" dataType="currency" sortable="true" filterable="true">
          </IgrColumn>
          <IgrColumn field="spread" header="Spread" width="110px" dataType="number" sortable="true" filterable="true">
          </IgrColumn>
          <IgrColumn field="volume" header="Volume" width="110px" dataType="number" sortable="true" filterable="true">
          </IgrColumn>
          <IgrColumn field="highD" header="highD" width="110px" dataType="currency" sortable="true" filterable="true">
          </IgrColumn>
          <IgrColumn field="lowD" header="lowD" width="110px" dataType="currency" sortable="true" filterable="true">
          </IgrColumn>
          <IgrColumn field="highY" header="highY" width="110px" dataType="currency" sortable="true" filterable="true">
          </IgrColumn>
          <IgrColumn field="lowY" header="lowY" width="110px" dataType="currency" sortable="true" filterable="true">
          </IgrColumn>
          <IgrColumn field="startY" header="startY" width="110px" dataType="currency" sortable="true"
            filterable="true">
          </IgrColumn>
          <IgrColumn field="indGrou" width="100px" filterable="false">
          </IgrColumn>
          <IgrColumn field="indSect" width="120px" filterable="false">
          </IgrColumn>
          <IgrColumn field="indSubg" width="100px" filterable="false">
          </IgrColumn>
          <IgrColumn field="secType" width="90px" filterable="false">
          </IgrColumn>
          <IgrColumn field="issuerN" width="170px" filterable="false">
          </IgrColumn>
          <IgrColumn field="moodys" width="60px" filterable="false">
          </IgrColumn>
          <IgrColumn field="fitch" width="60px" filterable="false">
          </IgrColumn>
          <IgrColumn field="dbrs" width="60px" filterable="false">
          </IgrColumn>
          <IgrColumn field="collatT" width="90px" filterable="false">
          </IgrColumn>
          <IgrColumn field="curncy" width="60px" filterable="false">
          </IgrColumn>
          <IgrColumn field="security" width="120px" filterable="false">
          </IgrColumn>
          <IgrColumn field="sector" width="80px" filterable="false">
          </IgrColumn>
          <IgrColumn field="cusip" width="100px" filterable="false">
          </IgrColumn>
          <IgrColumn field="ticker" width="60px" filterable="false">
          </IgrColumn>
          <IgrColumn field="cpn" width="80px" filterable="false">
          </IgrColumn>
          <IgrColumn field="maturity" width="120px" filterable="false">
          </IgrColumn>
          <IgrColumn field="krD_3YR" width="110px" filterable="false">
          </IgrColumn>
          <IgrColumn field="zV_SPREAD" width="90px" filterable="false">
          </IgrColumn>
          <IgrColumn field="kRD_5YR" width="50px" filterable="false">
          </IgrColumn>
          <IgrColumn field="kRD_1YR" width="80px" filterable="false">
          </IgrColumn>
        </IgrGrid>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample />);
