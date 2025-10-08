import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import { IgcDockManagerComponent } from "igniteui-dockmanager";
import { IgcDockManagerPaneType, IgcSplitPaneOrientation } from "igniteui-dockmanager";
import { defineCustomElements } from "igniteui-dockmanager/loader";
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import './index.css';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

import { useSignalRData, StreamingDataConfig } from './useSignalRData.ts';
import { useFloatingPanes } from './useFloatingPanes.ts';

defineCustomElements();

// TypeScript declaration for web component
declare global {
    namespace JSX {
        interface IntrinsicElements {
            "igc-dockmanager": any;
        }
    }
}

export default function GridFinJSDockManager() {
  const dockRef = useRef<IgcDockManagerComponent>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [frequency, setFrequency] = useState(600);
  const [dataVolume, setDataVolume] = useState(500);
  const [isLiveMode, setIsLiveMode] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [slotCounter, setSlotCounter] = useState(1);

  // Use our custom services
  const { data, hasRemoteConnection, isConnecting, startConnection, updateConfiguration, stopLiveData } = useSignalRData();
  const { floatingPanes, createFloatingPane, closeFloatingPane, updatePaneData } = useFloatingPanes();

  // Additional columns configuration matching Angular version
  const additionalColumns = useMemo(() => [
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

  const createDockLayout = useMemo(() => ({
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
              type: IgcDockManagerPaneType.contentPane,
              contentId: 'etfStockPrices',
              header: 'Market Data 3',
              size: 50,
              allowClose: false
            }
          ]
        }
      ]
    },
    floatingPanes: []
  }), []);


  useEffect(() => {
    const config: StreamingDataConfig = {
      interval: frequency,
      volume: dataVolume,
      live: isLiveMode,
      updateAll: false
    };
    
    startConnection(config);
    
    return () => {
      stopLiveData().catch(console.error);
    };
  }, []);

  // Handle parameter changes
  const handleParamsChange = useCallback(() => {
    const config: StreamingDataConfig = {
      interval: frequency,
      volume: dataVolume,
      live: isLiveMode,
      updateAll: false
    };
    updateConfiguration(config);
  }, [frequency, dataVolume, isLiveMode, updateConfiguration]);

  // Update configuration when frequency or dataVolume changes
  useEffect(() => {
    handleParamsChange();
  }, [frequency, dataVolume, handleParamsChange]);

  // Handle live data toggle
  const handleLiveDataToggle = useCallback((enabled: boolean) => {
    setIsLiveMode(enabled);
    if (enabled) {
      // When enabling, start a new connection
      const config: StreamingDataConfig = {
        interval: frequency,
        volume: dataVolume,
        live: enabled,
        updateAll: false
      };
      startConnection(config);
    } else {
      // When disabling, stop the connection
      stopLiveData();
    }
  }, [frequency, dataVolume, startConnection, stopLiveData]);

  // Create floating pane
  const handleCreateFloatingPane = useCallback(() => {
    if (createDockLayout.floatingPanes.length >= 5) return;
    
    const id = `slot-${slotCounter}`;
    setSlotCounter(prev => prev + 1);
    
    createFloatingPane('Technology', data);
  }, [createDockLayout.floatingPanes.length, slotCounter, createFloatingPane, data]);

  // Update loading state when data arrives or when connecting
  useEffect(() => {
    if (data && data.length > 0 && !isConnecting) {
      setIsLoading(false);
    } else if (isConnecting) {
      setIsLoading(true);
    }
  }, [data, isConnecting]);

  // Update floating pane data when main data changes
  useEffect(() => {
    updatePaneData(data);
  }, [data, updatePaneData]);

  // Set dock layout when component mounts
  useEffect(() => {
    if (dockRef.current) {
      dockRef.current.layout = createDockLayout as any;
    }
  }, [createDockLayout]);

  // Render column helper
  const renderColumn = useCallback((column: any, index: number) => (
    <IgrColumn
      key={column.field}
      field={column.field}
      header={column.field}
      width={column.width}
      dataType={column.dataType}
      sortable={true}
    />
  ), []);

  // Set dock layout when component mounts or floatingPanes change
  useEffect(() => {
    if (dockRef.current) {
      dockRef.current.layout = createDockLayout as any;
    }
  }, [createDockLayout]);

  // Initialize component
  useEffect(() => {
    setIsLoading(false);
    // Initialize data connection
    const config: StreamingDataConfig = {
      interval: frequency,
      volume: dataVolume,
      live: isLiveMode,
      updateAll: false
    };
    startConnection(config);
  }, []);

  // Update floating pane data when main data changes
  useEffect(() => {
    updatePaneData(data);
  }, [data, updatePaneData]);

  // Handle frequency change
  const handleFrequencyChange = (newFrequency: number) => {
    setFrequency(newFrequency);
  };

  // Handle data volume change
  const handleDataVolumeChange = (newVolume: number) => {
    setDataVolume(newVolume);
  };

  // Handle live mode toggle
  const handleLiveModeToggle = (enabled: boolean) => {
    setIsLiveMode(enabled);
  };

  // Create floating grid pane
  const handleAddFloatingPane = () => {
    if (floatingPanes.length >= 5) return; // Limit to 5 floating panes
    
    createFloatingPane('Technology', data);
  };

  // Clear all floating panes
  const clearAllFloatingPanes = () => {
    floatingPanes.forEach(pane => closeFloatingPane(pane.id));
  };

  return (
    <div className={isDarkTheme ? 'dark-theme' : 'light-theme'} style={{ height: '100vh', width: '100%' }}>
      <igc-dockmanager ref={dockRef} style={{ height: '100%' }}>
        {/* Trading Actions Panel */}
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
            onClick={handleCreateFloatingPane} 
            disabled={floatingPanes.length >= 5}
            style={{ marginBottom: '10px', width: '100%' }}
          >
            Add Tech Stocks Pane ({floatingPanes.length}/5)
          </button>

          <button 
            onClick={clearAllFloatingPanes}
            disabled={floatingPanes.length === 0}
            style={{ marginBottom: '15px', width: '100%' }}
          >
            Clear All Floating Panes
          </button>

          <div style={{ fontSize: '12px', color: '#666' }}>
            <div>Connection: {isConnecting ? 'Connecting...' : hasRemoteConnection ? 'SignalR Connected' : 'Using Mock Data'}</div>
            <div>Records: {data.length}</div>
            <div>Floating Panes: {floatingPanes.length}</div>
            <div>Status: {isLoading ? 'Loading...' : 'Ready'}</div>
          </div>
        </div>

        {/* Stock Market Data Grid */}
        <div slot="gridStockPrices" style={{ height: '100%' }}>
          <IgrGrid
            data={data}
            primaryKey="id"
            allowFiltering={true}
            filterMode="excelStyleFilter"
            columnSelection="multiple"
            cellSelection="none"
            isLoading={isLoading}
          >
            <IgrColumn field="id" width="70px" hidden={true} sortable={true} />
            <IgrColumn field="category" width="120px" sortable={true} />
            <IgrColumn field="type" width="100px" sortable={true} filterable={false} />
            <IgrColumn field="contract" width="100px" sortable={true} />
            <IgrColumn field="price" width="130px" dataType="number" sortable={true} />
            <IgrColumn field="change" width="120px" dataType="number" sortable={true} />
            <IgrColumn field="changeP" width="110px" dataType="percent" sortable={true} />
            {additionalColumns.map(renderColumn)}
          </IgrGrid>
        </div>

        {/* Forex Market Grid */}
        <div slot="forexMarket" style={{ height: '100%' }}>
          <IgrGrid
            data={data}
            primaryKey="id"
            allowFiltering={true}
            filterMode="excelStyleFilter"
            columnSelection="multiple"
            cellSelection="none"
            isLoading={isLoading}
          >
            <IgrColumn field="id" width="70px" hidden={true} sortable={true} />
            <IgrColumn field="category" width="120px" sortable={true} />
            <IgrColumn field="type" width="100px" sortable={true} filterable={false} />
            <IgrColumn field="contract" width="100px" sortable={true} />
            <IgrColumn field="price" width="120px" dataType="number" sortable={true} />
            <IgrColumn field="change" width="120px" dataType="number" sortable={true} />
            <IgrColumn field="changeP" width="110px" dataType="percent" sortable={true} />
            {additionalColumns.map(renderColumn)}
          </IgrGrid>
        </div>

        {/* Market Data 2 Grid */}
        <div slot="content4" style={{ height: '100%' }}>
          <IgrGrid
            data={data}
            primaryKey="id"
            allowFiltering={true}
            filterMode="excelStyleFilter"
            columnSelection="multiple"
            cellSelection="none"
            isLoading={isLoading}
          >
            <IgrColumn field="id" width="70px" hidden={true} sortable={true} />
            <IgrColumn field="category" width="120px" sortable={true} />
            <IgrColumn field="type" width="100px" sortable={true} filterable={false} />
            <IgrColumn field="contract" width="100px" sortable={true} />
            <IgrColumn field="price" width="120px" dataType="number" sortable={true} />
            <IgrColumn field="change" width="120px" dataType="number" sortable={true} />
            <IgrColumn field="changeP" width="110px" dataType="percent" sortable={true} />
            {additionalColumns.map(renderColumn)}
          </IgrGrid>
        </div>

        {/* ETF Stock Prices Grid */}
        <div slot="etfStockPrices" style={{ height: '100%' }}>
          <IgrGrid
            data={data}
            primaryKey="id"
            allowFiltering={true}
            filterMode="excelStyleFilter"
            columnSelection="multiple"
            cellSelection="none"
            isLoading={isLoading}
          >
            <IgrColumn field="id" width="70px" hidden={true} sortable={true} />
            <IgrColumn field="category" width="120px" sortable={true} />
            <IgrColumn field="type" width="100px" sortable={true} filterable={false} />
            <IgrColumn field="contract" width="100px" sortable={true} />
            <IgrColumn field="price" width="120px" dataType="number" sortable={true} />
            <IgrColumn field="change" width="120px" dataType="number" sortable={true} />
            <IgrColumn field="changeP" width="110px" dataType="percent" sortable={true} />
            {additionalColumns.map(renderColumn)}
          </IgrGrid>
        </div>

        {/* Dynamic floating pane content slots */}
        {floatingPanes.map((pane, index) => {
          return (
            <div key={pane.id} slot={pane.id} style={{ height: '100%' }}>
              <IgrGrid
                data={pane.data}
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
          );
        })}
      </igc-dockmanager>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<GridFinJSDockManager />);
