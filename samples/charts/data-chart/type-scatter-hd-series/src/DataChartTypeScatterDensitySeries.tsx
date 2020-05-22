// types of axis:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
// elements of scatter series:
import { IgrHighDensityScatterSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterModule } from 'igniteui-react-charts';
import { IgrHighDensityScatterSeriesModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrNumberAbbreviatorModule } from 'igniteui-react-charts';
import * as React from 'react';
import { SampleDensityData } from './SampleDensityData';

IgrDataChartCoreModule.register();
IgrDataChartScatterCoreModule.register();
IgrDataChartScatterModule.register();
IgrHighDensityScatterSeriesModule.register();
IgrDataChartInteractivityModule.register();
IgrNumberAbbreviatorModule.register();

export default class DataChartTypeScatterDensitySeries extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);

        this.seriesMinChanged = this.seriesMinChanged.bind(this);
        this.seriesMaxChanged = this.seriesMaxChanged.bind(this);
        this.seriesResolutionChanged = this.seriesResolutionChanged.bind(this);
        this.seriesExtentChanged = this.seriesExtentChanged.bind(this);

        this.data = SampleDensityData.create();

        this.state = {
            seriesHeatMin: 1,
            seriesHeatMax: 15,
            seriesResolution: 3,
            seriesPointExtent: 1,
            hdUseBruteForce: false
        }
    }

    public seriesMinChanged = (e: any) => {
        const min = e.target.value;
        this.setState({seriesHeatMin: min});
    }

    public seriesMaxChanged = (e: any) => {
        const max = e.target.value;
        this.setState({seriesHeatMax: max});
    }

    public seriesResolutionChanged = (e: any) => {
        const res = e.target.value;
        this.setState({seriesResolution: res});
    }

    public seriesExtentChanged = (e: any) => {
        const extent = e.target.value;
        this.setState({seriesPointExtent: extent});
    }

    public useBruteForceChanged = (e: any) => {
        const useBruteForce = e.target.checked;
        this.setState({hdUseBruteForce: useBruteForce});
    }

    public render() {
        return (
        <div className="igContainer">
            {/* <div className="igOptions">
                <span className="igOptions-label">Minimum Value: {this.state.seriesHeatMin}</span>
                <input className="igOptions-slider" type="range" min="0" max="30" step="1"
                    value={this.state.seriesHeatMin}
                    onChange={this.seriesMinChanged}/>
                <span className="igOptions-label">Maximum Value: {this.state.seriesHeatMax}</span>
                <input className="igOptions-slider" type="range" min="0" max="30" step="1"
                    value={this.state.seriesHeatMax}
                    onChange={this.seriesMaxChanged}/>
                <span className="igOptions-label">Series Resolution: {this.state.seriesResolution}</span>
                <input className="igOptions-slider" type="range" min="0" max="10" step="1"
                    value={this.state.seriesResolution}
                    onChange={this.seriesResolutionChanged}/>
                <span className="igOptions-label">Point Extent: {this.state.seriesPointExtent}</span>
                <input className="igOptions-slider" type="range" min="1" max="5" step="1"
                    value={this.state.seriesPointExtent}
                    onChange={this.seriesExtentChanged}/>
                <span className="igOptions-label">Use Brute Force</span>
                <input className="checkbox" type="checkbox" checked={this.state.hdUseBruteForce} onChange={this.useBruteForceChanged} />
            </div> */}
            <div className="igComponent">
                <IgrDataChart
                    ref={this.onChartRef}
                    isHorizontalZoomEnabled={true}
                    isVerticalZoomEnabled={true}
                    width="100%"
                    height="calc(100% - 20px)"
                    dataSource={this.data} >

                    <IgrNumericXAxis name="xAxis" abbreviateLargeNumbers={true}/>
                    <IgrNumericYAxis name="yAxis" abbreviateLargeNumbers={true}/>

                    <IgrHighDensityScatterSeries
                    name="series"
                    xAxisName="xAxis"
                    yAxisName="yAxis"
                    xMemberPath="X"
                    yMemberPath="Y"
                    heatMaximum={this.state.seriesHeatMax}
                    heatMinimum={this.state.seriesHeatMin}
                    heatMinimumColor="Blue"
                    heatMaximumColor="Red"
                    pointExtent={this.state.seriesPointExtent}
                    useBruteForce={this.state.hdUseBruteForce}
                    mouseOverEnabled="true"
                    resolution={this.state.seriesResolution}
                    progressiveLoad="true"
                    showDefaultTooltip="true"
                    title="High Density Data"
                    />
               </IgrDataChart>
            </div>
        </div>
        );
    }

    public onChartRef(chart: IgrDataChart) {
        this.chart = chart;
    }
}
