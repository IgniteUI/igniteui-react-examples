import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// data chart's elements for category series:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
import { IgrLineSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';

IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartSeriesMarkers extends React.Component<any, any> {
    public data: any[];

    constructor(props: any) {
        super(props);

        this.state = { markersType: "Circle" }
        this.initData();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <label className="options-label"> Marker Type: </label>
                    <select value={this.state.markersType}
                        onChange={this.onMarkerTypeChanged}>
                        <option>Automatic</option>
                        <option>Circle</option>
                        <option>Triangle</option>
                        <option>Pyramid</option>
                        <option>Square</option>
                        <option>Diamond</option>
                        <option>Pentagon</option>
                        <option>Hexagon</option>
                        <option>Tetragram</option>
                        <option>Pentagram</option>
                        <option>Hexagram</option>
                        <option>None</option>
                    </select>
                </div>
                <div className="container" style={{height: "calc(100% - 35px)"}} >
                    <IgrDataChart
                        width="100%"
                        height="100%"
                        dataSource={this.data}
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true} >

                        <IgrCategoryXAxis name="xAxis" label="Year"/>
                        <IgrNumericYAxis name="yAxis" minimumValue={0} />

                        <IgrLineSeries name="series1" title="USA"
                                       valueMemberPath="USA"
                                       xAxisName="xAxis"
                                       yAxisName="yAxis"
                                       markerType={this.state.markersType}/>
                        <IgrLineSeries name="series2" title="China"
                                       valueMemberPath="China"
                                       xAxisName="xAxis"
                                       yAxisName="yAxis"
                                       markerType={this.state.markersType}/>
                        <IgrLineSeries name="series3" title="Russia"
                                       valueMemberPath="Russia"
                                       xAxisName="xAxis"
                                       yAxisName="yAxis"
                                       markerType={this.state.markersType} />
                   </IgrDataChart>
                </div>
            </div>
        );
    }

    public onMarkerTypeChanged = (e: any) =>{
        const markers = e.target.value.toString();
        this.setState({markersType: markers});
    }

    public initData() {
        this.data =  [
            { Year: "1996", USA: 148, China: 110, Russia: 95 },
            { Year: "2000", USA: 142, China: 115, Russia: 91 },
            { Year: "2004", USA: 134, China: 121, Russia: 86 },
            { Year: "2008", USA: 131, China: 129, Russia: 65 },
            { Year: "2012", USA: 135, China: 115, Russia: 77 },
            { Year: "2016", USA: 146, China: 112, Russia: 88 }
        ];
    }

}

// rendering above class to the React DOM
ReactDOM.render(<DataChartSeriesMarkers />, document.getElementById('root'));
