
import React, { useEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  IgrGrid,
  IgrGridModule,
  IgrColumn,
  IgrColumnGroup,
  IgrPaginator,
  IgrGridToolbar,
  IgrGridMasterDetailContext,
} from 'igniteui-react-grids';
import { IgrCheckbox } from 'igniteui-react';
import { IgrList, IgrListItem, IgrListHeader } from 'igniteui-react';
import NwindData from './NwindData.json';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

IgrGridModule.register();

interface MasterDetailTemplateProps {
  dataContext: IgrGridMasterDetailContext;
}

type Customer = {
  ProductID: number;
  ProductName: string;
  SupplierID: number;
  CategoryID: number;
  QuantityPerUnit: string;
  UnitPrice: number;
  UnitsInStock: number;
  UnitsOnOrder: number;
  ReorderLevel: number;
  Discontinued: boolean;
  OrderDate: string;
  Rating: number;
  Locations?: any[];
  CompanysAnnualProfit?: number;
};
enum GridSection {
  THEAD = 'thead',
  TBODY = 'tbody',
  FOOTER = 'tfoot',
}

enum ItemAction {
  Filterable,
  Sortable,
  Selectable,
  Groupable,
  Collapsible,
  Expandable,
  Editable,
  Always,
}

type Item = {
  title: string;
  subTitle: string;
  action: ItemAction;
  active: boolean;
  completed: boolean;
};

const makeItem = (
  title: string,
  subTitle: string,
  completed: boolean,
  action: ItemAction
): Item => ({ title, subTitle, completed, action, active: action === ItemAction.Always });

const theadKeyCombinations: Item[] = [
  makeItem('Space', 'select column', false, ItemAction.Selectable),
  makeItem('Ctrl + ↑/↓', 'sort column asc/desc', false, ItemAction.Sortable),
  makeItem('Shift + Alt + ←/→', 'group / ungroup column', false, ItemAction.Groupable),
  makeItem('Alt + arrows', 'expand / collapse column group', false, ItemAction.Collapsible),
  makeItem('Ctrl + Shift + L', 'open Excel-style filter', false, ItemAction.Filterable),
  makeItem('Alt + L', 'open Advanced filtering', false, ItemAction.Filterable),
];

const tbodyKeyCombinations: Item[] = [
  makeItem('Enter', 'enter edit mode', false, ItemAction.Editable),
  makeItem('Alt + ←/→', 'expand/collapse group row', false, ItemAction.Expandable),
  makeItem('Ctrl + Home/End', 'jump to first/last cell', false, ItemAction.Always),
  makeItem('Alt + →/↓', 'expand row detail', false, ItemAction.Collapsible),
  makeItem('Alt + ←/↑', 'collapse row detail', false, ItemAction.Collapsible),
];

const summaryCombinations: Item[] = [
  makeItem('←', 'move left', false, ItemAction.Always),
  makeItem('→', 'move right', false, ItemAction.Always),
  makeItem('Home', 'first summary cell', false, ItemAction.Always),
  makeItem('End', 'last summary cell', false, ItemAction.Always),
];

const cloneItems = (items: Item[]) => items.map(i => ({ ...i }));

function enableActions(list: Item[], actions: ItemAction[]) {
  return list.map(i =>
    i.action === ItemAction.Always
      ? { ...i, active: true }
      : { ...i, active: actions.includes(i.action) }
  );
}

function markCompleted(list: Item[], idx: number, value: boolean) {
  const next = list.slice();
  next[idx] = { ...next[idx], completed: value };
  return next;
}

function withComputed(data: Customer[]): Customer[] {
  return data.map((item) => {
    const profit = (100000 + Math.random() * 1000000);
    return {
      ...item,
      CompanysAnnualProfit: profit,
    };
  });
}

