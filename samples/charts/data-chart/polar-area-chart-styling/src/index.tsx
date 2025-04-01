import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrDataChartCoreModule, IgrDataChartPolarModule, IgrDataChartPolarCoreModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule, IgrLegendModule } from 'igniteui-react-charts';
import { IgrLegend, IgrDataChart, IgrNumericAngleAxis, IgrNumericRadiusAxis, IgrPolarAreaSeries } from 'igniteui-react-charts';
import { BoatSailingDataItem, BoatSailingData } from './BoatSailingData';

const mods: any[] = [
    IgrDataChartCoreModule,
    IgrDataChartPolarModule,
    IgrDataChartPolarCoreModule,
    IgrDataChartInteractivityModule,
    IgrDataChartAnnotationModule,
    IgrLegendModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrLegend
    private legendRef(r: IgrLegend) {
        this.legend = r;
        this.setState({});
    }
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private angleAxis: IgrNumericAngleAxis
    private radiusAxis: IgrNumericRadiusAxis
    private polarAreaSeries1: IgrPolarAreaSeries
    private polarAreaSeries2: IgrPolarAreaSeries

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Wind Speed vs Boat Speed
            </div>

            <div className="legend">
                <IgrLegend
                    ref={this.legendRef}
                    orientation="Horizontal">
                </IgrLegend>
            </div>

            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}
                    legend={this.legend}
                    isHorizontalZoomEnabled={false}
                    isVerticalZoomEnabled={false}
                    markerBrushes="white"
                    markerOutlines="rgba(140, 231, 217, 1) rgba(238, 88, 121, 1)"
                    brushes="rgba(140, 231, 217, 1) rgba(238, 88, 121, 1)"
                    outlines="rgba(140, 231, 217, 1) rgba(238, 88, 121, 1)">
                    <IgrNumericAngleAxis
                        name="angleAxis"
                        startAngleOffset={-90}
                        interval={30}
                        minimumValue={0}
                        maximumValue={360}
                        labelTextStyle="normal bold 14px Verdana">
                    </IgrNumericAngleAxis>
                    <IgrNumericRadiusAxis
                        name="radiusAxis"
                        radiusExtentScale={0.9}
                        innerRadiusExtentScale={0.1}
                        interval={25}
                        minimumValue={0}
                        maximumValue={100}>
                    </IgrNumericRadiusAxis>
                    <IgrPolarAreaSeries
                        name="PolarAreaSeries1"
                        dataSource={this.boatSailingData}
                        angleAxisName="angleAxis"
                        radiusAxisName="radiusAxis"
                        angleMemberPath="direction"
                        radiusMemberPath="windSpeed"
                        showDefaultTooltip={true}
                        areaFillOpacity={0.3}
                        thickness={1}
                        title="Wind Speed"
                        markerType="Circle">
                    </IgrPolarAreaSeries>
                    <IgrPolarAreaSeries
                        name="PolarAreaSeries2"
                        dataSource={this.boatSailingData}
                        angleAxisName="angleAxis"
                        radiusAxisName="radiusAxis"
                        angleMemberPath="direction"
                        radiusMemberPath="boatSpeed"
                        showDefaultTooltip={true}
                        areaFillOpacity={0.3}
                        thickness={1}
                        title="Boat Speed"
                        markerType="Circle">
                    </IgrPolarAreaSeries>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _boatSailingData: BoatSailingData = null;
    public get boatSailingData(): BoatSailingData {
        if (this._boatSailingData == null)
        {
            this._boatSailingData = new BoatSailingData();
        }
        return this._boatSailingData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);