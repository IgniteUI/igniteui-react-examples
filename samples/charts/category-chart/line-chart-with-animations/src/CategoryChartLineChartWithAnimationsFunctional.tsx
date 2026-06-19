import React, { useState, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCategoryChart } from 'igniteui-react-charts';
import { IgrCategoryChartModule } from 'igniteui-react-charts';

IgrCategoryChartModule.register();

const CHART_DATA = [
    { Year: '2009', Europe: 31, China: 21, USA: 19 },
    { Year: '2010', Europe: 43, China: 26, USA: 24 },
    { Year: '2011', Europe: 66, China: 29, USA: 28 },
    { Year: '2012', Europe: 69, China: 32, USA: 26 },
    { Year: '2013', Europe: 58, China: 47, USA: 38 },
    { Year: '2014', Europe: 40, China: 46, USA: 31 },
    { Year: '2015', Europe: 78, China: 50, USA: 19 },
    { Year: '2016', Europe: 13, China: 90, USA: 52 },
    { Year: '2017', Europe: 78, China: 132, USA: 50 },
    { Year: '2018', Europe: 40, China: 134, USA: 34 },
    { Year: '2019', Europe: 80, China: 96, USA: 38 },
];

export default function CategoryChartLineChartWithAnimations() {
    const chartRef = useRef<IgrCategoryChart>(null);

    const [transitionLabel, setTransitionLabel] = useState('1000ms');
    const [transitionInDuration, setTransitionInDuration] = useState(1000);
    const [transitionInMode, setTransitionInMode] = useState('Auto');

    const onTransitionInModeChanged = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setTransitionInMode(e.target.value);
    }, []);

    const onTransitionInDurationChanged = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const val = parseInt(e.target.value, 10);
        setTransitionInDuration(val);
        setTransitionLabel(val + 'ms');
    }, []);

    const onReloadChartClick = useCallback(() => {
        chartRef.current?.replayTransitionIn();
    }, []);

    return (
        <div className="container sample">
            <div className="options horizontal">
                <span className="options-label">Transition Type </span>
                <select onChange={onTransitionInModeChanged}>
                    <option>Auto</option>
                    <option>AccordionFromBottom</option>
                    <option>AccordionFromCategoryAxisMaximum</option>
                    <option>AccordionFromCategoryAxisMinimum</option>
                    <option>AccordionFromLeft</option>
                    <option>AccordionFromRight</option>
                    <option>AccordionFromTop</option>
                    <option>AccordionFromValueAxisMaximum</option>
                    <option>AccordionFromValueAxisMinimum</option>
                    <option>Expand</option>
                    <option>FromZero</option>
                    <option>SweepFromBottom</option>
                    <option>SweepFromCategoryAxisMaximum</option>
                    <option>SweepFromCategoryAxisMinimum</option>
                    <option>SweepFromCenter</option>
                    <option>SweepFromLeft</option>
                    <option>SweepFromRight</option>
                    <option>SweepFromTop</option>
                    <option>SweepFromValueAxisMaximum</option>
                    <option>SweepFromValueAxisMinimum</option>
                </select>
                <label className="options-value" style={{ width: '75px' }}>{transitionLabel}</label>
                <input
                    className="options-slider"
                    type="range"
                    min="50"
                    max="2000"
                    step="50"
                    defaultValue="1000"
                    onChange={onTransitionInDurationChanged}
                />
                <button onClick={onReloadChartClick}>Reload Chart</button>
            </div>

            <IgrCategoryChart
                ref={chartRef}
                width="100%"
                height="calc(100% - 30px)"
                dataSource={CHART_DATA}
                chartType="Line"
                isTransitionInEnabled={true}
                isHorizontalZoomEnabled={false}
                isVerticalZoomEnabled={false}
                transitionInDuration={transitionInDuration}
                transitionInMode={transitionInMode}
                yAxisTitle="TWh"
                yAxisTitleLeftMargin={10}
                yAxisTitleRightMargin={5}
                yAxisLabelLeftMargin={0}
                computedPlotAreaMarginMode="Series"
            />
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CategoryChartLineChartWithAnimations/>);
