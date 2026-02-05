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

const formatter = new Intl.NumberFormat('en-EN', {
  style: 'currency',
  currency: 'EUR'
});

// Define cellTemplate functions outside component
const priceCellTemplate = (params: any) => {
  const span = document.createElement('span');
  span.textContent = formatter.format(params.value);
  return span;
};

const totalCellTemplate = (params: any) => {
  const span = document.createElement('span');
  span.textContent = formatter.format(params.value);
  return span;
};

const ratingCellTemplate = (params: any) => {
  const rating = document.createElement('igc-rating');
  rating.setAttribute('readonly', '');
  rating.setAttribute('step', '0.01');
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
        <igc-grid-lite ref={gridRef} id="grid-lite">
          <igc-grid-lite-column field="name" header="Product Name"></igc-grid-lite-column>
          <igc-grid-lite-column field="price" header="Price" data-type="number" cellTemplate={priceCellTemplate}></igc-grid-lite-column>
          <igc-grid-lite-column field="sold" data-type="number" header="Units sold"></igc-grid-lite-column>
          <igc-grid-lite-column field="total" header="Total sold" cellTemplate={totalCellTemplate}></igc-grid-lite-column>
          <igc-grid-lite-column field="rating" data-type="number" header="Customer rating" cellTemplate={ratingCellTemplate}></igc-grid-lite-column>
        </igc-grid-lite>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
