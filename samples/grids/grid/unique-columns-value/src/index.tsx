import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { RemoteService } from './RemoteService'
import { IgrGrid, IgrColumn, IgrFilteringExpressionsTree } from 'igniteui-react-grids';
import { IgrSortingExpressionEventArgs, IgrFilteringExpressionsTreeEventArgs } from 'igniteui-react-grids';
import { IgrFilteringStrategy } from 'igniteui-react-grids';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const RemoteFilteringGrid = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const debounceRef = useRef<any>(null);

  // Initialize the filtering strategy for RemoteService
  useEffect(() => {
    RemoteService._filteringStrategy = new IgrFilteringStrategy();
  }, []);

  const fetchData = (filterExpressions: any = null, sortExpressions: any[] = []) => {
    setIsLoading(true);
    
    RemoteService.getData(filterExpressions, sortExpressions)
      .then(result => {
        setData(result);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
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

  const columnValuesStrategy = (column: IgrColumn, columnExpTree: IgrFilteringExpressionsTree, done: (values: any[]) => void) => {
    RemoteService.getColumnData(column, columnExpTree, done);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container sample ig-typography">
      <h3>Remote Filtering & Sorting Grid with Unique Column Values</h3>
      <div style={{ marginBottom: '10px', fontSize: '14px', color: '#666' }}>
        This sample demonstrates remote filtering and sorting. The uniqueColumnValuesStrategy 
        is commented out as it's a future feature from the Infragistics package.
      </div>
      <IgrGrid 
        autoGenerate={false} 
        data={data}
        isLoading={isLoading}
        onSortingExpressionsChange={handleSortingExpressionsChange}
        onFilteringExpressionsTreeChange={handleFilteringExpressionsTreeChange}
        allowFiltering={true}
        // TODO: Uncomment when uniqueColumnValuesStrategy becomes available
        // uniqueColumnValuesStrategy={columnValuesStrategy}
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
