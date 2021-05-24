import React from 'react';
import ReactDOM from 'react-dom';
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

export default class DoughnutChartSelection extends React.Component<any, any> {

    public data: any[];
    public chart: IgrDoughnutChart;
    public legend: IgrItemLegend;

    constructor(props: any) {
        super(props);

        this.data = [
            { MarketShare: 37, Category: "Cooling", Summary: "Cooling 37%", },
            { MarketShare: 25, Category: "Residential", Summary: "Residential 25%",  },
            { MarketShare: 12, Category: "Heating", Summary: "Heating 12%", },
            { MarketShare: 8, Category: "Lighting", Summary: "Lighting 8%", },
            { MarketShare: 18, Category: "Other", Summary: "Other 18%", }
        ];
        this.state = {
            data: this.data,
            selectedSliceLabel: this.data[0].Category,
            selectedSliceValue: this.data[0].MarketShare + "%"
        };

        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options vertical">
                    <span className="legend-title">Global Electricity Demand by Energy Use</span>
                    <div className="legend">
                        <IgrItemLegend ref={this.onLegendRef} />
                    </div>
                </div>

                <div className="container relative">
                    <div className="container-overlay">
                        <IgrDoughnutChart
                            ref={this.onChartRef}
                            width="100%"
                            height="100%"
                            allowSliceSelection="true"
                            innerExtent={0.6}
                            sliceClick={this.onSliceClick}>
                                <IgrRingSeries name="ring1"
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

                        <div className="overlay-center" style={{ lineHeight: 1.1 }}>
                            <label className="options-label" style={{ fontSize: "1.2rem" }}>{this.state.selectedSliceLabel}</label>
                            <label className="options-label" style={{ fontSize: "2.2rem" }}>{this.state.selectedSliceValue}</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    public onChartRef(chart: IgrDoughnutChart) {
        if (!chart) { return; }

        this.chart  = chart;
        if (this.legend) {
            this.chart.actualSeries[0].legend = this.legend;
        }

        if (this.chart.actualSeries &&
            this.chart.actualSeries.length > 0) {
            let series = this.chart.actualSeries[0] as IgrRingSeries;
            series.selectedSlices.add(0);
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
        if (e.isSelected) {
            this.setState({
                selectedSliceLabel: this.data[e.index].Category,
                selectedSliceValue: this.data[e.index].MarketShare + "%"
            });
        } else {
            this.setState({
                selectedSliceLabel: "No Selection",
                selectedSliceValue: "0%"
            });
        }
    }
}

// rendering above class to the React DOM
ReactDOM.render(<DoughnutChartSelection />, document.getElementById('root'));
