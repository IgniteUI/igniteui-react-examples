import * as React from 'react';
import { IgrDoughnutChartModule } from 'igniteui-react-charts';
import { IgrDoughnutChart } from 'igniteui-react-charts';
import { IgrItemLegend } from 'igniteui-react-charts';
import { IgrItemLegendModule } from 'igniteui-react-charts';
import { IgrRingSeriesModule } from 'igniteui-react-charts';
import { IgrRingSeries } from 'igniteui-react-charts';
import { IgrSliceClickEventArgs } from 'igniteui-react-charts';
import { IgrIndexCollection } from 'igniteui-react-charts';

IgrDoughnutChartModule.register();
IgrRingSeriesModule.register();
IgrItemLegendModule.register();

export default class DoughnutChartOverview extends React.Component<any, any> {

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
                { MarketShare: 37, Company: "Space Cooling", Summary:"Space Cooling 37%", },
                { MarketShare: 25, Company: "Residential Appliance", Summary:"Residential Appliance 25%",  },
                { MarketShare: 12, Company: "Heating", Summary:"Heating 12%", },
                { MarketShare: 8, Company: "Lighting", Summary:"Lighting 8%", },                
                { MarketShare: 18, Company: "Other Services", Summary:"Other Services 18%", },                
       ] };
    }

    public render(): JSX.Element {
        return (
            <div className="igContainer">
            <span className="igLegend-title">Global Electricity Demand by Energy Use</span>
                <div className="igLegend">
                    <IgrItemLegend ref={this.onLegendRef} />
                </div>
            <div className="igComponent">
                <IgrDoughnutChart
                     ref={this.onChartRef}
                     height="100%"
                     allowSliceExplosion="true"
                     sliceClick={this.onSliceClick}>
                        <IgrRingSeries
                            name="ring1"
                            dataSource={this.state.data}
                            labelMemberPath="Summary"
                            valueMemberPath="MarketShare"
                            radiusFactor={0.7}
                            labelsPosition="OutsideEnd"
                            labelExtent="30"
                            startAngle="-60"
                            legendLabelMemberPath="Company"/>
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
            this.series1.explodedSlices = new IgrIndexCollection();
            this.series1.explodedSlices.add(1);
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