const MasterDetailTemplate: React.FC<MasterDetailTemplateProps> = ({ dataContext }) => {
  const rowData = dataContext.implicit as Customer;
  
  return (
    <div style={{ padding: '16px', backgroundColor: '#f8f9fa', border: '1px solid #dee2e6' }}>
      <h4 style={{ margin: '0 0 12px 0', color: '#495057' }}>Product Details</h4>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div>
          <strong>Product ID:</strong> {rowData.ProductID}<br />
          <strong>Supplier ID:</strong> {rowData.SupplierID}<br />
          <strong>Category ID:</strong> {rowData.CategoryID}<br />
          <strong>Unit Price:</strong> ${rowData.UnitPrice?.toFixed(2)}<br />
        </div>
        <div>
          <strong>Units in Stock:</strong> {rowData.UnitsInStock}<br />
          <strong>Units on Order:</strong> {rowData.UnitsOnOrder}<br />
          <strong>Reorder Level:</strong> {rowData.ReorderLevel}<br />
          <strong>Discontinued:</strong> {rowData.Discontinued ? 'Yes' : 'No'}<br />
        </div>
      </div>
      {rowData.OrderDate && (
        <div style={{ marginTop: '12px' }}>
          <strong>Order Date:</strong> {new Date(rowData.OrderDate).toLocaleDateString()}
        </div>
      )}
      {rowData.CompanysAnnualProfit && (
        <div style={{ marginTop: '8px' }}>
          <strong>Annual Profit:</strong> ${rowData.CompanysAnnualProfit.toLocaleString()}
        </div>
      )}
    </div>
  );
};

