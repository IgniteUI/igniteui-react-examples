import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrLegendModule, IgrDataChartCoreModule, IgrDataChartCategoryCoreModule, IgrDataChartCategoryModule, IgrDataChartInteractivityModule, IgrDataChartVerticalCategoryModule, IgrDataChartAnnotationModule } from 'igniteui-react-charts';
import { IgrLegend, IgrDataChart, IgrCategoryYAxis, IgrNumericXAxis, IgrCategoryHighlightLayer, IgrBarSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
import { HighestGrossingMoviesItem, HighestGrossingMovies } from './HighestGrossingMovies';

const mods: any[] = [
    IgrLegendModule,
    IgrDataChartCoreModule,
    IgrDataChartCategoryCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartInteractivityModule,
    IgrDataChartVerticalCategoryModule,
    IgrDataChartAnnotationModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrLegend
    private legendRef(r: IgrLegend) {
        this.legend = r;
        this.setState({});
    }
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private yAxis: IgrCategoryYAxis
    private xAxis: IgrNumericXAxis
    private categoryHighlightLayer: IgrCategoryHighlightLayer
    private barSeries1: IgrBarSeries
    private barSeries2: IgrBarSeries
    private tooltips: IgrDataToolTipLayer

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
                <IgrLegend
                    ref={this.legendRef}
                    orientation="Horizontal">
                </IgrLegend>
            </div>

            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}
                    legend={this.legend}>
                    <IgrCategoryYAxis
                        name="yAxis"
                        label="franchise"
                        useEnhancedIntervalManagement={true}
                        enhancedIntervalPreferMoreCategoryLabels={true}
                        dataSource={this.highestGrossingMovies}
                        isInverted={true}
                        gap={0.5}
                        overlap={-0.1}>
                    </IgrCategoryYAxis>
                    <IgrNumericXAxis
                        name="xAxis"
                        title="Billions of U.S. Dollars">
                    </IgrNumericXAxis>
                    <IgrCategoryHighlightLayer
                        name="CategoryHighlightLayer">
                    </IgrCategoryHighlightLayer>
                    <IgrBarSeries
                        name="BarSeries1"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        title="Total Revenue of Franchise"
                        valueMemberPath="totalRevenue"
                        dataSource={this.highestGrossingMovies}
                        showDefaultTooltip={true}
                        isTransitionInEnabled={true}
                        isHighlightingEnabled={true}>
                    </IgrBarSeries>
                    <IgrBarSeries
                        name="BarSeries2"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        title="Highest Grossing Movie in Series"
                        valueMemberPath="highestGrossing"
                        dataSource={this.highestGrossingMovies}
                        showDefaultTooltip={true}
                        isTransitionInEnabled={true}
                        isHighlightingEnabled={true}>
                    </IgrBarSeries>
                    <IgrDataToolTipLayer
                        name="Tooltips">
                    </IgrDataToolTipLayer>
                </IgrDataChart>
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