import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { DataEuropeItem, DataEurope, DataAfricaItem, DataAfrica } from './SampleData';
import { IgrLegendModule, IgrNumberAbbreviatorModule, IgrDataChartCoreModule, IgrDataChartScatterModule, IgrDataChartScatterCoreModule, IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrDataChart, IgrNumericXAxis, IgrNumericYAxis, IgrBubbleSeries } from 'igniteui-react-charts';



const mods: any[] = [
    IgrLegendModule,
    IgrNumberAbbreviatorModule,
    IgrDataChartCoreModule,
    IgrDataChartScatterModule,
    IgrDataChartScatterCoreModule,
    IgrDataChartInteractivityModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private xAxis: IgrNumericXAxis
    private yAxis: IgrNumericYAxis
    private bubbleSeries1: IgrBubbleSeries
    private bubbleSeries2: IgrBubbleSeries

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
            
            <div className="legend-title">
                Total Population of Selected Countries
            </div>
            
            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}>
                    <IgrNumericXAxis
                        minimumValue="4"
                        maximumValue="16"
                        interval="1"
                        title="Death Rate"
                        name="xAxis">
                    </IgrNumericXAxis>
                    <IgrNumericYAxis
                        minimumValue="0"
                        maximumValue="60"
                        interval="10"
                        title="Birth Rate"
                        name="yAxis">
                    </IgrNumericYAxis>
                    <IgrBubbleSeries
                        radiusMemberPath="population"
                        radiusMemberAsLegendLabel="Population:"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        xMemberPath="deathRate"
                        yMemberPath="birthRate"
                        xMemberAsLegendLabel="Death Rate:"
                        yMemberAsLegendLabel="Birth Rate:"
                        dataSource={this.dataAfrica}
                        title="Africa"
                        name="BubbleSeries1">
                        <IgrSizeScale
                            minimumValue="10"
                            maximumValue="100">
                        </IgrSizeScale>
                    </IgrBubbleSeries>
                    <IgrBubbleSeries
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.dataEurope}
                        xMemberPath="deathRate"
                        yMemberPath="birthRate"
                        radiusMemberPath="population"
                        title="Europe"
                        radiusMemberAsLegendLabel="Population:"
                        xMemberAsLegendLabel="Death Rate:"
                        yMemberAsLegendLabel="Birth Rate:"
                        name="BubbleSeries2">
                        <IgrSizeScale
                            minimumValue="10"
                            maximumValue="100">
                        </IgrSizeScale>
                    </IgrBubbleSeries>
                    <IgrDataToolTipLayer
                    >
                    </IgrDataToolTipLayer>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _dataEurope: DataEurope = null;
    public get dataEurope(): DataEurope {
        if (this._dataEurope == null)
        {
            this._dataEurope = new DataEurope();
        }
        return this._dataEurope;
    }
    
    private _dataAfrica: DataAfrica = null;
    public get dataAfrica(): DataAfrica {
        if (this._dataAfrica == null)
        {
            this._dataAfrica = new DataAfrica();
        }
        return this._dataAfrica;
    }
    


}


// rendering above component in the React DOM
ReactDOM.render(<Sample />, document.getElementById('root'));
