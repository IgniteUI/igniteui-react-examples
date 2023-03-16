import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrLegendModule, IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrDataLegend, IgrCategoryChart } from 'igniteui-react-charts';
import { HighestGrossingMoviesItem, HighestGrossingMovies } from './HighestGrossingMovies';

const mods: any[] = [
    IgrLegendModule,
    IgrCategoryChartModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrDataLegend
    private legendRef(r: IgrDataLegend) {
        this.legend = r;
        this.setState({});
    }
    private chart: IgrCategoryChart
    private chartRef(r: IgrCategoryChart) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Highest Grossing Movie Franchises
            </div>

            <div className="legend">
                <IgrDataLegend
                    valueFormatMinFractions="1"
                    valueFormatMode="Decimal"
                    target={this.chart}
                    unitsText="B"
                    ref={this.legendRef}>
                </IgrDataLegend>
            </div>

            <div className="container fill">
                <IgrCategoryChart
                    chartType="Column"
                    xAxisInterval="1"
                    isCategoryHighlightingEnabled="true"
                    yAxisLabelLeftMargin="0"
                    yAxisTitleLeftMargin="10"
                    yAxisTitleRightMargin="5"
                    yAxisTitle="Billions of U.S. Dollars"
                    dataSource={this.highestGrossingMovies}
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    toolTipType="None"
                    crosshairsDisplayMode="None"
                    ref={this.chartRef}>
                </IgrCategoryChart>
            </div>
        </div>
        );
    }

    private _highestGrossingMovies: HighestGrossingMovies = null;
    public get highestGrossingMovies(): HighestGrossingMovies {
        if (this._highestGrossingMovies == null)
        {
            this._highestGrossingMovies = new HighestGrossingMovies();
        }
        return this._highestGrossingMovies;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);