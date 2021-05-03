import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { IgrCategoryChart } from 'igniteui-react-charts';
import { IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrLegend } from 'igniteui-react-charts';
import { IgrLegendModule } from 'igniteui-react-charts';


IgrCategoryChartModule.register();
IgrLegendModule.register();

export default class CategoryChartLineChartSingleSource extends React.Component<any, any> {
    public data: any[];
    public chart: IgrCategoryChart;
    public legend: IgrLegend;

    constructor(props: any) {
        super(props);
        this.initData();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <label>Renewable Electricity Generated</label>
                </div>
                <div className="container" style={{height: "calc(100% - 1.25rem)"}} >
                    <IgrCategoryChart
                        width="100%"
                        height="100%"
                        isHorizontalZoomEnabled={false}
                        isVerticalZoomEnabled={false}
                        dataSource={this.data}
                        chartType="line"
                        yAxisTitle="TWh"
                        yAxisTitleLeftMargin={5}/>
                </div>
            </div>
        );
    }

    public initData() {
        this.data = [
            { Year: "2009", Europe: 31 },
            { Year: "2010", Europe: 43 },
            { Year: "2011", Europe: 66 },
            { Year: "2012", Europe: 69 },
            { Year: "2013", Europe: 58 },
            { Year: "2014", Europe: 40 },
            { Year: "2015", Europe: 78 },
            { Year: "2016", Europe: 13 },
            { Year: "2017", Europe: 78 },
            { Year: "2018", Europe: 40 },
            { Year: "2019", Europe: 80 }
        ];
    }
}

// rendering above class to the React DOM
ReactDOM.render(<CategoryChartLineChartSingleSource />, document.getElementById('root'));