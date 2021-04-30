import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { IgrCategoryChart } from 'igniteui-react-charts';
import { IgrCategoryChartModule } from 'igniteui-react-charts';


IgrCategoryChartModule.register();

export default class CategoryChartMarkers extends React.Component<any, any> {
    public data: any[];

    constructor(props: any) {
        super(props);

        this.state = { chartType: "Line", markersTypes: "Circle" }
        this.initData();
    }

    public render(): JSX.Element {
        return (
            <div className="igContainer">
                <div className="igOptions">
                    <span className="igOptions-label">Chart Type: </span>
                    <select value={this.state.chartType}
                        onChange={this.onChartTypeChanged}>
                        <option>Auto</option>
                        <option>Area</option>
                        <option>Column</option>
                        <option>Point</option>
                        <option>Line</option>
                        <option>Spline</option>
                        <option>SplineArea</option>
                        <option>StepArea</option>
                        <option>StepLine</option>
                        <option>Waterfall</option>
                    </select>
                    <span className="igOptions-label"> Marker Type: </span>
                    <select value={this.state.markersTypes}
                        onChange={this.onMarkerTypeChanged}>
                        <option>Automatic</option>
                        <option>Circle</option>
                        <option>Triangle</option>
                        <option>Pyramid</option>
                        <option>Square</option>
                        <option>Diamond</option>
                        <option>Pentagon</option>
                        <option>Hexagon</option>
                        <option>Tetragram</option>
                        <option>Pentagram</option>
                        <option>Hexagram</option>
                        <option>None</option>
                    </select>
                </div>
                <div className="igComponent" style={{height: "calc(100% - 50px)"}} >
                    <IgrCategoryChart
                        width="100%"
                        height="100%"
                        chartTitle="Olympic Medals By Country"
                        isSeriesHighlightingEnabled={true}
                        dataSource={this.data}
                        chartType={this.state.chartType}
                        markerTypes={this.state.markersTypes}
                        yAxisMinimumValue={0}/>
                </div>
            </div>

        );
    }
    public onChartTypeChanged = (e: any) =>{
        const chartMode = e.target.value.toString();
        this.setState({chartType: chartMode});
    }

    public onMarkerTypeChanged = (e: any) =>{
        const markers = e.target.value.toString();
        this.setState({markersTypes: markers});
    }

    public initData() {
        const usaMedals: any = [
            { Year: "1996", UnitedStates: 148 },
            { Year: "2000", UnitedStates: 142 },
            { Year: "2004", UnitedStates: 134 },
            { Year: "2008", UnitedStates: 131 },
            { Year: "2012", UnitedStates: 135 },
            { Year: "2016", UnitedStates: 146 }
        ];
        const chinaMedals: any = [
            { Year: "1996", China: 110 },
            { Year: "2000", China: 115 },
            { Year: "2004", China: 121 },
            { Year: "2008", China: 129 },
            { Year: "2012", China: 115 },
            { Year: "2016", China: 112 }
        ];
        const russiaMedals: any = [
            { Year: "1996", Russia: 95 },
            { Year: "2000", Russia: 91 },
            { Year: "2004", Russia: 86 },
            { Year: "2008", Russia: 65 },
            { Year: "2012", Russia: 77 },
            { Year: "2016", Russia: 88 }
        ];
        this.data = [ usaMedals, chinaMedals, russiaMedals ];
    }

}

// rendering above class to the React DOM
ReactDOM.render(<CategoryChartMarkers />, document.getElementById('root'));