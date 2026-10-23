import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  IgrTreeGrid,
  IgrColumn,
  IgrCellTemplateContext,
} from 'igniteui-react-grids';
import { IgrAvatar, IgrButtonGroup, IgrToggleButton } from 'igniteui-react';
import { EmployeesFlatAvatars } from './EmployeesFlatAvatars';

import 'igniteui-react-grids/grids/themes/light/material.css';

const employeesFlatAvatars = new EmployeesFlatAvatars();

const nameCellTemplate = (props: { dataContext: IgrCellTemplateContext }) => {
  return (
    <div className="cell__inner">
      <IgrAvatar
        src={props.dataContext.cell.row.data.Avatar}
        shape="circle"
      ></IgrAvatar>
      <span className="name">{props.dataContext.cell.value}</span>
    </div>
  );
};

export default function TreeGridTheming() {
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
          <IgrTreeGrid
            autoGenerate={false}
            data={employeesFlatAvatars}
            primaryKey="ID"
            foreignKey="ParentID"
            allowFiltering={true}
            filterMode="excelStyleFilter"
            rowSelection="multiple"
            height="560px"
          >
            <IgrColumn
              field="Name"
              width="300px"
              sortable={true}
              filterable={true}
              bodyTemplate={nameCellTemplate}
            ></IgrColumn>
            <IgrColumn
              field="Title"
              dataType="string"
              sortable={true}
              filterable={true}
            ></IgrColumn>
            <IgrColumn
              field="Age"
              dataType="number"
              sortable={true}
              filterable={true}
            ></IgrColumn>
            <IgrColumn
              field="HireDate"
              dataType="date"
              sortable={true}
              filterable={true}
            ></IgrColumn>
          </IgrTreeGrid>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TreeGridTheming />);
