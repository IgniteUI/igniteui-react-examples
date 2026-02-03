import { useCallback, useEffect, useRef, useState } from 'react';
import * as signalR from '@microsoft/signalr';
import { FinancialData, Stock } from './FinancialData.ts';

export interface StreamingDataConfig {
  interval: number;
  volume: number;
  live: boolean;
  updateAll: boolean;
}

export function useSignalRData(hubUrl: string = 'https://www.infragistics.com/angular-apis/webapi/streamHub') {
  const hubRef = useRef<signalR.HubConnection | null>(null);
  const intervalRef = useRef<number | null>(null);
  const [data, setData] = useState<Stock[]>([]);
  const [hasRemoteConnection, setHasRemoteConnection] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [currentConfig, setCurrentConfig] = useState<StreamingDataConfig | null>(null);

  const generateMockData = useCallback((config: StreamingDataConfig) => {
    setCurrentConfig(config);
  
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    const mockData = FinancialData.generateData(config.volume || 1000);
    setData(mockData);

    // Set up periodic updates for mock data when live mode is enabled
    if (config.live) {
      intervalRef.current = window.setInterval(() => {
        setData(prevData => FinancialData.updateAllPrices([...prevData]));
      }, config.interval) as unknown as number;
    }
  }, []);

  const setupEvents = useCallback(() => {
    if (!hubRef.current) return;
    
    hubRef.current.on('dataReceived', (receivedData: Stock[]) => {
      setData(receivedData);
    });
    
    hubRef.current.on('updateData', (receivedData: Stock[]) => {
      setData(receivedData);
    });

    hubRef.current.on('transferdata', (receivedData: Stock[]) => {
      setData(receivedData);
    });
  }, []);

  const broadcastParams = useCallback(async (frequency: number, volume: number, live: boolean, updateAll: boolean) => {
    if (hubRef.current && hasRemoteConnection) {
      try {
        await hubRef.current.invoke('updateparameters', frequency, volume, live, updateAll);
      } catch (err) {
        generateMockData({ interval: frequency, volume, live, updateAll });
      }
    }
  }, [hasRemoteConnection, generateMockData]);

  const stopTimer = useCallback(async () => {
    if (hubRef.current && hasRemoteConnection) {
      try {
        await hubRef.current.invoke('StopTimer');
      } catch (err) {
        // StopTimer failed - connection likely broken
      } finally {
        setHasRemoteConnection(false);
      }
    }
  }, [hasRemoteConnection]);

  const startConnection = useCallback(async (config: StreamingDataConfig) => {
    setIsConnecting(true);
    
    try {
      if (hubRef.current) {
        await hubRef.current.stop();
      }

      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      const connection = new signalR.HubConnectionBuilder()
        .withUrl(hubUrl)
        .withAutomaticReconnect()
        .build();

      hubRef.current = connection;
      await connection.start();
      
      setHasRemoteConnection(true);
      setIsConnecting(false);
      
      setupEvents();
      await broadcastParams(config.interval, config.volume, config.live, config.updateAll);

    } catch (error) {
      setHasRemoteConnection(false);
      setIsConnecting(false);
      generateMockData(config);
    }
  }, [hubUrl, setupEvents, broadcastParams, generateMockData]);

  const updateConfiguration = useCallback(async (config: StreamingDataConfig) => {
    setCurrentConfig(config);
    
    if (hasRemoteConnection) {
      await broadcastParams(config.interval, config.volume, config.live, config.updateAll);
    } else {
      // When not connected to SignalR, regenerate mock data with updated config
      generateMockData(config);
    }
  }, [hasRemoteConnection, broadcastParams, generateMockData]);

  const stopLiveData = useCallback(async () => {
    if (hubRef.current && hasRemoteConnection) {
      try {
        await stopTimer();
        await hubRef.current.stop();
        setHasRemoteConnection(false);
      } catch (error) {
        setHasRemoteConnection(false);
      }
    }
  }, [hasRemoteConnection, stopTimer]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      
      if (hubRef.current) {
        hubRef.current.stop();
      }
    };
  }, []);

  return {
    data,
    hasRemoteConnection,
    isConnecting,
    currentConfig,
    startConnection,
    updateConfiguration,
    stopLiveData,
    broadcastParams
  };
}
