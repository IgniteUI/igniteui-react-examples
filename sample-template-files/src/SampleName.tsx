import * as React from "react";
import "./sandbox.config.json"; // required for code sandbox

import "./styles.css"; // styles shared between all samples
import "./SampleName.css"; // styles specific to only this sample

export default class SampleName extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="igFlex">
                <div className="igControl" >
                    TODO add IG component here
                </div>
            </div>
        );
    }

    public componentDidMount() {
        //
    }

}
