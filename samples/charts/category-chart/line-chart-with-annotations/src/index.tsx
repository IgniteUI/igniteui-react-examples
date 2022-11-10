import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCategoryChart } from 'igniteui-react-charts';
import { IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrLegend } from 'igniteui-react-charts';
import { IgrLegendModule } from 'igniteui-react-charts';

IgrCategoryChartModule.register();
IgrLegendModule.register();

export default class CategoryChartLineChartWithAnnotations extends React.Component<any, any> {
    public data: any[];
    public chart: IgrCategoryChart;
    public categoryData: any[];
    public includedProperties: string[] = ["Year", "USA"];

    constructor(props: any) {
        super(props);
        this.state = {
            calloutsVisible: true,
            crosshairsMode: "Both",
            crosshairsVisible: true,
            finalValuesVisible: true,
            markersTypes: "Automatic",
            markersVisible: true,
        };
        this.initData();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <label className="options-label">Annotations: </label>
                    <label className="options-label"><input type="checkbox"
                    checked={this.state.crosshairsVisible}
                    onChange={this.onCrosshairsVisible}/> Crosshair </label>
                    <label className="options-label"><input type="checkbox"
                    checked={this.state.calloutsVisible}
                    onChange={this.onCalloutsVisible}/> Callouts </label>
                    <label className="options-label"><input type="checkbox"
                    checked={this.state.finalValuesVisible}
                    onChange={this.onFinalValuesVisible}/> Final Values </label>
                    <label className="options-label"><input type="checkbox"
                    checked={this.state.markersVisible}
                    onChange={this.onMarkersVisible}/> Markers </label>
                </div>

                <div className="container" style={{height: "calc(100% - 1.25rem)"}} >
                    <IgrCategoryChart
                        width="100%"
                        height="100%"
                        dataSource={this.data}
                        chartType="Line"
                        subtitle="Renewable Electricity Generated"
                        isHorizontalZoomEnabled={false}
                        isVerticalZoomEnabled={false}
                        yAxisTitle="TWh"
                        thickness={2}
                        crosshairsSnapToData={false}
                        crosshairsDisplayMode={this.state.crosshairsMode}
                        crosshairsAnnotationEnabled={this.state.crosshairsVisible}
                        finalValueAnnotationsVisible={this.state.finalValuesVisible}
                        yAxisLabelLocation="OutsideRight"
                        calloutsVisible={this.state.calloutsVisible}
                        calloutsYMemberPath="value"
                        calloutsXMemberPath="index"
                        calloutsLabelMemberPath="label"
                        markerTypes={this.state.markersTypes}
                        includedProperties={this.includedProperties}
						computedPlotAreaMarginMode="Series"/>
                </div>
            </div>
        );
    }

    public onCrosshairsVisible = (e: any) =>{
        const isVisible = e.target.checked;
        this.setState( {crosshairsVisible: isVisible} );
        if (isVisible) {
            this.setState( {crosshairsMode: "Both"} );
        }
        else {
            this.setState( {crosshairsMode: "None"} );
        }
    }
    public onCalloutsVisible = (e: any) =>{
        this.setState( {calloutsVisible: e.target.checked} );
    }
    public onFinalValuesVisible = (e: any) =>{
        this.setState( {finalValuesVisible: e.target.checked} );
    }
    public onMarkersVisible = (e: any) =>{
        const visible = e.target.checked;
        const markers = e.target.checked ? "Circle" : "None";
        this.setState( {markersTypes: markers, markersVisible: visible} );
    }

    public initData() {
        this.data = [
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
            { Year: "2019", USA: 38 },
        ];
        
        let idx: number = 0;

        for (const item of this.data) {
            item.index = idx;
            item.value = item.USA;
            item.label = item.USA + " TWh";
            idx++;
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CategoryChartLineChartWithAnnotations/>);
