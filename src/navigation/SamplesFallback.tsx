import * as React from "react";
import './SamplesFallback.css'

export class SamplesFallback extends React.Component<any, any>
{
    constructor(props: any) {
        super(props);
    }

    public render() {

        let sbRoute = window.location.pathname;
        sbRoute = sbRoute.replace("/react-demos","");
        sbRoute = sbRoute.replace("/samples","");
        let sbUrl = window.location.origin;
        if (sbUrl.indexOf("localhost") >= 0) {
            sbUrl = "https://http://localhost:4200/react-demos/samples";
        } else if (sbUrl.indexOf("staging.infragistics.com") >= 0) {
            sbUrl = "https://staging.infragistics.com/react-demos/samples";
        } else  { // we are on production{ // we are on production
            sbUrl = "https://infragistics.com/react-demos/samples";
        }

        return (
            <div className="sbFallback">
                <div className="sbFallbackInfo">Cannot find a sample with routing path:</div>
                <div className="sbFallbackRoute">{sbRoute}</div>
                <div className="sbFallbackSuggestion">Open<a className="sbFallbackUrl" target="_blank" href={sbUrl} rel="noopener noreferrer"> React samples browser</a></div>
            </div>
        );
    }
}