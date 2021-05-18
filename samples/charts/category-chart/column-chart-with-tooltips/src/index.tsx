import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrCategoryChart } from 'igniteui-react-charts';
import { IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrLegend } from 'igniteui-react-charts';
import { IgrLegendModule } from 'igniteui-react-charts';

IgrCategoryChartModule.register();
IgrLegendModule.register();

export default class CategoryChartColumnChartWithTooltips extends React.Component<any, any> {
    public data: any[];
    public chart: IgrCategoryChart;
    public legend: IgrLegend;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);

        this.state = { toolTipType: "Default" }
        this.initData();
    }

    public render(): JSX.Element {
        return (
        <div className="container sample" >
            <div className="options vertical">
                <span className="legend-title">Highest Grossing Movie Franchises</span>
                    <div className="legend">
                        <IgrLegend ref={this.onLegendRef} 
                        orientation="horizontal" />
                    </div>
            </div>      
            <div className="overlay-right" >
                <div className="options horizontal">
                    <span className="options-label">Tooltip Type: </span>
                    <select value={this.state.toolTipType}
                        onChange={this.onChartTooltipChanged}>
                        <option>Default</option>
                        <option>Item</option>
                        <option>Category</option>
                    </select>
                </div>
            </div>
            <div className="container" style={{height: "calc(100% - 30px)"}} >
                <IgrCategoryChart
                    ref={this.onChartRef}
                    width="100%"
                    height="100%"
                    dataSource={this.data}
                    toolTipType={this.state.toolTipType}
                    yAxisMinimumValue={0}
                    xAxisInterval={1}                    
                    yAxisTitle="Billions of U.S. Dollars"
                    yAxisTitleLeftMargin={10}
                    yAxisTitleRightMargin={5}
                    yAxisLabelLeftMargin={0}
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"/>
            </div>
        </div>
        );
    }

    public onChartRef(chart: IgrCategoryChart) {
        if (!chart) { return; }

        this.chart = chart;
        if (this.legend) {
            this.chart.legend = this.legend;
        }
    }

    public onLegendRef(legend: IgrLegend) {
        if (!legend) { return; }

        this.legend = legend;
        if (this.chart) {
            this.chart.legend = this.legend;
        }
    }

    public onChartTooltipChanged = (e: any) =>{
        this.setState({toolTipType: e.target.value});
    }

    public initData() {
        const FilmFranchiseData: any = [
            { Franchise : "Marvel Universe", TotalRevenue : 22.55, HighestGrossing : 2.8 },
            { Franchise : "Star Wars",       TotalRevenue : 10.32, HighestGrossing : 2.07 },
            { Franchise : "Harry Potter",    TotalRevenue : 9.19,  HighestGrossing : 1.34 },
            { Franchise : "Avengers",        TotalRevenue : 7.76,  HighestGrossing : 2.8 },
            { Franchise : "Spider Man",      TotalRevenue : 7.22,  HighestGrossing : 1.28 },
            { Franchise : "James Bond",      TotalRevenue : 7.12,  HighestGrossing : 1.11 },
        ];
        this.data = [ FilmFranchiseData];
    }
}

// rendering above class to the React DOM
ReactDOM.render(<CategoryChartColumnChartWithTooltips />, document.getElementById('root'));
