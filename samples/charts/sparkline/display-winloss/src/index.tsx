import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { IgrSparkline } from 'igniteui-react-charts';
import { IgrSparklineModule } from 'igniteui-react-charts';
import { IgrSparklineCoreModule } from 'igniteui-react-charts';


IgrSparklineCoreModule.register();
IgrSparklineModule.register();

export default class SparklineDisplayWinLoss extends React.Component {
    public data1: any[];
    public data2: any[];

    public sparkline: IgrSparkline;

    constructor(props: any) {
        super(props);
        this.data1 = this.createData2(720 * 1);
        this.data2 = this.createData2(720 * 2);
    }

    public render(): JSX.Element {
        return (
            <div className="igContainer">
                <div className="igComponent">
                    <IgrSparkline height="100%" width="100%" displayType="WinLoss"
                        dataSource={this.data1}
                        valueMemberPath="Value1"/>
                </div>
                <div className="igComponent">
                    <IgrSparkline height="100%" width="100%" displayType="WinLoss"
                        dataSource={this.data1}
                        valueMemberPath="Value2" />
                </div>
                <div className="igComponent">
                    <IgrSparkline height="100%" width="100%" displayType="WinLoss"
                        dataSource={this.data2}
                        valueMemberPath="Value1"/>
                </div>
            </div >
        );
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
            const r1 = Math.random() - 0.1;
            const r2 = Math.random() - 0.2;
            const v1 = Math.sin(angle * r1 * Math.PI / 180);
            const v2 = Math.cos(angle * r2 * Math.PI / 180);
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
ReactDOM.render(<SparklineDisplayWinLoss />, document.getElementById('root'));