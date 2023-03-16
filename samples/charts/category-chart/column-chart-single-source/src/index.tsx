import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrCategoryChart } from 'igniteui-react-charts';
import { TemperatureAverageDataItem, TemperatureAverageData } from './TemperatureAverageData';

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
                Average Temperature Range in New York
            </div>

            <div className="container fill">
                <IgrCategoryChart
                    chartType="Column"
                    isCategoryHighlightingEnabled="true"
                    yAxisLabelLeftMargin="0"
                    yAxisTitleLeftMargin="10"
                    yAxisTitleRightMargin="5"
                    yAxisTitle="Temperature in Degrees Celsius"
                    dataSource={this.temperatureAverageData}
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    highlightingMode="FadeOthersSpecific"
                    highlightingBehavior="NearestItemsAndSeries"
                    crosshairsDisplayMode="None"
                    ref={this.chartRef}>
                </IgrCategoryChart>
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