import React from 'react';
import ReactDOM from 'react-dom/client';
import { GridLiteDataService, ProductInfo } from './GridLiteDataService';
import './GridLiteColumnConfigDynamic.css';

// Import the web component
import { IgcGridLite } from 'igniteui-grid-lite';
import { 
  defineComponents,
  IgcRatingComponent
} from 'igniteui-webcomponents';
import "igniteui-webcomponents/themes/light/bootstrap.css";

// Register components
IgcGridLite.register();
defineComponents(IgcRatingComponent);

const formatter = new Intl.NumberFormat('en-EN', {
  style: 'currency',
  currency: 'EUR',
});

export default class Sample extends React.Component<any, any> {
  private dataService: GridLiteDataService;
  private gridRef: React.RefObject<any>;
  protected hasFormatters = true;
  protected format = (params: any) => {
    const span = document.createElement('span');
    span.textContent = formatter.format(params.value);
    return span;
  };

  constructor(props: any) {
    super(props);
    this.dataService = new GridLiteDataService();
    this.gridRef = React.createRef();
    this.toggleFormatters = this.toggleFormatters.bind(this);
    this.toggleColumnProperty = this.toggleColumnProperty.bind(this);
  }

  componentDidMount() {
    if (this.gridRef.current) {
      const data: ProductInfo[] = this.dataService.generateProducts(50);
      
      const columns = [
        {
          key: 'id',
          hidden: true,
          headerText: 'ID'
        },
        {
          key: 'name',
          headerText: 'Product Name'
        },
        {
          key: 'price',
          headerText: 'Price',
          type: 'number',
          cellTemplate: this.format
        },
        {
          key: 'sold',
          type: 'number',
          headerText: 'Units sold'
        },
        {
          key: 'total',
          headerText: 'Total sold',
          cellTemplate: this.format
        },
        {
          key: 'rating',
          type: 'number',
          headerText: 'Customer rating',
          cellTemplate: (params: any) => {
            const rating = document.createElement('igc-rating');
            rating.setAttribute('readonly', '');
            rating.setAttribute('step', '0.01');
            rating.setAttribute('value', params.value.toString());
            return rating;
          }
        }
      ];

      this.gridRef.current.columns = columns;
      this.gridRef.current.data = data;
    }
  }

  toggleFormatters(checked: boolean) {
    if (this.gridRef.current) {
      this.gridRef.current.updateColumns(
        ['price', 'total'].map((key) => ({
          key,
          cellTemplate: checked ? this.format : undefined,
        }))
      );
    }
  }

  toggleColumnProperty(columnKey: string, property: string, value: boolean) {
    if (this.gridRef.current) {
      this.gridRef.current.updateColumns({ key: columnKey, [property]: value });
    }
  }

  public render(): JSX.Element {
    return (
      <div className="container sample ig-typography">
        <div className="controls-wrapper">
          <label>
            <input type="checkbox" defaultChecked onChange={(e) => this.toggleFormatters(e.target.checked)} />
            Value Formatters
          </label>
          <div className="column-controls">
            <p>Column Properties (simplified controls):</p>
            <label>
              <input type="checkbox" onChange={(e) => this.toggleColumnProperty('id', 'hidden', !e.target.checked)} />
              Show ID
            </label>
            <label>
              <input type="checkbox" onChange={(e) => this.toggleColumnProperty('name', 'filter', e.target.checked)} />
              Name Filter
            </label>
            <label>
              <input type="checkbox" onChange={(e) => this.toggleColumnProperty('name', 'sort', e.target.checked)} />
              Name Sort
            </label>
          </div>
        </div>
        <div className="grid-lite-wrapper">
          <igc-grid-lite ref={this.gridRef} id="grid-lite"></igc-grid-lite>
        </div>
      </div>
    );
  }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
