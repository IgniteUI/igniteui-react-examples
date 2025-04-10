import React, { KeyboardEvent, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { IgrCellTemplateContext, IgrGridModule, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarExporter, IgrGridToolbarHiding, IgrGridToolbarPinning, IgrGroupingExpression, SortingDirection } from "igniteui-react-grids";
import { IgrGrid, IgrColumn } from "igniteui-react-grids";
import "igniteui-react-grids/grids/combined";
import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import { IgrCategoryChart, IgrCategoryChartModule } from 'igniteui-react-charts';
import {
  IgrButton,
  IgrChip,
  IgrChipModule,
  IgrComponentValueChangedEventArgs,
  IgrDialog,
  IgrIcon,
  IgrIconButton,
  IgrIconModule,
  IgrInput,
  IgrSlider,
  IgrSwitch,
  IgrToast,
  IgrToastModule,
} from "igniteui-react";
import { FinancialData } from "./FinancialData";

const mods: any[] = [IgrGridModule, IgrIconModule, IgrToastModule, IgrCategoryChartModule];
mods.forEach((m) => m.register());
const data = FinancialData.generateData(1000);
const groupingExpressions = [
  {
      dir: SortingDirection.Desc,
      fieldName: 'category',
      ignoreCase: false
  },
  {
      dir: SortingDirection.Desc,
      fieldName: 'type',
      ignoreCase: false
  },
  {
      dir: SortingDirection.Desc,
      fieldName: 'contract',
      ignoreCase: false
  }
] as any;

var trendUp = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m123-240-43-43 292-291 167 167 241-241H653v-60h227v227h-59v-123L538-321 371-488 123-240Z"/></svg>`;
var trendDown = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M653-240v-60h127L539-541 372-374 80-665l43-43 248 248 167-167 283 283v-123h59v227H653Z"/></svg>`;
var chartIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M284-277h60v-275h-60v275Zm166 0h60v-406h-60v406Zm166 0h60v-148h-60v148ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm0-600v600-600Z"/></svg>`;
var stopIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M300-660v360-360Zm-60 420v-480h480v480H240Zm60-60h360v-360H300v360Z"/></svg>`;
var updateIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M483-120q-75 0-141-28.5T226.5-226q-49.5-49-78-115T120-482q0-75 28.5-140t78-113.5Q276-784 342-812t141-28q80 0 151.5 35T758-709v-106h60v208H609v-60h105q-44-51-103.5-82T483-780q-125 0-214 85.5T180-485q0 127 88 216t215 89q125 0 211-88t86-213h60q0 150-104 255.5T483-120Zm122-197L451-469v-214h60v189l137 134-43 43Z"/></svg>`;


const negative = (rowData: any): boolean => rowData['changeP'] < 0;
const positive = (rowData: any): boolean => rowData['changeP'] > 0;
const changeNegative = (rowData: any): boolean => rowData['changeP'] < 0 && rowData['changeP'] > -1;
const changePositive = (rowData: any): boolean => rowData['changeP'] > 0 && rowData['changeP'] < 1;
const strongPositive = (rowData: any): boolean => rowData['changeP'] >= 1;
const strongNegative = (rowData: any): boolean => rowData['changeP'] <= -1;
const trends = {
  changeNeg: changeNegative,
  changePos: changePositive,
  negative: negative,
  positive: positive,
  strongNegative: strongNegative,
  strongPositive: strongPositive
};

const trendsChange = {
  changeNeg2: changeNegative,
  changePos2: changePositive,
  strongNegative2: strongNegative,
  strongPositive2: strongPositive
};
export default function Sample() {
  const gridRef = useRef<IgrGrid>(null);

function priceTemplate(ctx: {dataContext: IgrCellTemplateContext}) {
  const cell = ctx.dataContext.cell;
  const rowData = gridRef.current.getRowData(cell.id.rowID);
  const icon = trends.positive(rowData) ? "trending_up" : "trending_down";
  const value = cell.value.toFixed(4);
  return <div className="finjs-icons">
  <span>${value}</span>
  <IgrIcon name={icon} collection="material"></IgrIcon>
  </div>
}

function chartBtnTemplate(ctx: {dataContext: IgrCellTemplateContext}) {
  const cell = ctx.dataContext.cell;
  const rowData = gridRef.current.getRowData(cell.id.rowID);
  return <span onClick={e => openDialogForRow(e, rowData)}><IgrIcon name="insert_chart" collection="material" variant="contained" className="size-small">
  </IgrIcon></span>
}

const iconForUpdate = useRef<IgrIcon>(null);
const iconForStop = useRef<IgrIcon>(null);
const iconForChart = useRef<IgrIcon>(null);

const startButton = useRef<IgrButton>(null);
const stopButton = useRef<IgrButton>(null);
const chartButton = useRef<IgrButton>(null);

const chartRef = useRef<IgrCategoryChart>(null);
const dialogRef = useRef<IgrDialog>(null);
const toastRef = useRef<IgrToast>(null);

useEffect(() => {
  if (iconForUpdate?.current) {
    iconForUpdate.current.registerIconFromText(
      "update",
      updateIcon,
      "material"
    );
  }
  if (iconForStop?.current) {
    iconForStop.current.registerIconFromText(
      "stop",
      stopIcon,
      "material"
    );
  }
  if (iconForChart?.current) {
    iconForChart.current.registerIconFromText(
      "insert_chart",
      chartIcon,
      "material"
    );

    iconForChart.current.registerIconFromText(
      "trending_up",
      trendUp,
      "material"
    );

    iconForChart.current.registerIconFromText(
      "trending_down",
      trendDown,
      "material"
    );
  }
}, []);


const groupingEnabled = true;
const toolbarEnabled = true;
const [recordsCount, setRecordsCount] = useState(1000)
const [frequency, setFrequency] = useState(500);
const [timer, setTimer] = useState(null);

function startUpdate() {
  const timer = setInterval(() => {
      gridRef.current.data = FinancialData.updateAllPrices(data);
  }, frequency);
  setTimer(timer);
  startButton.current.disabled = true;
  stopButton.current.disabled = false;
  chartButton.current.disabled = true;
}

function stopUpdate() {
  clearInterval(timer);
  startButton.current.disabled = false;
  chartButton.current.disabled = false;
  stopButton.current.disabled = true;
}

function openDialogForSelected() {
  const chart =  chartRef.current;
  const chartData = gridRef.current.selectedRows.map(x => gridRef.current.getRowData(x));
  if (chartData && chartData.length > 0) {
      chart.dataSource = chartData;
      chart.includedProperties = ['price', 'country'];
      setLabelIntervalAndAngle();
      setChartConfig('Countries', 'Prices (USD)', 'Data Chart with prices by Category and Country');
      const chartDialog = dialogRef.current;
      chartDialog.show();
      chart.dataSource = chartData;
  } else {
      const toast = toastRef.current;
      toast.show();
  }
}

function setChartConfig(xAsis: string, yAxis: string, title: string): void {
  // update label interval and angle based on data
  setLabelIntervalAndAngle();
  const chart =  chartRef.current;
  chart.xAxisTitle = xAsis;
  chart.yAxisTitle = yAxis;
  chart.chartTitle = title;
}

function setLabelIntervalAndAngle(): void {
  const chart =  chartRef.current;
  const intervalSet = chart.dataSource.length;
  if (intervalSet < 10) {
      chart.xAxisLabelAngle = 0;
      chart.xAxisInterval = 1;
  } else if (intervalSet < 15) {
      chart.xAxisLabelAngle = 30;
      chart.xAxisInterval = 1;
  } else if (intervalSet < 40) {
      chart.xAxisLabelAngle = 90;
      chart.xAxisInterval = 1;
  } else if (intervalSet < 100) {
      chart.xAxisLabelAngle = 90;
      chart.xAxisInterval = 3;
  } else if (intervalSet < 200) {
     chart.xAxisLabelAngle = 90;
      chart.xAxisInterval = 5;
  } else if (intervalSet < 400) {
      chart.xAxisLabelAngle = 90;
      chart.xAxisInterval = 7;
  } else if (intervalSet > 400) {
      chart.xAxisLabelAngle = 90;
      chart.xAxisInterval = 10;
  }
  chart.yAxisAbbreviateLargeNumbers = true;
}


function openDialogForRow(e: any, rowData: any) {
  const chart =  chartRef.current;
  const chartData = gridRef.current.data.filter(item => item.region === rowData.region &&
      item.category === rowData.category);
  chart.chartTitle = 'Data Chart with prices of ' + rowData.category + ' in ' + rowData.region + ' Region';

  chart.dataSource = chartData;
  chart.includedProperties = ['price', 'country'];
  setLabelIntervalAndAngle();
  setChartConfig('Countries', 'Prices (USD)', 'Data Chart with prices of ' + rowData.category + ' in ' + rowData.region + ' Region');
  const chartDialog = dialogRef.current;
  chartDialog.show();
}

  return (
    <div className="container sample">
        <div className="controls-holder">
        <div className="switches">
          <div className="switch-control-item">
            <IgrSwitch checked={groupingEnabled} onChange={e => {
              if (e.detail.checked) {
                gridRef.current.groupingExpressions = groupingExpressions;
              } else {
                gridRef.current.groupingExpressions = [];
              }
            }}><span key="switch">Grouped</span></IgrSwitch>
          </div>
          <div className="switch-control-item">
            <IgrSwitch checked={toolbarEnabled} onChange={e => {
              const tbar = document.getElementsByTagName("igc-grid-toolbar")[0];
              (tbar as any).hidden = !e.detail.checked;
            }}><span key="switch2">Toolbar</span></IgrSwitch>
          </div>
          <div className="control-item">
            <label id="recordsLabel">Records: <span>{recordsCount}</span></label>
            <IgrSlider className="finjs-slider" value={1000} min={0} max={10000} step={100} onChange={e => {
              setRecordsCount(e.detail);
            }}></IgrSlider>
          </div>
          <div className="control-item">
            <label id="frequencyLabel" >Frequency:<span id="slider-freq-value">{frequency}</span></label>
            <IgrSlider className="finjs-slider" value={500} min={100} max={3000} step={10}  onChange={e => {
              setFrequency(e.detail);
            }}></IgrSlider>
          </div>
        </div>
        <div className="control-item finjs-play-controls">
          <IgrButton variant="outlined" ref={startButton} onClick={e => startUpdate()}>
            <span key='content'>
            <IgrIcon name="update" ref={iconForUpdate} collection="material"></IgrIcon>
            LIVE ALL PRICES
            </span>
          </IgrButton>
          <IgrButton variant="outlined" disabled={true} ref={stopButton} onClick={e => stopUpdate()}>
            <span key='content2'>
            <IgrIcon name="stop" ref={iconForStop} collection="material"></IgrIcon>
            Stop
            </span>
          </IgrButton>
          <IgrButton variant="outlined" ref={chartButton} onClick={e => openDialogForSelected()}>
            <span key='content3'>
            <IgrIcon name="insert_chart" ref={iconForChart}  collection="material"></IgrIcon>
            Chart
            </span>
          </IgrButton>
        </div>
      </div>
      <div className="container vertical">
        <IgrGrid className="gridSize" ref={gridRef} autoGenerate={false} data={data} rowSelection="multiple" primaryKey="id" hideGroupedColumns={true}
          allowFiltering={true} filterMode="excelStyleFilter" groupingExpressions={groupingExpressions}>
        <IgrGridToolbar>
            <IgrGridToolbarActions>
              <IgrGridToolbarHiding></IgrGridToolbarHiding>
              <IgrGridToolbarPinning></IgrGridToolbarPinning>
              <IgrGridToolbarExporter></IgrGridToolbarExporter>
            </IgrGridToolbarActions>
          </IgrGridToolbar>
          <IgrColumn field="id" header="Id" dataType="number" sortable={true} editable={true} resizable={true}>
          </IgrColumn>
          <IgrColumn field="category" header="Category" width="120px" dataType="string" sortable={true}
            editable={true} resizable={true}>
          </IgrColumn>
          <IgrColumn field="type" header="Type" width="100px" dataType="string" sortable={true} editable={true}
            resizable={true}>
          </IgrColumn>
          <IgrColumn field="contract" header="Contract" width="110px" dataType="string" sortable={true}
            editable={true} groupable={true}>
          </IgrColumn>
          <IgrColumn field="settlement" width="100px" header="Settlement" dataType="string" sortable={true}
            editable={true} resizable={true}>
          </IgrColumn>
          <IgrColumn field="country" header="Country" width="100px" dataType="string" sortable={true} editable={true}
            resizable={true}>
          </IgrColumn>
          <IgrColumn field="region" width="100px" header="Region" dataType="string" sortable={true} editable={true}>
          </IgrColumn>
          <IgrColumn field="lastUpdated" width="120px" header="Last Updated" dataType="date" sortable={true}
            editable={true} filterable={true}>
          </IgrColumn>
          <IgrColumn field="openPrice" width="120px" header="Open Price" dataType="currency" sortable={true}
            editable={true} filterable={true}>
          </IgrColumn>
          <IgrColumn field="price" id="price" header="Price" width="120px" dataType="currency" sortable={true}
            editable={true} filterable={true} bodyTemplate={priceTemplate} cellClasses={trends}>
          </IgrColumn>
          <IgrColumn id="chart" field="Chart" header="Chart" width="60px" bodyTemplate={chartBtnTemplate}>
          </IgrColumn>
          <IgrColumn field="change" id="change" header="Change" width="120px" dataType="number" sortable={true}
            editable={true} filterable={true} cellClasses={trendsChange}>
          </IgrColumn>
          <IgrColumn field="changeP" id="changeP" header="Change %" width="120px" dataType="percent" sortable={true}
            editable={true} filterable={true} cellClasses={trendsChange}>
          </IgrColumn>
          <IgrColumn field="buy" header="Buy" width="110px" dataType="currency" sortable={true} filterable={true}>
          </IgrColumn>
          <IgrColumn field="sell" header="Sell" width="110px" dataType="currency" sortable={true} filterable={true}>
          </IgrColumn>
          <IgrColumn field="spread" header="Spread" width="110px" dataType="number" sortable={true} filterable={true}>
          </IgrColumn>
          <IgrColumn field="volume" header="Volume" width="110px" dataType="number" sortable={true} filterable={true}>
          </IgrColumn>
          <IgrColumn field="highD" header="highD" width="110px" dataType="currency" sortable={true} filterable={true}>
          </IgrColumn>
          <IgrColumn field="lowD" header="lowD" width="110px" dataType="currency" sortable={true} filterable={true}>
          </IgrColumn>
          <IgrColumn field="highY" header="highY" width="110px" dataType="currency" sortable={true} filterable={true}>
          </IgrColumn>
          <IgrColumn field="lowY" header="lowY" width="110px" dataType="currency" sortable={true} filterable={true}>
          </IgrColumn>
          <IgrColumn field="startY" header="startY" width="110px" dataType="currency" sortable={true}
            filterable={true}>
          </IgrColumn>
          <IgrColumn field="indGrou" width="100px" filterable={false}>
          </IgrColumn>
          <IgrColumn field="indSect" width="120px" filterable={false}>
          </IgrColumn>
          <IgrColumn field="indSubg" width="100px" filterable={false}>
          </IgrColumn>
          <IgrColumn field="secType" width="90px" filterable={false}>
          </IgrColumn>
          <IgrColumn field="issuerN" width="170px" filterable={false}>
          </IgrColumn>
          <IgrColumn field="moodys" width="60px" filterable={false}>
          </IgrColumn>
          <IgrColumn field="fitch" width="60px" filterable={false}>
          </IgrColumn>
          <IgrColumn field="dbrs" width="60px" filterable={false}>
          </IgrColumn>
          <IgrColumn field="collatT" width="90px" filterable={false}>
          </IgrColumn>
          <IgrColumn field="curncy" width="60px" filterable={false}>
          </IgrColumn>
          <IgrColumn field="security" width="120px" filterable={false}>
          </IgrColumn>
          <IgrColumn field="sector" width="80px" filterable={false}>
          </IgrColumn>
          <IgrColumn field="cusip" width="100px" filterable={false}>
          </IgrColumn>
          <IgrColumn field="ticker" width="60px" filterable={false}>
          </IgrColumn>
          <IgrColumn field="cpn" width="80px" filterable={false}>
          </IgrColumn>
          <IgrColumn field="maturity" width="120px" filterable={false}>
          </IgrColumn>
          <IgrColumn field="krD_3YR" width="110px" filterable={false}>
          </IgrColumn>
          <IgrColumn field="zV_SPREAD" width="90px" filterable={false}>
          </IgrColumn>
          <IgrColumn field="kRD_5YR" width="50px" filterable={false}>
          </IgrColumn>
          <IgrColumn field="kRD_1YR" width="80px" filterable={false}>
          </IgrColumn>
        </IgrGrid>
      </div>
      <IgrDialog title="Chart" ref={dialogRef}>
      <IgrCategoryChart ref={chartRef} key="chart" width="500px" chartType="column" xAxisInterval="20" xAxisLabelAngle="90"
        height="400px">
      </IgrCategoryChart>
    </IgrDialog>
    <IgrToast ref={toastRef} className="toast"><span key="toast">Please select some rows first!</span></IgrToast>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample />);
