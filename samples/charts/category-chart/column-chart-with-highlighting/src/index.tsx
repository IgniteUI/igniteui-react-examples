import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrCategoryChart } from 'igniteui-react-charts';
import { IgrCategoryChartModule } from 'igniteui-react-charts';

IgrCategoryChartModule.register();

export default class CategoryChartColumnChartWithHighlighting extends React.Component<any, any> {
    public data: any[];
    public chart: IgrCategoryChart;
    public excludedProperties: string[] = ["NY_Low", "LA_Low"];

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
                    excludedProperties ={this.excludedProperties}
                    width="100%"
                    height="100%"
                    dataSource={this.data}
                    isCategoryHighlightingEnabled={this.state.isCategoryHighlighting}
                    isItemHighlightingEnabled={this.state.isItemHighlighting}
                    isSeriesHighlightingEnabled={this.state.isSeriesHighlighting}
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
            { Month : "January", NY_High : 10.6, NY_Low : -6.6, LA_High : 28.3, LA_Low : 7.8 },
            { Month : "February", NY_High : 7.8, NY_Low : -9.9, LA_High : 31.1, LA_Low : 5.6 },
            { Month : "March", NY_High : 12.2, NY_Low : -3.8, LA_High : 27.8, LA_Low : 8.3 },
            { Month : "April", NY_High : 11.7, NY_Low : 2.2, LA_High : 33.9, LA_Low : 10.6 },
            { Month : "May", NY_High : 19.4, NY_Low : 1.1, LA_High : 35.0, LA_Low : 13.9 },
            { Month : "June", NY_High : 23.3, NY_Low : 10.6, LA_High : 36.7, LA_Low : 16.1 },
            { Month : "July", NY_High : 27.2, NY_Low : 19.4, LA_High : 33.3, LA_Low : 15.6 },
            { Month : "August", NY_High : 25.6, NY_Low : 16.7, LA_High : 36.7, LA_Low : 15.6 },
            { Month : "September", NY_High : 22.8, NY_Low : 8.9, LA_High : 43.9, LA_Low : 16.1 },
            { Month : "October", NY_High : 17.8, NY_Low : 0.0, LA_High : 38.3, LA_Low : 11.1 },
            { Month : "November", NY_High : 17.8, NY_Low : -1, LA_High : 32.8, LA_Low : 6.7 },
            { Month : "December", NY_High : 8.3, NY_Low : -6.6, LA_High : 28.9, LA_Low : 5.6 },
        ];
        this.data = [ CityTemperatureData];
    }
}

// rendering above class to the React DOM
ReactDOM.render(<CategoryChartColumnChartWithHighlighting />, document.getElementById('root'));
