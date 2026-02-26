import React from 'react';
import ReactDOM from 'react-dom/client';
import { GridLiteDataService, User } from './GridLiteDataService';

// Import the web component
import { IgcGridLite } from 'igniteui-grid-lite';

import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";

// Register components
IgcGridLite.register();

function groupBy<T extends object>(arr: T[], key: keyof T) {
  const out: Record<string, T[]> = {};
  for (const each of arr) {
    const slot = each[key] as string;
    if (!out[slot]) {
      out[slot] = [];
    }
    out[slot].push(each);
  }
  return out;
}

const mapExpressions = (arr: any[]) => {
  return arr
    .map(({ searchTerm, criteria, condition }: any, idx: number) => {
      const c = condition;
      return idx < 1
        ? `${c.name}("${searchTerm}")`
        : `${criteria?.toUpperCase()} ${c.name}("${searchTerm}")`;
    })
    .join(' ');
};

const buildUri = (state: any[], setQueryString: (qs: string) => void) => {
  const out: string[] = [];
  const qs = groupBy(state, 'key');
  for (const [key, exprs] of Object.entries(qs)) {
    out.push(`${key}(${mapExpressions(exprs)})`);
  }
  setQueryString(`GET: /data?filter=${out.join('&')}`);
};

export default function Sample() {
  const gridRef = React.useRef<any>(null);
  const [queryString, setQueryString] = React.useState('');

  const dataPipelineConfiguration = React.useMemo(() => ({
    filter: async ({ data, grid }: any) => {
      buildUri(grid.filterExpressions, setQueryString);
      await new Promise((resolve) => setTimeout(resolve, 250));
      return data;
    },
  }), []);

  React.useEffect(() => {
    if (gridRef.current) {
      const dataService = new GridLiteDataService();
      const allData: User[] = dataService.generateUsers(100);
      gridRef.current.data = allData;
      gridRef.current.dataPipelineConfiguration = dataPipelineConfiguration;
    }
  }, [dataPipelineConfiguration]);

  return (
    <div className="container sample ig-typography">
      <div className="info-panel">
        <div id="queryString">
          <p><code>{queryString}</code></p>
        </div>
      </div>
      <div className="grid-lite-wrapper">
        <igc-grid-lite ref={gridRef} id="grid-lite">
          <igc-grid-lite-column field="firstName" header="First name" filterable></igc-grid-lite-column>
          <igc-grid-lite-column field="lastName" header="Last name" filterable></igc-grid-lite-column>
          <igc-grid-lite-column field="age" header="Age" filterable data-type="number"></igc-grid-lite-column>
          <igc-grid-lite-column field="email" header="Email"></igc-grid-lite-column>
        </igc-grid-lite>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
