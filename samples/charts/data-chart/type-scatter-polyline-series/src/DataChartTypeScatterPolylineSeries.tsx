// axis' modules:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
// series' modules:
import { IgrScatterPolylineSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartShapeCoreModule } from 'igniteui-react-charts';
import { IgrDataChartShapeModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrDataContext } from 'igniteui-react-core';
import { IgrStyleShapeEventArgs } from 'igniteui-react-charts';
import * as React from 'react';

IgrDataChartCoreModule.register();
IgrDataChartShapeCoreModule.register();
IgrDataChartShapeModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartTypeScatterPolylineSeries extends React.Component {

    public chart: IgrDataChart;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="igContainer">
                <div className="igComponent"  >
                    <IgrDataChart ref={this.onChartRef}
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true}
                        width="100%"
                        height="100%"
                        subtitleTopMargin="10"
                        subtitle="Airplane Seating Chart (Polylines)">
                        <IgrNumericXAxis name="xAxis" minimumValue={-800} maximumValue={800} interval={200} />
                        <IgrNumericYAxis name="yAxis" minimumValue={-600} maximumValue={600} interval={200} />

                        <IgrScatterPolylineSeries
                            name="airplaneShapeSeries"
                            xAxisName="xAxis"
                            yAxisName="yAxis"
                            shapeMemberPath="points"
                            thickness="0.5"
                            brush="LightGray"
                            outline="Black"/>

                        <IgrScatterPolylineSeries
                            name="airplaneSeatSeries"
                            xAxisName="xAxis"
                            yAxisName="yAxis"
                            shapeMemberPath="points"/>
                   </IgrDataChart>
                </div>
            </div>
        );
    }

    public onChartRef(chart: IgrDataChart) {
        if (!chart) { return; }

        this.chart = chart;

        fetch('https://static.infragistics.com/xplatform/json/airplane-shape.json')
            .then((response) => response.json())
            .then((data) => this.onAirplaneShapesLoaded(data));

        fetch('https://static.infragistics.com/xplatform/json/airplane-seats.json')
            .then((response) => response.json())
            .then((data) => this.onAirplaneSeatsLoaded(data));
    }

    public onAirplaneShapesLoaded(jsonData: any[]) {
        console.log('onAirplaneShapesLoaded');
        const airplaneShapeSeries = this.chart.actualSeries[0] as IgrScatterPolylineSeries;
        airplaneShapeSeries.dataSource = jsonData;
        airplaneShapeSeries.renderSeries(false);
    }

    public onAirplaneSeatsLoaded(jsonData: any[]) {
        console.log('onAirplaneSeatsLoaded');
        const airplaneSeatSeries = this.chart.actualSeries[1] as IgrScatterPolylineSeries;
        airplaneSeatSeries.styleShape = this.onStylingShape;
        airplaneSeatSeries.tooltipTemplate = this.createTooltip;
        airplaneSeatSeries.dataSource = jsonData;
        airplaneSeatSeries.renderSeries(false);
    }

    public onStylingShape(sender: any, args: IgrStyleShapeEventArgs) {

        console.log('onStylingShape');
        args.shapeOpacity = 1.0;
        args.shapeStrokeThickness = 1.0;
        args.shapeStroke = 'Black';

        const itemRecord = args.item as any;
        if (itemRecord.class === 'First') {
            args.shapeStroke = 'DodgerBlue';
        }
        if (itemRecord.class === 'Business') {
            args.shapeStroke = 'LimeGreen';
        }
        if (itemRecord.class === 'Premium') {
            args.shapeStroke = 'Orange';
        }
        if (itemRecord.class === 'Economy') {
            args.shapeStroke = 'Red';
        }

        if (itemRecord.status === 'Sold') {
            args.shapeStroke = 'Gray';
        }
    }

    public createTooltip(context: any) {
        const dataContext = context.dataContext as IgrDataContext;
        if (!dataContext) return null;

        const series = dataContext.series as any;
        if (!series) return null;

        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        // style="display: 'inline-block', marginLeft: 5"
        return <div >
            <div className='tooltipBox'>
                <div className='tooltipRow'>
                    <div className='tooltipLbl'>Class</div>
                    <div className='tooltipVal'>{dataItem.class}</div>
                </div>
                <div className='tooltipRow'>
                    <div className='tooltipLbl'>Seat</div>
                    <div className='tooltipVal'>{dataItem.seat} </div>
                </div>
                <div className='tooltipRow'>
                    <div className='tooltipLbl'>Price</div>
                    <div className='tooltipVal'>{dataItem.price}</div>
                </div>
                <div className='tooltipRow'>
                    <div className='tooltipLbl'>Status</div>
                    <div className='tooltipVal'>{dataItem.status}</div>
                </div>
            </div>
        </div>
    }

}
