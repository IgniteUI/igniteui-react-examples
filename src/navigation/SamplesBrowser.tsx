import * as React from "react";
import { Route, Switch, Link } from "react-router-dom"

import './SamplesBrowser.css';
import { ChartsRouter }  from "../sample-tests/charts/ChartsRouter"
import { SamplesRouter } from './SamplesRouter';

// http://localhost:3000/samples/charts
// http://localhost:3000/charts

export class SamplesBrowser extends React.Component
{
    // public Routes: any[];

    constructor(props: any) {
        super(props);
        // this.Routes = [];
        console.log("SB ()");


    }

    public render() {
        let navBrowsingMode = SamplesRouter.isBrowsingMode();
        let navStyle = navBrowsingMode ? { display: "flex" } : { display: "none" };

        console.log("SB navBrowsing  " + navBrowsingMode);

        return (
            <div className="sbRoot" >

                <div className="sbNavigation" style={navStyle}>
                    <Link to={`/samples`}>samples home</Link>
                    <Link to={`/samples/charts`}>samples charts </Link>
                    <Link to={`/charts`}>charts</Link>
                </div>

                <div className="sbContent" >
                    <div className="sbToolbar" style={navStyle}>
                    Toolbar
                    </div>
                    <div className="sbSwitch" >
                        <Switch >
                            <Route exact={false} path="/samples/charts" key="charts" component={ChartsRouter}/>
                            <Route exact={false} path="/charts" key="charts" component={ChartsRouter}/>
                            <Route exact={true} path="/">
                                <h3>Please select a component.</h3>
                            </Route>
                            <Route exact={true} path="/samples">
                                <h3>Please select a component.</h3>
                            </Route>
                            <Route exact={true} >
                                <h3>NoPageFound</h3>
                            </Route>
                            {/* <Route component={NoPageFound} /> */}
                        </Switch>
                    </div>

                </div>

            </div>
        );
    }
}

// export default withRouter(SamplesBrowser);