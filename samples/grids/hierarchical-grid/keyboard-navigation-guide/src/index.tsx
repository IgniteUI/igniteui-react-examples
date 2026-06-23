
import React, { useEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  IgrHierarchicalGrid,
  IgrHierarchicalGridModule,
  IgrColumn,
  IgrRowIsland,
  IgrPaginator,
} from 'igniteui-react-grids';
import { IgrCheckbox } from 'igniteui-react';
import { IgrList, IgrListItem, IgrListHeader } from 'igniteui-react';
import SingersData from './SingersData.json';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

type Singer = {
  ID: number;
  Artist: string;
  Photo: string;
  Debut: number;
  GrammyNominations: number;
  GrammyAwards: number;
  HasGrammyAward: boolean;
  Tours?: any[];
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
  makeItem('Alt + ←/↑', 'collapse row detail', false, ItemAction.Collapsible),
  makeItem('Alt + →/↓', 'expand row detail', false, ItemAction.Collapsible),
  makeItem('Alt + ←/→', 'expand/collapse group row', false, ItemAction.Expandable),
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

function checkEditMode(): boolean {
  const editCells = document.querySelectorAll('.igx-grid__td--editing, .igx-grid__td--cell-editing');
  const editInputs = document.querySelectorAll('.igx-grid__td input, .igx-grid__td textarea, .igx-grid__td select');
  const editClasses = document.querySelector('.igx-grid--editing');
  return editCells.length > 0 || editInputs.length > 0 || !!editClasses;
}

export default function HierarchicalGridKeyboardNavGuide() {
  const gridRef = useRef<IgrHierarchicalGrid | null>(null);

  const data = SingersData as Singer[];
  const [gridSection, setGridSection] = useState<GridSection>(GridSection.THEAD);
  const [items, setItems] = useState<Item[]>(cloneItems(theadKeyCombinations));

  const headerText = useMemo(() => {
    if (gridSection === GridSection.THEAD) return 'HEADER COMBINATIONS';
    if (gridSection === GridSection.TBODY) return 'BODY COMBINATIONS';
    if (gridSection === GridSection.FOOTER) return 'SUMMARY COMBINATIONS';
    return '';
  }, [gridSection]);

  useEffect(() => {
    const handleGlobalKeyDown = (evt: KeyboardEvent) => {
      const target = evt.target as HTMLElement;
      const gridElement = (gridRef.current as any)?.nativeElement || gridRef.current;
      const isGridFocused = gridElement?.contains?.(target);
      
      if (!isGridFocused || checkEditMode()) {
        return;
      }

      const key = evt.key?.toLowerCase();
      const { altKey, ctrlKey, shiftKey } = evt;

      if (altKey && (key === 'arrowleft' || key === 'arrowright' || key === 'arrowup' || key === 'arrowdown')) {
        if (gridSection === GridSection.TBODY) {
          if (key === 'arrowleft' || key === 'arrowup') {
            setItems((prev: Item[]) => markCompleted(prev, 1, true));
          } else if (key === 'arrowright' || key === 'arrowdown') {
            setItems((prev: Item[]) => markCompleted(prev, 2, true));
          }
        }
      }

      if (ctrlKey && (key === 'home' || key === 'end')) {
        if (gridSection === GridSection.TBODY) {
          setItems((prev: Item[]) => markCompleted(prev, 4, true));
        }
      }

      if (key === 'enter' && gridSection === GridSection.TBODY) {
        setTimeout(() => {
          if (checkEditMode()) {
            setItems((prev: Item[]) => markCompleted(prev, 0, true));
          }
        }, 100);
      }
    };

    document.addEventListener('keydown', handleGlobalKeyDown, true);
    return () => {
      document.removeEventListener('keydown', handleGlobalKeyDown, true);
    };
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
    if (col?.editable) actions.push(ItemAction.Editable);

    setItems((prev: Item[]) => enableActions(prev, actions));
  };

  const onActiveNodeChange = () => {
    updateSectionFromActiveNode();
    refreshHeaderActions();
  };

  const onRowToggle = () => {
    if (gridSection === GridSection.TBODY) {
      setItems((prev: Item[]) => markCompleted(prev, 3, true));
    }
  };

  const onColumnSelectionChanging = (e: any) => {
    if (e?.detail?.event?.type === 'keydown') {
      setItems((prev: Item[]) => markCompleted(prev, 0, true));
    }
  };

  return (
    <div className="sample" style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 16 }}>
      <div className="grid_wrapper">
        <IgrHierarchicalGrid
          ref={gridRef}
          data={data}
          allowFiltering={true}
          filterMode="excelStyleFilter"
          allowAdvancedFiltering={true}
          columnSelection="single"
          moving={true}
          summaryCalculationMode="rootLevelOnly"
          rowEditable={true}
          primaryKey="ID"
          onActiveNodeChange={onActiveNodeChange as any}
          onRowToggle={onRowToggle as any}
          onColumnSelectionChanging={onColumnSelectionChanging as any}
        >
          <IgrPaginator />

          <IgrColumn field="Artist" header="Artist" sortable={true} selectable={true} editable={true} />
          <IgrColumn field="Photo" header="Photo" sortable={true} />
          <IgrColumn field="Debut" header="Debut" dataType="number" sortable={true} editable={true} />
          <IgrColumn field="GrammyNominations" header="Grammy Nominations" dataType="number" sortable={true} editable={true} />
          <IgrColumn field="GrammyAwards" header="Grammy Awards" dataType="number" sortable={true} editable={true} />
          <IgrColumn field="HasGrammyAward" header="Has Grammy" dataType="boolean" sortable={true} editable={true} />

          <IgrRowIsland childDataKey="Tours" autoGenerate={false} rowEditable={true} primaryKey="Tour">
            <IgrColumn field="Tour" header="Tour" sortable={true} editable={true} />
            <IgrColumn field="StartedOn" header="Started On" sortable={true} editable={true} />
            <IgrColumn field="Location" header="Location" sortable={true} editable={true} />
            <IgrColumn field="Headliner" header="Headliner" sortable={true} editable={true} />
          </IgrRowIsland>
        </IgrHierarchicalGrid>
      </div>

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

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HierarchicalGridKeyboardNavGuide />);
