import * as React from 'react';
import { IgrDoughnutChartModule } from 'igniteui-react-charts';
import { IgrDoughnutChart } from 'igniteui-react-charts';
import { IgrItemLegend } from 'igniteui-react-charts';
import { IgrItemLegendModule } from 'igniteui-react-charts';
import { IgrRingSeriesModule } from 'igniteui-react-charts';
import { IgrRingSeries } from 'igniteui-react-charts';

IgrDoughnutChartModule.register();
IgrRingSeriesModule.register();
IgrItemLegendModule.register();

export default class DoughnutChartLegend extends React.Component<any, any> {

    public data: any[];
    public chart: IgrDoughnutChart;
    public legend: IgrItemLegend;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);

        this.state = {
            data: [
                { MarketShare: 30, Company: "Google",    },
                { MarketShare: 30, Company: "Apple",     },
                { MarketShare: 15, Company: "Microsoft", },
                { MarketShare: 15, Company: "Samsung",   },
                { MarketShare: 10, Company: "Other",     },
        ] };
    }

    public onChartRef(chart: IgrDoughnutChart) {
        if (!chart) { return; }

        this.chart = chart;
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

    public render(): JSX.Element {
        return (
            <div className="igContainer">
                <div className="igLegend">
                    <IgrItemLegend ref={this.onLegendRef} />
                </div>
                <div className="igComponent">
                    <IgrDoughnutChart ref={this.onChartRef}
                                     width="100%"
                                     height="100%">
                            <IgrRingSeries name="ring1"
                                dataSource={this.state.data}
                                labelMemberPath="Company"
                                valueMemberPath="MarketShare"/>
                    </IgrDoughnutChart>
                </div>
            </div>
        );
    }

}
