import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Data } from './SampleData';
import { IgrLegendModule, IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrCategoryChart } from 'igniteui-react-charts';

const mods: any[] = [
    IgrLegendModule,
    IgrCategoryChartModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    
    private chart: IgrCategoryChart
    private chartRef(r: IgrCategoryChart) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.state = {
            xAxisGapValue: 1,
            xAxisMaximumGap: 1.5
        }

        this.onXAxisGapChange = this.onXAxisGapChange.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
            <div className="options horizontal">
            <label className="option-label">X-Axis Gap: </label>
                    <label className="options-value">{this.state.xAxisGapValue}</label>
                    <input className="options-slider" type="range" min={0.5} max={this.state.xAxisMaximumGap} step={0.05} value={this.state.xAxisGapValue}
                           onChange={this.onXAxisGapChange}/>
            </div>
            <div className="legend-title">
                Renewable Electricity Generated
            </div>
            
            <div className="container fill">
                <IgrCategoryChart
                    chartType="Column"
                    xAxisInterval="1"
                    xAxisGap={this.state.xAxisGapValue}
                    xAxisMaximumGap={this.state.xAxisMaximumGap}
                    yAxisTitle="TWh"
                    dataSource={this.data}
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    ref={this.chartRef}>
                </IgrCategoryChart>
            </div>
        </div>
        );
    }

    private _data: Data = null;
    public get data(): Data {
        if (this._data == null)
        {
            this._data = new Data();
        }
        return this._data;
    }

    public onXAxisGapChange(e: any){
        this.setState({ xAxisGapValue : e.target.value});
    }
}


// rendering above component in the React DOM
ReactDOM.render(<Sample />, document.getElementById('root'));
