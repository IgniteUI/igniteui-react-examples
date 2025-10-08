import { useCallback, useState, useMemo } from 'react';
import { IgcDockManagerPaneType, IgcSplitPaneOrientation } from "igniteui-dockmanager";
import { Stock } from './FinancialData.ts';

export interface FloatingPaneConfig {
  x: number;
  y: number;
  width?: number;
  height?: number;
}

export interface DockPane {
  type: IgcDockManagerPaneType;
  contentId: string;
  header: string;
  size?: number;
  isSelected?: boolean;
  isPinned?: boolean;
}

export interface FloatingPaneData {
  id: string;
  title: string;
  data: Stock[];
  category: string;
}

export function useFloatingPanes() {
  const [floatingPanes, setFloatingPanes] = useState<FloatingPaneData[]>([]);

  const createFloatingPane = useCallback((category: string, allData: Stock[]) => {
    const filteredData = allData.filter(item => item.category === category);
    
    const newPane: FloatingPaneData = {
      id: `pane-${category.toLowerCase()}-${Date.now()}`,
      title: `${category} Portfolio`,
      data: filteredData,
      category
    };

    setFloatingPanes(prev => [...prev, newPane]);
  }, []);

  const closeFloatingPane = useCallback((paneId: string) => {
    setFloatingPanes(prev => prev.filter(pane => pane.id !== paneId));
  }, []);

  const updatePaneData = useCallback((allData: Stock[]) => {
    setFloatingPanes(prev => 
      prev.map(pane => ({
        ...pane,
        data: allData.filter(item => item.category === pane.category)
      }))
    );
  }, []);

  const availableCategories = useMemo(() => {
    return ['Technology', 'Energy', 'Finance', 'Healthcare', 'Utilities', 'Consumer', 'Industrial'];
  }, []);

  return {
    floatingPanes,
    createFloatingPane,
    closeFloatingPane,
    updatePaneData,
    availableCategories
  };
}
