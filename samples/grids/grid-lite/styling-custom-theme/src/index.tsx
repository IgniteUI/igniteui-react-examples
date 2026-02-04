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
import "./index.scss";

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
      
      // Set cellTemplate for rating column
      const ratingCol = this.gridRef.current.columns.find((c: any) => c.field === 'rating');
      if (ratingCol) {
        ratingCol.cellTemplate = (params: any) => {
          const rating = document.createElement('igc-rating');
          rating.setAttribute('readonly', '');
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
          <igc-grid-lite ref={this.gridRef} id="grid-lite" className="custom-styled">
            <igc-grid-lite-column field="name" header="Product" sortable filterable></igc-grid-lite-column>
            <igc-grid-lite-column field="price" header="Price" sortable filterable data-type="number"></igc-grid-lite-column>
            <igc-grid-lite-column field="sold" header="Sold" sortable filterable data-type="number"></igc-grid-lite-column>
            <igc-grid-lite-column field="total" header="Total" sortable filterable data-type="number"></igc-grid-lite-column>
            <igc-grid-lite-column field="rating" header="Rating" data-type="number" sortable filterable></igc-grid-lite-column>
          </igc-grid-lite>
        </div>
      </div>
    );
  }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
