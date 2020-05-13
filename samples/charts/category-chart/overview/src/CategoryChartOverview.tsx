import { IgrCategoryChart } from 'igniteui-react-charts';
import { IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrLegend } from 'igniteui-react-charts';
import { IgrLegendModule } from 'igniteui-react-charts';
import * as React from 'react';




IgrCategoryChartModule.register();
IgrLegendModule.register();

export default class CategoryChartOverview extends React.Component<any, any> {
    public data: any[];
    public chart: IgrCategoryChart;
    public legend: IgrLegend;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);

        this.state = { chartType: "Column" }
        this.initData();
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igOptions">
                    <span className="igOptions-label">Chart Type: </span>
                    <select value={this.state.chartType}
                        onChange={this.onChartTypeChanged}>
                        <option>Auto</option>
                        <option>Area</option>
                        <option>Column</option>
                        <option>Point</option>
                        <option>Line</option>
                        <option>Spline</option>
                        <option>SplineArea</option>
                        <option>StepArea</option>
                        <option>StepLine</option>
                        <option>Waterfall</option>
                    </select>
                </div>
                <div className="igComponent" style={{height: "calc(100% - 1.25rem)"}} >
                    <IgrCategoryChart
                        ref={this.onChartRef}
                        width="100%"
                        height="100%"
                        chartTitle="Olympic Medals By Country"
                        isSeriesHighlightingEnabled={true}
                        dataSource={this.data}
                        chartType={this.state.chartType}
                        yAxisMinimumValue={0}/>
                </div>
            </div>
        );
    }

    public onChartRef(chart: IgrCategoryChart) {
        this.chart = chart;
        if (this.legend) {
            this.chart.legend = this.legend;
        }
    }

    public onLegendRef(legend: IgrLegend) {
        this.legend = legend;
        if (this.chart) {
            this.chart.legend = this.legend;
        }
    }

    public onChartTypeChanged = (e: any) =>{
        const chartMode = e.target.value.toString();
        this.setState({chartType: chartMode});
    }

    public initData() {
        const usaMedals: any = [
            { Year: "1996", UnitedStates: 148 },
            { Year: "2000", UnitedStates: 142 },
            { Year: "2004", UnitedStates: 134 },
            { Year: "2008", UnitedStates: 131 },
            { Year: "2012", UnitedStates: 135 },
            { Year: "2016", UnitedStates: 146 }
        ];
        const chinaMedals: any = [
            { Year: "1996", China: 110 },
            { Year: "2000", China: 115 },
            { Year: "2004", China: 121 },
            { Year: "2008", China: 129 },
            { Year: "2012", China: 115 },
            { Year: "2016", China: 112 }
        ];
        const russiaMedals: any = [
            { Year: "1996", Russia: 95 },
            { Year: "2000", Russia: 91 },
            { Year: "2004", Russia: 86 },
            { Year: "2008", Russia: 65 },
            { Year: "2012", Russia: 77 },
            { Year: "2016", Russia: 88 }
        ];
        this.data = [ usaMedals, chinaMedals, russiaMedals ];
    }

}
