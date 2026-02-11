import React, { useEffect, useRef, useState, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import { RemoteService, DataResult } from './RemoteService';
import { IgrGrid, IgrColumn, IgrForOfStateEventArgs } from 'igniteui-react-grids';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

// Debounce utility function
function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, wait);
  };
}

const RemoteVirtualizationGrid = () => {
  const gridRef = useRef<IgrGrid>(null);
  const [data, setData] = useState<any[]>([]);
  const [totalCount, setTotalCount] = useState(0);

  // Callback for when fresh data arrives from the server
  const handleFreshData = useCallback((result: DataResult) => {
    setData(result.data);
    setTotalCount(result.totalCount);
    if (gridRef.current) {
      gridRef.current.totalItemCount = result.totalCount;
      gridRef.current.isLoading = false;
    }
  }, []);

  const fetchData = useCallback((startIndex: number = 0, chunkSize: number = 50) => {
    // Get cached data immediately for fast UI feedback
    const cachedResult = RemoteService.getData(startIndex, chunkSize, handleFreshData);

    // Show cached data immediately (even if partial/stale)
    if (cachedResult.data.length > 0) {
      setData(cachedResult.data);
      setTotalCount(cachedResult.totalCount);
      if (gridRef.current) {
        gridRef.current.totalItemCount = cachedResult.totalCount;
      }
    }

    // Show loading indicator only if we don't have cached data
    // or if the data is not fully cached (fresh data is being fetched)
    if (gridRef.current && !cachedResult.fromCache) {
      gridRef.current.isLoading = true;
    } else if (gridRef.current && cachedResult.data.length === 0) {
      gridRef.current.isLoading = true;
    }
  }, [handleFreshData]);

  // Debounced version for scroll events - waits 150ms after scrolling stops
  const debouncedFetchData = useCallback(
    debounce((startIndex: number, chunkSize: number) => {
      fetchData(startIndex, chunkSize);
    }, 150),
    [fetchData]
  );

  const handleDataPreLoad = useCallback((event: IgrForOfStateEventArgs) => {
    const { startIndex, chunkSize } = event.detail;
    debouncedFetchData(startIndex, chunkSize);
  }, [debouncedFetchData]);

  useEffect(() => {
    fetchData(); // initial load - no debounce

    // Cleanup on unmount
    return () => {
      RemoteService.cancelPendingRequest();
    };
  }, [fetchData]);

  return (
    <div className="container sample ig-typography">
      <h3>Remote Virtualization Grid ({totalCount.toLocaleString()} records)</h3>
      <IgrGrid
        ref={gridRef}
        data={data}
        autoGenerate={false}
        height="600px"
        width="100%"
        rowHeight={50}
        primaryKey="ProductID"
        onDataPreLoad={handleDataPreLoad}
      >
        <IgrColumn field="ProductID" header="Product ID" dataType="number" />
        <IgrColumn field="ProductName" header="Product Name" dataType="string" />
        <IgrColumn field="UnitPrice" header="Unit Price" dataType="currency" />
        <IgrColumn field="UnitsInStock" header="Units In Stock" dataType="number" />
        <IgrColumn field="QuantityPerUnit" header="Quantity Per Unit" dataType="string" />
        <IgrColumn field="ReorderLevel" header="Reorder Level" dataType="number" />
      </IgrGrid>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RemoteVirtualizationGrid />);
