import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrToolbarModule } from 'igniteui-react-layouts';
import { IgrDataChartToolbarModule, IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartAnnotationModule, IgrDataChartInteractivityModule, IgrAnnotationLayerProxyModule, IgrDataChartCategoryTrendLineModule } from 'igniteui-react-charts';
import { IgrToolbar } from 'igniteui-react-layouts';
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrLineSeries, IgrSeriesViewer,
         IIgrSeriesViewerProps, IgrUserAnnotationToolTipContentUpdatingEventArgs,
         IgrUserAnnotationInformationEventArgs, IgrUserAnnotationInformation  } from 'igniteui-react-charts';
import { CountryRenewableElectricity } from './CountryRenewableElectricity';
import { IgrTextarea, IgrInput } from 'igniteui-react';
import { IgrColorEditor } from 'igniteui-react-inputs';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrToolbarModule,
    IgrDataChartToolbarModule,
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartAnnotationModule,
    IgrDataChartInteractivityModule,
    IgrAnnotationLayerProxyModule,
    IgrDataChartCategoryTrendLineModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {

    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }

    private labelInput: IgrInput;
    private labelInputRef(r: IgrInput) {
        this.labelInput = r;
        this.setState({});
    }

    private detailTextArea: IgrTextarea;
    private detailTextAreaRef(r: IgrTextarea) {
        this.detailTextArea = r;
        this.setState({});
    }

    private badgeColorPicker: IgrColorEditor;
    private badgeColorPickerRef(r: IgrColorEditor) {
        this.badgeColorPicker = r;
        this.setState({});
    }

    private mainColorPicker: IgrColorEditor;
    private mainColorPickerRef(r: IgrColorEditor) {
        this.mainColorPicker = r;
        this.setState({});
    }   

    private currentAnnotationInfo: IgrUserAnnotationInformation;

    constructor(props: any) {
        super(props);        
        this.chartRef = this.chartRef.bind(this);
        this.onDoneButtonClick = this.onDoneButtonClick.bind(this);
        this.onCancelButtonClick = this.onCancelButtonClick.bind(this);
        this.badgeColorPickerRef = this.badgeColorPickerRef.bind(this);
        this.mainColorPickerRef = this.mainColorPickerRef.bind(this);
        this.labelInputRef = this.labelInputRef.bind(this);
        this.detailTextAreaRef = this.detailTextAreaRef.bind(this);
        this.onUserAnnotationInformationRequested = this.onUserAnnotationInformationRequested.bind(this);
        this.onUserAnnotationToolTipContentUpdating = this.onUserAnnotationToolTipContentUpdating.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="aboveContentSplit">
                    <div className="aboveContentLeftContainer">
                        <div>
                            <IgrToolbar target={this.chart}
                                orientation="Horizontal">
                            </IgrToolbar>
                        </div>
                    </div>
                </div>

                <div className="container fill">
                    <IgrDataChart
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true}
                        computedPlotAreaMarginMode="Series"
                        isUserAnnotationsEnabled={true}
                        userAnnotationInformationRequested={this.onUserAnnotationInformationRequested}
                        userAnnotationToolTipContentUpdating={this.onUserAnnotationToolTipContentUpdating}
                        ref={this.chartRef}>
                        <IgrCategoryXAxis
                            name="xAxis"
                            dataSource={this.countryRenewableElectricity}
                            label="year">
                        </IgrCategoryXAxis>
                        <IgrNumericYAxis
                            name="yAxis"
                            title="TWh">
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

                    <div className='annotationPopup' >
                        <div>
                            <label>Label:</label>
                            <IgrInput ref={this.labelInputRef} />
                        </div>

                        <div>
                            <label>Details:</label>
                            <IgrTextarea ref={this.detailTextAreaRef} />
                        </div>

                        <div>
                            <label>Badge Color:</label>
                            <IgrColorEditor ref={this.badgeColorPickerRef} useTopLayer={true} openAsChild={true} />

                            <label>Main Color:</label>
                            <IgrColorEditor ref={this.mainColorPickerRef} useTopLayer={true} openAsChild={true} />
                        </div>

                        <div>
                            <button onClick={this.onDoneButtonClick}>Done</button>
                            <button onClick={this.onCancelButtonClick}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    public onUserAnnotationInformationRequested(s: IgrSeriesViewer<IIgrSeriesViewerProps>, e: IgrUserAnnotationInformationEventArgs){
        this.currentAnnotationInfo = e.annotationInfo;
        this.toggleDialogState(true);    
    }

    public onUserAnnotationToolTipContentUpdating(s: IgrSeriesViewer<IIgrSeriesViewerProps>, e: IgrUserAnnotationToolTipContentUpdatingEventArgs){
        var tooltipText = e.annotationInfo.annotationData;

        if (e.content.children.length == 0) {
            var element = document.createElement("div");
            element.textContent = tooltipText;
            e.content.appendChild(element);
        }
        else {
            var element: HTMLDivElement = e.content.children[0];
            element.textContent = tooltipText;
        }
    }

    public onDoneButtonClick(){    
        this.currentAnnotationInfo.label = this.labelInput.value;
        this.currentAnnotationInfo.annotationData = this.detailTextArea.value;
        this.currentAnnotationInfo.mainColor = this.mainColorPicker.value;
        this.currentAnnotationInfo.badgeColor = this.badgeColorPicker.value;

        this.chart.finishAnnotationFlow(this.currentAnnotationInfo);

        this.toggleDialogState(false);
    }

    public onCancelButtonClick(){
        this.chart.cancelAnnotationFlow(this.currentAnnotationInfo.annotationId);
        this.toggleDialogState(false);
    }

    public toggleDialogState(open: boolean): void {
        var popup = document.getElementsByClassName('annotationPopup')[0] as HTMLDivElement;

        if (open) {
            popup.style.display = "block";
        }
        else {
            popup.style.display = "none";
        }
    }

    private _countryRenewableElectricity: CountryRenewableElectricity = null;
    public get countryRenewableElectricity(): CountryRenewableElectricity {
        if (this._countryRenewableElectricity == null)
        {
            this._countryRenewableElectricity = new CountryRenewableElectricity();
        }
        return this._countryRenewableElectricity;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);