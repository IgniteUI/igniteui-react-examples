import { IgrCategoryChart } from 'igniteui-react-charts';
import { IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrLegend } from 'igniteui-react-charts';
import { IgrLegendModule } from 'igniteui-react-charts';
import * as React from 'react';

IgrCategoryChartModule.register();
IgrLegendModule.register();

export default class CategoryChartLineChartMultipleSources extends React.Component<any, any> {
    public data: any[];
    public chart: IgrCategoryChart;
    public legend: IgrLegend;

    constructor(props: any) {
        super(props);
        this.initData();
    }

    public render(): JSX.Element {
        return (
            <div className="igContainer">
                <div className="igOptions">
                    <span>Renewable Electricity Generated</span>
                </div>
                <div className="igComponent" style={{height: "calc(100% - 1.25rem)"}} >
                    <IgrCategoryChart                        
                        width="100%"
                        height="100%"                      
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
            { Year: "2009", Europe: 31, China: 21,  USA: 19 },
            { Year: "2010", Europe: 43, China: 26,  USA: 24 },
            { Year: "2011", Europe: 66, China: 29,  USA: 28 },
            { Year: "2012", Europe: 69, China: 32,  USA: 26 },
            { Year: "2013", Europe: 58, China: 47,  USA: 38 },
            { Year: "2014", Europe: 40, China: 46,  USA: 31 },
            { Year: "2015", Europe: 78, China: 50,  USA: 19 },
            { Year: "2016", Europe: 13, China: 90,  USA: 52 },
            { Year: "2017", Europe: 78, China: 132, USA: 50 },
            { Year: "2018", Europe: 40, China: 134, USA: 34 },
            { Year: "2019", Europe: 80, China: 96,  USA: 38 },
        ];
    }
}
