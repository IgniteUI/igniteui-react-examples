import * as React from "react";
import { Component } from "react";
import "../samples/styles.css";

// import * as Loadable from "react-loadable";
// export default class SampleLoading extends React.Component<Loadable.LoadingComponentProps> {

export default class SampleLoading extends Component {

    public static handle(props: any) {
        if (props.isLoading) {
            if (props.timedOut) {
                // When the loader has taken longer than the timeout
                return <div>Loader timed out!</div>;
            } else if (props.pastDelay) {
                // When the loader has taken longer than the delay
                return <div>Loading...</div>;
            } else {
                return null;
            }
        } else if (props.error) {
            // When the loader has errored
            return <div>Error! Sample failed to load.</div>;
        } else {
            // When the loader has just started
            return null;
        }
    }

    public render() {
        return (
            // <div style={{height: "100%", width: "100%", background: "gray" }}>
            <div >
                <p>Loading... </p>
            </div>
        );
    }
}

// export default SampleLoading;

