import { useState, useEffect, useMemo, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { GridLiteDataService, ProductInfo } from './GridLiteDataService';

import { IgrGridLite, IgrGridLiteColumn } from 'igniteui-react/grid-lite';
import { IgrRating } from 'igniteui-react';
import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";

// Define cellTemplate function outside component
const ratingCellTemplate = (ctx: any) => {
  return (
    <IgrRating readonly={true} step={0.01} value={ctx.value}></IgrRating>
  );
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

export default function GridLiteSortConfigPipeline() {
  const gridRef = useRef<any>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<ProductInfo[]>([]);
  const [queryString, setQueryString] = useState('');

  const dataPipelineConfiguration = useMemo(() => ({
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

  useEffect(() => {
    const dataService = new GridLiteDataService();
    setData(dataService.generateProducts(100));
  }, []);

  useEffect(() => {
    if (gridRef.current) {
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
        <IgrGridLite ref={gridRef} id="grid-lite" data={data}>
          <IgrGridLiteColumn field="name" header="Name" sortable={true}></IgrGridLiteColumn>
          <IgrGridLiteColumn field="price" dataType="number" header="Price" sortable={true}></IgrGridLiteColumn>
          <IgrGridLiteColumn field="rating" dataType="number" header="Rating" sortable={true} cellTemplate={ratingCellTemplate}></IgrGridLiteColumn>
          <IgrGridLiteColumn field="sold" dataType="number" header="Sold" sortable={true}></IgrGridLiteColumn>
          <IgrGridLiteColumn field="total" dataType="number" header="Total" sortable={true}></IgrGridLiteColumn>
        </IgrGridLite>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<GridLiteSortConfigPipeline/>);
