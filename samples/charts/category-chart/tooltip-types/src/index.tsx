import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { IgrChartSeriesEventArgs } from 'igniteui-react-charts';
import { IgrDomainChart } from 'igniteui-react-charts';
import { IgrCategoryChart } from 'igniteui-react-charts';
import { IgrCategoryChartModule } from 'igniteui-react-charts';


IgrCategoryChartModule.register();

export default class CategoryChartTooltipTypes extends React.Component<any, any> {
    public data: any[];

    constructor(props: any) {
        super(props);
        this.state = { toolTipType: "Default" }
        this.initData();
    }

    public render(): JSX.Element {
        return (
        <div className="igContainer" >
            <div className="igOptions">
                <span className="igOptions-label">Tooltip Type: </span>
                <select value={this.state.toolTipType}
                    onChange={this.onToolTipTypeChanged}>
                    <option>Default</option>
                    <option>Item</option>
                    <option>Category</option>
                    {/* <option>None</option> */}
                </select>
            </div>
            <div className="igComponent" style={{height: "calc(100% - 50px)"}} >
                <IgrCategoryChart
                    width="100%"
                    height="100%"
                    chartTitle="Olympic Medals By Country"
                    chartType="column"
                    dataSource={this.data}
                    toolTipType={this.state.toolTipType}
                    yAxisMinimumValue={0}
                    yAxisMaximumValue={200}
                    xAxisInterval={1}
                    seriesAdded={this.onSeriesAdded}/>
            </div>

        </div>
        );
    }

    public onToolTipTypeChanged = (e: any) => {
        this.setState({toolTipType: e.target.value});
    }

    public onSeriesAdded = (s: IgrDomainChart, e: IgrChartSeriesEventArgs) => {
        // console.log("onSeriesAdded " + e.series);
        if (e.series.isAnnotationLayer) {
            e.series.transitionDuration = 100;
        }
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
ReactDOM.render(<CategoryChartTooltipTypes />, document.getElementById('root'));