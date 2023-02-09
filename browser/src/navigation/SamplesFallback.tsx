import * as React from "react";
import './SamplesFallback.css'

export class SamplesFallback extends React.Component<any, any> {

    public render(): JSX.Element {

        let sbRoute = window.location.pathname;
        sbRoute = sbRoute.replace("/react-demos","");
        sbRoute = sbRoute.replace("/samples","");
        let sbUrl = window.location.origin;
        if (sbUrl.indexOf("localhost") >= 0) {
            sbUrl = "https://localhost:4200/react-demos/samples";
        } else if (sbUrl.indexOf("staging.infragistics.com") >= 0) {
            sbUrl = "https://staging.infragistics.com/react-demos/samples";
        } else  { // we are on production{ // we are on production
            sbUrl = "https://infragistics.com/react-demos/samples";
        }

        var sbHome    = "https://www.infragistics.com/react-demos/samples";
        var sbMissing = "https://www.infragistics.com/react-demos" + sbRoute;

        return (
            <div className="container sample vertical sbFallbackContainer">
            <img className="sbFallbackIcon" src="/assets/comingSoon.svg"></img>
            <div className="sbFallbackBackground">
                  <div className="sbFallbackHeader">Coming Soon...</div>
                  <div className="sbFallbackCaption">
                      This <a href={sbMissing} title={sbRoute} >example</a> is under development. We are almost done!
                  </div>
                  <div className="sbFallbackCaption">
                      <span>
                          Meanwhile, you can explore all Ignite UI for React samples on this <a href={sbHome} target="_blank" rel="noreferrer">website</a>                          
                      </span>
                  </div>
            </div>
          </div>
        );
    }
}
