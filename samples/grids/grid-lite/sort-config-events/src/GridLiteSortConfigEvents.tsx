import React from 'react';
import ReactDOM from 'react-dom/client';
import { GridLiteDataService, ProductInfo } from './GridLiteDataService';
import './GridLiteSortConfigEvents.css';

// Import the web component
import { IgcGridLite } from 'igniteui-grid-lite';
import { 
  defineComponents,
  IgcRatingComponent
} from 'igniteui-webcomponents';
import "igniteui-webcomponents/themes/light/bootstrap.css";

// Register components
IgcGridLite.register();
defineComponents(IgcRatingComponent);

export default class Sample extends React.Component<any, any> {
  private dataService: GridLiteDataService;
  private gridRef: React.RefObject<any>;
  private log: string[] = [];

  constructor(props: any) {
    super(props);
    this.dataService = new GridLiteDataService();
    this.gridRef = React.createRef();
    this.state = { logContent: '' };
    this.handleSorting = this.handleSorting.bind(this);
    this.handleSorted = this.handleSorted.bind(this);
  }

  get timeStamp(): string {
    return `[${new Date().toLocaleTimeString()}]`;
  }

  componentDidMount() {
    if (this.gridRef.current) {
      const data: ProductInfo[] = this.dataService.generateProducts(100);
      
      const columns = [
        { 
          key: 'name', 
          headerText: 'Name', 
          sort: true 
        },
        { 
          key: 'price', 
          type: 'number', 
          headerText: 'Price', 
          sort: true 
        },
        {
          key: 'rating',
          type: 'number',
          headerText: 'Rating',
          sort: true,
          cellTemplate: (params: any) => {
            const rating = document.createElement('igc-rating');
            rating.setAttribute('readonly', '');
            rating.setAttribute('step', '0.01');
            rating.setAttribute('value', params.value.toString());
            return rating;
          }
        },
        { 
          key: 'sold', 
          type: 'number', 
          headerText: 'Sold', 
          sort: true 
        },
        { 
          key: 'total', 
          type: 'number', 
          headerText: 'Total', 
          sort: true 
        }
      ];

      this.gridRef.current.columns = columns;
      this.gridRef.current.data = data;

      // Listen to sorting events
      this.gridRef.current.addEventListener('sorting', this.handleSorting);
      this.gridRef.current.addEventListener('sorted', this.handleSorted);
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

  private handleSorting(event: any) {
    const { detail, type } = event;
    const allowedColumns = ['price', 'total', 'sold'];
    
    if (!allowedColumns.includes(detail.key)) {
      event.preventDefault();
      this.updateLog(
        `${this.timeStamp} :: Event '${type}' :: Sort operation was prevented for column '${detail.key}'`
      );
    } else {
      this.updateLog(
        `${this.timeStamp} :: Event '${type}' :: Column '${detail.key}' is being sorted with expression: ${JSON.stringify(detail)}`
      );
    }
  }

  private handleSorted(event: any) {
    const { detail, type } = event;
    this.updateLog(
      `${this.timeStamp} :: Event '${type}' :: Column '${detail.key}' was sorted with expression: ${JSON.stringify(detail)}`
    );
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
