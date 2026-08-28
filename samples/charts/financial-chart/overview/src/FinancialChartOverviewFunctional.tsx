import React, { useState, useRef, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import { IgrLegend } from 'igniteui-react-charts';
import { IgrLegendModule } from 'igniteui-react-charts';
import StocksHistory from './StocksHistory';

IgrFinancialChartModule.register();
IgrLegendModule.register();

export default function FinancialChartOverview() {
    const [data, setData] = useState<any[]>([]);

    // Refs hold the component instances; useEffect wires them together once both are set
    const chartRef = useRef<IgrFinancialChart>(null);
    const legendRef = useRef<IgrLegend>(null);

    // Async data fetch replaces initData() called in constructor + setState callback
    useEffect(() => {
        StocksHistory.getMultipleStocks().then((stocks: any[]) => {
            setData(stocks);
        });
    }, []);

    // Wire legend → chart imperatively when both refs are ready
    useEffect(() => {
        if (chartRef.current && legendRef.current) {
            chartRef.current.legend = legendRef.current;
        }
    });

    return (
        <div className="container sample">
            <div className="options vertical">
                <span className="legend-title">Google vs Microsoft Stock Prices</span>
                <div className="legend">
                    <IgrLegend
                        ref={legendRef}
                        orientation="Horizontal"
                    />
                </div>
            </div>
            <div className="container" style={{ height: 'calc(100% - 25px)' }}>
                <IgrFinancialChart
                    ref={chartRef}
                    width="100%"
                    height="100%"
                    chartType="Bar"
                    thickness={2}
                    excludedProperties={['Date']}
                    dataSource={data}
                    zoomSliderType="Bar"
                    isToolbarVisible={true}
                    yAxisMode="PercentChange"
                />
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FinancialChartOverview/>);
