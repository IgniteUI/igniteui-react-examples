import React from 'react';
import ReactDOM from 'react-dom/client';
import { GridLiteDataService, ProductInfo } from './GridLiteDataService';
import './GridLiteStylingCustomTheme.css';

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

  constructor(props: any) {
    super(props);
    this.dataService = new GridLiteDataService();
    this.gridRef = React.createRef();
  }

  componentDidMount() {
    if (this.gridRef.current) {
      const data: ProductInfo[] = this.dataService.generateProducts(50);
      
      const columns = [
        { 
          key: 'name', 
          headerText: 'Product', 
          sort: true, 
          filter: true 
        },
        {
          key: 'price',
          headerText: 'Price',
          sort: true,
          filter: true,
          type: 'number'
        },
        {
          key: 'sold',
          headerText: 'Sold',
          sort: true,
          filter: true,
          type: 'number'
        },
        {
          key: 'total',
          headerText: 'Total',
          sort: true,
          filter: true,
          type: 'number'
        },
        {
          key: 'rating',
          headerText: 'Rating',
          type: 'number',
          sort: true,
          filter: true,
          cellTemplate: (params: any) => {
            const rating = document.createElement('igc-rating');
            rating.setAttribute('readonly', '');
            rating.setAttribute('value', params.value.toString());
            return rating;
          }
        }
      ];

      this.gridRef.current.columns = columns;
      this.gridRef.current.data = data;
    }
  }

  public render(): JSX.Element {
    return (
      <div className="container sample ig-typography">
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
