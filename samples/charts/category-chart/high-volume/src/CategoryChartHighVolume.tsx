import { IgrCategoryChart } from 'igniteui-react-charts';
import { IgrCategoryChartModule } from 'igniteui-react-charts';
import * as React from 'react';
import { CategoryChartSharedData } from './CategoryChartSharedData';

IgrCategoryChartModule.register();

export default class CategoryChartHighVolume extends React.Component<any, any> {
    public dataPoints: number = 500000;
    public dataSource: any;

    constructor(props: any) {
        super(props);

        this.dataSource = CategoryChartSharedData.generateItems(0, this.dataPoints, true);
        this.state = {
            dataInfo: CategoryChartSharedData.toShortString(this.dataPoints),
            dataPoints: this.dataPoints,
            dataSource: this.dataSource
        }
    }

    public render() {
        return (
        <div className="igContainer">
            <div className="igOptions">
                <label className="igOptions-label">Data Points: </label>
                <label className="igOptions-value">
                    {this.state.dataInfo}
                </label>
                <input className="igOptions-slider" type="range" min="10000" max="1000000" step="1000"
                    value={this.state.dataPoints}
                    onChange={this.onDataPointsChanged}/>
                <button onClick={this.onDataGenerateClick}>Generate Data</button>
            </div>

            <div className="igComponent" style={{height: "calc(100% - 30px)"}} >
                <IgrCategoryChart
                    width="100%"
                    height="100%"
                    chartType="Line"
                    dataSource={this.state.dataSource}/>
            </div>
        </div>
        );
    }

    public onDataPointsChanged = (e: any) => {
        this.dataPoints = e.target.value;
        const info = CategoryChartSharedData.toShortString(this.dataPoints);
        this.setState({ dataPoints: this.dataPoints, dataInfo: info });
    }

    public onDataGenerateClick = (e: any) => {
        if (this.dataPoints === undefined){
            this.dataPoints = 10000;
        }
        this.generateData();
    }

    public generateData() {
        this.dataSource = CategoryChartSharedData.generateItems(0, this.dataPoints, true);
        this.setState({dataSource: this.dataSource});
    }

}
