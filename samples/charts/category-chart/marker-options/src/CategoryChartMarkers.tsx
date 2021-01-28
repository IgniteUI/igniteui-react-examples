import { IgrCategoryChart } from 'igniteui-react-charts';
import { IgrCategoryChartModule } from 'igniteui-react-charts';
import * as React from 'react';

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
                        chartTitle="Renewable Electricity Generated:"
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
        const USA: any = [
            { Year: "2009", USA: 19 },
            { Year: "2010", USA: 24 },
            { Year: "2011", USA: 28 },
            { Year: "2012", USA: 26 },
            { Year: "2013", USA: 38 },
            { Year: "2014", USA: 31 },
            { Year: "2015", USA: 19 },
            { Year: "2016", USA: 52 },
            { Year: "2017", USA: 50 },
            { Year: "2018", USA: 34 },
            { Year: "2019", USA: 38 }            
        ];
        const China: any = [
            { Year: "2009", China: 21 },
            { Year: "2010", China: 26 },
            { Year: "2011", China: 29 },
            { Year: "2012", China: 32 },
            { Year: "2013", China: 47 },
            { Year: "2014", China: 46 },
            { Year: "2015", China: 50 },
            { Year: "2016", China: 90 },
            { Year: "2017", China: 132 },
            { Year: "2018", China: 134 },
            { Year: "2019", China: 96 },
        ];
        const Europe: any = [
            { Year: "2009", Europe: 31 },
            { Year: "2010", Europe: 43 },
            { Year: "2011", Europe: 66 },
            { Year: "2012", Europe: 69 },
            { Year: "2013", Europe: 58 },
            { Year: "2014", Europe: 40 },
            { Year: "2015", Europe: 78 },
            { Year: "2016", Europe: 13 },
            { Year: "2017", Europe: 78 },
            { Year: "2018", Europe: 40 },
            { Year: "2019", Europe: 80 },
        ];
        this.data = [ Europe, China, USA ];
    }

}
