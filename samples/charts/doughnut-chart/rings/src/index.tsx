import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';


import { IgrDoughnutChartModule } from 'igniteui-react-charts';
import { IgrDoughnutChart } from 'igniteui-react-charts';
import { IgrRingSeriesModule } from 'igniteui-react-charts';
import { IgrRingSeries } from 'igniteui-react-charts';
import { IgrSliceClickEventArgs } from 'igniteui-react-charts';
import { LabelsPosition } from 'igniteui-react-charts';

IgrDoughnutChartModule.register();
IgrRingSeriesModule.register();

export default class DoughnutChartRings extends React.Component<any, any> {

    public Months: any[];
    public Seasons: any[];
    private chart: IgrDoughnutChart;

    constructor(props: any) {
        super(props);
        this.initData();

        this.onChartRef = this.onChartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="igContainer">
                <IgrDoughnutChart
                    ref={this.onChartRef}
                    height="100%"
                    width="100%"
                    allowSliceSelection="true"
                    allowSliceExplosion="false" />
            </div>
        );
    }

    public onChartRef(chart: IgrDoughnutChart) {
        if (!chart) { return; }


        this.chart = chart;

        let ringSeries1 = new IgrRingSeries({ name: "ringSeries2"});
        ringSeries1.labelMemberPath = "Label";
        ringSeries1.valueMemberPath = "Value";
        ringSeries1.labelsPosition = LabelsPosition.Center;
        ringSeries1.othersCategoryThreshold = 0;
        ringSeries1.radiusFactor = 0.9;
        ringSeries1.outlines = ["white"];
        ringSeries1.dataSource = this.Seasons; // with 4 items
        ringSeries1.brushes = ["#3cbdc9", "#9fb328", "#f96232", "#8a58d6"];

        let ringSeries2 = new IgrRingSeries({ name: "ringSeries2"});
        ringSeries2.labelMemberPath = "Label";
        ringSeries2.valueMemberPath = "Value";
        ringSeries2.labelsPosition = LabelsPosition.Center;
        ringSeries2.othersCategoryThreshold = 0;
        ringSeries2.radiusFactor = 0.9;
        ringSeries2.outlines = ["white"];
        ringSeries2.dataSource = this.Months; // with 12 items
        ringSeries2.brushes = [
            "#3cbdc9", "#3cbdc9", "#3cbdc9",  // same colors for 3 months of winter
            "#9fb328", "#9fb328", "#9fb328",  // same colors for 3 months of spring
            "#f96232", "#f96232", "#f96232",  // same colors for 3 months of summer
            "#8a58d6", "#8a58d6", "#8a58d6"]; // same colors for 3 months of fall

        this.chart.series.add(ringSeries1);
        this.chart.series.add(ringSeries2);
        this.chart.allowSliceSelection = true;
    }

    public initData() {

        this.Months = [
            { Value: 1, Label: "December" },
            { Value: 1, Label: "January" },
            { Value: 1, Label: "February" },
            { Value: 1, Label: "March" },
            { Value: 1, Label: "April" },
            { Value: 1, Label: "May" },
            { Value: 1, Label: "June" },
            { Value: 1, Label: "July" },
            { Value: 1, Label: "August" },
            { Value: 1, Label: "September" },
            { Value: 1, Label: "October" },
            { Value: 1, Label: "November" },
        ];
        this.Seasons = [
            { Value: 4, Label: "Winter" },
            { Value: 4, Label: "Spring" },
            { Value: 4, Label: "Summer" },
            { Value: 4, Label: "Fall" },
        ];
    }
}

// rendering above class to the React DOM
ReactDOM.render(<DoughnutChartRings />, document.getElementById('root'));