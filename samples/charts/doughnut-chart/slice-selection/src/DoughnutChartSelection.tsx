import * as React from "react";



import { IgrDoughnutChartModule } from 'igniteui-react-charts';
import { IgrDoughnutChart } from 'igniteui-react-charts';
import { IgrRingSeriesModule } from 'igniteui-react-charts';
import { IgrRingSeries } from 'igniteui-react-charts';
import { IgrSliceClickEventArgs } from 'igniteui-react-charts';

IgrDoughnutChartModule.register();
IgrRingSeriesModule.register();

export default class DoughnutChartSelection extends React.Component<any, any> {

    public data: any[];
    public chart: IgrDoughnutChart;

    constructor(props: any) {
        super(props);

        this.initData();
        this.onPieRef = this.onPieRef.bind(this);
        this.onSliceClick = this.onSliceClick.bind(this);
    }

    public render() {
        return (
            <div style={{height: "100%", width: "100%" }}>
                <label >
                   Selected Slice: {this.state.selectedLabel}
                </label>

                <IgrDoughnutChart
                     ref={this.onPieRef}
                     height="calc(100% - 45px)"
                     allowSliceSelection="true"
                     sliceClick={this.onSliceClick}>
                        <IgrRingSeries name="ring1"
                            dataSource={this.state.data}
                            labelMemberPath="Company"
                            valueMemberPath="MarketShare"
                            selectedSliceStroke="white"
                            selectedSliceFill="rgb(143,143,143)"
                            selectedSliceOpacity = "1.0"
                            selectedSliceStrokeThickness= "2"/>
                </IgrDoughnutChart>
            </div>
        );
    }

    public onPieRef(chart: IgrDoughnutChart) {
        this.chart  = chart;
    }

    public onSliceClick = (s: IgrDoughnutChart, e: IgrSliceClickEventArgs) => {

        console.log("onSliceClick")
        let selectedSlices: string = "";

        if (e.i.isOthersSlice) {
            selectedSlices = "Other";
        } else if (e.i.isSelected &&
            e.i.dataContext !== undefined &&
            e.i.dataContext.Company !== undefined) {
            selectedSlices = e.dataContext.Company
        }

        // const series = this.chart.actualSeries;
        // if (series && series.length > 0) {
        //     const ringSeries = series[0] as IgrRingSeries;
        //     for (const i of ringSeries.selectedSlices.toArray()) {
        //         if (this.data[i] !== undefined) {
        //             selectedSlices += this.data[i].Company + " ";
        //         }
        //     }
        // }
        this.setState( {selectedLabel: selectedSlices } );
    }

    public initData() {
        this.data = [
            { MarketShare: 30, Company: "Google",    },
            { MarketShare: 15, Company: "Microsoft", },
            { MarketShare: 30, Company: "Apple",     },
            { MarketShare: 15, Company: "Samsung",   },
            { MarketShare: 10, Company: "Other",     },
        ];
        this.state = { data: this.data };
    }
}