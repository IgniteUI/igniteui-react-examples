import { IgrCategoryChart } from 'igniteui-react-charts';
import { IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrLegend } from 'igniteui-react-charts';
import { IgrLegendModule } from 'igniteui-react-charts';
import * as React from 'react';

IgrCategoryChartModule.register();
IgrLegendModule.register();

export default class StepAreaMultipleSources extends React.Component<any, any> {
    public data: any[];
    public chart: IgrCategoryChart;
    public legend: IgrLegend;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);
        this.initData();
    }

    public render(): JSX.Element {
        return (
            <div className="igContainer">
                <span className="igLegend-title" >Renewable Electricity Generated: </span>
                <div className="igLegend">
                    <IgrLegend ref={this.onLegendRef} orientation="Horizontal" />
                </div>
                <div className="igComponent" style={{height: "calc(100% - 1.25rem)"}} >
                    <IgrCategoryChart
                        ref={this.onChartRef}
                        width="100%"
                        height="100%"
                        dataSource={this.data}
                        chartType="StepArea"
                        yAxisMinimumValue={0}
                        yAxisTitle="TWh"
                        isCategoryHighlightingEnabled={true}
                        isSeriesHighlightingEnabled={true}
                        toolTipType="Category"
                        isTransitionInEnabled={true}/>
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

    public initData() {
        const USA: any = [
            { Year: "2009", USA: 19 },
            { Year: "2010", USA: 24 },
            { Year: "2011", USA: 28 },
            { Year: "2012", USA: 26 },
            { Year: "2013", USA: 38 },
            { Year: "2014", USA: 31 },
            { Year: "2015", USA: 19 },
            { Year: "2016", USA: 52 },
            { Year: "2017", USA: 50 },
            { Year: "2018", USA: 34 },
            { Year: "2019", USA: 38 }            
        ];
        const China: any = [
            { Year: "2009", China: 21 },
            { Year: "2010", China: 26 },
            { Year: "2011", China: 29 },
            { Year: "2012", China: 32 },
            { Year: "2013", China: 47 },
            { Year: "2014", China: 46 },
            { Year: "2015", China: 50 },
            { Year: "2016", China: 90 },
            { Year: "2017", China: 132 },
            { Year: "2018", China: 134 },
            { Year: "2019", China: 96 },
        ];
        const Europe: any = [
            { Year: "2009", Europe: 31 },
            { Year: "2010", Europe: 43 },
            { Year: "2011", Europe: 66 },
            { Year: "2012", Europe: 69 },
            { Year: "2013", Europe: 58 },
            { Year: "2014", Europe: 40 },
            { Year: "2015", Europe: 78 },
            { Year: "2016", Europe: 13 },
            { Year: "2017", Europe: 78 },
            { Year: "2018", Europe: 40 },
            { Year: "2019", Europe: 80 },
        ];
        this.data = [ Europe, China, USA ];
    }

}
