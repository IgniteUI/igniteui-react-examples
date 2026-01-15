import React, { useEffect, useRef, useState, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import { IgcDockManagerComponent } from "igniteui-dockmanager";
import { IgcDockManagerPaneType, IgcSplitPaneOrientation } from "igniteui-dockmanager";
import { defineCustomElements } from "igniteui-dockmanager/loader";
import {
  IgrGrid,
  IgrColumn,
  IgrGridToolbar,
  IgrGridToolbarActions,
  IgrGridToolbarHiding,
  IgrGridToolbarPinning,
  IgrGridToolbarExporter,
  IgrGridToolbarTitle
} from 'igniteui-react-grids';
import { IgrFinancialChart, IgrFinancialChartModule } from 'igniteui-react-charts';
import './index.css';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

IgrFinancialChartModule.register();

import { useSignalRData, StreamingDataConfig } from './useSignalRData.ts';

defineCustomElements();

interface GridColumn {
  field: string;
  width: string;
  dataType: 'currency' | 'date' | 'number' | 'string' | 'percent';
}

interface MarketDataGridProps {
  data: any[];
  isLoading: boolean;
  additionalColumns?: GridColumn[];
  height?: string;
}

// Declare WC components
declare global {
    namespace JSX {
        interface IntrinsicElements {
            "igc-dockmanager": any;
        }
    }
}

const MarketDataGrid = ({ 
  data, 
  isLoading, 
  additionalColumns = [],
  height = '100%'
}: MarketDataGridProps) => {
  const renderColumn = (column: GridColumn, index: number) => (
    <IgrColumn
      key={column.field}
      field={column.field}
      header={column.field}
      width={column.width}
      dataType={column.dataType}
      sortable={true}
    />
  );

  return (
    <IgrGrid
      data={data}
      primaryKey="id"
      allowFiltering={true}
      filterMode="excelStyleFilter"
      columnSelection="multiple"
      cellSelection="none"
      isLoading={isLoading}
      height={height}
    >
      <IgrGridToolbar>
        <IgrGridToolbarTitle>
          <span>Market Data</span>
        </IgrGridToolbarTitle>
        <IgrGridToolbarActions>
          <IgrGridToolbarHiding />
          <IgrGridToolbarPinning />
          <IgrGridToolbarExporter />
        </IgrGridToolbarActions>
      </IgrGridToolbar>
      <IgrColumn field="id" width="70px" hidden={true} sortable={true} />
      <IgrColumn field="category" width="120px" sortable={true} />
      <IgrColumn field="type" width="100px" sortable={true} filterable={false} />
      <IgrColumn field="contract" width="100px" sortable={true} />
      <IgrColumn field="price" width="130px" dataType="number" sortable={true} />
      <IgrColumn field="change" width="120px" dataType="number" sortable={true} />
      <IgrColumn field="changeP" width="110px" dataType="percent" sortable={true} />
      {additionalColumns.map(renderColumn)}
    </IgrGrid>
  );
};

export default function GridFinJSDockManager() {
  const dockRef = useRef<IgcDockManagerComponent>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [frequency, setFrequency] = useState(600);
  const [dataVolume, setDataVolume] = useState(500);
  const [isLiveMode, setIsLiveMode] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [slotCounter, setSlotCounter] = useState(1);
  const [createdPanes, setCreatedPanes] = useState<string[]>([]);

  useEffect(() => {
    const existingDarkThemes = document.querySelectorAll('link[data-ig-theme="dark"]');
    existingDarkThemes.forEach(link => link.remove());

    if (isDarkTheme) {
      const darkGridTheme = document.createElement('link');
      darkGridTheme.rel = 'stylesheet';
      darkGridTheme.href = '/themes/dark/grid-bootstrap.css';
      darkGridTheme.setAttribute('data-ig-theme', 'dark');
      darkGridTheme.onload = () => { /* Theme loaded successfully */ };
      darkGridTheme.onerror = () => { /* Theme loading failed - fallback to default styling */ };
      document.head.appendChild(darkGridTheme);
    }

    document.body.className = isDarkTheme ? 'dark-theme' : 'light-theme';
  }, [isDarkTheme]);

  const { data, hasRemoteConnection, isConnecting, startConnection, updateConfiguration, stopLiveData } = useSignalRData();

  const gridColumns = useMemo(() => [
    { field: 'buy', width: '110px', dataType: 'currency' as const },
    { field: 'sell', width: '110px', dataType: 'currency' as const },
    { field: 'openPrice', width: '120px', dataType: 'currency' as const },
    { field: 'lastUpdated', width: '120px', dataType: 'date' as const },
    { field: 'spread', width: '110px', dataType: 'number' as const },
    { field: 'volume', width: '110px', dataType: 'number' as const },
    { field: 'settlement', width: '100px', dataType: 'string' as const },
    { field: 'country', width: '100px', dataType: 'string' as const },
    { field: 'highD', width: '110px', dataType: 'currency' as const },
    { field: 'lowD', width: '110px', dataType: 'currency' as const },
    { field: 'highY', width: '110px', dataType: 'currency' as const },
    { field: 'lowY', width: '110px', dataType: 'currency' as const }
  ], []);

  const baseDockLayout = useMemo(() => ({
    rootPane: {
      type: IgcDockManagerPaneType.splitPane,
      orientation: IgcSplitPaneOrientation.horizontal,
      panes: [
        {
          type: IgcDockManagerPaneType.contentPane,
          contentId: 'actionPane',
          header: 'Actions pane',
          size: 20,
          isPinned: false,
          allowClose: false
        },
        {
          size: 50,
          type: IgcDockManagerPaneType.contentPane,
          contentId: 'gridStockPrices',
          header: 'Stock Market Data',
          allowClose: false
        },
        {
          type: IgcDockManagerPaneType.splitPane,
          orientation: IgcSplitPaneOrientation.vertical,
          size: 50,
          panes: [
            {
              type: IgcDockManagerPaneType.documentHost,
              size: 50,
              rootPane: {
                type: IgcDockManagerPaneType.splitPane,
                orientation: IgcSplitPaneOrientation.horizontal,
                panes: [
                  {
                    type: IgcDockManagerPaneType.tabGroupPane,
                    panes: [
                      {
                        type: IgcDockManagerPaneType.contentPane,
                        contentId: 'forexMarket',
                        header: 'Market Data 1'
                      },
                      {
                        type: IgcDockManagerPaneType.contentPane,
                        contentId: 'content4',
                        header: 'Market Data 2'
                      }
                    ]
                  }
                ]
              }
            },
            {
              type: IgcDockManagerPaneType.splitPane,
              orientation: IgcSplitPaneOrientation.horizontal,
              size: 50,
              panes: [
                {
                  type: IgcDockManagerPaneType.contentPane,
                  contentId: 'etfStockPrices',
                  header: 'Market Data 3',
                  size: 50,
                  allowClose: false
                },
                {
                  type: IgcDockManagerPaneType.contentPane,
                  contentId: 'priceChart',
                  header: 'Financial Chart',
                  size: 50,
                  allowClose: false
                }
              ]
            }
          ]
        }
      ]
    },
    floatingPanes: []
  }), []);

  const filteredCategoryData = useMemo(() => data.filter(item => item.category === 'Metal'), [data]);

  // Prepare data for financial chart - use first 50 items with OHLC-like fields
  const chartData = useMemo(() => {
    return data.slice(0, 50).map((item) => ({
      date: item.lastUpdated || new Date(),
      open: item.openPrice,
      high: item.highD,
      low: item.lowD,
      close: item.price,
      volume: item.volume,
      label: item.contract
    }));
  }, [data]);

  const startConnectionRef = useRef(startConnection);
  const stopLiveDataRef = useRef(stopLiveData);
  const isInitialMount = useRef(true);
  
  useEffect(() => {
    startConnectionRef.current = startConnection;
    stopLiveDataRef.current = stopLiveData;
  }, [startConnection, stopLiveData]);

  // Initialize data connection 
  useEffect(() => {
    const config: StreamingDataConfig = {
      interval: 600,
      volume: 500,
      live: true,
      updateAll: true
    };
    
    startConnectionRef.current(config);
    
    return () => {
      stopLiveDataRef.current().catch(console.error);
    };
  }, []); 

  // Update on change (skip initial mount to avoid double initialization)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    
    const config: StreamingDataConfig = {
      interval: frequency,
      volume: dataVolume,
      live: isLiveMode,
      updateAll: true
    };
    updateConfiguration(config);
  }, [frequency, dataVolume, isLiveMode, updateConfiguration]);

  // Live data toggle on/off
  const handleLiveDataToggle = (enabled: boolean) => {
    setIsLiveMode(enabled);
    if (enabled) {
      const config: StreamingDataConfig = {
        interval: frequency,
        volume: dataVolume,
        live: enabled,
        updateAll: true
      };
      startConnection(config);
    } else {
      stopLiveData();
    }
  };

  const onCreateFloatingPane = () => {
    if (createdPanes.length >= 5) return;

    if (!data || data.length === 0) {
      return;
    }
    
    if (dockRef.current) {
      const id = `slot-${slotCounter}`;
      setSlotCounter(prev => prev + 1);
      setCreatedPanes(prev => [...prev, id]);
      
      const splitPane = {
        type: IgcDockManagerPaneType.splitPane as IgcDockManagerPaneType.splitPane,
        orientation: IgcSplitPaneOrientation.horizontal,
        floatingWidth: 550,
        floatingHeight: 350,
        panes: [
          {
            type: IgcDockManagerPaneType.contentPane as IgcDockManagerPaneType.contentPane,
            header: `Floating Pane ${createdPanes.length + 1}`,
            contentId: id
          }
        ]
      };
      
      const currentLayout = dockRef.current.layout;
      if (currentLayout) {
        if (!currentLayout.floatingPanes) {
          currentLayout.floatingPanes = [];
        }
        currentLayout.floatingPanes.push(splitPane);
        dockRef.current.layout = { ...currentLayout };
      }
    }
  };

  // Update loading state
  useEffect(() => {
    if (data && data.length > 0 && !isConnecting) {
      setIsLoading(false)
    } else if (isConnecting) {
      setIsLoading(true);
    }
  }, [data, isConnecting]);

  const createdPanesRef = useRef(createdPanes);
  useEffect(() => {
    createdPanesRef.current = createdPanes;
  }, [createdPanes]);

  // Initialize dock manager
  useEffect(() => {
    const dockManager = dockRef.current;
    
    const handlePaneClose = (event: CustomEvent) => {
      const paneId = event.detail?.pane?.contentId;
      if (paneId && createdPanesRef.current.includes(paneId)) {
        setCreatedPanes(prev => prev.filter(id => id !== paneId));
      }
    };

    const timeout = setTimeout(() => {
      if (dockManager) {
        dockManager.layout = baseDockLayout as any;
        dockManager.addEventListener('paneClose', handlePaneClose);
      }
    }, 200);

    return () => {
      clearTimeout(timeout);
      if (dockManager) {
        dockManager.removeEventListener('paneClose', handlePaneClose);
      }
    };
  }, [baseDockLayout]);

  return (
    <div className={isDarkTheme ? 'dark-theme' : 'light-theme'} style={{ height: '100vh', width: '100%' }}>
      <igc-dockmanager ref={dockRef} style={{ height: '100%' }}>
        <div slot="actionPane" style={{ padding: '20px', height: '100%' }}>
          <h3>Financial Trading Dashboard</h3>
          
          <div style={{ marginBottom: '15px' }}>
            <label>
              <input 
                type="checkbox" 
                checked={isLiveMode}
                onChange={(e) => handleLiveDataToggle(e.target.checked)}
                disabled={isConnecting}
              /> 
              Live Data Feed {isConnecting ? '🟡' : hasRemoteConnection ? '🟢' : '🔴'}
              {isConnecting && ' (Connecting...)'}
            </label>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label>
              Update Frequency: {frequency}ms
              <br />
              <input
                type="range"
                min="50"
                max="2000"
                step="50"
                value={frequency}
                onChange={(e) => {
                  setFrequency(Number(e.target.value));
                }}
                style={{ width: '100%' }}
              />
            </label>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label>
              Data Volume: {dataVolume}
              <br />
              <input
                type="range"
                min="100"
                max="5000"
                step="100"
                value={dataVolume}
                onChange={(e) => {
                  setDataVolume(Number(e.target.value));
                }}
                style={{ width: '100%' }}
              />
            </label>
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label>
              <input 
                type="checkbox" 
                checked={isDarkTheme}
                onChange={(e) => setIsDarkTheme(e.target.checked)}
              /> 
              Dark Theme
            </label>
          </div>

          <button 
            onClick={onCreateFloatingPane} 
            disabled={createdPanes.length >= 5}
            style={{ marginBottom: '10px', width: '100%' }}
          >
            Add Floating Pane ({createdPanes.length}/5)
          </button>

          <button 
            onClick={() => {
              setCreatedPanes([]);
              setSlotCounter(1);
              
              if (dockRef.current) {
                const freshLayout = {
                  ...baseDockLayout,
                  floatingPanes: []
                };
                dockRef.current.layout = freshLayout as any;
              }
            }}
            disabled={createdPanes.length === 0}
            style={{ marginBottom: '15px', width: '100%' }}
          >
            Clear All Floating Panes
          </button>

          <div style={{ fontSize: '12px', color: '#666' }}>
            <div>Connection: {isConnecting ? 'Connecting...' : hasRemoteConnection ? 'SignalR Connected' : 'Using Mock Data'}</div>
            <div>Records: {data.length}</div>
            <div>Floating Panes: {createdPanes.length}</div>
            <div>Status: {isLoading ? 'Loading...' : 'Ready'}</div>
          </div>
        </div>

        <div slot="gridStockPrices">
          <MarketDataGrid data={data} isLoading={isLoading} additionalColumns={gridColumns} />
        </div>

        <div slot="forexMarket">
          <MarketDataGrid data={data} isLoading={isLoading} additionalColumns={gridColumns} />
        </div>

        <div slot="content4">
          <MarketDataGrid data={data} isLoading={isLoading} additionalColumns={gridColumns} />
        </div>

        <div slot="etfStockPrices">
          <MarketDataGrid data={data} isLoading={isLoading} additionalColumns={gridColumns} />
        </div>

        <div slot="priceChart" className="chart-pane">
          <IgrFinancialChart
            dataSource={chartData}
            width="100%"
            height="100%"
            chartType="line"
            zoomSliderType="none"
            chartTitle="Price Overview"
            xAxisLabelTextColor={isDarkTheme ? '#f8f9fa' : '#212529'}
            yAxisLabelTextColor={isDarkTheme ? '#f8f9fa' : '#212529'}
            xAxisTitleTextColor={isDarkTheme ? '#f8f9fa' : '#212529'}
            yAxisTitleTextColor={isDarkTheme ? '#f8f9fa' : '#212529'}
            calloutsTextColor={isDarkTheme ? '#f8f9fa' : '#212529'}
            crosshairsAnnotationXAxisBackground={isDarkTheme ? '#495057' : '#e9ecef'}
            crosshairsAnnotationYAxisBackground={isDarkTheme ? '#495057' : '#e9ecef'}
          />
        </div>

        {createdPanes.map((slotId) => (
          <div key={slotId} slot={slotId}>
            <IgrGrid
              data={filteredCategoryData}
              primaryKey="id"
              allowFiltering={true}
              height="100%"
            >
              <IgrColumn field="contract" header="Symbol" width="80px" />
              <IgrColumn field="price" header="Price" width="100px" dataType="number" />
              <IgrColumn field="change" header="Change" width="100px" dataType="number" />
              <IgrColumn field="changeP" header="%" width="80px" dataType="percent" />
            </IgrGrid>
          </div>
        ))}
      </igc-dockmanager>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<GridFinJSDockManager />);
