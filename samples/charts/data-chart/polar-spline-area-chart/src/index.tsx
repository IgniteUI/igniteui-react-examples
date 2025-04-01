import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrDataChartCoreModule, IgrDataChartPolarModule, IgrDataChartPolarCoreModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule } from 'igniteui-react-charts';
import { IgrDataChart, IgrNumericAngleAxis, IgrNumericRadiusAxis, IgrPolarSplineAreaSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
import { BoatSailingDataItem, BoatSailingData } from './BoatSailingData';

const mods: any[] = [
    IgrDataChartCoreModule,
    IgrDataChartPolarModule,
    IgrDataChartPolarCoreModule,
    IgrDataChartInteractivityModule,
    IgrDataChartAnnotationModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private angleAxis: IgrNumericAngleAxis
    private radiusAxis: IgrNumericRadiusAxis
    private polarSplineAreaSeries1: IgrPolarSplineAreaSeries
    private polarSplineAreaSeries2: IgrPolarSplineAreaSeries
    private dataToolTipLayer: IgrDataToolTipLayer

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Wind Speed vs Boat Speed
            </div>

            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}
                    isHorizontalZoomEnabled={false}
                    isVerticalZoomEnabled={false}>
                    <IgrNumericAngleAxis
                        name="angleAxis"
                        startAngleOffset={-90}
                        interval={30}
                        minimumValue={0}
                        maximumValue={360}>
                    </IgrNumericAngleAxis>
                    <IgrNumericRadiusAxis
                        name="radiusAxis"
                        radiusExtentScale={0.9}
                        innerRadiusExtentScale={0.1}
                        interval={25}
                        minimumValue={0}
                        maximumValue={100}>
                    </IgrNumericRadiusAxis>
                    <IgrPolarSplineAreaSeries
                        name="PolarSplineAreaSeries1"
                        dataSource={this.boatSailingData}
                        angleAxisName="angleAxis"
                        radiusAxisName="radiusAxis"
                        angleMemberPath="direction"
                        radiusMemberPath="windSpeed"
                        showDefaultTooltip={false}
                        areaFillOpacity={0.8}
                        thickness={1}
                        title="Wind Speed"
                        markerType="Circle">
                    </IgrPolarSplineAreaSeries>
                    <IgrPolarSplineAreaSeries
                        name="PolarSplineAreaSeries2"
                        dataSource={this.boatSailingData}
                        angleAxisName="angleAxis"
                        radiusAxisName="radiusAxis"
                        angleMemberPath="direction"
                        radiusMemberPath="boatSpeed"
                        showDefaultTooltip={false}
                        areaFillOpacity={0.8}
                        thickness={1}
                        title="Boat Speed"
                        markerType="Circle">
                    </IgrPolarSplineAreaSeries>
                    <IgrDataToolTipLayer
                        name="dataToolTipLayer">
                    </IgrDataToolTipLayer>
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