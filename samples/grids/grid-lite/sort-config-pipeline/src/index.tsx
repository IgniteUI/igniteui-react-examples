import React from 'react';
import ReactDOM from 'react-dom/client';
import { GridLiteDataService, ProductInfo } from './GridLiteDataService';

// Import the web component
import { IgcGridLite } from 'igniteui-grid-lite';
import { 
  defineComponents,
  IgcRatingComponent,
  IgcCircularProgressComponent
} from 'igniteui-webcomponents';
import "igniteui-webcomponents/themes/light/bootstrap.css";

// Register components
IgcGridLite.register();
defineComponents(IgcRatingComponent, IgcCircularProgressComponent);

export default class Sample extends React.Component<any, any> {
  private dataService: GridLiteDataService;
  private gridRef: React.RefObject<any>;
  private progressRef: React.RefObject<HTMLDivElement>;

  constructor(props: any) {
    super(props);
    this.dataService = new GridLiteDataService();
    this.gridRef = React.createRef();
    this.progressRef = React.createRef();
    this.state = { queryString: '' };
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

      const dataPipelineConfiguration = {
        sort: async ({ data, grid }: any) => {
          if (this.progressRef.current) {
            this.progressRef.current.classList.add('in-operation');
          }
          const queryString = grid.sortExpressions.length
            ? this.buildUri(grid.sortExpressions)
            : '';
          this.setState({ queryString });
          
          await new Promise(resolve => setTimeout(resolve, 250));
          if (this.progressRef.current) {
            this.progressRef.current.classList.remove('in-operation');
          }
          return data;
        }
      };

      this.gridRef.current.columns = columns;
      this.gridRef.current.data = data;
      this.gridRef.current.dataPipelineConfiguration = dataPipelineConfiguration;
    }
  }

  private buildUri(state: any[]): string {
    const uri: string[] = [];
    for (const expr of state) {
      if (expr.direction === 'none') {
        continue;
      }
      uri.push(
        expr.direction === 'ascending'
          ? `asc(${expr.key})`
          : `desc(${expr.key})`
      );
    }
    return `GET: /data?sort_by=${uri.join(',')}`;
  }

  public render(): JSX.Element {
    return (
      <div className="container sample ig-typography">
        <div className="info-panel">
          <div id="progress" ref={this.progressRef} className="progress-indicator">
            <igc-circular-progress indeterminate></igc-circular-progress>
          </div>
          <div id="queryString">
            <code>{this.state.queryString}</code>
          </div>
        </div>
        <div className="grid-lite-wrapper">
          <igc-grid-lite ref={this.gridRef} id="grid-lite"></igc-grid-lite>
        </div>
      </div>
    );
  }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
