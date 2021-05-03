import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { IgrCategoryChart } from 'igniteui-react-charts';
import { IgrCategoryChartModule } from 'igniteui-react-charts';


IgrCategoryChartModule.register();

export default class CategoryChartHighlighting extends React.Component<any, any> {
    public data: any[];

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

            <div className="container" style={{height: "calc(100% - 30px)"}} >
                <IgrCategoryChart
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
        const usaMedals: any = [
            { Year: "1996 Atlanta", UnitedStates: 148 },
            { Year: "2000 Sydney",  UnitedStates: 142 },
            { Year: "2004 Athens",  UnitedStates: 134 },
            { Year: "2008 Beijing", UnitedStates: 131 },
            { Year: "2012 London",  UnitedStates: 135 },
            { Year: "2016 Rio",     UnitedStates: 146 },
        ];
        const chinaMedals: any = [
            { Year: "1996 Atlanta", China: 110 },
            { Year: "2000 Sydney",  China: 115 },
            { Year: "2004 Athens",  China: 121 },
            { Year: "2008 Beijing", China: 129 },
            { Year: "2012 London",  China: 115 },
            { Year: "2016 Rio",     China: 112 },
        ];
        const russiaMedals: any = [
            { Year: "1996 Atlanta", Russia: 95 },
            { Year: "2000 Sydney",  Russia: 91 },
            { Year: "2004 Athens",  Russia: 86 },
            { Year: "2008 Beijing", Russia: 65 },
            { Year: "2012 London",  Russia: 77 },
            { Year: "2016 Rio",     Russia: 88 },
        ];
        this.data = [ usaMedals, chinaMedals, russiaMedals ];
    }
}

// rendering above class to the React DOM
ReactDOM.render(<CategoryChartHighlighting />, document.getElementById('root'));