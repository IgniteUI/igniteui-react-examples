import { useCallback, useState } from 'react';
import { Stock } from './FinancialData.ts';

export interface FloatingPaneData {
  id: string;
  title: string;
  data: Stock[];
  category: string;
}

let paneCounter = 1;

export function useFloatingPanes() {
  const [floatingPanes, setFloatingPanes] = useState<FloatingPaneData[]>([]);

  const createFloatingPane = useCallback((category: string, allData: Stock[]) => {
    const filteredData = allData.filter(item => item.category === category);
    
    const newPane: FloatingPaneData = {
      id: `pane-${category.toLowerCase()}-${paneCounter++}`,
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

  return {
    floatingPanes,
    createFloatingPane,
    closeFloatingPane,
    updatePaneData
  };
}
