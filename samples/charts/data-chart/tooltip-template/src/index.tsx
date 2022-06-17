import React, { ReactElement, version } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// importing axis' modules:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
// importing category series' modules:
import { IgrColumnSeries } from 'igniteui-react-charts';
// importing data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrNumberAbbreviatorModule } from 'igniteui-react-charts';

import { IgrChartMouseEventArgs } from 'igniteui-react-charts';
import { SampleCategoryData } from './SampleCategoryData';
import { IgrDataContext } from 'igniteui-react-core';

IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartInteractivityModule.register();
IgrNumberAbbreviatorModule.register();

export default class DataChartTooltipTemplate extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.data = SampleCategoryData.create();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container" style={{ height: "calc(100% - 35px)" }} >
                    <IgrDataChart ref={this.onChartRef}
                        width="100%"
                        height="100%"
                        dataSource={this.data}
                        subtitle="Energy Source of Biggest Countries"
                        isHorizontalZoomEnabled={false}
                        isVerticalZoomEnabled={true} seriesMouseEnter={this.onSeriesMouseEnter}>
                        <IgrCategoryXAxis name="xAxis" label="Country" />
                        <IgrNumericYAxis name="yAxis"  abbreviateLargeNumbers="true" />
                        <IgrColumnSeries
                            name="series1"
                            title="Coal"
                            xAxisName="xAxis"
                            yAxisName="yAxis"
                            valueMemberPath="Coal"
                            showDefaultTooltip="false" />
                        <IgrColumnSeries
                            name="series2"
                            title="Hydro"
                            xAxisName="xAxis"
                            yAxisName="yAxis"
                            valueMemberPath="Hydro"
                            showDefaultTooltip="false" />
                            <IgrColumnSeries
                            name="series3"
                            title="Nuclear"
                            xAxisName="xAxis"
                            yAxisName="yAxis"
                            valueMemberPath="Nuclear"
                            showDefaultTooltip="false" />
                            <IgrColumnSeries
                            name="series4"
                            title="Gas"
                            xAxisName="xAxis"
                            yAxisName="yAxis"
                            valueMemberPath="Gas"
                            showDefaultTooltip="false" />
                            <IgrColumnSeries
                            name="series5"
                            title="Oil"
                            xAxisName="xAxis"
                            yAxisName="yAxis"
                            valueMemberPath="Oil"
                            showDefaultTooltip="false" />
                    </IgrDataChart>
                </div>
            </div>
        );
    }

    public onChartRef(chart: IgrDataChart) {
        if (!chart) { return; }

        this.chart = chart;
    }

    onSeriesMouseEnter = (s: any, e: IgrChartMouseEventArgs) => {
        if (e.series.tooltipTemplate === null ||
            e.series.tooltipTemplate === undefined) {
            e.series.tooltipTemplate = this.onTooltipRender;
        }
    }

    public onTooltipRender(context: any) {
        const dataContext = context.dataContext as IgrDataContext;
        if (!dataContext) return null;

        const series = dataContext.series as any;
        if (!series) return null;

        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        const coal = (dataItem.Coal / 1000000) + " M";
        const hydro = (dataItem.Hydro / 1000000) + " M";
        const nuclear = (dataItem.Nuclear / 1000000) + " M";
        const gas = (dataItem.Gas / 1000000) + " M";
        const oil = (dataItem.Oil / 1000000) + " M";

        return <div>
            <div className="tooltipTitle">{dataItem.Country} Production</div>
            <div className="tooltipBox">
                <div className="tooltipRow">
                    <div className="tooltipLbl">Coal:</div>
                    <div className="tooltipVal">{coal}</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">Hydro:</div>
                    <div className="tooltipVal">{hydro}</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">Nuclear:</div>
                    <div className="tooltipVal">{nuclear}</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">Gas:</div>
                    <div className="tooltipVal">{gas}</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">Oil:</div>
                    <div className="tooltipVal">{oil}</div>
                </div>
            </div>
        </div>
    }
}

// rendering above class to the React DOM
ReactDOM.render(<DataChartTooltipTemplate />, document.getElementById('root'));
