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
        var sbMissing = "https://www.infragistics.com/webcomponents-demos/samples" + sbRoute;

        return (
            <div className="container sample vertical" style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", overflow: "hidden"}}>
            <img style={{maxHeight: "calc(100% - 6rem)", maxWidth: "30rem"}} src="/assets/comingSoon.svg"></img>
            <div style={{background: "#f2f2f2", width: "100%", paddingBottom: "1rem", marginTop: "-0.5rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", overflow: "hidden"}}>
                  <div style={{fontSize: "1.5rem", fontWeight: "bold", textAlign: "center"}}>Coming Soon...</div>
                  <div style={{fontSize: "0.75rem", textAlign: "center"}}>
                      This <a href={sbMissing} title={sbMissing} >example</a> is under development. We are almost done!
                  </div>
                  <div style={{fontSize: "0.75rem", textAlign: "center"}}>
                      <span>
                          Meanwhile, you can explore all Ignite UI for React samples on this <a href={sbHome} target="_blank" rel="noreferrer">website</a>                          
                      </span>
                  </div>
            </div>
          </div>
        );
    }
}