import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrCategoryChartModule, IgrLegendModule, IgrLegend, IgrCategoryChart, IgrColumnSeries } from 'igniteui-react-charts';
import { DataTemplateMeasureInfo, DataTemplateRenderInfo } from 'igniteui-react-core';

IgrCategoryChartModule.register();
IgrLegendModule.register();

export default class CategoryChartMarkerTemplates extends React.Component<any, any> {
    public data: any[];

    private chart: IgrCategoryChart;
    private legend: IgrLegend;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);
        this.onSeriesAdded = this.onSeriesAdded.bind(this);

        this.state = { chartType: "Line", markersTypes: "Circle" }
        this.initData();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options vertical">
                    <span className="legend-title">Percentage Change in Energy Generation in 2019</span>
                    <div className="legend">
                        <IgrLegend ref={this.onLegendRef} orientation="horizontal" />
                    </div>
                </div>
                <div className="container" style={{ height: "calc(100% - 50px)" }} >
                    <IgrCategoryChart
                        width="100%"
                        height="100%"
                        ref={this.onChartRef}
                        dataSource={this.data}
                        chartType="Column"
                        thickness={2}
                        isHorizontalZoomEnabled={false}
                        isVerticalZoomEnabled={false}
                        isSeriesHighlightingEnabled={true}
                        seriesAdded={this.onSeriesAdded}
                        xAxisMajorStrokeThickness={1}
                        xAxisMajorStroke="LightGray"
                        yAxisMinimumValue={-20}
                        yAxisMaximumValue={30}
                        yAxisInterval={10} />
                </div>
            </div>

        );
    }

    public onChartRef(chart: IgrCategoryChart) {
        if (!chart) { return; }

        this.chart = chart;
        if (this.legend) {
            this.chart.legend = this.legend;
        }
    }

    public onLegendRef(legend: IgrLegend) {
        if (!legend) { return; }

        this.legend = legend;
        if (this.chart) {
            this.chart.legend = this.legend;
        }
    }

    public onSeriesAdded(sender: any, e: any) {
        let series : IgrColumnSeries = e.series as IgrColumnSeries;
        series.markerTemplate = this.getMarker();
    }

    public initData() {
        this.data = [
            { Location: "World", Solar: 23, Coal: -1, Hydropower: 1, Wind: 12, Nuclear: 3 },
            { Location: "China", Solar: 26, Coal: 2, Hydropower: 5, Wind: 10, Nuclear: 18 },
            { Location: "U.S.", Solar: 15, Coal: -15, Hydropower: -7, Wind: 10, Nuclear: 1 },
            { Location: "EU", Solar: 11, Coal: -12, Hydropower: -2, Wind: 14, Nuclear: -1 }
        ];
    }

    public getMarker(): any {        
        return {
            measure: function (measureInfo: DataTemplateMeasureInfo) {
                const context = measureInfo.context;
                const height = context.measureText("M").width;
                const width = context.measureText("0.00").width;
                measureInfo.width = width;
                measureInfo.height = height + 12;
            },
            render: function (renderInfo: DataTemplateRenderInfo) {
                let ctx = renderInfo.context;
                let x = renderInfo.xPosition;
                let y = renderInfo.yPosition;

                if (renderInfo.isHitTestRender) {
                    ctx.fillStyle = renderInfo.data.actualItemBrush.fill;

                    let width = renderInfo.availableWidth;
                    let height = renderInfo.availableHeight;

                    ctx.fillRect(x - (width / 2), y - (height), renderInfo.availableWidth, renderInfo.availableHeight);
                    return;
                }


                const dataItem = renderInfo.data.item;
                if (dataItem === null) return;

                const series = renderInfo.data.series;
                const dataPath = series.valueColumn.propertyName;

                let dataValue = 0;
                switch (dataPath) {
                    case "Solar": dataValue = dataItem.Solar; break;
                    case "Coal": dataValue = dataItem.Coal; break;
                    case "Hydropower": dataValue = dataItem.Hydropower; break;
                    case "Wind": dataValue = dataItem.Wind; break;
                    case "Nuclear": dataValue = dataItem.Nuclear; break;
                }
                ctx.font = '8pt Verdana';
                ctx.textBaseline = 'top';
                ctx.fillStyle = "black";

                let xOffset = 20;
                let yOffset = 10;
                if (dataValue < 0) {
                    ctx.fillText(dataValue + "%", x - (xOffset / 2), y + (yOffset));
                }
                else {
                    ctx.fillText(dataValue + "%", x - (xOffset / 2), y - (yOffset * 2));
                }

                ctx.strokeStyle = "black";
                ctx.fillStyle = "white";
                ctx.beginPath();
                ctx.arc(x, y, 6, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fill();
            }
        }
    }
}

// rendering above class to the React DOM
ReactDOM.render(<CategoryChartMarkerTemplates />, document.getElementById('root'));
