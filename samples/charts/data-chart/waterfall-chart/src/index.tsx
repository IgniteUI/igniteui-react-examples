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
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    ref={this.chartRef}>
                    <IgrCategoryXAxis
                        interval="1"
                        dataSource={this.companyIncomeData}
                        overlap="1"
                        label="category"
                        name="xAxis">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        minimumValue="0"
                        maximumValue="60"
                        title="Millions of Dollars"
                        titleAngle="90"
                        titleLeftMargin="10"
                        name="yAxis">
                    </IgrNumericYAxis>
                    <IgrWaterfallSeries
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        valueMemberPath="costs"
                        isTransitionInEnabled="true"
                        dataSource={this.companyIncomeData}
                        showDefaultTooltip="true"
                        title="Value"
                        name="WaterfallSeries1">
                    </IgrWaterfallSeries>
                    <IgrWaterfallSeries
                        title="Value"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.companyIncomeData}
                        valueMemberPath="netIncome"
                        showDefaultTooltip="true"
                        isTransitionInEnabled="true"
                        brush="rgba(116, 70, 185, 1)"
                        outline="rgba(116, 70, 185, 1)"
                        name="WaterfallSeries2">
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
