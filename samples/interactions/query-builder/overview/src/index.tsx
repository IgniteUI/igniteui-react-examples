import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { 
  IgcQueryBuilderComponent,
  IgcGridComponent,
  IgcFilteringExpressionsTree,
  IgcExpressionTree,
  FilteringLogic
} from 'igniteui-webcomponents-grids/grids';

import 'igniteui-webcomponents-grids/grids/themes/light/material.css';

// Register components
IgcQueryBuilderComponent.register();
IgcGridComponent.register();

// Declare JSX types for custom elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'igc-query-builder': any;
      'igc-grid': any;
    }
  }
}

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

interface SampleState {
  expressionTree: IgcExpressionTree | null;
}

export default class Sample extends React.Component<any, SampleState> {
  private queryBuilderRef: React.RefObject<IgcQueryBuilderComponent>;
  private gridRef: React.RefObject<IgcGridComponent>;

  constructor(props: any) {
    super(props);

    this.queryBuilderRef = React.createRef();
    this.gridRef = React.createRef();

    this.state = {
      expressionTree: null
    };
  }

  componentDidMount() {
    // Initialize expression tree
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

    this.setState({ expressionTree: tree });

    // Set up query builder
    if (this.queryBuilderRef.current && tree) {
      const queryBuilder = this.queryBuilderRef.current;
      queryBuilder.entities = this.entities as any;
      queryBuilder.expressionTree = tree;

      queryBuilder.addEventListener('expressionTreeChange', this.handleExpressionTreeChange);
    }

    // Set up grid
    if (this.gridRef.current) {
      const grid = this.gridRef.current;
      grid.height = '420px';
      grid.autoGenerate = true;
    }
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    // Fetch data when expression tree changes
    if (prevState.expressionTree !== this.state.expressionTree && this.state.expressionTree) {
      this.fetchData();
    }

    // Update query builder if expression tree changed
    if (this.queryBuilderRef.current && this.state.expressionTree && 
        prevState.expressionTree !== this.state.expressionTree) {
      const queryBuilder = this.queryBuilderRef.current;
      queryBuilder.expressionTree = this.state.expressionTree;
    }
  }

  componentWillUnmount() {
    if (this.queryBuilderRef.current) {
      this.queryBuilderRef.current.removeEventListener('expressionTreeChange', this.handleExpressionTreeChange);
    }
  }

  private handleExpressionTreeChange = (event: CustomEvent<IgcExpressionTree>) => {
    this.setState({ expressionTree: event.detail });
  };

  private get customersFields(): Field[] {
    return [
      { field: 'customerId', dataType: 'string' },
      { field: 'companyName', dataType: 'string' },
      { field: 'contactName', dataType: 'string' },
      { field: 'contactTitle', dataType: 'string' }
    ];
  }

  private get ordersFields(): Field[] {
    return [
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
  }

  private get entities(): Entity[] {
    return [
      { name: 'Customers', fields: this.customersFields },
      { name: 'Orders', fields: this.ordersFields }
    ];
  }

  private calculateColumnsInView = () => {
    if (!this.gridRef.current || !this.state.expressionTree) return;

    const grid = this.gridRef.current;
    const expressionTree = this.state.expressionTree;
    const returnFields = expressionTree.returnFields ?? [];

    if (returnFields.length === 0 || returnFields[0] === '*') {
      const selectedEntity = this.entities.find(e => e.name === expressionTree.entity);
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

  private async fetchData() {
    const grid = this.gridRef.current;
    const expressionTree = this.state.expressionTree;

    if (!grid || !expressionTree) return;

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
      this.calculateColumnsInView();
    } catch (err) {
      console.error(err);
      grid.data = [];
    } finally {
      grid.isLoading = false;
    }
  }

  public render(): JSX.Element {
    return (
      <div className="container sample ig-typography">
        <div className="wrapper">
          <igc-query-builder ref={this.queryBuilderRef} id="queryBuilder"></igc-query-builder>
          
          <div className="output-area">
            <igc-grid ref={this.gridRef} id="grid"></igc-grid>
          </div>
        </div>
      </div>
    );
  }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
