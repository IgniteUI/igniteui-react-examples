import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDoughnutChartModule } from 'igniteui-react-charts';
import { IgrDoughnutChart } from 'igniteui-react-charts';
import { IgrItemLegend } from 'igniteui-react-charts';
import { IgrItemLegendModule } from 'igniteui-react-charts';
import { IgrRingSeriesModule } from 'igniteui-react-charts';
import { IgrRingSeries } from 'igniteui-react-charts';
import { IgrSliceClickEventArgs } from 'igniteui-react-charts';

IgrDoughnutChartModule.register();
IgrRingSeriesModule.register();
IgrItemLegendModule.register();

export default class DoughnutChartExplosion extends React.Component<any, any> {

    public data: any[];
    public chart: IgrDoughnutChart;
    public series1: IgrRingSeries;
    public legend: IgrItemLegend;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);

        this.state = {
            data: [
                { MarketShare: 37, Category: "Cooling", Summary: "Cooling 37%", },
                { MarketShare: 25, Category: "Residential", Summary: "Residential 25%",  },
                { MarketShare: 12, Category: "Heating", Summary: "Heating 12%", },
                { MarketShare: 8, Category: "Lighting", Summary: "Lighting 8%", },
                { MarketShare: 18, Category: "Other", Summary: "Other 18%", },
        ]};
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options vertical">
                    <span className="legend-title">Global Electricity Demand by Energy Use</span>
                    <div className="legend">
                        <IgrItemLegend ref={this.onLegendRef} orientation="Horizontal"/>
                    </div>
                </div>
                
                <div className="container">
                    <IgrDoughnutChart
                        ref={this.onChartRef}
                        width="100%"
                        height="100%"
                        allowSliceExplosion="true"
                        sliceClick={this.onSliceClick}>
                            <IgrRingSeries
                                name="ring1"
                                dataSource={this.state.data}
                                labelMemberPath="Summary"
                                labelsPosition="OutsideEnd"
                                labelExtent={30}
                                valueMemberPath="MarketShare"
                                legendLabelMemberPath="Category"
                                radiusFactor={0.7}
                                startAngle={30}
                                />
                    </IgrDoughnutChart>
                </div>
            </div>
        );
    }

    public onChartRef(chart: IgrDoughnutChart) {
        if (!chart) { return; }

        this.chart = chart;
        if (this.legend) {
            this.chart.actualSeries[0].legend = this.legend;
        }

        if (this.chart.actualSeries &&
            this.chart.actualSeries.length > 0) {
            this.series1 = this.chart.actualSeries[0] as IgrRingSeries;
            this.series1.explodedSlices.add(3);
            this.series1.explodedSlices.add(4);
        }
    }

    public onLegendRef(legend: IgrItemLegend) {
        if (!legend) { return; }

        this.legend = legend;
        if (this.chart) {
            this.chart.actualSeries[0].legend = this.legend;
        }
    }

    public onSliceClick = (s: IgrDoughnutChart, e: IgrSliceClickEventArgs) => {
        e.isExploded = !e.isExploded;
        e.isSelected = false;
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DoughnutChartExplosion/>);
