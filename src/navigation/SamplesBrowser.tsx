import * as React from "react";
import { Route, Switch, Link } from "react-router-dom"
import { withRouter } from 'react-router-dom';

import './Scrollbars.css';
import './SamplesBrowser.css';
import { SamplesRouter } from './SamplesRouter';
import { RoutingSample } from './SamplesData';
// import { ChartsRouter }  from "../sample-tests/charts/ChartsRouter"

import { tests1RoutingData } from "../samples2222/tests1/Tests1Routes";
import { Tests2Routes } from "../samples2222/tests2/Tests2Routes";

// http://localhost:3000/samples/charts
// http://localhost:3000/charts

export class SamplesBrowser extends React.Component<any, any>
{
    public test1Links: any[];
    public test1Routes: any[];
    public test2Links: any[];
    public test2Routes: any[];

    constructor(props: any) {
        super(props);
        // this.Routes = [];
        console.log("SB ()");

        this.onSampleOpen = this.onSampleOpen.bind(this);
        // console.log(TestsRoutes.DataRoutes);
        this.test1Links = SamplesRouter.getLinks(tests1RoutingData, this.onSampleOpen);
        this.test1Routes = SamplesRouter.getRoutes(tests1RoutingData);

        this.test2Links = SamplesRouter.getLinks(Tests2Routes.DataRoutes, this.onSampleOpen);
        this.test2Routes = SamplesRouter.getRoutes(Tests2Routes.DataRoutes);

        this.state = {
            SelectedSample: 'react samples browser',
        }
    }

    public onSampleOpen = (sample: RoutingSample) => {
        // const item = event.currentTarget.id;
        // console.log('onControlClick ' + item);
        this.setState({
            SelectedSample: sample.name,
        });
    };

    public componentDidUpdate(prevProps: any) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            console.log('Route change!');
        }
    }

    public render() {
        let navBrowsingMode = SamplesRouter.isBrowsingMode();
        let navStyle = navBrowsingMode ? { display: "flex" } : { display: "none" };

        console.log("SB render  " + navBrowsingMode);

        return (
            <div className="sbRoot" >

                <div className="sbNavigation" style={navStyle}>
                    {/* <Link to={`/`}>Samples root</Link>
                    <Link to={`/samples`}>Samples home</Link> */}
                    {/* <Link to={`/samples/charts`}>samples charts </Link> */}
                    {/* <Link to={`/charts`}>charts</Link> */}
                    {this.test1Links}
                    {this.test2Links}
                    {/* {this.test1Links}
                    {this.test2Links} */}
                </div>

                <div className="sbContent" >
                    <div className="sbToolbar" style={navStyle}>
                    {this.state.SelectedSample}
                    </div>
                    <div className="sbSwitch" >
                        <Switch >
                            {/* <Route exact={false} path="/samples/charts" key="charts" component={ChartsRouter}/> */}
                            {/* <Route exact={false} path="/charts" key="charts" component={ChartsRouter}/> */}
                            <Route exact={true} path="/"  >
                                <h3>Please select a component.</h3>
                            </Route>
                            <Route exact={true} path="/samples">
                                <h3>Please select a component.</h3>
                            </Route>
                            {this.test1Routes}
                            {this.test2Routes}

                            {/* <Route exact={true} >
                                <h3>NoPageFound exact=true</h3>
                            </Route> */}
                            <Route exact={false} >
                                <h3>NoPageFound exact=false</h3>
                            </Route>
                            {/* <Route component={NoPageFound} /> */}
                        </Switch>
                    </div>

                </div>

            </div>
        );
    }
}

export default withRouter(SamplesBrowser);