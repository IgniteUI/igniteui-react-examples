import { useCallback, useEffect, useRef, useState } from 'react';
import * as signalR from '@microsoft/signalr';
import { FinancialData, Stock } from './FinancialData.ts';

// Configuration constants
const DEFAULT_VOLUME = 1000;

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
      intervalRef.current = null;
    }

    // Generate initial data
    const mockData = FinancialData.generateData(config.volume || DEFAULT_VOLUME);
    setData(mockData);
    
  }, []);

  const registerSignalEvents = useCallback(() => {
    if (!hubRef.current) return;
    
    // Listen for data updates from the hub
    hubRef.current.on('dataReceived', (receivedData: Stock[]) => {
      setData(receivedData);
    });
    
    // Listen for individual record updates  
    hubRef.current.on('updateData', (receivedData: Stock[]) => {
      setData(receivedData);
    });

    // Listen for transfer data events (expected by the server)
    hubRef.current.on('transferdata', (receivedData: Stock[]) => {
      setData(receivedData);
    });
  }, []);

  const broadcastParams = useCallback(async (frequency: number, volume: number, live: boolean, updateAll: boolean) => {
    if (hubRef.current && hasRemoteConnection) {
      try {
        await hubRef.current.invoke('updateparameters', frequency, volume, live, updateAll);
      } catch (err) {
        console.error('Error updating parameters:', err);
        generateMockData({ interval: frequency, volume, live, updateAll });
      }
    }
  }, [hasRemoteConnection, generateMockData]);

  const stopTimer = useCallback(async () => {
    if (hubRef.current && hasRemoteConnection) {
      try {
        await hubRef.current.invoke('StopTimer');
        setHasRemoteConnection(false);
      } catch (err) {
        console.error('Error stopping timer:', err);
      }
    }
  }, [hasRemoteConnection]);

  const startConnection = useCallback(async (config: StreamingDataConfig) => {
    // Start loading state
    setIsConnecting(true);
    
    try {
      if (hubRef.current) {
        await hubRef.current.stop();
      }

      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }

      const hubConnection = new signalR.HubConnectionBuilder()
        .configureLogging(signalR.LogLevel.Information)
        .withUrl(hubUrl)
        .withAutomaticReconnect()
        .build();

      hubRef.current = hubConnection;

      await hubConnection.start();
      console.log('SignalR connection established');
      
      setHasRemoteConnection(true);
      setIsConnecting(false);
      
      registerSignalEvents();
      
      await broadcastParams(config.interval, config.volume, config.live, config.updateAll);

    } catch (error) {
      console.warn('SignalR connection failed, falling back to mock data:', error);
      
      setHasRemoteConnection(false);
      setIsConnecting(false);
      generateMockData(config);
    }
  }, [hubUrl, registerSignalEvents, broadcastParams, generateMockData]);

  const updateConfiguration = useCallback(async (config: StreamingDataConfig) => {
    setCurrentConfig(config);
    
    if (hasRemoteConnection) {
      await broadcastParams(config.interval, config.volume, config.live, config.updateAll);
    } else {
      const mockData = FinancialData.generateData(config.volume || DEFAULT_VOLUME);
      setData(mockData);
    }
  }, [hasRemoteConnection, broadcastParams]);

  const stopLiveData = useCallback(async () => {
    if (hubRef.current && hasRemoteConnection) {
      try {
        await stopTimer();
        await hubRef.current.stop();
        setHasRemoteConnection(false);
      } catch (error) {
        console.error('Error stopping live data:', error);
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
