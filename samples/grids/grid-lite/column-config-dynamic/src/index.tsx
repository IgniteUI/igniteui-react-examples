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
      field: 'id',
      hidden: true,
      header: 'ID',
      resizable: true,
      sortable: false,
      filterable: false
    },
    {
      field: 'name',
      header: 'Product Name',
      resizable: true,
      sortable: false,
      filterable: false
    },
    {
      field: 'price',
      header: 'Price',
      dataType: 'number',
      cellTemplate: this.format,
      resizable: true,
      sortable: false,
      filterable: false
    },
    {
      field: 'sold',
      dataType: 'number',
      header: 'Units sold',
      resizable: true,
      sortable: false,
      filterable: false
    },
    {
      field: 'total',
      header: 'Total sold',
      cellTemplate: this.format,
      resizable: true,
      sortable: false,
      filterable: false
    },
    {
      field: 'rating',
      dataType: 'number',
      header: 'Customer rating',
      cellTemplate: (params: any) => {
        const rating = document.createElement('igc-rating');
        rating.setAttribute('readonly', '');
        rating.setAttribute('step', '0.01');
        rating.setAttribute('value', params.value.toString());
        return rating;
      },
      resizable: true,
      sortable: false,
      filterable: false
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

      // Set cellTemplates programmatically for columns that need them
      const priceCol = this.gridRef.current.columns.find((c: any) => c.field === 'price');
      if (priceCol && this.columns.find(col => col.field === 'price')?.cellTemplate) {
        priceCol.cellTemplate = this.format;
      }

      const totalCol = this.gridRef.current.columns.find((c: any) => c.field === 'total');
      if (totalCol && this.columns.find(col => col.field === 'total')?.cellTemplate) {
        totalCol.cellTemplate = this.format;
      }

      const ratingCol = this.gridRef.current.columns.find((c: any) => c.field === 'rating');
      const ratingColDef = this.columns.find(col => col.field === 'rating');
      if (ratingCol && ratingColDef?.cellTemplate) {
        ratingCol.cellTemplate = ratingColDef.cellTemplate;
      }

      this.gridRef.current.data = data;
    }
  }

  toggleFormatters(checked: boolean) {
    if (this.gridRef.current) {
      this.gridRef.current.updateColumns(
        ['price', 'total'].map((field) => ({
          field,
          cellTemplate: checked ? this.format : undefined,
        }))
      );
    }
  }

  toggleColumnProperty(columnField: string, property: string, value: boolean) {
    if (this.gridRef.current) {
      this.gridRef.current.updateColumns({ field: columnField, [property]: value });
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
              <IgrDropdownItem key={column.field}>
                <div className="config">
                  <span className="config-key">{column.header}</span>
                  <IgrCheckbox
                    labelPosition="before"
                    checked={!column.hidden}
                    onChange={(e: any) => this.toggleColumnProperty(column.field, 'hidden', !e.target.checked)}>
                    Hidden
                  </IgrCheckbox>
                  <IgrCheckbox
                    labelPosition="before"
                    checked={column.resizable !== false}
                    onChange={(e: any) => this.toggleColumnProperty(column.field, 'resizable', e.target.checked)}>
                    Resizable
                  </IgrCheckbox>
                  <IgrCheckbox
                    labelPosition="before"
                    checked={column.filterable === true}
                    onChange={(e: any) => this.toggleColumnProperty(column.field, 'filterable', e.target.checked)}>
                    Filter
                  </IgrCheckbox>
                  <IgrCheckbox
                    labelPosition="before"
                    checked={column.sortable === true}
                    onChange={(e: any) => this.toggleColumnProperty(column.field, 'sortable', e.target.checked)}>
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
          <igc-grid-lite ref={this.gridRef} id="grid-lite">
            {this.columns.map((column: any) => (
              <igc-grid-lite-column
                key={column.field}
                field={column.field}
                header={column.header}
                data-type={column.dataType}
                hidden={column.hidden}
              ></igc-grid-lite-column>
            ))}
          </igc-grid-lite>
        </div>
      </div >
    );
  }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample />);
