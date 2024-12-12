import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrXIconModule } from 'igniteui-react-inputs';
import { IgrToolbarModule, IgrToolActionComboModule, IgrToolActionColorEditorModule } from 'igniteui-react-layouts';
import { IgrDataChartToolbarModule, IgrDataLegendModule, IgrNumberAbbreviatorModule, IgrDataChartCategoryModule, IgrDataChartCoreModule, IgrDataChartAnnotationModule, IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrToolbar, IgrToolActionColorEditor } from 'igniteui-react-layouts';
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrLineSeries } from 'igniteui-react-charts';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';
import { IgrToolCommandEventArgs } from 'igniteui-react-layouts';
import { IgrSeries } from 'igniteui-react-charts';

const mods: any[] = [
    IgrXIconModule,
    IgrToolbarModule,
    IgrToolActionComboModule,
    IgrToolActionColorEditorModule,
    IgrDataChartToolbarModule,
    IgrDataLegendModule,
    IgrNumberAbbreviatorModule,
    IgrDataChartCategoryModule,
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartAnnotationModule,
    IgrDataChartInteractivityModule,
    IgrDataChartAnnotationModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private toolbar: IgrToolbar
    private toolbarRef(r: IgrToolbar) {
        this.toolbar = r;
        this.setState({});
    }
    private colorEditorTool: IgrToolActionColorEditor
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private xAxis: IgrCategoryXAxis
    private yAxis: IgrNumericYAxis
    private lineSeries1: IgrLineSeries

    constructor(props: any) {
        super(props);

        this.toolbarRef = this.toolbarRef.bind(this);
        this.colorEditorToggleSeriesBrush = this.colorEditorToggleSeriesBrush.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="aboveContentSplit">
                <div className="aboveContentLeftContainer">
                    <div>
                        <IgrToolbar
                            ref={this.toolbarRef}
                            target={this.chart}
                            onCommand={this.colorEditorToggleSeriesBrush}>
                            <IgrToolActionColorEditor
                                title="Series Brush"
                                name="colorEditorTool"
                                commandId="ToggleSeriesBrush">
                            </IgrToolActionColorEditor>
                        </IgrToolbar>
                    </div>
                </div>
            </div>

            <div className="container fill">
                <IgrDataChart
                    isHorizontalZoomEnabled="true"
                    ref={this.chartRef}>
                    <IgrCategoryXAxis
                        name="xAxis"
                        dataSource={this.countryRenewableElectricity}
                        label="year">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        title="TWh"
                        labelLocation="OutsideRight">
                    </IgrNumericYAxis>
                    <IgrLineSeries
                        name="lineSeries1"
                        title="Electricity"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.countryRenewableElectricity}
                        valueMemberPath="america"
                        markerType="None">
                    </IgrLineSeries>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _countryRenewableElectricity: CountryRenewableElectricity = null;
    public get countryRenewableElectricity(): CountryRenewableElectricity {
        if (this._countryRenewableElectricity == null)
        {
            this._countryRenewableElectricity = new CountryRenewableElectricity();
        }
        return this._countryRenewableElectricity;
    }


    public colorEditorToggleSeriesBrush(sender: any, args: IgrToolCommandEventArgs): void {
        var target = this.chart;

    	switch (args.command.commandId)
    	{
            case "ToggleSeriesBrush":
                var color = args.command.argumentsList[0].value
                let series = target.contentSeries.item(0) as IgrSeries;
                series.brush = color as any;
            break;
        }
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);