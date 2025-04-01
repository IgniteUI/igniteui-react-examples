import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrDataChartCoreModule, IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrWaterfallSeries } from 'igniteui-react-charts';
import { CompanyIncomeDataItem, CompanyIncomeData } from './CompanyIncomeData';

const mods: any[] = [
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private xAxis: IgrCategoryXAxis
    private yAxis: IgrNumericYAxis
    private waterfallSeries1: IgrWaterfallSeries
    private waterfallSeries2: IgrWaterfallSeries

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Facebook Consolidated Statements of Income
            </div>

            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}
                    isHorizontalZoomEnabled={false}
                    isVerticalZoomEnabled={false}>
                    <IgrCategoryXAxis
                        name="xAxis"
                        label="category"
                        interval={1}
                        dataSource={this.companyIncomeData}
                        overlap={1}>
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        title="Millions of Dollars"
                        titleAngle={90}
                        titleLeftMargin={10}
                        minimumValue={0}
                        maximumValue={60}>
                    </IgrNumericYAxis>
                    <IgrWaterfallSeries
                        name="WaterfallSeries1"
                        title="Value"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.companyIncomeData}
                        valueMemberPath="costs"
                        showDefaultTooltip={true}
                        isTransitionInEnabled={true}>
                    </IgrWaterfallSeries>
                    <IgrWaterfallSeries
                        name="WaterfallSeries2"
                        title="Value"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.companyIncomeData}
                        brush="rgba(116, 70, 185, 1)"
                        outline="rgba(116, 70, 185, 1)"
                        valueMemberPath="netIncome"
                        showDefaultTooltip={true}
                        isTransitionInEnabled={true}>
                    </IgrWaterfallSeries>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _companyIncomeData: CompanyIncomeData = null;
    public get companyIncomeData(): CompanyIncomeData {
        if (this._companyIncomeData == null)
        {
            this._companyIncomeData = new CompanyIncomeData();
        }
        return this._companyIncomeData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);