import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrCategoryChart } from 'igniteui-react-charts';
import { IgrCategoryChartModule } from 'igniteui-react-charts';

IgrCategoryChartModule.register();

export default class CategoryChartColumnChartWithHighlighting extends React.Component<any, any> {
    public data: any[];
    public chart: IgrCategoryChart;

    constructor(props: any) {
        super(props);

        this.state = {
            isCategoryHighlighting: false,
            isItemHighlighting: true,
            isSeriesHighlighting: true,
        }
        this.initData();
    }

    public render(): JSX.Element {
        return (
        <div className="container sample" >
            <span className="legend-title">Temperatures in LA and NYC</span>
            <div className="overlay-right" >
                <div className="options horizontal">
                    <label className="options-label">Enable Highlighting: </label>
                    <label className="options-label"><input type="checkbox"
                    checked={this.state.isSeriesHighlighting}
                    onChange={this.onSeriesHighlightingChanged}/> Series </label>
                    <label className="options-label"><input type="checkbox"
                    checked={this.state.isItemHighlighting}
                    onChange={this.onItemHighlightingChanged}/>Item </label>
                    <label className="options-label"><input type="checkbox"
                    checked={this.state.isCategoryHighlighting}
                    onChange={this.onCategoryHighlightingChanged}/>Category </label>
                </div>
            </div>

            <div className="container" style={{height: "calc(100% - 30px)"}} >
                <IgrCategoryChart

                    width="100%"
                    height="100%"
                    dataSource={this.data}
                    isCategoryHighlightingEnabled={this.state.isCategoryHighlighting}
                    isItemHighlightingEnabled={this.state.isItemHighlighting}
                    isSeriesHighlightingEnabled={this.state.isSeriesHighlighting}
                    yAxisTitle="Temperatures in Celsius"
					yAxisMinimumValue={0}
                    xAxisInterval={1}/>
            </div>
        </div>
        );
    }

    public onSeriesHighlightingChanged = (e: any) =>{
        this.setState( {isSeriesHighlighting: e.target.checked} );
    }
    public onItemHighlightingChanged = (e: any) =>{
        this.setState( {isItemHighlighting: e.target.checked} );
    }
    public onCategoryHighlightingChanged = (e: any) =>{
        this.setState( {isCategoryHighlighting: e.target.checked} );
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
