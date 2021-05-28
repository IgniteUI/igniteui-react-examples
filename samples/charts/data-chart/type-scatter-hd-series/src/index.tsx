import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// types of axis:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
// elements of scatter series:
import { IgrHighDensityScatterSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterModule } from 'igniteui-react-charts';
import { IgrHighDensityScatterSeriesModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrNumberAbbreviatorModule } from 'igniteui-react-charts';
import { SampleDensityData } from './SampleDensityData';

IgrDataChartCoreModule.register();
IgrDataChartScatterCoreModule.register();
IgrDataChartScatterModule.register();
IgrHighDensityScatterSeriesModule.register();
IgrDataChartInteractivityModule.register();
IgrNumberAbbreviatorModule.register();

export default class DataChartTypeScatterDensitySeries extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: SampleDensityData.create()
        };
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container vertical">
                    <IgrDataChart
                        width="100%"
                        height="100%"
                        subtitle="Stars Distribution in Milky Way Galaxy"
                        subtitleTopMargin={10}
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true}
                        dataSource={this.state.data} >
                        <IgrNumericXAxis
                            name="xAxis"
                            abbreviateLargeNumbers={true}
                            titleBottomMargin={10}
                            title="Plane of Rotation (in Light Years)"/>
                        <IgrNumericYAxis
                            name="yAxis"
                            abbreviateLargeNumbers={true}
                            titleLeftMargin={10}
                            title="Vertical Plane (in Light Years)"/>
                        <IgrHighDensityScatterSeries
                            name="series"
                            xAxisName="xAxis"
                            yAxisName="yAxis"
                            title="Distribution"
                            xMemberPath="X"
                            yMemberPath="Y"
                            showDefaultTooltip="true"
                            mouseOverEnabled="true"
                            progressiveLoad="true"
                            heatMinimumColor="Black"
                            heatMaximumColor="Yellow"
                            heatMaximum={1}
                            heatMinimum={5}
                            resolution={3}/>
                    </IgrDataChart>
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<DataChartTypeScatterDensitySeries />, document.getElementById('root'));
