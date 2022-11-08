import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// importing axis' modules:
import { AxisLabelsLocation, IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
// importing category series' modules:
import { IgrLineSeries } from 'igniteui-react-charts';
import { IgrFinalValueLayer} from "igniteui-react-charts";
// importing data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrDataChartAnnotationModule } from 'igniteui-react-charts';
import { IgrFinalValueLayerModule } from 'igniteui-react-charts'

import { SampleCategoryData } from './SampleCategoryData';

IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartInteractivityModule.register();
IgrDataChartAnnotationModule.register();
IgrFinalValueLayerModule.register();

export default class DataChartFinalValueLayerStyling extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.data = SampleCategoryData.create();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container" style={{ height: "calc(100% - 35px)" }} >
                    <IgrDataChart ref={this.onChartRef}
                        width="100%"
                        height="100%"
                        subtitle="Renewable Energy Generated"
                        dataSource={this.data}>
                        <IgrCategoryXAxis name="xAxis" 
                            label="Year" 
                            dataSource={this.data}/>
                        <IgrNumericYAxis name="yAxis" 
                            title="TWh" 
                            labelLocation={AxisLabelsLocation.OutsideRight}/>
                        <IgrLineSeries name="series1"
                            xAxisName="xAxis"
                            yAxisName="yAxis"
                            valueMemberPath="USA"/>
                        <IgrFinalValueLayer name="FinalValueLayer" 
                            axisAnnotationBackground="Orange" 
                            axisAnnotationTextColor="Black" 
                            axisAnnotationOutline="Black"/>
                    </IgrDataChart>
                </div>
            </div>
        );
    }

    public onChartRef(chart: IgrDataChart) {
        if (!chart) { return; }

        this.chart = chart;
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataChartFinalValueLayerStyling/>);
