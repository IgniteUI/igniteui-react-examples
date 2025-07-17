import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { RemoteService } from './RemoteService';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const RemoteVirtualizationGrid = () => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (skip: number = 0, take: number = 50) => {
    setIsLoading(true);
    const result = await RemoteService.getData(skip, take);
    setData(result);
    setIsLoading(false);
  };

  const handleDataPreLoad = (event: any) => {
    const { startIndex, chunkSize } = event.detail;
    fetchData(startIndex, chunkSize);
  };

  useEffect(() => {
    fetchData(); // initial load
  }, []);

  return (
    <div className="container sample ig-typography">
      <h3>Remote Virtualization Grid</h3>
      <IgrGrid
        autoGenerate={false}
        data={data}
        isLoading={isLoading}
        height="600px"
        width="100%"
        primaryKey="ProductID"
        onDataPreLoad={handleDataPreLoad}
      >
        <IgrColumn field="ProductID" header="Product ID" dataType="number" />
        <IgrColumn field="ProductName" header="Product Name" dataType="string" />
        <IgrColumn field="UnitPrice" header="Unit Price" dataType="number" />
        <IgrColumn field="UnitsInStock" header="Units In Stock" dataType="number" />
        <IgrColumn field="QuantityPerUnit" header="Quantity Per Unit" dataType="string" />
        <IgrColumn field="ReorderLevel" header="Reorder Level" dataType="number" />
      </IgrGrid>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RemoteVirtualizationGrid />);
