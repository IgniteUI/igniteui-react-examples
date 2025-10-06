import React, { useEffect, useState, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import { RemoteService } from './RemoteService'
import { IgrGrid, IgrColumn, GridColumnDataType } from 'igniteui-react-grids';
import { IgrSortingExpressionEventArgs, IgrFilteringExpressionsTreeEventArgs } from 'igniteui-react-grids';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

interface ProductData {
  ProductID: number;
  ProductName: string;
  SupplierID: number;
  CategoryID: number;
  QuantityPerUnit: string;
  UnitPrice: number;
  UnitsInStock: number;
  UnitsOnOrder: number;
  ReorderLevel: number;
  Discontinued: boolean;
}

interface ColumnConfig {
  field: string;
  header: string;
  dataType: GridColumnDataType;
}

interface GridState {
  filterExpressions: any;
  sortExpressions: any[];
}

// Column configuration outside of component to avoid recreation on every render
const columnConfig: ColumnConfig[] = [
  { field: 'ProductID', header: 'Product ID', dataType: 'number' as GridColumnDataType },
  { field: 'ProductName', header: 'Product Name', dataType: 'string' as GridColumnDataType },
  { field: 'SupplierID', header: 'Supplier ID', dataType: 'number' as GridColumnDataType },
  { field: 'CategoryID', header: 'Category ID', dataType: 'number' as GridColumnDataType },
  { field: 'QuantityPerUnit', header: 'Quantity Per Unit', dataType: 'string' as GridColumnDataType },
  { field: 'UnitPrice', header: 'Unit Price', dataType: 'number' as GridColumnDataType },
  { field: 'UnitsInStock', header: 'Units In Stock', dataType: 'number' as GridColumnDataType },
  { field: 'UnitsOnOrder', header: 'Units On Order', dataType: 'number' as GridColumnDataType },
  { field: 'ReorderLevel', header: 'Reorder Level', dataType: 'number' as GridColumnDataType },
  { field: 'Discontinued', header: 'Discontinued', dataType: 'boolean' as GridColumnDataType }
];

const RemoteFilteringGrid = () => {
  const [data, setData] = useState<ProductData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [gridState, setGridState] = useState<GridState>({
    filterExpressions: null,
    sortExpressions: []
  });
  const debounceRef = useRef<number | null>(null);

  const fetchData = useCallback((newGridState?: Partial<GridState>) => {
    const currentState = newGridState ? { ...gridState, ...newGridState } : gridState;
    
    setIsLoading(true);
    RemoteService.getData(
      currentState.filterExpressions, 
      currentState.sortExpressions
    )
    .then((result) => {
      setData(result);
      
      if (newGridState) {
        setGridState(currentState);
      }
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      setData([]); 
    })
    .finally(() => {
      setIsLoading(false);
    });
  }, [gridState]);

  const debouncedFetchData = useCallback((newGridState: Partial<GridState>) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = window.setTimeout(() => {
      fetchData(newGridState);
    }, 400);
  }, [fetchData]);

  const handleSortingExpressionsChange = useCallback((event: IgrSortingExpressionEventArgs) => {
    const sortExpressions = event.detail;
    debouncedFetchData({ sortExpressions });
  }, [debouncedFetchData]);

  const handleFilteringExpressionsTreeChange = useCallback((event: IgrFilteringExpressionsTreeEventArgs) => {
    const filterExpressions = event.detail;
    debouncedFetchData({ filterExpressions });
  }, [debouncedFetchData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
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
        {columnConfig.map((col) => (
          <IgrColumn 
            key={col.field}
            field={col.field} 
            header={col.header} 
            sortable={true} 
            filterable={true} 
            dataType={col.dataType} 
          />
        ))}
      </IgrGrid>
    </div>
  );
};

// rendering above function to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RemoteFilteringGrid />);

export default RemoteFilteringGrid;
