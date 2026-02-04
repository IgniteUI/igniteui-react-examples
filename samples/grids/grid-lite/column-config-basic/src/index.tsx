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

export default class Sample extends React.Component<any, any> {
  private dataService: GridLiteDataService;
  private formatter: Intl.NumberFormat;
  private gridRef: React.RefObject<any>;

  constructor(props: any) {
    super(props);
    this.dataService = new GridLiteDataService();
    this.formatter = new Intl.NumberFormat('en-EN', {
      style: 'currency',
      currency: 'EUR'
    });
    this.gridRef = React.createRef();
  }

  componentDidMount() {
    if (this.gridRef.current) {
      const data: ProductInfo[] = this.dataService.generateProducts(50);
      
      // Set cellTemplate for columns with custom rendering
      const priceCol = this.gridRef.current.columns.find((c: any) => c.field === 'price');
      if (priceCol) {
        priceCol.cellTemplate = (params: any) => {
          const span = document.createElement('span');
          span.textContent = this.formatter.format(params.value);
          return span;
        };
      }

      const totalCol = this.gridRef.current.columns.find((c: any) => c.field === 'total');
      if (totalCol) {
        totalCol.cellTemplate = (params: any) => {
          const span = document.createElement('span');
          span.textContent = this.formatter.format(params.value);
          return span;
        };
      }

      const ratingCol = this.gridRef.current.columns.find((c: any) => c.field === 'rating');
      if (ratingCol) {
        ratingCol.cellTemplate = (params: any) => {
          const rating = document.createElement('igc-rating');
          rating.setAttribute('readonly', '');
          rating.setAttribute('step', '0.01');
          rating.setAttribute('value', params.value.toString());
          return rating;
        };
      }

      this.gridRef.current.data = data;
    }
  }

  public render(): JSX.Element {
    return (
      <div className="container sample ig-typography">
        <div className="grid-lite-wrapper">
          <igc-grid-lite ref={this.gridRef} id="grid-lite">
            <igc-grid-lite-column field="name" header="Product Name"></igc-grid-lite-column>
            <igc-grid-lite-column field="price" header="Price" data-type="number"></igc-grid-lite-column>
            <igc-grid-lite-column field="sold" data-type="number" header="Units sold"></igc-grid-lite-column>
            <igc-grid-lite-column field="total" header="Total sold"></igc-grid-lite-column>
            <igc-grid-lite-column field="rating" data-type="number" header="Customer rating"></igc-grid-lite-column>
          </igc-grid-lite>
        </div>
      </div>
    );
  }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
