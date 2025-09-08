import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MapUtils, MapRegion } from './MapUtils';
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrAzureMapsMapImagery } from 'igniteui-react-maps';
import { AzureMapsImageryStyle } from 'igniteui-react-maps';
import { IgrButton, IgrDialog, IgrInput } from 'igniteui-react';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
// for handling of maps events and styling
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapDisplayImageryAzure extends React.Component<any, any> {

    public mapWeather?: IgrGeographicMap;
    public mapAerial?: IgrGeographicMap;
    public mapRoad?: IgrGeographicMap;
    public apiKey: string;
    public dialogRef: IgrDialog;

    constructor(props: any) {
            super(props);
            this.state = { apiKey: "" };
            this.onDialogRef = this.onDialogRef.bind(this);
            this.onDialogShow = this.onDialogShow.bind(this);
            this.onDialogHide = this.onDialogHide.bind(this);
            this.onApiKeyChange = this.onApiKeyChange.bind(this);

    }

    public render(): JSX.Element {
        return (
            <div className="container horizontal" >
                <IgrButton variant="contained" onClick={this.onDialogShow}>
                    <span>Show Dialog</span>
                </IgrButton>

                <IgrDialog title="Confirmation" ref={this.onDialogRef}>
                    <IgrInput label="AzureKey" value={this.state.apiKey} inputMode='text' onInput={this.onApiKeyChange}>
                           
                    </IgrInput>
                      
                    <div slot="footer">
                        <IgrButton onClick={this.onDialogHide} variant="flat"><span>Cancel</span></IgrButton>
                        <IgrButton onClick={this.onDialogHide} variant="flat"><span>OK</span></IgrButton>
                    </div>
                </IgrDialog>

                <div className="container" >
                    <IgrGeographicMap
                        ref={(ref) => { this.mapWeather = ref!; }}
                        width="100%" height="100%" zoomable="true"/>
                </div>
                <div className="container" >
                    <IgrGeographicMap
                        ref={(ref) => { this.mapAerial = ref!; }}
                        width="100%" height="100%" zoomable="true"/>
                </div>
                <div className="container" >
                    <IgrGeographicMap
                        ref={(ref) => { this.mapRoad = ref!; }}
                        
                        width="100%" height="100%" zoomable="true"/>
                </div>
                <div className="overlay-bottom-right overlay-border">Imagery Tiles: @Azure Maps</div>
            </div>
        );
    }

    public onApiKeyChange(e: any) {
        console.log(e.detail);
        this.setState({ apiKey: e.detail}, () => {
            this.updateAzureMap(this.mapWeather, AzureMapsImageryStyle.WeatherInfrared);
            this.updateAzureMap(this.mapAerial, AzureMapsImageryStyle.Imagery);
            this.updateAzureMap(this.mapRoad, AzureMapsImageryStyle.Road);
        }
        );
    }

    public updateAzureMap = (geoMap: IgrGeographicMap | undefined, style: AzureMapsImageryStyle) => {
        if (!geoMap || !this.state.apiKey) { return; }

        const tileSource = new IgrAzureMapsMapImagery();
        tileSource.apiKey = this.state.apiKey;
        tileSource.imageryStyle = style;
        
        geoMap.backgroundContent = tileSource;

        // optional - navigating to a map region
        MapUtils.navigateTo(geoMap, MapRegion.Caribbean);
    }

    public onDialogRef(dialog: IgrDialog){
        if (!dialog) { return; }
        this.dialogRef = dialog;
    }

    public onDialogShow() {
        if(this.dialogRef){
            this.dialogRef.show();
        }
    }

    public onDialogHide() {
        if(this.dialogRef){
            this.dialogRef.hide();
        }
    }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MapDisplayImageryAzure/>);
