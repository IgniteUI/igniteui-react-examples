import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { IgrItemLegend } from 'igniteui-react-charts';
import { IgrItemLegendModule } from 'igniteui-react-charts';
import { IgrPieChart } from 'igniteui-react-charts';
import { IgrPieChartModule } from 'igniteui-react-charts';
import { IgrPieChartBase } from 'igniteui-react-charts';
import { IIgrPieChartBaseProps } from 'igniteui-react-charts';
import { IgrSliceClickEventArgs } from 'igniteui-react-charts';


IgrPieChartModule.register();
IgrItemLegendModule.register();

export default class PieChartSelection extends React.Component<any, any> {

    public data: any[];
    public chart: IgrPieChart;
    public legend: IgrItemLegend;

    constructor(props: any) {
        super(props);

        this.state = { data: [
                { MarketShare: 37, Company: "Space Cooling", Summary:"Space Cooling 37%", },
                { MarketShare: 25, Company: "Residential Appliance", Summary:"Residential Appliance 25%",  },
                { MarketShare: 12, Company: "Heating", Summary:"Heating 12%", },
                { MarketShare: 8, Company: "Lighting", Summary:"Lighting 8%", },                
                { MarketShare: 18, Company: "Other Services", Summary:"Other Services 18%", },
        ] };

        this.onPieRef = this.onPieRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);

    }

    public render(): JSX.Element {
        return (
            <div className="igContainer">
                <span className="igLegend-title">Global Electricity Demand by Energy Use</span>
                <div className="igLegend">
                    <IgrItemLegend ref={this.onLegendRef}  />
                </div>

                <div className="igComponent">
                <IgrPieChart dataSource={this.state.data}
                            ref={this.onPieRef}
                            labelMemberPath="Summary"
                            valueMemberPath="MarketShare"
                            width="100%"
                            height="calc(100% - 45px)"
                            selectionMode="multiple"
                            selectedSliceStroke="white"
                            selectedSliceFill="rgb(143,143,143)"
                            selectedSliceOpacity = "1.0"
                            selectedSliceStrokeThickness= "2"
                            labelsPosition="OutsideEnd"
                            labelExtent="30"
                            legendLabelMemberPath="Summary"
                            radiusFactor={0.7}
                            selectedItem="1"
                            startAngle={-60}                                 
                            />
                </div>
            </div>
        );
    }

    public onPieRef(chart: IgrPieChart) {
        if (!chart) { return; }

        this.chart  = chart;
        if (this.legend) {
            this.chart.legend = this.legend;
        }
    }

    public onLegendRef(legend: IgrItemLegend) {
        if (!legend) { return; }

        this.legend = legend;
        if (this.chart) {
            this.chart.legend = this.legend;
        }
    }   

}

// rendering above class to the React DOM
ReactDOM.render(<PieChartSelection />, document.getElementById('root'));