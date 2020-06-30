// data chart's elements for category series:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
import { IgrColumnSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrCategoryToolTipLayer } from 'igniteui-react-charts';
import { IgrItemToolTipLayer } from 'igniteui-react-charts';
import * as React from 'react';

IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartSeriesTooltips extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;

    public itemTooltipLayer: IgrItemToolTipLayer;
    public categoryTooltipLayer: IgrCategoryToolTipLayer;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);

        this.itemTooltipLayer = new IgrItemToolTipLayer({ name: "itemTooltipLayer" });
        this.categoryTooltipLayer = new IgrCategoryToolTipLayer({ name: "categoryTooltipLayer" });

        this.onToolTipTypeChanged = this.onToolTipTypeChanged.bind(this);

        this.state = { toolTipType: "Default" };

        this.initData();
    }

    public render(): JSX.Element {
        return (
            <div className="igContainer">
                <div className="igOptions-horizontal">
                    <span className="igOptions-label">Tooltip Type: </span>
                    <select value={this.state.toolTipType}
                        onChange={this.onToolTipTypeChanged}>
                        <option>Default</option>
                        <option>Item</option>
                        <option>Category</option>
                    </select>
                </div>
                <div className="igComponent" style={{height: "calc(100% - 35px)"}} >
                    <IgrDataChart dataSource={this.data}
                        ref={this.onChartRef}
                        width="100%"
                        height="100%"
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true} >

                        <IgrCategoryXAxis name="xAxis" label="Country" />
                        <IgrNumericYAxis name="yAxis" minimumValue={0} />

                        <IgrColumnSeries name="series1" title="Coal" xAxisName="xAxis"
                            yAxisName="yAxis" valueMemberPath="Coal"
                            showDefaultTooltip={true} />
                        <IgrColumnSeries name="series2" title="Hydro" xAxisName="xAxis"
                            yAxisName="yAxis" valueMemberPath="Hydro"
                            showDefaultTooltip={true} />
                        <IgrColumnSeries name="series3" title="Nuclear" xAxisName="xAxis"
                            yAxisName="yAxis" valueMemberPath="Nuclear"
                            showDefaultTooltip={true} />
                        <IgrColumnSeries name="series4" title="Gas" xAxisName="xAxis"
                            yAxisName="yAxis" valueMemberPath="Gas"
                            showDefaultTooltip={true} />
                        <IgrColumnSeries name="series5" title="Oil" xAxisName="xAxis"
                            yAxisName="yAxis" valueMemberPath="Oil"
                            showDefaultTooltip={true} />
                    </IgrDataChart>

                </div>
            </div>
        );
    }

    public onToolTipTypeChanged = (e: any) => {
        this.setState({ toolTipType: e.target.value });

        switch (e.target.value) {
            case "Default": {
                this.chart.series.remove(this.itemTooltipLayer);
                this.chart.series.remove(this.categoryTooltipLayer);
                break;
            }
            case "Item": {
                this.chart.series.remove(this.categoryTooltipLayer);
                this.chart.series.add(this.itemTooltipLayer);
                break;
            }
            case "Category": {
                this.chart.series.remove(this.itemTooltipLayer);
                this.chart.series.add(this.categoryTooltipLayer);
                break;
            }
        }
    }

    public initData() {
        this.data = [
            { Country: "Canada", Coal: 400, Oil: 100, Gas: 175, Nuclear: 225, Hydro: 350 },
            { Country: "China", Coal: 925, Oil: 200, Gas: 350, Nuclear: 400, Hydro: 625 },
            { Country: "Russia", Coal: 550, Oil: 200, Gas: 250, Nuclear: 475, Hydro: 425 },
            { Country: "Australia", Coal: 450, Oil: 100, Gas: 150, Nuclear: 175, Hydro: 350 },
            { Country: "United States", Coal: 800, Oil: 250, Gas: 475, Nuclear: 575, Hydro: 750 },
            { Country: "France", Coal: 375, Oil: 150, Gas: 350, Nuclear: 275, Hydro: 325 }
        ];
    }

    public onChartRef(chart: IgrDataChart) {
        if (!chart) { return; }

        this.chart = chart;
    }
}
