import { IgrSparkline } from 'igniteui-react-charts';
import { IgrSparklineModule } from 'igniteui-react-charts';
import { IgrSparklineCoreModule } from 'igniteui-react-charts';
import { UnknownValuePlotting } from 'igniteui-react-core';

import * as React from "react";
import "../styles.css";
import "./SparklineSharedStyles.css";
import { SparklineSharedComponent } from "./SparklineSharedComponent";
import { SharedData } from "./SparklineSharedData";

IgrSparklineCoreModule.register();
IgrSparklineModule.register();

export default class SparklineUnknownValues extends SparklineSharedComponent {
    public data: any[];

    public sparkline : IgrSparkline;

    constructor(props: any) {
        super(props);

        this.onSparklineRef = this.onSparklineRef.bind(this);
        this.onRangeVisibilityChanged = this.onRangeVisibilityChanged.bind(this);

        this.data = SharedData.getSharedDataWithNullValues();
    }

    public render() {
        return (
            <div className="sampleContainer">
                <div className="options">
                    <label className="optionItem">
                    <input defaultChecked={false}
                    type="checkbox"
                    onChange={this.onRangeVisibilityChanged}/>Plot Unknown Values</label>
                </div>
                <div className="chart">
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
