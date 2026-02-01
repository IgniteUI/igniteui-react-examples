import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { 
  IgcQueryBuilderComponent,
  IgcGridComponent,
  IgcFilteringExpressionsTree,
  IgcExpressionTree,
  FilteringLogic,
  defineComponents
} from 'igniteui-webcomponents-grids/grids';

import 'igniteui-webcomponents-grids/grids/themes/light/material.css';

// Register components
defineComponents(IgcQueryBuilderComponent, IgcGridComponent);

const API_ENDPOINT = 'https://data-northwind.indigo.design';

// Field type definitions
interface Field {
  field: string;
  dataType: string;
}

interface Entity {
  name: string;
  fields: Field[];
}

const QueryBuilderOverview: React.FC = () => {
  const queryBuilderRef = useRef<IgcQueryBuilderComponent>(null);
  const gridRef = useRef<IgcGridComponent>(null);
  const [expressionTree, setExpressionTree] = useState<IgcExpressionTree | null>(null);

  // Define field structures
  const customersFields: Field[] = [
    { field: 'customerId', dataType: 'string' },
    { field: 'companyName', dataType: 'string' },
    { field: 'contactName', dataType: 'string' },
    { field: 'contactTitle', dataType: 'string' }
  ];

  const ordersFields: Field[] = [
    { field: 'orderId', dataType: 'number' },
    { field: 'customerId', dataType: 'string' },
    { field: 'employeeId', dataType: 'number' },
    { field: 'shipperId', dataType: 'number' },
    { field: 'orderDate', dataType: 'date' },
    { field: 'requiredDate', dataType: 'date' },
    { field: 'shipVia', dataType: 'string' },
    { field: 'freight', dataType: 'number' },
    { field: 'shipName', dataType: 'string' },
    { field: 'completed', dataType: 'boolean' }
  ];

  const entities: Entity[] = [
    { name: 'Customers', fields: customersFields },
    { name: 'Orders', fields: ordersFields }
  ];

  // Initialize expression tree
  useEffect(() => {
    const tree = new IgcFilteringExpressionsTree();
    tree.operator = FilteringLogic.And;
    tree.entity = 'Orders';
    tree.returnFields = [
      'orderId',
      'customerId',
      'employeeId',
      'shipperId',
      'orderDate',
      'requiredDate',
      'shipVia',
      'freight',
      'shipName',
      'completed'
    ];

    setExpressionTree(tree);
  }, []);

  // Set up query builder
  useEffect(() => {
    if (!queryBuilderRef.current || !expressionTree) return;

    const queryBuilder = queryBuilderRef.current;
    queryBuilder.entities = entities as any;
    queryBuilder.expressionTree = expressionTree;

    const handleExpressionTreeChange = (event: CustomEvent<IgcExpressionTree>) => {
      setExpressionTree(event.detail);
    };

    queryBuilder.addEventListener('expressionTreeChange', handleExpressionTreeChange as EventListener);

    return () => {
      queryBuilder.removeEventListener('expressionTreeChange', handleExpressionTreeChange as EventListener);
    };
  }, [expressionTree?.entity]); // Only re-run if entity changes

  // Set up grid
  useEffect(() => {
    if (!gridRef.current) return;
    
    const grid = gridRef.current;
    grid.height = '420px';
    grid.autoGenerate = true;
  }, []);

  // Fetch data when expression tree changes
  useEffect(() => {
    if (!expressionTree || !gridRef.current) return;

    const fetchData = async () => {
      const grid = gridRef.current;
      if (!grid) return;

      grid.isLoading = true;

      try {
        const response = await fetch(`${API_ENDPOINT}/QueryBuilder/ExecuteQuery`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(expressionTree)
        });

        if (!response.ok) {
          throw new Error(`ExecuteQuery failed: ${response.status} ${response.statusText}`);
        }

        const json = await response.json();
        const data = (Object.values(json)[0] as any[]) ?? [];
        grid.data = data;

        // Calculate column visibility after data loads
        await new Promise(resolve => requestAnimationFrame(() => resolve(null)));
        calculateColumnsInView();
      } catch (err) {
        console.error(err);
        grid.data = [];
      } finally {
        grid.isLoading = false;
      }
    };

    fetchData();
  }, [expressionTree]);

  // Calculate which columns should be visible based on returnFields
  const calculateColumnsInView = () => {
    if (!gridRef.current || !expressionTree) return;

    const grid = gridRef.current;
    const returnFields = expressionTree.returnFields ?? [];

    if (returnFields.length === 0 || returnFields[0] === '*') {
      const selectedEntity = entities.find(e => e.name === expressionTree.entity);
      const selectedEntityFields = (selectedEntity?.fields ?? []).map(f => f.field);
      
      grid.columns.forEach(column => {
        column.hidden = !selectedEntityFields.includes(column.field);
      });
    } else {
      grid.columns.forEach(column => {
        column.hidden = !returnFields.includes(column.field);
      });
    }
  };

  return (
    <div className="container sample ig-typography">
      <div className="wrapper">
        <igc-query-builder ref={queryBuilderRef} id="queryBuilder"></igc-query-builder>
        
        <div className="output-area">
          <igc-grid ref={gridRef} id="grid"></igc-grid>
        </div>
      </div>
    </div>
  );
};

// Rendering component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<QueryBuilderOverview />);
