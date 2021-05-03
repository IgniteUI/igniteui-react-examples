import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { IgrItemLegend } from 'igniteui-react-charts';
import { IgrItemLegendModule } from 'igniteui-react-charts';
import { IgrPieChart } from 'igniteui-react-charts';
import { IgrPieChartModule } from 'igniteui-react-charts';


IgrPieChartModule.register();
IgrItemLegendModule.register();

export default class PieChartOthers extends React.Component<any, any> {

    public data: any[];
    public chart: IgrPieChart;
    public legend: IgrItemLegend;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);

        this.state = { data: [
                { MarketShare: 37, Company: "Space Cooling", Summary:"Space Cooling 37%", },
                { MarketShare: 25, Company: "Residential Appliance", Summary:"Residential Appliance 25%",  },
                { MarketShare: 12, Company: "Heating", Summary:"Heating 12%", },
                { MarketShare: 8, Company: "Lighting", Summary:"Lighting 8%", },
                { MarketShare: 18, Company: "Other Services", Summary:"Other Services 18%", },
        ] };
    }

    public onChartRef(chart: IgrPieChart) {
        if (!chart) { return; }

        this.chart = chart;
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

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <label className="legend-title">Global Electricity Demand by Energy Use</label>
                <div className="options vertical">
                    <IgrItemLegend ref={this.onLegendRef}  />
                </div>

                <div className="container">
                <IgrPieChart dataSource={this.state.data}
                            ref={this.onChartRef}
                            labelMemberPath="Summary"
                            labelsPosition="OutsideEnd"
                            labelExtent="30"
                            valueMemberPath="MarketShare"
                            width="100%"
                            height="100%"
                            othersCategoryThreshold="10"
                            othersCategoryType="Number"
                            othersCategoryText="Others"
                            radiusFactor={0.7}
                            legendLabelMemberPath="Summary"
                            startAngle={-60}
                            />
                </div>
            </div>
        );
    }

}

// rendering above class to the React DOM
ReactDOM.render(<PieChartOthers />, document.getElementById('root'));