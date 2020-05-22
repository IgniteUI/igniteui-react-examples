import { IgrSparkline } from 'igniteui-react-charts';
import { IgrSparklineModule } from 'igniteui-react-charts';
import { IgrSparklineCoreModule } from 'igniteui-react-charts';
import { Visibility } from 'igniteui-react-core';
import * as React from 'react';
import { SparklineSharedData } from './SparklineSharedData';

IgrSparklineCoreModule.register();
IgrSparklineModule.register();

export default class SparklineNormalRange extends React.Component<any, any> {
    public sparkline : IgrSparkline;

    constructor(props: any) {
        super(props);

        this.onSparklineRef = this.onSparklineRef.bind(this);
        this.onMinSliderChanged = this.onMinSliderChanged.bind(this);
        this.onMaxSliderChanged = this.onMaxSliderChanged.bind(this);
        this.onRangeVisibilityChanged = this.onRangeVisibilityChanged.bind(this);

        this.state = {
            normalRangeMinimum: 1,
            normalRangeMaximum: 4,
            data: SparklineSharedData.getSharedData()
        }
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igOptions">
                    <label className="igOptions-item"><input defaultChecked={true} type="checkbox" onChange={this.onRangeVisibilityChanged}/>Range Visibility</label>
                    <label className="igOptions-item"><input type="range"
                    min={-2} max={7} step="0.5"
                    value={this.state.normalRangeMinimum}
                    onChange={this.onMinSliderChanged}/>Min Range {this.state.normalRangeMinimum} </label>
                    <label className="igOptions-item"><input type="range"
                    min={-2} max={7} step="0.5"
                    value={this.state.normalRangeMaximum}
                    onChange={this.onMaxSliderChanged}/>Max Range {this.state.normalRangeMaximum} </label>
                </div>
                <div className="igComponent">
                    <IgrSparkline height="calc(100% - 30px)" width="100%"
                        ref={this.onSparklineRef}
                        dataSource={this.state.data}
                        valueMemberPath="Value"
                        displayType="Area"
                        normalRangeVisibility="Visible"
                        normalRangeMinimum={1}
                        normalRangeMaximum={4}
                        normalRangeFill="rgba(255, 0, 0, 0.4)"
                        displayNormalRangeInFront="true" />
                </div>
            </div >
        );
    }

    public onRangeVisibilityChanged(e: any) {
        const selection = e.target.checked as boolean;

        if (selection) {
            this.sparkline.normalRangeVisibility = Visibility.Visible;
        }
        else {
            this.sparkline.normalRangeVisibility = Visibility.Collapsed;
        }
    }

    public onMinSliderChanged(e: any) {
        const value: number = parseFloat(e.target.value);
        this.sparkline.normalRangeMinimum = value;
        this.setState({ normalRangeMinimum: value.toFixed(1) });
    }

    public onMaxSliderChanged(e: any) {
        const value: number = parseFloat(e.target.value);
        this.sparkline.normalRangeMaximum = value;
        this.setState({ normalRangeMaximum: value.toFixed(1) });
    }

    public onSparklineRef(sparkline: IgrSparkline) {
        if (sparkline != null) {
            this.sparkline = sparkline;
        }
    }
}
