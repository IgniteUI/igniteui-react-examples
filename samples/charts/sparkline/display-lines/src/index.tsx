import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { IgrSparkline } from 'igniteui-react-charts';
import { IgrSparklineModule } from 'igniteui-react-charts';
import { IgrSparklineCoreModule } from 'igniteui-react-charts';


IgrSparklineCoreModule.register();
IgrSparklineModule.register();

export default class SparklineDisplayLines extends React.Component {
    public data: any[];

    constructor(props: any) {
        super(props);
        this.data = this.createData(360 * 1.5);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container">
                    <IgrSparkline height="100%" width="100%" displayType="Line"
                        dataSource={this.data} minimum={-1} maximum={1}
                        valueMemberPath="Revenue"/>
                </div>
                <label className="options-label">Revenue Sparkline</label>
                <div className="container">
                    <IgrSparkline height="100%" width="100%" displayType="Line"
                        dataSource={this.data} minimum={-1} maximum={1}
                        valueMemberPath="Income"/>
                </div>
                <label className="options-label">Income Sparkline</label>
                <div className="container">
                    <IgrSparkline height="100%" width="100%" displayType="Line"
                        dataSource={this.data} minimum={-1} maximum={1}
                        valueMemberPath="Expanse" />
                </div>
                <label className="options-label">Expanse Sparkline</label>
            </div >
        );
    }

    public createData(itemsCount: number): any[] {
        const data: any[] = [];
        let revenue = 0;
        for (let i = 0; i <= itemsCount; i += 10)
        {
            const v1 = Math.sin(i * Math.PI / 180);
            const v2 = Math.sin(3 * i * Math.PI / 180) / 3;
            revenue = v1 + v2;
            let expanse = revenue < 0 ? revenue : 0;
            let income = revenue > 0 ? revenue : 0;
            data.push({ Label: i, Income: income, Expanse: expanse, Revenue: revenue });
        }
        return data;
    }

    public createData1(itemsCount: number): any[] {
        const data: any[] = [];
        let v1 = 0;
        let v2 = 5;
        for (let i = 0; i <= itemsCount; i++) {
            v1 += (Math.random() - 0.5) * 4;
            v1 = this.clamp(v1, -10, 10);
            v2 += (Math.random() - 0.5) * 4;
            v2 = this.clamp(v2, -10, 10);
            let l = i.toString();
            data.push({ Label: l, Value1: v1, Value2: v2 });
        }
        return data;
    }

    public createData2(itemsCount: number): any[] {
        const data: any[] = [];
        let index = 0;
        for (let angle = 0; angle <= itemsCount; angle += 10)
        {
            const v1 = Math.sin(angle * Math.PI / 180);
            const v2 = Math.cos(angle * Math.PI / 180);
            data.push({
                "Index": index++,
                "Angle": angle,
                "Value1": v1,
                "Value2": v2,
            });
        }
        return data;
    }

    public clamp(v: number, min: number, max: number): number {
        if (v > max) {
            v = max;
        }
        else if (v < min) {
            v = min;
        }
        return v;
    }

}

// rendering above class to the React DOM
ReactDOM.render(<SparklineDisplayLines />, document.getElementById('root'));