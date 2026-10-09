import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  IgrGrid,
  IgrGridToolbar,
  IgrGridToolbarTitle,
  IgrGridToolbarActions,
  IgrGridToolbarPinning,
  IgrGridToolbarHiding,
  IgrColumn,
  IgrPaginator,
  IgrNumberSummaryOperand,
  IgrSummaryResult,
} from 'igniteui-react-grids';
import { IgrButtonGroup, IgrToggleButton } from 'igniteui-react';
import { InvoicesData } from './InvoicesData';

import 'igniteui-react-grids/grids/themes/light/material.css';

class CompactSummary extends IgrNumberSummaryOperand {
  public operate(data?: any[]): IgrSummaryResult[] {
    return super
      .operate(data)
      .filter((r: IgrSummaryResult) => r.key === 'count' || r.key === 'sum');
  }
}

const invoicesData = new InvoicesData();

const formatCurrency = (value: number): string => '$' + value.toFixed(2);

export default function GridTheming() {
  const [activeTheme, setActiveTheme] = useState('theme-studio');

  return (
    <div className="container sample ig-typography">
      <div className="grid-theming-sample">
        <div className="theme-picker">
          <span className="theme-picker__label">Pick a theme</span>
          <IgrButtonGroup
            selection="single-required"
            onSelect={(e: CustomEvent<string>) => setActiveTheme(e.detail)}
          >
            <IgrToggleButton
              value="theme-studio"
              selected={activeTheme === 'theme-studio'}
            >
              <span className="theme-swatch theme-swatch--studio"></span>Studio
            </IgrToggleButton>
            <IgrToggleButton
              value="theme-ledger"
              selected={activeTheme === 'theme-ledger'}
            >
              <span className="theme-swatch theme-swatch--ledger"></span>Ledger
            </IgrToggleButton>
            <IgrToggleButton
              value="theme-editorial"
              selected={activeTheme === 'theme-editorial'}
            >
              <span className="theme-swatch theme-swatch--editorial"></span>
              Editorial
            </IgrToggleButton>
            <IgrToggleButton
              value="theme-midnight"
              selected={activeTheme === 'theme-midnight'}
            >
              <span className="theme-swatch theme-swatch--midnight"></span>
              Midnight
            </IgrToggleButton>
          </IgrButtonGroup>
          <p className="theme-picker__hint">
            Custom themes, not built-in: each is a set of{' '}
            <code>--ig-grid-*</code> variables with its own background and
            accent.
          </p>
        </div>
        <div className={`themed-grid ${activeTheme}`}>
          <IgrGrid
            autoGenerate={false}
            data={invoicesData}
            width="100%"
            height="560px"
            allowFiltering={true}
            filterMode="excelStyleFilter"
            rowSelection="multiple"
            columnSelection="multiple"
          >
            <IgrGridToolbar>
              <IgrGridToolbarTitle>Invoices</IgrGridToolbarTitle>
              <IgrGridToolbarActions>
                <IgrGridToolbarPinning></IgrGridToolbarPinning>
                <IgrGridToolbarHiding></IgrGridToolbarHiding>
              </IgrGridToolbarActions>
            </IgrGridToolbar>
            <IgrColumn
              field="ShipCountry"
              header="Country"
              width="160px"
              sortable={true}
              filterable={true}
              pinned={true}
            ></IgrColumn>
            <IgrColumn
              field="ShipCity"
              header="City"
              width="160px"
              sortable={true}
              filterable={true}
            ></IgrColumn>
            <IgrColumn
              field="ShipName"
              header="Ship Name"
              width="240px"
              sortable={true}
              filterable={true}
            ></IgrColumn>
            <IgrColumn
              field="Salesperson"
              header="Salesperson"
              width="200px"
              sortable={true}
              filterable={true}
            ></IgrColumn>
            <IgrColumn
              field="UnitPrice"
              header="Unit Price"
              width="140px"
              dataType="number"
              sortable={true}
              hasSummary={true}
              summaries={CompactSummary}
              formatter={formatCurrency}
            ></IgrColumn>
            <IgrColumn
              field="Quantity"
              header="Quantity"
              width="140px"
              dataType="number"
              sortable={true}
            ></IgrColumn>
            <IgrPaginator perPage={10}></IgrPaginator>
          </IgrGrid>
        </div>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<GridTheming />);
