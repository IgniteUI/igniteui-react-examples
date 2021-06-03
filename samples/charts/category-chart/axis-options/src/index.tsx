import { Data } from './SampleData';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrPropertyEditorModule } from 'igniteui-react-grids';

import { IgrCategoryChart } from 'igniteui-react-charts';
const mods: any[] = [
    IgrCategoryChartModule,
    IgrPropertyEditorModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private chart: IgrCategoryChart
    private chartRef(r: IgrCategoryChart) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
   }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Olympic Medals By Country
            </div>
            <div className="container fill">
                <IgrCategoryChart
                    dataSource={this.data}
                    chartType="Line"
                    xAxisLabelTextColor="gray"
                    xAxisLabelTextStyle="9pt Verdana"
                    xAxisLabelTopMargin="5"
                    yAxisLabelTextColor="gray"
                    yAxisLabelTextStyle="9pt Verdana"
                    yAxisLabelRightMargin="0"
                    yAxisLabelLocation="OutsideRight"
                    xAxisInterval="1"
                    xAxisGap="0.125"
                    xAxisOverlap="0"
                    yAxisInterval="25"
                    yAxisMinimumValue="50"
                    yAxisMaximumValue="150"
                    yAxisMinorInterval="5"
                    yAxisTitleLeftMargin="5"
                    xAxisTitleTextColor="gray"
                    yAxisTitleTextColor="gray"
                    xAxisTitleTextStyle="10pt Verdana"
                    yAxisTitleTextStyle="10pt Verdana"
                    xAxisMajorStroke="gray"
                    yAxisMajorStroke="black"
                    xAxisMajorStrokeThickness="0.5"
                    yAxisMajorStrokeThickness="1"
                    yAxisMinorStrokeThickness="0.5"
                    xAxisTickLength="10"
                    yAxisTickLength="10"
                    xAxisTickStroke="black"
                    yAxisTickStroke="black"
                    xAxisTickStrokeThickness="0.5"
                    yAxisTickStrokeThickness="0.5"
                    xAxisTitle="Olympic Games"
                    yAxisTitle="Total Medals"
                    yAxisMinorStroke="gray"
                    xAxisTitleAngle="0"
                    yAxisTitleAngle="90"
                    thickness="3"
                    ref={this.chartRef}>
                </IgrCategoryChart>
            </div>
        </div>
        );
   }

    private _data: Data = null;
    public get data(): Data {
        if (this._data == null)
        {
            this._data = new Data();
        }
        return this._data;
    }

}
// rendering above component in the React DOM
ReactDOM.render(<Sample />, document.getElementById('root'));
