import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrIcon, IgrList, IgrListItem, IgrTooltip, registerIconFromText } from 'igniteui-react';
import {
    IgrCategoryChart,
    IgrCategoryChartModule,
    IgrPieChart,
    IgrPieChartModule,
} from 'igniteui-react-charts';
import 'igniteui-webcomponents/themes/light/material.css';

IgrCategoryChartModule.register();
IgrPieChartModule.register();

const bitcoinIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.339 11.5126C12.339 12.9126 9.93898 12.7486 9.17798 12.7476L9.18298 10.2676C9.94498 10.2686 12.34 10.0526 12.339 11.5126ZM11.82 8.01263C11.82 6.68463 9.82001 6.88363 9.18701 6.88363V9.13263C9.81901 9.13263 11.817 9.28463 11.82 8.01163V8.01263ZM20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10ZM12.952 9.406C13.6673 9.0676 14.0651 8.29005 13.921 7.512C13.8 6.177 12.644 5.728 11.189 5.6V3.749H10.062V5.549C9.762 5.549 9.462 5.549 9.162 5.559V3.745H8.036V5.595C7.792 5.6 7.553 5.604 7.319 5.604V5.6H5.765V6.8C5.765 6.8 6.597 6.785 6.584 6.8C6.89841 6.76025 7.18651 6.98023 7.231 7.294L7.223 12.365C7.20855 12.5849 7.01895 12.7517 6.799 12.738C6.813 12.751 5.98 12.738 5.98 12.738L5.754 14.083C6.308 14.083 7.488 14.083 8.025 14.093V15.966H9.15V14.113C9.459 14.12 9.758 14.123 10.05 14.123V15.967H11.177V14.098C13.072 13.992 14.398 13.517 14.565 11.739C14.6866 11.213 14.581 10.6602 14.274 10.2161C13.967 9.77207 13.487 9.47797 12.952 9.406Z"/></svg>';

registerIconFromText('bitcoin', bitcoinIcon, 'material');

const portfolio = [
    { asset: 'Bitcoin', share: 56 },
    { asset: 'Ethereum', share: 24 },
    { asset: 'Other', share: 20 },
];

const balanceHistory = [
    { period: '2021', exchange: 7, assets: 5 },
    { period: 'Jul 2021', exchange: 10, assets: 8 },
    { period: '2022', exchange: 12, assets: 10 },
    { period: 'Jul 2022', exchange: 20, assets: 15 },
    { period: '2023', exchange: 20, assets: 13 },
    { period: 'Jul 2023', exchange: 28, assets: 8 },
    { period: '2024', exchange: 55, assets: 24 },
    { period: 'Jul 2024', exchange: 58, assets: 16 },
    { period: '2025', exchange: 43, assets: 18 },
];

