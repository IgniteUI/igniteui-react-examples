import React, { useEffect, useState, useRef } from 'react';
import { RemoteService } from './RemoteService'

import { IgrGrid, IgrColumn } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const RemoteFilteringGrid = () => {
  const [data, setData] = useState([]);
  const [filterText, setFilterText] = useState('');
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    fetchData('');
  }, []);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      fetchData(filterText);
    }, 500);
  }, [filterText]);

  const fetchData = async (filter: string) => {
    try {
      const result = await RemoteService.getDataWithFilter(filter);
      setData(result);
    } catch (error) {
      console.error('Error fetching filtered data:', error);
    }
  };

  return (
    <div className="container sample ig-typography">
      <h3>Remote Filtering Grid</h3>
      <input
        type="text"
        placeholder="Filter by name..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        style={{ padding: '8px', marginBottom: '10px', width: '300px' }}
      />
      <IgrGrid autoGenerate={false} data={data}>
        <IgrColumn field="CompanyName" header="Company Name" />
        <IgrColumn field="ContactName" header="Contact Name" />
        <IgrColumn field="ContactTitle" header="Title" />
        <IgrColumn field="City" header="City" />
        <IgrColumn field="Country" header="Country" />
      </IgrGrid>
    </div>
  );
};

export default RemoteFilteringGrid;
