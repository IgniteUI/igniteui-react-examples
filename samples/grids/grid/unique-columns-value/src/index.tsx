import React, { useEffect, useState, useRef, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import { RemoteService } from './RemoteService'
import { IgrGrid, IgrColumn, IgrFilteringExpressionsTree } from 'igniteui-react-grids';
import { IgrSortingExpressionEventArgs, IgrFilteringExpressionsTreeEventArgs } from 'igniteui-react-grids';
import { IgrFilteringStrategy } from 'igniteui-react-grids';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const DATA_URL = 'https://services.odata.org/V4/Northwind/Northwind.svc/Products';

const RemoteFilteringGrid = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentFilterExpressions, setCurrentFilterExpressions] = useState<any>(null);
  const [currentSortExpressions, setCurrentSortExpressions] = useState<any[]>([]);
  const debounceRef = useRef<any>(null);

  const remoteService = useMemo(() => new RemoteService({
    baseUrl: DATA_URL,
    pageSize: 1000
  }), []);

  useEffect(() => {
    remoteService.setFilteringStrategy(new IgrFilteringStrategy());
    
    return () => {
      remoteService.cancelPendingRequests();
    };
  }, [remoteService]);

  const fetchData = async (filterExpressions: any = null, sortExpressions: any[] = []) => {
    setIsLoading(true);
    
    try {
      const result = await remoteService.getData(filterExpressions, sortExpressions);
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSortingExpressionsChange = (event: IgrSortingExpressionEventArgs) => {
    const sortExpressions = event.detail;
    setCurrentSortExpressions(sortExpressions);

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      fetchData(currentFilterExpressions, sortExpressions);
    }, 300);
  };

  const handleFilteringExpressionsTreeChange = (event: IgrFilteringExpressionsTreeEventArgs) => {
    const filterExpressions = event.detail;
    setCurrentFilterExpressions(filterExpressions);

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      fetchData(filterExpressions, currentSortExpressions);
    }, 500);
  };

  const columnValuesStrategy = (column: IgrColumn, columnExpTree: IgrFilteringExpressionsTree, done: (values: any[]) => void) => {
    remoteService.getColumnData(column, columnExpTree, done);
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
