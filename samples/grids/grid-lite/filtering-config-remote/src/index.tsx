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

export default class Sample extends React.Component<any, any> {
  private dataService: GridLiteDataService;
  private gridRef: React.RefObject<any>;
  private allData: User[] = [];

  constructor(props: any) {
    super(props);
    this.dataService = new GridLiteDataService();
    this.gridRef = React.createRef();
    this.allData = this.dataService.generateUsers(100);
    this.state = { queryString: '' };
  }

  componentDidMount() {
    if (this.gridRef.current) {
      const config = {
        filter: async ({ data, grid }: any) => {
          this.buildUri(grid.filterExpressions);
          await new Promise((resolve) => setTimeout(resolve, 250));
          return data;
        },
      };

      this.gridRef.current.data = this.allData;
      this.gridRef.current.dataPipelineConfiguration = config;
    }
  }

  protected mapExpressions(arr: any[]) {
    return arr
      .map(({ searchTerm, criteria, condition }: any, idx: number) => {
        const c = condition;
        return idx < 1
          ? `${c.name}("${searchTerm}")`
          : `${criteria?.toUpperCase()} ${c.name}("${searchTerm}")`;
      })
      .join(' ');
  }

  protected buildUri(state: any[]) {
    const out: string[] = [];
    const qs = groupBy(state, 'key');
    for (const [key, exprs] of Object.entries(qs)) {
      out.push(`${key}(${this.mapExpressions(exprs)})`);
    }
    this.setState({ queryString: `GET: /data?filter=${out.join('&')}` });
  }

  public render(): JSX.Element {
    return (
      <div className="container sample ig-typography">
        <div className="info-panel">
          <div id="queryString">
            <p><code>{this.state.queryString}</code></p>
          </div>
        </div>
        <div className="grid-lite-wrapper">
          <igc-grid-lite ref={this.gridRef} id="grid-lite">
            <igc-grid-lite-column field="firstName" header="First name" filterable></igc-grid-lite-column>
            <igc-grid-lite-column field="lastName" header="Last name" filterable></igc-grid-lite-column>
            <igc-grid-lite-column field="age" header="Age" filterable data-type="number"></igc-grid-lite-column>
            <igc-grid-lite-column field="email" header="Email"></igc-grid-lite-column>
          </igc-grid-lite>
        </div>
      </div>
    );
  }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
