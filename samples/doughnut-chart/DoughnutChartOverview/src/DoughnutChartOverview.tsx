import * as React from "react";
import "../styles.css";
import "./DoughnutChartSharedStyles.css";
import { DoughnutChartSharedComponent } from "./DoughnutChartSharedComponent";
import { IgrDoughnutChartModule } from 'igniteui-react-charts';
import { IgrDoughnutChart } from 'igniteui-react-charts';
import { IgrRingSeriesModule } from 'igniteui-react-charts';
import { IgrRingSeries } from 'igniteui-react-charts';

IgrDoughnutChartModule.register();
IgrRingSeriesModule.register();

export default class DoughnutChartOverview extends DoughnutChartSharedComponent {

    public data: any[];

    constructor(props: any) {
        super(props);

        this.state = { componentVisible: true }
        this.initData();
    }

    public render() {
        return (
            <div className="sampleContainer">
                <IgrDoughnutChart
                     height="100%">
                        <IgrRingSeries name="ring1"
                            dataSource={this.state.data}
                            labelMemberPath="Company"
                            valueMemberPath="MarketShare"/>
                </IgrDoughnutChart>
            </div>
        );
    }

    public initData() {
        this.state = {
            data: [
                { MarketShare: 30, Company: "Google",    },
                { MarketShare: 15, Company: "Microsoft", },
                { MarketShare: 30, Company: "Apple",     },
                { MarketShare: 15, Company: "Samsung",   },
                { MarketShare: 10, Company: "Other",     },
        ] };
    }
}