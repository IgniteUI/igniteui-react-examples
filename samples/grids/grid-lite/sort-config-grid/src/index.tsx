import React from 'react';
import ReactDOM from 'react-dom/client';
import { IgrSwitch } from 'igniteui-react';
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

// Define cellTemplate function outside component
const ratingCellTemplate = (params: any) => {
  const rating = document.createElement('igc-rating');
  rating.setAttribute('readonly', '');
  rating.setAttribute('step', '0.01');
  rating.setAttribute('value', params.value.toString());
  return rating;
};

export default function Sample() {
  const gridRef = React.useRef<any>(null);
  const [sortingOptions, setSortingOptions] = React.useState<any>({
    mode: 'multiple'
  });

  React.useEffect(() => {
    if (gridRef.current) {
      const dataService = new GridLiteDataService();
      const data: ProductInfo[] = dataService.generateProducts(100);
      gridRef.current.data = data;
      gridRef.current.sortingOptions = sortingOptions;
    }
  }, [sortingOptions]);

  const updateConfig = React.useCallback((prop: string, checked: boolean) => {
    if (prop === 'multiple') {
      setSortingOptions({ mode: checked ? 'multiple' : 'single' });
    }
  }, []);

  return (
    <div className="container sample ig-typography">
      <div className="controls-wrapper">
        <IgrSwitch id="multisort" checked={true} onChange={(e: any) => updateConfig('multiple', e.target.checked)}>
          Multiple Sort
        </IgrSwitch>
      </div>
      <div className="grid-lite-wrapper">
        <igc-grid-lite ref={gridRef} id="grid-lite">
          <igc-grid-lite-column field="name" header="Name" sortable></igc-grid-lite-column>
          <igc-grid-lite-column field="price" data-type="number" header="Price" sortable></igc-grid-lite-column>
          <igc-grid-lite-column field="rating" data-type="number" header="Rating" sortable cellTemplate={ratingCellTemplate}></igc-grid-lite-column>
          <igc-grid-lite-column field="sold" data-type="number" header="Sold" sortable></igc-grid-lite-column>
          <igc-grid-lite-column field="total" data-type="number" header="Total" sortable></igc-grid-lite-column>
        </igc-grid-lite>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
