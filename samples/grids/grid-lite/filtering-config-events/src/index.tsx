import React from 'react';
import ReactDOM from 'react-dom/client';
import { GridLiteDataService, User } from './GridLiteDataService';

// Import the web component
import { IgcGridLite } from 'igniteui-grid-lite';

import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";

// Register components
IgcGridLite.register();

const getTime = () => `[${new Date().toLocaleTimeString()}]`;

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

  React.useEffect(() => {
    if (gridRef.current) {
      const dataService = new GridLiteDataService();
      const data: User[] = dataService.generateUsers(50);
      gridRef.current.data = data;

      // Listen to filter events
      const handleFiltering = (e: any) => {
        const { expressions, type } = e.detail;
        updateLog(`${getTime()} :: Event \`${e.type}\` :: Filter operation of type '${type}' for column '${expressions[0].key}'`);
      };

      const handleFiltered = (e: any) => {
        updateLog(`${getTime()} :: Event \`${e.type}\` for column '${e.detail.key}'`);
      };

      gridRef.current.addEventListener('filtering', handleFiltering);
      gridRef.current.addEventListener('filtered', handleFiltered);

      return () => {
        if (gridRef.current) {
          gridRef.current.removeEventListener('filtering', handleFiltering);
          gridRef.current.removeEventListener('filtered', handleFiltered);
        }
      };
    }
  }, [updateLog]);

  const logContent = log
    .map(entry => `<p><code>${entry}</code></p>`)
    .join('');

  return (
    <div className="container sample ig-typography">
      <div className="grid-lite-wrapper">
        <igc-grid-lite ref={gridRef} id="grid-lite">
          <igc-grid-lite-column field="firstName" header="First name" filterable></igc-grid-lite-column>
          <igc-grid-lite-column field="lastName" header="Last name" filterable></igc-grid-lite-column>
          <igc-grid-lite-column field="age" header="Age" filterable data-type="number"></igc-grid-lite-column>
          <igc-grid-lite-column field="email" header="Email" filterable></igc-grid-lite-column>
        </igc-grid-lite>
        <div ref={logRef} className="log" id="log" dangerouslySetInnerHTML={{ __html: logContent }}></div>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
