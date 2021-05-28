import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// types of axis:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
// elements of scatter series:
import { IgrScatterAreaSeries } from 'igniteui-react-charts';
import { IgrCustomPaletteColorScale } from 'igniteui-react-charts';
import { ColorScaleInterpolationMode } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { SampleScatterData } from './SampleScatterData';

IgrDataChartCoreModule.register();
IgrDataChartScatterCoreModule.register();
IgrDataChartScatterModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartTypeScatterAreaSeries extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        let colorScale = new IgrCustomPaletteColorScale({});
        colorScale.interpolationMode = ColorScaleInterpolationMode.InterpolateHSV;
        colorScale.minimumValue = -2;
        colorScale.maximumValue = 2;
        colorScale.palette = [ "#8670CB", "#4AC4FF", "#B5CC2E", "#FC8612", "#ED4840" ];

        this.state = {
            data: SampleScatterData.create(),
            scale: colorScale
        };
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="options horizontal">
                <div className="legend-title">
                    <span>Distribution of Magnetic Field</span>
                </div>
            </div>

            <div className="container vertical">
                <IgrDataChart
                    width="100%"
                    height="100%"
                    gridMode="BeforeSeries"
                    isHorizontalZoomEnabled={true}
                    isVerticalZoomEnabled={true}
                    dataSource={this.state.data} >

                    {/* primary axes required for scatter-contour-series  */}
                    <IgrNumericXAxis name="xAxis1" labelLocation="OutsideBottom" title="Longitude" minimumValue={-180} maximumValue={180} />
                    <IgrNumericYAxis name="yAxis1" labelLocation="OutsideLeft" title="Latitude" minimumValue={-90} maximumValue={90} />

                    {/* optional axes that provide more context for displayed data */}
                    <IgrNumericXAxis name="xAxis2" labelLocation="OutsideTop" title="Longitude" minimumValue={-180} maximumValue={180} />
                    <IgrNumericYAxis name="yAxis2" labelLocation="OutsideRight" title="Latitude" minimumValue={-90} maximumValue={90} />

                    <IgrScatterAreaSeries
                        name="series"
                        xAxisName="xAxis1"
                        yAxisName="yAxis1"
                        xMemberPath="X"
                        yMemberPath="Y"
                        colorMemberPath="Z"
                        colorScale={this.state.scale}
                        showDefaultTooltip="true"/>
               </IgrDataChart>
            </div>
        </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<DataChartTypeScatterAreaSeries />, document.getElementById('root'));
