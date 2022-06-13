import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrLegendModule } from 'igniteui-react-charts';
import { IgrCategoryChart } from 'igniteui-react-charts';
import { IgrLegend } from 'igniteui-react-charts';

const mods: any[] = [
    IgrLegendModule,
    IgrCategoryChartModule
];
mods.forEach((m) => m.register());

export default class CategoryChartColumnChartWithHighlighting extends React.Component<any, any> {
    public data: any[];

    private chart: IgrCategoryChart
    private chartRef(r: IgrCategoryChart) {
        this.chart = r;
        this.setState({});
    }    
    private legend: IgrLegend
    private legendRef(r: IgrLegend) {
        this.legend = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
        this.legendRef = this.legendRef.bind(this);
        this.onHighlightTargetChanged = this.onHighlightTargetChanged.bind(this);
        this.onHighlightingModeChanged = this.onHighlightingModeChanged.bind(this);
        this.onBehaviorModeChanged = this.onBehaviorModeChanged.bind(this);
        this.onLegendHighlightingModeChanged = this.onLegendHighlightingModeChanged.bind(this);

        this.state = {
            isCategoryHighlighting: false,
            isItemHighlighting: false,
            isSeriesHighlighting: true,
            highlightingMode: "Auto",
            highlightingBehavior: "Auto",
            legendHighlightingMode: "Auto"
        }
        this.initData();
    }

    public render(): JSX.Element {
        return (
        <div className="container sample" >
            <div className="options horizontal">
                <span className="options-label">Highlight Target: </span>
                <select id="highlightingTarget" onChange={this.onHighlightTargetChanged}>
                    <option>Series</option>
                    <option>Item</option>
                    <option>Category</option>
                    <option>None</option>
                </select>
                <span className="options-label">Mode: </span>
                <select id="highlightingMode" onChange={this.onHighlightingModeChanged}>
                    <option>Auto</option>
                    <option>Brighten</option>
                    <option>BrightenSpecific</option>
                    <option>FadeOthers</option>
                    <option>FadeOthersSpecific</option>
                    <option>None</option>
                </select>
                <span className="options-label">Behavior: </span>
                <select id="behaviorMode" onChange={this.onBehaviorModeChanged}>
                    <option>Auto</option>
                    <option>DirectlyOver</option>
                    <option>NearestItems</option>
                    <option>NearestItemsAndSeries</option>
                    <option>NearestItemsRetainMainShapes</option>
                </select>
                <span className="options-label">Legend: </span>
                <select id="legendHighlightingMode" onChange={this.onLegendHighlightingModeChanged}>
                    <option>Auto</option>
                    <option>MatchSeries</option>
                    <option>None</option>
                </select>
            </div>
            <span className="legend-title">
                Average Temperatures in the U.S. Cities
            </span>
            <div className="legend">
                <IgrLegend
                orientation="Horizontal"
                ref={this.legendRef}>
                </IgrLegend>
            </div>
            <div className="container fill" >
                <IgrCategoryChart
                    ref={this.chartRef}
                    dataSource={this.data}
                    legend={this.legend}
                    isCategoryHighlightingEnabled={this.state.isCategoryHighlighting}
                    isItemHighlightingEnabled={this.state.isItemHighlighting}
                    isSeriesHighlightingEnabled={this.state.isSeriesHighlighting}
                    highlightingMode={this.state.highlightingMode}
                    highlightingBehavior={this.state.highlightingBehavior}
                    legendHighlightingMode={this.state.legendHighlightingMode}
                    yAxisTitle="Temperatures in Celsius"
					yAxisMinimumValue={0}
                    xAxisInterval={1}>
                </IgrCategoryChart>
            </div>
        </div>
        );
    }

    public onHighlightTargetChanged(e: any) {
        let value = e.target.value as string;
        if(value == "Series") {
            this.setState({
                isItemHighlighting: false, 
                isSeriesHighlighting: true, 
                isCategoryHighlighting: false, 
                });
        }
        else if(value == "Item") {
            this.setState( {
                isItemHighlighting: true, 
                isSeriesHighlighting: false, 
                isCategoryHighlighting: false, 
            });
        }
        else if(value == "Category") {
            this.setState({
                isItemHighlighting: false, 
                isSeriesHighlighting: false, 
                isCategoryHighlighting: true, 
            });
        }
        else if(value=="None") {
            this.setState({
                isItemHighlighting: false, 
                isSeriesHighlighting: false, 
                isCategoryHighlighting: false, 
            });
        }
    }

    public onHighlightingModeChanged(e: any) {
        const val = e.target.value;
        this.setState({ highlightingMode: val});        
    }
    public onBehaviorModeChanged(e: any) {
        const val = e.target.value;
        this.setState({ highlightingBehavior: val});        
    }
    public onLegendHighlightingModeChanged(e: any) {
        const val = e.target.value;
        this.setState({ legendHighlightingMode: val});        
    }

    
    public initData() {
        const CityTemperatureData: any = [
            { Month: "January", NY: 10.6, LA: 28.3},
            { Month: "February", NY: 7.8, LA: 31.1},
            { Month: "March", NY: 12.2,   LA: 27.8},
            { Month: "April", NY: 11.7,  LA: 33.9},
            { Month: "May", NY: 19.4,    LA: 35.0},
            { Month: "June", NY: 23.3,    LA: 36.7},
            { Month: "July", NY: 27.2,    LA: 33.3},
            { Month: "August", NY: 25.6,  LA: 36.7},
            { Month: "September", NY: 22.8,  LA: 43.9},
            { Month: "October", NY: 17.8,    LA: 38.3 },
            { Month: "November", NY: 17.8,  LA: 32.8},
            { Month: "December", NY: 8.3, LA: 28.9},
        ];
        this.data = [ CityTemperatureData];
    }
}

// rendering above class to the React DOM
ReactDOM.render(<CategoryChartColumnChartWithHighlighting />, document.getElementById('root'));
