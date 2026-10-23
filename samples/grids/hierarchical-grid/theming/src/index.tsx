import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  IgrHierarchicalGrid,
  IgrColumn,
  IgrRowIsland,
  IgrCellTemplateContext,
} from 'igniteui-react-grids';
import { IgrButtonGroup, IgrToggleButton } from 'igniteui-react';
import { SingersData } from './SingersData';

import 'igniteui-react-grids/grids/themes/light/material.css';

const singersData = new SingersData();

const photoCellTemplate = (props: { dataContext: IgrCellTemplateContext }) => {
  return (
    <div className="cell__inner_2">
      <img src={props.dataContext.cell.value} className="photo" />
    </div>
  );
};

const debutFormatter = (value: number) => value;

export default function HierarchicalGridTheming() {
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
          <IgrHierarchicalGrid
            autoGenerate={false}
            data={singersData}
            allowFiltering={true}
            filterMode="excelStyleFilter"
            rowSelection="multiple"
            height="480px"
            width="100%"
          >
            <IgrColumn
              field="Artist"
              resizable={true}
              sortable={true}
              filterable={true}
            ></IgrColumn>
            <IgrColumn
              field="Photo"
              resizable={true}
              minWidth="115px"
              bodyTemplate={photoCellTemplate}
            ></IgrColumn>
            <IgrColumn
              field="Debut"
              resizable={true}
              minWidth="88px"
              maxWidth="230px"
              dataType="number"
              sortable={true}
              filterable={true}
              formatter={debutFormatter}
            ></IgrColumn>
            <IgrColumn
              field="GrammyNominations"
              header="Grammy Nominations"
              resizable={true}
              sortable={true}
              filterable={true}
            ></IgrColumn>
            <IgrColumn
              field="GrammyAwards"
              header="Grammy Awards"
              resizable={true}
              sortable={true}
              filterable={true}
            ></IgrColumn>
            <IgrRowIsland
              childDataKey="Albums"
              autoGenerate={false}
              height={null}
              allowFiltering={true}
              filterMode="excelStyleFilter"
            >
              <IgrColumn
                field="Album"
                resizable={true}
                sortable={true}
                filterable={true}
              ></IgrColumn>
              <IgrColumn
                field="LaunchDate"
                header="Launch Date"
                resizable={true}
                dataType="date"
                sortable={true}
                filterable={true}
              ></IgrColumn>
              <IgrColumn
                field="BillboardReview"
                header="Billboard Review"
                resizable={true}
                sortable={true}
                filterable={true}
              ></IgrColumn>
              <IgrColumn
                field="USBillboard200"
                header="US Billboard 200"
                resizable={true}
                sortable={true}
                filterable={true}
              ></IgrColumn>
              <IgrRowIsland
                childDataKey="Songs"
                autoGenerate={false}
                height={null}
              >
                <IgrColumn
                  field="Number"
                  header="No."
                  resizable={true}
                ></IgrColumn>
                <IgrColumn field="Title" resizable={true}></IgrColumn>
                <IgrColumn
                  field="Released"
                  dataType="date"
                  resizable={true}
                ></IgrColumn>
                <IgrColumn field="Genre" resizable={true}></IgrColumn>
              </IgrRowIsland>
            </IgrRowIsland>
            <IgrRowIsland
              childDataKey="Tours"
              autoGenerate={false}
              height={null}
              allowFiltering={true}
              filterMode="excelStyleFilter"
            >
              <IgrColumn
                field="Tour"
                resizable={true}
                sortable={true}
                filterable={true}
              ></IgrColumn>
              <IgrColumn
                field="StartedOn"
                header="Started on"
                resizable={true}
                sortable={true}
                filterable={true}
              ></IgrColumn>
              <IgrColumn
                field="Location"
                resizable={true}
                sortable={true}
                filterable={true}
              ></IgrColumn>
              <IgrColumn
                field="Headliner"
                resizable={true}
                sortable={true}
                filterable={true}
              ></IgrColumn>
            </IgrRowIsland>
          </IgrHierarchicalGrid>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HierarchicalGridTheming />);
