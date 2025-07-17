import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { RemoteService } from './RemoteService'
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { IgrSortingExpressionEventArgs, IgrFilteringExpressionsTreeEventArgs } from 'igniteui-react-grids';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const RemoteFilteringGrid = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const fetchData = async (filterExpressions: any = null, sortExpressions: any[] = []) => {
    try {
      setIsLoading(true);
      const result = await RemoteService.getData(filterExpressions, sortExpressions);
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSortingExpressionsChange = (event: IgrSortingExpressionEventArgs) => {
    const sortExpressions = event.detail;
    
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      fetchData(null, sortExpressions);
    }, 300);
  };

  const handleFilteringExpressionsTreeChange = (event: IgrFilteringExpressionsTreeEventArgs) => {
    const filterExpressions = event.detail;
    
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      fetchData(filterExpressions, []);
    }, 500);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container sample ig-typography">
      <h3>Remote Filtering & Sorting Grid</h3>
      <IgrGrid 
        autoGenerate={false} 
        data={data}
        isLoading={isLoading}
        onSortingExpressionsChange={handleSortingExpressionsChange}
        onFilteringExpressionsTreeChange={handleFilteringExpressionsTreeChange}
        allowFiltering={true}
      >
        <IgrColumn field="ProductID" header="Product ID" sortable={true} filterable={true} dataType="number" />
        <IgrColumn field="ProductName" header="Product Name" sortable={true} filterable={true} dataType="string" />
        <IgrColumn field="SupplierID" header="Supplier ID" sortable={true} filterable={true} dataType="number" />
        <IgrColumn field="CategoryID" header="Category ID" sortable={true} filterable={true} dataType="number" />
        <IgrColumn field="QuantityPerUnit" header="Quantity Per Unit" sortable={true} filterable={true} dataType="string" />
        <IgrColumn field="UnitPrice" header="Unit Price" sortable={true} filterable={true} dataType="number" />
        <IgrColumn field="UnitsInStock" header="Units In Stock" sortable={true} filterable={true} dataType="number" />
        <IgrColumn field="UnitsOnOrder" header="Units On Order" sortable={true} filterable={true} dataType="number" />
        <IgrColumn field="ReorderLevel" header="Reorder Level" sortable={true} filterable={true} dataType="number" />
        <IgrColumn field="Discontinued" header="Discontinued" sortable={true} filterable={true} dataType="boolean" />
      </IgrGrid>
    </div>
  );
};

// rendering above function to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RemoteFilteringGrid />);

export default RemoteFilteringGrid;
