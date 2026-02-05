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
import "./index.css";

// Register components
IgcGridLite.register();
defineComponents(IgcRatingComponent, IgcCircularProgressComponent);

// Define cellTemplate function outside component
const ratingCellTemplate = (params: any) => {
  const rating = document.createElement('igc-rating');
  rating.setAttribute('readonly', '');
  rating.setAttribute('step', '0.01');
  rating.setAttribute('value', params.value.toString());
  return rating;
};

const buildUri = (state: any[]): string => {
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
};

export default function Sample() {
  const gridRef = React.useRef<any>(null);
  const progressRef = React.useRef<HTMLDivElement>(null);
  const [queryString, setQueryString] = React.useState('');

  const dataPipelineConfiguration = React.useMemo(() => ({
    sort: async ({ data, grid }: any) => {
      if (progressRef.current) {
        progressRef.current.classList.add('in-operation');
      }
      const qs = grid.sortingExpressions.length
        ? buildUri(grid.sortingExpressions)
        : '';
      setQueryString(qs);
      
      await new Promise(resolve => setTimeout(resolve, 250));
      if (progressRef.current) {
        progressRef.current.classList.remove('in-operation');
      }
      return data;
    }
  }), []);

  React.useEffect(() => {
    if (gridRef.current) {
      const dataService = new GridLiteDataService();
      const data: ProductInfo[] = dataService.generateProducts(100);
      gridRef.current.data = data;
      gridRef.current.dataPipelineConfiguration = dataPipelineConfiguration;
    }
  }, [dataPipelineConfiguration]);

  return (
    <div className="container sample ig-typography">
      <div className="info-panel">
        <div id="queryString">
          <p><code>{queryString}</code></p>
        </div>
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