export default function GridKeyboardNavGuide() {
  const gridRef = useRef<IgrGrid | null>(null);

  const [data, setData] = useState<Customer[]>(() => withComputed(NwindData as Customer[]));
  const [gridSection, setGridSection] = useState<GridSection>(GridSection.THEAD);
  const [items, setItems] = useState<Item[]>(cloneItems(theadKeyCombinations));

  useEffect(() => {
    const handleGlobalKeyDown = (evt: KeyboardEvent) => {
      const key = evt.key?.toLowerCase();
      
      const gridElement = (gridRef.current as any)?.nativeElement;
      const focusedElement = document.activeElement;
      
      if (gridElement && (gridElement.contains(focusedElement) || gridElement === focusedElement)) {
        if (evt.altKey && (key === 'arrowup' || key === 'arrowdown' || key === 'arrowleft' || key === 'arrowright')) {
          if (gridSection === GridSection.TBODY) {
            if (key === 'arrowup' || key === 'arrowleft') {
              setTimeout(() => {
                setItems((prev: Item[]) => markCompleted(prev, 4, true));
              }, 0);
            } else if (key === 'arrowdown' || key === 'arrowright') {
              setTimeout(() => {
                setItems((prev: Item[]) => markCompleted(prev, 3, true));
              }, 0);
            }
          }
        }
        
        if (evt.ctrlKey && (key === 'home' || key === 'end')) {
          if (gridSection === GridSection.TBODY) {
            setTimeout(() => {
              setItems((prev: Item[]) => markCompleted(prev, 2, true));
            }, 0);
          }
        }
      }
    };

    document.addEventListener('keydown', handleGlobalKeyDown, true);
    
    return () => {
      document.removeEventListener('keydown', handleGlobalKeyDown, true);
    };
  }, [gridSection]);

  const headerText = useMemo(() => {
    if (gridSection === GridSection.THEAD) return 'HEADER COMBINATIONS';
    if (gridSection === GridSection.TBODY) return 'BODY COMBINATIONS';
    if (gridSection === GridSection.FOOTER) return 'SUMMARY COMBINATIONS';
    return '';
  }, [gridSection]);

  const updateSectionFromActiveNode = () => {
    const grid = gridRef.current;
    const active = (grid as any)?.navigation?.activeNode;
    const rows = grid?.data?.length ?? data.length;
    if (active && typeof active.row === 'number') {
      if (active.row < 0) {
        setGridSection(GridSection.THEAD);
        setItems(cloneItems(theadKeyCombinations));
      } else if (active.row >= rows) {
        setGridSection(GridSection.FOOTER);
        setItems(cloneItems(summaryCombinations));
      } else {
        setGridSection(GridSection.TBODY);
        setItems(cloneItems(tbodyKeyCombinations));
      }
    }
  };

  const onGridKeyDown = (evt: any) => {
    const key = evt.key?.toLowerCase();
    if (!key) return;
    if (key === 'tab') return;

    if (evt.altKey && (key === 'arrowleft' || key === 'arrowright' || key === 'arrowup' || key === 'arrowdown')) {
      evt.preventDefault();
    }

    if ((key === 'l' && evt.altKey) || 
        (key === 'l' && evt.ctrlKey && evt.shiftKey) ||
        ((key === 'arrowup' || key === 'arrowdown') && evt.ctrlKey) ||
        ((key === 'end' || key === 'home') && evt.ctrlKey)) {
      evt.preventDefault();
    }

    updateSectionFromActiveNode();

    setItems((prev: Item[]) => {
      let next = prev.slice();

      if (gridSection === GridSection.FOOTER) {
        switch (key) {
          case 'end':
            next = markCompleted(next, 3, true);
            break;
          case 'home':
            next = markCompleted(next, 2, true);
            break;
          case 'arrowleft':
            next = markCompleted(next, 0, true);
            break;
          case 'arrowright':
            next = markCompleted(next, 1, true);
            break;
        }
        return next;
      }

      if (gridSection === GridSection.THEAD) {
        if (key === 'l' && evt.altKey) {
          next = markCompleted(next, 5, true);
          return next;
        }
        if (key === 'l' && evt.ctrlKey && evt.shiftKey) {
          next = markCompleted(next, 4, true);
        }
        if ((key === 'arrowleft' || key === 'arrowright') && evt.altKey && evt.shiftKey) {
          next = markCompleted(next, 2, true);
        }
        if ((key === 'arrowup' || key === 'arrowdown') && evt.ctrlKey) {
          next = markCompleted(next, 1, true);
        }
        if (key === ' ' || key === 'spacebar') {
          next = markCompleted(next, 0, true);
        }
      }

      if (gridSection === GridSection.TBODY) {
        if (key === 'enter') {
          next = markCompleted(next, 0, true);
        }
        if ((key === 'end' || key === 'home') && evt.ctrlKey) {
          next = markCompleted(next, 2, true);
        }
      }

      return next;
    });
  };

  const refreshHeaderActions = () => {
    const grid: any = gridRef.current;
    if (!grid) return;

    if (gridSection !== GridSection.THEAD) return;

    const active = grid?.navigation?.activeNode;
    const col = grid.visibleColumns?.find(
      (c: any) => c.visibleIndex === active?.column && c.level === active?.level
    );

    const actions: ItemAction[] = [];
    if (col?.sortable) actions.push(ItemAction.Sortable);
    if (col?.filterable && !col?.columnGroup) actions.push(ItemAction.Filterable);
    if (col?.collapsible) actions.push(ItemAction.Collapsible);
    if (col?.groupable) actions.push(ItemAction.Groupable);
    if (col?.selectable) actions.push(ItemAction.Selectable);

    setItems((prev: Item[]) => enableActions(prev, actions));
  };

  // When grid focuses a new node, update section + header actions
  const onActiveNodeChange = () => {
    updateSectionFromActiveNode();
    refreshHeaderActions();
  };

  const onRowToggle = () => {
    if (gridSection === GridSection.TBODY) {
      setItems((prev: Item[]) => markCompleted(prev, 1, true));
    }
  };

  const onColumnSelectionChanging = (e: any) => {
    if (e?.detail?.event?.type === 'keydown') {
      setItems((prev: Item[]) => markCompleted(prev, 0, true));
    }
  };

  return (
    <div className="sample" style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 16, height: '100vh', overflow: 'hidden' }}>
      <div className="grid_wrapper" style={{ overflow: 'auto' }} onKeyDown={onGridKeyDown}>
        <IgrGrid
          ref={gridRef}
          data={data}
          primaryKey="ProductID"
          detailTemplate={MasterDetailTemplate}
          allowFiltering={true}
          filterMode="excelStyleFilter"
          allowAdvancedFiltering={true}
          columnSelection="single"
          moving={true}
          summaryCalculationMode="rootLevelOnly"
          onActiveNodeChange={onActiveNodeChange as any}
          onRowToggle={onRowToggle as any}
          onColumnSelectionChanging={onColumnSelectionChanging as any}
        >
          <IgrPaginator />
          {/* Toolbar can be conditionally shown if needed */}
          {/* <IgrGridToolbar /> */}

          {/* Row detail template removed for simplicity */}

          {/* Column Groups */}
          <IgrColumnGroup header="Product Information">
            <IgrColumn
              field="ProductName"
              header="Product Name"
              hasSummary={true}
              groupable={true}
              editable={true}
              sortable={true}
              selectable={false}
            />
            <IgrColumn
              field="ProductID"
              header="Product ID"
              width="120px"
              sortable={true}
              selectable={true}
            />
            <IgrColumn
              field="QuantityPerUnit"
              header="Quantity Per Unit"
              width="200px"
              sortable={true}
              editable={true}
            />
          </IgrColumnGroup>

          <IgrColumnGroup header="Pricing & Stock">
            <IgrColumn
              field="UnitPrice"
              header="Unit Price"
              dataType="number"
              hasSummary={true}
              sortable={true}
              editable={true}
            />
            <IgrColumn
              field="UnitsInStock"
              header="Units In Stock"
              dataType="number"
              sortable={true}
              editable={true}
            />
            <IgrColumn
              field="UnitsOnOrder"
              header="Units On Order"
              dataType="number"
              sortable={true}
            />
            <IgrColumn
              field="ReorderLevel"
              header="Reorder Level"
              dataType="number"
              sortable={true}
              editable={true}
            />
          </IgrColumnGroup>

          <IgrColumnGroup header="Additional Info">
            <IgrColumn
              field="Discontinued"
              header="Discontinued"
              dataType="boolean"
              sortable={true}
              editable={true}
            />
            <IgrColumn
              field="OrderDate"
              header="Order Date"
              dataType="date"
              sortable={true}
            />
            <IgrColumn
              field="Rating"
              header="Rating"
              dataType="number"
              sortable={true}
              editable={true}
            />
            <IgrColumn
              field="CompanysAnnualProfit"
              header="Annual Profit"
              dataType="number"
              hasSummary={true}
              sortable={true}
            />
          </IgrColumnGroup>
        </IgrGrid>
      </div>

      {/* Right-side list showing active/available shortcuts */}
      <div className="list-sample" style={{ overflow: 'auto', height: '100vh', position: 'sticky', top: 0 }}>
        <IgrList>
          {items.length > 0 && (
            <IgrListHeader>
              {headerText}
            </IgrListHeader>
          )}
          {items.map((c: Item, idx: number) => (
            <IgrListItem key={idx} className={`${c.active ? 'active' : 'disabled'}`}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%' }}>
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: 0 }}>{c.title}</h4>
                  <p style={{ margin: 0, opacity: 0.8 }}>{c.subTitle}</p>
                </div>
                <IgrCheckbox
                  disabled={!c.active}
                  checked={c.completed}
                  onChange={(e: any) => {
                    const checked = !!e?.detail;
                    setItems((prev: Item[]) => markCompleted(prev, idx, checked));
                  }}
                />
              </div>
            </IgrListItem>
          ))}

          {items.length === 0 && (
            <div className="empty-list" style={{ padding: 12 }}>
              <h6>Use the browser navigation until you reach one of the following grid sections:</h6>
              <ul>
                <li>Header</li>
                <li>Body</li>
                <li>Summary</li>
              </ul>
              <h6>When reached, an <b>action list</b> will be shown.</h6>
            </div>
          )}
        </IgrList>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<GridKeyboardNavGuide />);
