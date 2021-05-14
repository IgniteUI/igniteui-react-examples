import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrSparkline } from 'igniteui-react-charts';
import { IgrSparklineModule } from 'igniteui-react-charts';
import { IgrSparklineCoreModule } from 'igniteui-react-charts';

IgrSparklineCoreModule.register();
IgrSparklineModule.register();

export default class SparklineDisplayTypes extends React.Component {
    public data: any[];

    public sparkline: IgrSparkline;

    constructor(props: any) {
        super(props);

        this.data = this.createData(360 * 1.5);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <label className="options-label">Area Sparkline</label>
                <div className="container">
                    <IgrSparkline height="100%" width="100%" displayType="Area"
                        dataSource={this.data} minimum={-1} maximum={1}
                        valueMemberPath="Value"/>
                </div>
                <label className="options-label">Line Sparkline</label>
                <div className="container">
                    <IgrSparkline height="100%" width="100%" displayType="Line"
                        dataSource={this.data} minimum={-1} maximum={1}
                        valueMemberPath="Value" />
                </div>
                <label className="options-label">Column Sparkline</label>
                <div className="container">
                    <IgrSparkline height="100%" width="100%" displayType="Column"
                        dataSource={this.data} minimum={-1} maximum={1}
                        valueMemberPath="Value"/>
                </div>
                <label className="options-label">WinLoss Sparkline</label>
                <div className="container">
                    <IgrSparkline height="100%" width="100%" displayType="WinLoss"
                        dataSource={this.data} minimum={-1} maximum={1}
                        valueMemberPath="Value" />
                </div>
            </div >
        );
    }

    public createData(itemsCount: number): any[] {
        const data: any[] = [];
        let index = 0;
        let min = 1000;
        let max =-1000
        for (let angle = 0; angle <= itemsCount; angle += 10)
        {
            const v1 = Math.sin(angle * Math.PI / 180);
            const v2 = Math.sin(3 * angle * Math.PI / 180) / 3;
            data.push({
                "Index": index++,
                "Angle": angle,
                "Value": v1 + v2
            });
            min = Math.min(min, v1+v2);
            max = Math.max(max, v1+v2);
        }

        return data;
    }

}

// rendering above class to the React DOM
ReactDOM.render(<SparklineDisplayTypes />, document.getElementById('root'));
