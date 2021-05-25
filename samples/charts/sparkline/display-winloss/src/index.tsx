import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrSparkline } from 'igniteui-react-charts';
import { IgrSparklineModule } from 'igniteui-react-charts';
import { IgrSparklineCoreModule } from 'igniteui-react-charts';

IgrSparklineCoreModule.register();
IgrSparklineModule.register();

export default class SparklineDisplayWinLoss extends React.Component {
    public data: any[];

    constructor(props: any) {
        super(props);
        this.data = this.getData();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container vertical">
                    <section>Revenue Sparkline</section>
                    <IgrSparkline
                        height="100%"
                        width="100%"
                        displayType="WinLoss"
                        dataSource={this.data}
                        valueMemberPath="Revenue"
                        labelMemberPath="Angle"
                        minimum={-1}
                        maximum={1} />

                    <section>Income Sparkline</section>
                    <IgrSparkline
                        height="100%"
                        width="100%"
                        displayType="WinLoss"
                        dataSource={this.data}
                        valueMemberPath="Income"
                        labelMemberPath="Angle"
                        minimum={-1}
                        maximum={1} />

                    <section>Expanse Sparkline</section>
                    <IgrSparkline
                        height="100%"
                        width="100%"
                        displayType="WinLoss"
                        dataSource={this.data}
                        valueMemberPath="Expanse"
                        labelMemberPath="Angle"
                        minimum={-1}
                        maximum={1} />
                </div>
            </div >
        );
    }

    public getData(): any[] {
        const data: any[] = [];
        let index = 0;
        let min = 1000;
        let max = -1000;

        for (let angle = 0; angle <= 360 * 4; angle += 5) {
            const v1 = Math.sin(angle * Math.PI / 180);
            const v2 = Math.sin(3 * angle * Math.PI / 180) / 3;
            let revenue = v1 + v2;
            let expanse = revenue < 0 ? revenue : 0;
            let income = revenue > 0 ? revenue : 0;
            data.push({
                Label: index++,
                Angle: angle,
                Revenue: revenue,
                Expanse: expanse,
                Income: income
            });
            min = Math.min(min, revenue);
            max = Math.max(max, revenue);
        }
        return data;
    }
}

// rendering above class to the React DOM
ReactDOM.render(<SparklineDisplayWinLoss />, document.getElementById('root'));
