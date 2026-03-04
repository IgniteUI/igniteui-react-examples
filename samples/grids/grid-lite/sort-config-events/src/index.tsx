import React, { useState, useCallback, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { GridLiteDataService, ProductInfo } from './GridLiteDataService';

import { IgrGridLite, IgrGridLiteColumn } from 'igniteui-react/grid-lite';
import { IgrRating } from 'igniteui-react';
import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";

const getTimeStamp = (): string => `[${new Date().toLocaleTimeString()}]`;

// Define cellTemplate function outside component
const ratingCellTemplate = (ctx: any) => {
  return (
    <IgrRating readonly={true} step={0.01} value={ctx.value}></IgrRating>
  );
};

export default function GridLiteSortConfigEvents() {
  const gridRef = useRef<IgrGridLite>(null);
  const logRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<ProductInfo[]>([]);
  const [log, setLog] = useState<string[]>([]);

  const updateLog = useCallback((message: string) => {
    setLog(prevLog => {
      const newLog = [...prevLog];
      if (newLog.length > 10) {
        newLog.shift();
      }
      newLog.push(message);
      return newLog;
    });
  }, []);

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [log]);

  const handleSorting = useCallback((event: CustomEvent<any>) => {
    const { detail } = event;
    const allowedColumns = ['price', 'total', 'sold'];
    
    if (!allowedColumns.includes(detail.key)) {
      event.preventDefault();
      updateLog(
        `${getTimeStamp()} :: Event 'sorting' :: Sort operation was prevented for column '${detail.key}'`
      );
    } else {
      updateLog(
        `${getTimeStamp()} :: Event 'sorting' :: Column '${detail.key}' is being sorted with expression: ${JSON.stringify(detail)}`
      );
    }
  }, [updateLog]);

  const handleSorted = useCallback((event: CustomEvent<any>) => {
    const { detail } = event;
    updateLog(
      `${getTimeStamp()} :: Event 'sorted' :: Column '${detail.key}' was sorted with expression: ${JSON.stringify(detail)}`
    );
  }, [updateLog]);

  useEffect(() => {
    const dataService = new GridLiteDataService();
    setData(dataService.generateProducts(100));
  }, []);

  return (
    <div className="container sample ig-typography">
      <div className="grid-lite-wrapper">
        <IgrGridLite ref={gridRef} id="grid-lite" data={data} onSorting={handleSorting} onSorted={handleSorted}>
          <IgrGridLiteColumn field="name" header="Name" sortable={true}></IgrGridLiteColumn>
          <IgrGridLiteColumn field="price" dataType="number" header="Price" sortable={true}></IgrGridLiteColumn>
          <IgrGridLiteColumn field="rating" dataType="number" header="Rating" sortable={true} cellTemplate={ratingCellTemplate}></IgrGridLiteColumn>
          <IgrGridLiteColumn field="sold" dataType="number" header="Sold" sortable={true}></IgrGridLiteColumn>
          <IgrGridLiteColumn field="total" dataType="number" header="Total" sortable={true}></IgrGridLiteColumn>
        </IgrGridLite>
        <div ref={logRef} className="log" id="log">
          {log.map((entry, index) => (
            <p key={index}><code>{entry}</code></p>
          ))}
        </div>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<GridLiteSortConfigEvents/>);
