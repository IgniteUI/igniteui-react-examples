import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrToolbarModule } from 'igniteui-react-layouts';
import { IgrDataChartToolbarModule, IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartAnnotationModule, IgrDataChartInteractivityModule, IgrDataChartCategoryTrendLineModule } from 'igniteui-react-charts';
import { IgrToolbar, IgrToolActionIconMenu, IgrToolActionGroupHeader, IgrToolActionSubPanel, IgrToolActionCheckbox, IgrToolActionLabel } from 'igniteui-react-layouts';
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrLineSeries } from 'igniteui-react-charts';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';
import { IgrToolCommandEventArgs } from 'igniteui-react-layouts';
import { IgrSeries, IgrDataToolTipLayer, IgrCrosshairLayer, IgrFinalValueLayer } from 'igniteui-react-charts';

const mods: any[] = [
    IgrToolbarModule,
    IgrDataChartToolbarModule,
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartAnnotationModule,
    IgrDataChartInteractivityModule,
    IgrDataChartCategoryTrendLineModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private toolbar: IgrToolbar
    private toolbarRef(r: IgrToolbar) {
        this.toolbar = r;
        this.setState({});
    }
    private menuForSubPanelTool: IgrToolActionIconMenu
    private subPanelGroup: IgrToolActionGroupHeader
    private customSubPanelTools: IgrToolActionSubPanel
    private enableTooltipsLabel: IgrToolActionCheckbox
    private enableCrosshairsLabel: IgrToolActionCheckbox
    private enableFinalValuesLabel: IgrToolActionCheckbox
    private zoomResetLabel: IgrToolActionLabel
    private zoomResetHidden: IgrToolActionLabel
    private analyzeMenu: IgrToolActionIconMenu
    private copyMenu: IgrToolActionLabel
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private xAxis: IgrCategoryXAxis
    private yAxis: IgrNumericYAxis
    private lineSeries1: IgrLineSeries
    private lineSeries2: IgrLineSeries
    private lineSeries3: IgrLineSeries

    constructor(props: any) {
        super(props);

        this.toolbarRef = this.toolbarRef.bind(this);
        this.toolbarToggleAnnotations = this.toolbarToggleAnnotations.bind(this);
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
                            orientation="Horizontal"
                            onCommand={this.toolbarToggleAnnotations}>
                            <IgrToolActionIconMenu
                                name="MenuForSubPanelTool"
                                iconCollectionName="ChartToolbarIcons"
                                iconName="analyze">
                                <IgrToolActionGroupHeader
                                    name="SubPanelGroup"
                                    closeOnExecute={true}
                                    title="Visualizations"
                                    subtitle="Layers">
                                </IgrToolActionGroupHeader>
                                <IgrToolActionSubPanel
                                    name="CustomSubPanelTools">
                                    <IgrToolActionCheckbox
                                        name="EnableTooltipsLabel"
                                        title="Enable Tooltips"
                                        commandId="EnableTooltips">
                                    </IgrToolActionCheckbox>
                                    <IgrToolActionCheckbox
                                        name="EnableCrosshairsLabel"
                                        title="Enable Crosshairs"
                                        commandId="EnableCrosshairs">
                                    </IgrToolActionCheckbox>
                                    <IgrToolActionCheckbox
                                        name="EnableFinalValuesLabel"
                                        title="Enable Final Values"
                                        commandId="EnableFinalValues">
                                    </IgrToolActionCheckbox>
                                </IgrToolActionSubPanel>
                            </IgrToolActionIconMenu>
                            <IgrToolActionLabel
                                name="zoomResetLabel"
                                title="Reset"
                                afterId="ZoomOut"
                                iconName="reset"
                                iconCollectionName="ChartToolbarIcons"
                                commandId="ZoomReset"
                                isHighlighted={true}>
                            </IgrToolActionLabel>
                            <IgrToolActionLabel
                                name="zoomResetHidden"
                                overlayId="ZoomReset"
                                visibility="Collapsed">
                            </IgrToolActionLabel>
                            <IgrToolActionIconMenu
                                name="AnalyzeMenu"
                                overlayId="AnalyzeMenu"
                                visibility="Collapsed">
                            </IgrToolActionIconMenu>
                            <IgrToolActionLabel
                                name="CopyMenu"
                                overlayId="CopyMenu"
                                visibility="Collapsed">
                            </IgrToolActionLabel>
                        </IgrToolbar>
                    </div>
                </div>
            </div>

            <div className="container fill">
                <IgrDataChart
                    computedPlotAreaMarginMode="Series"
                    isHorizontalZoomEnabled={true}
                    isVerticalZoomEnabled={true}
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
                        valueMemberPath="america">
                    </IgrLineSeries>
                    <IgrLineSeries
                        name="LineSeries2"
                        title="Electricity"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.countryRenewableElectricity}
                        valueMemberPath="europe">
                    </IgrLineSeries>
                    <IgrLineSeries
                        name="LineSeries3"
                        title="Electricity"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.countryRenewableElectricity}
                        valueMemberPath="china">
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


    public toolbarToggleAnnotations(sender: any, args: IgrToolCommandEventArgs): void {
        var target = this.chart;
        switch (args.command.commandId)
    	{
    		case "EnableTooltips":
    			var enable = args.command.argumentsList[0].value as boolean;
    			if (enable)
    			{
    				target.series.add(new IgrDataToolTipLayer({ name: "tooltipLayer" }));
    			}
    			else
    			{
    				var toRemove = null;
    				for (var i = 0; i < target.actualSeries.length; i++) {
                        let s = target.actualSeries[i] as IgrSeries;
    					if (s instanceof IgrDataToolTipLayer)
    					{
    						toRemove = s;
    					}
    				}
    				if (toRemove != null)
    				{
    					target.series.remove(toRemove);
    				}
    			}
    			break;
    		case "EnableCrosshairs":
    			var enable = args.command.argumentsList[0].value as boolean;
    			if (enable)
    			{
    				target.series.add(new IgrCrosshairLayer({ name: "crosshairLayer" }));
    			}
    			else
    			{
    				var toRemove = null;
    				for (var i = 0; i < target.actualSeries.length; i++) {
    					let s = target.actualSeries[i] as IgrSeries;
    					if (s instanceof IgrCrosshairLayer)
    					{
    						toRemove = s;
    					}
    				}
    				if (toRemove != null)
    				{
    					target.series.remove(toRemove);
    				}
    			}
    			break;
    		case "EnableFinalValues":
    			var enable = args.command.argumentsList[0].value as boolean;
    			if (enable)
    			{
    				target.series.add(new IgrFinalValueLayer({ name: "finalValueLayer" }));
    			}
    			else
    			{
    				var toRemove = null;
    				for (var i = 0; i < target.actualSeries.length; i++) {
    					let s = target.actualSeries[i] as IgrSeries;
    					if (s instanceof IgrFinalValueLayer)
    					{
    						toRemove = s;
    					}
    				}
    				if (toRemove != null)
    				{
    					target.series.remove(toRemove);
    				}
    			}
    			break;
    	}
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);