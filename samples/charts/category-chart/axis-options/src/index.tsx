import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrCategoryChart } from 'igniteui-react-charts';
import { OlympicMedalsTopCountriesItem, OlympicMedalsTopCountries } from './OlympicMedalsTopCountries';

const mods: any[] = [
    IgrCategoryChartModule
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
                    chartType="Line"
                    xAxisInterval="1"
                    xAxisGap="0.125"
                    xAxisOverlap="0"
                    yAxisInterval="25"
                    yAxisMinimumValue="50"
                    yAxisMaximumValue="150"
                    yAxisMinorInterval="5"
                    xAxisLabelTopMargin="5"
                    yAxisLabelRightMargin="0"
                    xAxisLabelTextColor="gray"
                    yAxisLabelTextColor="gray"
                    yAxisTitleLeftMargin="5"
                    xAxisTitleTextColor="gray"
                    yAxisTitleTextColor="gray"
                    xAxisLabelTextStyle="9pt Verdana"
                    yAxisLabelTextStyle="9pt Verdana"
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
                    yAxisLabelLocation="OutsideRight"
                    dataSource={this.olympicMedalsTopCountries}
                    thickness="3"
                    computedPlotAreaMarginMode="Series"
                    ref={this.chartRef}>
                </IgrCategoryChart>
            </div>
        </div>
        );
    }

    private _olympicMedalsTopCountries: OlympicMedalsTopCountries = null;
    public get olympicMedalsTopCountries(): OlympicMedalsTopCountries {
        if (this._olympicMedalsTopCountries == null)
        {
            this._olympicMedalsTopCountries = new OlympicMedalsTopCountries();
        }
        return this._olympicMedalsTopCountries;
    }
    


}


// rendering above component in the React DOM
ReactDOM.render(<Sample />, document.getElementById('root'));
