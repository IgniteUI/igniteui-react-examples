import React from 'react';
import ReactDOM from 'react-dom/client';
import { GridLiteDataService, User } from './GridLiteDataService';

// Import the web component
import { IgcGridLite } from 'igniteui-grid-lite';

import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";

// Register components
IgcGridLite.register();

export default class Sample extends React.Component<any, any> {
  private dataService: GridLiteDataService;
  private gridRef: React.RefObject<any>;
  private logRef: React.RefObject<HTMLDivElement>;
  private log: string[] = [];

  constructor(props: any) {
    super(props);
    this.dataService = new GridLiteDataService();
    this.gridRef = React.createRef();
    this.logRef = React.createRef<HTMLDivElement>();
    this.state = { logContent: '' };
  }

  get time() {
    return `[${new Date().toLocaleTimeString()}]`;
  }

  componentDidMount() {
    if (this.gridRef.current) {
      const data: User[] = this.dataService.generateUsers(50);
      
      const columns = [
        { key: 'firstName', headerText: 'First name', filter: true },
        { key: 'lastName', headerText: 'Last name', filter: true },
        { key: 'age', headerText: 'Age', filter: true, type: 'number' },
        { key: 'email', headerText: 'Email', filter: true }
      ];

      this.gridRef.current.columns = columns;
      this.gridRef.current.data = data;

      // Listen to filter events
      this.gridRef.current.addEventListener('filtering', (e: any) => {
        const { expressions, type } = e.detail;
        this.updateLog(`${this.time} :: Event \`${e.type}\` :: Filter operation of type '${type}' for column '${expressions[0].key}'`);
      });
      this.gridRef.current.addEventListener('filtered', (e: any) => {
        this.updateLog(`${this.time} :: Event \`${e.type}\` for column '${e.detail.key}'`);
      });
    }
  }

  private updateLog(message: string) {
    if (this.log.length > 10) {
      this.log.shift();
    }
    this.log.push(message);
    this.renderLog();
  }

  private renderLog() {
    const logContent = this.log
      .map(entry => `<p><code>${entry}</code></p>`)
      .join('');
    this.setState({ logContent });
  }

  public render(): JSX.Element {
    return (
      <div className="container sample ig-typography">
        <div className="grid-lite-wrapper">
          <igc-grid-lite ref={this.gridRef} id="grid-lite"></igc-grid-lite>
          <div className="log" id="log" dangerouslySetInnerHTML={{ __html: this.state.logContent }}></div>
        </div>
      </div>
    );
  }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
