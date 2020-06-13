import { IgrCategoryChart } from 'igniteui-react-charts';
import { IgrCategoryChartModule } from 'igniteui-react-charts';
import * as React from 'react';

IgrCategoryChartModule.register();

export default class CategoryChartAxisTypes extends React.Component<any, any> {
    public data: any[];

    constructor(props: any) {
        super(props);
        this.initData();
    }

    public render(): JSX.Element {
        return (
        <div className="igContainer" >
            <div className="igComponent">
                <IgrCategoryChart
                    width="100%"
                    height="100%"
                    chartType="Line"
                    markerTypes="Circle"
                    chartTitle="Olympic Medals By Country"
                    dataSource={this.data}
                    thickness={3}

                    xAxisLabelTextStyle="9pt Verdana"
                    xAxisLabelTopMargin={5}
                    xAxisLabelTextColor="gray"
                    yAxisLabelLocation="OutsideRight"
                    yAxisLabelTextStyle="9pt Verdana"
                    yAxisLabelRightMargin={0}
                    yAxisLabelTextColor="gray"

                    xAxisTitle="Olympic Games"
                    xAxisTitleTextColor="gray"
                    xAxisTitleTextStyle="10pt Verdana"
                    xAxisTitleAngle={0}
                    yAxisTitle="Total Medals"
                    yAxisTitleTextStyle="10pt Verdana"
                    yAxisTitleTextColor="gray"
                    yAxisTitleAngle={90}
                    yAxisTitleLeftMargin={5}

                    xAxisTickLength={10}
                    xAxisTickStrokeThickness={0.5}
                    xAxisTickStroke="black"
                    yAxisTickLength={10}
                    yAxisTickStrokeThickness={0.5}
                    yAxisTickStroke="black"

                    yAxisMinimumValue={50}
                    yAxisMaximumValue={150}

                    xAxisInterval={1}
                    xAxisMajorStroke="gray"
                    xAxisMajorStrokeThickness={0.5}

                    yAxisInterval={25}
                    yAxisMajorStroke="black"
                    yAxisMajorStrokeThickness={1}
                    yAxisMinorInterval={5}
                    yAxisMinorStroke="gray"
                    yAxisMinorStrokeThickness={0.5}

                    xAxisGap={0.125}
                    xAxisOverlap={0}/>
            </div>
        </div>
        );
    }

    public initData() {
        const usaMedals: any = [
            { Year: "1996", UnitedStates: 148 },
            { Year: "2000", UnitedStates: 142 },
            { Year: "2004", UnitedStates: 134 },
            { Year: "2008", UnitedStates: 131 },
            { Year: "2012", UnitedStates: 135 },
            { Year: "2016", UnitedStates: 146 },
        ];
        const chinaMedals: any = [
            { Year: "1996", China: 110 },
            { Year: "2000", China: 115 },
            { Year: "2004", China: 121 },
            { Year: "2008", China: 129 },
            { Year: "2012", China: 115 },
            { Year: "2016", China: 112 },
        ];
        const russiaMedals: any = [
            { Year: "1996", Russia: 95 },
            { Year: "2000", Russia: 91 },
            { Year: "2004", Russia: 86 },
            { Year: "2008", Russia: 65 },
            { Year: "2012", Russia: 77 },
            { Year: "2016", Russia: 88 },
        ];
        this.data = [ usaMedals, chinaMedals, russiaMedals ];
    }
}
