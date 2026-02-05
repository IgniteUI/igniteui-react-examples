import React from 'react';
import ReactDOM from 'react-dom/client';
import { GridLiteDataService, ProductInfo } from './GridLiteDataService';

// Import the web component
import { IgcGridLite } from 'igniteui-grid-lite';
import { 
  defineComponents,
  IgcRatingComponent
} from 'igniteui-webcomponents';
import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";

// Register components
IgcGridLite.register();
defineComponents(IgcRatingComponent);

const getTimeStamp = (): string => `[${new Date().toLocaleTimeString()}]`;

// Define cellTemplate function outside component
const ratingCellTemplate = (params: any) => {
  const rating = document.createElement('igc-rating');
  rating.setAttribute('readonly', '');
  rating.setAttribute('step', '0.01');
  rating.setAttribute('value', params.value.toString());
  return rating;
};

export default function Sample() {
  const gridRef = React.useRef<any>(null);
  const logRef = React.useRef<HTMLDivElement>(null);
  const [log, setLog] = React.useState<string[]>([]);

  const updateLog = React.useCallback((message: string) => {
    setLog(prevLog => {
      const newLog = [...prevLog];
      if (newLog.length > 10) {
        newLog.shift();
      }
      newLog.push(message);
      return newLog;
    });
  }, []);

  React.useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [log]);

  const handleSorting = React.useCallback((event: any) => {
    const { detail, type } = event;
    const allowedColumns = ['price', 'total', 'sold'];
    
    if (!allowedColumns.includes(detail.key)) {
      event.preventDefault();
      updateLog(
        `${getTimeStamp()} :: Event '${type}' :: Sort operation was prevented for column '${detail.key}'`
      );
    } else {
      updateLog(
        `${getTimeStamp()} :: Event '${type}' :: Column '${detail.key}' is being sorted with expression: ${JSON.stringify(detail)}`
      );
    }
  }, [updateLog]);

  const handleSorted = React.useCallback((event: any) => {
    const { detail, type } = event;
    updateLog(
      `${getTimeStamp()} :: Event '${type}' :: Column '${detail.key}' was sorted with expression: ${JSON.stringify(detail)}`
    );
  }, [updateLog]);

  React.useEffect(() => {
    if (gridRef.current) {
      const dataService = new GridLiteDataService();
      const data: ProductInfo[] = dataService.generateProducts(100);
      gridRef.current.data = data;

      // Listen to sorting events
      gridRef.current.addEventListener('sorting', handleSorting);
      gridRef.current.addEventListener('sorted', handleSorted);

      return () => {
        if (gridRef.current) {
          gridRef.current.removeEventListener('sorting', handleSorting);
          gridRef.current.removeEventListener('sorted', handleSorted);
        }
      };
    }
  }, [handleSorting, handleSorted]);

  const logContent = log
    .map(entry => `<p><code>${entry}</code></p>`)
    .join('');

  return (
    <div className="container sample ig-typography">
      <div className="grid-lite-wrapper">
        <igc-grid-lite ref={gridRef} id="grid-lite">
          <igc-grid-lite-column field="name" header="Name" sortable></igc-grid-lite-column>
          <igc-grid-lite-column field="price" data-type="number" header="Price" sortable></igc-grid-lite-column>
          <igc-grid-lite-column field="rating" data-type="number" header="Rating" sortable cellTemplate={ratingCellTemplate}></igc-grid-lite-column>
          <igc-grid-lite-column field="sold" data-type="number" header="Sold" sortable></igc-grid-lite-column>
          <igc-grid-lite-column field="total" data-type="number" header="Total" sortable></igc-grid-lite-column>
        </igc-grid-lite>
        <div ref={logRef} className="log" id="log" dangerouslySetInnerHTML={{ __html: logContent }}></div>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
