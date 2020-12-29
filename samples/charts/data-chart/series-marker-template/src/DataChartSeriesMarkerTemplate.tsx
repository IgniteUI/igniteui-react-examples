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
import * as React from 'react';

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
            <div className="igContainer">
                <div className="igComponent" style={{height: "calc(100% - 35px)"}} >
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

        let numbers : number[] = [80, 50, 75, 100, 80, 40, 80, 75, 80, 85, 50, 85, 50, 75, 100, 80, 40, 80, 75, 80, 85, 50, 85, 50, 75, 100];

        this.data = [];

        for(let i=0; i<numbers.length; i++){
            this.data.push({ Label: i.toString(), Value: numbers[i]});
        }
    }

    public getMarker(): any
    {           
        const markerHeight = 25;
        const markerWidth = 40;

        return {
            measure: function (measureInfo: DataTemplateMeasureInfo) {
                measureInfo.width = markerWidth;
                measureInfo.height = markerHeight;
            },
            render: function (renderInfo: DataTemplateRenderInfo) {
                const item = renderInfo.data.item as any;    
                const value = item.Value.toString(); 
                
                const ctx = renderInfo.context as CanvasRenderingContext2D;                
                                
                let x = renderInfo.xPosition;
                let y = renderInfo.yPosition;

                ctx.fillStyle = "#9FB328";                
                ctx.fillRect(x - (markerWidth / 2), y - (markerHeight / 2), markerWidth, markerHeight);

                ctx.fillStyle = "white";

                let textMeasure : TextMetrics = ctx.measureText(value);
                
                let textHeight = Math.abs(textMeasure.actualBoundingBoxAscent - textMeasure.actualBoundingBoxDescent);

                ctx.fillText(value, x - (textMeasure.width / 2), y - ((textHeight / 2)));            
            }
        }
    }
}
