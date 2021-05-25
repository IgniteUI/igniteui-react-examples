import { IgrSparkline } from 'igniteui-react-charts';
import { IgrSparklineModule } from 'igniteui-react-charts';
import { IgrSparklineCoreModule } from 'igniteui-react-charts';
import * as React from 'react';

IgrSparklineCoreModule.register();
IgrSparklineModule.register();

export default class SparklineDisplayLines extends React.Component {
    public data: any[];

    constructor(props: any) {
        super(props);
        this.data = this.generateData();
    }

    public render(): JSX.Element {
        return (
            <div className="igContainer">
                <label className="igOptions-label">Revenue Sparkline</label>
                <div className="igComponent">
                    <IgrSparkline height="100%" width="100%" displayType="Line"
                        dataSource={this.data} minimum={-1} maximum={1}
                        valueMemberPath="Value" labelMemberPath="Angle"/>
                </div>
                <label className="igOptions-label">Income Sparkline</label>
                <div className="igComponent">
                    <IgrSparkline height="100%" width="100%" displayType="Line"
                        dataSource={this.data} minimum={-1} maximum={1}
                        valueMemberPath="Income" labelMemberPath="Angle"/>
                </div>
                <label className="igOptions-label">Expanse Sparkline</label>
                <div className="igComponent">
                    <IgrSparkline height="100%" width="100%" displayType="Line"
                        dataSource={this.data} minimum={-1} maximum={1}
                        valueMemberPath="Expanse" labelMemberPath="Angle"/>
                </div>
            </div >
        );
    }

    public generateData()
    {
        const data: any[] = [];
        let index = 0;
        let min = 1000.0;
        let max = -1000.0;

        for (let angle = 0; angle < 360 * 4; angle += 5)
        {
            let v1 = Math.sin(angle * Math.PI / 180);
            let v2 = Math.sin(3 * angle * Math.PI / 180) / 3;
            let revenue = v1 + v2;
            let expanse = revenue < 0 ? revenue : 0;
            let income = revenue > 0 ? revenue : 0;

            data.push({
                "Index": index++,
                "Angle": angle,
                // Value = v1 + v2
                "Value": revenue,
                "Expanse": expanse,
                "Income": income
            });

            min = Math.min(min, v1 + v2);
            max = Math.max(max, v1 + v2);
        }

        return data;
    }
}
