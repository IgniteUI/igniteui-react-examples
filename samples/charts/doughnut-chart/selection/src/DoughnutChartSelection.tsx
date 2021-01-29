import * as React from 'react';
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
                { MarketShare: 37, Company: "Space Cooling", Summary:"Space Cooling 37%", },
                { MarketShare: 25, Company: "Residential Appliance", Summary:"Residential Appliance 25%",  },
                { MarketShare: 12, Company: "Heating", Summary:"Heating 12%", },
                { MarketShare: 8, Company: "Lighting", Summary:"Lighting 8%", },                
                { MarketShare: 18, Company: "Other Services", Summary:"Other Services 18%", },                
         ];
        this.state = { data: this.data };

        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);
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
                     height="calc(100% - 45px)"
                     allowSliceSelection="true">
                        <IgrRingSeries name="ring1"
                            dataSource={this.state.data}
                            labelMemberPath="Summary"
                            valueMemberPath="MarketShare"
                            selectedSliceFill="rgb(143,143,143)"
                            selectedSliceOpacity = "1.0"
                            selectedSliceStrokeThickness= "2"
                            labelsPosition="OutsideEnd"
                            labelExtent="30"
                            radiusFactor={0.7}
                            startAngle="-60"
                            legendLabelMemberPath="Company"/>
                </IgrDoughnutChart>
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
    }

    public onLegendRef(legend: IgrItemLegend) {
        if (!legend) { return; }

        this.legend = legend;
        if (this.chart) {
            this.chart.actualSeries[0].legend = this.legend;
        }
    }

    // public onSliceClick = (s: IgrDoughnutChart, e: IgrSliceClickEventArgs) => {

    //     // console.log("onSliceClick")
    //     let selectedSlices: string = "";

    //     if (e.i.isOthersSlice) {
    //         selectedSlices = "Other";
    //     } else if (e.i.isSelected &&
    //         e.i.dataContext !== undefined &&
    //         e.i.dataContext.Company !== undefined) {
    //         selectedSlices = e.dataContext.Company
    //     }

    //     // const series = this.chart.actualSeries;
    //     // if (series && series.length > 0) {
    //     //     const ringSeries = series[0] as IgrRingSeries;
    //     //     for (const i of ringSeries.selectedSlices.toArray()) {
    //     //         if (this.data[i] !== undefined) {
    //     //             selectedSlices += this.data[i].Company + " ";
    //     //         }
    //     //     }
    //     // }
    //     this.setState( {selectedLabel: selectedSlices } );
    // }

}
