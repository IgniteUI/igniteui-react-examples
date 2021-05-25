import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrSparkline } from 'igniteui-react-charts';
import { IgrSparklineModule } from 'igniteui-react-charts';
import { IgrSparklineCoreModule } from 'igniteui-react-charts';

IgrSparklineCoreModule.register();
IgrSparklineModule.register();

export default class SparklineTrendlines extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.onTrendlineChanged = this.onTrendlineChanged.bind(this);

        this.state = {
            data: this.getData(),
            trendLineType: "ExponentialFit"
        };
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <label className="options-label">Trendline Type: </label>
                    <select onChange={this.onTrendlineChanged} value={this.state.trendLineType}>
                        <option>CubicFit</option>
                        <option>CumulativeAverage</option>
                        <option>ExponentialAverage</option>
                        <option>ExponentialFit</option>
                        <option>LinearFit</option>
                        <option>LogarithmicFit</option>
                        <option>ModifiedAverage</option>
                        <option>None</option>
                        <option>PowerLawFit</option>
                        <option>QuadraticFit</option>
                        <option>QuarticFit</option>
                        <option>QuinticFit</option>
                        <option>SimpleAverage</option>
                        <option>WeightedAverage</option>
                    </select>
                </div>
                <div className="container">
                    <IgrSparkline
                        height="100%"
                        width="100%"
                        dataSource={this.state.data}
                        valueMemberPath="Value"
                        displayType="Area"
                        trendLineThickness={3}
                        trendLinePeriod={5}
                        trendLineType={this.state.trendLineType}
                        trendLineBrush="Red"/>
                </div>
            </div >
        );
    }

    public onTrendlineChanged(e: any) {
        const selection = e.target.value.toString();
        this.setState({ trendLineType: selection });
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
            data.push({
                Label: index++,
                Angle: angle,
                Value: revenue
            });
            min = Math.min(min, revenue);
            max = Math.max(max, revenue);
        }
        return data;
    }
}

// rendering above class to the React DOM
ReactDOM.render(<SparklineTrendlines />, document.getElementById('root'));
