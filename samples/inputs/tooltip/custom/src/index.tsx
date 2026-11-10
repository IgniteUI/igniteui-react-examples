import { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    IgrAvatar,
    IgrBadge,
    IgrIcon,
    IgrList,
    IgrListItem,
    IgrTooltip,
    registerIconFromText,
} from 'igniteui-react';
import { IgrCategoryChart, IgrCategoryChartModule } from 'igniteui-react-charts';
import { IncomeTaxes } from './IncomeTaxes';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrCategoryChartModule.register();

const blockIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9A7.902 7.902 0 0 1 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1A7.902 7.902 0 0 1 20 12c0 4.42-3.58 8-8 8z"/></svg>';

registerIconFromText('block', blockIcon, 'material');

const incomeTaxes = new IncomeTaxes();
const avatarUrl = 'https://dl.infragistics.com/x/img/avatars/avatar-profile-06.png';

export default function TooltipCustom() {
    const chartRef = useRef<IgrCategoryChart>(null);

    return (
        <div className="sample">
            <IgrList id="income-taxes" className="trigger taxes-trigger">
                <IgrListItem>
                    <span slot="title">Individual Income Taxes</span>
                    <span slot="end" className="amount">($2.4T)</span>
                </IgrListItem>
            </IgrList>
            <IgrTooltip
                anchor="income-taxes"
                placement="bottom-start"
                className="custom-tooltip chart-tooltip"
                onOpened={() => chartRef.current?.notifyResized()}
            >
                <span className="tooltip-title">Individual Income Taxes</span>
                <div className="chart">
                    <IgrCategoryChart
                        ref={chartRef}
                        width="100%"
                        height="100%"
                        chartType="SplineArea"
                        dataSource={incomeTaxes}
                        includedProperties={['year', 'revenue']}
                        brushes="#9de772"
                        outlines="#9de772"
                        areaFillOpacity={0.5}
                        thickness={2}
                        markerTypes="None"
                        toolTipType="None"
                        isHorizontalZoomEnabled={false}
                        isVerticalZoomEnabled={false}
                        yAxisMinimumValue={0}
                        yAxisMaximumValue={60}
                        yAxisInterval={20}
                        yAxisTitle="IFT"
                        yAxisMajorStroke="transparent"
                        xAxisStroke="#9e9e9e"
                        xAxisTickStroke="#9e9e9e"
                        xAxisTickLength={8}
                        xAxisLabelTextColor="#616161"
                        xAxisLabelTextStyle="400 10px 'Titillium Web'"
                        yAxisLabelTextColor="#616161"
                        yAxisLabelTextStyle="400 10px 'Titillium Web'"
                        yAxisTitleTextColor="#212121"
                        yAxisTitleTextStyle="400 10px 'Titillium Web'"
                    />
                </div>
                <span className="tooltip-description">
                    In fiscal year (FY) 2024, the largest source of federal revenue was
                    Individual Income Taxes (49.3% of total revenue).
                </span>
            </IgrTooltip>
            <IgrList id="employee" className="trigger employee-trigger">
                <IgrListItem>
                    <div slot="start" className="avatar">
                        <IgrAvatar src={avatarUrl} shape="circle" alt="Eliza Morales" />
                        <IgrBadge variant="danger">
                            <IgrIcon name="block" collection="material" />
                        </IgrBadge>
                    </div>
                    <span slot="title">Eliza Morales</span>
                </IgrListItem>
            </IgrList>
            <IgrTooltip anchor="employee" placement="bottom-start" className="custom-tooltip employee-tooltip">
                <div className="avatar">
                    <IgrAvatar src={avatarUrl} shape="circle" alt="Eliza Morales" />
                    <IgrBadge variant="danger">
                        <IgrIcon name="block" collection="material" />
                    </IgrBadge>
                </div>
                <div className="employee-details">
                    <span className="tooltip-title">Eliza Morales</span>
                    <span>Software Engineer</span>
                    <span>In a meeting</span>
                    <span>Available at 2:00 pm</span>
                </div>
            </IgrTooltip>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<TooltipCustom/>);
