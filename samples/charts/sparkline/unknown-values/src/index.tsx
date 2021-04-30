import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { IgrSparkline } from 'igniteui-react-charts';
import { IgrSparklineModule } from 'igniteui-react-charts';
import { IgrSparklineCoreModule } from 'igniteui-react-charts';
import { UnknownValuePlotting } from 'igniteui-react-core';

import { SparklineSharedData } from './SparklineSharedData';

IgrSparklineCoreModule.register();
IgrSparklineModule.register();

export default class SparklineUnknownValues extends React.Component<any, any> {
    public data: any[];

    public sparkline: IgrSparkline;

    constructor(props: any) {
        super(props);

        this.onSparklineRef = this.onSparklineRef.bind(this);
        this.onRangeVisibilityChanged = this.onRangeVisibilityChanged.bind(this);

        this.data = SparklineSharedData.getSharedDataWithNullValues();
    }

    public render(): JSX.Element {
        return (
            <div className="igContainer">
                <div className="igOptions">
                    <label className="igOptions-item">
                    <input defaultChecked={false}
                    type="checkbox"
                    onChange={this.onRangeVisibilityChanged}/>Plot Unknown Values</label>
                </div>
                <div className="igComponent">
                    <IgrSparkline height="100%" width="100%"
                        ref={this.onSparklineRef}
                        dataSource={this.data}
                        valueMemberPath="Value"
                        displayType="Area"
                        unknownValuePlotting="LinearInterpolate"/>
                </div>
            </div >
        );
    }

    public onRangeVisibilityChanged(e: any) {
        const selection = e.target.checked as boolean;

        if (selection) {
            this.sparkline.unknownValuePlotting = UnknownValuePlotting.LinearInterpolate;
        }
        else {
            this.sparkline.unknownValuePlotting = UnknownValuePlotting.DontPlot;
        }
    }

    public onSparklineRef(sparkline: IgrSparkline) {
        if (sparkline != null) {
            this.sparkline = sparkline;
        }
    }
}

// rendering above class to the React DOM
ReactDOM.render(<SparklineUnknownValues />, document.getElementById('root'));