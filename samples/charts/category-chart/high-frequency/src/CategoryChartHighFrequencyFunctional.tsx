import React, { useState, useRef, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCategoryChart } from 'igniteui-react-charts';
import { IgrCategoryChartModule } from 'igniteui-react-charts';
import { CategoryChartSharedData } from './CategoryChartSharedData';

IgrCategoryChartModule.register();

export default function CategoryChartHighFrequency() {
    const INITIAL_DATA_POINTS = 500;

    // Mutable values that must not trigger re-renders are kept in refs
    const chartRef = useRef<IgrCategoryChart>(null);
    const dataRef = useRef<any[]>(CategoryChartSharedData.generateItems(100, INITIAL_DATA_POINTS, false));
    const dataIndexRef = useRef<number>(dataRef.current.length);
    const dataPointsRef = useRef<number>(INITIAL_DATA_POINTS);
    const refreshMsRef = useRef<number>(5);
    const intervalRef = useRef<number>(-1);

    const [state, setState] = useState({
        dataFeedAction: 'Start',
        dataInfo: CategoryChartSharedData.toShortString(INITIAL_DATA_POINTS),
        dataPoints: INITIAL_DATA_POINTS,
        dataSource: dataRef.current,
        refreshInterval: 5,
        refreshInfo: '5ms',
    });

    const setupInterval = useCallback(() => {
        if (intervalRef.current >= 0) {
            window.clearInterval(intervalRef.current);
            intervalRef.current = -1;
        }
        intervalRef.current = window.setInterval(() => {
            // Only tick when feed is "Stop" (i.e. actively streaming)
            if (setState === null) return; // guard against unmounted ref
            setState(prev => {
                if (prev.dataFeedAction !== 'Stop') return prev;

                const chart = chartRef.current;
                if (!chart) return prev;

                dataIndexRef.current++;
                const oldItem = dataRef.current[0];
                const newItem = CategoryChartSharedData.getNewItem(dataRef.current, dataIndexRef.current);

                dataRef.current.push(newItem);
                chart.notifyInsertItem(dataRef.current, dataRef.current.length - 1, newItem);
                dataRef.current.shift();
                chart.notifyRemoveItem(dataRef.current, 0, oldItem);

                return prev; // no state change – data mutated imperatively on the chart
            });
        }, refreshMsRef.current);
    }, []);

    // Start interval after chart mounts; clear on unmount (replaces componentWillUnmount)
    useEffect(() => {
        if (chartRef.current) {
            setupInterval();
        }
        return () => {
            if (intervalRef.current >= 0) {
                window.clearInterval(intervalRef.current);
                intervalRef.current = -1;
            }
        };
    }, [setupInterval]);

    const onChartRef = useCallback((chart: IgrCategoryChart) => {
        if (!chart) return;
        chartRef.current = chart;
        setupInterval();
    }, [setupInterval]);

    const onDataGenerateClick = useCallback(() => {
        dataRef.current = CategoryChartSharedData.generateItems(100, dataPointsRef.current, false);
        dataIndexRef.current = dataRef.current.length;
        setState(prev => ({ ...prev, dataSource: dataRef.current }));
    }, []);

    const onDataFeedClick = useCallback(() => {
        setState(prev => ({
            ...prev,
            dataFeedAction: prev.dataFeedAction === 'Start' ? 'Stop' : 'Start',
        }));
    }, []);

    const onDataPointsChanged = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        let num = parseInt(e.target.value, 10);
        if (isNaN(num)) num = 10000;
        if (num < 100) num = 100;
        if (num > 2000) num = 2000;
        dataPointsRef.current = num;
        setState(prev => ({
            ...prev,
            dataPoints: num,
            dataInfo: CategoryChartSharedData.toShortString(num),
        }));
    }, []);

    const onRefreshFrequencyChanged = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        let num = parseInt(e.target.value, 10);
        if (isNaN(num)) num = 10;
        if (num < 10) num = 10;
        if (num > 500) num = 500;
        refreshMsRef.current = num;
        setState(prev => ({
            ...prev,
            refreshInterval: num,
            refreshInfo: num + 'ms',
        }));
        setupInterval();
    }, [setupInterval]);

    return (
        <div className="container sample">
            <div className="options horizontal">
                <button onClick={onDataFeedClick}>{state.dataFeedAction}</button>
                <label className="options-label">Refresh: </label>
                <label className="options-value">{state.refreshInfo}</label>
                <input
                    className="options-slider"
                    type="range"
                    min="5"
                    max="250"
                    step="5"
                    value={state.refreshInterval}
                    onChange={onRefreshFrequencyChanged}
                />
                <button onClick={onDataGenerateClick}>Generate</button>
                <label className="options-label">Data Points: </label>
                <label className="options-value">{state.dataInfo}</label>
                <input
                    className="options-slider"
                    type="range"
                    min="100"
                    max="2000"
                    step="100"
                    value={state.dataPoints}
                    onChange={onDataPointsChanged}
                />
            </div>
            <div className="container" style={{ height: 'calc(100% - 45px)' }}>
                <IgrCategoryChart
                    ref={onChartRef}
                    width="100%"
                    height="100%"
                    chartType="Line"
                    dataSource={state.dataSource}
                    yAxisExtent={40}
                    xAxisEnhancedIntervalPreferMoreCategoryLabels="false"
                    shouldConsiderAutoRotationForInitialLabels="false"
                    shouldAutoExpandMarginForInitialLabels="false"
                    crosshairsDisplayMode="None"
                    autoMarginAndAngleUpdateMode="None"
                    markerTypes="None"
                />
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CategoryChartHighFrequency/>);
