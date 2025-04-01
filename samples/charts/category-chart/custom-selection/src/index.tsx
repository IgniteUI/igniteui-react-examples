import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrDataLegendModule, IgrCategoryChartModule, IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrDataLegend, IgrCategoryChart } from 'igniteui-react-charts';
import { SelectableDataItem, SelectableData } from './SelectableData';
import { IgrDomainChartSeriesPointerEventArgs } from 'igniteui-react-charts';

const mods: any[] = [
    IgrDataLegendModule,
    IgrCategoryChartModule,
    IgrDataChartInteractivityModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrDataLegend
    private legendRef(r: IgrDataLegend) {
        this.legend = r;
        this.setState({});
    }
    private chart: IgrCategoryChart
    private chartRef(r: IgrCategoryChart) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
        this.categoryChartCustomSelectionPointerDown = this.categoryChartCustomSelectionPointerDown.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Chart with Multiple Selectable Data Columns
            </div>

            <div className="legend">
                <IgrDataLegend
                    ref={this.legendRef}
                    summaryType="None"
                    valueFormatMaxFractions={0}
                    target={this.chart}>
                </IgrDataLegend>
            </div>

            <div className="container fill">
                <IgrCategoryChart
                    ref={this.chartRef}
                    dataSource={this.selectableData}
                    chartType="Column"
                    xAxisOverlap={1}
                    yAxisMinimumValue={0}
                    isHorizontalZoomEnabled={false}
                    isVerticalZoomEnabled={false}
                    isSeriesHighlightingEnabled={true}
                    finalValueAnnotationsVisible={false}
                    crosshairsAnnotationEnabled={false}
                    dataToolTipSummaryType="None"
                    dataToolTipValueFormatMaxFractions={0}
                    seriesPointerDown={this.categoryChartCustomSelectionPointerDown}>
                </IgrCategoryChart>
            </div>
        </div>
        );
    }

    private _selectableData: SelectableData = null;
    public get selectableData(): SelectableData {
        if (this._selectableData == null)
        {
            this._selectableData = new SelectableData();
        }
        return this._selectableData;
    }


    public categoryChartCustomSelectionPointerDown(sender: any, args: IgrDomainChartSeriesPointerEventArgs): void {

        var chart = this.chart;
        var selectableData = chart.dataSource as SelectableData;
    let oldItem = args.item as SelectableDataItem;

        if (oldItem === null) return;

        let newItem: SelectableDataItem = new SelectableDataItem({
            category: oldItem.category,
            dataValue: oldItem.dataValue,
            selectedValue: oldItem.selectedValue
        });

        var selectedIndex = -1;
        for (var i = 0; i < selectableData.length; i++) {
            if (oldItem.category === selectableData[i].category) {
                selectedIndex = i;
                break;
            }
        }

        if (oldItem.selectedValue === oldItem.dataValue)
            newItem.selectedValue = null;
        else
            newItem.selectedValue = newItem.dataValue;

        chart.notifySetItem(selectableData, selectedIndex, oldItem, newItem);
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);