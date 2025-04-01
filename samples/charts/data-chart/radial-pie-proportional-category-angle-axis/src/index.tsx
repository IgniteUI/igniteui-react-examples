import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrDataPieChartCoreModule, IgrDataChartCoreModule, IgrDataChartRadialModule, IgrDataChartRadialCoreModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule } from 'igniteui-react-charts';
import { IgrDataChart, IgrProportionalCategoryAngleAxis, IgrNumericRadiusAxis, IgrRadialPieSeries } from 'igniteui-react-charts';
import { RadialProportionalDataItem, RadialProportionalData } from './RadialProportionalData';

const mods: any[] = [
    IgrDataPieChartCoreModule,
    IgrDataChartCoreModule,
    IgrDataChartRadialModule,
    IgrDataChartRadialCoreModule,
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
    private angleAxis: IgrProportionalCategoryAngleAxis
    private radiusAxis: IgrNumericRadiusAxis
    private radialPieSeries1: IgrRadialPieSeries

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}
                    isHorizontalZoomEnabled={false}
                    isVerticalZoomEnabled={false}>
                    <IgrProportionalCategoryAngleAxis
                        name="angleAxis"
                        dataSource={this.radialProportionalData}
                        label="label"
                        valueMemberPath="value"
                        gap={0}
                        othersCategoryText="Others"
                        othersCategoryThreshold={55}
                        othersCategoryType="Number">
                    </IgrProportionalCategoryAngleAxis>
                    <IgrNumericRadiusAxis
                        name="radiusAxis"
                        minimumValue={0}
                        maximumValue={100}>
                    </IgrNumericRadiusAxis>
                    <IgrRadialPieSeries
                        name="RadialPieSeries1"
                        dataSource={this.radialProportionalData}
                        angleAxisName="angleAxis"
                        valueAxisName="radiusAxis"
                        valueMemberPath="value"
                        showDefaultTooltip={false}
                        useItemWiseColors={true}
                        legendRadialLabelMode="LabelAndValueAndPercentage"
                        markerType="None"
                        title="Categories">
                    </IgrRadialPieSeries>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _radialProportionalData: RadialProportionalData = null;
    public get radialProportionalData(): RadialProportionalData {
        if (this._radialProportionalData == null)
        {
            this._radialProportionalData = new RadialProportionalData();
        }
        return this._radialProportionalData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);