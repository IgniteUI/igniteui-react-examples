import React from 'react';
import ReactDOM from 'react-dom/client';
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

    public componentDidMount() {
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Olympic Medals By Country
            </div>

            <div className="container fill">
                <IgrCategoryChart
                    ref={this.chartRef}
                    dataSource={this.olympicMedalsTopCountries}
                    chartType="Line"
                    thickness="3"
                    computedPlotAreaMarginMode="Series"
                    xAxisLabelTextStyle="9pt Verdana"
                    xAxisLabelTopMargin="5"
                    xAxisLabelTextColor="gray"
                    yAxisLabelLocation="OutsideRight"
                    yAxisLabelTextStyle="9pt Verdana"
                    yAxisLabelRightMargin="0"
                    yAxisLabelTextColor="gray"
                    xAxisTitle="Olympic Games"
                    xAxisTitleTextColor="gray"
                    xAxisTitleTextStyle="10pt Verdana"
                    xAxisTitleAngle="0"
                    yAxisTitle="Total Medals"
                    yAxisTitleTextStyle="10pt Verdana"
                    yAxisTitleTextColor="gray"
                    yAxisTitleAngle="90"
                    yAxisTitleLeftMargin="5"
                    xAxisTickLength="10"
                    xAxisTickStrokeThickness="0.5"
                    xAxisTickStroke="black"
                    yAxisTickLength="10"
                    yAxisTickStrokeThickness="0.5"
                    yAxisTickStroke="black"
                    yAxisMinimumValue="50"
                    yAxisMaximumValue="150"
                    xAxisInterval="1"
                    xAxisMajorStroke="gray"
                    xAxisMajorStrokeThickness="0.5"
                    yAxisInterval="25"
                    yAxisMajorStroke="black"
                    yAxisMajorStrokeThickness="1"
                    yAxisMinorInterval="5"
                    yAxisMinorStroke="gray"
                    yAxisMinorStrokeThickness="0.5"
                    xAxisGap="0.125"
                    xAxisOverlap="0">
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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);