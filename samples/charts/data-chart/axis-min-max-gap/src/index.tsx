import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrDataChartCategoryModule, IgrDataChartAnnotationModule, IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrCategoryHighlightLayer, IgrColumnSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
import { TemperatureAverageDataItem, TemperatureAverageData } from './TemperatureAverageData';



const mods: any[] = [
    IgrDataChartCategoryModule,
    IgrDataChartAnnotationModule,
    IgrDataChartInteractivityModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private xAxis: IgrCategoryXAxis
    private yAxis: IgrNumericYAxis
    private categoryHighlightLayer: IgrCategoryHighlightLayer
    private columnSeries1: IgrColumnSeries
    private tooltips: IgrDataToolTipLayer

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Average Temperature Range in New York
            </div>


            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}>
                    <IgrCategoryXAxis
                        dataSource={this.temperatureAverageData}
                        minimumGapSize="25"
                        useEnhancedIntervalManagement="true"
                        enhancedIntervalPreferMoreCategoryLabels="true"
                        label="month"
                        name="xAxis">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxis">
                    </IgrNumericYAxis>
                    <IgrCategoryHighlightLayer
                        name="CategoryHighlightLayer">
                    </IgrCategoryHighlightLayer>
                    <IgrColumnSeries
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        valueMemberPath="temperature"
                        dataSource={this.temperatureAverageData}
                        name="columnSeries1">
                    </IgrColumnSeries>
                    <IgrDataToolTipLayer
                        name="Tooltips">
                    </IgrDataToolTipLayer>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _temperatureAverageData: TemperatureAverageData = null;
    public get temperatureAverageData(): TemperatureAverageData {
        if (this._temperatureAverageData == null)
        {
            this._temperatureAverageData = new TemperatureAverageData();
        }
        return this._temperatureAverageData;
    }
    


}


// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
