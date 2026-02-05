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

// Define cellTemplate function outside component
const ratingCellTemplate = (params: any) => {
  const rating = document.createElement('igc-rating');
  rating.setAttribute('readonly', '');
  rating.setAttribute('value', params.value.toString());
  return rating;
};

export default function Sample() {
  const gridRef = React.useRef<any>(null);

  React.useEffect(() => {
    if (gridRef.current) {
      const dataService = new GridLiteDataService();
      const data: ProductInfo[] = dataService.generateProducts(50);
      gridRef.current.data = data;
    }
  }, []);

  return (
    <div className="container sample ig-typography">
      <div className="grid-lite-wrapper">
        <igc-grid-lite ref={gridRef} id="grid-lite" className="custom-styled">
          <igc-grid-lite-column field="name" header="Product" sortable filterable></igc-grid-lite-column>
          <igc-grid-lite-column field="price" header="Price" sortable filterable data-type="number"></igc-grid-lite-column>
          <igc-grid-lite-column field="sold" header="Sold" sortable filterable data-type="number"></igc-grid-lite-column>
          <igc-grid-lite-column field="total" header="Total" sortable filterable data-type="number"></igc-grid-lite-column>
          <igc-grid-lite-column field="rating" header="Rating" data-type="number" sortable filterable cellTemplate={ratingCellTemplate}></igc-grid-lite-column>
        </igc-grid-lite>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
