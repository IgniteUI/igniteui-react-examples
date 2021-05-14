import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// data chart's elements for column series:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
import { IgrColumnSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { DataTemplateMeasureInfo } from 'igniteui-react-core';
import { DataTemplateRenderInfo } from 'igniteui-react-core';

IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartSeriesMarkerTemplate extends React.Component<any, any> {
    public data: any[];

    constructor(props: any) {
        super(props);

        this.state = { markersType: "Circle" }
        this.initData();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container">
                    <IgrDataChart
                        width="100%"
                        height="100%"
                        dataSource={this.data}
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true} >

                        <IgrCategoryXAxis name="xAxis" label="Label" interval={1}/>
                        <IgrNumericYAxis name="yAxis" minimumValue={20} maximumValue={120} />

                        <IgrColumnSeries name="series3"
                                       valueMemberPath="Value"
                                       xAxisName="xAxis"
                                       yAxisName="yAxis"
                                       markerTemplate={this.getMarker()}
                                        />
                   </IgrDataChart>
                </div>
            </div>
        );
    }

    public initData() {

        let numbers: number[] = [80, 50, 75, 100, 80, 40, 80, 75, 80, 85, 50, 85, 50, 75, 100, 80, 40, 80, 75, 80, 85, 50, 85, 50, 75, 100];

        this.data = [];

        for(let i=0; i<numbers.length; i++){
            this.data.push({ Label: i.toString(), Value: numbers[i]});
        }
    }

    public getMarker(): any
    {
        let style = { outline: "#9FB328", fill: "white", text: "black" };
        const size = 12;

        return {
            measure: function (measureInfo: DataTemplateMeasureInfo) {
                const data = measureInfo.data;
                const context = measureInfo.context;
                let value = "0.00";
                let item = data.item as any;
                if (item != null) {
                    value = item.Value.toString();
                }
                const height = context.measureText("M").width;
                const width = context.measureText(value).width;
                measureInfo.width = width;
                measureInfo.height = height + size;
            },
            render: function (renderInfo: DataTemplateRenderInfo) {
                const item = renderInfo.data.item as any;
                const value = item.Value.toString();

                const ctx = renderInfo.context as CanvasRenderingContext2D;
                let x = renderInfo.xPosition;
                let y = renderInfo.yPosition;

                let halfHeight = renderInfo.availableHeight / 2.0;

                if (renderInfo.isHitTestRender) {
                    ctx.fillStyle = renderInfo.data.actualItemBrush.fill;

                    let width = renderInfo.availableWidth;
                    let height = renderInfo.availableHeight;

                    ctx.fillRect(x - (width / 2), y - (height / 2), renderInfo.availableWidth, renderInfo.availableHeight);
                    return;
                }

                ctx.beginPath();
                ctx.fillStyle = style.outline;

                let xOffset = 14;
                let yOffset = 10;

                if(renderInfo.data.item.Value >= 100){
                    xOffset = 20;
                }

                let width = renderInfo.availableWidth + xOffset;
                let height = halfHeight + yOffset;

                ctx.fillRect(x - (width / 2), y - (height / 2), width, height);
                ctx.closePath();

                ctx.font = '8pt Verdana';
                ctx.textBaseline = 'top';
                ctx.fillStyle = style.fill;
                ctx.fillText(value, x - (xOffset / 2), y - (yOffset / 2));
            }
        }
    }
}

// rendering above class to the React DOM
ReactDOM.render(<DataChartSeriesMarkerTemplate />, document.getElementById('root'));
