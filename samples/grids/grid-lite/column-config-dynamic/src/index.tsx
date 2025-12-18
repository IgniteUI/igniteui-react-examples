import React from 'react';
import ReactDOM from 'react-dom/client';
import { GridLiteDataService, ProductInfo } from './GridLiteDataService';

import { IgrButton, IgrCheckbox, IgrDropdown, IgrDropdownItem, IgrSwitch } from 'igniteui-react';

// Import the web component
import { IgcGridLite } from 'igniteui-grid-lite';
import {
  defineComponents,
  IgcRatingComponent
} from 'igniteui-webcomponents';

import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";

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
  private dropdownRef: React.RefObject<any>;
  protected hasFormatters = true;
  protected format = (params: any) => {
    const span = document.createElement('span');
    span.textContent = formatter.format(params.value);
    return span;
  };
  protected columns = [
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

  constructor(props: any) {
    super(props);
    this.dataService = new GridLiteDataService();
    this.gridRef = React.createRef();
    this.dropdownRef = React.createRef();
    this.toggleFormatters = this.toggleFormatters.bind(this);
    this.toggleColumnProperty = this.toggleColumnProperty.bind(this);
  }

  componentDidMount() {
    if (this.gridRef.current) {
      const data: ProductInfo[] = this.dataService.generateProducts(50);

      this.gridRef.current.columns = this.columns;
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
        <section className="panel">
          <IgrDropdown
            ref={this.dropdownRef}
            keepOpenOnSelect={true}
            flip={true}
            onChange={(e: any) => {
              this.dropdownRef.current?.clearSelection();
            }}
            id="column-select">
            <div slot="target">
              <IgrButton variant="outlined"><span>Column Properties</span></IgrButton>
            </div>
            {this.columns.map((column: any) => (
              <IgrDropdownItem key={column.key}>
                <div className="config">
                  <span className="config-key">{column.headerText}</span>
                  <IgrCheckbox
                    labelPosition="before"
                    checked={!column.hidden}
                    onChange={(e: any) => this.toggleColumnProperty(column.key, 'hidden', !e.target.checked)}>
                    Hidden
                  </IgrCheckbox>
                  <IgrCheckbox
                    labelPosition="before"
                    checked={column.resizable !== false}
                    onChange={(e: any) => this.toggleColumnProperty(column.key, 'resizable', e.target.checked)}>
                    Resizable
                  </IgrCheckbox>
                  <IgrCheckbox
                    labelPosition="before"
                    checked={column.filter === true}
                    onChange={(e: any) => this.toggleColumnProperty(column.key, 'filter', e.target.checked)}>
                    Filter
                  </IgrCheckbox>
                  <IgrCheckbox
                    labelPosition="before"
                    checked={column.sort === true}
                    onChange={(e: any) => this.toggleColumnProperty(column.key, 'sort', e.target.checked)}>
                    Sort
                  </IgrCheckbox>
                </div>
              </IgrDropdownItem>
            ))}
          </IgrDropdown>
          <IgrSwitch
            id="formatters"
            labelPosition="before"
            checked={this.hasFormatters}
            onChange={(e: any) => {
              this.hasFormatters = e.target.checked;
              this.toggleFormatters(this.hasFormatters);
            }}>
            Value formatters:
          </IgrSwitch>
        </section>
        <div className="grid-lite-wrapper">
          <igc-grid-lite ref={this.gridRef} id="grid-lite"></igc-grid-lite>
        </div>
      </div >
    );
  }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample />);
