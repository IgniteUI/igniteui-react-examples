import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDataChartCoreModule, IgrDataChartInteractivityModule, IgrDataChartScatterCoreModule, IgrDataChartScatterModule,
         IgrDataChart, IgrNumericXAxis, IgrNumericYAxis, IgrScatterSplineSeries } from 'igniteui-react-charts';

IgrDataChartCoreModule.register();
IgrDataChartScatterCoreModule.register();
IgrDataChartScatterModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartAxisSharing extends React.Component<any, any> {
    public data: any[] = [];
    public chart: IgrDataChart;

    constructor(props: any) {
        super(props);        
        
        this.onXAxisCrossValueChange = this.onXAxisCrossValueChange.bind(this);
        this.onYAxisCrossValueChange = this.onYAxisCrossValueChange.bind(this);

        this.state = {
            xAxisCrossValue: 0,
            yAxisCrossValue: 0
        }
        
        this.initData();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <label className="option-label">X-Axis Crossing Value: </label>
                    <label className="options-value">{this.state.xAxisCrossValue}</label>
                    <input className="options-slider" type="range" min={-360} max={360} step={10} value={this.state.xAxisCrossValue}
                           onChange={this.onXAxisCrossValueChange}/>
                    <label className="option-label">Y-Axis Crossing Value: </label>
                    <label className="options-value">{this.state.yAxisCrossValue}</label>
                    <input className="options-slider" type="range" min={-1.25} max={1.25} step={0.125} value={this.state.yAxisCrossValue} 
                           onChange={this.onYAxisCrossValueChange}/>
                </div>
                <div className="container">
                    <IgrDataChart
                        width="100%"
                        height="100%"
                        dataSource={this.data}
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true}
                        plotAreaMarginBottom={60}
                        plotAreaMarginTop={60}
                        plotAreaMarginLeft={30}
                        plotAreaMarginRight={30}>

                        <IgrNumericXAxis name="xAxis" interval={40} minimumValue={-360} maximumValue={360} labelLocation="InsideBottom"
                            labelTopMargin={10} crossingAxisName="yAxis" crossingValue={this.state.yAxisCrossValue} strokeThickness={1} stroke="Black" />

                        <IgrNumericYAxis name="yAxis" minimumValue={-1.25} maximumValue={1.25} interval={0.25} labelLocation="InsideLeft"
                            labelRightMargin={10} crossingAxisName="xAxis" crossingValue={this.state.xAxisCrossValue} strokeThickness={1} stroke="Black" />

                        <IgrScatterSplineSeries name="series1" xAxisName="xAxis" yAxisName="yAxis" markerType="Circle" xMemberPath="X" yMemberPath="sinValue" />
                        <IgrScatterSplineSeries name="series2" xAxisName="xAxis" yAxisName="yAxis" markerType="Circle" xMemberPath="X" yMemberPath="cosValue" />
                    </IgrDataChart>
                </div>
            </div>
        );
    }

    public initData() {
        for (let i = -360; i <= 360; i += 10) {
            const radians = (i * Math.PI) / 180;
            const sin = Math.sin(radians);
            const cos = Math.cos(radians);
            this.data.push({ X: i, sinValue: sin, cosValue: cos });
        }
    }

    public onXAxisCrossValueChange(e: any){
        this.setState({ xAxisCrossValue: e.target.value});
    }

    public onYAxisCrossValueChange(e: any){
        this.setState({ yAxisCrossValue: e.target.value});
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataChartAxisSharing/>);