export default function TooltipTailwindStyling(): JSX.Element {
    const chartRef = useRef<IgrCategoryChart>(null);
    const portfolioTooltipRef = useRef<IgrTooltip>(null);

    const showPortfolioTooltip = async () => {
        await portfolioTooltipRef.current?.show();
        chartRef.current?.notifyResized();
    };

    const hidePortfolioTooltip = () => portfolioTooltipRef.current?.hide();

    return (
        <div className="sample">
            <div className="flex flex-wrap items-start justify-center gap-25 pt-14">
                <IgrList id="btc" className="mt-10.5 w-65 overflow-hidden rounded-full border border-btc-border">
                    <IgrListItem className="px-4 py-2 [&::part(start)]:hidden">
                        <span slot="title" className="flex items-center gap-1 font-[aktiv-grotesk,sans-serif] text-sm/[1.125rem] font-semibold text-btc-ink">
                            <IgrIcon name="bitcoin" collection="material" className="text-btc-icon" />
                            BTC
                        </span>
                        <span slot="end" className="font-[aktiv-grotesk,sans-serif] text-sm/5 font-medium tracking-[0.25px] text-btc-accent">
                            Daily: + 2,6%
                        </span>
                    </IgrListItem>
                </IgrList>
                <IgrTooltip
                    anchor="btc"
                    placement="bottom-start"
                    sticky
                    className="[--ig-tooltip-background:white] [--ig-tooltip-text-color:var(--color-btc-text)] [--ig-tooltip-border-radius:1rem] [&::part(base)]:w-65 [&::part(base)]:border [&::part(base)]:border-btc-border [&::part(base)]:p-4 [&::part(close-button)]:text-btc-muted"
                >
                    <div className="flex flex-1 flex-col gap-2 p-2">
                        <span className="flex items-center gap-2.5 text-xl/6 font-semibold tracking-[0.15px]">
                            BTC
                            <IgrIcon name="bitcoin" collection="material" className="text-btc-icon" />
                        </span>
                        <span className="flex flex-col gap-0.5">
                            <span className="text-xs/4 font-semibold tracking-[0.15px] text-btc-exchange">Exchange Balance</span>
                            <span className="font-[aktiv-grotesk,sans-serif] text-sm/6 font-medium tracking-[0.1px]">USD 81,459.00</span>
                        </span>
                        <span className="flex flex-col gap-0.5">
                            <span className="text-xs/4 font-semibold tracking-[0.15px] text-btc-accent">Assets Balance</span>
                            <span className="font-[aktiv-grotesk,sans-serif] text-sm/6 font-medium tracking-[0.1px]">USD 46,287.90</span>
                        </span>
                    </div>
                </IgrTooltip>
                <div
                    className="relative me-55 size-50.75"
                    onPointerEnter={showPortfolioTooltip}
                    onPointerLeave={hidePortfolioTooltip}
                >
                    <IgrPieChart
                        width="100%"
                        height="100%"
                        dataSource={portfolio}
                        valueMemberPath="share"
                        labelMemberPath="asset"
                        labelsPosition="None"
                        radiusFactor={1}
                        startAngle={-90}
                        brushes="#cce4ff #66adff #99c9ff"
                        outlines="#cce4ff #66adff #99c9ff"
                    />
                    <span id="portfolio-anchor" className="absolute top-1/2 left-33.75"></span>
                </div>
                <IgrTooltip
                    ref={portfolioTooltipRef}
                    anchor="portfolio-anchor"
                    placement="bottom-start"
                    offset={0}
                    className="pointer-events-none [--ig-tooltip-background:white] [--ig-tooltip-border-radius:0] [&::part(base)]:border [&::part(base)]:border-chart-border [&::part(base)]:p-4"
                >
                    <div className="h-34 w-63.75">
                        <IgrCategoryChart
                            ref={chartRef}
                            width="100%"
                            height="100%"
                            chartType="SplineArea"
                            dataSource={balanceHistory}
                            includedProperties={['period', 'exchange', 'assets']}
                            brushes="#ff885c #66adff"
                            outlines="#ff885c #66adff"
                            areaFillOpacity={0.5}
                            thickness={1.5}
                            markerTypes="None"
                            toolTipType="None"
                            isHorizontalZoomEnabled={false}
                            isVerticalZoomEnabled={false}
                            xAxisInterval={2}
                            xAxisStroke="#7d91ab"
                            xAxisTickStroke="#7d91ab"
                            xAxisTickLength={8}
                            xAxisLabelTextColor="#7d91ab"
                            xAxisLabelTextStyle="400 10px 'Titillium Web'"
                            yAxisMinimumValue={0}
                            yAxisMaximumValue={60}
                            yAxisInterval={20}
                            yAxisMinorInterval={10}
                            yAxisMajorStroke="#d2dbe8"
                            yAxisMinorStroke="#d2dbe8"
                            yAxisLabelTextColor="#7d91ab"
                            yAxisLabelTextStyle="400 10px 'Titillium Web'"
                        />
                    </div>
                </IgrTooltip>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TooltipTailwindStyling/>);
