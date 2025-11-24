import React from 'react';
import ReactDOM from 'react-dom/client';
import { GridLiteDataService } from './GridLiteDataService';

// Import the web component
import { IgcGridLite } from 'igniteui-grid-lite';
import { 
  defineComponents,
  IgcButtonComponent
} from 'igniteui-webcomponents';

import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";

// Register components
IgcGridLite.register();
defineComponents(IgcButtonComponent);

export default class Sample extends React.Component<any, any> {
  private dataService: GridLiteDataService;
  private gridRef: React.RefObject<any>;
  private showingProducts = true;

  constructor(props: any) {
    super(props);
    this.dataService = new GridLiteDataService();
    this.gridRef = React.createRef();
    this.switchData = this.switchData.bind(this);
  }

  componentDidMount() {
    if (this.gridRef.current) {
      this.gridRef.current.data = this.dataService.generateProducts(50);
      
      window.addEventListener('error', (e) => {
        if (e.message === 'ResizeObserver loop completed with undelivered notifications.') {
          e.stopImmediatePropagation();
        }
      });
    }
  }

  private switchData() {
    if (this.gridRef.current) {
      this.gridRef.current.columns = [];
      
      if (this.showingProducts) {
        this.gridRef.current.data = this.dataService.generateUsers(50);
        this.showingProducts = false;
      } else {
        this.gridRef.current.data = this.dataService.generateProducts(50);
        this.showingProducts = true;
      }
    }
  }

  public render(): JSX.Element {
    return (
      <div className="container sample ig-typography">
        <div className="controls-wrapper">
          <button className="sample-button" onClick={this.switchData}>Switch Data</button>
        </div>
        <div className="grid-lite-wrapper">
          <igc-grid-lite auto-generate="true" ref={this.gridRef} id="grid-lite"></igc-grid-lite>
        </div>
      </div>
    );
  }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
