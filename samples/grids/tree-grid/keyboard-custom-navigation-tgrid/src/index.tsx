
import React, { useEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  IgrTreeGrid,
  IgrColumn,
  IgrPaginator
} from 'igniteui-react-grids';
import { IgrCheckbox } from 'igniteui-react';
import { IgrList, IgrListItem, IgrListHeader } from 'igniteui-react';
import { EmployeesNestedDataItem, EmployeesNestedData } from './EmployeesNestedData';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

type Employee = EmployeesNestedDataItem;
enum GridSection {
  THEAD = 'thead',
  TBODY = 'tbody',
  FOOTER = 'tfoot',
}

enum ItemAction {
  Filterable,
  Sortable,
  Selectable,
  Collapsible,
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
  makeItem('Ctrl + Shift + L', 'open Excel-style filter', false, ItemAction.Filterable),
  makeItem('Alt + L', 'open Advanced filtering', false, ItemAction.Filterable),
];

const tbodyKeyCombinations: Item[] = [
  makeItem('Enter', 'enter edit mode', false, ItemAction.Editable),
  makeItem('Alt + ←/↑', 'collapse row detail', false, ItemAction.Collapsible),
  makeItem('Alt + →/↓', 'expand row detail', false, ItemAction.Collapsible),
  makeItem('Ctrl + Home/End', 'jump to first/last cell', false, ItemAction.Always),
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

export default function TreeGridKeyboardNavGuide() {
  const gridRef = useRef<IgrTreeGrid | null>(null);
  const lastKeyRef = useRef<string>('');
  const isInEditModeRef = useRef<boolean>(false);

  const [data] = useState<Employee[]>(() => new EmployeesNestedData());
  const [gridSection, setGridSection] = useState<GridSection>(GridSection.THEAD);
  const [items, setItems] = useState<Item[]>(cloneItems(theadKeyCombinations));

  const checkEditMode = () => {
    const editingCell = document.querySelector('.igx-grid__td--editing, .igc-grid__td--editing');
    const gridElement = (gridRef.current as any)?.nativeElement;
    const inputInGrid = gridElement?.querySelector('input, textarea, select');
    return !!(editingCell || inputInGrid);
  };

  useEffect(() => {
    const handleGlobalKeyDown = (evt: KeyboardEvent) => {
      const key = evt.key?.toLowerCase();
      
      const gridElement = (gridRef.current as any)?.nativeElement;
      const focusedElement = document.activeElement;
      
      if (gridElement && (gridElement.contains(focusedElement) || gridElement === focusedElement)) {
        if (evt.altKey && (key === 'arrowup' || key === 'arrowdown' || key === 'arrowleft' || key === 'arrowright')) {
          lastKeyRef.current = key;
        }
        
        if (evt.ctrlKey && (key === 'home' || key === 'end')) {
          lastKeyRef.current = key;
          
          if (gridSection === GridSection.TBODY) {
            setTimeout(() => {
              setItems((prev: Item[]) => markCompleted(prev, 3, true));
            }, 0);
          }
        }
        
        if (key === 'enter') {
          const focusedElement = document.activeElement;
          
          const focusedIsInput = focusedElement && (
            focusedElement.tagName === 'INPUT' || 
            focusedElement.tagName === 'TEXTAREA' || 
            focusedElement.tagName === 'SELECT'
          );
          
          const focusedCellInEditMode = focusedElement && focusedElement.closest('.igx-grid__td--editing, .igc-grid__td--editing');
          
          const currentlyInEditMode = !!(focusedIsInput || focusedCellInEditMode);
          
          if (!currentlyInEditMode && gridSection === GridSection.TBODY) {
            setItems((prev: Item[]) => markCompleted(prev, 0, true));
          }
          
          isInEditModeRef.current = currentlyInEditMode;
        }

        if (key === 'escape') {
          setTimeout(() => {
            isInEditModeRef.current = checkEditMode();
          }, 10);
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
        if (gridSection !== GridSection.THEAD) {
          setItems(cloneItems(theadKeyCombinations));
        }
      } else if (active.row >= rows) {
        setGridSection(GridSection.FOOTER);
        if (gridSection !== GridSection.FOOTER) {
          setItems(cloneItems(summaryCombinations));
        }
      } else {
        setGridSection(GridSection.TBODY);
        if (gridSection !== GridSection.TBODY) {
          setItems(cloneItems(tbodyKeyCombinations));
        }
      }
    }
  };

  const onGridKeyDown = (evt: any) => {
    const key = evt.key?.toLowerCase();
    if (!key) return;
    if (key === 'tab') return;

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
          next = markCompleted(next, 3, true);
          return next;
        }
        if (key === 'l' && evt.ctrlKey && evt.shiftKey) {
          next = markCompleted(next, 2, true);
        }
        if ((key === 'arrowup' || key === 'arrowdown') && evt.ctrlKey) {
          next = markCompleted(next, 1, true);
        }
        if (key === ' ' || key === 'spacebar') {
          next = markCompleted(next, 0, true);
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
    if (col?.selectable) actions.push(ItemAction.Selectable);

    setItems((prev: Item[]) => enableActions(prev, actions));
  };

  const onActiveNodeChange = () => {
    updateSectionFromActiveNode();
    refreshHeaderActions();
    
    setTimeout(() => {
      isInEditModeRef.current = checkEditMode();
    }, 10);
  };

  useEffect(() => {
    const handleGlobalClick = () => {
      setTimeout(() => {
        isInEditModeRef.current = checkEditMode();
      }, 10);
    };

    document.addEventListener('click', handleGlobalClick, true);
    
    return () => {
      document.removeEventListener('click', handleGlobalClick, true);
    };
  }, []);

  const onRowToggle = () => {
    if (gridSection === GridSection.TBODY || gridSection === GridSection.FOOTER) {
      const lastKey = lastKeyRef.current;
      setItems((prev: Item[]) => {
        if (lastKey === 'arrowup' || lastKey === 'arrowleft') {
          return markCompleted(prev, 1, true);
        } else if (lastKey === 'arrowdown' || lastKey === 'arrowright') {
          return markCompleted(prev, 2, true);
        }
        return prev;
      });
      setTimeout(() => {
        lastKeyRef.current = '';
      }, 100);
    }
  };

  return (
    <div className="sample" style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 16 }}>
      <div className="grid_wrapper">
        <IgrTreeGrid
          ref={gridRef}
          data={data}
          childDataKey="Employees"
          allowFiltering={true}
          filterMode="excelStyleFilter"
          allowAdvancedFiltering={true}
          columnSelection="single"
          moving={true}
          summaryCalculationMode="rootLevelOnly"
          onActiveNodeChange={onActiveNodeChange as any}
          onRowToggle={onRowToggle as any}
          onKeyDown={onGridKeyDown as any}
        >
          <IgrPaginator />

          {/* Tree grid columns for Employees */}
          <IgrColumn field="Name" header="Name" sortable={true} selectable={true} editable={true} />
          <IgrColumn field="Title" header="Title" sortable={true} editable={true} />
          <IgrColumn field="Age" header="Age" dataType="number" sortable={true} editable={true} />
          <IgrColumn field="Salary" header="Salary" dataType="currency" sortable={true} editable={true} />
          <IgrColumn field="Productivity" header="Productivity" dataType="number" sortable={true} editable={true} />
          <IgrColumn field="City" header="City" sortable={true} editable={true} />
          <IgrColumn field="Country" header="Country" sortable={true} />
          <IgrColumn field="Phone" header="Phone" sortable={true} editable={true} />
          <IgrColumn field="HireDate" header="Hire Date" dataType="date" sortable={true} />
        </IgrTreeGrid>
      </div>

      {/* Right-side list showing active/available shortcuts */}
      <div className="list-sample" style={{ overflow: 'auto' }}>
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

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<TreeGridKeyboardNavGuide />);
