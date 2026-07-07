import { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { 
  IgrQueryBuilder,
  IgrGrid,
  IgrFilteringExpressionsTree,
  IgrExpressionTree,
  FilteringLogic
} from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/material.css';

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

function Sample() {
  const queryBuilderRef = useRef<IgrQueryBuilder>(null);
  const gridRef = useRef<IgrGrid>(null);

  const calculateColumnsInView = (tree: IgrExpressionTree) => {
    if (!gridRef.current) return;

    const grid = gridRef.current;
    const returnFields = tree.returnFields ?? [];

    if (returnFields.length === 0 || returnFields[0] === '*') {
      const selectedEntity = entities.find(e => e.name === tree.entity);
      const selectedEntityFields = (selectedEntity?.fields ?? []).map(f => f.field);

      grid.columns.forEach((column: any) => {
        column.hidden = !selectedEntityFields.includes(column.field);
      });
    } else {
      grid.columns.forEach((column: any) => {
        column.hidden = !returnFields.includes(column.field);
      });
    }
  };

  const fetchData = async (tree: IgrExpressionTree) => {
    const grid = gridRef.current;
    if (!grid) return;

    grid.isLoading = true;

    try {
      const response = await fetch(`${API_ENDPOINT}/QueryBuilder/ExecuteQuery`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tree)
      });

      if (!response.ok) {
        throw new Error(`ExecuteQuery failed: ${response.status} ${response.statusText}`);
      }

      const json = await response.json();
      const data = (Object.values(json)[0] as any[]) ?? [];
      grid.data = data;

      await new Promise(resolve => requestAnimationFrame(() => resolve(null)));
      calculateColumnsInView(tree);
    } catch (err) {
      console.error(err);
      grid.data = [];
    } finally {
      grid.isLoading = false;
    }
  };

  const handleExpressionTreeChange = (event: any) => {
    fetchData(event.detail);
  };

  useEffect(() => {
    const tree = new IgrFilteringExpressionsTree();
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

    if (gridRef.current) {
      gridRef.current.height = '420px';
      gridRef.current.autoGenerate = true;
    }

    if (queryBuilderRef.current) {
      const queryBuilder = queryBuilderRef.current;
      queryBuilder.entities = entities as any;
      queryBuilder.expressionTree = tree;
      queryBuilder.addEventListener('expressionTreeChange', handleExpressionTreeChange);
    }

    fetchData(tree);

    return () => {
      if (queryBuilderRef.current) {
        queryBuilderRef.current.removeEventListener('expressionTreeChange', handleExpressionTreeChange);
      }
    };
  }, []);

  return (
    <div className="container sample ig-typography">
      <div className="wrapper">
        <IgrQueryBuilder ref={queryBuilderRef} id="queryBuilder"></IgrQueryBuilder>

        <div className="output-area">
          <IgrGrid ref={gridRef} id="grid"></IgrGrid>
        </div>
      </div>
    </div>
  );
}

export default Sample;

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
