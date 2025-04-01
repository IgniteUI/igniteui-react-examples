import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrDataLegendModule, IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrDataLegend, IgrCategoryChart } from 'igniteui-react-charts';
import { HighestGrossingMoviesItem, HighestGrossingMovies } from './HighestGrossingMovies';

const mods: any[] = [
    IgrDataLegendModule,
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
                    ref={this.legendRef}
                    target={this.chart}
                    valueFormatMode="Decimal"
                    valueFormatMinFractions={1}
                    unitsText="B">
                </IgrDataLegend>
            </div>

            <div className="container fill">
                <IgrCategoryChart
                    ref={this.chartRef}
                    chartType="Column"
                    dataSource={this.highestGrossingMovies}
                    xAxisInterval={1}
                    yAxisTitle="Billions of U.S. Dollars"
                    yAxisTitleLeftMargin={10}
                    yAxisTitleRightMargin={5}
                    yAxisLabelLeftMargin={0}
                    isHorizontalZoomEnabled={false}
                    isVerticalZoomEnabled={false}
                    toolTipType="None"
                    crosshairsDisplayMode="None"
                    isCategoryHighlightingEnabled={true}>
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