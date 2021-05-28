import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// axis' modules:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
// series' modules:
import { IgrScatterPolygonSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartShapeCoreModule } from 'igniteui-react-charts';
import { IgrDataChartShapeModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrDataContext } from 'igniteui-react-core';
import { IgrStyleShapeEventArgs } from 'igniteui-react-charts';

IgrDataChartCoreModule.register();
IgrDataChartShapeCoreModule.register();
IgrDataChartShapeModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartTypeScatterPolygonSeries extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            shapes: undefined,
            seats: undefined
        }

        fetch('https://static.infragistics.com/xplatform/json/airplane-shape.json')
            .then((response) => response.json())
            .then((data) => this.setState({ shapes: data }));

        fetch('https://static.infragistics.com/xplatform/json/airplane-seats.json')
            .then((response) => response.json())
            .then((data) => this.setState({ seats: data }));
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">

                <div className="options horizontal">
                    <div className="legend-title">
                        <span>Airplane Seating Chart (Polygons)</span>
                    </div>
                </div>

                <div className="custom-legend">
                    <div><span style="background: DodgerBlue; "></span><label>First Class</label></div>
                    <div><span style="background: LimeGreen; "></span><label>Business Class</label></div>
                    <div><span style="background: Orange; "></span><label>Premium Class</label></div>
                    <div><span style="background: Red; "></span><label>Economy Class</label></div>
                    <div><span style="background: Gray; "></span><label>Sold Seat</label> </div>
                    <div><span style="background: LightGray; "></span><label>Airplane</label> </div>
                </div>

                <div className="container"  >
                    <IgrDataChart
                        width="100%"
                        height="100%"
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true}>
                        <IgrNumericXAxis
                            name="xAxis"
                            minimumValue={-1000}
                            maximumValue={1000}
                            interval={200} />
                        <IgrNumericYAxis
                            name="yAxis"
                            minimumValue={-600}
                            maximumValue={600}
                            interval={200} />
                        <IgrScatterPolygonSeries
                            name="airplaneShapeSeries"
                            xAxisName="xAxis"
                            yAxisName="yAxis"
                            shapeMemberPath="points"
                            dataSource={this.state.shapes}
                            showDefaultTooltip={false}
                            thickness={0.5}
                            brush="LightGray"
                            outline="Black"/>
                        <IgrScatterPolygonSeries
                            name="airplaneSeatSeries"
                            xAxisName="xAxis"
                            yAxisName="yAxis"
                            title="Airplane Seats"
                            shapeMemberPath="points"
                            dataSource={this.state.seats}
                            styleShape={this.onStylingShape}
                            tooltipTemplate={this.createTooltip}/>
                   </IgrDataChart>
                </div>
            </div>
        );
    }

    private onStylingShape(sender: any, args: IgrStyleShapeEventArgs) {
        args.shapeOpacity = 1.0;
        args.shapeStrokeThickness = 0.5;
        args.shapeStroke = 'Black';
        args.shapeFill = 'White';

        const itemRecord = args.item as any;
        if (itemRecord.class === 'First') {
            args.shapeFill = 'DodgerBlue';
        }
        if (itemRecord.class === 'Business') {
            args.shapeFill = 'LimeGreen';
        }
        if (itemRecord.class === 'Premium') {
            args.shapeFill = 'Orange';
        }
        if (itemRecord.class === 'Economy') {
            args.shapeFill = 'Red';
        }
        if (itemRecord.status === 'Sold') {
            args.shapeFill = 'Gray';
        }
    }

    private createTooltip(context: any) {
        const dataContext = context.dataContext as IgrDataContext;
        if (!dataContext) return null;

        const series = dataContext.series as any;
        if (!series) return null;

        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        return (
            <div className='ui-tooltip-content'>
                <div>Class: {dataItem.class}</div>
                <div>Seat: {dataItem.seat}</div>
                <div>Price: ${dataItem.price}</div>
                <div>Status: {dataItem.status}</div>
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<DataChartTypeScatterPolygonSeries />, document.getElementById('root'));
