import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrSparkline } from 'igniteui-react-charts';
import { IgrSparklineModule } from 'igniteui-react-charts';
import { IgrSparklineCoreModule } from 'igniteui-react-charts';
import { SparklineSharedData } from './SparklineSharedData';

IgrSparklineCoreModule.register();
IgrSparklineModule.register();

export default class SparklineTrendlines extends React.Component<any, any> {
    public data: any[];

    public sparkline: IgrSparkline;

    constructor(props: any) {
        super(props);

        this.onSparklineRef = this.onSparklineRef.bind(this);
        this.onTrendlineChanged = this.onTrendlineChanged.bind(this);

        this.data = SparklineSharedData.getSharedData();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <label className="options-label">Trendline Type: </label>
                    <select
                    onChange={this.onTrendlineChanged}
                    defaultValue="ExponentialFit">
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
                    <IgrSparkline height="calc(100% - 30px)" width="100%"
                        ref={this.onSparklineRef}
                        dataSource={this.data}
                        valueMemberPath="Value"
                        displayType="Area"
                        trendLineThickness={3}
                        trendLinePeriod={5}
                        trendLineType="ExponentialFit"
                        trendLineBrush="Red"/>
                </div>
            </div >
        );
    }

    public onTrendlineChanged(e: any) {
        const selection = e.target.value.toString();
        this.sparkline.trendLineType = selection;
    }

    public onSparklineRef(sparkline: IgrSparkline) {
        if (sparkline) {
            this.sparkline = sparkline;
        }
    }
}

// rendering above class to the React DOM
ReactDOM.render(<SparklineTrendlines />, document.getElementById('root'));
