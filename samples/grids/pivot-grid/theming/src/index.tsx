import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPivotGrid, IgrPivotConfiguration } from 'igniteui-react-grids';
import { IgrButtonGroup, IgrToggleButton } from 'igniteui-react';
import { PivotDataFlat } from './PivotDataFlat';

import 'igniteui-react-grids/grids/themes/light/material.css';

const pivotDataFlat = new PivotDataFlat();

const pivotConfigHierarchy: IgrPivotConfiguration = {
  columns: [
    {
      memberName: 'Product',
      memberFunction: (data: any) => data.ProductName,
      enabled: true,
    },
  ],
  rows: [
    {
      memberName: 'City',
      memberFunction: (data: any) => data.SellerCity,
      enabled: true,
      childLevel: {
        memberName: 'Seller',
        memberFunction: (data: any) => data.SellerName,
        enabled: true,
      },
    },
  ],
  values: [
    {
      member: 'NumberOfUnits',
      aggregate: {
        aggregatorName: 'SUM',
        key: 'sum',
        label: 'Sum',
      },
      enabled: true,
    },
  ],
  filters: null,
};

export default function PivotGridTheming() {
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
          <IgrPivotGrid
            data={pivotDataFlat}
            pivotConfiguration={pivotConfigHierarchy}
            allowFiltering={true}
            filterMode="excelStyleFilter"
            height="500px"
          ></IgrPivotGrid>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PivotGridTheming />);
