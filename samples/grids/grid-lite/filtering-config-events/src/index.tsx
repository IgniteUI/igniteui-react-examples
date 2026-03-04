import { useState, useCallback, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { GridLiteDataService, User } from './GridLiteDataService';

import { IgrGridLite, IgrGridLiteColumn } from 'igniteui-react/grid-lite';
import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";

const getTime = () => `[${new Date().toLocaleTimeString()}]`;

export default function GridLiteFilteringConfigEvents() {
  const logRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<User[]>([]);
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

  const handleFiltering = useCallback((event: CustomEvent<any>) => {
    const { expressions, type } = event.detail;
    updateLog(`${getTime()} :: Event \`filtering\` :: Filter operation of type '${type}' for column '${expressions[0].key}'`);
  }, [updateLog]);

  const handleFiltered = useCallback((event: CustomEvent<any>) => {
    updateLog(`${getTime()} :: Event \`filtered\` for column '${event.detail.key}'`);
  }, [updateLog]);

  useEffect(() => {
    const dataService = new GridLiteDataService();
    setData(dataService.generateUsers(50));
  }, []);

  return (
    <div className="container sample ig-typography">
      <div className="grid-lite-wrapper">
        <IgrGridLite id="grid-lite" data={data} onFiltering={handleFiltering} onFiltered={handleFiltered}>
          <IgrGridLiteColumn field="firstName" header="First name" filterable={true}></IgrGridLiteColumn>
          <IgrGridLiteColumn field="lastName" header="Last name" filterable={true}></IgrGridLiteColumn>
          <IgrGridLiteColumn field="age" header="Age" filterable={true} dataType="number"></IgrGridLiteColumn>
          <IgrGridLiteColumn field="email" header="Email" filterable={true}></IgrGridLiteColumn>
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
root.render(<GridLiteFilteringConfigEvents/>);
