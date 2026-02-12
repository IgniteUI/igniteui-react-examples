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

// Define cellTemplate functions outside component
const currencyCellTemplate = (params: any) => {
  const span = document.createElement('span');
  span.textContent = formatter.format(params.value);
  return span;
};

const ratingCellTemplate = (params: any) => {
  const rating = document.createElement('igc-rating');
  rating.setAttribute('readonly', '');
  rating.setAttribute('step', '0.01');
  rating.setAttribute('value', params.value.toString());
  return rating;
};

const initialColumns = [
  {
    field: 'id',
    hidden: true,
    header: 'ID',
    resizable: true,
    sortable: false,
    filterable: false,
    cellTemplate: undefined
  },
  {
    field: 'name',
    header: 'Product Name',
    resizable: true,
    sortable: false,
    filterable: false,
    cellTemplate: undefined
  },
  {
    field: 'price',
    header: 'Price',
    dataType: 'number',
    cellTemplate: currencyCellTemplate,
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
    filterable: false,
    cellTemplate: undefined
  },
  {
    field: 'total',
    header: 'Total sold',
    cellTemplate: currencyCellTemplate,
    resizable: true,
    sortable: false,
    filterable: false
  },
  {
    field: 'rating',
    dataType: 'number',
    header: 'Customer rating',
    cellTemplate: ratingCellTemplate,
    resizable: true,
    sortable: false,
    filterable: false
  }
];

export default function Sample() {
  const gridRef = React.useRef<any>(null);
  const dropdownRef = React.useRef<any>(null);
  const [columns, setColumns] = React.useState(initialColumns);
  const [hasFormatters, setHasFormatters] = React.useState(true);

  React.useEffect(() => {
    if (gridRef.current) {
      const dataService = new GridLiteDataService();
      const data: ProductInfo[] = dataService.generateProducts(50);
      gridRef.current.data = data;
    }
  }, []);

  const toggleFormatters = React.useCallback((checked: boolean) => {
    if (gridRef.current) {
      gridRef.current.updateColumns(
        ['price', 'total'].map((field) => ({
          field,
          cellTemplate: checked ? currencyCellTemplate : undefined,
        }))
      );
      setColumns(prevColumns => 
        prevColumns.map(col => 
          col.field === 'price' || col.field === 'total'
            ? { ...col, cellTemplate: checked ? currencyCellTemplate : undefined }
            : col
        )
      );
    }
  }, []);

  const toggleColumnProperty = React.useCallback((columnField: string, property: string, value: boolean) => {
    if (gridRef.current) {
      gridRef.current.updateColumns({ field: columnField, [property]: value });
      setColumns(prevColumns =>
        prevColumns.map(col =>
          col.field === columnField
            ? { ...col, [property]: value }
            : col
        )
      );
    }
  }, []);

  return (
    <div className="container sample ig-typography">
      <section className="panel">
        <IgrDropdown
          ref={dropdownRef}
          keepOpenOnSelect={true}
          flip={true}
          onChange={(e: any) => {
            dropdownRef.current?.clearSelection();
          }}
          id="column-select">
          <div slot="target">
            <IgrButton variant="outlined"><span>Column Properties</span></IgrButton>
          </div>
          {columns.map((column: any) => (
            <IgrDropdownItem key={column.field}>
              <div className="config">
                <span className="config-key">{column.header}</span>
                <IgrCheckbox
                  labelPosition="before"
                  checked={!column.hidden}
                  onChange={(e: any) => toggleColumnProperty(column.field, 'hidden', !e.target.checked)}>
                  Hidden
                </IgrCheckbox>
                <IgrCheckbox
                  labelPosition="before"
                  checked={column.resizable !== false}
                  onChange={(e: any) => toggleColumnProperty(column.field, 'resizable', e.target.checked)}>
                  Resizable
                </IgrCheckbox>
                <IgrCheckbox
                  labelPosition="before"
                  checked={column.filterable === true}
                  onChange={(e: any) => toggleColumnProperty(column.field, 'filterable', e.target.checked)}>
                  Filter
                </IgrCheckbox>
                <IgrCheckbox
                  labelPosition="before"
                  checked={column.sortable === true}
                  onChange={(e: any) => toggleColumnProperty(column.field, 'sortable', e.target.checked)}>
                  Sort
                </IgrCheckbox>
              </div>
            </IgrDropdownItem>
          ))}
        </IgrDropdown>
        <IgrSwitch
          id="formatters"
          labelPosition="before"
          checked={hasFormatters}
          onChange={(e: any) => {
            setHasFormatters(e.target.checked);
            toggleFormatters(e.target.checked);
          }}>
          Value formatters:
        </IgrSwitch>
      </section>
      <div className="grid-lite-wrapper">
        <igc-grid-lite ref={gridRef} id="grid-lite">
          {columns.map((column: any) => (
            <igc-grid-lite-column
              key={column.field}
              field={column.field}
              header={column.header}
              data-type={column.dataType}
              hidden={column.hidden}
              cellTemplate={column.cellTemplate}
            ></igc-grid-lite-column>
          ))}
        </igc-grid-lite>
      </div>
    </div >
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample />);
